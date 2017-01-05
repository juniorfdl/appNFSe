﻿namespace Infra.Base.Interface.Base
{
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Core;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Validation;
    using System.Data.SqlClient;
    using System.Linq;
    using System.Linq.Expressions;
    using System.Net;
    using System.Reflection;
    using System.Text;
    using System.Threading.Tasks;
    using System.Web.Http;
    using System.Web.Http.Description;
    using Infra.Base;
    using System.Globalization;

    public abstract class CrudController<T, TProjecao> : ControllerBase, IDisposable
        where T : class, IEntidadeBase
        where TProjecao : T
    {
        protected virtual IQueryable<TProjecao> Filtrar(IQueryable<TProjecao> query, string termoDePesquisa, string campoPesquisa)
        {
            if (string.IsNullOrEmpty(termoDePesquisa) || string.IsNullOrEmpty(campoPesquisa)) return query;

            var parameter = Expression.Parameter(typeof(TProjecao), "p");
            var propertyInfo = typeof(TProjecao).GetProperty(campoPesquisa, BindingFlags.Instance | BindingFlags.Public | BindingFlags.IgnoreCase);
            var property = Expression.Property(parameter, propertyInfo);
            Expression body = null;

            try
            {
                if (campoPesquisa == "CEMP")
                {
                    body = Expression.Equal(property, Expression.Constant(termoDePesquisa));
                }
                else
                if (propertyInfo.PropertyType == typeof(int))
                {
                    var asInt32 = Convert.ToInt32(termoDePesquisa);
                    body = Expression.Equal(property, Expression.Constant(asInt32));
                }
                else
                if (propertyInfo.PropertyType == typeof(string))
                {
                    body = Expression.Call(property,
                        "Contains",
                        null,
                        Expression.Constant(termoDePesquisa));
                }

                else if (propertyInfo.PropertyType == typeof(DateTime))
                {
                    var asDateTime = Convert.ToDateTime(termoDePesquisa);
                    body = Expression.Equal(property, Expression.Constant(asDateTime));
                }
            }
            catch (FormatException)
            {
                return query.Take(0);
            }
            var filterExp = Expression.Lambda<Func<TProjecao, bool>>(body, parameter);

            return query.Where(filterExp);
        }
        protected virtual IOrderedQueryable<TProjecao> Ordenar(IQueryable<TProjecao> query) { return query.OrderBy(it => it.id); }
        protected virtual IQueryable<T> TrazerDadosParaEdicao(IQueryable<T> query) { return query; }
        protected virtual IQueryable<TProjecao> TrazerDadosParaLista(IQueryable<TProjecao> query) { return query; }

        protected virtual void InternalUpdate(T item) { }

        private IList<Action> _scheduledActions;
        protected void ExecutarAposTransacao(Action action)
        {
            if (_scheduledActions == null) _scheduledActions = new List<Action>();
            _scheduledActions.Add(action);
        }

        protected virtual void ExecutarAntesPost(T item)
        {
        }

        protected virtual void BeforeReturn(T item)
        {
            //if (typeof(IRaizDeAgregacao).IsAssignableFrom(typeof(T)))
            //{
            //    ((IRaizDeAgregacao)item).Flag = null;
            //}
            if (_scheduledActions != null)
            {
                foreach (var acao in _scheduledActions)
                {
                    acao();
                }
                _scheduledActions = null;
            }
        }

        protected virtual void BeforeSaveChanges(T item)
        {
        }

        [NonAction]
        protected virtual void ExecutarMenu() { }

        protected abstract Expression<Func<T, TProjecao>> Selecionar();

        // GET: api/T
        [HttpGet]
        public ResultadoDaBusca<TProjecao> Get(string empresa, string termo = null, string campoOrdenacao = null, bool direcaoAsc = true, int pagina = 1, int itensPorPagina = 0, string campoPesquisa = "")
        {
            var queryOriginal = db.Set<T>().AsQueryable().Select(this.Selecionar());

            if (!string.IsNullOrWhiteSpace(termo))
            {
                queryOriginal = this.Filtrar(queryOriginal, termo, campoPesquisa);
            }

            if (!string.IsNullOrWhiteSpace(empresa))
            {
                queryOriginal = this.Filtrar(queryOriginal, empresa, "CEMP");
            }

            var queryRetorno = queryOriginal;
            if (campoOrdenacao != null)
            {
                queryRetorno = queryRetorno.OrderBy(campoOrdenacao, direcaoAsc);
            }
            else
            {
                queryRetorno = this.Ordenar(queryRetorno);
            }

            if (itensPorPagina > 0)
            {
                if (pagina > 1)
                    queryRetorno = queryRetorno.Skip((pagina - 1) * itensPorPagina);
                queryRetorno = queryRetorno.Take(itensPorPagina);
            }


            return new ResultadoDaBusca<TProjecao>
            {
                lista = this.TrazerDadosParaLista(queryRetorno),
                totalCount = queryOriginal.Count()
            };
        }

        //GET: api/T/5
        // TODO: verificar se é possível restrigir IDs para valores numéricos, na rota

        [Route("/{id:int:min(1)}")]
        public IHttpActionResult Get(int id)
        {
            T item = this.TrazerDadosParaEdicao(db.Set<T>()).FirstOrDefault(e => e.id == id);
            if (item == null)
            {
                return NotFound();
            }

            BeforeReturn(item);
            return Ok(item);
        }

        private class ChaveEstrangeira
        {
            public object ObjetoPrincipal { get; set; }
            public string NomePropriedade { get; set; }
            public object ValorOriginal { get; set; }
        }

        private IList<ChaveEstrangeira> EncontrarObjetos(object item)
        {
            var lista = new List<ChaveEstrangeira>();
            var objetosNoGrafo = new Stack<object>();
            objetosNoGrafo.Push(item);

            do
            {
                var principal = objetosNoGrafo.Pop();
                var props = principal.GetType().GetProperties();

                var propsFK = props.Where(p => p.Name.StartsWith("Codigo") && p.PropertyType == typeof(int) && (int)p.GetValue(principal) == 0);
                foreach (var prop in propsFK)
                {
                    lista.Add(new ChaveEstrangeira
                    {
                        ObjetoPrincipal = principal,
                        NomePropriedade = prop.Name,
                        ValorOriginal = prop.GetValue(principal)
                    });
                }

                var propsNavegacao = props.Where(pi => pi.PropertyType.IsInterface || pi.PropertyType.IsClass && pi.PropertyType != typeof(string));
                foreach (var prop in propsNavegacao)
                {

                    object objetoRelacionado = null;

                    try
                    {
                        objetoRelacionado = prop.GetValue(principal);
                    }
                    catch
                    {
                        break;
                    }

                    if (objetoRelacionado != null)
                    {
                        if (objetoRelacionado is IEnumerable)
                        {
                            foreach (var objetoDetalhe in objetoRelacionado as IEnumerable)
                            {
                                objetosNoGrafo.Push(objetoDetalhe);
                            }
                        }
                        else
                        {
                            objetosNoGrafo.Push(objetoRelacionado);
                        }
                    }
                }

            } while (objetosNoGrafo.Any());

            return lista;
        }

        // PUT: api/T/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Put(int id, T item)
        {
            //if (typeof(IRaizDeAgregacao).IsAssignableFrom(typeof(T)))
            //{
            //    ((IRaizDeAgregacao)item).Flag = true;
            //    ModelState["item.Flag"].Errors.Clear();
            //}

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            //if (id != item.Id)
            //{
            //return BadRequest();
            //}

            var objetos = EncontrarObjetos(item);

            var colecoes = new Dictionary<PropertyInfo, object>();
            foreach (var prop in typeof(T).GetProperties().Where(pi => typeof(IEnumerable<object>).IsAssignableFrom(pi.PropertyType)))
            {
                colecoes[prop] = prop.GetValue(item);
                prop.SetValue(item, null);
            }
            db.Entry(item).State = EntityState.Modified;
            foreach (var salvo in colecoes)
            {
                salvo.Key.SetValue(item, salvo.Value);
            }

            InternalUpdate(item);

            foreach (var obj in objetos)
            {
                if (db.Entry(obj.ObjetoPrincipal).State == EntityState.Modified)
                {
                    db.Entry(obj.ObjetoPrincipal).State = EntityState.Deleted;
                }
            }

            using (var dbContextTransaction = db.Database.BeginTransaction())
            {
                try
                {
                    BeforeSaveChanges(item);
                    db.SaveChanges();
                    dbContextTransaction.Commit();
                }
                catch (DbUpdateConcurrencyException e)
                {
                    dbContextTransaction.Rollback();
                    if (!ItemExiste(id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        var atual = e.Entries.First().GetDatabaseValues();
                        var paraSalvar = db.Entry(item).CurrentValues;
                        var conc = atual.PropertyNames.Where(prop => !atual.GetValue<object>(prop).Equals(paraSalvar.GetValue<object>(prop)));
                        var lista = conc.Select(prop => new KeyValuePair<string, string>(prop, atual.GetValue<string>(prop)));

                        //throw new ConcorrenciaException() { Erros = lista };
                    }
                }
                catch (DbUpdateException)
                {
                    dbContextTransaction.Rollback();
                    throw;
                }
                catch (DbEntityValidationException)
                {
                    dbContextTransaction.Rollback();
                    // TODO: rever implementação
                    //db.LogarEntidades(db.ChangeTracker.Entries());
                    throw;
                }
            }

            BeforeReturn(item);

            //return StatusCode(HttpStatusCode.NoContent);
            return Content(HttpStatusCode.OK, item);
        }

        // POST: api/T
        //[ResponseType(typeof(T))]
        //[ResponseType(typeof(void))]
        public IHttpActionResult Post(T item)
        {
            //if (typeof(IRaizDeAgregacao).IsAssignableFrom(typeof(T)))
            //{
            //    ((IRaizDeAgregacao)item).Flag = true;
            //    ModelState["item.Flag"].Errors.Clear();
            //}

            ExecutarAntesPost(item);

            if (item.id == 0)
            {
                var fb = new FuncoesBanco(db);
                item.id = fb.BuscarPKRegistro(item.GetType().Name);
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            //var result = ValidarNovaEntidade(item);
            //if (result != null)
            //{
            //    return result;
            //}

            db.Set<T>().Add(item);

            InternalUpdate(item);
            using (var dbContextTransaction = db.Database.BeginTransaction())
            {
                try
                {
                    BeforeSaveChanges(item);
                    db.SaveChanges();
                    dbContextTransaction.Commit();
                }
                catch (DbUpdateException e)
                {
                    dbContextTransaction.Rollback();
                    if (ItemExiste(item.id))
                    {
                        return Content(HttpStatusCode.Accepted, new { mensagem_erro = "Registro já existe!" });
                        //return Conflict();
                    }
                    else
                    {
                        if (e.InnerException != null)
                            return Content(HttpStatusCode.Accepted, new { mensagem_erro = e.InnerException.InnerException.Message });
                        else
                            return Content(HttpStatusCode.Accepted, new { mensagem_erro = e.Message });
                    }
                }
                catch (DbEntityValidationException e)
                {
                    dbContextTransaction.Rollback();

                    if (e.InnerException != null)
                        return Content(HttpStatusCode.Accepted, new { mensagem_erro = e.InnerException.InnerException.Message });
                    else
                        return Content(HttpStatusCode.Accepted, new { mensagem_erro = e.Message });
                }
            }

            BeforeReturn(item);
            return CreatedAtRoute("DefaultApi", new { id = item.id }, item);
        }

        private IHttpActionResult ValidarNovaEntidade(IEntidadeBase item)
        {
            if (item.id != 0)
                return BadRequest();

            var colecoes = new Dictionary<PropertyInfo, IEnumerable<IEntidadeBase>>();
            foreach (var prop in item.GetType().GetProperties().Where(pi => typeof(IEnumerable<IEntidadeBase>).IsAssignableFrom(pi.PropertyType)))
            {
                colecoes[prop] = prop.GetValue(item) as IEnumerable<IEntidadeBase>;
            }
            foreach (var salvo in colecoes)
            {
                foreach (var subItem in salvo.Value)
                {
                    var result = ValidarNovaEntidade(subItem);
                    if (result != null) return result;
                }
            }

            return null;
        }

        // DELETE: api/T/5
        //[ResponseType(typeof(T))]
        public IHttpActionResult Delete(int id)
        {
            T item = this.TrazerDadosParaEdicao(db.Set<T>()).FirstOrDefault(e => e.id == id);
            if (item == null)
            {
                return NotFound();
            }

            db.Set<T>().Remove(item);
            try
            {
                //using (var scope = new TransactionScope())
                {
                    db.SaveChanges();

                    //  scope.Complete();
                }
            }
            catch (DbUpdateException ex)
            {
                Exception inner = ex;
                do
                {
                    inner = inner.InnerException;

                    if (inner is SqlException)
                        return this.BadRequest("Este registro não pode ser excluído pois se encontra em uso pelo sistema.");
                } while (inner != null);

                throw;
            }

            return Ok(item);
        }

        private bool ItemExiste(int id)
        {
            return db.Set<T>().Count(e => e.id == id) > 0;
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }

    public abstract class CrudControllerBase<T> : CrudController<T, T>
        where T : class, IEntidadeBase
    {
        protected override Expression<Func<T, T>> Selecionar()
        {
            return item => item;
        }

    }
}
