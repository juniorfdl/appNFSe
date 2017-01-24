

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var App;
(function (App) {
    var Services;
    (function (Services) {
        "use strict";
        var CrudFat_ContratoService = (function (_super) {
            __extends(CrudFat_ContratoService, _super);

            function CrudFat_ContratoService($q, api, $rootScope) {
                _super.apply(this, arguments);
                this.cadcolaboradorLook = cadcolaboradorLook;

                function cadcolaboradorLook(query) {                  

                    var param = { FANTASIA: query };
                    return this.api.allLook(param, 'cad_colaborador/ClientesLook');
                }
            }

            Object.defineProperty(CrudFat_ContratoService.prototype, "baseEntity", {
                /// @override
                get: function () {
                    return 'Fat_Contrato';
                },
                enumerable: true,
                configurable: true
            });            
   
            return CrudFat_ContratoService;
        })(Services.CrudBaseService);
        Services.CrudFat_ContratoService = CrudFat_ContratoService;
        App.modules.Services
            .service('CrudFat_ContratoService', CrudFat_ContratoService);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=services.js.map