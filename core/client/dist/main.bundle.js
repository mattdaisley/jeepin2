webpackJsonp([0,3],{

/***/ 364:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 364;


/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(473);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/main.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(651),
            styles: [__webpack_require__(649)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/app.component.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tilt_gauges_tilt_gauges_component__ = __webpack_require__(474);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__tilt_gauges_tilt_gauges_component__["a" /* TiltGaugesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/app.module.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tilt_gauges_service__ = __webpack_require__(475);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TiltGaugesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TiltGaugesComponent = (function () {
    function TiltGaugesComponent(tiltGaugesService) {
        this.tiltGaugesService = tiltGaugesService;
        this.messages = [];
        this.pitchOffset = 0;
        this.rollOffset = 0;
        this.tiltGaugesService.connect();
    }
    TiltGaugesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connection = this.tiltGaugesService.getMessages().subscribe(function (message) {
            _this.pitch = message.pitch;
            _this.roll = message.roll;
        });
    };
    TiltGaugesComponent.prototype.ngAfterViewInit = function () {
        console.log('go fullscreen');
        this.fullscreen();
    };
    TiltGaugesComponent.prototype.fullscreen = function () {
        var element = document.documentElement;
        // Supports most browsers and their versions.
        var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
        if (requestMethod) {
            requestMethod.call(element);
        }
    };
    TiltGaugesComponent.prototype.updateOffset = function () {
        this.pitchOffset = this.pitch;
        this.rollOffset = this.roll;
    };
    TiltGaugesComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    TiltGaugesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'tiltGauges',
            template: __webpack_require__(652),
            styles: [__webpack_require__(650)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__tilt_gauges_service__["a" /* TiltGaugesService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tilt_gauges_service__["a" /* TiltGaugesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__tilt_gauges_service__["a" /* TiltGaugesService */]) === 'function' && _a) || Object])
    ], TiltGaugesComponent);
    return TiltGaugesComponent;
    var _a;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/tilt-gauges.component.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TiltGaugesService; });


var TiltGaugesService = (function () {
    function TiltGaugesService() {
        this.url = 'http://127.0.0.1:7768';
    }
    TiltGaugesService.prototype.connect = function () {
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(this.url);
        this.socket.emit('new connection', 'testing socket connection');
    };
    TiltGaugesService.prototype.sendMessage = function (message) {
        this.socket.emit('add-message', message);
    };
    TiltGaugesService.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                var gyroData = { pitch: 0, roll: 0 };
                gyroData.pitch = parseInt(data.content.pitch);
                gyroData.roll = parseInt(data.content.roll);
                observer.next(gyroData);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return TiltGaugesService;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/tilt-gauges.service.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/environment.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/polyfills.js.map

/***/ }),

/***/ 649:
/***/ (function(module, exports) {

module.exports = ".wrapper { \n  height: 100%; \n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #000;\n}\n\n.wrapper .container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 100%;\n  max-width: 720px;\n  height: 100%;\n  max-height: 480px;\n  border: 1px solid #ccc;\n  overflow: hidden;\n}\n\n.wrapper .menu {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 100%;\n  max-width: 80px;\n  height: 100%;\n  max-height: 480px;\n  background: black;\n  border-width: 1px 0 1px 1px;\n  border-style: solid;\n  border-color: #ccc;\n}"

/***/ }),

/***/ 650:
/***/ (function(module, exports) {

module.exports = ".container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 100%;\n  background: -webkit-linear-gradient(115deg,#035584, black, black,#035584);\n  background: linear-gradient(-25deg,#035584, black, black,#035584);\n}\n\n.cluster-wrapper {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 100%;\n  height: 100%;\n}\n\n.cluster { \n  /*height: 100%;*/\n  /*max-height: 450px; */\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n}\n\n.guage {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position:relative;\n  max-width: 450px;\n  padding: 15px;\n}\n.guage:before{\n\tcontent: \"\";\n\tdisplay: block;\n\tpadding-top: 100%; \t/* initial ratio of 1:1*/\n}\n.guage .content {\n  position:  absolute;\n\ttop: 0;\n\tleft: 0;\n\tbottom: 0;\n\tright: 0;\n}\n.guage img {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transition: .2s ease-in-out;\n  transition: .2s ease-in-out;\n}\n.guage .deg-wrapper {\n  position: absolute;\n  top: 0; \n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.guage .deg {\n  position:absolute; \n  left: 37.5%; \n  top: 67%; width: 25%; \n  height: 25%; \n  font-size: 3em; \n  color: #ffffff; text-align:center;\n}\n\n.button-menu {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 100%; \n  max-height: 80px;\n  text-align: center;\n}\n\n.button-menu .button-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100%;\n  border-top: 1px solid #ccc;\n  margin: 0 25px;\n}\n\n.button-menu .button-wrapper button {\n  padding: 20px;\n  border-radius: 5px;\n  border: 1px solid #CCC;\n  /*border: 1px solid #71D1F1;*/\n  background-color: #000;\n  color: #fff;\n  font-size: 1.3em;\n  margin: 0 10px;\n}\n\nbutton:hover {\n  cursor: pointer; \n}\n\nbutton:focus {\n  outline: none;\n}\n\n\n"

/***/ }),

/***/ 651:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"menu\">\n    <i class=\"fa fa-american-sign-language-interpreting fa-5x\" aria-hidden=\"true\"> </i>\n  </div>\n  <div class=\"container\">\n    <tiltGauges></tiltGauges>\n  </div>\n</div>"

/***/ }),

/***/ 652:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"cluster-wrapper\">\n    <div class=\"cluster\">\n      <div class=\"guage\">\n        <div class=\"content\">\n          <img src=\"assets/guage1.png\"/>\n          <img src=\"assets/guage3.png\" [ngStyle]=\"{'transform': 'rotate('+(pitch - pitchOffset)+'deg)'}\"/>\n          <img src=\"assets/guage2.png\"/>\n          <img src=\"assets/jeepside.png\" [ngStyle]=\"{'transform': 'rotate('+(pitch - pitchOffset)+'deg)'}\"/>\n          <img src=\"assets/guage4.png\"/>\n          <div class=\"deg-wrapper\">\n            <div class=\"deg\">{{pitch - pitchOffset}}<sup>o</sup></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"guage\">\n        <div class=\"content\">\n          <img src=\"assets/guage1.png\"/>\n          <img src=\"assets/guage3.png\" [ngStyle]=\"{'transform': 'rotate('+(roll - rollOffset)+'deg)'}\"/>\n          <img src=\"assets/guage2.png\"/>\n          <img src=\"assets/jeeprear.png\" [ngStyle]=\"{'transform': 'rotate('+(roll - rollOffset)+'deg)'}\"/>\n          <img src=\"assets/guage4.png\"/>\n          <div class=\"deg-wrapper\">\n            <div class=\"deg\">{{roll - rollOffset}}<sup>o</sup></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"button-menu\">\n    <div class=\"button-wrapper\">\n      <button (click)=\"updateOffset()\">Reset Gyro to 0</button>\n      <button (click)=\"updateOffset()\">Button 2</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(365);


/***/ })

},[674]);
//# sourceMappingURL=main.bundle.map