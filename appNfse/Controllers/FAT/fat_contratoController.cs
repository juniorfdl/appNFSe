namespace Controllers.FAT
{
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

    public class Fat_MONTANTEController : CrudControllerBase<FAT_MONTANTE>
    {
        protected override IOrderedQueryable<FAT_MONTANTE> Ordenar(IQueryable<FAT_MONTANTE> query)
        {
            return query.OrderBy(e => e.id);
        }

        protected override IHttpActionResult ExecutarAntesPost(FAT_MONTANTE item)
        {
            var max = db.Set<FAT_MONTANTE>().Max(c => c.CODIGO);           

            item.CODIGO = max + 1;

            return null;
        }

    }    
    
}
