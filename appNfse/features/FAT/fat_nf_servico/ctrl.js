
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
        var Crudfat_nf_servicoCtrl = (function (_super) {

            __extends(Crudfat_nf_servicoCtrl, _super);
            function Crudfat_nf_servicoCtrl($rootScope, api, Crudfat_nf_servicoService, lista, $q, $scope, CrudTabela_NomesService) {
                var _this = this;
                _super.call(this);

                this.$rootScope = $rootScope;
                this.api = api;
                this.crudSvc = Crudfat_nf_servicoService;
                this.crudSvcTabelaNomes = CrudTabela_NomesService;
                this.lista = lista;
                _this.data = [];
                _this.selectedItem = null;
                _this.searchText = null;
                _this.selectedItemChange = selectedItemChange;

                _this.MesesLook = [{ id: 1, NOME: 'Janeiro' }, { id: 2, NOME: 'Fevereiro' }, { id: 3, NOME: 'Março' },
                { id: 4, NOME: 'Abril' }, { id: 5, NOME: 'Maio' }, { id: 6, NOME: 'Junho' },
                { id: 7, NOME: 'Julho' }, { id: 8, NOME: 'Agosto' }, { id: 9, NOME: 'Setembro' },
                { id: 10, NOME: 'Outubro' }, { id: 11, NOME: 'Novembro' }, { id: 12, NOME: 'Dezembro' }];

                _this.AnosLook = [{ id: 2012, NOME: 2012 }, { id: 2013, NOME: 2013 }, { id: 4, NOME: 2014 },
                { id: 2015, NOME: 2015 }, { id: 2016, NOME: 2016 }, { id: 2017, NOME: 2017 },
                { id: 2018, NOME: 2018 }, { id: 2019, NOME: 2019 }, { id: 2020, NOME: 2020 },
                { id: 2021, NOME: 2021 }, { id: 2022, NOME: 2022 }, { id: 2023, NOME: 2023 }];

                function selectedItemChange(item) {
                    debugger
                    if (_this.currentRecord != null) {
                        if (item == null) {
                            _this.currentRecord.CLIENTE_CODIGO = null;
                            _this.currentRecord.CLIENTE_NOME = null;
                            _this.currentRecord.COD_CADCLI = null;
                        } else {
                            _this.currentRecord.CLIENTE_CODIGO = item.CODIGO;
                            _this.currentRecord.CLIENTE_NOME = item.FANTASIA;
                            _this.currentRecord.COD_CADCLI = item.id;
                        }
                    }
                }

                this.querySearch = function (query) {
                    return _this.crudSvc.cadcolaboradorLook(query).then(function (response) {
                        debugger;
                        return response;
                    })
                }

                CondPagamentoLook();
                function CondPagamentoLook() {
                    _this.crudSvc.CondPagamentoLook().then(function (lista) {
                        _this.CondPagamentoLook = lista;
                    });
                }

                CadBancoLook();
                function CadBancoLook() {
                    _this.crudSvc.CadBancoLook().then(function (lista) {
                        _this.CadBancoLook = lista;
                    });
                }

                NaturezaLook();
                function NaturezaLook() {
                    _this.crudSvcTabelaNomes.tabelanomeLook('01', 'FAT').then(function (lista) {
                        _this.NaturezaLook = lista;
                    });
                }

                CadServicoLook();
                function CadServicoLook() {
                    _this.crudSvc.CadServicoLook().then(function (lista) {
                        _this.CadServicoLook = lista;
                    });
                }
            }

            Crudfat_nf_servicoCtrl.prototype.crud = function () {
                return "fat_nf_servico";
            };

            Crudfat_nf_servicoCtrl.prototype.registroAtualizado = function () {
                if (this.currentRecord != null) {
                    this.data = [{ FANTASIA: this.currentRecord.CLIENTE_NOME }];
                    this.searchText = this.currentRecord.CLIENTE_NOME;

                    if (this.currentRecord.id == null) {

                    }
                }
            }

            Crudfat_nf_servicoCtrl.prototype.prepararParaSalvar = function () {
                this.currentRecord.CFIL = '01';
            };

            return Crudfat_nf_servicoCtrl;
        })(Controllers.CrudBaseEditCtrl);
        Controllers.Crudfat_nf_servicoCtrl = Crudfat_nf_servicoCtrl;

        App.modules.Controllers.controller('Crudfat_nf_servicoCtrl', Crudfat_nf_servicoCtrl);


    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=ctrl.js.map