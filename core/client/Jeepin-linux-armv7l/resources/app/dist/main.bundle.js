webpackJsonp([0,3],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_socket_service_socket_service__ = __webpack_require__(156);
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
        this.isConnecting = false;
    }
    BluetoothService.prototype.connect = function () {
        this.socket = this.socketService.connect();
        console.log('service emit', this.socket);
        this.socket.emit('bluetooth/connected', 'request bluetooth/connection');
    };
    BluetoothService.prototype.connectDevice = function (mac) {
        this.isConnecting = true;
        this.socket.emit('bluetooth/device/connect', mac);
    };
    BluetoothService.prototype.checkIsConnecting = function () {
        return this.isConnecting;
    };
    BluetoothService.prototype.getDevices = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('bluetooth/devices', function (data) {
                console.log(data.content);
                _this.devices = data.content;
                observer.next(_this.devices);
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

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(760);
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

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routes_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_socket_service_socket_service__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MusicService = (function () {
    function MusicService(socketService, appRoutesService) {
        this.socketService = socketService;
        this.appRoutesService = appRoutesService;
        this.device = {};
        this.playerStatus = 'paused';
        this.progressPercent = 0;
    }
    MusicService.prototype.connect = function () {
        var _this = this;
        this.socket = this.socketService.connect();
        this.socket.emit('music/connected', 'request music/connection');
        this.connection = this.getDeviceProperties().subscribe(function (properties) {
            _this.device = properties;
        });
        this.connection2 = this.getPlayerProperties().subscribe(function (properties) {
            _this.player = properties;
            _this.playerStatus = _this.player.Status;
            if (_this.playerStatus === 'playing') {
                _this.appRoutesService.Title = _this.player.Track.Title;
                _this.appRoutesService.Artist = _this.player.Track.Artist;
            }
            else {
                _this.appRoutesService.Title = '';
                _this.appRoutesService.Artist = '';
            }
            if (_this.playerStatus === 'playing' && !_this.progressInterval) {
                console.log(_this.progressInterval);
                _this.setupProgressInterval();
            }
            else if (_this.playerStatus === 'paused' && _this.progressInterval) {
                clearInterval(_this.progressInterval);
                delete _this.progressInterval;
            }
        });
    };
    MusicService.prototype.getDeviceProperties = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('music/device', function (data) {
                console.log(data.content);
                var properties = data.content;
                observer.next(properties);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    MusicService.prototype.getPlayerProperties = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('music/player', function (data) {
                console.log(data.content);
                var properties = data.content;
                observer.next(properties);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    MusicService.prototype.setupProgressInterval = function () {
        var _this = this;
        this.progressInterval = setInterval(function () {
            if (_this.player && _this.player.Track && _this.player.Position) {
                _this.player.Position += 1000;
                _this.getProgressPercent();
            }
        }, 1000);
    };
    MusicService.prototype.getProgressPercent = function () {
        if (this.player && this.player.Track && this.player.Position) {
            this.progressPercent = ((this.player.Position / this.player.Track.Duration) * 100);
        }
        else {
            this.progressPercent = 0;
        }
    };
    MusicService.prototype.play = function () {
        this.socket.emit('music/play', '');
    };
    MusicService.prototype.pause = function () {
        this.socket.emit('music/pause', '');
    };
    MusicService.prototype.next = function () {
        this.socket.emit('music/next', '');
    };
    MusicService.prototype.previous = function () {
        this.socket.emit('music/previous', '');
    };
    MusicService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_socket_service_socket_service__["a" /* SocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_socket_service_socket_service__["a" /* SocketService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_routes_service__["a" /* AppRoutesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_routes_service__["a" /* AppRoutesService */]) === 'function' && _b) || Object])
    ], MusicService);
    return MusicService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/music.service.js.map

/***/ }),

/***/ 345:
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
            styles: [__webpack_require__(724)],
            template: '<div class="container"><h2>Page not found</h2></div>'
        }), 
        __metadata('design:paramtypes', [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/page-not-found.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routes_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(appRoutesService) {
        this.appRoutesService = appRoutesService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.appRoutesService.currentPage = '';
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            styles: [__webpack_require__(725)],
            template: '<div class="container"><h2>Page coming soon</h2></div>'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_routes_service__["a" /* AppRoutesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_routes_service__["a" /* AppRoutesService */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/home.component.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routes_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music_service__ = __webpack_require__(223);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MusicComponent = (function () {
    function MusicComponent(musicService, appRoutesService) {
        this.musicService = musicService;
        this.appRoutesService = appRoutesService;
    }
    MusicComponent.prototype.ngOnInit = function () {
        this.appRoutesService.currentPage = 'Music';
    };
    MusicComponent.prototype.ngOnDestroy = function () {
        console.log('music component destroyed');
        // this.connection.unsubscribe();
        // this.connection2.unsubscribe();
    };
    MusicComponent.prototype.play = function () {
        this.musicService.playerStatus = 'playing';
        this.musicService.play();
    };
    MusicComponent.prototype.pause = function () {
        this.musicService.playerStatus = 'paused';
        this.musicService.pause();
    };
    MusicComponent.prototype.next = function () {
        this.musicService.next();
    };
    MusicComponent.prototype.previous = function () {
        this.musicService.previous();
    };
    MusicComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'music',
            template: __webpack_require__(737),
            styles: [__webpack_require__(726)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__music_service__["a" /* MusicService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__music_service__["a" /* MusicService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_routes_service__["a" /* AppRoutesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_routes_service__["a" /* AppRoutesService */]) === 'function' && _b) || Object])
    ], MusicComponent);
    return MusicComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/music.component.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routes_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = (function () {
    function NavigationComponent(appRoutesService) {
        this.appRoutesService = appRoutesService;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.appRoutesService.currentPage = 'Navigation';
    };
    NavigationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            styles: [__webpack_require__(727)],
            template: '<div class="container"><h2>Page coming soon</h2></div>'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_routes_service__["a" /* AppRoutesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_routes_service__["a" /* AppRoutesService */]) === 'function' && _a) || Object])
    ], NavigationComponent);
    return NavigationComponent;
    var _a;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/navigation.component.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routes_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ODBComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ODBComponent = (function () {
    function ODBComponent(appRoutesService) {
        this.appRoutesService = appRoutesService;
    }
    ODBComponent.prototype.ngOnInit = function () {
        this.appRoutesService.currentPage = 'ODB-II';
    };
    ODBComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            styles: [__webpack_require__(728)],
            template: '<div class="container"><h2>Page coming soon</h2></div>'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_routes_service__["a" /* AppRoutesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_routes_service__["a" /* AppRoutesService */]) === 'function' && _a) || Object])
    ], ODBComponent);
    return ODBComponent;
    var _a;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/odb.component.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bluetooth_service__ = __webpack_require__(155);
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
    BluetoothComponent.prototype.connectDevice = function (mac) {
        // this.bluetoothService.connectDevice().subscribe(device => {
        // });
    };
    BluetoothComponent.prototype.ngOnDestroy = function () {
        console.log('bluetooth component destroyed');
        this.connection.unsubscribe();
    };
    BluetoothComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-bluetooth',
            template: __webpack_require__(738),
            styles: [__webpack_require__(729)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bluetooth_service__["a" /* BluetoothService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__bluetooth_service__["a" /* BluetoothService */]) === 'function' && _a) || Object])
    ], BluetoothComponent);
    return BluetoothComponent;
    var _a;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/bluetooth.component.js.map

/***/ }),

/***/ 351:
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
        var _this = this;
        this.toggleFullScreen = function () {
            if (electron !== undefined) {
                electron.ipcRenderer.send('setFullScreen', !_this.isFullScreen);
            }
        };
    }
    SettingsHomeComponent.prototype.ngOnInit = function () {
    };
    SettingsHomeComponent.prototype.ngAfterViewInit = function () {
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
    SettingsHomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-settings-home',
            template: __webpack_require__(741),
            styles: [__webpack_require__(734)]
        }), 
        __metadata('design:paramtypes', [])
    ], SettingsHomeComponent);
    return SettingsHomeComponent;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/settings-home.component.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routes_service__ = __webpack_require__(42);
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
    function SettingsComponent(appRoutesService) {
        this.appRoutesService = appRoutesService;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.appRoutesService.currentPage = 'Settings';
    };
    SettingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-settings',
            template: __webpack_require__(742),
            styles: [__webpack_require__(731)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_routes_service__["a" /* AppRoutesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_routes_service__["a" /* AppRoutesService */]) === 'function' && _a) || Object])
    ], SettingsComponent);
    return SettingsComponent;
    var _a;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/settings.component.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routes_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tilt_gauges_service__ = __webpack_require__(547);
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
    function TiltGaugesComponent(tiltGaugesService, appRoutesService) {
        this.tiltGaugesService = tiltGaugesService;
        this.appRoutesService = appRoutesService;
        this.messages = [];
        this.pitchOffset = 0;
        this.rollOffset = 0;
        this.tiltGaugesService.connect();
    }
    TiltGaugesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appRoutesService.currentPage = 'Tilt Gauge';
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
            template: __webpack_require__(743),
            styles: [__webpack_require__(732)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__tilt_gauges_service__["a" /* TiltGaugesService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__tilt_gauges_service__["a" /* TiltGaugesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__tilt_gauges_service__["a" /* TiltGaugesService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_routes_service__["a" /* AppRoutesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_routes_service__["a" /* AppRoutesService */]) === 'function' && _b) || Object])
    ], TiltGaugesComponent);
    return TiltGaugesComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/tilt-gauges.component.js.map

/***/ }),

/***/ 419:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 419;


/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppRoutesService = (function () {
    function AppRoutesService() {
        this.currentPage = '';
    }
    AppRoutesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], AppRoutesService);
    return AppRoutesService;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/app-routes.service.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(537);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/main.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_pages_routes_module__ = __webpack_require__(539);
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

/***/ 536:
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
            template: __webpack_require__(735),
            styles: [__webpack_require__(722)],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/app.component.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_socket_service_socket_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_music_music_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes_module__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pages_module__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__menu_menu_component__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__status_bar_status_bar_component__ = __webpack_require__(548);
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
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__app_routes_service__["a" /* AppRoutesService */],
                __WEBPACK_IMPORTED_MODULE_5__shared_socket_service_socket_service__["a" /* SocketService */],
                __WEBPACK_IMPORTED_MODULE_6__pages_music_music_service__["a" /* MusicService */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                // PageRoutesModule,
                __WEBPACK_IMPORTED_MODULE_9__pages_pages_module__["a" /* PagesModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routes_module__["a" /* AppRoutesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_11__status_bar_status_bar_component__["a" /* StatusBarComponent */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/app.module.js.map

/***/ }),

/***/ 538:
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
            template: __webpack_require__(736),
            styles: [__webpack_require__(723)]
        }), 
        __metadata('design:paramtypes', [])
    ], MenuComponent);
    return MenuComponent;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/menu.component.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__music_music_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tilt_gauges_tilt_gauges_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation_navigation_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__odb_odb_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error_pages_page_not_found_component__ = __webpack_require__(345);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pageRoutes; });






var pageRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'music', component: __WEBPACK_IMPORTED_MODULE_1__music_music_component__["a" /* MusicComponent */] },
    { path: 'tilt-gauges', component: __WEBPACK_IMPORTED_MODULE_2__tilt_gauges_tilt_gauges_component__["a" /* TiltGaugesComponent */] },
    { path: 'nav', component: __WEBPACK_IMPORTED_MODULE_3__navigation_navigation_component__["a" /* NavigationComponent */] },
    { path: 'odb', component: __WEBPACK_IMPORTED_MODULE_4__odb_odb_component__["a" /* ODBComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__error_pages_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/pages-routes.module.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__music_music_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tilt_gauges_tilt_gauges_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__odb_odb_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__error_pages_page_not_found_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__settings_settings_module__ = __webpack_require__(546);
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
                __WEBPACK_IMPORTED_MODULE_10__settings_settings_module__["a" /* SettingsModule */]
            ],
            providers: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__music_music_component__["a" /* MusicComponent */],
                __WEBPACK_IMPORTED_MODULE_6__tilt_gauges_tilt_gauges_component__["a" /* TiltGaugesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_8__odb_odb_component__["a" /* ODBComponent */],
                __WEBPACK_IMPORTED_MODULE_9__error_pages_page_not_found_component__["a" /* PageNotFoundComponent */]
            ],
            exports: []
        }), 
        __metadata('design:paramtypes', [])
    ], PagesModule);
    return PagesModule;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/pages.module.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bluetooth_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bluetooth_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bt_device_bt_device_component__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bt_device_list_bt_device_list_component__ = __webpack_require__(542);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BluetoothModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BluetoothModule = (function () {
    function BluetoothModule() {
    }
    BluetoothModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["g" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__bt_device_bt_device_component__["a" /* BtDeviceComponent */],
                __WEBPACK_IMPORTED_MODULE_4__bluetooth_component__["a" /* BluetoothComponent */],
                __WEBPACK_IMPORTED_MODULE_6__bt_device_list_bt_device_list_component__["a" /* BtDeviceListComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__bluetooth_component__["a" /* BluetoothComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__bluetooth_service__["a" /* BluetoothService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], BluetoothModule);
    return BluetoothModule;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/bluetooth.module.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BtDeviceListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BtDeviceListComponent = (function () {
    function BtDeviceListComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(), 
        __metadata('design:type', Array)
    ], BtDeviceListComponent.prototype, "devices", void 0);
    BtDeviceListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'bt-device-list',
            template: __webpack_require__(739),
            styles: [__webpack_require__(730)]
        }), 
        __metadata('design:paramtypes', [])
    ], BtDeviceListComponent);
    return BtDeviceListComponent;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/bt-device-list.component.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bt_device_interface__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bt_device_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__bt_device_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bluetooth_service__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BtDeviceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BtDeviceComponent = (function () {
    function BtDeviceComponent(bluetoothService) {
        this.bluetoothService = bluetoothService;
        this.connectingStatus = '';
    }
    BtDeviceComponent.prototype.connect = function () {
        if (!this.bluetoothService.checkIsConnecting()) {
            this.connectingStatus = 'connecting';
            this.bluetoothService.connectDevice(this.device.mac);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bt_device_interface__["BtDevice"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__bt_device_interface__["BtDevice"]) === 'function' && _a) || Object)
    ], BtDeviceComponent.prototype, "device", void 0);
    BtDeviceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'bt-device',
            template: __webpack_require__(740),
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__bluetooth_service__["a" /* BluetoothService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__bluetooth_service__["a" /* BluetoothService */]) === 'function' && _b) || Object])
    ], BtDeviceComponent);
    return BtDeviceComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/bt-device.component.js.map

/***/ }),

/***/ 544:
/***/ (function(module, exports) {

//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/bt-device.interface.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_home_settings_home_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bluetooth_bluetooth_component__ = __webpack_require__(350);
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

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bluetooth_bluetooth_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_routes_module__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bluetooth_bluetooth_module__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings_home_settings_home_component__ = __webpack_require__(351);
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
                __WEBPACK_IMPORTED_MODULE_4__settings_routes_module__["a" /* SettingsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__bluetooth_bluetooth_module__["a" /* BluetoothModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__settings_component__["a" /* SettingsComponent */],
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

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_socket_service_socket_service__ = __webpack_require__(156);
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

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routes_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_music_music_service__ = __webpack_require__(223);
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
    function StatusBarComponent(musicService, appRoutesService) {
        this.musicService = musicService;
        this.appRoutesService = appRoutesService;
        this.musicService.connect();
    }
    StatusBarComponent.prototype.ngOnInit = function () {
    };
    StatusBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-status-bar',
            template: __webpack_require__(744),
            styles: [__webpack_require__(733)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__pages_music_music_service__["a" /* MusicService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__pages_music_music_service__["a" /* MusicService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_routes_service__["a" /* AppRoutesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_routes_service__["a" /* AppRoutesService */]) === 'function' && _b) || Object])
    ], StatusBarComponent);
    return StatusBarComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/status-bar.component.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/environment.prod.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/mattdaisley/repos/jeepin2/core/client/src/polyfills.js.map

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #000; }\n  .wrapper .container {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    width: 100%;\n    max-width: 100%;\n    height: 100%;\n    max-height: 100%;\n    /*border: 1px solid #ccc;*/\n    overflow: hidden; }\n  .wrapper .menu {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    width: 100%;\n    max-width: 80px;\n    height: 100%;\n    max-height: 100%;\n    background: black;\n    /*border-width: 1px 0 1px 1px;\n    border-style: solid;\n    border-color: #ccc;*/ }\n  .wrapper .main-wrapper {\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -ms-flex-line-pack: stretch;\n        align-content: stretch;\n    position: relative; }\n    .wrapper .main-wrapper app-status-bar {\n      position: absolute;\n      width: 100%;\n      background-color: #000; }\n    .wrapper .main-wrapper .main-content {\n      background: -webkit-linear-gradient(115deg, #035584, black, black, #035584);\n      background: linear-gradient(-25deg, #035584, black, black, #035584);\n      position: absolute;\n      box-sizing: border-box;\n      padding-top: 80px;\n      height: 100%;\n      width: 100%; }\n"

/***/ }),

/***/ 723:
/***/ (function(module, exports) {

module.exports = ".container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 10px;\n  text-align: center;\n  overflow: hidden;\n  height: 100%;\n  box-sizing: border-box; }\n\n.container i {\n  max-width: 100%;\n  height: auto;\n  color: #fff;\n  margin: 15px 0; }\n"

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

module.exports = ".container {\n  max-width: 100%;\n  height: auto;\n  color: #fff;\n  padding: 15px;\n  box-sizing: border-box; }\n"

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = ".container {\n  max-width: 100%;\n  height: auto;\n  color: #fff;\n  padding: 15px;\n  box-sizing: border-box; }\n"

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = "span {\n  color: #fff; }\n\ndiv.content-wrapper {\n  height: calc(100% - 120px);\n  position: relative;\n  padding: 30px;\n  color: #fff;\n  box-sizing: border-box; }\n\ndiv.player {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 120px;\n  display: flex;\n  position: relative;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  div.player div.player-progress-wrapper {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    padding: 0 30px;\n    box-sizing: border-box; }\n    div.player div.player-progress-wrapper div.player-progress {\n      background-color: white;\n      height: 1px;\n      position: relative; }\n      div.player div.player-progress-wrapper div.player-progress div.progress {\n        position: absolute;\n        height: 6px;\n        background-color: #96deff; }\n  div.player div.player-left {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  div.player div.player-middle {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    div.player div.player-middle button {\n      font-size: 1em;\n      margin: 0 15px;\n      padding: 15px;\n      width: 75px;\n      height: 75px;\n      display: inline-block; }\n    div.player div.player-middle .player-play-pause {\n      border-radius: 100px;\n      text-align: center;\n      border-width: 0;\n      background: #96deff;\n      background: -webkit-radial-gradient(center ellipse, rgba(5, 124, 192, 0.51) 0%, rgba(5, 124, 192, 0.51) 32%, rgba(5, 124, 192, 0.67) 54%, rgba(150, 222, 255, 0.94) 92%, #96deff 100%);\n      background: radial-gradient(ellipse at center, rgba(5, 124, 192, 0.51) 0%, rgba(5, 124, 192, 0.51) 32%, rgba(5, 124, 192, 0.67) 54%, rgba(150, 222, 255, 0.94) 92%, #96deff 100%); }\n    div.player div.player-middle .player-previous-next {\n      border: none;\n      background-color: transparent; }\n  div.player div.player-right {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n"

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

module.exports = ".container {\n  max-width: 100%;\n  height: auto;\n  color: #fff;\n  padding: 15px;\n  box-sizing: border-box; }\n"

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

module.exports = ".container {\n  max-width: 100%;\n  height: auto;\n  color: #fff;\n  padding: 15px;\n  box-sizing: border-box; }\n"

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 731:
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 15px;\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box; }\n"

/***/ }),

/***/ 732:
/***/ (function(module, exports) {

module.exports = ".container-column {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 100%; }\n\n.cluster-wrapper {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 100%;\n  height: 100%; }\n\n.cluster {\n  /*height: 100%;*/\n  /*max-height: 450px; */\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative; }\n\n.guage {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position: relative;\n  max-width: 800px;\n  padding: 15px; }\n\n.guage:before {\n  content: \"\";\n  display: block;\n  padding-top: 100%;\n  /* initial ratio of 1:1*/ }\n\n.guage .content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n\n.guage img {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transition: .2s ease-in-out;\n  transition: .2s ease-in-out; }\n\n.guage .deg-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.guage .deg {\n  position: absolute;\n  left: 37.5%;\n  top: 67%;\n  width: 25%;\n  height: 25%;\n  font-size: 3em;\n  color: #ffffff;\n  text-align: center; }\n\n.button-menu {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  max-height: 80px;\n  text-align: center; }\n\n.button-menu .button-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100%;\n  border-top: 1px solid #ccc;\n  margin: 0 25px; }\n"

/***/ }),

/***/ 733:
/***/ (function(module, exports) {

module.exports = ".container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 20px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  overflow: hidden;\n  height: 80px;\n  box-sizing: border-box;\n  color: #fff;\n  font-size: 2em; }\n  .container div.status-left {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    text-align: left; }\n  .container div.status-middle {\n    font-size: 1.2em;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    text-align: center; }\n  .container div.status-right {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    text-align: right;\n    font-size: .7em; }\n    .container div.status-right .artist {\n      font-size: .85em; }\n"

/***/ }),

/***/ 734:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <app-menu class=\"menu\"></app-menu>\n\n\n  <div class=\"container\">\n    <div class=\"main-wrapper\">\n\n      <div class=\"main-content\">\n        <router-outlet></router-outlet>\n      </div>\n      \n      <app-status-bar></app-status-bar>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <a routerLink=\"/\" routerLinkActive=\"active\"><i class=\"fa fa-home fa-3x\" aria-hidden=\"true\"> </i></a>\n  <a routerLink=\"/music\" routerLinkActive=\"active\"><i class=\"fa fa-music fa-3x\" aria-hidden=\"true\"> </i></a>\n  <a routerLink=\"/tilt-gauges\" routerLinkActive=\"active\"><i class=\"fa fa-tachometer fa-3x\" aria-hidden=\"true\"> </i></a>\n  <a routerLink=\"/nav\" routerLinkActive=\"active\"><i class=\"fa fa-map-o fa-3x\" aria-hidden=\"true\"> </i></a>\n  <a routerLink=\"/odb\" routerLinkActive=\"active\"><i class=\"fa fa-car fa-3x\" aria-hidden=\"true\"> </i></a>\n  <a routerLink=\"/settings\" routerLinkActive=\"active\"><i class=\"fa fa-gear fa-3x\" aria-hidden=\"true\"> </i></a>\n</div>"

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n\n  <div>\n    <!--Device Details:-->\n    <!--<span>{{musicService.device|json}}</span>-->\n    <div>Playing music from {{musicService.device.Name}}</div>\n  </div>\n  <div><br></div>\n  <div>\n    <!--Player Details:-->\n    <!--<span>{{musicService.player|json}}</span>-->\n    <div>Source: {{(musicService.player && musicService.player.Name) ? musicService.player.Name : ''}}</div>\n    <div>Track Title: {{(musicService.player && musicService.player.Track && musicService.player.Track.Title) ? musicService.player.Track.Title : ''}}</div>\n    <div>Artist: {{(musicService.player && musicService.player.Track && musicService.player.Track.Artist) ? musicService.player.Track.Artist : ''}}</div>\n    <div>Album: {{(musicService.player && musicService.player.Track && musicService.player.Track.Album) ? musicService.player.Track.Album : ''}}</div>\n  </div>\n\n</div>\n\n\n<div class=\"player\">\n  <div class=\"player-progress-wrapper\">\n    <div class=\"player-progress\">\n      <div class=\"progress\" [ngStyle]=\"{width: musicService.progressPercent + '%'}\"></div>\n    </div>\n  </div>\n  <div class=\"player-left\"></div>\n  <div class=\"player-middle\">\n    <button class=\"player-previous-next\" (click)=\"previous()\"><i class=\"fa fa-backward fa-2x\" aria-hidden=\"true\"> </i></button>\n    <button class=\"player-play-pause\" *ngIf=\"musicService.playerStatus !== 'playing'\" (click)=\"play()\"><i class=\"fa fa-play fa-3x\" aria-hidden=\"true\"> </i></button>\n    <button class=\"player-play-pause\" *ngIf=\"musicService.playerStatus === 'playing'\" (click)=\"pause()\"><i class=\"fa fa-pause fa-3x\" aria-hidden=\"true\"> </i></button>\n    <button class=\"player-previous-next\" (click)=\"next()\"><i class=\"fa fa-forward fa-2x\" aria-hidden=\"true\"> </i></button>\n  </div>\n  <div class=\"player-right\"></div>\n</div>"

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = "<bt-device-list [devices]=\"devices\"></bt-device-list>"

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = "<div class=\"list\">\n  <div class=\"list-item\" *ngFor=\"let device of devices\">\n    <bt-device [device]=\"device\"></bt-device>\n  </div>\n</div>"

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = "<div class=\"list-item-content\">\n  <div class=\"list-item-text\">\n    {{device.name}} {{(device.connected == 'yes') ? 'Connected' : ''}}\n    <span>{{device.mac}}</span>\n  </div>\n\n  <button *ngIf=\"device.paired === 'no'\">Pair</button>\n  <button *ngIf=\"device.paired === 'yes'\">Forget</button>\n  <button (click)=\"connect()\" *ngIf=\"device.connected === 'no'\">Connect{{(connectingStatus == 'connecting') ? 'ing...' : ''}}</button>\n  <button *ngIf=\"device.connected === 'yes'\">Disconnect</button>\n</div>"

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-column\">\n\n  <button routerLink=\"./bluetooth\" routerLinkActive=\"active\">Bluetooth Settings</button>\n  <button (click)=\"toggleFullScreen()\" [disabled]=\"!toggleFullScreenEnabled\">Toggle FullScreen</button>\n\n</div>"

/***/ }),

/***/ 742:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 743:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-column\">\n  <div class=\"cluster-wrapper\">\n    <div class=\"cluster\">\n      <div class=\"guage\">\n        <div class=\"content\">\n          <img src=\"assets/guage1.png\"/>\n          <img src=\"assets/guage3.png\" [ngStyle]=\"{'transform': 'rotate('+(roll - rollOffset)+'deg)'}\"/>\n          <img src=\"assets/guage2.png\"/>\n          <img src=\"assets/jeepside.png\" [ngStyle]=\"{'transform': 'rotate('+(roll - rollOffset)+'deg)'}\"/>\n          <img src=\"assets/guage4.png\"/>\n          <div class=\"deg-wrapper\">\n            <div class=\"deg\">{{roll - rollOffset}}<sup>o</sup></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"guage\">\n        <div class=\"content\">\n          <img src=\"assets/guage1.png\"/>\n          <img src=\"assets/guage3.png\" [ngStyle]=\"{'transform': 'rotate(-'+(pitch - pitchOffset)+'deg)'}\"/>\n          <img src=\"assets/guage2.png\"/>\n          <img src=\"assets/jeeprear.png\" [ngStyle]=\"{'transform': 'rotate(-'+(pitch - pitchOffset)+'deg)'}\"/>\n          <img src=\"assets/guage4.png\"/>\n          <div class=\"deg-wrapper\">\n            <div class=\"deg\">{{pitch - pitchOffset}}<sup>o</sup></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"button-menu\">\n    <div class=\"button-wrapper\">\n      <button (click)=\"updateOffset()\">Reset Gyro to 0</button>\n      <button (click)=\"updateOffset()\">Button 2</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"status-left\">\n    {{appRoutesService.currentPage}}\n  </div>\n  <div class=\"status-middle\">\n    10:10\n  </div>\n  <div class=\"status-right\">\n    {{appRoutesService.Title}}<br>\n    <div class=\"artist\">{{appRoutesService.Artist}}</div>\n  </div>\n</div>"

/***/ }),

/***/ 770:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(420);


/***/ })

},[771]);
//# sourceMappingURL=main.bundle.map