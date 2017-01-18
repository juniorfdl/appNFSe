
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
        var CrudFat_ContratoCtrl = (function (_super) {

            __extends(CrudFat_ContratoCtrl, _super);
            function CrudFat_ContratoCtrl($rootScope, api, CrudFat_ContratoService, lista, $q, $scope) {
                var _this = this;
                _super.call(this);

                this.$rootScope = $rootScope;

                this.api = api;
                this.crudSvc = CrudFat_ContratoService;
                this.lista = lista;
                _this.data = [];
                _this.selectedItem = null;
                _this.searchText = null;
                _this.selectedItemChange = selectedItemChange;

                function selectedItemChange(item) {

                    //if (_this.currentRecord != null) {
                    //    if (item == null) {
                    //        _this.currentRecord.CLIENTE_CODIGO = null;
                    //        _this.currentRecord.CLIENTE_NOME = null;
                    //        _this.currentRecord.COD_CADCOLABORADOR = null;
                    //    } else {
                    //        _this.currentRecord.CLIENTE_CODIGO = item.CODIGO;
                    //        _this.currentRecord.CLIENTE_NOME = item.FANTASIA;
                    //        _this.currentRecord.COD_CADCOLABORADOR = item.id;
                    //    }
                    //}
                }


                this.querySearch = function (query) {

                    return _this.crudSvc.cadcolaboradorLook(query).then(function (response) {
                        debugger;
                        return response;
                    })
                }

            }

            CrudFat_ContratoCtrl.prototype.crud = function () {
                return "Fat_Contrato";
            };

            return CrudFat_ContratoCtrl;
        })(Controllers.CrudBaseEditCtrl);
        Controllers.CrudFat_ContratoCtrl = CrudFat_ContratoCtrl;

        App.modules.Controllers.controller('CrudFat_ContratoCtrl', CrudFat_ContratoCtrl);


    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=ctrl.js.map