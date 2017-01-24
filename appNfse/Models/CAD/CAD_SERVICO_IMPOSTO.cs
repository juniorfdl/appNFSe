namespace Models.Cadastros
{
    using Infra.Base.Interface;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class CAD_SERVICO_IMPOSTO : IEntidadeBase
    {
        [Key]
        [Column("COD_CADSERVICOIMPOSTO")]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int id { get; set; }

        [Required]
        [Display(Name = "Código Cidade")]
        public int CODIGO_CIDADE { get; set; }        
        
        public string CEMP { get; set; }

        [Required]
        [Display(Name = "Código Serviço")]
        public int COD_CADSERVICO { get; set; }

        [Display(Name ="Valor ISS")]
        public decimal? ISS_VLR { get; set; }
        [Display(Name = "Percentual ISS")]
        public decimal? ISS_PERC { get; set; }

        [Display(Name = "Valor IRRF")]
        public decimal? IRR_VLR { get; set; }
        [Display(Name = "Percentual IRRF")]
        public decimal? IRR_PERC { get; set; }

        [Display(Name = "Valor PIS")]
        public decimal? PIS_VLR { get; set; }
        [Display(Name = "Percentual PIS")]
        public decimal? PIS_PERC { get; set; }

        [Display(Name = "Valor Cofins")]
        public decimal? COFINS_VLR { get; set; }
        [Display(Name = "Percentual Cofins")]
        public decimal? COFINS_PERC { get; set; }

        [Display(Name = "Valor CSSL")]
        public decimal? CSLL_VLR { get; set; }
        [Display(Name = "Percentual CSSL")]
        public decimal? CSLL_PERC { get; set; }

        [Display(Name = "Valor INSS")]
        public decimal? INSS_VLR { get; set; }
        [Display(Name = "Percentual INSS")]
        public decimal? INSS_PERC { get; set; }

    }
}
