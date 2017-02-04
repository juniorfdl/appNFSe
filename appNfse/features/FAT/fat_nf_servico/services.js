

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var App;
(function (App) {
    var Services;
    (function (Services) {
        "use strict";
        var Crudfat_nf_servicoService = (function (_super) {
            __extends(Crudfat_nf_servicoService, _super);

            function Crudfat_nf_servicoService($q, api, $rootScope) {
                _super.apply(this, arguments);
                this.cadcolaboradorLook = cadcolaboradorLook;
                this.CondPagamentoLook = CondPagamentoLook;
                this.CadBancoLook = CadBancoLook;
                this.CadServicoLook = CadServicoLook;
                this.FatMontanteLook = FatMontanteLook;

                function cadcolaboradorLook(query) {                    
                    var param = { NOM: query };
                    return this.api.allLook(param, 'cad_colaborador/VIEW_CADCLI');
                }

                function CondPagamentoLook() {
                    var params = { Empresa: this.$rootScope.currentUser.userCEMP, campoOrdenacao: 'id', direcaoAsc: true };

                    return this.api.allLook(params, 'cad_cond_pagamento');
                }

                function CadBancoLook() {
                    var params = { Empresa: this.$rootScope.currentUser.userCEMP, campoOrdenacao: 'id', direcaoAsc: true };

                    return this.api.allLook(params, 'cad_banco');
                }

                function CadServicoLook() {
                    var params = { Empresa: this.$rootScope.currentUser.userCEMP, campoOrdenacao: 'NOME', direcaoAsc: true };

                    return this.api.allLook(params, 'cad_servico');
                }

                function FatMontanteLook(COD_CADCLI) {
                    var params = { Empresa: this.$rootScope.currentUser.userCEMP, campoOrdenacao: 'DESCRICAO', direcaoAsc: true, termo: COD_CADCLI, campoPesquisa: 'COD_CADCOLABORADOR' };
                    return this.api.allLook(params, 'fat_montante');
                }

                this.GetValoresImpostos = GetValoresImpostos;
                function GetValoresImpostos(COD_CADSERVICO, CID, EST) {
                    var params = { COD_CADSERVICO: COD_CADSERVICO , CID: CID, EST: EST};
                    return this.api.allLook(params, 'fat_nf_servico/GetValoresImpostos');
                }
            }

            Object.defineProperty(Crudfat_nf_servicoService.prototype, "baseEntity", {
                /// @override
                get: function () {
                    return 'fat_nf_servico';
                },
                enumerable: true,
                configurable: true
            });

            return Crudfat_nf_servicoService;
        })(Services.CrudBaseService);
        Services.Crudfat_nf_servicoService = Crudfat_nf_servicoService;
        App.modules.Services
            .service('Crudfat_nf_servicoService', Crudfat_nf_servicoService);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=services.js.map