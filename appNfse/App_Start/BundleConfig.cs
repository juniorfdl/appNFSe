using System.Web;
using System.Web.Optimization;

namespace appBase
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/css/app")
                .IncludeDirectory("~/Content", "*.css", true));

            bundles.Add(new ScriptBundle("~/js/angular").Include(
                "~/scripts/Base/lodash.js",
                "~/scripts/angular/angular.js",
                "~/scripts/angular/angular-animate.js",
                "~/scripts/angular/angular-messages.js",
                "~/scripts/angular/select.js",
                "~/scripts/angular/unsavedChanges.js",
                "~/scripts/angular/SweetAlert.js",
                "~/scripts/angular/toaster.js",
                "~/scripts/angular/angular-easy-masks.js",
                "~/scripts/angular/angular-wt-apps.js",
                "~/scripts/angular/angular-smart-forms.js",
                "~/scripts/angular/angular-responsive-tables.js",
                "~/scripts/angular/angular-ui-router.js",
                "~/scripts/angular/angular-material.js",
                "~/scripts/angular/angular-aria.js",
                "~/scripts/angular/svg-assets-cache.js",
                "~/scripts/angular/ui-bootstrap-tpls.js"));

            bundles.Add(new ScriptBundle("~/js/app").Include(
                "~/scripts/Base/sweetalert.min.js",
                "~/scripts/Base/basics.js",
                "~/scripts/Base/ngCpfCnpj.js",
                "~/scripts/Base/errors.js",
                "~/scripts/Base/apiInterceptor.js",
                "~/scripts/Base/crud.js",
                "~/scripts/Base/crudServices.js",
                "~/scripts/Base/crudHttpRedirect.js",
                "~/scripts/Base/directives.js",
                "~/scripts/SIS/config.js",
                "~/scripts/SIS/states.js",
                "~/scripts/Base/api.js",

                "~/scripts/Base/app.js",
                "~/scripts/Base/security.js",

                "~/scripts/Base/backButton.js",
                "~/scripts/Base/formFields.js",
                "~/scripts/Base/layoutCrud.js",
                "~/scripts/Base/mensagens.js",

                "~/features/Login/ctrl.js",
                "~/features/SIS/Sis_Usuario/ctrl.js",
                "~/features/SIS/Sis_Usuario/services.js",

                "~/features/CAD/Tabela_Nomes/ctrl.js",
                "~/features/CAD/Tabela_Nomes/services.js",
                
                "~/features/CAD/cad_empresa/ctrl.js",
                "~/features/CAD/cad_empresa/services.js",

                "~/features/CAD/cad_cond_pagamento/ctrl.js",
                "~/features/CAD/cad_cond_pagamento/services.js",

                "~/features/FAT/fat_contrato/ctrl.js",
                "~/features/FAT/fat_contrato/services.js",

                "~/features/CAD/cad_servico/ctrl.js",
                "~/features/CAD/cad_servico/services.js",

                "~/features/FAT/fat_parametro_nfs/ctrl.js",
                "~/features/FAT/fat_parametro_nfs/services.js",

                "~/features/SIS/sis_menu/ctrl.js",
                "~/features/SIS/sis_menu/services.js",

                "~/features/CAD/cad_banco/ctrl.js",
                "~/features/CAD/cad_banco/services.js",

                "~/features/CAD/cad_colaborador/ctrl.js",
                "~/features/CAD/cad_colaborador/services.js",

                "~/features/CAD/cad_servico_imposto/ctrl.js",
                "~/features/CAD/cad_servico_imposto/services.js"


                ));
        }
    }
}
