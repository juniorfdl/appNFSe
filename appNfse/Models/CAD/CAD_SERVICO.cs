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

    public class CAD_SERVICO : IEntidadeBase
    {
        [Key]
        [Column("COD_CADSERVICO")]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int id { get; set; }
        [Required]
        [Display(Name = "Nome")]
        [StringLength(80)]
        public string NOME { get; set; }        
        
        public string CEMP { get; set; }

        [Display(Name = "Descrição da Nota")]
        [StringLength(255)]
        public string DESCRICAO_NOTA { get; set; }

        [Required]
        [Display(Name = "Código do Serviço")]
        [StringLength(10)]
        public string CODIGO_SERVICO { get; set; }
                
        public int? REGIMEESPECIALTRIBUTACAO { get; set; }

        public int? CODIGOTRIBUTACAOMUNICIPIO { get; set; }

    }
}
