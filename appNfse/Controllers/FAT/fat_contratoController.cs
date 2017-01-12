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

    public class Fat_contratoController : CrudControllerBase<FAT_CONTRATO>
    {
        protected override IOrderedQueryable<FAT_CONTRATO> Ordenar(IQueryable<FAT_CONTRATO> query)
        {
            return query.OrderBy(e => e.id);
        }

        protected override void ExecutarAntesPost(FAT_CONTRATO item)
        {
            var max = db.Set<FAT_CONTRATO>().Max(c => c.CODIGO);           

            item.CODIGO = max + 1;

        }

    }    
    
}
