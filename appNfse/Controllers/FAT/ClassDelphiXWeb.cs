using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Web;

namespace appNfse.Controllers.FAT
{
    public class ClassDelphiXWeb
    {
        [DllImport(@"NfseWebXDelphi.dll", CallingConvention = CallingConvention.StdCall, CharSet = CharSet.Ansi)]
        public static extern
            string emitir(int inputInt, string inputString,
                                  out int outputInt, out string outputString);

        public string EmitirNFSe(string id)
        {
            int ret1;
            string ret2;
            var ret = emitir(1,id, out ret1, out ret2);

            return ret + ret2;
        }

    }
}