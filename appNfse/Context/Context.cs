using FirebirdSql.Data.FirebirdClient;
using Models.FAT;
using Models.Cadastros;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models.SIS;

namespace Infra.Base
{ 
    public class Context : DbContext
    {        
        public Context() : 
            base(new FbConnection(@"database=localhost:NFSE;Port=3050;user=sysdba;password=masterkey"), true)         
        {            
            Database.SetInitializer<Context>(null);
            Database.Initialize(false);
        }        

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        #region Entidades tipo sistema
        public virtual DbSet<SIS_USUARIO> SIS_USUARIO { get; set; }
        public virtual DbSet<SIS_USUARIO_EMPRESA> SIS_USUARIO_EMPRESA { get; set; }
        public virtual DbSet<SIS_MENU> SIS_MENU { get; set; }
        #endregion

        #region Entidades tipo Cadastros        
        public virtual DbSet<CAD_EMPRESA> CAD_EMPRESA { get; set; }
        public virtual DbSet<TABELA_NOMES> TABELA_NOMES { get; set; }
        public virtual DbSet<CAD_COND_PAGAMENTO> CAD_COND_PAGAMENTO { get; set; }
        public virtual DbSet<CAD_SERVICO> CAD_SERVICO { get; set; }
        #endregion

        #region Entidades tipo FAT
        public virtual DbSet<FAT_CONTRATO> FAT_CONTRATO { get; set; }
        #endregion


    }
}
