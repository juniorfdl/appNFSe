using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Web;

namespace appNfse.Controllers.FAT
{
    public class ClassDelphiXWeb
    {
        [DllImport(@"NfseWebXDelphi.dll")]
        //[return: MarshalAs(UnmanagedType.BStr)]
        private static extern int emitir(int id);

        public int EmitirNFSe(int id)
        {            
            var ret = emitir(id);
            return ret;
        }

    }
}