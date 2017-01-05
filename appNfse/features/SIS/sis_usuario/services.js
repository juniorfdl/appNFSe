

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
        var CrudSis_UsuarioService = (function (_super) {
            __extends(CrudSis_UsuarioService, _super);

            function CrudSis_UsuarioService($q, api) {
                _super.apply(this, arguments);
            }

            Object.defineProperty(CrudSis_UsuarioService.prototype, "baseEntity", {
                /// @override
                get: function () {
                    return 'SIS_USUARIO';
                },
                enumerable: true,
                configurable: true
            });            
   
            return CrudSis_UsuarioService;
        })(Services.CrudBaseService);
        Services.CrudSis_UsuarioService = CrudSis_UsuarioService;
        App.modules.Services
            .service('CrudSis_UsuarioService', CrudSis_UsuarioService);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=services.js.map