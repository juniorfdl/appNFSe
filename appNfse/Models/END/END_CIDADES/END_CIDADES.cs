namespace Models.END
{
    using Infra.Base.Interface;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class END_CIDADES : IEntidadeBase
    {
        [Key]
        [Column("CODIGO_CIDADE")]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int id { get; set; }
        [Required]
        [Display(Name = "Nome Cidade")]
        [StringLength(72)]
        public string NOME_CIDADE { get; set; }

        [NotMapped]
        public string CEMP { get; set; }

        [Display(Name = "Código Estado")]
        [Required]
        public int CODIGO_ESTADO { get; set; }

        [Display(Name = "Código IBGE")]
        public int? CODIGO_IBGE { get; set; }


    }
}
