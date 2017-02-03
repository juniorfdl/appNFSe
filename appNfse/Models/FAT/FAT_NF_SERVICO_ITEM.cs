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

    public class FAT_NF_SERVICO_ITEM : IEntidadeBase, IEntidadeDetalhe
    {
        [Key]
        [Column("COD_FATNFSERVICOITEM")]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int id { get; set; }
        [NotMapped]
        public string CEMP { get; set; }
        public int COD_FATNFSERVICO { get; set; }
        [Required]
        [Display(Name = "Discriminação do Serviço")]
        public string DESCRICAO { get; set; }
        public int? COD_FATMON { get; set; }
        public string MONTANTE { get; set; }
        [Display(Name = "Quantidade")]
        public decimal? QUANTIDADE { get; set; }
        [Display(Name = "Preço Unitário")]
        public decimal? PRECO_UNITARIO { get; set; }

        [NotMapped]
        public string FlagExcOrAlter { get; set; }

        [JsonIgnore]
        [ForeignKey("COD_FATNFSERVICO")]
        public FAT_NF_SERVICO FAT_NF_SERVICO { get; set; }
    }
}
