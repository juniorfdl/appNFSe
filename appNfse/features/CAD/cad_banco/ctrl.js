/// <reference path="Itens.html" />
/// <reference path="Itens.html" />
/// <reference path="../base.ts" />
/// <reference path="services.ts" />
/// <reference path="../tipoimovel/services.ts" />
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
        var Crudcad_bancoCtrl = (function (_super) {

            __extends(Crudcad_bancoCtrl, _super);
            function Crudcad_bancoCtrl($rootScope, api, Crudcad_bancoService, lista, $q, $scope) {
                var _this = this;
                _super.call(this);

                this.$rootScope = $rootScope;

                this.api = api;
                this.crudSvc = Crudcad_bancoService;
                this.lista = lista;

            }

            Crudcad_bancoCtrl.prototype.crud = function () {
                return "cad_banco";
            };

            return Crudcad_bancoCtrl;
        })(Controllers.CrudBaseEditCtrl);
        Controllers.Crudcad_bancoCtrl = Crudcad_bancoCtrl;

        App.modules.Controllers.controller('Crudcad_bancoCtrl', Crudcad_bancoCtrl);


    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=ctrl.js.map