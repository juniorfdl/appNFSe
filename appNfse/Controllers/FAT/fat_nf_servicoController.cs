namespace Controllers.FAT
{
    using Infra.Base;
    using Infra.Base.Interface.Base;
    using Models.FAT;
    using Models.Cadastros;
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
    using Controllers.FAT;

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
            var cli = db.VIEW_CADCLI
                    .Where(b => b.id == item.COD_CADCLI)
                    .FirstOrDefault();

            item.CLIENTE_NOME = cli.DESCRICAO;
            item.CLIENTE_CODIGO = cli.COD;
        }

        protected override IQueryable<FAT_NF_SERVICO> TrazerDadosParaEdicao(IQueryable<FAT_NF_SERVICO> query)
        {
            return base.TrazerDadosParaEdicao(query).Include(i => i.lista_Itens);
        }

        protected override void InternalUpdate(FAT_NF_SERVICO item)
        {
            AtualizarRelacionamento(item, item.lista_Itens, it => it.id);
        }

        [Route("api/fat_nf_servico/GetValoresImpostos")]
        [HttpGet]
        public IHttpActionResult GetValoresImpostos([FromUri]FAT_NF_SERVICO filtros)
        {
            END_CIDADES cid = db.Set<END_CIDADES>().Where(f => f.NOME_CIDADE == filtros.CID).FirstOrDefault();
            CAD_SERVICO_IMPOSTO item = db.Set<CAD_SERVICO_IMPOSTO>()
                .Where(w => w.CODIGO_CIDADE == cid.id &
                      w.COD_CADSERVICO == filtros.COD_CADSERVICO).FirstOrDefault();

            return Ok(item);
        }

        [Route("api/fat_nf_servico/Start")]
        [HttpGet]
        public IHttpActionResult Start(string CEMP)
        {
            FAT_PARAMETRO_NFS param = db.Set<FAT_PARAMETRO_NFS>().Where(f => f.CEMP == CEMP).FirstOrDefault();
            FAT_NF_SERVICO_START item = new FAT_NF_SERVICO_START();
            item.COD_CADBANCO = param.COD_CADBANCO;
            item.COD_CADCPAG_PADRAO = param.COD_CADCPAG_PADRAO;
            item.ISS_RETIDO = param.ISS_RETIDO;
            item.NATUREZA_PADRAO = param.NATUREZA_PADRAO;
            item.SERIE_PADRAO = param.SERIE_PADRAO;
            item.TIPO_SERVICO = param.TIPO_SERVICO;
            item.DATA_EMISSAO = DateTime.Now;
            item.ANO_COMPETENCIA = DateTime.Now.Year;

            var Bancos = db.Set<CAD_BANCO>().Where(f => f.CEMP == CEMP || f.CEMP == "0");            
            item.lista_Bancos = Bancos;
            
            item.Lista_Natureza = db.Set<TABELA_NOMES>().Where(f => f.SISTEMA == "FAT" && f.TIPO == "01");
                        
            item.lista_CondPagamento = db.Set<CAD_COND_PAGAMENTO>().Where(f => f.CEMP == CEMP || f.CEMP == "0");

            item.lista_CadServico = db.Set<CAD_SERVICO>().Where(f => f.CEMP == CEMP || f.CEMP == "0");

            return Ok(item);
        }


    }

}
