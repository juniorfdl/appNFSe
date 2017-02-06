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

    public class v_cons_cad_servico_impostoController : CrudControllerBase<V_CONS_CAD_SERVICO_IMPOSTO>
    {
        protected override IOrderedQueryable<V_CONS_CAD_SERVICO_IMPOSTO> Ordenar(IQueryable<V_CONS_CAD_SERVICO_IMPOSTO> query)
        {
            return query.OrderBy(e => e.id);
        }
       
    }    
    
}
