

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
        var Crudcad_colaboradorService = (function (_super) {
            __extends(Crudcad_colaboradorService, _super);

            function Crudcad_colaboradorService($q, api,$rootScope) {
                _super.apply(this, arguments);

            }

            Object.defineProperty(Crudcad_colaboradorService.prototype, "baseEntity", {
                /// @override
                get: function () {
                    return 'cad_colaborador';
                },
                enumerable: true,
                configurable: true
            });            
   
            return Crudcad_colaboradorService;
        })(Services.CrudBaseService);
        Services.Crudcad_colaboradorService = Crudcad_colaboradorService;
        App.modules.Services
            .service('Crudcad_colaboradorService', Crudcad_colaboradorService);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=services.js.map