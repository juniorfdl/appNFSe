
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
            function Crudfat_nf_servicoCtrl($rootScope, api, Crudfat_nf_servicoService, lista, $q, $scope, CrudTabela_NomesService, $window, luarApp) {
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
                            this.FatMontanteLook = null;
                            this.DesabilitaServico = true;
                        } else {
                            _this.currentRecord.CLIENTE_CODIGO = item.COD;
                            _this.currentRecord.CLIENTE_NOME = item.NOM;
                            _this.currentRecord.COD_CADCLI = item.id;
                            this.FatMontanteLook = null;
                            this.DesabilitaServico = false;
                            BuscarMontantes();
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

                this.removeItens = removeItens;
                this.AddItem = AddItem;
                this.ConfirmarItem = ConfirmarItem;
                this.CancelarItem = CancelarItem;
                this.ItemOK = ItemOK;
                this.NovoItem = {};
                this.EditItem = EditItem;
                this.bOperacaoItem = 'L' // inicia como lista;                

                function ItemOK() {
                    return _this.NovoItem.DESCRICAO != null && _this.NovoItem.PRECO_UNITARIO > 0;
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
                    _this.bOperacaoItem = 'A';
                    _this.NovoItem = {};
                }

                function EditItem(ITEM) {
                    _this.bOperacaoItem = 'E';
                    _this.NovoItem = angular.copy(ITEM);
                    _this.ItemEmAlteracao = ITEM;

                    if (ITEM.COD_FATMON > 0)
                        _this.ItemSelecionado = _this.FatMontanteLook.find(value => value.id === ITEM.COD_FATMON);
                    else
                        _this.ItemSelecionado = null;
                }

                function ConfirmarItem() {

                    if (_this.bOperacaoItem == 'A') {
                        _this.currentRecord.lista_Itens.push(_this.NovoItem);
                    }
                    else {
                        _this.ItemEmAlteracao.MONTANTE = _this.NovoItem.MONTANTE;
                        _this.ItemEmAlteracao.PRECO_UNITARIO = _this.NovoItem.PRECO_UNITARIO;
                        _this.ItemEmAlteracao.DESCRICAO = _this.NovoItem.DESCRICAO;
                        _this.ItemEmAlteracao.COD_FATMON = _this.NovoItem.COD_FATMON;
                        _this.ItemEmAlteracao.QUANTIDADE = _this.NovoItem.QUANTIDADE;
                    }

                    _this.bOperacaoItem = 'L';
                }

                function CancelarItem() {
                    _this.bOperacaoItem = 'L';
                    _this.NovoItem = {};
                }

                this.FatMontanteLook = null;
                this.BuscarMontantes = BuscarMontantes;
                function BuscarMontantes() {
                    if (_this.FatMontanteLook == null && _this.currentRecord.COD_CADCLI > 0) {
                        _this.crudSvc.FatMontanteLook(_this.currentRecord.COD_CADCLI).then(function (lista) {
                            _this.FatMontanteLook = lista;
                        });
                    }
                }

                this.MontanteSelecionado = MontanteSelecionado;

                function MontanteSelecionado(item) {
                    if (item == null) {
                        _this.NovoItem.MONTANTE = null;
                        _this.NovoItem.COD_FATMON = null;
                    } else {
                        _this.NovoItem.DESCRICAO = item.DESCRICAO;
                        _this.NovoItem.MONTANTE = item.CODIGO;
                        _this.NovoItem.PRECO_UNITARIO = item.VALOR_MONTANTE;
                        _this.NovoItem.COD_FATMON = item.id;

                        if (item.EXIGE_QUANTIDADE == 'S' && _this.NovoItem.QUANTIDADE > 0) {
                            _this.NovoItem.PRECO_UNITARIO = item.VALOR_MONTANTE * _this.NovoItem.QUANTIDADE;
                        }

                    }
                }

                this.ChangeCOD_CADSERVICO = ChangeCOD_CADSERVICO;

                function ChangeCOD_CADSERVICO() {
                    if (_this.currentRecord.COD_CADSERVICO > 0) {
                        _this.crudSvc.GetValoresImpostos(_this.currentRecord.COD_CADSERVICO,
                              _this.currentRecord.CID, _this.currentRecord.EST).then(function (dados) {

                                  if (dados != null) {

                                      if (dados.ISS_PERC > 0)
                                          _this.currentRecord.ISS_PERC = dados.ISS_PERC;

                                      if (dados.IRR_PERC > 0)
                                          _this.currentRecord.IRR_PERC = dados.IRR_PERC

                                      if (dados.PIS_PERC > 0)
                                          _this.currentRecord.PIS_PERC = dados.PIS_PERC

                                      if (dados.CSLL_PERC > 0)
                                          _this.currentRecord.CSLL_PERC = dados.CSLL_PERC

                                      if (dados.COFINS_PERC > 0)
                                          _this.currentRecord.COFINS_PERC = dados.COFINS_PERC

                                      if (dados.INSS_PERC > 0)
                                          _this.currentRecord.INSS_PERC = dados.INSS_PERC

                                      if (dados.ISS_VLR > 0)
                                          _this.currentRecord.ISSQN_ALIQUOTA = dados.ISS_VLR;

                                      if (dados.IRRF_VLR > 0)
                                          _this.currentRecord.IRRF_ALIQUOTA = dados.IRR_VLR;

                                      if (dados.CSLL_VLR > 0)
                                          _this.currentRecord.CSLL_ALIQUOTA = dados.CSLL_VLR;

                                      if (dados.COFINS_VLR > 0)
                                          _this.currentRecord.COFINS_ALIQUOTA = dados.COFINS_VLR;

                                      if (dados.PIS_VLR > 0)
                                          _this.currentRecord.PIS_ALIQUOTA = dados.PIS_VLR;

                                      if (dados.INSS_VLR > 0)
                                          _this.currentRecord.INSS_ALIQUOTA = dados.INSS_VLR;

                                  }
                              });
                    }
                }

                this.MontaDescricao = MontaDescricao;

                function MontaDescricao() {
                }

                this.CalculaCOFINS = CalculaCOFINS;

                function CalculaCOFINS() {
                    if (_this.currentRecord.COFINS_ALIQUOTA > 0)
                        _this.currentRecord.COFINS_VALOR = _this.currentRecord.COFINS_BASE * _this.currentRecord.COFINS_ALIQUOTA / 100;
                }

                this.EmitirNFSe = EmitirNFSe;                
                function EmitirNFSe() {
                    if (_this.currentRecord.id > 0) {
                        _this.crudSvc.EmitirNFSe(_this.currentRecord.id, 'EMI').then(function (dados) {
                            debugger;
                            if (dados.Retorno == '0') {
                                if (dados.OperacaoSilenciosa == '1') {
                                    var pdf = luarApp.CaminhoPDF + _this.currentRecord.NUMERO
                                        + _this.currentRecord.SERIE + '-nfse.pdf';

                                    _this.SweetAlert.swal({
                                        title: 'Visualizar PDF da NFS-e?',
                                        text: 'Operação executada com sucesso!',
                                        type: "success",
                                        showCancelButton: true,
                                        confirmButtonColor: "#DD6B55",
                                        confirmButtonText: "Sim",
                                        cancelButtonText: "Não"
                                    }, function (isConfirm) {
                                        if (isConfirm) {
                                            window.open(pdf, '_blank');
                                        }
                                    });
                                    
                                }
                            } else {
                                _this.SweetAlert.swal({
                                    title: dados.Retorno,
                                    type: "warning",
                                    showCancelButton: false,
                                    confirmButtonColor: "#DD6B55",
                                    confirmButtonText: "OK"
                                });
                            }

                        });
                    }
                }

                this.ConsultarNFSe = ConsultarNFSe;
                function ConsultarNFSe() {
                    if (_this.currentRecord.id > 0) {
                        _this.crudSvc.EmitirNFSe(_this.currentRecord.id, 'CON').then(function (dados) {
                            debugger;
                            if (dados.Retorno == '0') {
                                if (dados.OperacaoSilenciosa == '1') {
                                    var pdf = luarApp.CaminhoPDF + _this.currentRecord.NUMERO
                                        + _this.currentRecord.SERIE + '-nfse.pdf';

                                    _this.SweetAlert.swal({
                                        title: 'Visualizar PDF da NFS-e?',
                                        text: 'Operação executada com sucesso!',
                                        type: "success",
                                        showCancelButton: true,
                                        confirmButtonColor: "#DD6B55",
                                        confirmButtonText: "Sim",
                                        cancelButtonText: "Não"
                                    }, function (isConfirm) {
                                        if (isConfirm) {
                                            window.open(pdf, '_blank');
                                        }
                                    });

                                }
                            } else {
                                _this.SweetAlert.swal({
                                    title: dados.Retorno,
                                    type: "warning",
                                    showCancelButton: false,
                                    confirmButtonColor: "#DD6B55",
                                    confirmButtonText: "OK"
                                });
                            }

                        });
                    }
                }

                this.CancelarNFSe = CancelarNFSe;
                function CancelarNFSe() {
                    if (_this.currentRecord.id > 0) {
                        _this.crudSvc.EmitirNFSe(_this.currentRecord.id, 'CAN').then(function (dados) {
                            debugger;
                            if (dados.Retorno == '0') {
                                if (dados.OperacaoSilenciosa == '1') {
                                    var pdf = luarApp.CaminhoPDF + _this.currentRecord.NUMERO
                                        + _this.currentRecord.SERIE + '-nfse.pdf';

                                    _this.SweetAlert.swal({
                                        title: 'Visualizar PDF da NFS-e?',
                                        text: 'Operação executada com sucesso!',
                                        type: "success",
                                        showCancelButton: true,
                                        confirmButtonColor: "#DD6B55",
                                        confirmButtonText: "Sim",
                                        cancelButtonText: "Não"
                                    }, function (isConfirm) {
                                        if (isConfirm) {
                                            window.open(pdf, '_blank');
                                        }
                                    });

                                }
                            } else {
                                _this.SweetAlert.swal({
                                    title: dados.Retorno,
                                    type: "warning",
                                    showCancelButton: false,
                                    confirmButtonColor: "#DD6B55",
                                    confirmButtonText: "OK"
                                });
                            }

                        });
                    }
                }

            }

            Crudfat_nf_servicoCtrl.prototype.crud = function () {
                return "fat_nf_servico";
            };

            Crudfat_nf_servicoCtrl.prototype.registroAtualizado = function () {

                this.FatMontanteLook = null;

                if (this.currentRecord != null) {
                    this.searchText = this.currentRecord.CLIENTE_NOME;
                    this.BuscarMontantes();

                    if (this.currentRecord.id == null) {
                        this.DesabilitaServico = true;
                    } else {
                        this.DesabilitaServico = false;
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