"use strict";

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(i, o) {
                try {
                    var a = t[i](o),
                        c = a.value
                } catch (u) {
                    return void n(u)
                }
                return a.done ? void e(c) : Promise.resolve(c).then(function(e) {
                    r("next", e)
                }, function(e) {
                    r("throw", e)
                })
            }
            return r("next")
        })
    }
}

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
    }
    return Array.from(e)
}
var _extends = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    },
    _slicedToArray = function() {
        function e(e, t) {
            var n = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (u) {
                i = !0, o = u
            } finally {
                try {
                    !r && c["return"] && c["return"]()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }
        return function(t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
! function() {
    window.angular && angular.module("w69b.es6", []), Array.prototype.find || (Array.prototype.find = function(e) {
        if (null == this) throw new TypeError("Array.prototype.find called on null or undefined");
        if ("function" != typeof e) throw new TypeError("predicate must be a function");
        for (var t, n = Object(this), r = n.length >>> 0, i = arguments[1], o = 0; o < r; o++)
            if (t = n[o], e.call(i, t, o, n)) return t
    }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function(e) {
            if (void 0 === this || null === this) throw new TypeError("Cannot convert this value to object");
            var t = Object(this),
                n = parseInt(t.length, 10) || 0;
            if (0 === n) return !1;
            var r = parseInt(arguments[1], 10) || 0;
            if (r >= n) return !1;
            var i;
            for (r >= 0 ? i = r : (i = n + r, i < 0 && (i = 0)); i < n;) {
                var o = t[i];
                if (e === o || e !== e && o !== o) return !0;
                i++
            }
            return !1
        }
    }), String.prototype.endsWith || Object.defineProperty(String.prototype, "endsWith", {
        value: function(e, t) {
            var n = this.toString();
            (void 0 === t || t > n.length) && (t = n.length), t -= e.length;
            var r = n.indexOf(e, t);
            return r !== -1 && r === t
        }
    }), String.prototype.startsWith || Object.defineProperty(String.prototype, "startsWith", {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: function(e, t) {
            return t = t || 0, this.lastIndexOf(e, t) === t
        }
    }), angular.module("castifyExt.App", ["ngAnimate", "ui.router", "castifyExt.commonConfig", "castifyExt.ui.options", "castifyExt.ui.support", "w69b.chromePersistentLogger", "w69b.ui.locationChange", "castifyExt.ui.fileList", "castifyExt.ui.fileDetail", "castifyExt.ui.topnav", "castifyExt.ui.sidenav", "castifyExt.ui.pageTitle", "castifyExt.ui.about", "castifyExt.ui.searchHelp", "castifyExt.ui.setup", "castifyExt.authConfig", "castifyExt.ui.fileEdit", "castifyExt.ui.connectedApps", "castifyExt.ui.themeConfig", "castifyExt.ui.rateUs", "ngMaterial"]).config(["$stateProvider", "$urlRouterProvider", function(e, t) {
        e.state({
            name: "options",
            url: "/options",
            template: "<cf-options></cf-options>",
            pageTitle: "Options"
        }).state({
            name: "files",
            url: "/files",
            templateUrl: "components/castifyExt/ui/file-list/file-list.html",
            controller: "FileListCtrl",
            pageTitle: "Your Screencasts"
        }).state({
            name: "fileDetail",
            url: "/files/:fileId",
            templateUrl: "components/castifyExt/ui/file-detail/file-detail.html",
            controller: "FileDetailCtrl",
            pageTitle: "View Recording"
        }).state({
            name: "edit",
            url: "/edit/:fileId",
            templateUrl: "components/castifyExt/ui/file-edit/file-edit.html",
            controller: "FileEditCtrl",
            pageTitle: "Edit Recording"
        }).state({
            name: "support",
            url: "/support",
            templateUrl: "components/castifyExt/ui/support/support.html",
            controller: "SupportCtrl",
            pageTitle: "Screencastify Help"
        }).state({
            name: "credits",
            url: "/credits",
            templateUrl: "components/castifyExt/ui/about/credits.html",
            pageTitle: "Credits"
        }).state({
            name: "about",
            url: "/about",
            templateUrl: "components/castifyExt/ui/about/about.html",
            pageTitle: "About"
        }).state({
            name: "setup",
            url: "/setup",
            component: "cfSetup",
            pageTitle: "Setup"
        }).state({
            name: "setup.signin",
            url: "/signin",
            component: "cfSetupSignin",
            pageTitle: "Setup"
        }).state({
            name: "setup.permissions",
            url: "/permissions",
            component: "cfSetupPermissions",
            pageTitle: "Setup"
        }).state({
            name: "setup.survey",
            url: "/survey",
            component: "cfSetupSurvey",
            pageTitle: "Setup"
        }).state({
            name: "setup.final",
            url: "/final",
            component: "cfSetupFinal",
            pageTitle: "Setup"
        }).state({
            name: "connectedApps",
            url: "/connected-apps",
            templateUrl: "components/castifyExt/ui/connected-apps/connected-apps.html",
            controller: "ConnectedAppsCtrl",
            pageTitle: "Connected Apps"
        }).state({
            name: "updateNotice",
            url: "/update-notice",
            templateUrl: "components/castifyExt/ui/update-notice/update-notice.html",
            pageTitle: "Screencastify has been updated"
        }).state({
            name: "e2eSignIn",
            url: "/e2e-signin",
            template: '<span id="sign-in-state">{{state}}</span>',
            controller: ["castifyAuth", "$scope", function(e, t) {
                t.state = "not_signed_in", e.getAuthToken({
                    interactive: !0
                }).then(function() {
                    t.state = "signed_in"
                })
            }]
        }), t.otherwise(function() {
            return "/files"
        })
    }]).config(["chromePersistentLoggerProvider", "$locationProvider", function(e, t) {
        t.html5Mode(!1), e.setStorageKey("app"), e.enableGlobalHandler(!0), e.install()
    }]).run(["chromeTabs", function(e) {
        e.setZoom(1)["catch"](angular.identity), e.setZoomSettings({
            mode: "disabled"
        })
    }]), angular.module("castifyExt.ui.micLevel", ["w69b.webrtc", "castifyExt.audioContextPool", "castifyExt.appOptions", "w69b.throttle", "castifyExt.appOptions"]).factory("micLevelFactory", ["webrtc", "audioContextPool", "$rootScope", "appOptions", "$q", function(e, t, n, r, i) {
        function o() {
            function o(e) {
                return function() {
                    var t = arguments,
                        n = i.defer();
                    return (m || i.when())["finally"](function() {
                        var r = e.apply(void 0, _toConsumableArray(t));
                        n.resolve(r)
                    }), m = n.promise, m["finally"](function() {
                        m = null
                    }), n.promise
                }
            }

            function a() {
                var e = y.analyser;
                e && (d || (d = new Uint8Array(e.frequencyBinCount)), e.getByteFrequencyData(d), b = -1)
            }

            function c() {
                b = Math.max.apply(null, d) / 255
            }

            function u(e) {
                if (g) throw Error();
                p = e, g = t.acquire();
                var n = g,
                    r = n.createMediaStreamSource(e),
                    i = n.createAnalyser(),
                    o = n.createGain();
                o.gain.value = x, i.smoothingTimeConstant = .3, i.fftSize = 32, i.minDecibels = -70, i.maxDecibels = -10;
                var c = n.createScriptProcessor(2048, 2, 1);
                c.onaudioprocess = a, r.connect(o), o.connect(i), i.connect(c), c.connect(n.destination), y.input = r, y.analyser = i, y.capture = c, y.gain = o
            }

            function s() {
                var t = {
                    echoCancellation: r.localValues.micAudioProcessing
                };
                return h && (t.sourceId = h), e.getUserMedia({
                    audio: {
                        mandatory: t
                    },
                    video: !1
                })
            }

            function l() {
                p && p.getTracks().forEach(function(e) {
                    e.stop()
                }), p = null
            }

            function f(e) {
                x = e, y.gain && (y.gain.gain.value = e)
            }
            var d, p, h, g, m, v = {},
                y = {},
                b = 0,
                w = 0,
                x = 1,
                E = angular.noop;
            return v.start = o(function() {
                var e = null;
                return w || (E = n.$watch(function() {
                    return r.localValues.micGain
                }, f), e = s().then(u)), ++w, e
            }), v.setSourceId = o(function(e) {
                if (h = e, l(), y.input) return s().then(function(e) {
                    y.input.disconnect(), y.input = g.createMediaStreamSource(e), y.input.connect(y.gain)
                })
            }), v.stop = o(function() {
                w && !--w && (angular.forEach(y, function(e) {
                    e.disconnect()
                }), y = {}, l(), b = 0, t.release(g), g = null, E())
            }), v.getVolume = function() {
                return b < 0 && c(), b
            }, v
        }
        return o
    }]).directive("cfMicLevel", ["micLevelFactory", "$window", "$timeout", function(e, t, n) {
        function r() {
            var e = Object.create(HTMLCanvasElement.prototype);
            e.attachedCallback = function() {
                this.dispatchEvent(new Event("attached"))
            }, e.detachedCallback = function() {
                this.dispatchEvent(new Event("detached"))
            }, document.registerElement("cf-mic-canvas", {
                prototype: e,
                "extends": "canvas"
            })
        }

        function i(t) {
            if (o.has(t)) return o.get(t);
            var n = e();
            return n.setSourceId(t), o.set(t, n), n
        }
        r();
        var o = new Map;
        return {
            restrict: "E",
            replace: !0,
            scope: {
                sourceId: "=?"
            },
            template: '<canvas class="cf-mic-level" is="cf-mic-canvas"></canvas>',
            link: function(e, r, o) {
                function a() {
                    d.clearRect(0, 0, f.width, f.height), p ? d.fillRect(0, 0, Math.round(l.getVolume() * f.width), f.height) : d.fillRect(0, f.height, f.width, -Math.round(l.getVolume() * f.height)), s = t.requestAnimationFrame(a)
                }

                function c() {
                    g || (g = !0, l.start(), s = t.requestAnimationFrame(a))
                }

                function u() {
                    g && (g = !1, t.cancelAnimationFrame(s), l.stop())
                }
                var s, l = i(e.sourceId),
                    f = r[0],
                    d = f.getContext("2d"),
                    p = "horizontal" === o.orientation,
                    h = !1,
                    g = !1;
                n(function() {
                    h || c()
                }, 0), r.bind("attached", function() {
                    h = !1, c()
                }), r.bind("detached", function() {
                    h = !0, u()
                });
                var m;
                m = p ? d.createLinearGradient(0, 0, f.width, 0) : d.createLinearGradient(0, f.height, 0, 0), m.addColorStop(0, "#0f0"), m.addColorStop(.7, "#ff0"), m.addColorStop(1, "#f00"), d.fillStyle = m, r.bind("$destroy", u), e.$watch("sourceId", function(e, t) {
                    if (e !== t) {
                        var n = g;
                        u(), l = i(e), n && c()
                    }
                })
            }
        }
    }]).directive("cfMicLevelSlider", ["appOptions", "throttle", "$window", function(e, t, n) {
        return {
            restrict: "E",
            replace: !0,
            scope: {},
            templateUrl: "components/castifyExt/ui/mic-level/mic-level-slider.html",
            link: function(r) {
                function i() {
                    o.flush()
                }
                var o = t(e.saveLocal.bind(e), 1e3),
                    a = angular.element(n),
                    c = !1;
                r.$watch("micGainRange", function(t, n) {
                    c && t !== n && (t = Math.exp(Number(t)), e.localValues.micGain = t, o())
                }), e.loadedPromise.then(function() {
                    var t = e.localValues.micGain;
                    t = Math.log(t), r.micGainRange = t, c = !0
                }), a.bind("unload", i), r.$on("$destroy", function() {
                    a.unbind("unload", i), i()
                })
            }
        }
    }]), angular.module("castifyExt.appOptions", ["w69b.chromeStorage", "castifyExt.enterprisePolicy"]).factory("appOptions", ["chromeStorage", "$rootScope", "$q", "enterprisePolicy", function(e, t, n, r) {
        function i(e) {
            return r.options.hasOwnProperty(e)
        }

        function o(e) {
            return r.options[e]
        }
        var a = {
                videoTitleNamingScheme: "tabTitle",
                notifyAudio: !0,
                notifyFramerate: !1,
                notifyTabFocus: !0,
                uploadPrivacy: "public",
                autoOpen: !0,
                autoPlay: !0,
                driveSync: !1,
                enableDiskSpaceWatcher: !0,
                notifySyncProgress: !0,
                notifyEditProgress: !0,
                enableAnalytics: !0,
                enableCrashReports: !1,
                showDrawingToolsHint: !0,
                showEditToolsHint: !0,
                enableWindowPicker: !0,
                encoder: null,
                audioCodec: null,
                bitRateOption: "high",
                hwEncoding: !1,
                hideRestartAlert: !1
            },
            c = {
                micGain: 1,
                micAudioProcessing: !0,
                defaultEncoder: null
            },
            u = !1,
            s = {},
            l = angular.copy(a);
        return s.localValues = angular.copy(c), s.loadedPromise = n.all({
            sync: e.sync.getSingle("options"),
            local: e.local.getSingle("options"),
            managed: r.loadedPromise
        }).then(function(e) {
            angular.extend(l, e.sync), angular.extend(s.localValues, e.local), u = !0
        }), s.values = {}, Object.keys(a).forEach(function(e) {
            Object.defineProperty(s.values, e, {
                enumerable: !0,
                get: function() {
                    return i(e) ? o(e) : l[e]
                },
                set: function(t) {
                    l[e] = t
                }
            })
        }), s.save = function() {
            return e.sync.setSingle("options", l)
        }, s.saveLocal = function() {
            return e.local.setSingle("options", s.localValues)
        }, s.isLoaded = function() {
            return u
        }, s.isSetByEnterprisePolicy = function(e) {
            return i(e)
        }, e.onChanged.addListener(function(e, n) {
            "sync" == n && e.options && (angular.extend(l, e.options.newValue), t.$$phase || t.$digest()), "local" == n && e.options && (angular.extend(s.localValues, e.options.newValue), t.$$phase || t.$digest())
        }), s
    }]), angular.module("castifyExt.backgroundTool", ["w69b.chromeRuntime"]).factory("backgroundTool", ["chromeRuntime", "$q", "$log", "$rootScope", function(e, t, n, r) {
        function i() {
            var n = t.defer();
            return e.onMessage.addListener(function r(t) {
                "bg:loaded" === t && (e.onMessage.removeListener(r), n.resolve())
            }), e.sendMessage("bg:load")["catch"](angular.identity), n.promise
        }
        var o, a = {};
        return a.portHelper = function(n, o) {
            var a, c = {};
            return c.getPort = function() {
                var r = o === !1 ? t.when() : i();
                return r.then(function() {
                    return a || (a = e.connect({
                        name: n
                    })), a
                })
            }, c.postMessage = function(e, t) {
                return c.getPort().then(function(n) {
                    return n.postMessage({
                        type: e,
                        data: t
                    })
                })
            }, c.installHandlers = function(e) {
                function t(t) {
                    e.hasOwnProperty(t.type) && e[t.type](t.data), r.$$phase || r.$apply()
                }

                function n() {
                    c.getPort().then(function(e) {
                        e.onMessage.removeListener(t)
                    })
                }
                return c.getPort().then(function(e) {
                    e.onMessage.addListener(t)
                }), n
            }, c
        }, a.loadBackground = function() {
            return o || (o = i()), o
        }, a
    }]), angular.module("castifyExt.audioContextPool", []).factory("audioContextPool", ["$window", function(e) {
        var t = [],
            n = {};
        return n.acquire = function() {
            return t.length ? t.pop() : new e.AudioContext({
                latencyHint: "playback"
            })
        }, n.release = function(e) {
            t.push(e)
        }, n
    }]), angular.module("castifyExt.setupService", ["castifyExt.appOptions", "w69b.webrtc", "w69b.chromeStorage", "w69b.spawn", "castifyExt.connect.connectedApps", "castifyExt.userAccount", "castifyExt.optionalPermissions"]).factory("setupService", ["webrtc", "spawn", "chromeStorage", "appOptions", "$log", "optionalPermissions", "userAccount", "$http", "castifyConfig", "$location", "connectedApps", function(e, t, n, r, i, o, a, c, u, s, l) {
        function f() {
            return t(regeneratorRuntime.mark(function n() {
                var t, r, i;
                return regeneratorRuntime.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return t = e.hasVideoAccess(), r = e.hasMicrophone(), i = e.hasAudioAccess(), n.next = 5, t;
                        case 5:
                            if (n.t0 = n.sent, n.t0) {
                                n.next = 15;
                                break
                            }
                            return n.next = 9, r;
                        case 9:
                            if (n.t1 = !n.sent, n.t1) {
                                n.next = 14;
                                break
                            }
                            return n.next = 13, i;
                        case 13:
                            n.t1 = n.sent;
                        case 14:
                            n.t0 = n.t1;
                        case 15:
                            return n.abrupt("return", n.t0);
                        case 16:
                        case "end":
                            return n.stop()
                    }
                }, n, this)
            }))
        }
        var d = {},
            p = "setupService:welcomeShown",
            h = u.API_URL + "/survey_questions";
        return d.setSetupComplete = function() {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return n.sync.setSingle(p, e)
        }, d.getSetupComplete = function() {
            return n.sync.getSingle(p, !1)
        }, d.getDriveSyncEnabled = t.wrap(regeneratorRuntime.mark(function g() {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, r.loadedPromise;
                    case 2:
                        return e.abrupt("return", r.values.driveSync);
                    case 3:
                    case "end":
                        return e.stop()
                }
            }, g, this)
        })), d.getSetupState = function() {
            return t(regeneratorRuntime.mark(function e() {
                var t, n, r, i, c, u;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Promise.all([a.getAccount(), o.hasLiteTabPermissions(), f(), d.getDriveSyncEnabled()]);
                        case 2:
                            return t = e.sent, n = _slicedToArray(t, 4), r = n[0], i = n[1], c = n[2], u = n[3], e.abrupt("return", {
                                tab: i,
                                cam: c,
                                signedIn: !!r.user,
                                filledSurvey: !!r.user && !!r.user.survey && !!r.user.survey.user_type,
                                driveSync: u
                            });
                        case 9:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            }))
        }, d.isComplete = function() {
            return t(regeneratorRuntime.mark(function e() {
                var t, n, r, o, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Promise.all([d.getSetupState(), l.hasConnectedApps(), d.getSetupComplete()]);
                        case 2:
                            return t = e.sent, n = _slicedToArray(t, 3), r = n[0], o = n[1], a = n[2], i.debug("setupService.isComplete state", r, o), e.abrupt("return", r.signedIn || o || r.tab || a);
                        case 9:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            }))
        }, d.smartRoute = t.wrap(regeneratorRuntime.mark(function m(e) {
            var t, n, r, i, o, a;
            return regeneratorRuntime.wrap(function(c) {
                for (;;) switch (c.prev = c.next) {
                    case 0:
                        return c.next = 2, d.getSetupState();
                    case 2:
                        if (t = c.sent, n = t.signedIn, r = t.tab, i = t.cam, o = t.filledSurvey, a = r && i, n) {
                            c.next = 12;
                            break
                        }
                        return c.abrupt("return", d.goToPage("/signin"));
                    case 12:
                        if (e || a) {
                            c.next = 16;
                            break
                        }
                        return c.abrupt("return", d.goToPage("/permissions"));
                    case 16:
                        if (o) {
                            c.next = 20;
                            break
                        }
                        return c.abrupt("return", d.goToPage("/survey"));
                    case 20:
                        d.goToPage("/final");
                    case 21:
                    case "end":
                        return c.stop()
                }
            }, m, this)
        })), d.goToPage = function(e) {
            s.path("/setup" + e)
        }, d.postSurvey = function(e) {
            return a.postUpdate({
                survey: e
            })
        }, d.fetchSurveyQuestions = function() {
            return c.get(h).then(function(e) {
                return e.data
            })
        }, d.updateStorage = function(e) {
            r.values.driveSync = e, r.save()
        }, d
    }]), angular.module("castifyExt.ui.support", ["w69b.chromePersistentLogger", "w69b.chromeRuntime", "castifyExt.userAccount", "castifyExt.castifyAuth", "w69b.chromeSystem", "w69b.chromeTabs", "w69b.spawn", "ngMaterial"]).factory("supportApiService", ["$http", "castifyConfig", function(e, t) {
        function n(e) {
            var t = e.data.articles || [];
            return t = t.slice(0, u), t.map(function(e) {
                var t = e.text.replace(/&nbsp;/gi, " ");
                return t.length > c && (t = t.substr(0, c - 3) + "..."), {
                    title: e.title,
                    text: t,
                    externalLink: e.url
                }
            })
        }
        var r = {},
            i = t.API_URL + "/support/search",
            o = t.API_URL + "/support/tickets",
            a = {
                oauth_consumer_key: "1Yb6N1ZB261nNDA1sVuBtA"
            },
            c = 100,
            u = 5;
        return r.queryArticles = function(t) {
            return e.get(i, {
                params: angular.extend({
                    query: t
                }, a)
            }).then(n)
        }, r.createTicket = function(t) {
            var n = JSON.parse(JSON.stringify(t).replace('/"Bearer(.*?)"/g', '"REMOVED"'));
            return e.post(o, n, {
                params: a
            })
        }, r
    }]).controller("SupportCtrl", ["$scope", function(e) {
        e.category = null;
        var t = {
            key: "bug",
            title: "None of the above?",
            icon: "bug_report",
            text: "Report a Bug"
        };
        e.rootItem = {
            items: [{
                title: "Knowledgebase",
                text: "Browse or search our knowledgebase for step-by-step guides, videos and troubleshooting.",
                icon: "school",
                externalLink: "https://screencastify.helpscoutdocs.com/"
            }, {
                key: "bug",
                title: "Report Bug",
                text: "Let us know if something isn't working properly.",
                icon: "bug_report",
                items: [{
                    title: "Audio issues",
                    text: "You're having trouble with microphone or system audio.",
                    query: "microphone sound audio",
                    buttonItem: t
                }, {
                    title: "Recording issues",
                    text: "You're having trouble recording videos.",
                    query: "recording",
                    buttonItem: t
                }, {
                    title: "Uploading to Drive or YouTube",
                    text: "You're having trouble uploading/saving a recording.",
                    query: "upload",
                    buttonItem: t
                }]
            }, {
                title: "Suggest New Feature",
                text: "Have an idea on how to make Screencastify better?",
                icon: "lightbulb_outline",
                externalLink: "https://www.screencastify.com/feedback"
            }, {
                key: "contact",
                title: "Contact Us",
                text: "Send a message to our support team.",
                icon: "mail"
            }]
        }, e.reset = function() {
            e.category = null
        }
    }]).controller("SupportMessageCtrl", ["$scope", "chromePersistentLogger", "chromeRuntime", "supportApiService", "$q", "castifyAuth", "$mdToast", "chromeSystem", "userAccount", "spawn", function(e, t, n, r, i, o, a, c, u, s) {
        function l() {
            return t.getMergedLogs(["popup", "background", "app"])
        }

        function f() {
            return n.sendMessage(null, "bg:flushLogs", {}).then(l, l).then(function(e) {
                return e.join("\n")
            })
        }

        function d() {
            return i.all({
                platform: n.getPlatformInfo(),
                ua: window.navigator.userAgent,
                cpu: c.cpu.getInfo(),
                memory: c.memory.getInfo()
            }).then(function(e) {
                return JSON.stringify(e, null, 4)
            })
        }

        function p() {
            return null
        }

        function h() {
            var t = i.all({
                email: o.getAccount(),
                logs: f()["catch"](p),
                version: w(0),
                system: d()["catch"](p)
            }).then(function(t) {
                y = t, e.logs = t.logs, e.email = t.email
            });
            m(t), e.instantAnswer = null, e.submitted = !1, e.$watch("category", function(t) {
                "bug" === t ? (e.messageLabel = "Describe the issue", e.attachLogs = !0, e.introText = "Please describe what went wrong as precisely as possible.") : (e.introText = "", e.messageLabel = "Your Message", e.attachLogs = !0)
            })
        }

        function g(e, t) {
            return {
                name: e,
                data: btoa(unescape(encodeURIComponent(t))),
                content_type: "text/plain"
            }
        }

        function m(t) {
            e.loading = !0, t["finally"](function() {
                e.loading = !1
            })
        }

        function v() {
            var t = "Support Request [Tool]";
            "bug" === e.category && (t = "Bug Report [Tool]");
            var n = {
                    email: e.email,
                    ticket: {
                        subject: t,
                        message: e.message,
                        custom_field_values: {
                            version: y.version
                        }
                    }
                },
                i = [];
            return i.push(g("system", y.system)), e.attachLogs && i.push(g("logs", e.logs)), n.ticket.attachments = i, r.createTicket(n).then(function() {
                e.submitted = !0
            })["catch"](function() {
                a.show(a.simple().content("Oops, we could not send your message."))
            })
        }
        var y, b = {
                key: "confirm",
                title: "Can't find an answer?",
                icon: "mail",
                text: "Send message"
            },
            w = s.wrap(regeneratorRuntime.mark(function x() {
                var e, t;
                return regeneratorRuntime.wrap(function(r) {
                    for (;;) switch (r.prev = r.next) {
                        case 0:
                            return r.next = 2, u.getAccount();
                        case 2:
                            return e = r.sent, t = e.license.type, e.user && (t += "(" + e.user.email + ")"), r.abrupt("return", t + " v" + n.getManifest().version);
                        case 6:
                        case "end":
                            return r.stop()
                    }
                }, x, this)
            }));
        e.confirm = function() {
            e.instantAnswer = null, m(v())
        }, e.submit = function() {
            if ("contact" == e.category) {
                var t = r.queryArticles(e.message).then(function(t) {
                    return t.length ? void(e.instantAnswer = {
                        items: t,
                        buttonItem: b
                    }) : v()
                }, v);
                m(t)
            } else e.confirm()
        }, e.back = function() {
            e.instantAnswer ? e.instantAnswer = null : e.cfBack()
        }, h()
    }]).directive("cfSupportMessage", function() {
        return {
            restrict: "E",
            templateUrl: "components/castifyExt/ui/support/support-message.html",
            scope: {
                category: "=",
                cfBack: "&"
            },
            controller: "SupportMessageCtrl"
        }
    }).controller("SupportCategoryCtrl", ["$scope", "chromeTabs", "supportApiService", function(e, t, n) {
        function r(e) {
            /https?:\/\//.test(e) && t.create({
                url: e
            })
        }

        function i(t) {
            e.loading = !0, t["finally"](function() {
                e.loading = !1
            })
        }

        function o(t) {
            e.items = t
        }
        e.items = null, e.category = null;
        var a = [];
        e.canGoBack = function() {
            return a.length > 1
        }, e.back = function() {
            a.pop();
            var t = a[a.length - 1];
            e.items = t.items, e.buttonItem = t.buttonItem
        }, e.select = function(t) {
            if (t.externalLink) r(t.externalLink);
            else if (t.items) a.push(t), e.buttonItem = t.buttonItem, e.items = t.items;
            else if (t.query) {
                a.push(t), e.buttonItem = t.buttonItem;
                var c = n.queryArticles(t.query).then(o);
                i(c)
            } else e.cfCategorySelected({
                key: t.key
            })
        }, e.$watch("item", function(t) {
            t && e.select(t)
        })
    }]).directive("cfSupportCategory", function() {
        return {
            restrict: "E",
            templateUrl: "components/castifyExt/ui/support/support-category.html",
            scope: {
                cfCategorySelected: "&",
                item: "="
            },
            controller: "SupportCategoryCtrl"
        }
    }), angular.module("castifyExt.ui.fileList", ["ngMaterial", "w69b.chromeAnalytics", "w69b.ui.bgImg", "w69b.ui.focus", "w69b.ui.bytesFilter", "castifyExt.ui.syncAuthErrorRedirector", "castifyExt.fileDbClient", "castifyExt.ui.fileActions", "castifyExt.ui.editableText", "castifyExt.fileDbClient", "castifyExt.ui.fileSyncInfo", "castifyExt.ui.syncInfo", "castifyExt.ui.blackfriday", "castifyExt.ui.editJobsInfo", "castifyExt.driveUtils", "castifyExt.syncStatusClient"]).controller("FileListCtrl", ["$scope", "fileDbClient", "$mdDialog", "$location", "$mdToast", "driveUtils", "syncStatusClient", function(e, t, n, r, i, o, a) {
        e.loading = !0, t.listFiles().then(function(t) {
            e.$watchCollection(function() {
                return t
            }, function() {
                var n = e.files || [];
                n.length = 0, angular.forEach(t, function(e) {
                    e.autoShare || n.push(e)
                }), e.files = n
            })
        }, function() {
            i.show(i.simple({
                hideDelay: 0
            }).content("Failed to load files, please try to reload the page!"))
        })["finally"](function() {
            e.loading = !1
        }), e.showDetail = function(e) {
            r.path("/files/" + e.id)
        }, e.removeAll = function() {
            var e;
            e = t.isSyncEnabled() ? "Deleting will remove all Screencasts from your device and also from your Drive account." : "Deleting will remove all Screencasts from your device. This cannot be undone.", n.show(n.confirm().title("Delete all Screencasts?").content(e).cancel("Cancel").ok("Delete All")).then(function() {
                t.removeAll()
            })
        }, e.driveSync = a.state, e.openInDrive = function() {
            var e = "https://drive.google.com/drive/u/0/folders/";
            o.getDriveUploadParentId().then(function(t) {
                return window.open(e + t, "_blank")
            })
        }
    }]), angular.module("castifyExt.ui.fileDetail", ["castifyExt.fileDbClient", "castifyExt.ui.fileActions", "castifyExt.ui.share", "castifyExt.ui.pixelResolution", "w69b.timeutil", "castifyExt.ui.editableText", "w69b.ui.focus", "castifyExt.ui.uploadInfo", "castifyExt.ui.fileSyncInfo", "castifyExt.upgradeHelper", "castifyExt.ui.videoPlayer", "castifyExt.ui.share.shareUtils", "castifyExt.ui.classroomShare", "castifyExt.enterprisePolicy", "castifyExt.ui.connectShareProgress", "castifyWebEdit.webEditUtils", "castifyExt.syncDownloaderClient", "castifyExt.uploader"]).controller("FileDetailCtrl", ["$scope", "$transition$", "fileDbClient", "$location", "$mdDialog", "uploader", "enterprisePolicy", "$window", "$mdToast", "$mdSidenav", "shareUtils", "$log", "analytics", "webEditUtils", "upgradeHelper", "syncDownloaderClient", function(e, t, n, r, i, o, a, c, u, s, l, f, d, p, h, g) {
        function m() {
            var t = [],
                n = e.file;
            n && (n.youtubeInfo && t.push({
                target: "youtube",
                title: "YouTube",
                icon: "youtube",
                link: l.getLink(n, "youtube"),
                linkShare: !!n.youtubeInfo.channelId
            }), n.driveInfo && t.push({
                target: "drive",
                title: "Google Drive",
                icon: "drive",
                link: l.getLink(n, "drive"),
                linkShare: !0
            })), e.sharedItems = t
        }

        function v() {
            var t = e.file;
            if (!t || !n.isSyncEnabled() || t.isSynced) return null;
            var r = o.getTargetState(t.id, "drive");
            return r ? {
                state: r.state,
                progress: r.progress
            } : {
                state: "queued"
            }
        }
        e.enterprisePolicy = a, e.upgradeHelper = h, e.file = null, e.item = {
            isRenaming: !1
        };
        var y = !1;
        e.openShared = function(e) {
            c.open(e.link)
        }, e.openWebEditor = function(e) {
            p.openEditor(e)
        }, e.openCropEditor = function(e) {
            p.openCropEditor(e)
        }, e.copyShareLink = function(t) {
            y || (y = !0, u.show(u.simple({
                hideDelay: 0,
                position: "top right"
            }).content("Enabling link sharing...")), l.enableLinkSharing(e.file, {
                target: t.target
            }).then(function() {
                l.copyLink(t.link, {
                    position: "top right"
                })
            })["catch"](function(e) {
                f.warn("enableLinkSharing failed:", e), u.show(u.simple({
                    position: "top right"
                }).content("Failed to enable link sharing, try the share button instead."))
            })["finally"](function() {
                y = !1
            }))
        }, e.showInfo = function() {
            s("info").open()
        }, n.getFileDescriptor(t.params().fileId).then(function(t) {
            e.file = t, e.$root.pageTitle = t.title
        })["catch"](function() {
            r.path("/files")
        }), e.showShareDialog = function(t) {
            var n = e.$new(!0);
            n.file = e.file;
            var r = i.show({
                targetEvent: t,
                scope: n,
                clickOutsideToClose: !0,
                templateUrl: "components/castifyExt/ui/share/share-dialog.html",
                controller: "ShareDialogCtrl"
            });
            r.then(function() {
                e.showInfo()
            })
        }, e.$watch("file.deleted", function(e) {
            e && r.path("/files")
        }), e.editTitle = function(t) {
            t.preventDefault(), e.item.isRenaming = !0
        }, e.$watchGroup(["file.youtubeInfo.id", "file.driveInfo"], m), e.rename = function(t) {
            var r = e.$new(!0);
            r.title = e.file.title, i.show({
                targetEvent: t,
                scope: r,
                preserveScope: !0,
                controller: ["$mdDialog", "$scope", function(e, t) {
                    t.$mdDialog = e
                }],
                templateUrl: "components/castifyExt/ui/file-detail/rename-dialog.html",
                clickOutsideToClose: !0
            })["finally"](function() {
                var t = r.title;
                t && (n.rename(e.file.id, t), d.trackEvent("file", "rename", "", 1))
            })
        }, e.$watch(h.isPaid, function(t) {
            e.isPaid = t
        }), e.upgrade = function() {
            h.openBuy("video_review_page")
        };
        var b = g.downloads;
        e.$watch(function() {
            return [e.fileId, b[e.fileId]]
        }, function() {
            e.download = b[e.fileId]
        }, !0), g.update(), e.$watch(function() {
            return e.file ? o.getFileState(e.file.id) : null
        }, function(t) {
            t ? e.uploads = Object.keys(t).map(function(e) {
                return t[e]
            }).filter(function(e) {
                return !e.isSyncUpload
            }) : e.uploads = null
        }), e.$watch(v, function(t) {
            e.syncInfo = t
        }, !0)
    }]), angular.module("castifyExt.ui.syncInfo", ["castifyExt.syncStatusClient", "castifyExt.ui.syncProgressIcon"]).directive("cfSyncInfo", ["syncStatusClient", function(e) {
        return {
            restrict: "E",
            scope: {},
            templateUrl: "components/castifyExt/ui/sync-info/sync-info.html",
            link: function(t) {
                t.state = e.state, t.retry = function() {
                    e.retry()
                }
            }
        }
    }]), angular.module("castifyExt.ui.options", ["ngMaterial", "w69b.chromeTabs", "w69b.throttle", "w69b.chromeAnalytics", "castifyExt.appOptions", "castifyExt.connect.connectedApps", "castifyExt.ui.policyHint"]).component("cfOptions", {
        templateUrl: "components/castifyExt/ui/options/options.html",
        controller: ["$scope", "appOptions", "chromeTabs", "$mdDialog", "$location", "connectedApps", "analytics", function(e, t, n, r, i, o, a) {
            var c = this;
            e.opt = t.values, e.optLocal = t.localValues, e.debug = i.search().hasOwnProperty("debug"), e.hasApps = !1, o.hasConnectedApps().then(function(t) {
                e.hasApps = t
            }), c.qualityLabels = {
                high: "highest quality (creates largest files)",
                medium: "medium quality",
                low: "lowest quality (creates smallest files)"
            }, e.googleTrack = function(e) {
                a.trackEvent("extra options", e, "", 1)
            }, e.googleTrackWithNull = function(t, n, r) {
                var i = void 0;
                i = n ? t + n : t + r, e.googleTrack(i)
            }, e.$watch("opt", function(e, n) {
                angular.equals(e, n) || (t.values = e, t.save())
            }, !0), e.$watch("optLocal", function(e, n) {
                angular.equals(e, n) || (t.localValues = e, t.saveLocal())
            }, !0), e.openShortcuts = function() {
                e.googleTrack("open extension shortcuts"), n.create({
                    url: "chrome://extensions/configureCommands"
                })
            }, e.showDrawingShortcuts = function(t) {
                e.googleTrack("open drawing shortcuts"), r.show({
                    targetEvent: t,
                    clickOutsideToClose: !0,
                    templateUrl: "components/castifyExt/ui/options/drawing-shortcuts-dialog.html"
                })
            }, e.showQualityOptions = function(t) {
                e.googleTrack("open drawing shortcuts"), r.show({
                    targetEvent: t,
                    clickOutsideToClose: !0,
                    scope: e,
                    preserveScope: !0,
                    templateUrl: "components/castifyExt/ui/options/video-quality-dialog.html"
                })
            }
        }]
    }).directive("cfStorageOption", ["analytics", function(e) {
        return {
            restrict: "E",
            templateUrl: "components/castifyExt/ui/options/storage-option.html",
            scope: {
                ngModel: "="
            },
            link: function(t) {
                t.googleTrack = function(t) {
                    t ? e.trackEvent("extra options", "store: google drive", "", 1) : e.trackEvent("extra options", "store: local", "", 1)
                }
            }
        }
    }]), angular.module("castifyExt.ui.editableText", []).directive("editableText", ["$timeout", function(e) {
        return {
            restrict: "EA",
            template: '<div><div data-ng-hide="isEditing" data-ng-transclude></div><input type="text" class="editable-text-input" data-ng-show="isEditing"/></div>',
            scope: {
                text: "=editableText",
                isEditing: "=",
                onRenamed: "&"
            },
            transclude: !0,
            link: function(t, n) {
                function r() {
                    var e = a.val();
                    t.isEditing = !1, t.onRenamed({
                        newText: e
                    }), i(), t.$apply()
                }

                function i() {
                    t.isEditing = !1, a.unbind("blur keydown"), t.$apply()
                }

                function o() {
                    a.bind("blur", r), a.bind("keydown", function(e) {
                        switch (e.keyCode) {
                            case 13:
                                r();
                                break;
                            case 27:
                                i()
                        }
                    })
                }
                var a = n.find("input");
                t.$watch("isEditing", function(n) {
                    n && (a.val(t.text), e(function() {
                        a[0].select()
                    }), o())
                })
            }
        }
    }]), angular.module("castifyExt.ui.fileActions", ["ngMaterial", "w69b.chromeAnalytics", "castifyExt.fileDbClient", "castifyExt.appOptions", "w69b.downloadHelper", "castifyExt.ui.upgradeButton", "castifyExt.ui.fpsSelector", "castifyEdit.editJobSchedulerClient"]).controller("FileActionsCtrl", ["$scope", "fileDbClient", "$window", "analytics", "$mdDialog", "$log", function(e, t, n, r, i, o) {
        this.remove = function(e, n) {
            n.stopPropagation();
            var a;
            return a = t.isSyncEnabled() ? 'Deleting will remove "' + e.title + '" from your device and also from your Drive account.' : 'Deleting will remove "' + e.title + '" from your device.', i.show(i.confirm().title("Delete Screencast?").content(a).cancel("Cancel").ok("Delete")).then(function() {
                o.debug("fileActions.remove()", e.id), t.remove(e.id), r.trackEvent("files", "remove", "", 1)
            })
        }
    }]).component("cfSaveFileButton", {
        bindings: {
            file: "=?"
        },
        templateUrl: "components/castifyExt/ui/file-actions/save-file-button.html",
        controller: ["$scope", "fileDbClient", "$location", "$mdDialog", "analytics", "downloadHelper", function(e, t, n, r, i, o) {
            var a = this;
            a.loading = !1, a.exportGif = function(e) {
                var t = r.show({
                    targetEvent: e,
                    bindToController: !0,
                    controllerAs: "$ctrl",
                    clickOutsideToClose: !0,
                    locals: {
                        file: a.file
                    },
                    templateUrl: "components/castifyExt/ui/file-actions/gif-export-dialog.html",
                    controller: "GifExportDialogCtrl"
                });
                t.then(function() {
                    n.path("/files")
                })
            }, a.exportMp4 = function(e) {
                var t = r.show({
                    targetEvent: e,
                    bindToController: !0,
                    controllerAs: "$ctrl",
                    clickOutsideToClose: !0,
                    locals: {
                        file: a.file
                    },
                    templateUrl: "components/castifyExt/ui/file-actions/mp4-export-dialog.html",
                    controller: "Mp4ExportDialogCtrl"
                });
                t.then(function() {
                    n.path("/files")
                })
            }, a.isMp4 = function() {
                return a.file && "video/mp4" === a.file.mimeType
            }, a.save = function() {
                var e = a.file;
                e && (a.loading = !0, t.reload(e.id).then(function() {
                    return e.getUrl()
                }).then(function(t) {
                    var n = e.title.replace(/[\/,\\]/g, ""),
                        r = a.isMp4() ? ".mp4" : ".webm";
                    n.endsWith(r) || (n += r), o.download(t, n), i.trackEvent("file", "save")
                })["finally"](function() {
                    a.loading = !1
                }))
            }
        }]
    }).controller("Mp4ExportDialogCtrl", ["$scope", "$mdDialog", "editJobSchedulerClient", "upgradeHelper", function(e, t, n, r) {
        function i() {
            e.upgradeHelper = r, e.$mdDialog = t, e.$on("$locationChangeStart", function() {
                return t.cancel()
            })
        }
        var o = this;
        o.isStoredOnDrive = function() {
            return !!o.file.driveInfo
        }, o.canExport = function() {
            return o.isStoredOnDrive() && r.isPaid()
        }, o["export"] = function() {
            if (r.isPaid()) {
                var e = {
                    meta: {
                        copy: !0,
                        fileId: o.file.id
                    },
                    outFormat: "mp4",
                    fps: o.fps
                };
                n.addJob(e), t.hide()
            }
        }, i()
    }]).controller("GifExportDialogCtrl", ["$scope", "$mdDialog", "editJobSchedulerClient", "upgradeHelper", "appOptions", function(e, t, n, r, i) {
        function o() {
            e.upgradeHelper = r, e.$mdDialog = t;
            var n = a.file;
            e.scale = Math.min(1, c.width / n.width, c.height / n.height), e.minScale = Math.max(u / n.width, u / n.height), e.$watch("scale", function(t) {
                e.exportSize = {
                    width: Math.floor(n.width * t),
                    height: Math.floor(n.height * t)
                }
            }), e.$on("$locationChangeStart", function() {
                return t.cancel()
            })
        }
        var a = this,
            c = {
                width: 640,
                height: 480
            },
            u = 10;
        a.canExportGifSize = function() {
            return n.canExportGif(a.file, e.exportSize)
        }, a.canExportGif = function() {
            return a.canExportGifSize() && r.isPaid() && (a.isStoredOnDrive() || !a.isHwEncodingEnabled())
        }, a.isHwEncodingEnabled = function() {
            return i.values.hwEncoding
        }, a.isStoredOnDrive = function() {
            return !!a.file.driveInfo
        }, a["export"] = function() {
            if (r.isPaid()) {
                var i = {
                    meta: {
                        fileId: a.file.id
                    },
                    scale: e.exportSize,
                    outFormat: "gif"
                };
                n.addJob(i), t.hide()
            }
        }, o()
    }]).component("cfExportDriveStorageHint", {
        templateUrl: "components/castifyExt/ui/file-actions/export-drive-storage-hint.html",
        transclude: !0,
        bindings: {
            file: "<"
        },
        controller: ["appOptions", function(e) {
            var t = this;
            t.isSyncEnabled = function() {
                return e.values.driveSync
            }, t.isStoredOnDrive = function() {
                return !!t.file.driveInfo
            }
        }]
    }), angular.module("castifyExt.ui.fpsSelector", ["ngMaterial"]).component("cfFpsSelector", {
        templateUrl: "components/castifyExt/ui/fps-selector/fps-selector.html",
        require: {
            ngModel: "?ngModel"
        },
        controller: ["$scope", function(e) {
            var t = this;
            e.$watchGroup(["$ctrl.fps", "$ctrl.convert"], function() {
                t.ngModel.$setValidity("range", !t.convert || !!t.fps);
                var e = t.convert ? t.fps : null;
                t.ngModel.$setViewValue(e)
            }), t.$onInit = function() {
                t.fps = 30, t.convert = !1, t.ngModel && (t.ngModel.render = angular.noop)
            }
        }]
    }), angular.module("castifyExt.ui.share", ["ngMaterial", "w69b.chromeAnalytics", "w69b.chromeStorage", "castifyExt.uploader", "castifyExt.userAccount", "castifyExt.ui.youtubeChannelChooser", "castifyExt.ui.connectAppChooser", "castifyExt.ui.loadingOverlay", "castifyExt.ui.privacyPicker", "castifyExt.ui.share.shareUtils", "castifyExt.connect.connectService"]).controller("ShareDialogCtrl", ["$scope", "chromeStorage", "uploader", "$q", "$log", "userAccount", "connectService", "$mdDialog", "$mdToast", "shareUtils", function(e, t, n, r, i, o, a, c, u, s) {
        function l(e) {
            return e && e.status === -1 && !S && u.show(u.simple({
                position: "top right"
            }).content("Failed to load data, please check your network connection.")), S = !0, r.reject(e)
        }

        function f() {
            var n = e.options;
            if (n.connectApp) {
                var r = n.connectApp;
                n.connectApp = {
                    id: r.id,
                    title: r.title
                }
            }
            var i = {
                target: n.target,
                privacy: n.privacy,
                youtubeChannelId: n.youtubeChannelId,
                connectApp: n.connectApp
            };
            return E = i, t.local.setSingle(w, i)
        }

        function d() {
            var n = e.options,
                r = angular.extend({}, E, {
                    target: n.target,
                    privacy: n.privacy
                });
            return E = r, t.local.setSingle(w, r)
        }

        function p(t) {
            s.isLinkShareable(t.privacy) ? t.shareLink = s.getLink(e.file, t.target) : t.shareLink = null
        }

        function h() {
            var t = e.file,
                n = k,
                i = [];
            n.drive.uploaded = !1, n.youtube.uploaded = !1, n.drive.shareLink = null, n.youtube.shareLink = null, t.isSynced && (n.drive.uploaded = !0), t.driveInfo && i.push(s.getPrivacy(t, "drive").then(function(e) {
                n.drive.uploaded = !0, n.drive.privacy = e, p(n.drive)
            })["catch"](l));
            var o = e.options.youtubeChannelId;
            return t.youtubeInfo && o && i.push(s.getPrivacy(t, "youtube", o).then(function(e) {
                n.youtube.uploaded = !0, n.youtube.privacy = e, p(n.youtube)
            })), r.all(i)
        }

        function g(t, n) {
            return n || (n = "loading"), e[n] = !0, t["finally"](function() {
                e[n] = !1
            }), t
        }

        function m(e, t) {
            var n = k[e];
            n.privacy = t, p(n)
        }

        function v() {
            var t = e.options.target,
                n = e.options.privacy,
                r = e.file,
                i = s.setPrivacy(r, {
                    target: t,
                    privacy: n,
                    domain: e.me.domain,
                    channelId: e.options.youtubeChannelId
                });
            return i.then(function() {
                m(t, n)
            }), i
        }

        function y() {
            e.$watch(function() {
                return n.isQueuedOrActive(e.file.id, "youtube")
            }, function(e) {
                k.youtube.uploading = e
            }), e.$watch("file.driveInfo.id", function(e, t) {
                e !== t && g(h())
            }), e.$watch("file.youtubeInfo.id", function(e, t) {
                e !== t && g(h())
            }), e.$watch(function() {
                return n.getTargetState(e.file.id, "drive")
            }, function(e) {
                k.drive.uploadState = e
            }), e.$watch(function() {
                return n.getTargetState(e.file.id, "youtube")
            }, function(e) {
                k.youtube.uploadState = e
            }), e.$watch(function() {
                return n.isQueuedOrActive(e.file.id, "drive")
            }, function(e, t) {
                k.drive.uploading = e, t && !e && g(h())
            }), e.$watch("options.youtubeChannelId", function() {
                g(h())
            }), e.$watch(function() {
                var t = e.options.target;
                return {
                    target: t,
                    status: k[t]
                }
            }, function() {
                var t = e.options.target,
                    n = k[t];
                e.fileStatus = n, n.uploaded ? e.options.privacy = n.privacy : e.options.privacy = x
            }, !0)
        }

        function b() {
            f();
            var t = e.options,
                n = a.share(t.connectApp.id, e.file.id);
            c.hide(!0), n["catch"](function(e) {
                i.warn(e)
            })
        }
        var w = "uploadOptions";
        e.options = {
            youtubeChannelId: null
        }, e.me = {}, e.$mdDialog = c;
        var x, E, k = {
                drive: {
                    target: "drive"
                },
                youtube: {
                    target: "youtube"
                },
                connect: {
                    target: "connect"
                }
            },
            S = !1;
        e.file.youtubeInfo && e.file.youtubeInfo.channelId && (e.options.youtubeChannelId = e.file.youtubeInfo.channelId), t.local.getSingle(w).then(function(t) {
            t = t || {
                target: "youtube",
                privacy: "public"
            }, E = t, e.options.target = t.target, e.options.youtubeChannelId || (e.options.youtubeChannelId = t.youtubeChannelId), e.options.connectApp = t.connectApp, x = t.privacy, y()
        }), o.getAccount().then(function(t) {
            t.user && t.user.me && (e.me = t.user.me)
        }), e.upload = function() {
            var t = e.options;
            if ("connect" == t.target) return b();
            f();
            var n = s.upload(e.file, {
                target: t.target,
                privacy: t.privacy,
                domain: e.me.domain,
                channelId: t.youtubeChannelId
            });
            g(n), n.then(function() {
                c.hide(!0)
            })
        }, e.enableLinkSharing = function() {
            var t, n = e.fileStatus,
                r = {
                    privacy: n.privacy,
                    target: n.target,
                    domain: e.me.domain,
                    channelId: e.options.youtubeChannelId
                };
            n.uploaded ? t = s.enableLinkSharing(e.file, r).then(function(t) {
                m(r.target, t.privacy), e.copyLink()
            }) : (r.privacy = "unlisted", t = s.upload(e.file, r)), t.then(d), g(t)
        }, e.savePrivacy = function(t) {
            if (e.fileStatus.uploaded) {
                e.options.privacy = t;
                var n = v();
                n.then(d), g(n, "savingPrivacy"), n["catch"](function(t) {
                    h(), i.warn("failed to set privacy", t);
                    var n = "Failed to update your privacy setting. ";
                    e.me.domain && (n += " Your domain administrator might have disabled some sharing options."), u.show(u.simple({
                        hideDelay: 5e3,
                        position: "top right"
                    }).content(n))
                })
            }
        }, e.copyLink = function() {
            s.copyLink(e.fileStatus.shareLink, {
                position: "top right"
            })
        }, e.isValid = function() {
            var t = e.options;
            return !e.loading && ("youtube" !== t.target || t.youtubeChannelId) && ("connect" !== t.target || t.connectApp)
        }
    }]), angular.module("castifyExt.ui.share.shareUtils", ["castifyExt.youtubeUtils", "castifyExt.driveUtils", "castifyExt.userAccount", "castifyExt.castifyAuth", "castifyExt.uploader", "w69b.spawn", "w69b.clipboard", "ngMaterial"]).factory("shareUtils", ["youtubeUtils", "driveUtils", "spawn", "userAccount", "castifyAuth", "uploader", "clipboard", "$mdToast", "$q", function(e, t, n, r, i, o, a, c, u) {
        function s(e) {
            return "drive" === e
        }

        function l(e) {
            return "youtube" === e
        }

        function f(e, t) {
            return s(t) ? !!e.driveInfo : !!l(t) && !!e.youtubeInfo
        }
        var d = {},
            p = "Recorded with ScreenCastify (https://www.screencastify.com), the screen video recorder for Chrome";
        return d.enableLinkSharing = function(e, t) {
            return n(regeneratorRuntime.mark(function r() {
                var n;
                return regeneratorRuntime.wrap(function(r) {
                    for (;;) switch (r.prev = r.next) {
                        case 0:
                            if (n = t.privacy) {
                                r.next = 5;
                                break
                            }
                            return r.next = 4, d.getPrivacy(e, t.target, t.channelId);
                        case 4:
                            n = r.sent;
                        case 5:
                            if (!f(e, t.target)) {
                                r.next = 25;
                                break
                            }
                            if (d.isLinkShareable(n)) {
                                r.next = 22;
                                break
                            }
                            return r.prev = 7, n = "unlisted", r.next = 11, d.setPrivacy(e, angular.extend({}, t, {
                                privacy: n
                            }));
                        case 11:
                            r.next = 22;
                            break;
                        case 13:
                            if (r.prev = 13, r.t0 = r["catch"](7), !t.domain) {
                                r.next = 21;
                                break
                            }
                            return n = "domain_unlisted", r.next = 19, d.setPrivacy(e, angular.extend({}, t, {
                                privacy: n
                            }));
                        case 19:
                            r.next = 22;
                            break;
                        case 21:
                            throw r.t0;
                        case 22:
                            return r.abrupt("return", {
                                privacy: n,
                                link: d.getLink(e, t.target)
                            });
                        case 25:
                            throw new Error("not supported yet");
                        case 26:
                        case "end":
                            return r.stop()
                    }
                }, r, this, [
                    [7, 13]
                ])
            }))
        }, d.upload = n.wrap(regeneratorRuntime.mark(function h(e, t) {
            var n;
            return regeneratorRuntime.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                    case 0:
                        return n = {
                            fileId: e.id,
                            target: t.target,
                            title: e.title,
                            privacy: t.privacy,
                            domain: t.domain,
                            channelId: t.channelId
                        }, a.next = 3, r.getAccount();
                    case 3:
                        if (!a.sent.license.branding) {
                            a.next = 5;
                            break
                        }
                        n.description = p;
                    case 5:
                        return a.next = 7, i.getAuthToken({
                            interactive: !0
                        });
                    case 7:
                        return a.abrupt("return", o.upload(n));
                    case 8:
                    case "end":
                        return a.stop()
                }
            }, h, this)
        })), d.getPrivacy = function(n, r, i) {
            return s(r) ? t.getSimplePrivacy(n.driveInfo.id) : l(r) ? i || n.youtubeInfo.channelId ? e.getPrivacy(n.youtubeInfo.id, i || n.youtubeInfo.channelId) : u.reject("channel unknown") : void 0
        }, d.isLinkShareable = function(e) {
            return ["public", "unlisted", "domain_unlisted", "domain_public"].includes(e)
        }, d.setPrivacy = function(n, r) {
            if (l(r.target)) return e.setPrivacy(n.youtubeInfo.id, r.privacy, r.channelId || n.youtubeInfo.channelId);
            if (s(r.target)) return t.setSimplePrivacy(n.driveInfo.id, r.privacy, r.domain);
            throw new Error("unknown target")
        }, d.getLink = function(n, r) {
            return l(r) && n.youtubeInfo ? e.getLink(n.youtubeInfo.id) : s(r) && n.driveInfo ? t.getLink(n.driveInfo.id) : null
        }, d.copyLink = function(e, t) {
            if (a.copy(e), t) {
                var n = navigator.userAgent.includes("Mac") ? "CMD" : "CTRL";
                c.show(c.simple(t).content("Shareable link has been copied. Paste it with " + n + "+V."))
            }
        }, d
    }]), angular.module("castifyExt.ui.privacyPicker", []).directive("cfPrivacyPicker", function() {
        function e(e) {
            return t.filter(function(t) {
                return !t.domainOnly || e
            }).map(function(t) {
                return angular.extend({}, t, {
                    title: t.title.replace("{domain}", e),
                    desc: t.desc.replace("{domain}", e)
                })
            })
        }
        var t = [{
            value: "public",
            icon: "public",
            title: "Public",
            desc: "Anyone can find and view the video."
        }, {
            value: "unlisted",
            icon: "link",
            title: "Unlisted",
            desc: "People who have the link to the video can view it."
        }, {
            domainOnly: !0,
            value: "domain_public",
            icon: "business",
            title: "Public at {domain}",
            desc: "Anyone at {domain} can find and view the video."
        }, {
            domainOnly: !0,
            value: "domain_unlisted",
            icon: "link",
            title: "Unlisted at {domain}",
            desc: "People at {domain} who have the link to the video can view it."
        }, {
            value: "private",
            icon: "account_box",
            title: "Private",
            desc: "Only you can view the video."
        }];
        return {
            restrict: "E",
            templateUrl: "components/castifyExt/ui/privacy-picker/privacy-picker.html",
            scope: {
                value: "=",
                domain: "=",
                enableDomain: "=?",
                cfChange: "&",
                cfDisabled: "="
            },
            link: function(t) {
                function n() {
                    t.items ? t.selectedItem = t.items.find(function(e) {
                        return e.value === t.value
                    }) : t.selectedItem = null
                }
                t.expanded = !1, t.$watchGroup(["domain", "enableDomain"], function() {
                    t.items = e(t.enableDomain && t.domain), n()
                }), t.onChange = function(e) {
                    t.cfChange({
                        value: e
                    })
                }, t.$watch("value", n)
            }
        }
    }), angular.module("castifyExt.ui.pixelResolution", []).directive("pixelResolution", function() {
        return {
            template: '<span ng-show="resolution.width || resolution.height">{{resolution.width}}&#215;{{resolution.height}}</span>',
            restrict: "A",
            scope: {
                resolution: "=pixelResolution"
            }
        }
    }), angular.module("castifyExt.ui.topnav", ["ngMaterial"]).component("cfTopnav", {
        transclude: !0,
        bindings: {
            popupMode: "@",
            parentState: "@",
            onGoUp: "&?"
        },
        templateUrl: "components/castifyExt/ui/topnav/topnav.html",
        controller: ["$scope", "$mdSidenav", "$state", function(e, t, n) {
            var r = this;
            r.$onChanges = function() {
                r.popupMode = angular.isDefined(r.popupMode), r.showMenu = !(r.parentState || r.onGoUp)
            }, r.openMenu = function() {
                r.parentState ? n.go(r.parentState) : r.onGoUp ? r.onGoUp() : r.popupMode ? e.$root.isAppMenuOpen = !0 : t("main-menu").toggle()
            }
        }]
    }), angular.module("castifyExt.ui.sidenav", ["castifyExt.ui.openInAppTab", "castifyExt.upgradeHelper", "castifyExt.userAccount", "w69b.chromeAnalytics", "w69b.chromeTabs"]).directive("cfSidenav", ["connectedApps", "$location", "upgradeHelper", "$window", "$mdSidenav", "openInAppTab", "chromeTabs", "userAccount", "analytics", function(e, t, n, r, i, o, a, c, u) {
        return {
            restrict: "E",
            scope: {
                isOpen: "=?"
            },
            templateUrl: "components/castifyExt/ui/sidenav/sidenav.html",
            link: function(e, s, l) {
                function f() {
                    c.getAccount().then(function(t) {
                        e.userAccount = t
                    })
                }

                function d() {
                    l.hasOwnProperty("popupMode") && (e.popupMode = !0), f(), e.upgradeHelper = n
                }
                e.$root.$on("event:userAccountChanged", f), e.signIn = c.signIn.bind(c), e.signOut = c.signOut.bind(c), e.open = function(n) {
                    u.trackEvent("recorder", "menu", "open " + n), e.popupMode ? o("#" + n).then(function() {
                        r.close()
                    }) : (t.path(n), i("main-menu").close())
                }, e.closeMenu = function() {
                    u.trackEvent("recorder", "menu", "close menu"), e.isOpen = !1
                };
                var p = {
                    gplus: "https://google.com/+ScreencastifyChrome",
                    account: "https://www.screencastify.com/user"
                };
                e.openExternal = function(e) {
                    a.create({
                        url: p[e]
                    })
                }, d()
            }
        }
    }]), angular.module("castifyExt.ui.about", []).directive("cfCredit", function() {
        return {
            restrict: "E",
            templateUrl: "components/castifyExt/ui/about/credit.html",
            scope: {
                url: "@",
                title: "@"
            },
            controller: ["$scope", function(e) {
                e.showLicense = !1
            }],
            transclude: !0
        }
    }), angular.module("castifyExt.ui.searchHelp", ["castifyExt.helpCenter"]).directive("cfSearchHelp", ["chromeTabs", "helpCenter", function(e, t) {
        var n = "https://help.screencastify.com";
        return {
            link: function(r, i, o) {
                i.bind("click", function(r) {
                    var i = n,
                        a = o.cfSearchHelp;
                    r.preventDefault(), a && t.hasHelpFor(a) ? t.openHelp(a) : (a && (i = n + "/search?query=" + encodeURIComponent(a)), e.create({
                        url: i
                    }))
                })
            }
        }
    }]), angular.module("castifyExt.ui.disableContextmenu", []).directive("disableContextmenu", function() {
        return {
            link: function(e, t) {
                t.bind("contextmenu", function(e) {
                    e.preventDefault(), e.stopPropagation()
                })
            }
        }
    }), angular.module("castifyExt.ui.fileSyncInfo", ["castifyExt.fileDbClient"]).controller("FileSyncInfoCtrl", ["$scope", "fileDbClient", "uploader", function(e, t, n) {}]).directive("cfFileSyncIcon", function() {
        return {
            restrict: "E",
            templateUrl: "components/castifyExt/ui/file-sync-info/file-sync-icon.html",
            scope: {
                file: "="
            },
            controller: "FileSyncInfoCtrl"
        }
    }).directive("cfFileSyncInfo", function() {
        return {
            restrict: "E",
            templateUrl: "components/castifyExt/ui/file-sync-info/file-sync-info.html",
            scope: {
                file: "=",
                syncInfo: "="
            },
            controller: "FileSyncInfoCtrl"
        }
    }), angular.module("castifyExt.ui.uploadInfo", ["castifyExt.uploader"]).directive("cfUploadInfo", function() {
        return {
            restrict: "E",
            templateUrl: "components/castifyExt/ui/upload-info/upload-info.html",
            scope: {
                file: "=",
                uploads: "=",
                syncInfo: "="
            },
            controller: "UploadInfoCtrl"
        }
    }).controller("UploadInfoCtrl", ["$scope", "uploader", function(e, t) {
        e.getHumanTargetName = function(e) {
            return {
                drive: "Google Drive",
                youtube: "YouTube"
            }[e]
        }
    }]), angular.module("castifyExt.ui.syncAuthErrorRedirector", ["castifyExt.chromeEventPublisher", "ui.router"]).component("cfSyncAuthErrorRedirector", {
        controller: ["$scope", "$state", function(e, t) {
            e.$on("event:syncAuthError", function() {
                var e = t.current;
                e.name && e.name.startsWith("setup.") || t.go("setup")
            })
        }]
    }), angular.module("castifyExt.ui.videoPlayer", ["castifyExt.castifyAuth", "castifyExt.fileDbClient", "castifyExt.ui.disableContextmenu"]).directive("cfVideoPlayer", ["$q", "$document", "appOptions", function(e, t, n) {
        return {
            restrict: "E",
            replace: !1,
            templateUrl: "components/castifyExt/ui/video-player/video-player.html",
            scope: {
                file: "=?"
            },
            link: function(e, r) {
                function i() {
                    c.paused ? c.play() : c.pause()
                }

                function o(e) {
                    32 === e.which && e.target === s && (i(), e.preventDefault())
                }
                var a = r.find("video"),
                    c = a[0],
                    u = 0;
                e.loading = !0, a.bind("canplay", function() {
                    e.loading = !1, e.$digest()
                }), a.bind("loadedmetadata", function() {
                    c.currentTime !== u && (c.currentTime = u)
                }), a.bind("loadstart seeking", function() {
                    e.loading = !0, e.$digest()
                }), a.bind("timeupdate", function() {
                    e.loading || (u = c.currentTime)
                }), n.values.autoPlay && a.bind("canplay", function l() {
                    a[0].play(), a.unbind("canplay", l)
                });
                var s = t.find("body")[0];
                r.bind("click", i), t.bind("keydown", o), e.$on("$destroy", function() {
                    t.unbind("keydown", o)
                })
            }
        }
    }]).directive("cfVideoLoad", ["fileDbClient", "$log", function(e, t) {
        return {
            restrict: "A",
            scope: {
                file: "=cfVideoLoad"
            },
            link: function(n, r) {
                var i = r[0];
                n.$watchGroup(["file.url", "file.urlRequiresAccessToken"], function() {
                    n.loading = !0, n.file && n.file.getUrl().then(function(e) {
                        i.src = e
                    })
                }), r.bind("error", function(r) {
                    t.warn("video playback error", r.target.error), e.reload(n.file.id), n.$apply()
                })
            }
        }
    }]), angular.module("castifyExt.ui.setup", ["castifyExt.requestMicPermission", "castifyExt.optionalPermissions", "castifyExt.setupService", "castifyExt.userAccount", "w69b.chromeAnalytics", "w69b.webrtc", "w69b.spawn", "ui.router"]).component("cfSetup", {
        controllerAs: "$ctrl",
        templateUrl: "components/castifyExt/ui/setup/setup.html",
        controller: ["$scope", "$location", "userAccount", "spawn", "analytics", "setupService", "$log", function(e, t, n, r, i, o, a) {
            var c = this,
                u = function() {
                    c.changedText = "", c.changedTextString = "", c.texts = {
                        signinTitle: ["Sign in with Google"],
                        signinDrive: ["Automatically save videos to Google Drive.", "Automatically save videos to Google Drive. Disable this feature anytime."],
                        signinButton: ["Sign in with Google"],
                        permissionsTitle: ["Set Permissions", "Allow permissions", "Enable recording tools"],
                        permissionsParagraph: ["To unlock all features, please enable the following permissions:", "To enable all features, please allow the following permissions:", "To enable all features, please allow the following permissions (strongly recommended):"],
                        cameraMicCheckbox: ["Camera and microphone"],
                        tabCheckbox: ["Drawing and annotation tools"],
                        permissionsButton: ["Next", "Allow"],
                        surveyTitle: ["Introduce yourself"],
                        surveyParagraph: ["Tell us a bit about yourself to enjoy a more personalized experience."],
                        surveyButton: ["Let's get started!"],
                        finalTitle1: ["That's it! You're good to go.", "That's it! Time to record your first video.", "Done! Here's a video to help you get going.", "Done! Watch this video and you'll be a pro in no time."],
                        finalTitle2: ["Need help?"]
                    }, c.text = {
                        signinTitle: c.texts.signinTitle[0],
                        signinDrive: c.texts.signinDrive[0],
                        signinButton: c.texts.signinButton[0],
                        permissionsTitle: c.texts.permissionsTitle[0],
                        permissionsParagraph: c.texts.permissionsParagraph[0],
                        cameraMicCheckbox: c.texts.cameraMicCheckbox[0],
                        tabCheckbox: c.texts.tabCheckbox[0],
                        permissionsButton: c.texts.permissionsButton[0],
                        surveyTitle: c.texts.surveyTitle[0],
                        surveyParagraph: c.texts.surveyParagraph[0],
                        surveyButton: c.texts.surveyButton[0],
                        finalTitle1: c.texts.finalTitle1[0],
                        finalTitle2: c.texts.finalTitle2[0]
                    };
                    var e = Object.keys(c.texts).filter(function(e) {
                        return c.texts[e].length > 1
                    });
                    if (e.length) {
                        var t = e[Math.floor(Math.random() * e.length)],
                            n = c.texts[t][Math.floor(Math.random() * c.texts[t].length)];
                        c.changedText = t, c.changedTextString = n, c.text[t] = n
                    }
                },
                s = r.wrap(regeneratorRuntime.mark(function l() {
                    var e, t, n, r, i, a;
                    return regeneratorRuntime.wrap(function(u) {
                        for (;;) switch (u.prev = u.next) {
                            case 0:
                                return u.next = 2, o.getSetupState();
                            case 2:
                                e = u.sent, t = e.signedIn, n = e.tab, r = e.cam, i = e.driveSync, a = e.filledSurvey, c.signedInCheckbox || (c.signedInCheckbox = t && i), c.permissionsCheckbox || (c.permissionsCheckbox = c.permissionsCheckbox || c.signedInCheckbox && n && r), c.surveyCheckbox || (c.surveyCheckbox = c.permissionsCheckbox && a);
                            case 11:
                            case "end":
                                return u.stop()
                        }
                    }, l, this)
                }));
            c.signIn = r.wrap(regeneratorRuntime.mark(function f() {
                var e;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, c.loading = !0, t.next = 4, n.signIn();
                        case 4:
                            return t.next = 6, o.updateStorage(c.useDrive);
                        case 6:
                            return t.next = 8, n.getAccount();
                        case 8:
                            e = t.sent, c.user = e.user, c.signedInCheckbox = !!c.user, c.loading = !1, c.smartRoute(), t.next = 20;
                            break;
                        case 15:
                            t.prev = 15, t.t0 = t["catch"](0), c.loading = !1, a.debug("sign in error: ", t.t0), c.error = c.generalError;
                        case 20:
                        case "end":
                            return t.stop()
                    }
                }, f, this, [
                    [0, 15]
                ])
            })), c.smartRoute = r.wrap(regeneratorRuntime.mark(function d(e) {
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            e = e || c.permissionsCheckbox, o.smartRoute(e);
                        case 2:
                        case "end":
                            return t.stop()
                    }
                }, d, this)
            })), c.postSurvey = function() {
                return o.postSurvey(c.surveyResponses).then(function(e) {
                    return c.user.survey = e.user.survey
                })
            }, c.$onInit = r.wrap(regeneratorRuntime.mark(function p() {
                var r, a;
                return regeneratorRuntime.wrap(function(l) {
                    for (;;) switch (l.prev = l.next) {
                        case 0:
                            return l.next = 2, n.getAccount();
                        case 2:
                            return r = l.sent, a = r.user, c.user = a, c.useDrive = !0, c.surveyResponses = {}, c.surveyQuestions = {}, c.$location = t, c.generalError = "There was a problem. Please refresh the page.", l.next = 12, o.fetchSurveyQuestions();
                        case 12:
                            c.surveyQuestions = l.sent, u(), s(), c.smartRoute(), c.clickLink = function(e) {
                                return i.trackEvent("setup", "click link (" + e + ")", e)
                            }, e.$watch("$ctrl.signedInCheckbox", function() {
                                c.signedInCheckbox && i.trackEvent("setup", "signed in (" + c.changedText + " - " + c.changedTextString + ")"), s()
                            }), e.$watch("$ctrl.permissionsCheckbox", function() {
                                c.permissionsCheckbox && i.trackEvent("setup", "finished permissions (" + c.changedText + " - " + c.changedTextString + ")"), s()
                            }), e.$watch("$ctrl.surveyCheckbox", function() {
                                c.surveyCheckbox && (i.trackEvent("setup", "finished survey (" + c.changedText + " - " + c.changedTextString + ")"), o.setSetupComplete())
                            }), e.$watchGroup(["$ctrl.user.survey", "$ctrl.permissionsCheckbox"], function(e) {
                                var t = _slicedToArray(e, 2),
                                    n = t[0],
                                    r = t[1];
                                r && (c.surveyCheckbox = !!n && !!n.user_type)
                            });
                        case 21:
                        case "end":
                            return l.stop()
                    }
                }, p, this)
            }))
        }]
    }).component("cfSetupSignin", {
        controllerAs: "$ctrl",
        templateUrl: "components/castifyExt/ui/setup/signin.html",
        bindings: {
            text: "<",
            error: "=",
            signIn: "&",
            useDrive: "=",
            signedInCheckbox: "="
        },
        controller: ["$scope", "analytics", function(e, t) {
            var n = this;
            n.startTime = Date.now(), n.$onInit = function() {
                return e.$watch("$ctrl.signedInCheckbox", function(e) {
                    e && (t.trackEvent("setup", "sign in (time from start)", Math.round((Date.now() - n.startTime) / 1e3) + " seconds", 1), t.trackEvent("setup", "sign in (use google drive)", n.useDrive, 1))
                })
            }
        }]
    }).component("cfSetupPermissions", {
        controllerAs: "$ctrl",
        templateUrl: "components/castifyExt/ui/setup/permissions.html",
        bindings: {
            text: "<",
            loading: "=",
            smartRoute: "&",
            generalError: "<",
            permissionsCheckbox: "=",
            hasCamAndMicPermission: "="
        },
        controller: ["$scope", "analytics", "spawn", "webrtc", "optionalPermissions", "$log", function(e, t, n, r, i, o) {
            var a = this,
                c = n.wrap(regeneratorRuntime.mark(function s() {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, i.hasTabPermissions().then(function(e) {
                                    return a.hasTabPermissions = e
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }, s, this)
                })),
                u = function() {
                    return a.permissionsCheckbox = !0
                };
            a.startTime = Date.now(), a.requestCameraAndMicPermission = !0, a.hasCamAndMicPermission = a.hasCamAndMicPermission || !1, a.requestTabPermission = !0, a.hasTabPermissions = !1, a.$onInit = function() {
                a.loading = !1, c(), e.$watch("$ctrl.text", function(e) {
                    return a.loading = !e
                })
            }, a.requestPermissions = n.wrap(regeneratorRuntime.mark(function l() {
                var e, n, c, s;
                return regeneratorRuntime.wrap(function(l) {
                    for (;;) switch (l.prev = l.next) {
                        case 0:
                            if (t.trackEvent("setup", "allowing permissions (cam & mic, drawing, time from previous)", "(" + a.requestCameraAndMicPermission + ", " + a.requestTabPermission + "),\n          " + Math.round((Date.now() - a.startTime) / 1e3) + " seconds"), l.prev = 1, !a.requestTabPermission || a.hasTabPermissions) {
                                l.next = 10;
                                break
                            }
                            return l.next = 5, i.requestTabPermissions();
                        case 5:
                            if (e = l.sent) {
                                l.next = 8;
                                break
                            }
                            throw new Error("denied tab permission");
                        case 8:
                            a.hasTabPermissions = !0, t.trackEvent("setup", "allowed permissions (tab success)", !0);
                        case 10:
                            if (!a.requestCameraAndMicPermission) {
                                l.next = 18;
                                break
                            }
                            return l.next = 13, r.getCameraAndMicPermission();
                        case 13:
                            n = l.sent, c = n.audio, s = n.video, a.hasCamAndMicPermission = c || s, t.trackEvent("setup", "allowed permissions (cam & mic success)", !0);
                        case 18:
                            t.trackEvent("setup", "allowed permissions", !0), u(), a.smartRoute({
                                askedPermissions: a.permissionsCheckbox
                            }), l.next = 28;
                            break;
                        case 23:
                            l.prev = 23, l.t0 = l["catch"](1), o.debug("setup allow permissions... :", l.t0), a.error = a.generalError, l.t0.message.includes("tab") ? t.trackEvent("setup", "allow permissions (error)", l.t0) : l.t0.message.includes("Permission") ? (t.trackEvent("setup", "allow permissions (error)", l.t0), a.error = "", a.permissionsError = !0) : t.trackEvent("setup", "allow permissions (error)", JSON.stringify(l.t0));
                        case 28:
                        case "end":
                            return l.stop()
                    }
                }, l, this, [
                    [1, 23]
                ])
            }))
        }]
    }).component("cfSetupSurvey", {
        controllerAs: "$ctrl",
        templateUrl: "components/castifyExt/ui/setup/survey.html",
        bindings: {
            user: "<",
            text: "<",
            smartRoute: "&",
            postSurvey: "&",
            generalError: "<",
            submitSurvey: "&",
            surveyCheckbox: "=",
            surveyResponses: "=",
            surveyQuestions: "<"
        },
        controller: ["$scope", "analytics", "$log", function(e, t, n) {
            var r = this;
            r.startTime = Date.now();
            var i = function(e) {
                    r.question = e, r.answers = e.answers
                },
                o = function(e) {
                    return i(r.answers[e].next)
                },
                a = function(e, t) {
                    return r.surveyResponses[e] = r.answers[t].value
                },
                c = function(e) {
                    return r.answers[e].next
                },
                u = function() {
                    return i({})
                },
                s = function() {
                    return r.surveyCheckbox = !0
                },
                l = function() {
                    r.surveyCheckbox ? u() : i(r.surveyQuestions)
                };
            r.respond = function(e, i) {
                r.lastAnswerTime = r.lastAnswerTime || r.startTime, t.trackEvent("setup", "response (question, answer, time from previous question)", e + ", " + r.answers[i].value + ",\n          " + Math.round((Date.now() - r.lastAnswerTime) / 1e3) + " seconds"), a(e, i), c(i) ? o(i) : (t.trackEvent("setup", "finished survey (time from previous)", Math.round((Date.now() - r.startTime) / 1e3) + " seconds"), u(), r.postSurvey().then(r.smartRoute).then(s)["catch"](function(e) {
                    n.debug("saving survey error: ", e), r.error = r.generalError
                })), r.lastAnswerTime = Date.now()
            }, r.next = function() {
                r.smartRoute()
            }, r.$onInit = function() {
                e.$watch("$ctrl.surveyQuestions", function(e) {
                    e && l()
                })
            }
        }]
    }).component("cfSetupFinal", {
        controllerAs: "$ctrl",
        templateUrl: "components/castifyExt/ui/setup/final.html",
        bindings: {
            text: "<"
        },
        controller: ["analytics", function(e) {
            var t = this;
            t.clickLink = function(t) {
                return e.trackEvent("setup", "click link (link)", t)
            }
        }]
    }), angular.module("castifyExt.ui.quizQuestions", ["ngMaterial"]).component("cfQuizQuestions", {
        bindings: {
            config: "<",
            onDone: "&"
        },
        templateUrl: "components/castifyExt/ui/quiz-questions/quiz-questions.html",
        controller: function() {
            function e(e) {
                t.node = e
            }
            var t = this,
                n = {},
                r = [];
            t.back = function() {
                var t = r.pop();
                delete n[t.key], e(t)
            }, t.canGoBack = function() {
                return r.length > 0
            }, t.selectAnswer = function(i) {
                r.push(t.node), n[t.node.key] = i.value, i.next ? e(i.next) : t.onDone({
                    answers: n
                })
            }, t.$onChanges = function() {
                e(t.config)
            }
        }
    }), angular.module("castifyExt.ui.syncProgressIcon", []).directive("cfSyncProgressIcon", function() {
        return {
            replace: !0,
            restrict: "E",
            templateUrl: "components/castifyExt/ui/sync-progress-icon/sync-progress-icon.html",
            scope: {
                progress: "=value"
            }
        }
    }), angular.module("castifyExt.ui.youtubeChannelChooser", ["castifyExt.youtubeAuth"]).directive("cfYoutubeChannelChooser", ["youtubeAuth", function(e) {
        return {
            restrict: "E",
            require: "ngModel",
            templateUrl: "components/castifyExt/ui/youtube-channel-chooser/youtube-channel-chooser.html",
            scope: {},
            link: function(t, n, r, i) {
                function o() {
                    var e = (t.channels || []).filter(function(e) {
                        return e.id === i.$viewValue
                    });
                    t.selected = e.length ? e[0] : u
                }

                function a(e) {
                    return t.loading = !0, e["finally"](function() {
                        t.loading = !1
                    }), e
                }

                function c() {
                    return e.listChannels().then(function(e) {
                        t.channels = e, s = !0, i.$validate()
                    })
                }
                var u = {
                        title: "Please Select",
                        id: null
                    },
                    s = !1;
                i.$render = o, i.$validators.validChannel = function(e, n) {
                    var r = e || n;
                    return !s || t.channels.some(function(e) {
                        return e.id === r
                    })
                }, t.select = function(e) {
                    t.selected = e, i.$setViewValue(e.id)
                }, t.remove = function(n, r) {
                    r.stopPropagation(), r.preventDefault(), i.$setViewValue(null), t.channels.splice(t.channels.indexOf(n), 1), e.removeChannel(n.id)
                }, t.openOrAdd = function(e, n) {
                    n(e), t.channels.length ? t.isDropdownOpen = !0 : t.addChannel(), e.stopPropagation(), e.preventDefault()
                }, t.addChannel = function() {
                    var n = e.addChannel().then(function(e) {
                        return t.select(e), c()
                    });
                    a(n)
                }, t.$watchCollection("channels", o), t.channels = [], t.loading = !1, t.isDropdownOpen = !1, a(c())
            }
        }
    }]), angular.module("castifyExt.ui.policyHint", ["castifyExt.appOptions"]).directive("cfPolicyHint", ["appOptions", function(e) {
        return {
            restrict: "E",
            replace: !0,
            scope: {},
            templateUrl: "components/castifyExt/ui/policy-hint/policy-hint.html",
            link: function(t, n, r) {
                t.$watch(function() {
                    return e.isSetByEnterprisePolicy(r.key)
                }, function(e) {
                    t.show = e
                })
            }
        }
    }]).directive("cfPolicyHide", ["appOptions", function(e) {
        return {
            restrict: "A",
            link: function(t, n, r) {
                t.$watch(function() {
                    return e.isSetByEnterprisePolicy(r.cfPolicyHide)
                }, function(e) {
                    n.toggleClass("ng-hide", e)
                })
            }
        }
    }]), angular.module("castifyEdit.ui.trimSlider", ["ngMaterial"]).directive("cfTrimSlider", function() {
        return {
            restrict: "E",
            scope: {
                range: "=?",
                previewCtrl: "=?"
            },
            templateUrl: "components/castifyEdit/ui/trim-slider/trim-slider.html",
            require: "^cfTimeLine",
            link: function(e, t, n, r) {
                function i(t) {
                    for (; !t.classList.contains("handle") && t;) t = t.parentElement;
                    var n = a(e.range),
                        r = t.classList;
                    return r.contains("start") ? {
                        moving: n.start,
                        counter: n.end,
                        isStart: !0
                    } : r.contains("end") ? {
                        moving: n.end,
                        counter: n.start
                    } : void 0
                }

                function o() {
                    var t = a(e.range);
                    l(t)
                }

                function a(e) {
                    return null === e ? {
                        start: 0,
                        end: r.getWidth()
                    } : {
                        start: r.timeToPos(e.start),
                        end: r.timeToPos(e.end)
                    }
                }

                function c(e) {
                    return {
                        start: r.posToTime(e.start),
                        end: r.posToTime(e.end)
                    }
                }

                function u(e) {
                    e.start = Math.min(Math.max(e.start, 0), r.getWidth()), e.end = Math.min(Math.max(e.end, 0), r.getWidth())
                }

                function s(e, t) {
                    return {
                        start: Math.min(e, t),
                        end: Math.max(e, t)
                    }
                }

                function l(e) {
                    b.css("transform", "translateZ(0) translateX(" + e.start + "px)"), w.css("transform", "translateZ(0) translateX(" + e.end + "px)"), x.css("width", e.start + "px"), E.css("left", e.end + "px");
                    var t = c(e);
                    k.time = t.start, S.time = t.end, r.redrawCanvas()
                }

                function f(e) {
                    var t = e.end;
                    return t = Math.abs(t - r.getTimeSpan()) > .001 ? r.roundTime(t) : r.getTimeSpan(), {
                        start: r.roundTime(e.start),
                        end: t
                    }
                }

                function d(t) {
                    e.previewCtrl.pause(), e.previewCtrl.seekThrottled(t)
                }

                function p(t, n) {
                    var r = e.previewCtrl;
                    n ? (r.seek(t.start), r.play()) : (r.seek(Math.max(0, t.start, t.end - C)), r.play())
                }

                function h(e) {
                    return a(f(c(e)))
                }

                function g(t) {
                    t.preventDefault(), m || (m = i(t.target));
                    var n = m.moving;
                    n += t.deltaX;
                    var o = s(n, m.counter);
                    if (u(o), o = h(o), l(o), d(r.roundTime(r.posToTime(n))), t.isFinal) {
                        var a = f(c(o));
                        0 === a.start && a.end === r.getTimeSpan() ? a = null : p(a, m.isStart), e.range = a, m = null, e.$apply()
                    }
                }
                var m, v = t[0],
                    y = [],
                    b = angular.element(v.querySelector(".handle.start")),
                    w = angular.element(v.querySelector(".handle.end")),
                    x = angular.element(v.querySelector(".overlay.start")),
                    E = angular.element(v.querySelector(".overlay.end"));
                e.range = null;
                var k = r.addTick({
                        time: 0
                    }),
                    S = r.addTick({
                        time: 0
                    }),
                    C = 1.5;
                e.$on("timeLine:resize", o), e.$on("videoPreview:loaded", o), angular.forEach(v.querySelectorAll(".handle"), function(e) {
                    var t = new Hammer.Manager(e);
                    t.add(new Hammer.Pan({
                        threshold: 0,
                        pointers: 0
                    })), t.on("pan", g), y.push(t)
                }), e.$on("$destroy", function() {
                    y.forEach(function(e) {
                        e.destroy()
                    })
                }), o()
            }
        }
    }), angular.module("castifyEdit.ui.timeLine", ["castifyEdit.ui.timeLineCanvas"]).directive("cfTimeLine", ["$window", function(e) {
        function t(t, n) {
            function r() {
                n.ticks.push({
                    time: 0
                }), n.ticks.push({
                    time: n.previewCtrl.duration
                }), i()
            }

            function i() {
                l = c.getBoundingClientRect().width - 2 * f, u.css("width", s.getWidth() + "px"), n.$broadcast("timeLine:resize")
            }
            var o = t,
                a = t[0],
                c = a.querySelector(".scroll-container"),
                u = angular.element(a.querySelector(".scroll-content")),
                s = this,
                l = 0,
                f = 20;
            n.zoom = 1, n.ticks = [], this.init = function() {
                i(), n.$on("videoPreview:loaded", r), n.$watch("zoom", i), e.addEventListener("resize", i), o.bind("$destroy", function() {
                    e.removeEventListener("resize", i)
                })
            }, s.scrollToCenter = function(e) {
                c.scrollLeft = e.offsetLeft - l / 2
            }, s.posToTime = function(e) {
                return e / s.getWidth() * n.previewCtrl.duration
            }, s.timeToPos = function(e) {
                return e / n.previewCtrl.duration * s.getWidth()
            }, s.getWidth = function() {
                return l * n.zoom
            }, s.getTimeSpan = function() {
                return n.previewCtrl.duration
            }, s.getPadding = function() {
                return f
            }, s.addTick = function(e) {
                return n.ticks.push(e), e
            }, s.roundTime = function(e) {
                return Math.round(10 * e) / 10
            }, s.redrawCanvas = function() {
                n.$broadcast("timeLine:redrawCanvas")
            }
        }
        return t.$inject = ["$element", "$scope"], {
            restrict: "E",
            templateUrl: "components/castifyEdit/ui/time-line/time-line.html",
            transclude: !0,
            scope: {
                previewCtrl: "="
            },
            controller: t,
            link: function(e, t, n, r) {
                r.init()
            }
        }
    }]), angular.module("castifyEdit.ui.videoEditor", ["castifyEdit.ui.videoCanvas", "castifyEdit.ui.cropCanvas", "castifyEdit.ui.videoControls", "castifyEdit.ui.trimSlider", "castifyEdit.ui.timeLine", "castifyEdit.ui.videoPreview", "castifyExt.ui.videoPlayer", "castifyExt.upgradeHelper", "castifyExt.ui.upgradeButton", "castifyExt.appOptions"]).directive("cfVideoEditor", ["$mdToast", "upgradeHelper", "appOptions", function(e, t, n) {
        return {
            restrict: "E",
            templateUrl: "components/castifyEdit/ui/video-editor.html",
            scope: {
                file: "=cfFile",
                cfCancel: "&",
                cfSave: "&"
            },
            controller: ["$scope", function(e) {
                this.registerVideoPreview = function(t) {
                    e.previewCtrl = t
                }, this.getScope = function() {
                    return e
                }, this.init = function() {}
            }],
            link: function(r, i, o, a) {
                if (a.init(), r.config = {
                        meta: {
                            copy: !0
                        }
                    }, n.values.showEditToolsHint) {
                    var c = e.simple().content("Draw a box to crop your video, move scissors to trim.").position("top right").hideDelay(0).action("Got it");
                    c._options.parent = "cf-video-editor", e.show(c).then(function(e) {
                        "ok" === e && (n.values.showEditToolsHint = !1, n.save())
                    })
                }
                r.upgradeHelper = t, r.canSave = function() {
                    return (r.config.crop || r.config.trim) && t.isPaid()
                }, r.save = function(e) {
                    var t = r.config;
                    t.meta.copy = e, "video/mp4" === r.file.mimeType && (t.outFormat = "mp4", t.meta.dst = "drive"), r.cfSave({
                        config: t
                    })
                }
            }
        }
    }]), angular.module("castifyEdit.ui.videoCanvas", []).directive("cfVideoCanvas", ["$window", "$timeout", function(e, t) {
        return {
            restrict: "E",
            transclude: !0,
            controller: ["$scope", "$element", function(t, n) {
                this.init = function() {
                    function r(e, t) {
                        var n = Math.min(t.width / e.width, t.height / e.height);
                        return {
                            width: e.width * n,
                            height: e.height * n
                        }
                    }

                    function i(e) {
                        return e && e.videoWidth ? {
                            width: e.videoWidth,
                            height: e.videoHeight
                        } : null
                    }

                    function o(e, t) {
                        if (!e) return null;
                        var n = {};
                        return ["width", "height", "top", "left"].forEach(function(r) {
                            e.hasOwnProperty(r) && (n[r] = e[r] * t)
                        }), n
                    }

                    function a() {
                        if (c = i(l[0])) {
                            var e = u[0].getBoundingClientRect(),
                                n = r(c, e);
                            s = n.width / c.width;
                            var o = Math.floor((e.width - n.width) / 2),
                                a = Math.floor((e.height - n.height) / 2),
                                f = {
                                    width: n.width + "px",
                                    height: n.height + "px",
                                    top: a + "px",
                                    left: o + "px",
                                    position: "absolute"
                                };
                            l.css(f),
                                l.removeClass("ng-hide");
                            var d = u.children().eq(1);
                            d.css(f), t.$broadcast("videoCanvas:resize")
                        }
                    }
                    var c, u = n,
                        s = 1,
                        l = u.find("video");
                    this.toCanvasCoordinates = function(e) {
                        return o(e, s)
                    }, this.toVideoCoordinates = function(e) {
                        return o(e, 1 / s)
                    }, this.scaleDimToCanvas = function(e) {
                        return e * s
                    }, this.getVideoSize = function() {
                        return c
                    }, u.css("position", "relative"), t.$on("videoPreview:loaded", a), l.addClass("ng-hide"), e.addEventListener("resize", a), u.bind("$destroy", function() {
                        e.removeEventListener("resize", a)
                    }), a()
                }
            }],
            link: function(e, t, n, r, i) {
                if (i(function(e) {
                        t.append(e)
                    }), 2 != t.children().length) throw Error();
                r.init()
            }
        }
    }]), angular.module("castifyEdit.ui.cropCanvas", []).directive("cfCropCanvas", function() {
        function e(e, t, n, r) {
            function i(t) {
                var n = r.toCanvasCoordinates(e.box);
                n.bottom = n.top + n.height, n.right = n.left + n.width;
                var i = {
                        left: n.left,
                        top: n.top
                    },
                    o = {
                        left: n.right,
                        top: n.top
                    },
                    a = {
                        left: n.left,
                        top: n.bottom
                    },
                    c = {
                        left: n.right,
                        top: n.bottom
                    },
                    u = t.classList;
                return u.contains("top-left") ? {
                    corner: i,
                    counter: c
                } : u.contains("top-right") ? {
                    corner: o,
                    counter: a
                } : u.contains("bottom-left") ? {
                    corner: a,
                    counter: o
                } : u.contains("bottom-right") ? {
                    corner: c,
                    counter: i
                } : void 0
            }

            function o(e, t) {
                return {
                    left: e.left - t.left,
                    top: e.top - t.top
                }
            }

            function a(e, t) {
                return {
                    left: e.left + t.left,
                    top: e.top + t.top
                }
            }

            function c(e, t, n) {
                if (!n) return u(e, t);
                var r = o(t, e),
                    i = n,
                    c = n;
                return c = Math.abs(r.left) <= Math.abs(r.top * i) ? {
                    left: r.left,
                    top: Math.abs(r.left / i) * Math.sign(r.top)
                } : {
                    left: Math.abs(r.top * i) * Math.sign(r.left),
                    top: r.top
                }, u(e, a(e, c))
            }

            function u(e, t) {
                var n = Math.min(e.left, t.left),
                    r = Math.min(e.top, t.top),
                    i = Math.max(e.top, t.top),
                    o = Math.max(e.left, t.left);
                return {
                    top: r,
                    left: n,
                    width: o - n,
                    height: i - r
                }
            }

            function s(e) {
                var t = r.scaleDimToCanvas(U);
                e.width = Math.max(e.width, t), e.height = Math.max(e.height, t)
            }

            function l(e) {
                e.left = Math.min(Math.max(e.left, 0), M.width), e.top = Math.min(Math.max(e.top, 0), M.height)
            }

            function f(e) {
                var t = y(r.toVideoCoordinates(e));
                return b(t), v(t, r.getVideoSize()), t
            }

            function d(t) {
                var n = null;
                return (e.options && e.options.lockAspectYt || t.ctrlKey) && (n = W), n
            }

            function p(e, t, n) {
                var r = angular.copy(t);
                r.top += n.deltaY, r.left += n.deltaX;
                var i = d(n.srcEvent);
                h(e, r, i, n.isFinal)
            }

            function h(t, n, r, i) {
                l(n);
                var o = c(t, n, r);
                s(o), m(o), o = w(o), A(o);
                var a = f(o);
                $(a, o), i && (e.box = a, e.$apply())
            }

            function g(e) {
                e.preventDefault(), I || (I = i(e.target)), p(I.counter, I.corner, e), e.isFinal && (I = null)
            }

            function m(e) {
                v(e, M)
            }

            function v(e, t) {
                var n = e.left + e.width - t.width;
                n > 0 && (e.left -= n);
                var r = e.top + e.height - t.height;
                r > 0 && (e.top -= r), e.top < 0 && (e.height += e.top), e.left < 0 && (e.width += e.left), e.left = Math.max(0, e.left), e.top = Math.max(0, e.top)
            }

            function y(e) {
                return {
                    left: Math.round(e.left),
                    top: Math.round(e.top),
                    width: Math.round(e.width),
                    height: Math.round(e.height)
                }
            }

            function b(e) {
                e.width -= e.width % 2, e.height -= e.height % 2
            }

            function w(e) {
                return e = r.toVideoCoordinates(e), e = y(e), b(e), e = r.toCanvasCoordinates(e)
            }

            function x(t) {
                t.preventDefault(), D || (D = r.toCanvasCoordinates(e.box));
                var n = angular.copy(D);
                n.top += t.deltaY, n.left += t.deltaX, l(n), m(n), n = w(n), A(n), t.isFinal && (D = null, e.box = f(n), e.$apply())
            }

            function E(e) {
                R && (e.preventDefault(), R.hasPanned = !0, p(R.start, R.start, e), e.isFinal && (R = null))
            }

            function k(e) {
                var t = e.x,
                    n = e.y;
                return e.touches && e.touches.length && (t = e.touches[0].clientX, n = e.touches[0].clientY), {
                    left: t - M.left,
                    top: n - M.top
                }
            }

            function S(e) {
                e.preventDefault(), document.removeEventListener("mouseup", S, !0), R && R.hasPanned && h(R.start, k(e), d(e), !0), R = null
            }

            function C(e) {
                if (!H[0].contains(e.target)) {
                    var t = k(e);
                    R = {
                        start: t
                    }, document.addEventListener("mouseup", S, !0)
                }
            }

            function A(e) {
                H.toggleClass("ng-hide", !e), e && (e = y(e), e.bottom = e.top + e.height, e.right = e.left + e.width, q.css("height", e.top + "px"), O.css("top", e.bottom + "px"), _.css("top", e.top + "px"), _.css("width", e.left + "px"), _.css("height", e.height + "px"), F.css("top", e.top + "px"), F.css("left", e.right + "px"), F.css("height", e.height + "px"), H.css({
                    top: e.top + "px",
                    left: e.left + "px",
                    width: e.width + "px",
                    height: e.height + "px"
                }))
            }

            function $(e, t) {
                return e && (t || (t = r.toCanvasCoordinates(e)), t.width > G.width && t.height > G.height) ? void V.text(e.width + "\u2715" + e.height + " px") : (V.toggleClass("ng-hide", !1), void V.text(""))
            }

            function T() {
                if (e.initialized = !0, M = t[0].getBoundingClientRect(), e.box) {
                    var n = r.toCanvasCoordinates(e.box);
                    A(n)
                } else A()
            }

            function P(e, t) {
                var n = new Hammer.Manager(e);
                n.add(new Hammer.Pan({
                    threshold: 0,
                    pointers: 0
                })), n.on("pan", t), j.push(n)
            }
            var I, D, R, M, U = 16,
                L = t[0],
                q = angular.element(L.querySelector(".overlay.top")),
                O = angular.element(L.querySelector(".overlay.bottom")),
                _ = angular.element(L.querySelector(".overlay.left")),
                F = angular.element(L.querySelector(".overlay.right")),
                H = angular.element(L.querySelector(".crop-box")),
                B = angular.element(L.querySelector(".move-handle")),
                V = angular.element(L.querySelector(".dimension-info")),
                j = [],
                W = 16 / 9,
                G = {
                    width: 100,
                    height: 20
                };
            e.$watch("box", function(t) {
                if (t) {
                    var n = r.getVideoSize();
                    $(t), 0 === t.top && 0 === t.left && t.width === n.width && t.height === n.height ? e.crop = null : e.crop = t
                }
            }, !0), e.$on("videoCanvas:resize", T), e.initialized = !1, angular.forEach(L.querySelectorAll(".handle"), function(e) {
                P(e, g)
            }), P(B[0], x), P(t[0], E), t.bind("mousedown touchstart", C), e.$on("$destroy", function() {
                j.forEach(function(e) {
                    e.destroy()
                })
            }), T()
        }
        return {
            restrict: "E",
            require: "^cfVideoCanvas",
            templateUrl: "components/castifyEdit/ui/crop-canvas/crop-canvas.html",
            scope: {
                crop: "=",
                initialized: "=?",
                options: "="
            },
            link: e
        }
    }), angular.module("castifyEdit.ui.videoControls", ["w69b.throttle"]).directive("cfVideoControls", ["$document", "throttle", function(e, t) {
        function n(e) {
            e.play = function() {
                e.previewCtrl.play()
            }, e.pause = function() {
                e.previewCtrl.pause()
            }
        }
        return {
            restrict: "E",
            templateUrl: "components/castifyEdit/ui/video-controls/video-controls.html",
            scope: {
                previewCtrl: "="
            },
            link: n
        }
    }]), angular.module("castifyEdit.ui.timeLineCanvas", ["w69b.timeutil"]).directive("cfTimeLineCanvas", ["timeutil", "$window", function(e, t) {
        function n(t, n, r) {
            function i() {
                var e = window.devicePixelRatio;
                g = n.getWidth() + 2 * n.getPadding(), m = r.height, t.width = g * e, t.height = m * e, t.style.width = g + "px", t.style.height = m + "px", d.scale(e, e)
            }

            function o(e, t) {
                return t[0] <= e && e <= t[1]
            }

            function a(e, t) {
                return o(e[0], t) || o(e[0], t) || o(t[0], e)
            }

            function c(e) {
                return !p.some(function(t) {
                    return a(e, t)
                })
            }

            function u(e) {
                p.push(e)
            }

            function s() {
                d.fillStyle = r.labelColor, d.font = r.labelFont
            }

            function l() {
                d.translate(0, 20)
            }
            var f = {},
                d = t.getContext("2d", {
                    alpha: !1
                }),
                p = [],
                h = [];
            f.ctx = d, f.options = r;
            var g, m;
            return f.setLineStyle = function() {
                d.strokeStyle = r.color, d.lineWidth = r.lineWidth
            }, f.renderLabelIfFree = function(t, i) {
                d.save(), i || (i = e.formatDuration(t));
                var o = n.timeToPos(t);
                s();
                var a = d.measureText(i),
                    p = Math.max(o - a.width / 2, -f.getPadding()),
                    h = p + a.width - (f.getWidth() + f.getPadding());
                h > 0 && (p -= h);
                var g = [p, p + a.width];
                return c(g) ? (l(), d.fillText(i, p, 0), g[0] -= r.labelMargin, g[1] += r.labelMargin, u(g), d.restore(), !0) : (d.restore(), !1)
            }, f.getLineCenterY = function() {
                return m - r.lineWidth - r.lineMargin
            }, f.transformLineCenter = function() {
                d.translate(0, f.getLineCenterY())
            }, f.render = function() {
                i(), d.fillStyle = r.background, d.fillRect(0, 0, g + 1, m + 1), p = [], d.translate(f.getPadding(), 0), h.forEach(function(e) {
                    d.save(), e.render(), d.restore()
                })
            }, f.addItem = function(e) {
                h.push(e)
            }, f.timeToPos = function(e) {
                return n.timeToPos(e)
            }, f.posToTime = function(e) {
                return n.posToTime(e)
            }, f.getPadding = function() {
                return n.getPadding()
            }, f.getWidth = function() {
                return n.getWidth()
            }, f
        }

        function r(e) {
            function t() {
                var t = new Path2D;
                return t.moveTo(0, 0), t.lineTo(e.getWidth(), 0), t
            }
            var n = {};
            return n.render = function() {
                e.transformLineCenter(), e.setLineStyle(), e.ctx.stroke(t())
            }, n
        }

        function i(e, t) {
            function n(t) {
                if (o.save(), e.renderLabelIfFree(t.time, t.label)) {
                    var n = e.timeToPos(t.time);
                    e.transformLineCenter(), o.translate(n, -a.tickHeight / 2), e.setLineStyle(), o.stroke(r())
                }
                o.restore()
            }

            function r() {
                var e = new Path2D;
                return e.moveTo(0, 0), e.lineTo(0, a.tickHeight), e
            }
            var i = {},
                o = e.ctx,
                a = e.options;
            return i.render = function() {
                t.forEach(n)
            }, i
        }

        function o(e, t, n) {
            function r() {
                var e = new Path2D;
                return e.arc(0, 0, g.seekHandleSize / 2, 0, 2 * Math.PI), e
            }

            function i(e) {
                return Math.min(Math.max(n.getTrimmedStartTime(), e), n.getTrimmedEndTime())
            }

            function o(e) {
                e.preventDefault(), document.removeEventListener("mouseup", o, !0), document.removeEventListener("touchend", o, !0), "touchend" !== e.type && u(a(e)), d = null
            }

            function a(t) {
                var n = t.x;
                return t.touches && t.touches.length && (n = t.touches[0].clientX), n - (f[0].getBoundingClientRect().left + 2 * e.getPadding())
            }

            function c(e) {
                if (e.preventDefault(), !d) {
                    var t = a(e);
                    d = {
                        start: t
                    }, u(t), document.addEventListener("mouseup", o, !0), document.addEventListener("touchend", o, !0)
                }
            }

            function u(t) {
                t = Math.min(Math.max(t, 0), e.getWidth());
                var r = e.posToTime(t);
                r = i(r), m = r, n.pause(), n.seekThrottled(r), v !== m && e.render()
            }

            function s(e) {
                e.preventDefault(), d && (u(d.start + e.deltaX), e.isFinal && (d = null))
            }

            function l() {
                f = angular.element('<div class="seek-event-target"></div>'), f.css("left", -e.getPadding() + "px"), f.css("right", -e.getPadding() + "px"), t.append(f);
                var n = new Hammer.Manager(f[0]);
                n.add(new Hammer.Pan({
                    threshold: 0,
                    pointers: 0
                })), n.on("pan", s), f.bind("mousedown touchstart", c), t.bind("$destroy", function() {
                    n.destroy(), f.unbind("mousedown touchstart", c)
                })
            }
            var f, d, p = {},
                h = e.ctx,
                g = e.options,
                m = 0,
                v = 0;
            return p.render = function() {
                var t = n.currentTime;
                d && (t = m), v = t, e.renderLabelIfFree(t);
                var i = e.timeToPos(t);
                e.transformLineCenter(), h.fillStyle = g.seekHandleColor, h.translate(i, 0), h.fill(r())
            }, l(), p
        }
        return {
            restrict: "E",
            require: "^cfTimeLine",
            template: "<canvas></canvas>",
            scope: {
                ticks: "=",
                previewCtrl: "=?"
            },
            link: function(e, a, c, u) {
                function s(e) {
                    var n = angular.element("<div></div>");
                    n.addClass(e), a.append(n);
                    var r = t.getComputedStyle(n[0]).color;
                    return n.remove(), r
                }

                function l() {
                    d.render()
                }
                var f = a.find("canvas"),
                    d = n(f[0], u, {
                        items: ["TimeLineSeekItem"],
                        color: s("default-color"),
                        labelColor: s("label-color"),
                        labelFont: "12px Roboto",
                        background: "#f5f5f5",
                        lineWidth: 2,
                        lineMargin: 8,
                        tickHeight: 10,
                        labelMargin: 4,
                        seekHandleSize: 16,
                        seekHandleColor: s("seek-handle-color"),
                        height: 42
                    });
                d.addItem(new r(d)), d.addItem(new i(d, e.ticks)), d.addItem(new o(d, a, e.previewCtrl)), a.css("margin-left", -u.getPadding() + "px"), a.css("margin-right", -u.getPadding() + "px"), e.$on("timeLine:resize", l), e.$on("timeLine:redrawCanvas", l), e.$on("videoPreview:loaded", l), e.$on("videoPreview:timeUpdate", l)
            }
        }
    }]), angular.module("castifyEdit.ui.videoPreview", ["w69b.throttle"]).directive("cfVideoPreview", ["throttle", "$interval", "$document", function(e, t, n) {
        return {
            restrict: "E",
            template: '<video autoplay cf-video-load="file"></video>',
            scope: {
                editConfig: "=",
                file: "="
            },
            require: ["^cfVideoEditor", "cfVideoPreview"],
            controller: ["$scope", function(r) {
                function i(e) {
                    e = e || 0, p.duration - p.currentTime <= e && (e = 0);
                    var t = r.editConfig.trim;
                    return t && t.end && p.currentTime >= t.end - e
                }

                function o() {
                    var e = r.editConfig.trim;
                    !i(.05) || g.paused || g.ended || (p.pause(), g.seek(e.end))
                }

                function a() {
                    g.currentTime !== v && (o(), v = g.currentTime, h.$broadcast("videoPreview:timeUpdate"))
                }

                function c() {
                    o(), g.paused && (t.cancel(m), m = !1)
                }

                function u() {
                    g.paused || m || (m = t(c, 10, 0, !1))
                }

                function s() {
                    p.paused ? g.play() : g.pause()
                }

                function l(e) {
                    32 === e.which && e.target === b && (s(), e.preventDefault())
                }

                function f(e) {
                    return Math.round(10 * e) / 10
                }

                function d(e) {
                    e = f(e), e !== p.currentTime && (p.currentTime = f(e))
                }
                var p, h, g = this,
                    m = null;
                g.loading = !1, g.duration = 0;
                var v = g.currentTime,
                    y = null,
                    b = n.find("body")[0];
                Object.defineProperties(g, {
                    ended: {
                        get: function() {
                            return p.ended || i()
                        }
                    },
                    paused: {
                        get: function() {
                            return p.paused
                        }
                    },
                    currentTime: {
                        get: function() {
                            return p.currentTime
                        }
                    },
                    loading: {
                        get: function() {
                            return !y || p.seeking
                        }
                    }
                }), g.init = function(e, t) {
                    p = e[0], h = t, g.video = p, e.bind("timeupdate", a), e.bind("loadedmetadata", function i() {
                        g.duration = p.duration, h.$broadcast("videoPreview:loaded"), e.unbind("loadedmetadata", i), r.$apply()
                    }), e.bind("playing pause ended", function() {
                        u(), r.$apply()
                    }), e.bind("seeking seeked", function(e) {
                        r.$apply()
                    }), e.bind("loadstart", function o() {
                        y = !1, e.unbind("loadstart", o), r.$apply()
                    }), e.bind("canplay", function c() {
                        y = !0, e.unbind("canplay", c), r.$apply()
                    }), n.bind("keydown", l), t.$on("$destroy", function() {
                        n.unbind("keydown", l)
                    })
                };
                var w = e(function(e) {
                    d(e)
                }, 100);
                g.pause = function() {
                    p.pause()
                }, g.play = function() {
                    g.ended && g.seekToStart(), p.play()
                }, g.seekToStart = function() {
                    var e = r.editConfig.trim;
                    g.seek(e && e.start || 0)
                }, g.seek = function(e) {
                    w.flush(), d(e)
                }, g.getTrimmedEndTime = function() {
                    var e = r.editConfig.trim;
                    return e && e.end || g.duration
                }, g.getTrimmedStartTime = function() {
                    var e = r.editConfig.trim;
                    return e && e.start || 0
                }, g.seekThrottled = function(e) {
                    e !== p.currentTime && w(e)
                }
            }],
            link: function(e, t, n, r) {
                var i = r[0],
                    o = r[1];
                o.init(t.find("video"), i.getScope()), i.registerVideoPreview(o)
            }
        }
    }]), angular.module("castifyEdit.ui.timeLineSeekItem", []).factory("TimeLineSeekItem", function() {
        function e(e) {
            var t = {};
            return t
        }
        return e
    }), angular.module("castifyEdit.editJobSchedulerClient", ["castifyExt.backgroundTool"]).factory("editJobSchedulerClient", ["backgroundTool", "$timeout", function(e, t) {
        var n, r = 723517440,
            i = e.portHelper("editor", !1),
            o = !0,
            a = {};
        a.jobs = [];
        var c = {
            jobsList: function(e) {
                a.jobs.length = 0, a.jobs.push.apply(a.jobs, e), n && t.cancel(n), n = null, o && a.getJobsByState("running").length && (n = t(a.getJobs, 1e3))
            }
        };
        return i.installHandlers(c), a.addJob = function(e) {
            i.postMessage("addJob", e)
        }, a.cancel = function(e) {
            i.postMessage("cancel", e)
        }, a.getJobs = function() {
            i.postMessage("getJobs")
        }, a.clearComplete = function(e) {
            i.postMessage("clearComplete", e)
        }, a.getJobsByState = function(e) {
            return a.jobs.filter(function(t) {
                return t.state === e
            })
        }, a.getLastCompleteExportJob = function() {
            var e = a.jobs.filter(function(e) {
                return "done" === e.state && e.result.isExport
            }).sort(function(e, t) {
                return t.id - e.id
            });
            return e.length ? e[0] : null
        }, a.canExportGif = function(e, t) {
            if (!e || !e.width || !e.height) return !0;
            var n = 8,
                i = Math.min(1, t.width / e.width, t.height / e.height),
                o = 5 * i * e.width * i * e.height * n * e.duration;
            return o < r
        }, a
    }]), angular.module("castifyExt.ui.fileEdit", ["castifyEdit.ui.videoEditor", "castifyEdit.editJobSchedulerClient", "castifyExt.upgradeHelper", "castifyWebEdit.webEditUtils"]).controller("FileEditCtrl", ["$scope", "$transition$", "fileDbClient", "$location", "editJobSchedulerClient", "upgradeHelper", "webEditUtils", function(e, t, n, r, i, o, a) {
        e.fileId = t.params().fileId, n.getFileDescriptor(e.fileId).then(function(t) {
            e.file = t
        }), e.onSave = function() {
            var t = _asyncToGenerator(regeneratorRuntime.mark(function n(t) {
                return regeneratorRuntime.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            if (o.isPaid()) {
                                n.next = 2;
                                break
                            }
                            return n.abrupt("return");
                        case 2:
                            return n.next = 4, a.showWaitBeforeCropSaveDialogIfHwEnabled(e.file);
                        case 4:
                            if (n.sent) {
                                n.next = 6;
                                break
                            }
                            return n.abrupt("return");
                        case 6:
                            t.meta.fileId = e.fileId, i.addJob(t), r.path("/files/");
                        case 9:
                        case "end":
                            return n.stop()
                    }
                }, n, this)
            }));
            return function(e) {
                return t.apply(this, arguments)
            }
        }(), e.onCancel = function() {
            r.replace().path("/files/" + e.fileId)
        }
    }]), angular.module("castifyExt.ui.editJobsInfo", ["castifyEdit.editJobSchedulerClient"]).component("cfEditJobsInfo", {
        templateUrl: "components/castifyExt/ui/edit-jobs-info/edit-jobs-info.html",
        controller: ["$scope", "editJobSchedulerClient", "$mdDialog", function(e, t, n) {
            var r = this;
            e.scheduler = t, r.getNumQueued = function() {
                return t.getJobsByState("queued").length
            }, r.cancel = function(e) {
                e.cancelDanger ? n.show(n.confirm().title("Recording requires processing").content("Canceling may leave you with a corrupted and unusable recording!").cancel("Keep processing").ok("Cancel processing")).then(function() {
                    t.cancel(e.id)
                }) : t.cancel(e.id)
            }, r.getCompleteExportJobs = function() {
                var e = t.getJobsByState("done").filter(function(e) {
                    return e.result.isExport
                });
                return e.sort(function(e, t) {
                    return t.id - e.id
                }), e
            }, r.save = function(e) {
                var n = angular.element("<a></a>"),
                    r = e.result.saveFileName.replace(/[\/,\\]/g, "");
                n.attr("href", e.result.url), n.attr("download", r), n[0].dispatchEvent(new MouseEvent("click")), t.clearComplete(e.id)
            }, t.getJobs()
        }]
    }), angular.module("castifyExt.ui.connectAppChooser", ["castifyExt.connect.connectedApps", "castifyExt.connect.appRegistry"]).directive("cfConnectAppChooser", ["connectedApps", "appRegistry", "$q", function(e, t, n) {
        return {
            restrict: "E",
            transclude: !0,
            require: "?ngModel",
            templateUrl: "components/castifyExt/ui/connect-app-chooser/connect-app-chooser.html",
            scope: {
                onSelected: "&",
                onDisconnected: "&"
            },
            link: function(r, i, o, a) {
                function c() {
                    var e = (r.apps || []).filter(function(e) {
                        return a.$viewValue && e.id === a.$viewValue.id
                    });
                    return e.length ? e[0] : null
                }

                function u(e) {
                    return r.loading = !0, e["finally"](function() {
                        r.loading = !1
                    }), e
                }

                function s() {
                    return e.getConnected({
                        hasShareUrl: !0
                    }).then(t.getApps).then(function(e) {
                        r.apps = e, a && a.$setViewValue(c())
                    })
                }

                function l() {
                    e.getConnected({
                        hasShareUrl: !0
                    }).then(function(e) {
                        r.hasApps = e.length > 0
                    })
                }

                function f() {
                    return d ? n.when() : (d = !0, u(s()))
                }
                a && (a.$render = angular.noop), r.select = function(e) {
                    r.selected = e, a && a.$setViewValue(e), r.onSelected({
                        app: e
                    })
                }, r.showMenu = function(e, t) {
                    f().then(function() {
                        t(e)
                    })
                }, r.apps = [], r.loading = !1;
                var d = !1;
                l()
            }
        }
    }]), angular.module("castifyExt.ui.connectShareProgress", ["castifyExt.syncDownloaderClient"]).directive("cfConnectShareProgress", function() {
        return {
            restrict: "E",
            templateUrl: "components/castifyExt/ui/connect-share-progress/connect-share-progress.html",
            replace: !1,
            scope: {
                fileId: "="
            },
            controller: "ConnectShareProgressCtrl"
        }
    }), angular.module("castifyExt.ui.connectedApps", ["castifyExt.connect.connectedApps", "ngMaterial"]).controller("ConnectedAppsCtrl", ["$scope", "connectedApps", "$mdDialog", function(e, t, n) {
        function r() {
            return t.getConnectedAppInfo().then(function(t) {
                e.apps = t
            })
        }

        function i(t) {
            return e.loading = !0, t["finally"](function() {
                e.loading = !1
            }), t
        }
        e.remove = function(r, i) {
            n.show(n.confirm("Disconnect App").content('Do you want to disconnect "' + r.title + '" from Screencastify?').ok("Disconnect App").cancel("Cancel").targetEvent(i)).then(function() {
                e.apps.splice(e.apps.indexOf(r), 1), t.disconnect(r.id)
            })
        }, i(r())
    }]), angular.module("castifyExt.ui.themeConfig", ["ngMaterial"]).config(["$mdThemingProvider", function(e) {
        e.definePalette("castify", {
            50: "f5f5f5",
            100: "555555",
            200: "ef9a9a",
            300: "e57373",
            400: "ef5350",
            500: "ff8282",
            600: "e53935",
            700: "d32f2f",
            800: "c62828",
            900: "b71c1c",
            A100: "fd8c00",
            A200: "ff8282",
            A400: "00aaff",
            A700: "d50000"
        }), e.theme("default").primaryPalette("castify", {
            "default": "500",
            "hue-1": "A100",
            "hue-2": "A200",
            "hue-3": "A400"
        }).accentPalette("pink")
    }]).config(["$mdIconProvider", function(e) {
        e.defaultIconSet("gen/icons.svg")
    }]), angular.module("castifyExt.ui.loadingOverlay", []).directive("cfLoadingBackdrop", function() {
        return {
            restrict: "E",
            template: '<md-progress-circular md-mode="indeterminate"></md-progress-circular>'
        }
    }).directive("cfLoadingOverlay", ["$compile", function(e) {
        return {
            restrict: "A",
            link: function(t, n, r) {
                var i = null;
                t.$watch(r.cfLoadingOverlay, function(r) {
                    r ? (i = e("<cf-loading-backdrop></cf-loading-backdrop>")(t), n.append(i)) : i && (i.remove(), i = null)
                })
            }
        }
    }]), angular.module("castifyExt.ui.openInAppTab", ["w69b.chromeTabs", "w69b.chromeWindows"]).service("openInAppTab", ["chromeTabs", "chromeRuntime", "chromeWindows", "$q", function(e, t, n, r) {
        return function(r) {
            var i = "chrome-extension://" + t.id + "/app.html";
            return 0 === r.lastIndexOf("#", 0) && (r = i + r), e.create({
                active: !0,
                url: r
            }).then(function(e) {
                n.update(e.windowId, {
                    focused: !0
                })
            })
        }
    }]).directive("openInAppTab", ["$window", "openInAppTab", function(e, t) {
        return {
            restrict: "A",
            link: function(n, r, i) {
                r.bind("click", function(n) {
                    var r = angular.element(n.target),
                        o = i.href || r.attr("href");
                    o && (n.preventDefault(), t(o).then(function() {
                        e.close()
                    }))
                })
            }
        }
    }]), angular.module("castifyExt.ui.upgradeButton", ["castifyExt.upgradeHelper", "castifyExt.userAccount", "w69b.chromeAnalytics"]).component("cfUpgradeButton", {
        template: '<md-button\n        ng-click="$ctrl.signIn()"\n        class="md-primary"\n        ng-show="!upgradeHelper.isPaid()">\n          {{text}}\n        </md-button>\n        <ng-transclude ng-show="upgradeHelper.isPaid()"></ng-transclude>',
        bindings: {
            content: "@",
            campaign: "@"
        },
        transclude: !0,
        controller: ["$scope", "upgradeHelper", "userAccount", "analytics", function(e, t, n, r) {
            var i = this;
            e.upgradeHelper = t, e.$watch(t.isSignedIn, function(t) {
                t ? e.text = "Upgrade" : e.text = "Sign In"
            }), e.googleTrack = function(e) {
                r.trackEvent("recorder", e, "", 1)
            }, i.signIn = function() {
                e.googleTrack("sign in through front"), t.isSignedIn() ? t.openBuy(i.campaign, i.content) : n.signIn()
            }
        }]
    }), angular.module("castifyExt.ui.classroomShare", ["w69b.scriptloader"]).directive("cfClassroomShare", ["scriptloader", "$window", function(e, t) {
        function n() {
            return e.load(r)
        }
        var r = "https://apis.google.com/js/platform.js";
        return t.___gcfg = {
            parsetags: "explicit"
        }, {
            restrict: "E",
            scope: {
                url: "=",
                title: "="
            },
            template: "<div></div>",
            link: function(e, r) {
                function i() {
                    n().then(function() {
                        var n = t.gapi;
                        n.sharetoclassroom.render(o[0], {
                            url: e.url,
                            size: 24,
                            title: e.title
                        })
                    })
                }
                var o = r.children().eq(0);
                e.$watchGroup(["url", "title"], function() {
                    e.url ? i() : o.children().remove()
                })
            }
        }
    }]), angular.module("castifyExt.connect.appRegistry", ["w69b.spawn", "w69b.chromeStorage"]).factory("appRegistry", ["castifyConfig", "$http", "$q", "spawn", "chromeStorage", function(e, t, n, r, i) {
        function o() {
            return i.local.getSingle(h, [])
        }

        function a(e) {
            return i.local.setSingle(h, e)
        }

        function c(e) {
            return o().then(function(t) {
                return t.filter(function(t) {
                    return e.includes(t.id)
                })
            })
        }

        function u(e, t) {
            var n = Date.now(),
                r = e.some(function(e) {
                    return n > e._fetchTimestamp + g
                });
            return !r && t.length === e.length
        }

        function s(e) {
            return e.forEach(function(e) {
                delete e._fetchTimestamp
            }), e
        }

        function l(e, t) {
            return r(regeneratorRuntime.mark(function n() {
                var r;
                return regeneratorRuntime.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return e = new Set(e || []), n.next = 3, o();
                        case 3:
                            return r = n.sent, t.forEach(function(t) {
                                e.add(t.id)
                            }), r = r.filter(function(t) {
                                return !e.has(t.id)
                            }), t.forEach(function(e) {
                                e._fetchTimestamp = Date.now()
                            }), r = r.concat(t), n.next = 10, a(r);
                        case 10:
                        case "end":
                            return n.stop()
                    }
                }, n, this)
            }))
        }

        function f(e) {
            return r(regeneratorRuntime.mark(function i() {
                var r, o, a;
                return regeneratorRuntime.wrap(function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            if (e && 0 !== e.length) {
                                i.next = 2;
                                break
                            }
                            return i.abrupt("return", n.when([]));
                        case 2:
                            return i.next = 4, c(e);
                        case 4:
                            if (o = i.sent, !u(o, e)) {
                                i.next = 7;
                                break
                            }
                            return i.abrupt("return", s(o));
                        case 7:
                            return i.prev = 7, i.next = 10, t.get(d, {
                                params: {
                                    ids: e
                                }
                            });
                        case 10:
                            a = i.sent, r = a.data, i.next = 17;
                            break;
                        case 14:
                            return i.prev = 14, i.t0 = i["catch"](7), i.abrupt("return", s(o));
                        case 17:
                            return i.next = 19, l(e, r);
                        case 19:
                            return i.abrupt("return", s(r));
                        case 20:
                        case "end":
                            return i.stop()
                    }
                }, i, this, [
                    [7, 14]
                ])
            }))
        }
        var d = e.API_URL + "/apps",
            p = {},
            h = "appRegistry:cache",
            g = 6e4;
        return p.getApps = function(e) {
            return f(e)
        }, p.getAppInfo = function(e) {
            return f([e]).then(function(e) {
                return e.length ? e[0] : n.reject()
            })
        }, p
    }]), angular.module("castifyExt.connect.connectedApps", ["w69b.chromeStorage", "w69b.spawn", "castifyExt.connect.appRegistry"]).factory("connectedApps", ["chromeStorage", "spawn", "appRegistry", "$rootScope", function(e, t, n, r) {
        function i() {
            return e.sync.getSingle(l, []).then(function(e) {
                return e.map(function(e) {
                    return angular.isObject(e) ? e : {
                        id: e,
                        hasShareUrl: !0
                    }
                })
            })
        }

        function o(t) {
            return e.sync.setSingle(l, t)
        }

        function a() {
            return e.sync.getSingle(f)
        }

        function c(t) {
            return e.sync.setSingle(f, t)
        }

        function u(e, t) {
            return e.some(function(e) {
                return e.id === t
            })
        }
        var s = {},
            l = "connectedAppIds",
            f = "connectedAppRecentId";
        s.getConnected = function(e) {
            return t(regeneratorRuntime.mark(function n() {
                var t;
                return regeneratorRuntime.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return n.next = 2, i();
                        case 2:
                            return t = n.sent, e && (t = t.filter(function(t) {
                                var n = !0;
                                return angular.forEach(e, function(e, r) {
                                    n = n && t[r] === e
                                }), n
                            })), n.abrupt("return", t.map(function(e) {
                                return e.id
                            }));
                        case 5:
                        case "end":
                            return n.stop()
                    }
                }, n, this)
            }))
        }, s.getConnectedAppInfo = t.wrap(regeneratorRuntime.mark(function p() {
            var e, t;
            return regeneratorRuntime.wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                    case 0:
                        return r.next = 2, i();
                    case 2:
                        return e = r.sent, r.next = 5, n.getApps(e.map(function(e) {
                            return e.id
                        }));
                    case 5:
                        return t = r.sent, t = angular.copy(t), t.forEach(function(t) {
                            var n = e.find(function(e) {
                                return e.id === t.id
                            });
                            angular.extend(t, n)
                        }), r.abrupt("return", t);
                    case 9:
                    case "end":
                        return r.stop()
                }
            }, p, this)
        })), s.getConnectedAppInfoForApp = t.wrap(regeneratorRuntime.mark(function h(e) {
            var t, n;
            return regeneratorRuntime.wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                    case 0:
                        return r.next = 2, s.getConnectedAppInfo();
                    case 2:
                        if (t = r.sent, n = t.find(function(t) {
                                return t.id === e
                            })) {
                            r.next = 6;
                            break
                        }
                        return r.abrupt("return", null);
                    case 6:
                        return r.abrupt("return", n);
                    case 7:
                    case "end":
                        return r.stop()
                }
            }, h, this)
        })), s.hasConnectedApps = function() {
            return s.getConnected().then(function(e) {
                return e.length > 0
            })
        }, s.isConnected = function(e) {
            return t(regeneratorRuntime.mark(function n() {
                var t;
                return regeneratorRuntime.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return n.next = 2, i();
                        case 2:
                            return t = n.sent, n.abrupt("return", u(t, e));
                        case 4:
                        case "end":
                            return n.stop()
                    }
                }, n, this)
            }))
        }, s.disconnect = function(e) {
            return t(regeneratorRuntime.mark(function n() {
                var t;
                return regeneratorRuntime.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return n.next = 2, i();
                        case 2:
                            return t = n.sent, t = t.filter(function(t) {
                                return t.id !== e
                            }), n.next = 6, c(null);
                        case 6:
                            return n.next = 8, o(t);
                        case 8:
                            r.$broadcast("connect:appDisconnected", e);
                        case 9:
                        case "end":
                            return n.stop()
                    }
                }, n, this)
            }))
        }, s.connect = function(e) {
            return t(regeneratorRuntime.mark(function a() {
                var t, s;
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                        case 0:
                            return a.next = 2, i();
                        case 2:
                            return t = a.sent, a.next = 5, n.getAppInfo(e);
                        case 5:
                            if (s = a.sent, u(t, e)) {
                                a.next = 11;
                                break
                            }
                            if (t.push({
                                    id: e,
                                    hasShareUrl: !!s.shareUrl
                                }), !s.shareUrl) {
                                a.next = 11;
                                break
                            }
                            return a.next = 11, c(e);
                        case 11:
                            return a.next = 13, o(t);
                        case 13:
                            r.$broadcast("connect:appConnected", e, s);
                        case 14:
                        case "end":
                            return a.stop()
                    }
                }, a, this)
            }))
        };
        var d = t.wrap(regeneratorRuntime.mark(function g(e, t, n) {
            var r, a, c;
            return regeneratorRuntime.wrap(function(u) {
                for (;;) switch (u.prev = u.next) {
                    case 0:
                        return u.next = 2, i();
                    case 2:
                        if (r = u.sent, a = r.find(function(t) {
                                return t.id === e
                            })) {
                            u.next = 6;
                            break
                        }
                        throw new Error("Cannot set user data for non-connected app");
                    case 6:
                        return c = a[t], null === n || angular.isUndefined(n) ? delete a[t] : a[t] = n, u.next = 10, o(r);
                    case 10:
                        return u.abrupt("return", c);
                    case 11:
                    case "end":
                        return u.stop()
                }
            }, g, this)
        }));
        return s.setUserExpiryDate = t.wrap(regeneratorRuntime.mark(function m(e, t) {
            var n;
            return regeneratorRuntime.wrap(function(i) {
                for (;;) switch (i.prev = i.next) {
                    case 0:
                        return i.next = 2, d(e, "userExpiryDate", t);
                    case 2:
                        n = i.sent, r.$broadcast("connect:userExpiryDateChange", n, t);
                    case 4:
                    case "end":
                        return i.stop()
                }
            }, m, this)
        })), s.setUserShareUrl = function(e, t) {
            return d(e, "shareUrl", t)
        }, s.clearRecent = function() {
            return c(null)
        }, s.getRecent = function() {
            return a()
        }, s
    }]), angular.module("castifyExt.connect.appPermissions", ["w69b.chromeStorage", "w69b.spawn"]).factory("appPermissions", ["chromeStorage", "spawn", function(e, t) {
        function n(e) {
            var t = Date.now();
            return e.filter(function(e) {
                return e.timeout >= t
            })
        }

        function r() {
            return e.local.getSingle(o, []).then(n)
        }

        function i(t) {
            return e.local.setSingle(o, t)
        }
        var o = "appPermissions",
            a = 18e5,
            c = {};
        return c.hasAccess = function(e, t) {
            return r().then(function(n) {
                return n.some(function(n) {
                    return n.appId === e && n.fileId === t
                })
            })
        }, c.allowAccess = function(e, n) {
            return t(regeneratorRuntime.mark(function o() {
                var t;
                return regeneratorRuntime.wrap(function(o) {
                    for (;;) switch (o.prev = o.next) {
                        case 0:
                            return o.next = 2, r();
                        case 2:
                            return t = o.sent, t = t.filter(function(t) {
                                return t.appId !== e && t.appId !== n
                            }), t.push({
                                appId: e,
                                fileId: n,
                                timeout: Date.now() + a
                            }), o.next = 7, i(t);
                        case 7:
                        case "end":
                            return o.stop()
                    }
                }, o, this)
            }))
        }, c
    }]), angular.module("castifyExt.connect.connectService", ["castifyExt.simpleBgServiceConsumer"]).factory("connectService", ["simpleBgServiceConsumer", function(e) {
        return e("connect", ["share"])
    }]), angular.module("castifyExt.syncDownloaderClient", ["castifyExt.backgroundTool"]).factory("syncDownloaderClient", ["backgroundTool", "$timeout", function(e, t) {
        var n, r = e.portHelper("syncDownloader", !1),
            i = !0,
            o = {};
        o.downloads = {};
        var a = {
            downloads: function(e) {
                angular.copy(e, o.downloads), n && t.cancel(n), n = null, i && Object.keys(e).length && (n = t(o.update, 1e3))
            }
        };
        return r.installHandlers(a), o.update = function() {
            r.postMessage("update")
        }, o
    }]), angular.module("castifyExt.syncStatusClient", ["castifyExt.backgroundTool"]).factory("syncStatusClient", ["backgroundTool", function(e) {
        var t = e.portHelper("syncStatus", !1),
            n = {};
        n.state = {};
        var r = {};
        return r.stateUpdate = function(e) {
            angular.copy(e, n.state)
        }, t.installHandlers(r), n.retry = function() {
            t.postMessage("retry")
        }, t.getPort(), n
    }]), angular.module("castifyExt.uploader", ["castifyExt.backgroundTool"]).factory("uploader", ["backgroundTool", function(e) {
        var t = e.portHelper("uploader"),
            n = {};
        n.state = {};
        var r = {};
        return r.stateUpdate = function(e) {
            angular.copy(e, n.state)
        }, t.installHandlers(r), n.upload = function(e) {
            t.postMessage("upload", e)
        }, n.getFileState = function(e) {
            return n.state[e]
        }, n.getTargetState = function(e, t) {
            var r = n.getFileState(e);
            return r ? r[t] : null
        }, n.isQueuedOrActive = function(e, t) {
            var r = n.getTargetState(e, t);
            return r && ("uploading" === r.state || "queued" === r.state)
        }, n
    }]), angular.module("castifyExt.chromeEventPublisher", []).run(["chromeRuntime", "$rootScope", function(e, t) {
        var n = "event:";
        e.onMessage.addListener(function(e) {
            angular.isObject(e) && angular.isString(e.type) && 0 === e.type.lastIndexOf(n, 0) && t.$broadcast(e.type, e.data), t.$$phase || t.$digest()
        })
    }]), angular.module("castifyExt.driveUtils", ["w69b.googledrive", "castifyExt.castifyAuth", "w69b.es6", "w69b.spawn", "w69b.chromeStorage"]).factory("driveUtils", ["googledrive", "$q", "spawn", "$log", "chromeStorage", "$rootScope", "$timeout", function(e, t, n, r, i, o, a) {
        function c() {
            return r.debug("driveUtils: creating Drive folder"), e.postFile({
                title: "Screencastify",
                mimeType: "application/vnd.google-apps.folder",
                description: "Screencastify uses this folder to store Screencasts that you upload. You may rename or move it, it will upload to this folder.",
                properties: [{
                    key: "isScreencastifyUploadFolder",
                    value: !0,
                    visibility: "PRIVATE"
                }]
            })
        }

        function u(e) {
            if (e && e.data) {
                var t, n = e.data;
                if (n.error && n.error.errors && n.error.errors.length && (t = n.error.errors[0]), t) return t.reason
            } else if (e && e.message) return e.message;
            return null
        }

        function s(n) {
            return e.getFile(n).then(function(e) {
                return !e.labels.trashed
            }, function(e) {
                return 404 !== e.status && (r.warn("driveUtils: checkIfExists failed", e), t.reject(e))
            })
        }

        function l() {
            var t = "mimeType = 'application/vnd.google-apps.folder' and trashed = false and properties has { key='isScreencastifyUploadFolder' and value='true' and visibility='PRIVATE' }";
            return e.listFiles({
                q: t,
                maxResults: 1
            }).then(function(e) {
                return r.debug("driveUtils: findFolder items #", e.length), e.length ? e[0] : null
            })
        }

        function f(e, t) {
            var n = e.filter(function(e) {
                return e.type === t
            });
            return n.length ? n[0] : null
        }

        function d(e) {
            return f(e, "anyone")
        }

        function p(e) {
            return f(e, "domain")
        }

        function h(e) {
            var t = d(e),
                n = p(e);
            return t ? t.withLink ? "unlisted" : "public" : n ? n.withLink ? "domain_unlisted" : "domain_public" : "private"
        }

        function g() {
            m = null, i.sync.remove(b)
        }
        var m, v, y = {},
            b = "DRIVE_FOLDER_ID",
            w = 1e4;
        return y.getDriveUploadParentId = function(e) {
            return m && !e || (m = n(regeneratorRuntime.mark(function t() {
                var e, n, o;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, i.sync.getSingle(b);
                        case 2:
                            if (e = t.sent, t.t0 = e, !t.t0) {
                                t.next = 8;
                                break
                            }
                            return t.next = 7, s(e);
                        case 7:
                            t.t0 = t.sent;
                        case 8:
                            if (!t.t0) {
                                t.next = 11;
                                break
                            }
                            return r.debug("driveUtil: using cached parent Id", e), t.abrupt("return", e);
                        case 11:
                            return t.next = 13, l();
                        case 13:
                            if (n = t.sent) {
                                t.next = 18;
                                break
                            }
                            return t.next = 17, c();
                        case 17:
                            n = t.sent;
                        case 18:
                            return o = n.id, t.next = 21, i.sync.setSingle(b, o);
                        case 21:
                            return t.abrupt("return", o);
                        case 22:
                        case "end":
                            return t.stop()
                    }
                }, t, this)
            })), m["catch"](function(e) {
                y.isRateLimitError(e) ? (v && a.cancel(v), v = a(function() {
                    m = null, v = null
                }, w)) : m = null
            })), m
        }, y.getSimplePrivacy = function(t) {
            return e.listPermissions(t).then(h)
        }, y.getLink = function(e) {
            return "https://drive.google.com/file/d/" + e + "/view"
        }, y.setSimplePrivacy = function(r, i, o) {
            var a = i.startsWith("domain_");
            if (a && !o) throw new Error;
            return n(regeneratorRuntime.mark(function c() {
                var n, u, s, l;
                return regeneratorRuntime.wrap(function(c) {
                    for (;;) switch (c.prev = c.next) {
                        case 0:
                            return c.next = 2, e.listPermissions(r);
                        case 2:
                            if (n = c.sent, u = d(n), s = p(n), h(n) !== i) {
                                c.next = 9;
                                break
                            }
                            return c.abrupt("return", t.when(null));
                        case 9:
                            if ("private" !== i) {
                                c.next = 18;
                                break
                            }
                            if (!u) {
                                c.next = 13;
                                break
                            }
                            return c.next = 13, e.removePermission(r, u.id);
                        case 13:
                            if (!s) {
                                c.next = 16;
                                break
                            }
                            return c.next = 16, e.removePermission(r, s.id);
                        case 16:
                            c.next = 27;
                            break;
                        case 18:
                            if (!u) {
                                c.next = 21;
                                break
                            }
                            return c.next = 21, e.removePermission(r, u.id);
                        case 21:
                            if (!s) {
                                c.next = 24;
                                break
                            }
                            return c.next = 24, e.removePermission(r, s.id);
                        case 24:
                            return l = {
                                role: "reader",
                                type: a ? "domain" : "anyone",
                                withLink: "unlisted" === i || "domain_unlisted" === i
                            }, a && (l.value = o), c.abrupt("return", e.insertPermission(r, l));
                        case 27:
                        case "end":
                            return c.stop()
                    }
                }, c, this)
            }))
        }, y.isGoogleAppsForbiddenError = function(e) {
            return e && 403 == e.status && "domainPolicy" === u(e)
        }, y.isRateLimitError = function(e) {
            return e && 403 == e.status && "rateLimitExceeded" === u(e)
        }, o.$on("event:signInChanged", g), y
    }]), angular.module("castifyExt.youtubeUtils", ["castifyExt.castifyAuth"]).factory("youtubeUtils", ["$http", "$q", function(e, t) {
        function n(e) {
            var n = e.data.items;
            return n.length ? n[0] : t.reject("not found")
        }

        function r(t, r) {
            return e.get(o, angular.extend({
                params: {
                    id: t,
                    part: "status,snippet"
                }
            }, {
                youtubeAuth: r
            })).then(n)
        }

        function i(t, n, r) {
            return r = angular.extend({
                id: t
            }, r), e.put(o, r, angular.extend({
                params: {
                    part: "status"
                }
            }, {
                youtubeAuth: n
            })).then(function(e) {
                return e.data
            })
        }
        var o = "https://www.googleapis.com/youtube/v3/videos",
            a = {};
        return a.getPrivacy = function(e, n) {
            return r(e, n).then(function(e) {
                return n !== e.snippet.channelId ? t.reject() : e.status.privacyStatus
            })
        }, a.getLink = function(e) {
            return "https://youtu.be/" + e
        }, a.setPrivacy = function(e, t, n) {
            return i(e, n, {
                status: {
                    privacyStatus: t
                }
            })
        }, a
    }]), angular.module("castifyExt.fileDbClient", ["castifyExt.backgroundTool", "castifyExt.appOptions", "castifyExt.castifyAuth"]).factory("fileDbClient", ["backgroundTool", "$q", "appOptions", "castifyAuth", "$log", function(e, t, n, r, i) {
        function o() {
            return p || (p = t.defer(), l.postMessage("subscribe")), p.promise
        }

        function a(e) {
            angular.extend(this, e), this.createdAt && (this.createdAt = new Date(this.createdAt))
        }

        function c(e) {
            var t = f[e.id];
            return t ? (angular.copy(e, t), t) : (f[e.id] = e, e)
        }

        function u(e) {
            var t = f[e];
            t && (t.deleted = !0, delete f[e])
        }

        function s(e, t) {
            var n;
            t && (n = {}, angular.forEach(f, function(e, t) {
                n[t] = !0
            })), angular.forEach(e, function(e, r) {
                c(new a(e)), t && delete n[r]
            }), t && angular.forEach(n, function(e, t) {
                u(t)
            })
        }
        var l = e.portHelper("files", !1),
            f = {},
            d = {},
            p = null,
            h = !1,
            g = {},
            m = 0,
            v = a.prototype;
        v.getUrl = function() {
            var e = this;
            return e.urlRequiresAccessToken ? r.getAuthToken({
                interactive: !1
            }).then(function(t) {
                var n = e.url;
                return n += n.indexOf("?") >= 0 ? "&" : "?", n + "access_token=" + t
            }) : t.when(e.url)
        };
        var y = {};
        return y.filesUpdate = function(e) {
            e.remove && e.remove.forEach(u), e.add && s(e.add, !1), e.full ? (s(e.full, !0), !h && p && (h = !0, p.resolve())) : e.error && (h = !1, p && (p.reject(), p = null)), m++
        }, y.reloadSuccess = function(e) {
            g[e] && (g[e].resolve(), delete g[e])
        }, y.reloadError = function(e) {
            g[e] && (g[e].reject(), delete g[e])
        }, l.installHandlers(y), d.getFileDescriptor = function(e) {
            return o().then(function() {
                var n = f[e];
                return n ? n : t.reject()
            })
        }, d.listFiles = function() {
            return o().then(function() {
                return f
            })
        }, d.rename = function(e, t) {
            var n = f[e];
            n && (n.title = t), l.postMessage("rename", {
                id: e,
                title: t
            })
        }, d.reload = function(e) {
            return g[e] || (g[e] = t.defer(), l.postMessage("reload", e)), g[e].promise
        }, d.remove = function(e) {
            i.debug("fileDbClient.remove", e), u(e), l.postMessage("remove", e)
        }, d.removeAll = function(e) {
            i.debug("fileDbClient.removeAll"), angular.copy({}, f), l.postMessage("removeAll", e)
        }, d.isSyncEnabled = function() {
            return n.values.driveSync
        }, d.getListVersionId = function() {
            return m
        }, d
    }]), angular.module("w69b.downloadHelper", []).factory("downloadHelper", function() {
        var e = {};
        return e.download = function(e, t) {
            var n = angular.element("<a></a>"),
                r = t.replace(/[\/,\\]/g, "");
            n.attr("href", e), n.attr("download", r), n[0].dispatchEvent(new MouseEvent("click"))
        }, e
    }), angular.module("castifyExt.syncAuthTool", ["castifyExt.castifyAuth", "w69b.chromeRuntime", "castifyExt.appOptions", "castifyExt.driveUtils"]).factory("syncAuthTool", ["castifyAuth", "$http", "$q", "$log", "appOptions", "chromeRuntime", "$rootScope", "driveUtils", function(e, t, n, r, i, o, a, c) {
        var u = {};
        return u.broadcastIfSyncError = function(e) {
            return "not_signed_in" === e ? (r.debug("syncAuthTool: sync enabled but not signed in"), a.$broadcast("event:syncAuthError"), o.sendMessage({
                type: "event:syncAuthError"
            })["catch"](angular.identity), n.reject(e)) : (i.values.driveSync && u.checkSetup()["catch"](function(t) {
                switch (t) {
                    case "token":
                        r.debug("syncAuthTool: sync enabled but we do not have a valid token"), a.$broadcast("event:syncAuthError"), o.sendMessage({
                            type: "event:syncAuthError"
                        })["catch"](angular.identity);
                        break;
                    case "forbidden":
                        r.debug("syncAuthTool: detected drive-forbidden error", e), a.$broadcast("event:syncForbiddenError");
                        break;
                    default:
                        r.warn("syncAuthTool: unhandled sync error detected", e)
                }
            }), n.reject(e))
        }, u.hasValidAuthToken = function() {
            return e.getAuthToken({
                interactive: !1,
                validate: !0
            })
        }, u.isRateLimitError = function(e) {
            return c.isRateLimitError(e)
        }, u.checkSetup = function() {
            function e() {
                return c.getDriveUploadParentId()["catch"](function(e) {
                    return c.isGoogleAppsForbiddenError(e) ? n.reject("forbidden") : n.reject("unknown")
                })
            }
            return u.hasValidAuthToken()["catch"](function() {
                return n.reject("token")
            }).then(e).then(function() {
                return !0
            })
        }, u
    }]), angular.module("castifyExt.youtubeAuth", ["w69b.uritool", "castifyExt.castifyAuth"]).provider("youtubeAuth", function() {
        var e, t = ["https://www.googleapis.com/auth/youtube"];
        this.setScopes = function(e) {
            t = e
        }, this.setClientId = function(t) {
            e = t
        }, this.$get = ["castifyAuth", "$log", "uritool", "$q", "$http", "castifyConfig", function(n, r, i, o, a, c) {
            function u(e) {
                return m + "?" + i.encodeQuery(e)
            }

            function s(e) {
                return e.data
            }

            function l() {
                return n.getRedirectURL().then(function(i) {
                    var a = {
                            redirect_uri: i,
                            scope: t.join(" "),
                            response_type: "code",
                            client_id: e,
                            access_type: "offline",
                            include_granted_scopes: !1,
                            prompt: "select_account consent"
                        },
                        c = u(a),
                        s = {
                            url: c,
                            interactive: !0
                        };
                    return n.launchWebAuthFlow(s).then(function(e) {
                        return r.debug("youtube oauth result", e), e.code ? e.code : o.reject("youtube_flow_returned_no_code")
                    })
                })
            }

            function f(e) {
                return a.post(h, {
                    code: e,
                    version: 2
                }, {
                    googleAuth: !0
                }).then(s, function(e) {
                    return r.warn("adding youtube code failed", e), o.reject("youtube_add_code_failed")
                })
            }

            function d(e) {
                return a.get(g + "/" + e, {
                    googleAuth: !0
                }).then(s).then(function(e) {
                    return e.expiresAt = Number(new Date(e.expiresAt)), e.issuedAt = Number(new Date(e.issuedAt)), e
                })
            }
            var p = c.API_URL + "/youtube/",
                h = p + "channels",
                g = p + "tokens",
                m = "https://accounts.google.com/o/oauth2/auth",
                v = {},
                y = 0,
                b = {};
            return b.addChannel = function() {
                return n.getAuthToken({
                    interactive: !0
                }).then(l).then(f)
            }, b.listChannels = function() {
                return a.get(h, {
                    googleAuth: !0
                }).then(s)
            }, b.removeChannel = function(e) {
                return a["delete"](h + "/" + e, {
                    googleAuth: !0
                }).then(s)
            }, b.getAuthToken = function(e) {
                if (!e.channelId) throw new Error;
                var t, n = e.channelId,
                    r = Math.floor(Date.now() - y) + 12e4,
                    i = v[n];
                return i && i.expiresAt > r ? t = o.when(i) : (t = d(n), t.then(function(e) {
                    v[n] = e, e.issuedAt && (y = Date.now() - Number(e.issuedAt))
                })), t.then(function(e) {
                    return e.accessToken
                })
            }, b
        }]
    }).factory("youtubeHttpAuthInterceptor", ["$q", "$injector", "$log", function(e, t, n) {
        function r(e) {
            var t = {
                channelId: e
            };
            return o().getAuthToken(t)
        }

        function i(e) {
            return {
                Authorization: "Bearer " + e
            }
        }

        function o() {
            return a || (a = t.get("youtubeAuth")), a
        }
        var a;
        return {
            request: function(t) {
                return t.youtubeAuth ? (t.googleAuth && delete t.googleAuth, r(t.youtubeAuth).then(function(e) {
                    return t.headers = angular.extend(t.headers || {}, i(e)), t
                }, function(t) {
                    return n.warn("youtubeAuth failed", t), e.reject("youtubeAuth failed")
                })) : t
            }
        }
    }]), angular.module("castifyExt.castifyAuth", ["castifyExt.simpleBgServiceConsumer"]).factory("castifyAuth", ["simpleBgServiceConsumer", function(e) {
        return e("castifyAuth", ["launchWebAuthFlow", "getRedirectURL", "removeCachedAuthToken", "getAuthToken", "getAccount"])
    }]).factory("googleauth", ["castifyAuth", "$q", function(e, t) {
        var n = {};
        return n.loadClient = function() {
            return t.when()
        }, n.getAuthToken = function(t) {
            e.getAuthToken(angular.isObject(t) ? t : {
                interactive: !!t
            })
        }, n
    }]), angular.module("castifyExt.requestMicPermission", []).factory("requestMicPermission", ["$window", "$q", "$interval", function(e, t, n) {
        return function() {
            var r = t.defer(),
                i = e.open("mic.html", "mic", ""),
                o = !1;
            i.clGotStream = function() {
                o = !0, r.resolve()
            };
            var a = n(function() {
                i.closed && !o && r.reject("closed mic permission window without granting permission")
            }, 200);
            return r.promise["finally"](function() {
                n.cancel(a)
            }), r.promise
        }
    }]), angular.module("castifyExt.commonConfig", ["castifyExt.castifyAuth", "w69b.chromeAnalytics", "w69b.chromeRuntime", "castifyExt.helpCenterConfig", "castifyExt.appOptions", "castifyExt.userAccount", "castifyExt.deployConfig"]).config(["$compileProvider", "$sceDelegateProvider", "analyticsProvider", "$locationProvider", function(e, t, n, r) {
        n.setTrackingId("UA-23874345-14"), n.setApp("Screencastify"), t.resourceUrlWhitelist(["self", "http://localhost:9008/**", "blob:**", "filesystem:chrome-extension://**", "https://**"]);
        var i = /^\s*(https?|mailto|blob|chrome-extension|filesystem:chrome-extension):/;
        e.aHrefSanitizationWhitelist(i), e.imgSrcSanitizationWhitelist(i), r.hashPrefix("")
    }]).run(["$rootScope", "analytics", "chromeRuntime", "appOptions", "$injector", "userAccount", function(e, t, n, r, i, o) {
        function a() {
            return o.getAccount().then(function(e) {
                var i = "unknown";
                if (e.license.isPaid) i = "paid";
                else {
                    if (!e.license.isTester) return i = "trial";
                    i = "tester"
                }
                t.tracker.set("dimension1", i), t.tracker.set("dimension2", n.getManifest().version), t.tracker.set("dimension5", r.values.hwEncoding), e.user ? (t.tracker.set("userId", e.user.analyticsUid), t.tracker.set("dimension4", e.user.analyticsUid), t.setEnabled(r.values.enableAnalytics && e.user.analyticsEnabled !== !1)) : t.setEnabled(r.values.enableAnalytics)
            })
        }
        var c = i.has("$transitions") ? i.get("$transitions") : null,
            u = r.loadedPromise.then(a);
        c && c.onSuccess({}, function(e) {
            var n = e.targetState().state(),
                r = n.analyticsView || n.pageTitle;
            r && u.then(function() {
                t.tracker.sendAppView(r)
            })
        }), e.$on("event:userAccountChanged", a)
    }]).factory("castifyConfig", ["deployConfig", function(e) {
        return {
            API_URL: e.apiUrl,
            IS_E2E: window.localStorage.e2e
        }
    }]), angular.module("castifyExt.deployConfig", []).provider("deployConfig", function() {
        var e = {
            apiUrl: "https://api.screencastify.com/api",
            clientId: "242262968495-o42n5tqeo08dsa75p3j4dk1k61t05ln3.apps.googleusercontent.com",
            scopes: chrome.runtime.getManifest().oauth2.scopes,
            redirectUri: "https://www.screencastify.com/oauth2postback",
            editorOpenUri: "https://editor.screencastify.com/open/drive",
            notificationUri: "https://us-central1-castify-notifications-prod.cloudfunctions.net/api/userNotification/"
        };
        return _extends({}, e, {
            $get: function() {
                return e
            }
        })
    }), angular.module("castifyExt.authConfig", ["castifyExt.youtubeAuth", "castifyExt.castifyAuth", "w69b.chromeRuntime", "w69b.googleHttpAuthInterceptor", "castifyExt.youtubeAuth"]).config(["$httpProvider", "youtubeAuthProvider", "googleHttpAuthInterceptorProvider", "deployConfigProvider", function(e, t, n, r) {
        t.setClientId(r.clientId), e.interceptors.push("youtubeHttpAuthInterceptor"), e.interceptors.push("googleHttpAuthInterceptor"), n.enableAuthAutoRetry(!0), n.setAuthProvider("castifyAuth")
    }]), angular.module("castifyExt.userAccount", ["castifyExt.simpleBgServiceConsumer", "castifyExt.chromeEventPublisher"]).factory("userAccount", ["simpleBgServiceConsumer", function(e) {
        return e("userAccount", ["getAccount", "signIn", "postUpdate", "signOut"])
    }]), angular.module("castifyExt.enterprisePolicy", ["w69b.chromeStorage"]).provider("enterprisePolicy", function() {
        var e = {};
        this.setOverride = function(t) {
            e = t
        }, this.$get = ["chromeStorage", "$rootScope", function(t, n) {
            var r = {},
                i = !1,
                o = {
                    options: {}
                };
            angular.extend(o, e);
            var a = ["disableSharing", "disableSaveToDisk", "options"];
            return a.forEach(function(e) {
                Object.defineProperty(r, e, {
                    get: function() {
                        return o[e]
                    }
                })
            }), r.loadedPromise = t.managed.get(a).then(function(t) {
                angular.extend(o, t, e), i = !0
            }), r.isLoaded = function() {
                return i
            }, r.has = function(e) {
                return o.hasOwnProperty(e)
            }, r.get = function(e) {
                return o[e]
            }, t.onChanged.addListener(function(e, t) {
                "managed" === t && (angular.forEach(e, function(e, t) {
                    o[t] = e.newValue
                }), n.$$phase || n.$digest())
            }), r
        }]
    }), angular.module("castifyExt.upgradeHelper", ["castifyExt.userAccount", "w69b.chromeTabs"]).factory("upgradeHelper", ["chromeTabs", "userAccount", "$rootScope", function(e, t, n) {
        function r() {
            function e() {
                t.getAccount().then(function(e) {
                    o = e, i.license = e.license
                })
            }
            n.$on("event:userAccountChanged", e), e()
        }
        var i = {};
        i.openBuy = function(t, n) {
            var r = "https://www.screencastify.com/buy?utm_source=app&utm_source=app&utm_campaign=" + t;
            n && (r += "&utm_content=" + n), e.create({
                url: r
            })
        };
        var o = null;
        return i.license = {}, r(), i.getNumRecordingsMonth = function() {
            return o.numRecordingsMonth
        }, i.getMaxRecordingsMonth = function() {
            return o.license.maxNumRecordings
        }, i.isPaid = function() {
            return o && o.license.isPaid
        }, i.hasEditorAlphaAccess = function() {
            return o && o.license.editorAlpha
        }, i.isSignedIn = function() {
            return o && !!o.user
        }, i.signIn = function() {
            return t.signIn()
        }, i
    }]), angular.module("castifyExt.helpCenter", ["w69b.chromeTabs"]).factory("helpCenter", ["chromeTabs", function(e) {
        var t = {};
        return t.tagUrls = {}, t.registerUrl = function(e, n) {
            t.tagUrls[e] = n
        }, t.hasHelpFor = function(e) {
            return t.tagUrls.hasOwnProperty(e)
        }, t.openHelp = function(n) {
            var r = t.tagUrls[n];
            if (!r) throw new Error("No help url registered for " + n);
            e.create({
                url: r
            })
        }, t.setNotifyHelp = function(e, n) {
            e.onButtonClicked = e.onClicked = function() {
                t.openHelp(n), e.clear()
            }
        }, t
    }]), angular.module("castifyExt.helpCenterConfig", ["castifyExt.helpCenter"]).run(["helpCenter", function(e) {
        e.registerUrl("load_nacl", "https://screencastify.helpscoutdocs.com/article/33-failed-to-load-nacl-module"), e.registerUrl("disk_space", "https://screencastify.helpscoutdocs.com/article/32-out-of-disk-space"), e.registerUrl("drive_apps", "https://screencastify.helpscoutdocs.com/article/34-enabling-drive-on-google-apps"), e.registerUrl("start_recording", "https://screencastify.helpscoutdocs.com/article/35-failed-to-start-recording"), e.registerUrl("change_account", "https://screencastify.helpscoutdocs.com/article/31-how-to-sign-in-with-a-different-account"), e.registerUrl("quotaExceeded", "https://screencastify.helpscoutdocs.com/article/20-out-of-space-on-google-drive"), e.registerUrl("youtubeSignupRequired", "https://screencastify.helpscoutdocs.com/article/24-youtubesignuprequired-error-when-uploading-to-youtube"), e.registerUrl("no_audio", "https://screencastify.helpscoutdocs.com/article/82-failed-to-capture-audio"), e.registerUrl("no_cam", "https://screencastify.helpscoutdocs.com/article/83-failed-to-access-your-webcam"), e.registerUrl("trial_monthly_limit", "https://www.screencastify.com/buy?utm_source=app&utm_content=notify&utm_campaign=monthly_limit"), e.registerUrl("youtubeCredentialsMissing", "https://help.screencastify.com/article/219-i-received-a-youtubeauth-failed-error")
    }]), angular.module("castifyExt.simpleBgServiceConsumer", ["w69b.chromeRuntime"]).factory("simpleBgServiceConsumer", ["chromeRuntime", "$q", function(e, t) {
        function n(n, r) {
            function i(e) {
                return e.error ? t.reject(e.error) : e.data
            }

            function o(t) {
                return function() {
                    return e.sendMessage({
                        type: "simpleService",
                        fn: t,
                        service: n,
                        data: Array.prototype.concat.apply([], arguments)
                    }).then(i)
                }
            }
            var a = {};
            return r.forEach(function(e) {
                a[e] = o(e)
            }), a
        }
        return n
    }]), angular.module("castifyExt.optionalPermissions", ["w69b.chromePermissions"]).factory("optionalPermissions", ["chromePermissions", function(e) {
        function t(e) {
            return e && (!e.draw || e.draw && !e.draw.showToolbox) ? i : r
        }
        var n = {},
            r = {
                permissions: ["tabCapture", "webNavigation", "activeTab"],
                origins: ["<all_urls>"]
            },
            i = {
                permissions: ["tabCapture", "webNavigation", "activeTab"],
                origins: []
            };
        return n.hasLiteTabPermissions = function() {
            return e.contains(i)
        }, n.hasTabPermissions = function(n) {
            return e.contains(t(n))
        }, n.requestTabPermissions = function(n) {
            return e.request(t(n))
        }, n
    }]), angular.module("castifyExt.ui.pageTitle", []).controller("titleController", ["$scope", "$transitions", function(e, t) {
        t.onSuccess({}, function(t) {
            var n = t.targetState().state();
            e.$root.pageTitle = n.pageTitle
        })
    }]), angular.module("castifyExt.ui.rateUs", ["w69b.chromeStorage", "w69b.spawn", "castifyExt.userAccount"]).component("cfStarRating", {
        templateUrl: "components/castifyExt/ui/rate-us/star-rating.html",
        bindings: {
            cfRate: "&"
        },
        controller: function() {
            var e = this;
            e.stars = [1, 2, 3, 4, 5], e.numActive = 0, e.onClick = function(t) {
                e.cfRate({
                    stars: t
                })
            }, e.onOver = function(t) {
                e.numActive = t
            }
        }
    }).controller("RateUsLikingToastCtrl", function() {
        var e = this;
        e.stars = [1, 2, 3, 4, 5]
    }).component("cfRateUs", {
        controller: ["chromeStorage", "spawn", "userAccount", "$mdToast", "$location", "analytics", "chromeTabs", "$scope", function(e, t, n, r, i, o, a, c) {
            function u() {
                return r.show({
                    hideDelay: 0,
                    position: "bottom left",
                    controller: ["$mdToast", function(e) {
                        this.onRate = function(t) {
                            e.hide(t)
                        }
                    }],
                    controllerAs: "$ctrl",
                    templateUrl: "components/castifyExt/ui/rate-us/how-do-you-like-toast.html"
                })
            }

            function s() {
                r.show(r.simple().textContent("What can we do better?").hideDelay(1e4).highlightAction(!0).action("LET US KNOW")).then(function(e) {
                    "ok" === e && (o.trackEvent("rating", "open_contact", "", 1), i.path("/support"))
                })
            }

            function l(e) {
                var t = "";
                e && (t = "Thank you! "), r.show(r.simple().textContent(t + "Share your experience in the Web Store!").highlightAction(!0).hideDelay(1e4).action("LEAVE REVIEW")).then(function(e) {
                    "ok" === e && (o.trackEvent("rating", "open_rate", "", 1), v(!0), a.create({
                        url: p
                    }))
                })
            }
            var f = "rateUs",
                d = 0,
                p = "https://chrome.google.com/webstore/detail/screencastify-screen-vide/mmeijimgabbpbgpdklnllpncmdofkcpn/reviews?utm_source=app&utm_campaign=rate_us",
                h = this,
                g = function() {
                    return e.sync.getSingle(f, {
                        rated: !1,
                        stars: 0
                    })
                },
                m = function(t) {
                    return e.sync.setSingle(f, t)
                },
                v = t.wrap(regeneratorRuntime.mark(function w() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.t0 = m, t.t1 = Object, t.next = 4, g();
                            case 4:
                                return t.t2 = t.sent, t.t3 = {
                                    rated: e
                                }, t.t4 = t.t1.assign.call(t.t1, t.t2, t.t3), t.abrupt("return", (0, t.t0)(t.t4));
                            case 8:
                            case "end":
                                return t.stop()
                        }
                    }, w, this)
                })),
                y = t.wrap(regeneratorRuntime.mark(function x(e) {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.t0 = m, t.t1 = Object, t.next = 4, g();
                            case 4:
                                return t.t2 = t.sent, t.t3 = {
                                    stars: e
                                }, t.t4 = t.t1.assign.call(t.t1, t.t2, t.t3), t.abrupt("return", (0, t.t0)(t.t4));
                            case 8:
                            case "end":
                                return t.stop()
                        }
                    }, x, this)
                })),
                b = t.wrap(regeneratorRuntime.mark(function E() {
                    var e;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return o.trackEvent("rating", "ask_liking", "", 1), t.next = 3, u();
                            case 3:
                                if (e = t.sent) {
                                    t.next = 6;
                                    break
                                }
                                return t.abrupt("return");
                            case 6:
                                o.trackEvent("rating", "stars", "", e), y(e), 5 === e ? l(!0) : s();
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }, E, this)
                }));
            h.$onInit = t.wrap(regeneratorRuntime.mark(function k() {
                var e, t;
                return regeneratorRuntime.wrap(function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            return i.next = 2, g();
                        case 2:
                            if (e = i.sent, c.$on("$locationChangeStart", function() {
                                    return r.hide(null)
                                }), e.stars) {
                                i.next = 11;
                                break
                            }
                            return i.next = 7, n.getAccount();
                        case 7:
                            t = i.sent, t.numRecordingsMonth > d && b(), i.next = 12;
                            break;
                        case 11:
                            5 !== e.stars || e.rated || l();
                        case 12:
                        case "end":
                            return i.stop()
                    }
                }, k, this)
            }))
        }]
    }), angular.module("castifyExt.ui.blackfriday", ["ngMaterial", "w69b.spawn", "w69b.chromeStorage", "castifyExt.userAccount"]).component("cfBlackfriday", {
        controller: ["$scope", "userAccount", "$mdToast", "spawn", "$log", "chromeStorage", function(e, t, n, r, i, o) {
            function a() {
                var e = n.simple().textContent("Black Friday Sale! Buy one subscription, gift one free!").action("Learn More").highlightAction(!0).hideDelay(1e4);
                n.show(e).then(function(e) {
                    "ok" === e && window.open(s)
                })
            }
            var c = new Date("2017-11-20"),
                u = new Date("2017-11-28"),
                s = "https://www.screencastify.com/black-friday/",
                l = this;
            l.$onInit = r.wrap(regeneratorRuntime.mark(function f() {
                var r, o, s;
                return regeneratorRuntime.wrap(function(l) {
                    for (;;) switch (l.prev = l.next) {
                        case 0:
                            if (e.$on("$locationChangeStart", function() {
                                    return n.hide(null)
                                }), r = Date.now(), !(r > c && r < u)) {
                                l.next = 8;
                                break
                            }
                            return l.next = 5, t.getAccount();
                        case 5:
                            o = l.sent, s = o.user, s && s.survey && "student" !== s.survey.user_type && (i.debug("showing black friday notification"), a());
                        case 8:
                        case "end":
                            return l.stop()
                    }
                }, f, this)
            }))
        }]
    }), angular.module("castifyWebEdit.webEditUtils", ["castifyExt.deployConfig", "castifyExt.appOptions", "w69b.uritool"]).controller("EditAlphaDialogCtrl", ["$scope", "$mdDialog", "upgradeHelper", "appOptions", function(e, t, n, r) {
        function i() {
            o.appOptions = r.values, e.upgradeHelper = n, e.$mdDialog = t, e.$on("$locationChangeStart", function() {
                return t.cancel()
            }), e.$watch("$ctrl.file.driveInfo.id", function(e) {
                e && t.hide()
            })
        }
        var o = this;
        i()
    }]).factory("webEditUtils", ["deployConfig", "userAccount", "uritool", "$mdDialog", "$location", "appOptions", function(e, t, n, r, i, o) {
        var a = function() {
                var e = _asyncToGenerator(regeneratorRuntime.mark(function t(e) {
                    var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = i.isCrop,
                        a = void 0 !== o && o;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return n = r.show({
                                    bindToController: !0,
                                    controllerAs: "$ctrl",
                                    clickOutsideToClose: !0,
                                    locals: {
                                        file: e,
                                        isCrop: a
                                    },
                                    templateUrl: "components/castifyWebEdit/edit-alpha-dialog.html",
                                    controller: "EditAlphaDialogCtrl"
                                }), t.abrupt("return", n.then(function() {
                                    return !0
                                }, function() {
                                    return !1
                                }));
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                }));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(),
            c = {};
        return c.openEditor = function() {
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t(e) {
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (e.driveInfo) {
                                t.next = 5;
                                break
                            }
                            return t.next = 3, a(e);
                        case 3:
                            if (t.sent) {
                                t.next = 5;
                                break
                            }
                            return t.abrupt("return", !1);
                        case 5:
                            return t.abrupt("return", c.openEditorWindow(e.driveInfo.id));
                        case 6:
                        case "end":
                            return t.stop()
                    }
                }, t, this)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), c.showWaitBeforeCropSaveDialogIfHwEnabled = function() {
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t(e) {
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (o.values.hwEncoding && !e.driveInfo) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return", !0);
                        case 2:
                            return t.abrupt("return", a(e, {
                                isCrop: !0
                            }));
                        case 3:
                        case "end":
                            return t.stop()
                    }
                }, t, this)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), c.openCropEditor = function() {
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t(e) {
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (!o.values.hwEncoding || o.values.driveSync || e.driveInfo) {
                                t.next = 5;
                                break
                            }
                            return t.next = 3, a(e, {
                                isCrop: !0
                            });
                        case 3:
                            if (t.sent) {
                                t.next = 5;
                                break
                            }
                            return t.abrupt("return", !1);
                        case 5:
                            return t.abrupt("return", i.path("/edit/" + e.id));
                        case 6:
                        case "end":
                            return t.stop()
                    }
                }, t, this)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), c.openEditorWindow = function() {
            var r = _asyncToGenerator(regeneratorRuntime.mark(function i(r) {
                var o, a;
                return regeneratorRuntime.wrap(function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            return i.next = 2, t.getAccount();
                        case 2:
                            if (o = i.sent) {
                                i.next = 5;
                                break
                            }
                            return i.abrupt("return", !1);
                        case 5:
                            return a = n.encodeQuery({
                                state: JSON.stringify({
                                    ids: [r],
                                    userId: o.user.email
                                })
                            }), window.open(e.editorOpenUri + "?" + a), i.abrupt("return", !0);
                        case 8:
                        case "end":
                            return i.stop()
                    }
                }, i, this)
            }));
            return function(e) {
                return r.apply(this, arguments)
            }
        }(), c
    }]), angular.module("w69b.chromePersistentLogger", ["w69b.chromeStorage", "w69b.logging", "w69b.structs.CircularBuffer"]).provider("chromePersistentLogger", ["$logProvider", function(e) {
        function t(e, t) {
            var r = {
                level: e,
                args: t,
                timestamp: (new Date).getTime()
            };
            return n ? n.add(r) : i.push(r), !0
        }
        var n, r = "logs",
            i = [],
            o = !1,
            a = 1e3,
            c = "logs_",
            u = !1,
            s = !0;
        this.setStorageKey = function(e) {
            r = e
        }, this.setMaxNumLogs = function(e) {
            a = e
        }, this.enableAutoLoad = function(e) {
            o = e
        }, this.enableAutoSave = function(e) {
            s = e
        }, this.enableGlobalHandler = function(e) {
            u = e
        }, this.install = function() {
            this.enableAutoLoad(!0), e.setCustomHook(t)
        }, this.$get = ["$window", "$q", "chromeStorage", "CircularBuffer", "$log", function(e, l, f, d, p) {
            function h(e) {
                var t = e.args.map(function(e) {
                    if (!angular.isObject(e)) return e;
                    try {
                        return angular.toJson(e)
                    } catch (t) {
                        return e
                    }
                });
                return [new Date(e.timestamp).toISOString(), e.level.toUpperCase(), t.join(", ")].join(" ")
            }

            function g(e) {
                var t = new d(a);
                return e.forEach(function(e) {
                    t.add(e)
                }), t
            }
            var m = {};
            return m.load = function() {
                return f.local.getSingle(c + r).then(function(e) {
                    e && e.length && (n = g(e.concat(m.getEntries())))
                })
            }, m.save = function(e) {
                return f.local.setSingle(c + (e || r), m.getEntries())
            }, m.clear = function() {
                n.clear()
            }, m.getEntries = function() {
                return n.getValues()
            }, m.getLogs = function() {
                return m.getEntries().map(h)
            }, m.getMergedLogs = function(e) {
                return e = e.map(function(e) {
                    return c + e
                }), f.local.get(e).then(function(e) {
                    var t = [];
                    return angular.forEach(e, function(e, n) {
                        e && e.length && e.forEach(function(e) {
                            e.storageKey = n.substr(c.length), t.push(e)
                        })
                    }), t.sort(function(e, t) {
                        return e.timestamp - t.timestamp
                    }), t.map(function(e) {
                        return "[" + e.storageKey + "] " + h(e)
                    })
                })
            }, m.hookFn = t, n = g(i), i = null, o && m.load(), u && (e.onerror = function(e, t, n) {
                p.error("global error", e, t, n)
            }), s && e.addEventListener("unload", function() {
                m.save()
            }), m
        }]
    }]).run(["chromePersistentLogger", angular.noop]), angular.module("w69b.chromeSystem", ["w69b.promiseTool"]).factory("chromeSystem", ["promiseTool", function(e) {
        var t = window.chrome && window.chrome.system,
            n = {};
        return t ? (t.cpu && (n.cpu = {
            getInfo: e.wrapChromeError(t.cpu.getInfo, t.cpu)
        }), t.memory && (n.memory = {
            getInfo: e.wrapChromeError(t.memory.getInfo, t.memory)
        }), n) : n
    }]), angular.module("w69b.chromeRuntime", ["w69b.promiseTool"]).factory("chromeRuntime", ["promiseTool", function(e) {
        var t = {};
        return t.sendMessage = e.wrapChromeError(chrome.runtime.sendMessage, chrome.runtime), t.getBackgroundPage = e.wrapChromeError(chrome.runtime.getBackgroundPage, chrome.runtime), t.connect = chrome.runtime.connect.bind(chrome.runtime), t.getManifest = chrome.runtime.getManifest.bind(chrome.runtime), t.id = chrome.runtime.id, chrome.runtime.getPlatformInfo && (t.getPlatformInfo = e.wrapChromeError(chrome.runtime.getPlatformInfo, chrome.runtime)), t.setUninstallURL = e.wrapChromeError(chrome.runtime.setUninstallURL, chrome.runtime), ["onMessage", "onMessageExternal", "onConnect", "onConnectExternal", "onInstalled", "onSuspend"].forEach(function(e) {
            t[e] = {
                addListener: function(t) {
                    chrome.runtime[e].addListener(t)
                },
                removeListener: function(t) {
                    chrome.runtime[e].removeListener(t)
                }
            }
        }), t
    }]), angular.module("w69b.chromeStorage", ["w69b.promiseTool"]).factory("chromeStorage", ["promiseTool", function(e) {
        var t = chrome.storage,
            n = {};
        return ["local", "sync", "managed"].forEach(function(r) {
            n[r] = {}, ["set", "get", "remove", "clear"].forEach(function(i) {
                n[r][i] = e.wrapChromeError(t[r][i], t[r])
            }), n[r].setSingle = function(e, t) {
                var i = {};
                return i[e] = t, n[r].set(i)
            }, n[r].getSingle = function(e, t) {
                return n[r].get(e).then(function(n) {
                    return n.hasOwnProperty(e) ? n[e] : t
                })
            }
        }), n.onChanged = t.onChanged, n
    }]), angular.module("w69b.chromeTabs", ["w69b.promiseTool"]).factory("chromeTabs", ["$window", "promiseTool", "$q", function(e, t, n) {
        if (!e.chrome || !e.chrome.tabs) return null;
        var r = e.chrome,
            i = {};
        return i.query = t.wrapChromeError(r.tabs.query, r.tabs), i.getActiveTab = function() {
            return i.query({
                active: !0,
                windowId: r.windows.WINDOW_ID_CURRENT
            }).then(function(e) {
                return e.length ? e[0] : n.reject()
            })
        }, i.get = t.wrapChromeError(r.tabs.get, r.tabs), i.update = t.wrapChromeError(r.tabs.update, r.tabs), i.remove = t.wrapChromeError(r.tabs.remove, r.tabs), i.create = t.wrapChromeError(r.tabs.create, r.tabs), i.connect = r.tabs.connect.bind(r.tabs), i.setZoomSettings = t.wrapChromeError(r.tabs.setZoomSettings, r.tabs), i.setZoom = t.wrapChromeError(r.tabs.setZoom, r.tabs), i.executeScript = t.wrapChromeError(r.tabs.executeScript, r.tabs), i.insertCSS = t.wrapChromeError(r.tabs.insertCSS, r.tabs), i.sendMessage = t.wrapChromeError(r.tabs.sendMessage, r.tabs), i.onUpdated = r.tabs.onUpdated, i.onActivated = r.tabs.onActivated, i.sendMessageActive = function(e, t) {
            return i.getActiveTab().then(function(n) {
                return i.sendMessage(n.id, e, t)
            })
        }, i
    }]).directive("newTab", ["chromeTabs", function(e) {
        return {
            restrict: "A",
            link: function(t, n, r) {
                n.bind("click", function(t) {
                    t.preventDefault(), e.create({
                        url: r.href
                    }).then(function(e) {
                        chrome.windows.update(e.windowId, {
                            focused: !0
                        }, angular.noop)
                    })
                })
            }
        }
    }]), angular.module("w69b.chromeWindows", []).factory("chromeWindows", ["promiseTool", function(e) {
        var t = {};
        return t.get = e.wrapChromeError(chrome.windows.get, chrome.windows), t.create = e.wrapChromeError(chrome.windows.create, chrome.windows), t.update = e.wrapChromeError(chrome.windows.update, chrome.windows), t.getCurrent = e.wrapChromeError(chrome.windows.getCurrent, chrome.windows), t.remove = e.wrapChromeError(chrome.windows.remove, chrome.windows), t.onRemoved = chrome.windows.onRemoved, t
    }]), angular.module("w69b.googleHttpAuthInterceptor", []).provider("googleHttpAuthInterceptor", function() {
        var e = 0,
            t = "googleauth";
        this.enableAuthAutoRetry = function(t) {
            e = t ? 1 : 0
        }, this.setAuthProvider = function(e) {
            t = e
        }, this.$get = ["$q", "$log", "$injector", function(n, r, i) {
            function o() {
                return f || (f = i.get(t)), f
            }

            function a(e) {
                return o().getAuthToken(e)
            }

            function c(e) {
                return {
                    Authorization: "Bearer " + e
                }
            }

            function u() {
                return l || (l = i.get("$http")), l
            }

            function s(t) {
                var i = t.status;
                if (401 == i && t.config.googleAuth && t.config.authAutoRetry !== !1) {
                    r.debug("auth error detected", t);
                    var o = angular.copy(t.config);
                    if (o.authRetryCount ? o.authRetryCount++ : o.authRetryCount = 1, o.authRetryCount <= e) return a({
                        scopes: o.googleAuthScopes,
                        validate: !0
                    }).then(function() {
                        return r.debug("googleAuthHttpInterceptor: auto-retrying with validated token"), u()(o)
                    })
                }
                return n.reject(t)
            }
            var l, f;
            return {
                request: function(e) {
                    return e.googleAuth ? a({
                        scopes: e.googleAuthScopes
                    }).then(function(t) {
                        return e.headers = angular.extend(e.headers || {}, c(t)), e
                    }, function(e) {
                        return r.warn("googleAuthHttpInterceptor: no token, aborting request", e), n.reject("googleAuthFailed")
                    }) : e
                },
                responseError: s
            }
        }]
    }), angular.module("w69b.logging", []).provider("$log", function() {
        var e = !0,
            t = this,
            n = !1;
        this.debugEnabled = function(t) {
            return angular.isDefined(t) ? (e = t, this) : e
        }, this.setCustomHook = function(e) {
            n = e
        }, this.$get = ["$window", function(r) {
            function i(e) {
                return e instanceof Error && (e.stack ? e = e.message && e.stack.indexOf(e.message) === -1 ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)), e
            }

            function o(e) {
                var t = r.console || {},
                    o = t[e] || t.log || angular.noop,
                    a = !1;
                try {
                    a = !!o.apply
                } catch (c) {}
                return a ? function() {
                    var r = [];
                    if (angular.forEach(arguments, function(e) {
                            r.push(i(e))
                        }), n && n(e, r)) return o.apply(t, r)
                } : function(t, r) {
                    n && n(e, [t, r]) && o(t, null === r ? "" : r)
                }
            }
            return {
                log: o("log"),
                info: o("info"),
                warn: o("warn"),
                error: o("error"),
                debug: function() {
                    var n = o("debug");
                    return function() {
                        e && n.apply(t, arguments)
                    }
                }()
            }
        }]
    }), angular.module("w69b.filesHelper", ["w69b.promiseTool"]).factory("filesHelper", ["$window", "promiseTool", "$q", function(e, t, n) {
        function r(e) {
            var t = e.split("/"),
                n = t.slice(0, -1).join("/"),
                r = t.slice(-1)[0];
            return [n, r]
        }
        e.requestFileSystem = e.requestFileSystem || e.webkitRequestFileSystem;
        var i = window.PERSISTENT,
            o = 104857600,
            a = {},
            c = ["readEntries", "remove", "getFile", "getMetadata", "moveTo", "file", "getDirectory", "createWriter"];
        return c.forEach(function(e) {
            a[e] = function(n) {
                var r = [].slice.call(arguments, 1);
                return t.wrapCallbacks(n[e], n).apply(null, r)
            }
        }), a.getFileSystem = function(n, r) {
            return angular.isUndefined(n) && (n = i), r = r || o, t.wrapCallbacks(e.requestFileSystem, e)(n, r)
        }, a.getPersistentQuota = function() {
            var t = n.defer();
            return e.navigator.webkitPersistentStorage.queryUsageAndQuota(function(e, n) {
                t.resolve({
                    usage: e,
                    quota: n
                })
            }, function(e) {
                t.reject(e)
            }), t.promise
        }, chrome.system && chrome.system.storage && (a.getStorageInfo = t.wrapChromeError(chrome.system.storage.getInfo, chrome.system.storage)), a.getDirByPath = function(e, t) {
            function r(e, i) {
                return i.length ? a.getDirectory(e, i[0], t || {}).then(function(e) {
                    return r(e, i.slice(1))
                }) : n.when(e)
            }
            var i = e.split("/");
            return "" === i[0] && i.splice(0, 1), a.getFileSystem().then(function(e) {
                return r(e.root, i, t)
            })
        }, a.moveFileByPath = function(e, t) {
            var i = r(t),
                o = i[0],
                c = i[1];
            return n.all({
                file: a.getFileEntryByPath(e),
                targetDir: a.getDirByPath(o)
            }).then(function(e) {
                return a.moveTo(e.file, e.targetDir, c)
            })
        }, a.getFileEntryByPath = function(e, t, n) {
            var i = r(e),
                o = i[0],
                c = i[1];
            return a.getDirByPath(o, n).then(function(e) {
                return a.getFile(e, c, t || {})
            })
        }, a.getFileByPath = function(e) {
            return a.getFileEntryByPath(e).then(function(e) {
                return a.file(e)
            })
        }, a.removeByPath = function(e) {
            return a.getFileEntryByPath(e).then(function(e) {
                return a.remove(e)
            })
        }, a.listByPath = function(e) {
            return a.getDirByPath(e).then(function(e) {
                var t = e.createReader();
                return a.readEntries(t)
            })
        }, a.requestPersistentQuota = function(e) {
            return t.wrapCallbacks(navigator.webkitPersistentStorage.requestQuota, navigator.webkitPersistentStorage)(e || o);
        }, a.requestTemporaryQuota = function(e) {
            return t.wrapCallbacks(navigator.webkitTemporaryStorage.requestQuota, navigator.webkitTemporaryStorage)(e || o)
        }, a.writeFile = function(e, t) {
            var r = n.defer();
            return e.onwriteend = r.resolve.bind(r), e.onerror = r.reject.bind(r), e.write(t), r.promise
        }, a.isSupported = function() {
            return !!window.requestFileSystem
        }, a
    }]), angular.module("w69b.timeutil", []).factory("timeutil", function() {
        var e = {};
        return e.formatDuration = function(e) {
            function t(e) {
                return e < 10 ? "0" + e : e
            }
            angular.isNumber(e) || (e = 0);
            var n = "";
            e < 0 && (n = "-", e = -e + .99);
            var r = Math.floor(e % 60),
                i = Math.floor(e / 60 % 60),
                o = [t(i), t(r)],
                a = Math.floor(e / 3600);
            return a && o.unshift(a), n + o.join(":")
        }, e
    }).filter("duration", ["timeutil", function(e) {
        return function(t) {
            return e.formatDuration(t || 0)
        }
    }]), angular.module("w69b.chromeAnalytics", []).provider("analytics", function() {
        var e, t;
        this.setTrackingId = function(t) {
            e = t
        }, this.setApp = function(e, n) {
            t = arguments
        }, this.$get = ["$window", function(n) {
            if (!t) throw new Error("make sure to call analyticsProvider.setApp()");
            if (!n.analytics) throw new Error("chrome-analytics lib not loaded");
            var r = n.analytics,
                i = r.getService.apply(r, t),
                o = i.getTracker(e),
                a = {};
            return a.tracker = o, a.eventBuilder = function() {
                return r.EventBuilder.builder()
            }, a.setEnabled = function(e) {
                i.getConfig().addCallback(function(t) {
                    t.setTrackingPermitted(e)
                })
            }, a.send = function() {
                o.send.apply(o, arguments)
            }, a.trackPageView = function(e) {
                o.sendAppView(e)
            }, a.trackEvent = function() {
                o.sendEvent.apply(o, arguments)
            }, a.sendNonInteractionEvent = function(e, t, n, i) {
                var o = {
                    eventCategory: e,
                    eventAction: t,
                    eventLabel: n,
                    eventValue: i,
                    nonInteraction: !0
                };
                a.send(r.HitTypes.EVENT, o)
            }, a.trackTimer = function(e, t, n) {
                var r, i = {};
                return i.start = function() {
                    return r = (new Date).getTime(), i
                }, i.send = function(a, c, u) {
                    var s = (new Date).getTime();
                    return o.sendTiming(a || e, c || t, s - r, u || n), i
                }, i.start(), i
            }, a
        }]
    }), angular.module("w69b.promiseTool", []).factory("promiseTool", ["$q", "$timeout", function(e, t) {
        var n = {};
        return n.wrapChromeError = function(t, n) {
            return function() {
                var r = Array.prototype.slice.call(arguments, 0),
                    i = e.defer();
                return r.push(function(e) {
                    chrome.runtime.lastError ? i.reject(chrome.runtime.lastError) : i.resolve(e)
                }), t.apply(n, r), i.promise
            }
        }, n.wrapCallbacks = function(t, n) {
            return function() {
                var r = Array.prototype.slice.call(arguments, 0),
                    i = e.defer();
                return r.push(i.resolve.bind(i)), r.push(i.reject.bind(i)), t.apply(n, r), i.promise
            }
        }, n.serializer = function() {
            var t = null,
                n = function(n) {
                    var r = e.defer();
                    return (t || e.when())["finally"](function() {
                        var e = n.call();
                        r.resolve(e)
                    }), t = r.promise, t["finally"](function() {
                        t = null
                    }), r.promise
                };
            return n.wrap = function(e) {
                return function() {
                    return n(e.bind.apply(e, [this].concat(Array.prototype.slice.call(arguments))))
                }
            }, n
        }, n.withTimeout = function(n, r, i) {
            i || (i = angular.noop);
            var o = e.defer(),
                a = t(function() {
                    var e = i();
                    angular.isDefined(e) ? o.resolve(e) : o.reject("timeout"), o = null
                }, r),
                c = n(),
                u = o.promise;
            return c["finally"](function() {
                t.cancel(a), a = null
            }), c.then(function() {
                o && o.resolve.apply(o, arguments)
            }, function() {
                o && o.reject.apply(o, arguments)
            }), u
        }, n
    }]), angular.module("w69b.uritool", []).factory("uritool", function() {
        function e(e) {
            return decodeURIComponent(e.replace(t, " "))
        }
        var t = /\+/g,
            n = {};
        return n.parseQuery = function(t, n) {
            "?" == t[0] && (t = t.substring(1));
            for (var r, i = /([^&=]+)=?([^&]*)/g, o = {}; r = i.exec(t);) {
                var a = e(r[1]),
                    c = e(r[2]);
                n && o.hasOwnProperty(a) ? o[a].push(c) : o[a] = n ? [c] : c
            }
            return o
        }, n.parseUrl = function(e) {
            var t = document.createElement("a");
            return t.href = e, {
                protocol: t.protocol.replace(":", ""),
                host: t.hostname,
                port: t.port,
                query: t.search,
                hash: t.hash,
                path: t.pathname
            }
        }, n.encodeQuery = function(e) {
            var t = [];
            return angular.forEach(e, function(e, n) {
                angular.isArray(e) ? angular.forEach(e, function(e) {
                    t.push(encodeURIComponent(n) + (e === !0 ? "" : "=" + encodeURIComponent(e)))
                }) : t.push(encodeURIComponent(n) + (e === !0 ? "" : "=" + encodeURIComponent(e)))
            }), t.length ? t.join("&") : ""
        }, n
    }), angular.module("w69b.uuid", []).factory("uuid", ["$window", function(e) {
        function t(e) {
            for (var t = e.toString(16); t.length < 4;) t = "0" + t;
            return t
        }

        function n() {
            var n = new Uint16Array(8);
            return e.crypto.getRandomValues(n), t(n[0]) + t(n[1]) + "-" + t(n[2]) + "-4" + t(n[3]).substring(1) + "-y" + t(n[4]).substring(1) + "-" + t(n[5]) + t(n[6]) + t(n[7])
        }
        return n
    }]), angular.module("w69b.structs.CircularBuffer", []).factory("CircularBuffer", function() {
        var e = function(e) {
                this.maxSize_ = e || 100, this.buff_ = []
            },
            t = e.prototype;
        return t.nextPtr_ = 0, t.add = function(e) {
            this.buff_[this.nextPtr_] = e, this.nextPtr_ = (this.nextPtr_ + 1) % this.maxSize_
        }, t.get = function(e) {
            return e = this.normalizeIndex_(e), this.buff_[e]
        }, t.set = function(e, t) {
            e = this.normalizeIndex_(e), this.buff_[e] = t
        }, t.getCount = function() {
            return this.buff_.length
        }, t.isEmpty = function() {
            return 0 === this.buff_.length
        }, t.clear = function() {
            this.buff_.length = 0, this.nextPtr_ = 0
        }, t.getValues = function() {
            return this.getNewestValues(this.getCount())
        }, t.getNewestValues = function(e) {
            for (var t = this.getCount(), n = this.getCount() - e, r = [], i = n; i < t; i++) r.push(this.get(i));
            return r
        }, t.getKeys = function() {
            for (var e = [], t = this.getCount(), n = 0; n < t; n++) e[n] = n;
            return e
        }, t.containsKey = function(e) {
            return e < this.getCount()
        }, t.containsValue = function(e) {
            for (var t = this.getCount(), n = 0; n < t; n++)
                if (this.get(n) == e) return !0;
            return !1
        }, t.getLast = function() {
            return 0 === this.getCount() ? null : this.get(this.getCount() - 1)
        }, t.normalizeIndex_ = function(e) {
            if (e >= this.buff_.length) throw Error("Out of bounds exception");
            return this.buff_.length < this.maxSize_ ? e : (this.nextPtr_ + Number(e)) % this.maxSize_
        }, e
    }), angular.module("w69b.spawn", []).factory("spawn", ["$q", function(e) {
        function t(t, n) {
            function r(e, t) {
                var n;
                try {
                    n = e(t)
                } catch (r) {
                    return i(r)
                }
                return n.done ? o(n.value) : o(n.value).then(c, u)
            }
            var i = n ? Promise.reject.bind(Promise) : e.reject.bind(e),
                o = n ? Promise.resolve.bind(Promise) : e.when.bind(e),
                a = t(),
                c = r.bind(null, a.next.bind(a)),
                u = r.bind(null, a["throw"].bind(a));
            return c()
        }
        return t.wrap = function(e) {
            return function() {
                var n = arguments;
                return t(e.bind.apply(e, [this].concat(_toConsumableArray(n))))
            }
        }, t
    }]), angular.module("w69b.throttle", []).factory("throttle", ["$timeout", function(e) {
        function t(t, n, r) {
            var i, o, a;
            r = r !== !1;
            var c = function() {
                return a = angular.copy(arguments, []), o = function() {
                    return i = null, o = null, t.apply(null, a)
                }, r ? (i && e.cancel(i), i = e(o, n)) : i || (i = e(o, n)), i
            };
            return c.flush = function() {
                i && (e.cancel(i), o())
            }, c
        }
        return t
    }]), angular.module("w69b.webrtc", ["w69b.promiseTool", "w69b.spawn"]).factory("webrtc", ["promiseTool", "$window", "$q", "spawn", function(e, t, n, r) {
        function i(e) {
            return e.some(function(e) {
                return !!e.label
            })
        }
        var o = {},
            a = t.navigator;
        return o.getUserMedia = e.wrapCallbacks(a.getUserMedia || a.webkitGetUserMedia || a.mozGetUserMedia || a.msGetUserMedia, a), a.mediaDevices && a.mediaDevices.enumerateDevices ? o.getSources = function() {
            return n.when(a.mediaDevices.enumerateDevices()).then(function(e) {
                return e.filter(function(e) {
                    return e.kind.endsWith("input")
                }).map(function(e) {
                    var t = {
                        id: e.deviceId,
                        label: e.label
                    };
                    return t.kind = e.kind.substring(0, e.kind.length - 5), t
                })
            })
        } : o.getSources = e.wrapCallbacks(MediaStreamTrack.getSources, MediaStreamTrack), o.getSourcesByKind = function(e) {
            return o.getSources().then(function(t) {
                return t.filter(function(t) {
                    return t.kind === e
                })
            })
        }, o.getVideoSources = function() {
            return o.getSourcesByKind("video")
        }, o.getAudioSources = function() {
            return o.getSourcesByKind("audio")
        }, o.hasCamera = function() {
            return o.getVideoSources().then(function(e) {
                return e.length > 0
            })
        }, o.hasMicrophone = function() {
            return o.getAudioSources().then(function(e) {
                return e.length > 0
            })
        }, o.hasVideoAccess = function() {
            return o.getVideoSources().then(i)
        }, o.hasAudioAccess = function() {
            return o.getAudioSources().then(i)
        }, o.getCameraAndMicPermission = r.wrap(regeneratorRuntime.mark(function c() {
            var e, t, n, r;
            return regeneratorRuntime.wrap(function(i) {
                for (;;) switch (i.prev = i.next) {
                    case 0:
                        return i.next = 2, o.hasCamera();
                    case 2:
                        return e = i.sent, t = !1, n = !1, i.prev = 5, i.next = 8, o.getUserMedia({
                            audio: !0,
                            video: e
                        });
                    case 8:
                        r = i.sent, n = !!r.getVideoTracks().length, t = !!r.getAudioTracks().length, r.getTracks().forEach(function(e) {
                            e.stop()
                        }), i.next = 16;
                        break;
                    case 14:
                        i.prev = 14, i.t0 = i["catch"](5);
                    case 16:
                        return i.abrupt("return", {
                            video: n,
                            audio: t
                        });
                    case 17:
                    case "end":
                        return i.stop()
                }
            }, c, this, [
                [5, 14]
            ])
        })), o
    }]), angular.module("w69b.ui.focus", []).directive("wbLoopFocus", ["$document", "$timeout", function(e, t) {
        return {
            restrict: "A",
            link: function(n, r) {
                function i() {
                    var e = a.querySelector('input:not([tabindex^="-"]),textarea:not([tabindex^="-"]),button:not([tabindex^="-"]),*[tabindex]:not([tabindex^="-"])');
                    e && e.focus()
                }

                function o(e) {
                    var n = e.target;
                    e.relatedTarget || a.contains(n) && n !== a || t(i)
                }
                var a = r[0];
                r.attr("tabindex", -1);
                var c = e.find("body");
                c[0].addEventListener("focus", o, !0), r.on("$destroy", function() {
                    c[0].removeEventListener("focus", o, !0)
                })
            }
        }
    }]).directive("wbFocus", ["$timeout", function(e) {
        return {
            link: function(t, n, r) {
                t.$watch(r.wbFocus, function(t) {
                    t && e(function() {
                        n[0].focus(), n[0].select && n[0].select()
                    })
                }, !0), n.bind("blur", function() {
                    angular.isDefined(r.wbFocusLost) && t.$apply(r.wbFocusLost)
                })
            }
        }
    }]).directive("wbAutoselect", ["$timeout", function(e) {
        return {
            link: function(t, n) {
                n.bind("focus click", function() {
                    e(function() {
                        n[0].select()
                    })
                })
            }
        }
    }]), angular.module("w69b.clipboard", []).factory("clipboard", ["$document", function(e) {
        var t = {};
        return t.copy = function(t) {
            var n = angular.element("<textarea></textarea>");
            n.text(t), e.find("body").append(n), n[0].select(), e[0].execCommand("copy"), n.remove()
        }, t
    }]), angular.module("w69b.ui.drivepicker", ["w69b.googledrive"]).directive("wbDrivePickerButton", ["googleauth", "googledrive", "$log", function(e, t, n) {
        return {
            restrict: "EA",
            templateUrl: "components/w69b/ui/drivepicker.html",
            scope: {
                onPicked: "&",
                mimeTypes: "@",
                includeFolders: "@",
                selectFolderEnabled: "@",
                listMode: "@",
                title: "@"
            },
            transclude: !0,
            replace: !0,
            link: function(r) {
                function i(e) {
                    n.debug(e);
                    var t = google.picker;
                    if (e[t.Response.ACTION] === t.Action.PICKED) {
                        var i = e[t.Response.DOCUMENTS],
                            o = i.map(function(e) {
                                return e[t.Document.ID]
                            });
                        r.onPicked({
                            ids: o,
                            docs: i
                        }), r.$apply()
                    }
                }

                function o(t) {
                    var n = new google.picker.DocsView;
                    r.mimeTypes && n.setMimeTypes(r.mimeTypes), n.setIncludeFolders(!!r.includeFolders), n.setSelectFolderEnabled(!!r.selectFolderEnabled), "grid" == r.listMode ? n.setMode(google.picker.DocsViewMode.GRID) : "list" == r.listMode && n.setMode(google.picker.DocsViewMode.LIST);
                    var o = (new google.picker.PickerBuilder).setAppId(e.getAppId()).setOAuthToken(t).enableFeature(google.picker.Feature.NAV_HIDDEN).setTitle(r.title || "Open File").addView(n).setCallback(i).build();
                    o.setVisible(!0)
                }
                r.isDisabled = !0, r.openDriveDialog = function() {
                    e.getAuthToken(!0).then(o)
                }, t.loadLibs().then(function() {
                    return n.debug("drive libs loaded"), e.getAuthToken()
                }).then(function() {
                    n.debug("drive authorized")
                })["finally"](function() {
                    r.isDisabled = !1
                })
            }
        }
    }]), angular.module("w69b.googledrive", []).factory("googledrive", ["$q", "googleauth", "$location", "$interval", "$http", function(e, t, n, r, i) {
        function o(e) {
            return e.data
        }

        function a(e, t) {
            return i.get(l + e, {
                googleAuth: !0,
                params: t
            }).then(o)
        }

        function c(e, t) {
            return i.post(l + e, t, {
                googleAuth: !0
            }).then(o)
        }

        function u(e, t) {
            return i({
                method: "PATCH",
                url: l + e,
                data: t,
                googleAuth: !0
            }).then(o)
        }
        var s = !1,
            l = "https://www.googleapis.com/drive/v2/",
            f = {};
        return f.isLoaded = function() {
            return s
        }, f.loadLibs = function() {
            if (s) return e.when(null);
            var n = t.loadClient().then(function() {
                return e.all([t.gapiLoad("picker")])
            });
            return n.then(function() {
                s = !0
            })
        }, f.getFile = function(e) {
            return a("files/" + e)
        }, f.listFiles = function(e) {
            return a("files/", e).then(function(e) {
                return e.items
            })
        }, f.postFile = function(e) {
            return c("files", e)
        }, f.patchFile = function(e, t) {
            return u("files/" + e, t)
        }, f.trashFile = function(e) {
            return c("files/" + e + "/trash")
        }, f.getAbout = function() {
            return a("about")
        }, f.showShareSettings = function(n) {
            return t.gapiLoad("drive-share").then(function() {
                var i = new gapi.drive.share.ShareClient(t.getAppId());
                i.setItemIds([n]), i.showSettingsDialog();
                var o = e.defer(),
                    a = r(function() {
                        for (var e = !1, t = document.activeElement; t !== document.documentElement;) {
                            if (t.classList.contains("dcs-ad-dcs-c")) {
                                e = !0;
                                break
                            }
                            t = t.parentNode
                        }
                        e || (r.cancel(a), o.resolve())
                    }, 300);
                return o.promise
            })
        }, f.listPermissions = function(e) {
            return a("files/" + e + "/permissions").then(function(e) {
                return e.items
            })
        }, f.insertPermission = function(e, t) {
            return i.post(l + "files/" + e + "/permissions", t, {
                googleAuth: !0
            }).then(o)
        }, f.patchPermission = function(e, t, n) {
            return u("files/" + e + "/permissions/" + t, n)
        }, f.removePermission = function(e, t) {
            return i["delete"](l + "files/" + e + "/permissions/" + t, {
                googleAuth: !0
            }).then(o)
        }, f.getContextAction = function() {
            var e = n.search().state,
                t = null;
            if (angular.isString(e)) try {
                t = JSON.parse(e)
            } catch (r) {}
            if (t) {
                var i = t.ids || [],
                    o = t.exportIds || [];
                return {
                    action: t.action,
                    ids: i.concat(o),
                    parentId: t.parentId,
                    userId: t.userId
                }
            }
            return null
        }, f
    }]), angular.module("w69b.scriptloader", []).factory("scriptloader", ["$document", "$q", "$rootScope", "$log", function(e, t, n, r) {
        function i(n) {
            if (o(n)) return a.hasOwnProperty(n) ? a[n] : t.when(!0);
            var i = t.defer();
            a[n] = i.promise, r.debug("script loader loading " + n);
            var c = document.createElement("script");
            return c.type = "text/javascript", c.src = n, c.onload = function() {
                delete a[n], i.resolve(), c.onload = c.onerror = null
            }, c.onerror = function() {
                i.reject(), c.onload = c.onerror = null
            }, e.find("script").eq(0).parent().prepend(c), i.promise
        }

        function o(t, n) {
            return n ? !!e[0].querySelector('script[src^="' + t + '"]') : !!e[0].querySelector('script[src="' + t + '"]')
        }
        var a = {};
        return {
            isInDom: o,
            load: i
        }
    }]), angular.module("w69b.ui.bytesFilter", []).filter("bytes", ["$injector", function(e) {
        function t(t, r) {
            return n || (n = e.get("$filter")("number")), n(t, r)
        }
        var n;
        return function(e, n) {
            if (!angular.isNumber(e)) return "-";
            if (angular.isUndefined(n) && (n = 1), e <= 0) return "0 B";
            var r = ["B", "KB", "MB", "GB", "TB", "PB"],
                i = Math.floor(Math.log(e) / Math.log(1024));
            return t(e / Math.pow(1024, Math.floor(i)), n) + " " + r[i]
        }
    }]), angular.module("w69b.ui.bgImg", []).directive("wbBgImg", function() {
        return {
            restrict: "A",
            link: function(e, t, n) {
                e.$watch(n.wbBgImg, function(e) {
                    e ? t.css("background-image", "url('" + e + "')") : t.css("background-image", "")
                })
            }
        }
    }), angular.module("w69b.ui.locationChange", []).directive("wbLocationChange", ["$parse", function(e) {
        return {
            link: function(t, n, r) {
                var i = e(r.wbLocationChange);
                t.$on("$locationChangeStart", function() {
                    i(t)
                })
            }
        }
    }]), angular.module("w69b.chromePermissions", ["w69b.promiseTool"]).factory("chromePermissions", ["promiseTool", function(e) {
        var t = window.chrome && window.chrome.permissions,
            n = {};
        return t ? (n.contains = e.wrapChromeError(t.contains, t), n.request = e.wrapChromeError(t.request, t), n.remove = e.wrapChromeError(t.remove, t), n.getAll = e.wrapChromeError(t.getAll, t), n) : n
    }]), angular.module("castifyExt.App").requires.push("templates")
}();