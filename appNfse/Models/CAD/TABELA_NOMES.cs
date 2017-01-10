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

    public class TABELA_NOMES : IEntidadeBase
    {
        [Key]
        [Column("COD_TABELA_NOMES")]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int id { get; set; }
        [Required]
        public string TIPO { get; set; }
        [Required]
        public string CODIGO { get; set; }
        [Required]
        public string DESCRICAO { get; set; }
        [Required]
        public string SISTEMA { get; set; }

        [NotMapped]
        public string CEMP { get; set; }

    }
}
