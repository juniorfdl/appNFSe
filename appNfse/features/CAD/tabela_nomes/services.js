

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
        var CrudTabela_NomesService = (function (_super) {
            __extends(CrudTabela_NomesService, _super);

            function CrudTabela_NomesService($q, api) {
                _super.apply(this, arguments);

            }

            Object.defineProperty(CrudTabela_NomesService.prototype, "baseEntity", {
                /// @override
                get: function () {
                    return 'Tabela_Nomes';
                },
                enumerable: true,
                configurable: true
            });            
   
            return CrudTabela_NomesService;
        })(Services.CrudBaseService);
        Services.CrudTabela_NomesService = CrudTabela_NomesService;
        App.modules.Services
            .service('CrudTabela_NomesService', CrudTabela_NomesService);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=services.js.map