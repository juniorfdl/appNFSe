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

    public class FAT_PARAMETRO_NFS : IEntidadeBase
    {
        [Key]
        [Column("COD_PARAMETRONFS")]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int id { get; set; }
        [Required]
        [Display(Name = "Código Município")]
        public int CODIGO_MUNICIPIO { get; set; }

        [Required]
        [Display(Name ="Empresa")]
        public string CEMP { get; set; }

        [Required]
        [Display(Name = "Optante Simples")]
        [StringLength(1)]
        public string OPTANTESIMPLESNACIONAL { get; set; }

        [Required]
        [Display(Name = "Incentivador Cultural")]
        [StringLength(1)]
        public string INCENTIVADORCULTURAL { get; set; }

        [Required]
        [Display(Name = "Produção")]
        [StringLength(1)]
        public string PRODUCAO { get; set; }

        [Required]
        public int EXIGIBILIDADEISS{ get; set; }

        [Display(Name = "Senha")]
        [StringLength(20)]
        public string SENHA { get; set; }

        [Display(Name = "Frase Secreta")]
        [StringLength(80)]
        public string FRASE_SECRETA { get; set; }

        [Display(Name = "Natureza Padrão")]
        public int NATUREZA_PADRAO { get; set; }

        [Display(Name = "Regime Especial Tributação")]
        public int REGIMEESPECIALTRIBUTACAO { get; set; }

        [Display(Name = "Condição de Pagamento")]
        public int COD_CADCPAG_PADRAO { get; set; }

        [Display(Name = "Série Padrão")]
        [StringLength(5)]
        public string SERIE_PADRAO { get; set; }

        [Display(Name = "Código CNAE")]
        public int CODIGOCNAE { get; set; }

        [Display(Name = "Tipo de Serviço")]
        public int TIPO_SERVICO { get; set; }

        [Display(Name = "Certificado Série")]
        [StringLength(40)]
        public string CERTIFICADO_SERIE { get; set; }

        [Display(Name = "Certificado Senha")]
        [StringLength(30)]
        public string CERTIFICADO_SENHA { get; set; }

        [Display(Name = "Usuário Web")]
        [StringLength(30)]
        public string USER_WEB { get; set; }

        [Display(Name = "Prefeitura")]
        public string PREFEITURA { get; set; }

        [Display(Name = "Email")]
        public string EMAIL { get; set; }

        [Display(Name = "Código Banco")]
        public int COD_CADBANCO { get; set; }

        [Display(Name = "Imprimir Lista Produto")]
        [StringLength(1)]
        public string IMPRIMIR_LISTA_PRODUTO { get; set; }

        [Display(Name = "Aguardar Retorno Consulta")]
        public int? AGUARDARCONSULTARETORNO { get; set; }

        [Display(Name = "Consultar Lotes Após Envio")]
        [StringLength(1)]
        public string CONSULTARLOTEAPOSENVIO { get; set; }

        [Display(Name = "Intervalo de Tentativas")]
        public int INTERVALOTENTATIVAS { get; set; }

        [Display(Name = "Tipo de RPS")]
        [StringLength(1)]
        public string TIPO_RPS { get; set; }

        [Display(Name = "Usuário Certificado")]
        [StringLength(1)]
        public string USECERTIFICADO { get; set; }

        [Display(Name = "ISSQN Retido")]
        [StringLength(1)]
        public string ISS_RETIDO { get; set; }

        [Display(Name = "Imprimir Lista de Parcelas")]
        [StringLength(1)]
        public string IMPRIMIR_LISTA_PARCELAS { get; set; }
    }
}
