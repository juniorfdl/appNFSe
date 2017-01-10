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

    public class tabela_NomesController : CrudControllerBase<TABELA_NOMES>
    {
        protected override IOrderedQueryable<TABELA_NOMES> Ordenar(IQueryable<TABELA_NOMES> query)
        {
            return query.OrderBy(e => e.id);
        }
       
    }    
    
}
