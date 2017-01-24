
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
        var Crudcad_servico_impostoCtrl = (function (_super) {

            __extends(Crudcad_servico_impostoCtrl, _super);
            function Crudcad_servico_impostoCtrl($rootScope, api, Crudcad_servico_impostoService, lista, $q, $scope) {
                var _this = this;
                _super.call(this);

                this.$rootScope = $rootScope;

                this.api = api;
                this.crudSvc = Crudcad_servico_impostoService;
                this.lista = lista;
                servicoLook();
                _this.data = [];
                _this.selectedItem = null;
                _this.searchText = null;
                _this.selectedItemChange = selectedItemChange;

                function selectedItemChange(item) {

                }

                this.querySearch = function (query) {

                    return _this.crudSvc.endcidadesLook(query).then(function (response) {
                        return response;
                    })
                }

                function servicoLook() {
                    _this.crudSvc.servicoLook().then(function (lista) {
                        _this.servicoLook = lista;
                    });
                }
            }

            Crudcad_servico_impostoCtrl.prototype.crud = function () {
                return "cad_servico_imposto";
            };

            return Crudcad_servico_impostoCtrl;
        })(Controllers.CrudBaseEditCtrl);
        Controllers.Crudcad_servico_impostoCtrl = Crudcad_servico_impostoCtrl;

        App.modules.Controllers.controller('Crudcad_servico_impostoCtrl', Crudcad_servico_impostoCtrl);


    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=ctrl.js.map