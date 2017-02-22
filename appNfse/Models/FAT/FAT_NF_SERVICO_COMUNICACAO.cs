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
    using Newtonsoft.Json;

    public class FAT_NF_SERVICO_COMUNICACAO : IEntidadeBase
    {
        [Key]        
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        [Column("COD_FATNFSERVICOCOMUNICACAO")]
        public int id { get; set; }
        [NotMapped]
        public string CEMP { get; set; }
        public string NFSE_NUMERO { get; set; }
        public string CODIGOVERIFICACAO { get; set; }
        public string TIPO { get; set; }
        public int COD_FATNFSERVICO { get; set; }
    }
}
