
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
        var Crudcad_colaboradorCtrl = (function (_super) {

            __extends(Crudcad_colaboradorCtrl, _super);
            function Crudcad_colaboradorCtrl($rootScope, api, Crudcad_colaboradorService, lista, $q, $scope) {
                var _this = this;
                _super.call(this);

                this.$rootScope = $rootScope;

                this.api = api;
                this.crudSvc = Crudcad_colaboradorService;
                this.lista = lista;

            }

            Crudcad_colaboradorCtrl.prototype.crud = function () {
                return "cad_colaborador";
            };

            return Crudcad_colaboradorCtrl;
        })(Controllers.CrudBaseEditCtrl);
        Controllers.Crudcad_colaboradorCtrl = Crudcad_colaboradorCtrl;

        App.modules.Controllers.controller('Crudcad_colaboradorCtrl', Crudcad_colaboradorCtrl);


    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=ctrl.js.map