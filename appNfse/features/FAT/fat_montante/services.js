

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
        var CrudFat_MONTANTEService = (function (_super) {
            __extends(CrudFat_MONTANTEService, _super);

            function CrudFat_MONTANTEService($q, api, $rootScope) {
                _super.apply(this, arguments);
                this.cadcolaboradorLook = cadcolaboradorLook;

                function cadcolaboradorLook(query) {                  

                    var param = { FANTASIA: query };
                    return this.api.allLook(param, 'cad_colaborador/ClientesLook');
                }
            }

            Object.defineProperty(CrudFat_MONTANTEService.prototype, "baseEntity", {
                /// @override
                get: function () {
                    return 'Fat_MONTANTE';
                },
                enumerable: true,
                configurable: true
            });            
   
            return CrudFat_MONTANTEService;
        })(Services.CrudBaseService);
        Services.CrudFat_MONTANTEService = CrudFat_MONTANTEService;
        App.modules.Services
            .service('CrudFat_MONTANTEService', CrudFat_MONTANTEService);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=services.js.map