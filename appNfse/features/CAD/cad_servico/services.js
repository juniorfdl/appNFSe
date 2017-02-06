

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
        var Crudcad_servicoService = (function (_super) {
            __extends(Crudcad_servicoService, _super);

            function Crudcad_servicoService($q, api, $rootScope) {
                _super.apply(this, arguments);
                this.tabelanomeLook = tabelanomeLook;

                function tabelanomeLook(tipo, sistema) {
                    var params = { TIPO: tipo, SISTEMA: sistema };
                    return this.api.allLook(params, 'tabela_nome/tabelanomeLook');
                }

            }

            Object.defineProperty(Crudcad_servicoService.prototype, "baseEntity", {
                /// @override
                get: function () {
                    return 'cad_servico';
                },
                enumerable: true,
                configurable: true
            });            
   
            return Crudcad_servicoService;
        })(Services.CrudBaseService);
        Services.Crudcad_servicoService = Crudcad_servicoService;
        App.modules.Services
            .service('Crudcad_servicoService', Crudcad_servicoService);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=services.js.map