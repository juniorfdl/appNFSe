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

    public class CAD_BANCO : IEntidadeBase
    {
        [Key]
        [Column("COD_CADBANCO")]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int id { get; set; }
        [Required]
        [Display(Name = "Nome")]
        [StringLength(40)]
        public string NOME { get; set; }        
        
        public string CEMP { get; set; }

        [Display(Name = "Código")]
        [Required]
        public int CODIGO { get; set; }

        [Required]
        [Display(Name = "Câmara Compensação")]
        public int COD_CADCAMARACOMPENSACAO { get; set; }

        [Required]
        [Display(Name = "Tipo")]
        [StringLength(01)]
        public string TIPO { get; set; }

        public int? CODIGO_AGENCIA { get; set; }

        public int? DIGITO_CODIGO_AGENCIA { get; set; }

        public int? NUMERO_CONTA { get; set; }

        public string FONE { get; set; }

    }
}
