(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-loading></app-main-loading>\n<app-home (onRemedioSelected)=\"showOnMap($event)\"></app-home>\n<app-unidades #unidades></app-unidades>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/farmacy-list/farmacy-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/farmacy-list/farmacy-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"pharmacy-list\">\n    <mat-toolbar class=\"header\">\n        <mat-toolbar-row>\n            <button mat-button class=\"btn btn-not\" (click)=\"hidePlaces()\">\n                <i class=\"material-icons\">keyboard_arrow_left</i> Voltar\n            </button>\n        </mat-toolbar-row>\n    </mat-toolbar>\n\n    <ul class=\"list-container\">\n        <ng-container *ngFor=\"let cmarker of farmacias\">\n            <li *ngIf=\"cmarker.type == 'FARMACIA'\">\n                <div class=\"item\">\n                    <div class=\"content\">\n                        <div class=\"info\">\n                            <sub class=\"distance\" style=\"color: green\"\n                                *ngIf=\"cmarker.distanceInfo\"><span>{{cmarker.distanceInfo.distance.text}}</span> |\n                                <span>{{cmarker.distanceInfo.duration.text}}</span></sub>\n                            <sub class=\"neigh\">{{cmarker.farmacia.bairro}}</sub>\n                        </div>\n                        <h5>{{cmarker.farmacia.nome}}</h5>\n                        <sub class=\"address\">{{cmarker.farmacia.endereco}}</sub>\n                    </div>\n                    <div class=\"acoes centralizado\">\n                        <button mat-icon-button (click)=\"goToPharmacy(cmarker)\"><i class=\"material-icons\">directions</i></button>\n                    </div>\n                </div>\n                <hr>\n            </li>\n        </ng-container>\n    </ul>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-location/get-location.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-location/get-location.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"getLocationModal\">\n    <div class=\"header centralizado\">\n        <i class=\"material-icons\">my_location</i>\n    </div>\n    <div class=\"content centralizado\">\n        <h3 class=\"center\">Precisamos da sua localização para indicarmos o melhor caminho!</h3>\n    </div>\n    <div class=\"actions\">\n        <button class=\"btn btn-success\" mat-button mat-dialog-close>Entendi</button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-loading/main-loading.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-loading/main-loading.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"main-loading\" *ngIf=\"isProgress | async\">\n    <div class=\"load-container\">\n        <div class=\"lds-dual-ring\"></div>\n        <img src=\"assets/logo.png\" alt=\"meuremedio\">\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-header/nav-header.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-header/nav-header.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\n    <mat-toolbar-row>\n        <a href=\"javascript:void(0)\">\n            <img src=\"assets/logo.png\" alt=\"MeuRemeio\" >\n        </a>\n    </mat-toolbar-row>\n</mat-toolbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"home\">\n    <form class=\"search\">\n        <mat-form-field appearance=\"outline\">\n            <mat-label>Pesquise Medicamentos</mat-label>\n            <input type=\"text\" matInput [formControl]=\"textQuery\" [matAutocomplete]=\"auto\">\n            <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"remedioSelected()\">\n                <mat-option *ngFor=\"let remedio of filteredRemedios\" [value]=\"remedio.descricao\">\n                    {{remedio.descricao}}\n                </mat-option>\n            </mat-autocomplete>\n        </mat-form-field>\n    </form>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/unidades/unidades.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/unidades/unidades.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"unidades\">\n\n    <div class=\"map-options-down\" *ngIf=\"remedio\">\n        <button mat-icon-button (click)=\"togglePharmList()\">\n            <i class=\"material-icons\">format_list_bulleted</i>\n        </button>\n\n        <div class=\"remedio-name\">\n            <sub>{{remedio.descricao}}</sub>\n        </div>\n    </div>\n\n    <agm-map #map [latitude]=\"lat\" [zoom]=\"zoom\" [longitude]=\"lng\" [zoomControl]=\"false\" [streetViewControl]=\"false\">\n    </agm-map>\n</section>\n\n<app-farmacy-list [places]=\"cmarkers\" (hideList)=\"togglePharmList()\"  (showPharmacy)=\"gotoPharmacy($event)\" [ngClass]=\"{'show': showPharmList}\"></app-farmacy-list>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_main_loading_main_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main-loading/main-loading.service */ "./src/app/components/main-loading/main-loading.service.ts");



let AppComponent = class AppComponent {
    constructor() { }
    ngOnInit() {
        setTimeout(() => { _components_main_loading_main_loading_service__WEBPACK_IMPORTED_MODULE_2__["MainLoadingService"].show(); }, 1);
    }
    showOnMap(remedio) {
        this.unidadesComponent.setRemedio(remedio);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('unidades', null)
], AppComponent.prototype, "unidadesComponent", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_get_location_get_location_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/get-location/get-location.component */ "./src/app/components/get-location/get-location.component.ts");
/* harmony import */ var _components_nav_header_nav_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/nav-header/nav-header.component */ "./src/app/components/nav-header/nav-header.component.ts");
/* harmony import */ var _environments__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./environments */ "./src/app/environments.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _views_unidades_unidades_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/unidades/unidades.component */ "./src/app/views/unidades/unidades.component.ts");
/* harmony import */ var _components_farmacy_list_farmacy_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/farmacy-list/farmacy-list.component */ "./src/app/components/farmacy-list/farmacy-list.component.ts");
/* harmony import */ var _components_main_loading_main_loading_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/main-loading/main-loading.component */ "./src/app/components/main-loading/main-loading.component.ts");

























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
            _components_nav_header_nav_header_component__WEBPACK_IMPORTED_MODULE_19__["NavHeaderComponent"],
            _views_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"],
            _views_unidades_unidades_component__WEBPACK_IMPORTED_MODULE_22__["UnidadesComponent"],
            _components_get_location_get_location_component__WEBPACK_IMPORTED_MODULE_18__["GetLocationComponent"],
            _components_farmacy_list_farmacy_list_component__WEBPACK_IMPORTED_MODULE_23__["FarmacyListComponent"],
            _components_main_loading_main_loading_component__WEBPACK_IMPORTED_MODULE_24__["MainLoadingComponent"]
        ],
        entryComponents: [
            _components_get_location_get_location_component__WEBPACK_IMPORTED_MODULE_18__["GetLocationComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmCoreModule"].forRoot({
                apiKey: _environments__WEBPACK_IMPORTED_MODULE_20__["MAPS_KEY"],
                libraries: ['places', 'drawing', 'geometry']
            })
        ],
        providers: [_agm_core__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/farmacy-list/farmacy-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/farmacy-list/farmacy-list.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#pharmacy-list .list-container {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: calc(100vh - 56px);\n}\n#pharmacy-list .list-container li .item {\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n#pharmacy-list .list-container li .item .content {\n  width: 100%;\n  padding-right: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n#pharmacy-list .list-container li .item .content .info {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n#pharmacy-list .list-container li .item .content .info sub {\n  font-size: 13px;\n}\n#pharmacy-list .list-container li .item .content .info .neigh {\n  text-transform: capitalize;\n  color: #838383;\n}\n#pharmacy-list .list-container li .item .content h5 {\n  margin: 0;\n  font-size: 15px;\n}\n#pharmacy-list .list-container li .item .content .address {\n  text-transform: lowercase;\n  font-size: 13px;\n  color: #838383;\n}\n#pharmacy-list .list-container li .item .acoes {\n  border-left: 1px solid #cecece;\n  height: 60px;\n}\n#pharmacy-list .list-container li .item .acoes i {\n  color: #0673aa !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BhcGEvRG9jdW1lbnRvcy9wYXBhbmV0by9hdXhpbGlhL3Byb2pldG9zL21ldXJlbWVkaW8td2ViL3NyYy9hcHAvY29tcG9uZW50cy9mYXJtYWN5LWxpc3QvZmFybWFjeS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zhcm1hY3ktbGlzdC9mYXJtYWN5LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FDQUo7QURHTTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0RSO0FER1E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0RWO0FER1U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0RaO0FER1k7RUFDRSxlQUFBO0FDRGQ7QURJWTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtBQ0ZkO0FETVU7RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQ0paO0FET1U7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDTFo7QURTUTtFQUNFLDhCQUFBO0VBRUEsWUFBQTtBQ1JWO0FEVVU7RUFDRSx5QkFBQTtBQ1JaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mYXJtYWN5LWxpc3QvZmFybWFjeS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BoYXJtYWN5LWxpc3Qge1xuICAubGlzdC1jb250YWluZXIge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XG5cbiAgICBsaSB7XG4gICAgICAuaXRlbSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAgICAgc3ViIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmVpZ2gge1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgY29sb3I6ICM4MzgzODM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDUge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hZGRyZXNzIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBjb2xvcjogIzgzODM4MztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYWNvZXMge1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NlY2VjZTtcbiAgICAgICAgICAvLyB3aWR0aDogNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG5cbiAgICAgICAgICBpIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDY3M2FhICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIjcGhhcm1hY3ktbGlzdCAubGlzdC1jb250YWluZXIge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcbn1cbiNwaGFybWFjeS1saXN0IC5saXN0LWNvbnRhaW5lciBsaSAuaXRlbSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiNwaGFybWFjeS1saXN0IC5saXN0LWNvbnRhaW5lciBsaSAuaXRlbSAuY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiNwaGFybWFjeS1saXN0IC5saXN0LWNvbnRhaW5lciBsaSAuaXRlbSAuY29udGVudCAuaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiNwaGFybWFjeS1saXN0IC5saXN0LWNvbnRhaW5lciBsaSAuaXRlbSAuY29udGVudCAuaW5mbyBzdWIge1xuICBmb250LXNpemU6IDEzcHg7XG59XG4jcGhhcm1hY3ktbGlzdCAubGlzdC1jb250YWluZXIgbGkgLml0ZW0gLmNvbnRlbnQgLmluZm8gLm5laWdoIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiAjODM4MzgzO1xufVxuI3BoYXJtYWN5LWxpc3QgLmxpc3QtY29udGFpbmVyIGxpIC5pdGVtIC5jb250ZW50IGg1IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4jcGhhcm1hY3ktbGlzdCAubGlzdC1jb250YWluZXIgbGkgLml0ZW0gLmNvbnRlbnQgLmFkZHJlc3Mge1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjODM4MzgzO1xufVxuI3BoYXJtYWN5LWxpc3QgLmxpc3QtY29udGFpbmVyIGxpIC5pdGVtIC5hY29lcyB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NlY2VjZTtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuI3BoYXJtYWN5LWxpc3QgLmxpc3QtY29udGFpbmVyIGxpIC5pdGVtIC5hY29lcyBpIHtcbiAgY29sb3I6ICMwNjczYWEgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/farmacy-list/farmacy-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/farmacy-list/farmacy-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: FarmacyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmacyListComponent", function() { return FarmacyListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FarmacyListComponent = class FarmacyListComponent {
    constructor() {
        this.farmacias = [];
        this.hideList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showPharmacy = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    hidePlaces() {
        this.hideList.emit();
    }
    goToPharmacy(cmkr) {
        this.showPharmacy.emit(cmkr);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('places')
], FarmacyListComponent.prototype, "farmacias", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FarmacyListComponent.prototype, "hideList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FarmacyListComponent.prototype, "showPharmacy", void 0);
FarmacyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-farmacy-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./farmacy-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/farmacy-list/farmacy-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./farmacy-list.component.scss */ "./src/app/components/farmacy-list/farmacy-list.component.scss")).default]
    })
], FarmacyListComponent);



/***/ }),

/***/ "./src/app/components/get-location/get-location.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/get-location/get-location.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .mat-dialog-container {\n  background-color: #fff !important;\n}\n\n#getLocationModal {\n  background-color: #fff;\n}\n\n#getLocationModal .header i {\n  color: #8e8e8e;\n}\n\n#getLocationModal .content h3 {\n  text-align: center;\n  color: #8e8e8e;\n}\n\n#getLocationModal .actions {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BhcGEvRG9jdW1lbnRvcy9wYXBhbmV0by9hdXhpbGlhL3Byb2pldG9zL21ldXJlbWVkaW8td2ViL3NyYy9hcHAvY29tcG9uZW50cy9nZXQtbG9jYXRpb24vZ2V0LWxvY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2dldC1sb2NhdGlvbi9nZXQtbG9jYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQ0FBQTtBQ0NKOztBREVBO0VBQ0Usc0JBQUE7QUNDRjs7QURFSTtFQUNFLGNBQUE7QUNBTjs7QURLSTtFQUNJLGtCQUFBO0VBQ0YsY0FBQTtBQ0hOOztBRE9FO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2V0LWxvY2F0aW9uL2dldC1sb2NhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuI2dldExvY2F0aW9uTW9kYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXG4gIC5oZWFkZXIge1xuICAgIGkge1xuICAgICAgY29sb3I6ICM4ZThlOGU7XG4gICAgfVxuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIGgzIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICM4ZThlOGU7XG4gICAgfVxuICB9XG5cbiAgLmFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbiIsIjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbiNnZXRMb2NhdGlvbk1vZGFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbiNnZXRMb2NhdGlvbk1vZGFsIC5oZWFkZXIgaSB7XG4gIGNvbG9yOiAjOGU4ZThlO1xufVxuI2dldExvY2F0aW9uTW9kYWwgLmNvbnRlbnQgaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjOGU4ZThlO1xufVxuI2dldExvY2F0aW9uTW9kYWwgLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/get-location/get-location.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/get-location/get-location.component.ts ***!
  \*******************************************************************/
/*! exports provided: GetLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetLocationComponent", function() { return GetLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GetLocationComponent = class GetLocationComponent {
    constructor() { }
    ngOnInit() {
    }
};
GetLocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-location',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-location.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-location/get-location.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-location.component.scss */ "./src/app/components/get-location/get-location.component.scss")).default]
    })
], GetLocationComponent);



/***/ }),

/***/ "./src/app/components/main-loading/main-loading.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/main-loading/main-loading.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main-loading {\n  z-index: 99;\n  background-color: #fff;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#main-loading .load-container {\n  position: relative;\n}\n#main-loading .load-container .lds-dual-ring {\n  display: inline-block;\n  display: block;\n  width: 100px;\n  height: 100px;\n  margin: 8px;\n  border-radius: 50%;\n  border: 6px solid #cef;\n  border-color: #cef transparent #cef transparent;\n  -webkit-animation: lds-dual-ring 1.2s linear infinite;\n          animation: lds-dual-ring 1.2s linear infinite;\n}\n#main-loading .load-container img {\n  position: absolute;\n  top: calc(50% - 20px);\n  left: calc(50% - 40px);\n  width: 80px;\n}\n@-webkit-keyframes lds-dual-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes lds-dual-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BhcGEvRG9jdW1lbnRvcy9wYXBhbmV0by9hdXhpbGlhL3Byb2pldG9zL21ldXJlbWVkaW8td2ViL3NyYy9hcHAvY29tcG9uZW50cy9tYWluLWxvYWRpbmcvbWFpbi1sb2FkaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4tbG9hZGluZy9tYWluLWxvYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLGtCQUFBO0FDQ0o7QURDSTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQ0FBQTtFQUNBLHFEQUFBO1VBQUEsNkNBQUE7QUNDTjtBREVJO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ0FOO0FESUU7RUFDRTtJQUNFLHVCQUFBO0VDRko7RURJRTtJQUNFLHlCQUFBO0VDRko7QUFDRjtBREpFO0VBQ0U7SUFDRSx1QkFBQTtFQ0ZKO0VESUU7SUFDRSx5QkFBQTtFQ0ZKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4tbG9hZGluZy9tYWluLWxvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi1sb2FkaW5nIHtcbiAgei1pbmRleDogOTk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmxvYWQtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAubGRzLWR1YWwtcmluZyB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICBtYXJnaW46IDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJvcmRlcjogNnB4IHNvbGlkICNjZWY7XG4gICAgICBib3JkZXItY29sb3I6ICNjZWYgdHJhbnNwYXJlbnQgI2NlZiB0cmFuc3BhcmVudDtcbiAgICAgIGFuaW1hdGlvbjogbGRzLWR1YWwtcmluZyAxLjJzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiBjYWxjKDUwJSAtIDIwcHgpO1xuICAgICAgbGVmdDogY2FsYyg1MCUgLSA0MHB4KTtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgbGRzLWR1YWwtcmluZyB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cbn1cbiIsIiNtYWluLWxvYWRpbmcge1xuICB6LWluZGV4OiA5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNtYWluLWxvYWRpbmcgLmxvYWQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI21haW4tbG9hZGluZyAubG9hZC1jb250YWluZXIgLmxkcy1kdWFsLXJpbmcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogNnB4IHNvbGlkICNjZWY7XG4gIGJvcmRlci1jb2xvcjogI2NlZiB0cmFuc3BhcmVudCAjY2VmIHRyYW5zcGFyZW50O1xuICBhbmltYXRpb246IGxkcy1kdWFsLXJpbmcgMS4ycyBsaW5lYXIgaW5maW5pdGU7XG59XG4jbWFpbi1sb2FkaW5nIC5sb2FkLWNvbnRhaW5lciBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYyg1MCUgLSAyMHB4KTtcbiAgbGVmdDogY2FsYyg1MCUgLSA0MHB4KTtcbiAgd2lkdGg6IDgwcHg7XG59XG5Aa2V5ZnJhbWVzIGxkcy1kdWFsLXJpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/main-loading/main-loading.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/main-loading/main-loading.component.ts ***!
  \*******************************************************************/
/*! exports provided: MainLoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLoadingComponent", function() { return MainLoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _main_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-loading.service */ "./src/app/components/main-loading/main-loading.service.ts");



let MainLoadingComponent = class MainLoadingComponent {
    constructor() {
        this.isProgress = _main_loading_service__WEBPACK_IMPORTED_MODULE_2__["MainLoadingService"].isProgress;
    }
    ngOnInit() {
    }
};
MainLoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-loading',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-loading.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-loading/main-loading.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-loading.component.scss */ "./src/app/components/main-loading/main-loading.component.scss")).default]
    })
], MainLoadingComponent);



/***/ }),

/***/ "./src/app/components/main-loading/main-loading.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/main-loading/main-loading.service.ts ***!
  \*****************************************************************/
/*! exports provided: MainLoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLoadingService", function() { return MainLoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let MainLoadingService = class MainLoadingService {
    static show() {
        this.isProgress.next(true);
    }
    static hide() {
        console.log("###################");
        this.isProgress.next(false);
    }
};
MainLoadingService.isProgress = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
MainLoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MainLoadingService);



/***/ }),

/***/ "./src/app/components/nav-header/nav-header.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/nav-header/nav-header.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-toolbar {\n  background-color: #262626;\n  display: flex;\n  align-items: center;\n}\nmat-toolbar a {\n  height: 70%;\n  margin-left: 15px;\n}\nmat-toolbar a img {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BhcGEvRG9jdW1lbnRvcy9wYXBhbmV0by9hdXhpbGlhL3Byb2pldG9zL21ldXJlbWVkaW8td2ViL3NyYy9hcHAvY29tcG9uZW50cy9uYXYtaGVhZGVyL25hdi1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWhlYWRlci9uYXYtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FDQ1I7QURDUTtFQUNJLFlBQUE7QUNDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWhlYWRlci9uYXYtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgYXtcbiAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG59IiwibWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxubWF0LXRvb2xiYXIgYSB7XG4gIGhlaWdodDogNzAlO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbm1hdC10b29sYmFyIGEgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/nav-header/nav-header.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/nav-header/nav-header.component.ts ***!
  \***************************************************************/
/*! exports provided: NavHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavHeaderComponent", function() { return NavHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavHeaderComponent = class NavHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-header/nav-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-header.component.scss */ "./src/app/components/nav-header/nav-header.component.scss")).default]
    })
], NavHeaderComponent);



/***/ }),

/***/ "./src/app/environments.ts":
/*!*********************************!*\
  !*** ./src/app/environments.ts ***!
  \*********************************/
/*! exports provided: EVIRONMENTS, MAPS_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVIRONMENTS", function() { return EVIRONMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAPS_KEY", function() { return MAPS_KEY; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const EVIRONMENTS = {
    MANAUS: 'http://apps.semsa.manaus.am.gov.br/api/v1/'
};
const MAPS_KEY = 'AIzaSyDKBB3HXOX-kJRBUxP9T8Kcq5d_tKA5zK0';


/***/ }),

/***/ "./src/app/providers/enums/marker-type.enum.ts":
/*!*****************************************************!*\
  !*** ./src/app/providers/enums/marker-type.enum.ts ***!
  \*****************************************************/
/*! exports provided: MarkerType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerType", function() { return MarkerType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var MarkerType;
(function (MarkerType) {
    MarkerType["FARMACIA"] = "FARMACIA";
    MarkerType["CUSTOMER"] = "CUSTOMER";
})(MarkerType || (MarkerType = {}));


/***/ }),

/***/ "./src/app/providers/model/custom-marker.dto.ts":
/*!******************************************************!*\
  !*** ./src/app/providers/model/custom-marker.dto.ts ***!
  \******************************************************/
/*! exports provided: CustomMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMarker", function() { return CustomMarker; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _farmacia_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./farmacia.model */ "./src/app/providers/model/farmacia.model.ts");


class CustomMarker {
    constructor() {
        this.farmacia = new _farmacia_model__WEBPACK_IMPORTED_MODULE_1__["Farmacia"]();
    }
}


/***/ }),

/***/ "./src/app/providers/model/distance-matrix.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/providers/model/distance-matrix.model.ts ***!
  \**********************************************************/
/*! exports provided: DistanceMatrix, DistanceStatus, DistanceElementsStatus, DistanceRow, DistanceElement, DistanceInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistanceMatrix", function() { return DistanceMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistanceStatus", function() { return DistanceStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistanceElementsStatus", function() { return DistanceElementsStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistanceRow", function() { return DistanceRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistanceElement", function() { return DistanceElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistanceInfo", function() { return DistanceInfo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class DistanceMatrix {
    constructor() {
        this.destinationAddresses = [];
        this.originAddresses = [];
        this.rows = [new DistanceRow()];
    }
}
var DistanceStatus;
(function (DistanceStatus) {
    DistanceStatus["OK"] = "OK";
    DistanceStatus["INVALID_REQUEST"] = "INVALID_REQUEST";
    DistanceStatus["MAX_ELEMENTS_EXCEEDED"] = "MAX_ELEMENTS_EXCEEDED";
    DistanceStatus["OVER_DAILY_LIMIT"] = "OVER_DAILY_LIMIT";
    DistanceStatus["OVER_QUERY_LIMIT"] = "OVER_QUERY_LIMIT";
    DistanceStatus["REQUEST_DENIED"] = "REQUEST_DENIED";
    DistanceStatus["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
})(DistanceStatus || (DistanceStatus = {}));
var DistanceElementsStatus;
(function (DistanceElementsStatus) {
    DistanceElementsStatus["OK"] = "OK";
    DistanceElementsStatus["NOT_FOUND"] = "NOT_FOUND";
    DistanceElementsStatus["ZERO_RESULTS"] = "ZERO_RESULTS";
    DistanceElementsStatus["MAX_ROUTE_LENGTH_EXCEEDED"] = "MAX_ROUTE_LENGTH_EXCEEDED";
})(DistanceElementsStatus || (DistanceElementsStatus = {}));
class DistanceRow {
    constructor() {
        this.elements = [];
    }
}
class DistanceElement {
}
class DistanceInfo {
}


/***/ }),

/***/ "./src/app/providers/model/farmacia.model.ts":
/*!***************************************************!*\
  !*** ./src/app/providers/model/farmacia.model.ts ***!
  \***************************************************/
/*! exports provided: Farmacia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Farmacia", function() { return Farmacia; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Farmacia {
}


/***/ }),

/***/ "./src/app/providers/model/medicamento.model.ts":
/*!******************************************************!*\
  !*** ./src/app/providers/model/medicamento.model.ts ***!
  \******************************************************/
/*! exports provided: Medicamento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Medicamento", function() { return Medicamento; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Medicamento {
}


/***/ }),

/***/ "./src/app/providers/service/farmacias.service.ts":
/*!********************************************************!*\
  !*** ./src/app/providers/service/farmacias.service.ts ***!
  \********************************************************/
/*! exports provided: FarmaciasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmaciasService", function() { return FarmaciasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments */ "./src/app/environments.ts");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rest.service */ "./src/app/providers/service/rest.service.ts");





let FarmaciasService = class FarmaciasService extends _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] {
    constructor(http) {
        super(http);
        this.baseUrl = _environments__WEBPACK_IMPORTED_MODULE_3__["EVIRONMENTS"].MANAUS + 'Unidades.php';
    }
    getAll() {
        return this.get(this.baseUrl);
    }
    getFilter(query) {
        return this.get(`${this.baseUrl}?query=%${query}%`);
    }
};
FarmaciasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
FarmaciasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], FarmaciasService);



/***/ }),

/***/ "./src/app/providers/service/medicamentos.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/providers/service/medicamentos.service.ts ***!
  \***********************************************************/
/*! exports provided: MedicamentosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicamentosService", function() { return MedicamentosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest.service */ "./src/app/providers/service/rest.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments */ "./src/app/environments.ts");





let MedicamentosService = class MedicamentosService extends _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] {
    constructor(http) {
        super(http);
        this.baseUrl = _environments__WEBPACK_IMPORTED_MODULE_4__["EVIRONMENTS"].MANAUS + 'Produtos.php';
    }
    getAll() {
        return this.get(this.baseUrl);
    }
    getFilter(query) {
        return this.get(`${this.baseUrl}?query=%${query}%`);
    }
};
MedicamentosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
MedicamentosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MedicamentosService);



/***/ }),

/***/ "./src/app/providers/service/rest.service.ts":
/*!***************************************************!*\
  !*** ./src/app/providers/service/rest.service.ts ***!
  \***************************************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm2015/Observable.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class RestService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    get(url, data) {
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrorObservable.bind(this)));
    }
    post(url, data) {
        return this.http.post(url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrorObservable.bind(this)));
    }
    put(url, data) {
        return this.http.put(url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrorObservable.bind(this)));
    }
    patch(url, data) {
        return this.http.patch(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrorObservable.bind(this)));
    }
    delete(url, data) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }), body: data
        };
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrorObservable.bind(this)));
    }
    handleErrorObservable(error) {
        let errorText = '';
        if (error.status === 401 || error.status === 403) {
            errorText = 'Acesso negado!';
        }
        else if (error.status === 0) {
            errorText = 'Falha na conexão!';
        }
        else {
            errorText = 'Desculpe! Houve um erro interno :(';
        }
        console.error(errorText);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
    }
    extractData(res) {
        try {
            const body = res.json();
            return body;
        }
        catch (error) {
            return res;
        }
    }
}


/***/ }),

/***/ "./src/app/utils/map-utils.ts":
/*!************************************!*\
  !*** ./src/app/utils/map-utils.ts ***!
  \************************************/
/*! exports provided: MapUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapUtils", function() { return MapUtils; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_get_location_get_location_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/get-location/get-location.component */ "./src/app/components/get-location/get-location.component.ts");
/* harmony import */ var _providers_enums_marker_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/enums/marker-type.enum */ "./src/app/providers/enums/marker-type.enum.ts");
/* harmony import */ var _providers_model_distance_matrix_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/model/distance-matrix.model */ "./src/app/providers/model/distance-matrix.model.ts");





class MapUtils {
    constructor(dialog) {
        this.dialog = dialog;
        // map params
        this.lat = -3.117034;
        this.lng = -60.025780;
        this.zoom = 15;
        this.modalJaExibido = false;
        this.naoSuportado = false;
        this.cmarkers = [];
        this.requestPosition = () => {
            if (!this.modalJaExibido) {
                this.locationDialog = this.dialog.open(_components_get_location_get_location_component__WEBPACK_IMPORTED_MODULE_2__["GetLocationComponent"], {
                    width: '250px'
                });
                this.locationDialog.afterClosed().subscribe(() => {
                    navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError);
                    window.scrollTo(0, document.body.scrollHeight);
                });
            }
            else {
                navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError);
            }
        };
        this.geoSuccess = (position) => {
            this.costumerPosition = position;
            this.afterLoadPosition();
        };
        this.geoError = (error) => {
            this.requestPosition();
            // switch (error.code) {
            //     case error.PERMISSION_DENIED:
            //         this.requestPosition();
            //         break;
            //     case error.TIMEOUT:
            //         this.requestPosition();
            //         break;
            //     case error.POSITION_UNAVAILABLE:
            //         this.requestPosition();
            //         break;
            //     default:
            //         return;
            // };
        };
    }
    ngOnInit() {
        this.initMaps();
    }
    initMaps() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const nativeMap = this.agmMap._mapsWrapper.getNativeMap();
            nativeMap.then(map => {
                this.gmaps = map;
                this.distanceService = new google.maps.DistanceMatrixService();
                this.afterInitMaps();
            });
        });
    }
    buildMarker(position, icon) {
        return new google.maps.Marker({
            position: position,
            icon: icon ? icon : 'assets/mapa/marker-farmacias.png'
        });
    }
    removeAllFarmaciaMarkers() {
        this.cmarkers.forEach(cmarker => {
            if (cmarker.type != _providers_enums_marker_type_enum__WEBPACK_IMPORTED_MODULE_3__["MarkerType"].CUSTOMER) {
                cmarker.marker.setMap(null);
            }
        });
        this.cmarkers = this.cmarkers.filter(cmarker => {
            return cmarker.type === _providers_enums_marker_type_enum__WEBPACK_IMPORTED_MODULE_3__["MarkerType"].CUSTOMER;
        });
    }
    moveToCenter() {
        if (this.costumerPosition) {
            const coordinates = { lat: this.costumerPosition.coords.latitude, lng: this.costumerPosition.coords.longitude };
            this.gmaps.panTo(coordinates);
            setTimeout(() => { this.smoothZoom(this.zoom, this.gmaps.getZoom()); }, 500);
            window.scrollTo(0, document.body.scrollHeight);
        }
        else {
            this.requestPosition();
        }
    }
    getDistance(origins, destinations) {
        this.distanceService.getDistanceMatrix({
            origins: origins,
            destinations: destinations,
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false
        }, (res, status) => {
            if (status === _providers_model_distance_matrix_model__WEBPACK_IMPORTED_MODULE_4__["DistanceStatus"].OK) {
                this.costumerDistance = res;
                this.afterLoadDistance();
            }
            else {
                console.error(`Erro ao carregar distâncias: ${status}`);
            }
        });
    }
    smoothZoom(max, cnt) {
        if (cnt >= max) {
            this.zoom = max;
            return;
        }
        else {
            const z = google.maps.event.addListener(this.gmaps, 'zoom_changed', () => {
                google.maps.event.removeListener(z);
                this.smoothZoom(max, cnt + 1);
            });
            setTimeout(() => { this.gmaps.setZoom(cnt); }, 80);
        }
    }
    afterLoadPosition() { }
    afterLoadDistance() { }
    afterInitMaps() { }
}
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', null)
], MapUtils.prototype, "agmMap", void 0);


/***/ }),

/***/ "./src/app/views/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/views/home/home.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#home {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#home form {\n  width: 90%;\n  z-index: 1;\n}\n#home form mat-form-field {\n  width: 100%;\n}\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\n  background-color: #fff;\n  color: transparent !important;\n  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.8);\n  border-radius: 4px;\n}\n::ng-deep .mat-form-field.mat-focused .mat-form-field-outline {\n  color: transparent !important;\n}\n@media only screen and (max-width: 600px) {\n  #home {\n    height: auto !important;\n  }\n  #home .side-content {\n    width: 85%;\n    padding-top: 25px;\n  }\n  #home img {\n    width: 65%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BhcGEvRG9jdW1lbnRvcy9wYXBhbmV0by9hdXhpbGlhL3Byb2pldG9zL21ldXJlbWVkaW8td2ViL3NyYy9hcHAvdmlld3MvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLFVBQUE7RUFDQSxVQUFBO0FDQ0o7QURDSTtFQUNFLFdBQUE7QUNDTjtBRElBO0VBQ0ksc0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7QUNESjtBRElBO0VBQ0ksNkJBQUE7QUNESjtBRElBO0VBQ0U7SUFDRSx1QkFBQTtFQ0RGO0VER0U7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUNESjtFRElFO0lBQ0UsVUFBQTtFQ0ZKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaG9tZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgZm9ybSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICNob21lIHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcblxuICAgIC5zaWRlLWNvbnRlbnQge1xuICAgICAgd2lkdGg6IDg1JTtcbiAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogNjUlO1xuICAgIH1cbiAgfVxufVxuIiwiI2hvbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI2hvbWUgZm9ybSB7XG4gIHdpZHRoOiA5MCU7XG4gIHotaW5kZXg6IDE7XG59XG4jaG9tZSBmb3JtIG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgI2hvbWUge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gICNob21lIC5zaWRlLWNvbnRlbnQge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gIH1cbiAgI2hvbWUgaW1nIHtcbiAgICB3aWR0aDogNjUlO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_providers_service_medicamentos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/service/medicamentos.service */ "./src/app/providers/service/medicamentos.service.ts");




let HomeComponent = class HomeComponent {
    constructor(service) {
        this.service = service;
        this.onRemedioSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.remedios = [];
        this.textQuery = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.filteredRemedios = [];
    }
    ngOnInit() {
        this.getMedicamentos();
        this.textQuery.valueChanges.subscribe((query) => {
            this.filteredRemedios = this.remedios.filter((rem) => {
                return rem.descricao.toLowerCase().includes(query.toLowerCase());
            });
        });
    }
    remedioSelected() {
        this.medicamento = this.remedios.find((rem) => rem.descricao.toLowerCase() === this.textQuery.value.toLowerCase());
        this.onRemedioSelected.emit(this.medicamento);
    }
    getMedicamentos() {
        this.service.getAll().subscribe(success => {
            this.remedios = success;
            this.filteredRemedios = success;
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_providers_service_medicamentos_service__WEBPACK_IMPORTED_MODULE_3__["MedicamentosService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HomeComponent.prototype, "onRemedioSelected", void 0);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/views/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/views/unidades/unidades.component.scss":
/*!********************************************************!*\
  !*** ./src/app/views/unidades/unidades.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#unidades .map-options-down {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  position: fixed;\n  bottom: 10px;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n}\n#unidades .map-options-down .remedio-name {\n  border-radius: 6px;\n  background-color: #0673aa;\n  margin: 0 5px;\n  display: flex;\n  align-items: center;\n  padding: 5px 5px;\n  justify-content: center;\n  min-width: 65%;\n  min-height: 28px;\n}\n#unidades .map-options-down .remedio-name sub {\n  color: #fff;\n  word-wrap: break-word;\n  line-height: 13px;\n  text-align: center;\n  font-weight: 800;\n}\n#unidades .map-options-down button {\n  background-color: #0673aa;\n  color: #fff;\n  margin: 0 5px;\n}\n#unidades agm-map {\n  height: 100vh;\n}\napp-farmacy-list {\n  height: 100vh;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  transition: transform 0.5s ease-in-out;\n  left: 0;\n  background-color: #fff;\n  transform: translateY(100%);\n  z-index: 1;\n}\napp-farmacy-list.show {\n  transform: translateY(0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BhcGEvRG9jdW1lbnRvcy9wYXBhbmV0by9hdXhpbGlhL3Byb2pldG9zL21ldXJlbWVkaW8td2ViL3NyYy9hcHAvdmlld3MvdW5pZGFkZXMvdW5pZGFkZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3VuaWRhZGVzL3VuaWRhZGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0FKO0FERUk7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNBTjtBREVNO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQVI7QURJSTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNGTjtBRE1FO0VBQ0UsYUFBQTtBQ0pKO0FEUUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0Esc0NBQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7QUNMRjtBRE9FO0VBQ0Usd0JBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VuaWRhZGVzL3VuaWRhZGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3VuaWRhZGVzIHtcbiAgLm1hcC1vcHRpb25zLWRvd24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5yZW1lZGlvLW5hbWUge1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzNhYTtcbiAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1pbi13aWR0aDogNjUlO1xuICAgICAgbWluLWhlaWdodDogMjhweDtcblxuICAgICAgc3ViIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzNhYTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICB9XG4gIH1cblxuICBhZ20tbWFwIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG59XG5cbmFwcC1mYXJtYWN5LWxpc3Qge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZS1pbi1vdXQ7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgei1pbmRleDogMTtcbiAgXG4gICYuc2hvdyB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG4iLCIjdW5pZGFkZXMgLm1hcC1vcHRpb25zLWRvd24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDEwcHg7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xufVxuI3VuaWRhZGVzIC5tYXAtb3B0aW9ucy1kb3duIC5yZW1lZGlvLW5hbWUge1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjczYWE7XG4gIG1hcmdpbjogMCA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4td2lkdGg6IDY1JTtcbiAgbWluLWhlaWdodDogMjhweDtcbn1cbiN1bmlkYWRlcyAubWFwLW9wdGlvbnMtZG93biAucmVtZWRpby1uYW1lIHN1YiB7XG4gIGNvbG9yOiAjZmZmO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4jdW5pZGFkZXMgLm1hcC1vcHRpb25zLWRvd24gYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzNhYTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMCA1cHg7XG59XG4jdW5pZGFkZXMgYWdtLW1hcCB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmFwcC1mYXJtYWN5LWxpc3Qge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gIHotaW5kZXg6IDE7XG59XG5hcHAtZmFybWFjeS1saXN0LnNob3cge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG59Il19 */");

/***/ }),

/***/ "./src/app/views/unidades/unidades.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/unidades/unidades.component.ts ***!
  \******************************************************/
/*! exports provided: UnidadesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadesComponent", function() { return UnidadesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_components_main_loading_main_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/main-loading/main-loading.service */ "./src/app/components/main-loading/main-loading.service.ts");
/* harmony import */ var src_app_providers_enums_marker_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/enums/marker-type.enum */ "./src/app/providers/enums/marker-type.enum.ts");
/* harmony import */ var src_app_providers_model_custom_marker_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/model/custom-marker.dto */ "./src/app/providers/model/custom-marker.dto.ts");
/* harmony import */ var src_app_providers_model_medicamento_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/model/medicamento.model */ "./src/app/providers/model/medicamento.model.ts");
/* harmony import */ var src_app_providers_service_farmacias_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/service/farmacias.service */ "./src/app/providers/service/farmacias.service.ts");
/* harmony import */ var src_app_utils_map_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/utils/map-utils */ "./src/app/utils/map-utils.ts");









let UnidadesComponent = class UnidadesComponent extends src_app_utils_map_utils__WEBPACK_IMPORTED_MODULE_8__["MapUtils"] {
    constructor(service, dialog) {
        super(dialog);
        this.service = service;
        this.farmacias = [];
        this.nearFarmacias = [];
        this.farmaciasComMedicamento = [];
        this.showPharmList = false;
    }
    ngOnInit() {
        super.ngOnInit();
    }
    afterInitMaps() {
        this.getFarmacias();
    }
    getFarmacias() {
        this.service.getAll().subscribe(success => {
            this.farmacias = success;
            this.buildFarmaciaMarkers(this.farmacias);
            setTimeout(() => { src_app_components_main_loading_main_loading_service__WEBPACK_IMPORTED_MODULE_3__["MainLoadingService"].hide(); }, 1000);
        }, () => {
            setTimeout(() => { src_app_components_main_loading_main_loading_service__WEBPACK_IMPORTED_MODULE_3__["MainLoadingService"].hide(); }, 1000);
        });
    }
    buildFarmaciaMarkers(farmacias) {
        for (let i = 0; i < farmacias.length; i++) {
            const coordinates = { lat: parseFloat(farmacias[i].latitude), lng: parseFloat(farmacias[i].longitude) };
            const marker = this.buildMarker(coordinates);
            const cmarker = new src_app_providers_model_custom_marker_dto__WEBPACK_IMPORTED_MODULE_5__["CustomMarker"]();
            cmarker.type = src_app_providers_enums_marker_type_enum__WEBPACK_IMPORTED_MODULE_4__["MarkerType"].FARMACIA;
            cmarker.marker = marker;
            cmarker.fieldId = i;
            cmarker.farmacia = farmacias[i];
            cmarker.marker.setMap(this.gmaps);
            this.cmarkers.push(cmarker);
        }
    }
    createCustomerMarker(coordinates) {
        const marker = this.buildMarker(coordinates, 'assets/mapa/marker-person.png');
        const cmarker = new src_app_providers_model_custom_marker_dto__WEBPACK_IMPORTED_MODULE_5__["CustomMarker"]();
        cmarker.type = src_app_providers_enums_marker_type_enum__WEBPACK_IMPORTED_MODULE_4__["MarkerType"].CUSTOMER;
        cmarker.marker = marker;
        cmarker.marker.setMap(this.gmaps);
        return cmarker;
    }
    setRemedio(remedio) {
        this.remedio = new src_app_providers_model_medicamento_model__WEBPACK_IMPORTED_MODULE_6__["Medicamento"]();
        Object.assign(this.remedio, remedio);
        this.moveToCenter();
    }
    afterLoadPosition() {
        const coordinates = { lat: this.costumerPosition.coords.latitude, lng: this.costumerPosition.coords.longitude };
        this.cmarkers.push(this.createCustomerMarker(coordinates));
        this.gmaps.panTo(coordinates);
        setTimeout(() => { this.smoothZoom(this.zoom, this.gmaps.getZoom()); }, 500);
        this.showOnlyNearFarmacias();
    }
    gotoPharmacy(cmkr) {
        this.togglePharmList();
        const coordinates = { lat: parseFloat(cmkr.farmacia.latitude), lng: parseFloat(cmkr.farmacia.longitude) };
        setTimeout(() => { this.gmaps.panTo(coordinates); }, 500);
    }
    showOnlyNearFarmacias() {
        // TODO: filtrar por farmácias que possuem o Medicamento pesquisado
        this.farmaciasComMedicamento = this.farmacias.slice(60, 80);
        const destinations = this.farmaciasComMedicamento.map(farm => { return { lat: parseFloat(farm.latitude), lng: parseFloat(farm.longitude) }; });
        const origins = [{ lat: this.costumerPosition.coords.latitude, lng: this.costumerPosition.coords.longitude }];
        this.getDistance(origins, destinations);
    }
    afterLoadDistance() {
        this.removeAllFarmaciaMarkers();
        this.createCustomMarkersFrom(this.farmaciasComMedicamento);
        this.removeMarkersOutOfRadius(10000);
        console.log(this.cmarkers);
    }
    createCustomMarkersFrom(farmacias) {
        for (let i = 0; i < farmacias.length; i++) {
            const coordinates = { lat: parseFloat(farmacias[i].latitude), lng: parseFloat(farmacias[i].longitude) };
            const marker = this.buildMarker(coordinates);
            const cmarker = new src_app_providers_model_custom_marker_dto__WEBPACK_IMPORTED_MODULE_5__["CustomMarker"]();
            cmarker.farmacia = farmacias[i];
            cmarker.distanceInfo = this.costumerDistance.rows[0].elements[i];
            cmarker.type = src_app_providers_enums_marker_type_enum__WEBPACK_IMPORTED_MODULE_4__["MarkerType"].FARMACIA;
            cmarker.marker = marker;
            cmarker.fieldId = i;
            cmarker.marker.setMap(this.gmaps);
            this.cmarkers.push(cmarker);
        }
    }
    removeMarkersOutOfRadius(raio) {
        const cmarkersAux = [];
        this.cmarkers.forEach((cmkr) => {
            if (cmkr.type === src_app_providers_enums_marker_type_enum__WEBPACK_IMPORTED_MODULE_4__["MarkerType"].FARMACIA) {
                if (cmkr.distanceInfo.distance.value <= raio) {
                    cmarkersAux.push(cmkr);
                }
                else {
                    cmkr.marker.setMap(null);
                }
            }
        });
        cmarkersAux.push(this.cmarkers.find(cmk => cmk.type === src_app_providers_enums_marker_type_enum__WEBPACK_IMPORTED_MODULE_4__["MarkerType"].CUSTOMER));
        this.cmarkers = [];
        this.cmarkers = cmarkersAux;
    }
    scrollToTop() {
        window.scrollTo(0, 0);
    }
    togglePharmList() {
        this.showPharmList = !this.showPharmList;
    }
};
UnidadesComponent.ctorParameters = () => [
    { type: src_app_providers_service_farmacias_service__WEBPACK_IMPORTED_MODULE_7__["FarmaciasService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
UnidadesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unidades',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./unidades.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/unidades/unidades.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./unidades.component.scss */ "./src/app/views/unidades/unidades.component.scss")).default]
    })
], UnidadesComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/papa/Documentos/papaneto/auxilia/projetos/meuremedio-web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map