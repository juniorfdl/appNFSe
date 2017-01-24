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

    public class cad_servico_impostoController : CrudControllerBase<CAD_SERVICO_IMPOSTO>
    {
        protected override IOrderedQueryable<CAD_SERVICO_IMPOSTO> Ordenar(IQueryable<CAD_SERVICO_IMPOSTO> query)
        {
            return query.OrderBy(e => e.id);
        }
       
    }    
    
}
