namespace Models.FAT
{
    using Cadastros;
    using Infra.Base.Interface;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class FAT_NF_SERVICO_START 
    {
        public int COD_CADBANCO { get; set; }
        public int TIPO_SERVICO { get; set; }
        public string SERIE_PADRAO { get; set; }
        public int NATUREZA_PADRAO { get; set; }
        public int COD_CADCPAG_PADRAO { get; set; }
        public string ISS_RETIDO { get; set; }
        public DateTime DATA_EMISSAO { get; set; }
        public int ANO_COMPETENCIA { get; set; }

        public virtual dynamic lista_Bancos { get; set; }
        public virtual dynamic Lista_Natureza { get; set; }
        public virtual dynamic lista_CondPagamento { get; set; }
        public virtual dynamic lista_CadServico { get; set; }        
    }
}
