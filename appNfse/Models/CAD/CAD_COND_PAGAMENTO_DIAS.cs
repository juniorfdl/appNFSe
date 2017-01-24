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
    using Newtonsoft.Json;

    public class CAD_COND_PAGAMENTO_DIAS : IEntidadeBase, IEntidadeDetalhe
    {
        [Key]
        [Column("COD_CADCONDPAGAMENTO", Order = 0)]               
        [DatabaseGenerated(DatabaseGeneratedOption.None)]        
        public int id { get; set; }
        [Key, Column(Order = 1)]
        [Required]
        public int DIAS { get; set; }

        [NotMapped]
        public string CEMP { get; set; }

        [JsonIgnore]
        [ForeignKey("id")]        
        public CAD_COND_PAGAMENTO CAD_COND_PAGAMENTO { get; set; }

        [NotMapped]
        public string FlagExcOrAlter { get; set; }
    }
}
