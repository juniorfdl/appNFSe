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
        public string NOME { get; set; }        
        
        public string CEMP { get; set; }
        
        public string DESCRICAO_NOTA { get; set; }

        public string CODIGO_SERVICO { get; set; }

        public int? REGIMEESPECIALTRIBUTACAO { get; set; }

        public int? CODIGOTRIBUTACAOMUNICIPIO { get; set; }

    }
}
