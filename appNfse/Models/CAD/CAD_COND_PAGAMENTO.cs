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
    using System.Collections.ObjectModel;

    public class CAD_COND_PAGAMENTO : IEntidadeBase
    {
        public CAD_COND_PAGAMENTO()
        {
            this.lista_dias = new Collection<CAD_COND_PAGAMENTO_DIAS>();
        }

        [Key]
        [Column("COD_CADCONDPAGAMENTO")]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int id { get; set; }
        [Required]
        public string CEMP { get; set; }
        [Required]
        public string NOME { get; set; }
        [Required]
        public string TIPO { get; set; }
        public string ACRESCIMO_DESCONTO { get; set; }
        public double? PERC_ACRES_DESCONTO { get; set; }
        
        public virtual ICollection<CAD_COND_PAGAMENTO_DIAS> lista_dias { get; set; }

    }
}
