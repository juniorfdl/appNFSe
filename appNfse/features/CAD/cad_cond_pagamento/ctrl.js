
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

                this.removeItens = removeItens;
                this.AddItem = AddItem;
                this.ConfirmarItem = ConfirmarItem;
                this.CancelarItem = CancelarItem;
                this.ItemOK = ItemOK;

                function ItemOK() {
                    return _this.NovoItemDIAS != null && _this.NovoItemDIAS > 0;
                }

                function removeItens(item, SweetAlert) {
                    //debugger;
                    var _this = this;
                    SweetAlert.swal({
                        title: "Excluir este registro?",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Sim, excluir!",
                        cancelButtonText: "Não, mudei de ideia"
                    }, function (isConfirm) {
                        if (isConfirm) {
                            item.FlagExcOrAlter = "E";
                        }
                    });
                }

                function AddItem() {
                    _this.bNovoItem = true;
                }

                function ConfirmarItem() {
                    debugger;
                    var itemExistente = null;

                    if (_this.currentRecord.lista_dias != null)
                      itemExistente = _this.currentRecord.lista_dias.find(value => value.DIAS === _this.NovoItemDIAS);

                    if (itemExistente) { 
                        if (itemExistente.FlagExcOrAlter == "E") {
                            itemExistente.FlagExcOrAlter = null;
                            itemExistente = null;
                            _this.NovoItemDIAS = null;
                            _this.bNovoItem = false;
                            return true;
                        }
                    }

                    if (!itemExistente) {
                        var item = {DIAS: _this.NovoItemDIAS};                        

                        if (_this.currentRecord.lista_dias == null)
                            _this.currentRecord.lista_dias = [];

                        _this.currentRecord.lista_dias.push(item);
                        _this.NovoItemDIAS = null;
                        _this.bNovoItem = false;
                    } else {
                        _this.SweetAlert.swal({
                            title: "Dias já existe na lista!",
                            type: "warning",
                            confirmButtonColor: "#DD6B55",
                            confirmButtonText: "OK"                        
                        });
                    }
                }

                function CancelarItem() {
                    _this.bNovoItem = false;
                    _this.NovoItemDIAS = null;
                }

            }

            CrudCad_Cond_PagamentoCtrl.prototype.registroAtualizado = function () {
                this.bNovoItem = false;
            };

            CrudCad_Cond_PagamentoCtrl.prototype.crud = function () {
                return "Cad_Cond_Pagamento";
            };

            CrudCad_Cond_PagamentoCtrl.prototype.prepararParaSalvar = function () {

            };

            return CrudCad_Cond_PagamentoCtrl;
        })(Controllers.CrudBaseEditCtrl);
        Controllers.CrudCad_Cond_PagamentoCtrl = CrudCad_Cond_PagamentoCtrl;

        App.modules.Controllers.controller('CrudCad_Cond_PagamentoCtrl', CrudCad_Cond_PagamentoCtrl);


    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=ctrl.js.map