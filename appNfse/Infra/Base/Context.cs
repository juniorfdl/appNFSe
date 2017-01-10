using FirebirdSql.Data.FirebirdClient;
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
          //base("Name=BASE")
        {            
            Database.SetInitializer<Context>(null);
            Database.Initialize(false);
        }        

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //Database.Log = d => System.Diagnostics.Debug.WriteLine(d);
            base.OnModelCreating(modelBuilder);
        }

        #region Entidades tipo sistema
        public virtual DbSet<SIS_USUARIO> SIS_USUARIO { get; set; }
        public virtual DbSet<SIS_USUARIO_EMPRESA> SIS_USUARIO_EMPRESA { get; set; }
       // public virtual DbSet<FiltrosBase> FiltrosBase { get; set; }        
        #endregion

        #region Entidades tipo Cadastros        
        public virtual DbSet<CAD_EMPRESA> CAD_EMPRESA { get; set; }
        #endregion

        #region Entidades tipo FAT
        #endregion


    }
}
