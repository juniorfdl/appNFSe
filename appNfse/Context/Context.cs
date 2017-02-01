using FirebirdSql.Data.FirebirdClient;
using Models.FAT;
using Models.Cadastros;
using Models.END;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models.SIS;
using System.Data.Entity.ModelConfiguration.Conventions;

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
            base.Configuration.LazyLoadingEnabled = false;
            
            //modelBuilder.Conventions.Add(new FunctionsConvention<ViaImobDbContext>("dbo"));
            modelBuilder.Conventions.AddBefore<ForeignKeyIndexConvention>(new ForeignKeyNamingConvention());

            modelBuilder.Entity<CAD_COND_PAGAMENTO>();
            modelBuilder.Entity<CAD_COND_PAGAMENTO_DIAS>();
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
        public virtual DbSet<CAD_BANCO> CAD_BANCO { get; set; }
        public virtual DbSet<CAD_COLABORADOR> CAD_COLABORADOR { get; set; }
        public virtual DbSet<CAD_SERVICO_IMPOSTO> CAD_SERVICO_IMPOSTO { get; set; }
        public virtual DbSet<CAD_COND_PAGAMENTO_DIAS> CAD_COND_PAGAMENTO_DIAS { get; set; }    
        #endregion

        #region Entidades tipo FAT
        public virtual DbSet<FAT_CONTRATO> FAT_CONTRATO { get; set; }
        public virtual DbSet<FAT_PARAMETRO_NFS> FAT_PARAMETRO_NFS { get; set; }
        public virtual DbSet<FAT_NF_SERVICO> FAT_NF_SERVICO { get; set; }
        #endregion

        #region
        public virtual DbSet<END_CIDADES> END_CIDADES { get; set; }
        #endregion

    }
}
