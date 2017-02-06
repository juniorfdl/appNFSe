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

    public class V_CONS_CAD_SERVICO_IMPOSTO : IEntidadeBase
    {
        [Key]
        [Column("COD_CADSERVICOIMPOSTO")]
        public int id { get; set; }
        public string CEMP { get; set; }
        public string NOME { get; set; }
        public string CODIGO_SERVICO { get; set; }
        public string NOME_CIDADE { get; set; }
        public string SIGLA_UF { get; set; }

    }
}
