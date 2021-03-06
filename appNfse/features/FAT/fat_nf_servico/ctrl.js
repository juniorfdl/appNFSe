
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
            function Crudfat_nf_servicoCtrl($rootScope, api, $modal, Crudfat_nf_servicoService, lista, $q, $scope, CrudTabela_NomesService, $window, luarApp) {
                var _this = this;
                _super.call(this);

                this.$rootScope = $rootScope;
                this.api = api;
                this.crudSvc = Crudfat_nf_servicoService;
                this.$modal = $modal;
                this.crudSvcTabelaNomes = CrudTabela_NomesService;
                this.lista = lista;
                this.podeEditar = true;
                this.AtualizarConsultaPorId = true; //Apos conformar um registro ele atualiza a consulta executendo uma pesquisa

                this.CalculaValorTotal = function () {
                    var VALOR_TOTAL = parseFloat("0");

                    if (_this.currentRecord.lista_Itens != null) {

                        for (var i = 0; i < _this.currentRecord.lista_Itens.length; i++) {
                            if (_this.currentRecord.lista_Itens[i].FlagExcOrAlter != "E")
                                VALOR_TOTAL = VALOR_TOTAL + _this.currentRecord.lista_Itens[i].PRECO_UNITARIO;
                        }
                    }

                    this.currentRecord.VALOR_TOTAL = VALOR_TOTAL;

                    this.CalculaValorLiquido();
                }

                this.CalculaValorLiquido = function () {

                    if (this.currentRecord.VALOR_TOTAL > 0) {
                        var valor = parseFloat("0");

                        if (this.currentRecord.ISSQN_VALOR > 0)
                            valor = valor + this.currentRecord.ISSQN_VALOR;
                        if (this.currentRecord.IRRF_VALOR > 0)
                            valor = valor + this.currentRecord.IRRF_VALOR;
                        if (this.currentRecord.CSLL_VALOR > 0)
                            valor = valor + this.currentRecord.CSLL_VALOR;
                        if (this.currentRecord.COFINS_VALOR > 0)
                            valor = valor + this.currentRecord.COFINS_VALOR;
                        if (this.currentRecord.PIS_VALOR > 0)
                            valor = valor + this.currentRecord.PIS_VALOR;
                        if (this.currentRecord.INSS_VALOR > 0)
                            valor = valor + this.currentRecord.INSS_VALOR;

                        this.currentRecord.VALOR_LIQUIDO = this.currentRecord.VALOR_TOTAL - valor;

                        if (this.currentRecord.VALOR_DESCONTO > 0)
                            this.currentRecord.VALOR_LIQUIDO = this.currentRecord.VALOR_LIQUIDO - this.currentRecord.VALOR_DESCONTO;
                    }
                    else this.currentRecord.VALOR_LIQUIDO = 0;
                }

                ExecutaStart();
                function ExecutaStart() {
                    _this.crudSvc.ExecutaStart('01').then(function (lista) {
                        _this.dadosStart = lista;
                        _this.CadBancoLook = lista.lista_Bancos;
                        _this.NaturezaLook = lista.Lista_Natureza;
                        _this.CondPagamentoLook = lista.lista_CondPagamento;
                        _this.CadServicoLook = lista.lista_CadServico;
                    });
                }

                _this.selectedItemChange = selectedItemChange;

                _this.MesesLook = [{ id: 1, NOME: 'Janeiro' }, { id: 2, NOME: 'Fevereiro' }, { id: 3, NOME: 'Mar�o' },
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
                            _this.currentRecord.CID = null;
                            _this.currentRecord.EST = null;
                            _this.FatMontanteLook = null;
                            _this.DesabilitaServico = true;
                        } else {
                            _this.currentRecord.CLIENTE_CODIGO = item.COD;
                            _this.currentRecord.CLIENTE_NOME = item.NOM;
                            _this.currentRecord.COD_CADCLI = item.id;
                            _this.currentRecord.CID = item.CID;
                            _this.currentRecord.EST = item.EST;

                            _this.FatMontanteLook = null;
                            _this.DesabilitaServico = false;
                            BuscarMontantes();
                        }
                    }
                }

                this.querySearch = null;//querySearch;

                function querySearch(query) {
                    return _this.crudSvc.cadcolaboradorLook(query).then(function (response) {
                        debugger;
                        return response;
                    })
                }

                this.removeItens = removeItens;
                this.AddItem = AddItem;
                this.ConfirmarItem = ConfirmarItem;
                this.CancelarItem = CancelarItem;
                this.ItemOK = ItemOK;
                this.NovoItem = {};
                this.EditItem = EditItem;
                this.bOperacaoItem = 'L'; // inicia como lista;

                this.PodeEmitirNFSe = function () {
                    return _this.currentRecord != null && _this.currentRecord.id > 0;
                }

                addAcoes();
                function addAcoes() {

                    _this.acoes.push(new Object({
                        titulo: 'Emitir NFS-e',
                        iconeCls: '',
                        onClick: function () { _this.EmitirNFSe(); },
                        disabled: function () {
                            return !_this.PodeEmitirNFSe();
                        }
                    }));

                    _this.acoes.push(new Object({
                        titulo: 'Cancelar NFS-e',
                        iconeCls: '',
                        onClick: function () { _this.CancelarNFSe(); },
                        disabled: function () {
                            return !_this.PodeEmitirNFSe();
                        }
                    }));

                    _this.acoes.push(new Object({
                        titulo: 'Consultar NFS-e',
                        iconeCls: '',
                        onClick: function () { _this.ConsultarNFSe(); },
                        disabled: function () {
                            return !_this.PodeEmitirNFSe();
                        }
                    }));
                }

                this.IniciarNFSeOK = function () {
                    return _this.currentRecord.CLIENTE_CODIGO > 0 && _this.currentRecord.CID != null
                        && _this.currentRecord.EST != null && _this.currentRecord.DATA_EMISSAO != null;
                }

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
                        cancelButtonText: "N�o, mudei de ideia"
                    }, function (isConfirm) {
                        if (isConfirm) {
                            item.FlagExcOrAlter = "E";
                            _this.CalculaValorTotal();
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

                        if (_this.currentRecord.lista_Itens == null) {
                            _this.currentRecord.lista_Itens = [];
                        }

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

                    _this.CalculaValorTotal();
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

                this.CalculaISSQN = CalculaISSQN;
                function CalculaISSQN() {
                    if (_this.currentRecord.ISSQN_ALIQUOTA > 0)
                        _this.currentRecord.ISSQN_VALOR = _this.currentRecord.ISSQN_BASE * _this.currentRecord.ISSQN_ALIQUOTA / 100;

                    this.CalculaValorTotal();
                }

                this.CalculaCOFINS = CalculaCOFINS;
                function CalculaCOFINS() {
                    if (_this.currentRecord.COFINS_ALIQUOTA > 0)
                        _this.currentRecord.COFINS_VALOR = _this.currentRecord.COFINS_BASE * _this.currentRecord.COFINS_ALIQUOTA / 100;

                    this.CalculaValorTotal();
                }

                this.CalculaIRRF = CalculaIRRF;
                function CalculaIRRF() {
                    if (_this.currentRecord.IRRF_ALIQUOTA > 0)
                        _this.currentRecord.IRRF_VALOR = _this.currentRecord.IRRF_BASE * _this.currentRecord.IRRF_ALIQUOTA / 100;

                    this.CalculaValorTotal();
                }

                this.CalculaCSLL = CalculaCSLL;
                function CalculaCSLL() {
                    if (_this.currentRecord.CSLL_ALIQUOTA > 0)
                        _this.currentRecord.CSLL_VALOR = _this.currentRecord.CSLL_BASE * _this.currentRecord.CSLL_ALIQUOTA / 100;

                    this.CalculaValorTotal();
                }

                this.CalculaINSS = CalculaINSS;
                function CalculaINSS() {
                    if (_this.currentRecord.INSS_ALIQUOTA > 0)
                        _this.currentRecord.INSS_VALOR = _this.currentRecord.INSS_BASE * _this.currentRecord.INSS_ALIQUOTA / 100;

                    this.CalculaValorTotal();
                }

                this.EmitirNFSe = EmitirNFSe;
                function EmitirNFSe() {
                    if (_this.PodeEmitirNFSe()) {
                        _this.crudSvc.EmitirNFSe(_this.currentRecord.id, 'EMI').then(function (dados) {
                            debugger;
                            if (dados.Retorno == '0') {
                                if (dados.OperacaoSilenciosa == '1') {
                                    var pdf = luarApp.CaminhoPDF + _this.currentRecord.NUMERO
                                        + _this.currentRecord.SERIE + '-nfse.pdf';

                                    _this.SweetAlert.swal({
                                        title: 'Visualizar PDF da NFS-e?',
                                        text: 'Opera��o executada com sucesso!',
                                        type: "success",
                                        showCancelButton: true,
                                        confirmButtonColor: "#DD6B55",
                                        confirmButtonText: "Sim",
                                        cancelButtonText: "N�o"
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
                    if (_this.PodeEmitirNFSe()) {
                        _this.crudSvc.EmitirNFSe(_this.currentRecord.id, 'CON').then(function (dados) {
                            debugger;
                            if (dados.Retorno == '0') {
                                if (dados.OperacaoSilenciosa == '1') {
                                    var pdf = luarApp.CaminhoPDF + _this.currentRecord.NUMERO
                                        + _this.currentRecord.SERIE + '-nfse.pdf';

                                    _this.SweetAlert.swal({
                                        title: 'Visualizar PDF da NFS-e?',
                                        text: 'Opera��o executada com sucesso!',
                                        type: "success",
                                        showCancelButton: true,
                                        confirmButtonColor: "#DD6B55",
                                        confirmButtonText: "Sim",
                                        cancelButtonText: "N�o"
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
                    if (_this.PodeEmitirNFSe()) {
                        _this.crudSvc.EmitirNFSe(_this.currentRecord.id, 'CAN').then(function (dados) {
                            debugger;
                            if (dados.Retorno == '0') {
                                if (dados.OperacaoSilenciosa == '1') {
                                    var pdf = luarApp.CaminhoPDF + _this.currentRecord.NUMERO
                                        + _this.currentRecord.SERIE + '-nfse.pdf';

                                    _this.SweetAlert.swal({
                                        title: 'Visualizar PDF da NFS-e?',
                                        text: 'Opera��o executada com sucesso!',
                                        type: "success",
                                        showCancelButton: true,
                                        confirmButtonColor: "#DD6B55",
                                        confirmButtonText: "Sim",
                                        cancelButtonText: "N�o"
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

                this.AbrirModalIniciarNFSe = function () {

                    this.data = [];
                    this.selectedItem = null;
                    this.searchText = null;
                    this.querySearch = querySearch;
                    this.$rootScope.Cadastro = false;

                    var modalInstance = $modal.open({
                        templateUrl: 'nfseNovo.html',
                        scope: $scope,
                        rootScope: $rootScope,
                        controller: 'ModalIniciarNFSeCtrl',
                        controllerAs: 'Ctrl'
                    });

                }
            }

            Crudfat_nf_servicoCtrl.prototype.crud = function () {
                return "fat_nf_servico";
            };

            Crudfat_nf_servicoCtrl.prototype.registroAtualizado = function () {

                this.FatMontanteLook = null;
                this.bOperacaoItem = 'L';

                if (this.currentRecord != null) {
                    this.BuscarMontantes();

                    if (this.currentRecord.id == null) {
                        this.DesabilitaServico = true;

                        this.currentRecord.COD_CADBANCO = this.dadosStart.COD_CADBANCO;
                        this.currentRecord.SERIE = this.dadosStart.SERIE_PADRAO;
                        this.currentRecord.COD_CADSERVICO = this.dadosStart.TIPO_SERVICO;
                        this.currentRecord.NATUREZA_OPERACAO = this.dadosStart.NATUREZA_PADRAO;
                        this.currentRecord.COD_CADCPAG = this.dadosStart.COD_CADCPAG_PADRAO;
                        this.currentRecord.ISS_RETIDO = this.dadosStart.ISS_RETIDO;

                        this.currentRecord.DATA_EMISSAO = this.dadosStart.DATA_EMISSAO;
                        this.currentRecord.DATA_VENCIMENTO = this.dadosStart.DATA_EMISSAO;
                        this.currentRecord.ANO_COMPETENCIA = this.dadosStart.ANO_COMPETENCIA;

                    } else {
                        this.DesabilitaServico = false;

                        if (this.currentRecord.SITUACAO == "C" || this.currentRecord.CODIGOVERIFICACAO != null)
                            this.podeEditar = false;
                        else
                            this.podeEditar = true;
                    }
                }
            }

            Crudfat_nf_servicoCtrl.prototype.prepararParaSalvar = function () {
                this.currentRecord.CFIL = '01';
            };

            Crudfat_nf_servicoCtrl.prototype.execAposNovo = function () {
                this.AbrirModalIniciarNFSe();
            };

            Crudfat_nf_servicoCtrl.prototype.execAntesExcluir = function (item) {
                if (item.SITUACAO == "C") {
                    this.toaster.warning("Aten��o", "NFS-e esta cancelada!");
                    return false;
                } else
                    if (item.CODIGOVERIFICACAO != null) {
                        this.toaster.warning("Aten��o", "NFS-e foi enviada!");
                        return false;
                    }
                    else return true;
            }

            Crudfat_nf_servicoCtrl.prototype.execAntesEdit = function (item) {
                if (item.SITUACAO == "C") {
                    this.toaster.warning("Aten��o", "NFS-e esta cancelada!");
                    return false;
                } else
                    if (item.CODIGOVERIFICACAO != null) {
                        this.toaster.warning("Aten��o", "NFS-e foi enviada!");
                        return false;
                    }
                    else return true;
            }

            Crudfat_nf_servicoCtrl.prototype.execAposReplicarRegistro = function () {
                this.currentRecord.NUMERO = 0;
                this.currentRecord.DATA_EMISSAO = null;
                this.currentRecord.DATA_VENCIMENTO = null;
                this.currentRecord.SITUACAO = null;
                this.podeEditar = true;
            }

            return Crudfat_nf_servicoCtrl;
        })(Controllers.CrudBaseEditCtrl);
        Controllers.Crudfat_nf_servicoCtrl = Crudfat_nf_servicoCtrl;

        var ModalIniciarNFSeCtrl = function ($scope, $modalInstance, $q, $timeout, $rootScope) {

            $scope.IniciarNFSe = function () {
                $modalInstance.close();
                $rootScope.Cadastro = true;
                $scope.$parent.ctrl.querySearch = null;
                $scope.$parent.ctrl.AddItem();
            };

            $scope.FecharIniciarNFSe = function () {
                $modalInstance.dismiss('cancel');
                $scope.$parent.ctrl.querySearch = null;
            };
        };

        App.modules.Controllers.controller('ModalIniciarNFSeCtrl', ModalIniciarNFSeCtrl);
        App.modules.Controllers.controller('Crudfat_nf_servicoCtrl', Crudfat_nf_servicoCtrl);


    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=ctrl.js.map