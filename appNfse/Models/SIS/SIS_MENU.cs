namespace Models.SIS
{
    using Infra.Base.Interface;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public partial class SIS_MENU : IEntidadeBase
    {
        [Key]
        [Column("CODIGOSISMENU")]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int id { get; set; }
        [Required]
        public int GRUPO { get; set; }
        [StringLength(70)]
        public string DESCRICAO { get; set; }

        [StringLength(70)]
        public string DLL { get; set; }

        [StringLength(70)]
        public string MENU { get; set; }

        [StringLength(1)]
        public string EMP { get; set; }

        [NotMapped]
        public string CEMP { get; set; }

        [StringLength(1)]
        [Required]
        public string GRAVA_LOG { get; set; }
        
        [Required]
        public int ORDEM { get; set; }
    }
}
