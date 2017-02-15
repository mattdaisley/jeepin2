webpackJsonp([0,3],{

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocketService = (function () {
    function SocketService() {
        this.url = 'http://127.0.0.1:7768';
        // this.connect();
    }
    SocketService.prototype.connect = function () {
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(this.url);
        return this.socket;
    };
    SocketService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], SocketService);
    return SocketService;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/socket.service.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            styles: [__webpack_require__(714)],
            template: '<div class="container"><h2>Page not found</h2></div>'
        }), 
        __metadata('design:paramtypes', [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/page-not-found.component.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bluetooth_service__ = __webpack_require__(344);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BluetoothComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BluetoothComponent = (function () {
    function BluetoothComponent(bluetoothService) {
        this.bluetoothService = bluetoothService;
        console.log('component connect bluetoothService');
        this.bluetoothService.connect();
    }
    BluetoothComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.devices = this.bluetoothService.getDevices();
        this.connection = this.bluetoothService.getDevices().subscribe(function (devices) {
            _this.devices = devices;
        });
        // this.connection = this.bluetoothService.getDevices().subscribe(devices => {
        //   this.devices = devices;
        // });
    };
    BluetoothComponent.prototype.ngOnDestroy = function () {
        console.log('bluetooth component destroyed');
        this.connection.unsubscribe();
    };
    BluetoothComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-bluetooth',
            template: __webpack_require__(722),
            styles: [__webpack_require__(717)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bluetooth_service__["a" /* BluetoothService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__bluetooth_service__["a" /* BluetoothService */]) === 'function' && _a) || Object])
    ], BluetoothComponent);
    return BluetoothComponent;
    var _a;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/bluetooth.component.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_socket_service_socket_service__ = __webpack_require__(220);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BluetoothService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BluetoothService = (function () {
    function BluetoothService(socketService) {
        this.socketService = socketService;
    }
    BluetoothService.prototype.connect = function () {
        this.socket = this.socketService.connect();
        console.log('service emit', this.socket);
        this.socket.emit('bluetooth/connected', 'request bluetooth/connection');
    };
    BluetoothService.prototype.getDevices = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('bluetooth/devices', function (data) {
                console.log(data.content);
                var devices = data.content;
                observer.next(devices);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    BluetoothService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_socket_service_socket_service__["a" /* SocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_socket_service_socket_service__["a" /* SocketService */]) === 'function' && _a) || Object])
    ], BluetoothService);
    return BluetoothService;
    var _a;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/bluetooth.service.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsHomeComponent = (function () {
    function SettingsHomeComponent() {
    }
    SettingsHomeComponent.prototype.ngOnInit = function () {
    };
    SettingsHomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-settings-home',
            template: __webpack_require__(723),
            styles: [__webpack_require__(718)]
        }), 
        __metadata('design:paramtypes', [])
    ], SettingsHomeComponent);
    return SettingsHomeComponent;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/settings-home.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
        var _this = this;
        this.toggleFullScreen = function () {
            if (electron !== undefined) {
                electron.ipcRenderer.send('setFullScreen', !_this.isFullScreen);
            }
        };
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (electron !== undefined) {
            this.toggleFullScreenEnabled = true;
            electron.ipcRenderer.on('setFullScreen-reply', function (event, arg) {
                _this.isFullScreen = arg;
            });
            electron.ipcRenderer.on('isFullScreen-reply', function (event, arg) {
                _this.isFullScreen = arg;
            });
            electron.ipcRenderer.send('isFullScreen', 'checking fullscreen');
        }
        else {
            this.toggleFullScreenEnabled = false;
            this.isFullScreen = false;
        }
    };
    SettingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-settings',
            template: __webpack_require__(724),
            styles: [__webpack_require__(719)]
        }), 
        __metadata('design:paramtypes', [])
    ], SettingsComponent);
    return SettingsComponent;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/settings.component.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tilt_gauges_service__ = __webpack_require__(537);
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
    TiltGaugesComponent.prototype.updateOffset = function () {
        this.pitchOffset = this.pitch;
        this.rollOffset = this.roll;
    };
    TiltGaugesComponent.prototype.ngOnDestroy = function () {
        console.log('tilt-gagues component destroyed');
        this.connection.unsubscribe();
    };
    TiltGaugesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'tiltGauges',
            template: __webpack_require__(725),
            styles: [__webpack_require__(715)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__tilt_gauges_service__["a" /* TiltGaugesService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tilt_gauges_service__["a" /* TiltGaugesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__tilt_gauges_service__["a" /* TiltGaugesService */]) === 'function' && _a) || Object])
    ], TiltGaugesComponent);
    return TiltGaugesComponent;
    var _a;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/tilt-gauges.component.js.map

/***/ }),

/***/ 413:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 413;


/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(531);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/main.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_pages_routes_module__ = __webpack_require__(533);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var appRoutes = __WEBPACK_IMPORTED_MODULE_2__pages_pages_routes_module__["a" /* pageRoutes */].slice();
var AppRoutesModule = (function () {
    function AppRoutesModule() {
    }
    AppRoutesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutesModule);
    return AppRoutesModule;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/app-routes.module.js.map

/***/ }),

/***/ 530:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(720),
            styles: [__webpack_require__(712)],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/app.component.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_socket_service_socket_service__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes_module__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pages_module__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menu_menu_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__status_bar_status_bar_component__ = __webpack_require__(538);
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
            providers: [__WEBPACK_IMPORTED_MODULE_4__shared_socket_service_socket_service__["a" /* SocketService */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                // PageRoutesModule,
                __WEBPACK_IMPORTED_MODULE_7__pages_pages_module__["a" /* PagesModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routes_module__["a" /* AppRoutesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_9__status_bar_status_bar_component__["a" /* StatusBarComponent */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/app.module.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__(721),
            styles: [__webpack_require__(713)]
        }), 
        __metadata('design:paramtypes', [])
    ], MenuComponent);
    return MenuComponent;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/menu.component.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tilt_gauges_tilt_gauges_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_pages_page_not_found_component__ = __webpack_require__(342);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pageRoutes; });


var pageRoutes = [
    { path: 'tilt-gauges', component: __WEBPACK_IMPORTED_MODULE_0__tilt_gauges_tilt_gauges_component__["a" /* TiltGaugesComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__error_pages_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/pages-routes.module.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tilt_gauges_tilt_gauges_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error_pages_page_not_found_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_settings_module__ = __webpack_require__(536);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__settings_settings_module__["a" /* SettingsModule */]
            ],
            providers: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__tilt_gauges_tilt_gauges_component__["a" /* TiltGaugesComponent */],
                __WEBPACK_IMPORTED_MODULE_5__error_pages_page_not_found_component__["a" /* PageNotFoundComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PagesModule);
    return PagesModule;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/pages.module.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_home_settings_home_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bluetooth_bluetooth_component__ = __webpack_require__(343);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var settingsRoutes = [
    {
        path: 'settings',
        component: __WEBPACK_IMPORTED_MODULE_2__settings_component__["a" /* SettingsComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_3__settings_home_settings_home_component__["a" /* SettingsHomeComponent */]
            },
            {
                path: 'bluetooth',
                component: __WEBPACK_IMPORTED_MODULE_4__bluetooth_bluetooth_component__["a" /* BluetoothComponent */]
            }
        ]
    }
];
var SettingsRoutingModule = (function () {
    function SettingsRoutingModule() {
    }
    SettingsRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(settingsRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SettingsRoutingModule);
    return SettingsRoutingModule;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/settings-routes.module.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bluetooth_bluetooth_service__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_routes_module__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bluetooth_bluetooth_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings_home_settings_home_component__ = __webpack_require__(345);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SettingsModule = (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                // BrowserModule,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["g" /* CommonModule */],
                // HttpModule,
                __WEBPACK_IMPORTED_MODULE_4__settings_routes_module__["a" /* SettingsRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__bluetooth_bluetooth_component__["a" /* BluetoothComponent */],
                __WEBPACK_IMPORTED_MODULE_7__settings_home_settings_home_component__["a" /* SettingsHomeComponent */]
            ],
            exports: [],
            providers: [__WEBPACK_IMPORTED_MODULE_3__bluetooth_bluetooth_service__["a" /* BluetoothService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], SettingsModule);
    return SettingsModule;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/settings.module.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_socket_service_socket_service__ = __webpack_require__(220);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TiltGaugesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TiltGaugesService = (function () {
    function TiltGaugesService(socketService) {
        this.socketService = socketService;
    }
    TiltGaugesService.prototype.connect = function () {
        this.socket = this.socketService.connect();
        this.socket.emit('gyro/connected', 'request gyro/connection');
    };
    TiltGaugesService.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('gyro/data', function (data) {
                console.log(data.content);
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
    TiltGaugesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_socket_service_socket_service__["a" /* SocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_socket_service_socket_service__["a" /* SocketService */]) === 'function' && _a) || Object])
    ], TiltGaugesService);
    return TiltGaugesService;
    var _a;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/tilt-gauges.service.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatusBarComponent = (function () {
    function StatusBarComponent() {
    }
    StatusBarComponent.prototype.ngOnInit = function () {
    };
    StatusBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-status-bar',
            template: __webpack_require__(726),
            styles: [__webpack_require__(716)]
        }), 
        __metadata('design:paramtypes', [])
    ], StatusBarComponent);
    return StatusBarComponent;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/status-bar.component.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/environment.prod.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/polyfills.js.map

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #000; }\n  .wrapper .container {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    width: 100%;\n    max-width: 100%;\n    height: 100%;\n    max-height: 100%;\n    /*border: 1px solid #ccc;*/\n    overflow: hidden; }\n  .wrapper .menu {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    width: 100%;\n    max-width: 80px;\n    height: 100%;\n    max-height: 100%;\n    background: black;\n    /*border-width: 1px 0 1px 1px;\n    border-style: solid;\n    border-color: #ccc;*/ }\n  .wrapper .main-wrapper {\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -ms-flex-line-pack: stretch;\n        align-content: stretch;\n    position: relative; }\n    .wrapper .main-wrapper app-status-bar {\n      position: absolute;\n      width: 100%;\n      background-color: #000; }\n    .wrapper .main-wrapper .main-content {\n      background: -webkit-linear-gradient(115deg, #035584, black, black, #035584);\n      background: linear-gradient(-25deg, #035584, black, black, #035584);\n      position: absolute;\n      box-sizing: border-box;\n      padding: 110px 30px 30px;\n      height: 100%;\n      width: 100%; }\n"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = ".container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 10px;\n  text-align: center;\n  overflow: hidden;\n  height: 100%;\n  box-sizing: border-box; }\n\n.container i {\n  max-width: 100%;\n  height: auto;\n  color: #fff;\n  margin: 15px 0; }\n"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = ".container {\n  max-width: 100%;\n  height: auto;\n  color: #fff;\n  margin: 15px 0; }\n"

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = ".container-column {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 100%; }\n\n.cluster-wrapper {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 100%;\n  height: 100%; }\n\n.cluster {\n  /*height: 100%;*/\n  /*max-height: 450px; */\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative; }\n\n.guage {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position: relative;\n  max-width: 800px;\n  padding: 15px; }\n\n.guage:before {\n  content: \"\";\n  display: block;\n  padding-top: 100%;\n  /* initial ratio of 1:1*/ }\n\n.guage .content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n\n.guage img {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transition: .2s ease-in-out;\n  transition: .2s ease-in-out; }\n\n.guage .deg-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.guage .deg {\n  position: absolute;\n  left: 37.5%;\n  top: 67%;\n  width: 25%;\n  height: 25%;\n  font-size: 3em;\n  color: #ffffff;\n  text-align: center; }\n\n.button-menu {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  max-height: 80px;\n  text-align: center; }\n\n.button-menu .button-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100%;\n  border-top: 1px solid #ccc;\n  margin: 0 25px; }\n"

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = ".container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 20px;\n  text-align: center;\n  overflow: hidden;\n  height: 80px;\n  box-sizing: border-box;\n  color: #fff;\n  font-size: 3em; }\n"

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <app-menu class=\"menu\"></app-menu>\n\n\n  <div class=\"container\">\n    <div class=\"main-wrapper\">\n\n      <div class=\"main-content\">\n        <router-outlet></router-outlet>\n      </div>\n      \n      <app-status-bar></app-status-bar>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <a routerLink=\"/\" routerLinkActive=\"active\"><i class=\"fa fa-home fa-3x\" aria-hidden=\"true\"> </i></a>\n  <a routerLink=\"/music\" routerLinkActive=\"active\"><i class=\"fa fa-music fa-3x\" aria-hidden=\"true\"> </i></a>\n  <a routerLink=\"/tilt-gauges\" routerLinkActive=\"active\"><i class=\"fa fa-tachometer fa-3x\" aria-hidden=\"true\"> </i></a>\n  <a routerLink=\"/nav\" routerLinkActive=\"active\"><i class=\"fa fa-map-o fa-3x\" aria-hidden=\"true\"> </i></a>\n  <a routerLink=\"/obd\" routerLinkActive=\"active\"><i class=\"fa fa-car fa-3x\" aria-hidden=\"true\"> </i></a>\n  <a routerLink=\"/settings\" routerLinkActive=\"active\"><i class=\"fa fa-gear fa-3x\" aria-hidden=\"true\"> </i></a>\n</div>"

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"list\">\n  <div class=\"list-item\" *ngFor=\"let device of devices\">{{device.name}}</div>\n</div>"

/***/ }),

/***/ 723:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-column\">\n\n  <button routerLink=\"./bluetooth\" routerLinkActive=\"active\">Bluetooth Settings</button>\n  <button (click)=\"toggleFullScreen()\" [disabled]=\"!toggleFullScreenEnabled\">Toggle FullScreen</button>\n\n</div>"

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-column\">\n  <div class=\"cluster-wrapper\">\n    <div class=\"cluster\">\n      <div class=\"guage\">\n        <div class=\"content\">\n          <img src=\"assets/guage1.png\"/>\n          <img src=\"assets/guage3.png\" [ngStyle]=\"{'transform': 'rotate('+(roll - rollOffset)+'deg)'}\"/>\n          <img src=\"assets/guage2.png\"/>\n          <img src=\"assets/jeepside.png\" [ngStyle]=\"{'transform': 'rotate('+(roll - rollOffset)+'deg)'}\"/>\n          <img src=\"assets/guage4.png\"/>\n          <div class=\"deg-wrapper\">\n            <div class=\"deg\">{{roll - rollOffset}}<sup>o</sup></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"guage\">\n        <div class=\"content\">\n          <img src=\"assets/guage1.png\"/>\n          <img src=\"assets/guage3.png\" [ngStyle]=\"{'transform': 'rotate(-'+(pitch - pitchOffset)+'deg)'}\"/>\n          <img src=\"assets/guage2.png\"/>\n          <img src=\"assets/jeeprear.png\" [ngStyle]=\"{'transform': 'rotate(-'+(pitch - pitchOffset)+'deg)'}\"/>\n          <img src=\"assets/guage4.png\"/>\n          <div class=\"deg-wrapper\">\n            <div class=\"deg\">{{pitch - pitchOffset}}<sup>o</sup></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"button-menu\">\n    <div class=\"button-wrapper\">\n      <button (click)=\"updateOffset()\">Reset Gyro to 0</button>\n      <button (click)=\"updateOffset()\">Button 2</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  10:10\n</div>"

/***/ }),

/***/ 752:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(414);


/***/ })

},[753]);
//# sourceMappingURL=main.bundle.map