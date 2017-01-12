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
        var CrudFat_ParametroNfsCtrl = (function (_super) {

            __extends(CrudFat_ParametroNfsCtrl, _super);
            function CrudFat_ParametroNfsCtrl($rootScope, api, CrudFat_ParametroNfsService, lista, $q, $scope) {
                var _this = this;
                _super.call(this);

                this.$rootScope = $rootScope;

                this.api = api;
                this.crudSvc = CrudFat_ParametroNfsService;
                this.lista = lista;

            }

            CrudFat_ParametroNfsCtrl.prototype.crud = function () {
                return "Fat_ParametroNfs";
            };

            return CrudFat_ParametroNfsCtrl;
        })(Controllers.CrudBaseEditCtrl);
        Controllers.CrudFat_ParametroNfsCtrl = CrudFat_ParametroNfsCtrl;

        App.modules.Controllers.controller('CrudFat_ParametroNfsCtrl', CrudFat_ParametroNfsCtrl);


    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=ctrl.js.map