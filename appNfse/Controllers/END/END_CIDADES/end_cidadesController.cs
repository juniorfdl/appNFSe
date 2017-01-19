namespace Controllers.END
{
    using Infra.Base.Interface.Base;
    using Models.END;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Data.Entity;
    using System.Linq;
    using System.Net;
    using System.Net.Http;
    using System.Web.Http;
    using System.Web.Http.Description;

    public class end_cidadesController : CrudControllerBase<END_CIDADES>
    {
        protected override IOrderedQueryable<END_CIDADES> Ordenar(IQueryable<END_CIDADES> query)
        {
            return query.OrderBy(e => e.id);
        }

        [Route("api/end_cidades/endcidadesLook")]
        [HttpGet]
        public dynamic tabelanomeLook([FromUri]END_CIDADES filtros)
        {
            var cid = from m in db.Set<END_CIDADES>()
                      orderby m.NOME_CIDADE
                      where m.NOME_CIDADE.ToUpper().StartsWith(filtros.NOME_CIDADE.ToUpper())
                      select m;
            return cid;
        }

    }

}
