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

    public class VIEW_CADCLI : IEntidadeBase
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        [Column("ID")]
        public int id { get; set; }
        public int COD { get; set; }
        public string FANT { get; set; }
        public string NOM { get; set; }
        public string CID { get; set; }
        public string EST { get; set; }
        public string NFON { get; set; }
        public string NDOC { get; set; }
        public string ENDE { get; set; }
        public string SIT { get; set; }
        public string TCLI { get; set; }
        public string CEMP { get; set; }
        [NotMapped]
        public string DESCRICAO {
            get {
                return this.NOM + " - " + this.COD + " - " + this.CID+'/'+this.EST; 
            }
            set { }
        }

    }
}
