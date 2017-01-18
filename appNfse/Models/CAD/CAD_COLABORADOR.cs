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

    public class CAD_COLABORADOR : IEntidadeBase
    {
        [Key]
        [Column("COD_CADCOLABORADOR")]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int id { get; set; }
        [Required]
        [Display(Name = "Nome Fantasia")]
        [StringLength(60)]
        public string FANTASIA { get; set; }

        [StringLength(02)]
        public string CEMP { get; set; }

        [Display(Name = "Código")]
        [Required]
        public int CODIGO { get; set; }

        public string TCLI { get; set; }

    }
}
