
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
        var CrudTabela_NomesCtrl = (function (_super) {

            __extends(CrudTabela_NomesCtrl, _super);
            function CrudTabela_NomesCtrl($rootScope, api, CrudTabela_NomesService, lista, $q, $scope) {
                var _this = this;
                _super.call(this);

                this.$rootScope = $rootScope;

                this.api = api;
                this.crudSvc = CrudTabela_NomesService;
                this.lista = lista;

            }

            CrudTabela_NomesCtrl.prototype.crud = function () {
                return "Tabela_Nomes";
            };

            return CrudTabela_NomesCtrl;
        })(Controllers.CrudBaseEditCtrl);
        Controllers.CrudTabela_NomesCtrl = CrudTabela_NomesCtrl;

        App.modules.Controllers.controller('CrudTabela_NomesCtrl', CrudTabela_NomesCtrl);


    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=ctrl.js.map