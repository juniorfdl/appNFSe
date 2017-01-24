
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
            function CrudFat_ParametroNfsCtrl($location, $anchorScroll, $modal, $rootScope, api, CrudFat_ParametroNfsService, lista, $q, $scope) {
                var _this = this;
                _super.call(this);
                this.$location = $location;
                this.$anchorScroll = $anchorScroll;
                this.$modal = $modal;

                this.$rootScope = $rootScope;

                this.api = api;
                this.crudSvc = CrudFat_ParametroNfsService;
                this.lista = lista;
                CondPagamentoLook();
                cadbancoLook();
                naturezapadraoLook();
                tiposervicoLook();
                regimetributacaoLook();

                function CondPagamentoLook() {
                    _this.crudSvc.CondPagamentoLook().then(function (lista) {
                        _this.CondPagamentoLook = lista;
                    });
                }

                function cadbancoLook() {
                    _this.crudSvc.cadbancoLook().then(function (lista) {
                        _this.cadbancoLook = lista;
                    });
                }

                function naturezapadraoLook() {
                    _this.crudSvc.tabelanomeLook('01', 'FAT').then(function (lista) {
                        _this.naturezapadraoLook = lista;
                    });
                }
                function regimetributacaoLook() {
                    _this.crudSvc.tabelanomeLook('03', 'FAT').then(function (lista) {
                        _this.regimetributacaoLook = lista;
                    });
                }
                function tiposervicoLook() {
                    _this.crudSvc.tiposervicoLook().then(function (lista) {
                        _this.tiposervicoLook = lista;
                    });
                }

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