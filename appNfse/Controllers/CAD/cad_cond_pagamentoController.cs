namespace Controllers.CAD
{
    using Infra.Base.Interface.Base;
    using Models.Cadastros;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Data.Entity;
    using System.Linq;
    using System.Net;
    using System.Net.Http;
    using System.Web.Http;
    using System.Web.Http.Description;

    public class Cad_cond_pagamentoController : CrudControllerBase<CAD_COND_PAGAMENTO>
    {
        protected override IOrderedQueryable<CAD_COND_PAGAMENTO> Ordenar(IQueryable<CAD_COND_PAGAMENTO> query)
        {
            return query.OrderBy(e => e.id);
        }

        protected override IQueryable<CAD_COND_PAGAMENTO> TrazerDadosParaEdicao(IQueryable<CAD_COND_PAGAMENTO> query)
        {
            return base.TrazerDadosParaEdicao(query).Include(i => i.lista_dias);
        }

        protected override void InternalUpdate(CAD_COND_PAGAMENTO item)
        {                    
            AtualizarRelacionamento(item,item.lista_dias, it => it.id);    
        }

    }

}
