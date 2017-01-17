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
        var CrudFat_ParametroNfsService = (function (_super) {
            __extends(CrudFat_ParametroNfsService, _super);

            function CrudFat_ParametroNfsService($q, api, $rootScope) {
                _super.apply(this, arguments);
                this.$rootScope = $rootScope;
                this.CondPagamentoLook = CondPagamentoLook;
                this.cadbancoLook = cadbancoLook;

                function CondPagamentoLook() {
                    var params = { Empresa: '', campoOrdenacao: 'id', direcaoAsc: true };
                    return this.api.allLook(params, 'Cad_Cond_Pagamento');


                }
                function cadbancoLook() {
                    var params = { Empresa: '', campoOrdenacao: 'id', direcaoAsc: true };
                    return this.api.allLook(params, 'cad_banco');

                }
            }

            Object.defineProperty(CrudFat_ParametroNfsService.prototype, "baseEntity", {
                /// @override
                get: function () {
                    return 'Fat_ParametroNfs';
                },
                enumerable: true,
                configurable: true
            });

            return CrudFat_ParametroNfsService;
        })(Services.CrudBaseService);
        Services.CrudFat_ParametroNfsService = CrudFat_ParametroNfsService;
        App.modules.Services
            .service('CrudFat_ParametroNfsService', CrudFat_ParametroNfsService);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=services.js.map