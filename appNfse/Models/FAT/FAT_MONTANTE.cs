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

    public class FAT_MONTANTE : IEntidadeBase
    {
        [Key]
        [Column("COD_FATMONTANTE")]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int id { get; set; }
        public int CODIGO { get; set; }
        [Required]
        public string DESCRICAO { get; set; }
        [Required]
        public int COD_CADCOLABORADOR { get; set; }
        [Required]
        public DateTime DATA_INICIAL { get; set; }
        [Required]
        public DateTime DATA_FINAL{ get; set; }
        [Required]
        public decimal? VALOR_MONTANTE { get; set; }
        public DateTime DATA_REAJUSTE { get; set; }
        public string CALC_INSS { get; set; }
        public string CAL_ISS { get; set; }
        public string CAL_IRRF { get; set; }
        public string CAL_PIS { get; set; }
        public string CAL_COFINS { get; set; }
        public string CAL_CSSL { get; set; }
        public string EXIGE_QUANTIDADE { get; set; }
        public string CEMP { get; set; }

    }
}
