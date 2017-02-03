namespace Models.FAT
{
    using Infra.Base.Interface;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using System.Collections.ObjectModel;

    public class FAT_NF_SERVICO : IEntidadeBase
    {
        public FAT_NF_SERVICO()
        {
            this.lista_Itens = new Collection<FAT_NF_SERVICO_ITEM>();
        }

        [Key]
        [Column("COD_FATNFSERVICO")]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int id { get; set; }        
        [Display(Name = "Nro Nota")]
        public int NUMERO { get; set; }
        [Required]
        [Display(Name = "Série")]
        [StringLength(5)]
        public string SERIE { get; set; }
        [Required]
        public string CFIL { get; set; }
        [Required]
        public string CEMP { get; set; }
        [Required]
        [Display(Name = "Cliente")]
        public int COD_CADCLI { get; set; }
        [Required]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}")]
        [DataType(DataType.Date)]
        [Display(Name = "Data Emissão")]
        public DateTime DATA_EMISSAO { get; set; }
        [Required]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}")]
        [DataType(DataType.Date)]
        [Display(Name = "Data de Vencimento")]
        public DateTime DATA_VENCIMENTO { get; set; }
        [Required]
        [Display(Name = "Banco")]
        public int COD_CADBANCO { get; set; }
        [Required]
        [Display(Name = "Valor Total")]
        public decimal VALOR_TOTAL { get; set; }
        [Required]
        [Display(Name = "Valor Liquido")]
        public decimal VALOR_LIQUIDO { get; set; }
        [Required]
        [Display(Name = "Código do Serviço")]
        public decimal COD_CADSERVICO { get; set; }

        [Display(Name = "Competência")]
        public string COMPETENCIA { get; set; }
        [Display(Name = "Situação")]
        public string SITUACAO { get; set; }
        public decimal? VALOR_DESCONTO { get; set; }
        public decimal? ISSQN_BASE { get; set; }
        public decimal? ISSQN_ALIQUOTA { get; set; }
        public decimal? ISSQN_VALOR { get; set; }
        public decimal? IRRF_BASE { get; set; }
        public decimal? IRRF_ALIQUOTA { get; set; }
        public decimal? IRRF_VALOR { get; set; }
        public decimal? CSLL_BASE { get; set; }
        public decimal? CSLL_ALIQUOTA { get; set; }
        public decimal? CSLL_VALOR { get; set; }
        public decimal? COFINS_BASE { get; set; }
        public decimal? COFINS_ALIQUOTA { get; set; }
        public decimal? COFINS_VALOR { get; set; }
        public decimal? PIS_BASE { get; set; }
        public decimal? PIS_ALIQUOTA { get; set; }
        public decimal? PIS_VALOR { get; set; }
        public int? COD_CADCPAG { get; set; }
        public int? NATUREZA_OPERACAO { get; set; }
        public string OBSERVACAO { get; set; }

        public decimal? INSS_BASE { get; set; }
        public decimal? INSS_ALIQUOTA { get; set; }
        public decimal? INSS_VALOR { get; set; }
        public string ISS_RETIDO { get; set; }
        public string DISCRIMINACAO { get; set; }
        public string OBS_MONTADA { get; set; }
        public string RPSSUBSTITUIDO { get; set; }
       // public string CIDADE_SERVICO { get; set; }
        //public string UF_SERVICO { get; set; }
        public int? MES_COMPETENCIA { get; set; }
        public int? ANO_COMPETENCIA { get; set; }
        public int? ANO_EMISSAO { get; set; }

        [NotMapped]
        public String CLIENTE_NOME { get; set; }
        [NotMapped]
        [Required]
        [Display(Name = "Cliente")]
        public int? CLIENTE_CODIGO { get; set; }

        public virtual ICollection<FAT_NF_SERVICO_ITEM> lista_Itens { get; set; }
    }
}
