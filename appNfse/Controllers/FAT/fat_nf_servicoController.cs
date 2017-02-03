namespace Controllers.FAT
{
    using Infra.Base;
    using Infra.Base.Interface.Base;
    using Models.FAT;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Data.Entity;
    using System.Linq;
    using System.Net;
    using System.Net.Http;
    using System.Web.Http;
    using System.Web.Http.Description;

    public class Fat_nf_servicoController : CrudControllerBase<FAT_NF_SERVICO>
    {
        protected override IOrderedQueryable<FAT_NF_SERVICO> Ordenar(IQueryable<FAT_NF_SERVICO> query)
        {
            return query.OrderBy(e => e.id);
        }

        protected override IHttpActionResult ExecutarAntesPost(FAT_NF_SERVICO item)
        {
            string Generator = "FAT_NF_SERVICO_" + item.SERIE + "_" + item.CEMP;
            try
            {
                var fb = new FuncoesBanco(db);
                item.NUMERO = fb.BuscarPKRegistro(Generator);
                return null;
            }
            catch
            {
                return Content(HttpStatusCode.Accepted, new { mensagem_erro = "Problema com generator da tabela " + Generator });                               
            }
        }

        protected override void BeforeReturn(FAT_NF_SERVICO item)
        {
            var cli = db.CAD_COLABORADOR
                    .Where(b => b.id == item.COD_CADCLI)
                    .FirstOrDefault();

            item.CLIENTE_NOME = cli.FANTASIA;
            item.CLIENTE_CODIGO = cli.CODIGO;
        }

        protected override IQueryable<FAT_NF_SERVICO> TrazerDadosParaEdicao(IQueryable<FAT_NF_SERVICO> query)
        {
            return base.TrazerDadosParaEdicao(query).Include(i => i.lista_Itens);
        }

        protected override void InternalUpdate(FAT_NF_SERVICO item)
        {
            AtualizarRelacionamento(item, item.lista_Itens, it => it.id);
        }

    }

}
