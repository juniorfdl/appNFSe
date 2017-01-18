
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
        var Crudcad_servicoCtrl = (function (_super) {

            __extends(Crudcad_servicoCtrl, _super);
            function Crudcad_servicoCtrl($rootScope, api, Crudcad_servicoService, lista, $q, $scope) {
                var _this = this;
                _super.call(this);

                this.$rootScope = $rootScope;

                this.api = api;
                this.crudSvc = Crudcad_servicoService;
                this.lista = lista;
                regimetributacaoLook();
                function regimetributacaoLook() {
                    _this.crudSvc.tabelanomeLook('03', 'FAT').then(function (lista) {
                        _this.regimetributacaoLook = lista;
                    });
                }

            }

            Crudcad_servicoCtrl.prototype.crud = function () {
                return "cad_servico";
            };

            return Crudcad_servicoCtrl;
        })(Controllers.CrudBaseEditCtrl);
        Controllers.Crudcad_servicoCtrl = Crudcad_servicoCtrl;

        App.modules.Controllers.controller('Crudcad_servicoCtrl', Crudcad_servicoCtrl);


    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=ctrl.js.map