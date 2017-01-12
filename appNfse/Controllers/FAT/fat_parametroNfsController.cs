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

    public class Fat_parametroNfsController : CrudControllerBase<FAT_PARAMETRO_NFS>
    {
        protected override IOrderedQueryable<FAT_PARAMETRO_NFS> Ordenar(IQueryable<FAT_PARAMETRO_NFS> query)
        {
            return query.OrderBy(e => e.id);
        }

    }    
    
}
