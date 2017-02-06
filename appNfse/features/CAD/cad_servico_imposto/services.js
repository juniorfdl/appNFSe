

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
        var Crudcad_servico_impostoService = (function (_super) {
            __extends(Crudcad_servico_impostoService, _super);

            function Crudcad_servico_impostoService($q, api, $rootScope) {
                _super.apply(this, arguments);
                this.servicoLook = servicoLook;
                this.endcidadesLook = endcidadesLook;
                function endcidadesLook(query) {

                    var param = { NOME_CIDADE: query };
                    return this.api.allLook(param, 'end_cidades/endcidadesLook');
                }

                function servicoLook() {
                    var params = { Empresa: '', campoOrdenacao: 'id', direcaoAsc: true };
                    return this.api.allLook(params, 'cad_servico');
                }
            }

            Object.defineProperty(Crudcad_servico_impostoService.prototype, "baseEntity", {
                /// @override
                get: function () {
                    return 'cad_servico_imposto';
                },
                enumerable: true,
                configurable: true
            });            
   
            Object.defineProperty(Crudcad_servico_impostoService.prototype, "baseEntityConsulta", {
                /// @override
                get: function () {
                    return 'v_cons_cad_servico_imposto';
                },
                enumerable: true,
                configurable: true
            });

            return Crudcad_servico_impostoService;
        })(Services.CrudBaseService);
        Services.Crudcad_servico_impostoService = Crudcad_servico_impostoService;
        App.modules.Services
            .service('Crudcad_servico_impostoService', Crudcad_servico_impostoService);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=services.js.map