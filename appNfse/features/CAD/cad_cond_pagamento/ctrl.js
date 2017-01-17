
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        'use strict';
        var CrudCad_Cond_PagamentoCtrl = (function (_super) {

            __extends(CrudCad_Cond_PagamentoCtrl, _super);
            function CrudCad_Cond_PagamentoCtrl($rootScope, api, CrudCad_Cond_PagamentoService, lista, $q, $scope) {
                var _this = this;
                _super.call(this);

                this.$rootScope = $rootScope;

                this.api = api;
                this.crudSvc = CrudCad_Cond_PagamentoService;
                this.lista = lista;

            }

            CrudCad_Cond_PagamentoCtrl.prototype.crud = function () {
                return "Cad_Cond_Pagamento";
            };

            return CrudCad_Cond_PagamentoCtrl;
        })(Controllers.CrudBaseEditCtrl);
        Controllers.CrudCad_Cond_PagamentoCtrl = CrudCad_Cond_PagamentoCtrl;

        App.modules.Controllers.controller('CrudCad_Cond_PagamentoCtrl', CrudCad_Cond_PagamentoCtrl);


    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=ctrl.js.map