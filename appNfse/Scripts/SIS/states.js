var App;
(function (App) {
    'use strict';

    App.modules.App.config(function ($stateProvider) {        

        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'views/index.html'
        }).state('login', {
            url: '/login',
            layout: 'basic',
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'ctrl',
            data: {
                title: "Entrar"
            }
        }).state('usuario', {
            url: '',
            templateUrl: 'features/SIS/Sis_Usuario/edit.html',
            controller: 'CrudSis_UsuarioCtrl',
            controllerAs: 'ctrl',
            resolve: {
                lista: function (CrudSis_UsuarioService) {
                    return CrudSis_UsuarioService.buscar('', 1, 'NOME', false, 15, '');
                }
            }
        }).state('tabela_nomes', {
            url: '',
            templateUrl: 'features/CAD/Tabela_Nomes/edit.html',
            controller: 'CrudTabela_NomesCtrl',
            controllerAs: 'ctrl',
            resolve: {
                lista: function (CrudTabela_NomesService) {
                    return CrudTabela_NomesService.buscar('', 1, 'TIPO', false, 15, '');
                }
            }
        }).state('cad_cond_pagamento', {
            url: '',
            templateUrl: 'features/CAD/Cad_Cond_Pagamento/edit.html',
            controller: 'CrudCad_Cond_PagamentoCtrl',
            controllerAs: 'ctrl',
            resolve: {
                lista: function (CrudCad_Cond_PagamentoService) {
                    return CrudCad_Cond_PagamentoService.buscar('', 1, 'NOME', false, 15, '');
                }
            }

        }).state('cad_empresa', {
            url: '',
            templateUrl: 'features/CAD/cad_empresa/edit.html',
            controller: 'CrudCad_EmpresaCtrl',
            controllerAs: 'ctrl',
            resolve: {
                lista: function (CrudCad_EmpresaService) {
                    return CrudCad_EmpresaService.buscar('', 1, 'NOME', false, 15, '');
                }
            }
        }).state('fat_contrato', {
            url: '',
            templateUrl: 'features/FAT/fat_contrato/edit.html',
            controller: 'CrudFat_ContratoCtrl',
            controllerAs: 'ctrl',
            resolve: {
                lista: function (CrudFat_ContratoService) {
                    return CrudFat_ContratoService.buscar('', 1, 'CODIGO', false, 15, '');
                }
            }
        }).state('fat_parametro_nfs', {
            url: '',
            templateUrl: 'features/FAT/fat_parametro_nfs/edit.html',
            controller: 'CrudFat_ParametroNfsCtrl',
            controllerAs: 'ctrl',
            resolve: {
                lista: function (CrudFat_ParametroNfsService) {
                    return CrudFat_ParametroNfsService.buscar('', 1, 'CODIGO_MUNICIPIO', false, 15, '');
                }
            }

        }).state('cad_servico', {
            url: '',
            templateUrl: 'features/CAD/cad_servico/edit.html',
            controller: 'Crudcad_servicoCtrl',
            controllerAs: 'ctrl',
            resolve: {
                lista: function (Crudcad_servicoService) {
                    return Crudcad_servicoService.buscar('', 1, 'CODIGO_SERVICO', false, 15, '');
                }
            }
        }).state('sis_menu', {
            url: '',
            templateUrl: 'features/SIS/sis_menu/edit.html',
            controller: 'Crudsis_menuCtrl',
            controllerAs: 'ctrl',
            resolve: {
                lista: function (Crudsis_menuService) {
                    return Crudsis_menuService.buscar('', 1, 'GRUPO', false, 15, '');
                }
            }
        }).state('cad_banco', {
            url: '',
            templateUrl: 'features/CAD/cad_banco/edit.html',
            controller: 'Crudcad_bancoCtrl',
            controllerAs: 'ctrl',
            resolve: {
                lista: function (Crudcad_bancoService) {
                    return Crudcad_bancoService.buscar('', 1, 'CODIGO', false, 15, '');
                }
            }
        }).state("otherwise",
          {
              url: '/home',
              templateUrl: 'views/index.html'
          }
        );

    });

})(App || (App = {}));
//# sourceMappingURL=app.js.map