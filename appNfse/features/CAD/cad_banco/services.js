

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
        var Crudcad_bancoService = (function (_super) {
            __extends(Crudcad_bancoService, _super);

            function Crudcad_bancoService($q, api) {
                _super.apply(this, arguments);

            }

            Object.defineProperty(Crudcad_bancoService.prototype, "baseEntity", {
                /// @override
                get: function () {
                    return 'cad_banco';
                },
                enumerable: true,
                configurable: true
            });            
   
            return Crudcad_bancoService;
        })(Services.CrudBaseService);
        Services.Crudcad_bancoService = Crudcad_bancoService;
        App.modules.Services
            .service('Crudcad_bancoService', Crudcad_bancoService);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=services.js.map