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
    
    public class v_fat_nf_servicoController : CrudControllerBase<V_FAT_NF_SERVICO>
    {
        protected override IOrderedQueryable<V_FAT_NF_SERVICO> Ordenar(IQueryable<V_FAT_NF_SERVICO> query)
        {
            return query.OrderBy(e => e.id);
        }
        
    }

}
