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
    using System.Collections.ObjectModel;

    public class V_FAT_NF_SERVICO : IEntidadeBase
    {

        private string situacao;
        private string nome_cliente;

        [Key]
        [Column("COD_FATNFSERVICO")]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int id { get; set; }        
        [Display(Name = "Nro Nota")]
        public int NUMERO { get; set; }
        [Required]
        [Display(Name = "Série")]
        [StringLength(5)]
        public string SERIE { get; set; }
        [Required]
        public string CFIL { get; set; }
        [Required]
        public string CEMP { get; set; }
        [Required]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}")]
        [DataType(DataType.Date)]
        [Display(Name = "Data Emissão")]
        public DateTime DATA_EMISSAO { get; set; }
        [Required]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}")]
        [DataType(DataType.Date)]
        [Display(Name = "Data de Vencimento")]
        public DateTime DATA_VENCIMENTO { get; set; }
        [Required]
        [Display(Name = "Valor Total")]
        public decimal VALOR_TOTAL { get; set; }
        [Required]
        [Display(Name = "Valor Liquido")]
        public decimal VALOR_LIQUIDO { get; set; }
        
        public string SITUACAO {
            get {
                if (this.situacao != null && this.situacao == "C")
                    return "CANCELADA";
                else return null;
            }
            set { this.situacao = value; }
        }
        
        public int? MES_COMPETENCIA { get; set; }
        public int? ANO_COMPETENCIA { get; set; }
        
        public int CODIGO_CLIENTE { get; set; }
        public string NOME_CLIENTE {
            get {
                if (this.nome_cliente.Length > 30)
                    return this.nome_cliente.Substring(0, 30);
                else
                    return this.nome_cliente;
            }
            set { this.nome_cliente = value; }
        }
        
        public string NFSE_NUMERO { get; set; }
        public string CODIGOVERIFICACAO { get; set; }

    }
}
