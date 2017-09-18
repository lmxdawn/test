! function(e) {
    function n(o) {
        if (t[o]) return t[o].exports;
        var i = t[o] = {
            exports: {},
            id: o,
            loaded: !1
        };
        return e[o].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports
    }
    var t = {};
    return n.m = e, n.c = t, n.p = "https://a.mlinks.cc/scripts/dist/", n(0)
}([function(e, n, t) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
                default: e
            }
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = t(11),
        r = o(i);
    r.default.env = r.default.env || {}, r.default.env.model = "open", n.default = r.default
}, function(e, n, t) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
                default: e
            }
    }

    function i(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var o = n[t];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(n, t, o) {
                return t && e(n.prototype, t), o && e(n, o), n
            }
        }(),
        a = t(8),
        s = o(a),
        u = t(1),
        c = (o(u), t(4)),
        l = (o(c), t(2)),
        d = (o(l), window.navigator.userAgent),
        h = [{
            value: "hwry6",
            key: "H60-L11"
        }, {
            value: "hwmt",
            key: "HUAWEI NXT-AL10"
        }, {
            value: "smnote4",
            key: "SAMSUNG-SM-N9100"
        }, {
            value: "smnote4",
            key: "SAMSUNG-SM-N9108V"
        }, {
            value: "iPhone",
            key: "iPhone;"
        }, {
            value: "iPad",
            key: "iPad;"
        }],
        f = h.map(function(e) {
            return e.key
        }).join("|"),
        p = function() {
            function e() {
                i(this, e), this.exportDeviceInfo()
            }
            return r(e, [{
                key: "exportDeviceInfo",
                value: function() {
                    var e = this,
                        n = d.match(new RegExp(f));
                    h.forEach(function(t) {
                        var o = t.value;
                        n && n[0] === t.key ? e[o] = !0 : "undefined" == typeof e[o] && (e[o] = !1)
                    })
                }
            }, {
                key: "getScreenResolution",
                value: function() {
                    var e = window.screen,
                        n = void 0;
                    n = window.devicePixelRatio || 1, n = Math.max(2, n), e.width >= 1080 && (n = 1);
                    var t = e.width * n,
                        o = e.height * n,
                        i = this.getSimilarResolution(t, o);
                    return i[2] < 5 && i[3] < 5 && (t = i[0], o = i[1]), {
                        width: t,
                        height: o
                    }
                }
            }, {
                key: "getSimilarResolution",
                value: function(e, n) {
                    var t = [];
                    return s.default.forEach(function(o) {
                        var i = [].concat(o),
                            r = Math.abs(o[0] - e),
                            a = Math.abs(o[1] - n);
                        i = i.concat([r, a]), t.push(i)
                    }), t.sort(function(e, n) {
                        return e[2] > n[2] || e[3] > n[3]
                    }), t[0]
                }
            }]), e
        }();
    n.default = new p
}, function(e, n, t) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
                default: e
            }
    }

    function i(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var o = n[t];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(n, t, o) {
                return t && e(n.prototype, t), o && e(n, o), n
            }
        }(),
        a = t(1),
        s = (o(a), window.navigator.userAgent),
        u = [{
            value: "android",
            key: "Android"
        }, {
            value: "symbian",
            key: "Symbian"
        }, {
            value: "blackberry",
            key: "BlackBerry"
        }, {
            value: "webos",
            key: "hpwOS"
        }, {
            value: "wp",
            key: "Windows Phone OS"
        }, {
            value: "ffos",
            key: "Firefox OS"
        }, {
            value: "ios",
            key: "iPhone OS"
        }, {
            value: "linux",
            key: "Linux"
        }, {
            value: "windows",
            key: "Windows NT"
        }, {
            value: "mac",
            key: "Macintosh"
        }, {
            value: "ipad",
            key: "iPad; CPU OS"
        }, {
            value: "osx",
            key: "Mac OS X"
        }, {
            value: "ubuntu",
            key: "Ubuntu"
        }, {
            value: "mobile",
            key: "Mobile"
        }],
        c = "(" + u.map(function(e) {
                return e.key
            }).join("|") + ")[\\s\\/]*([\\d\\_\\.]*)",
        l = function() {
            function e() {
                i(this, e), this.exportOsInfo()
            }
            return r(e, [{
                key: "exportOsInfo",
                value: function() {
                    var e = this,
                        n = s.match(new RegExp(c, "g")) || [];
                    u.forEach(function(t) {
                        n.forEach(function(n) {
                            var o = n.match(new RegExp(c)),
                                i = t.value,
                                r = [0];
                            o && o[1] === t.key ? (r = o[2] ? o[2].split(/[_\.]/) : r, r = r.map(function(e) {
                                    return parseInt(e)
                                }), e[i] = !0, e[i + "Version"] = r) : "undefined" == typeof e[i] && (e[i] = !1, e[i + "Version"] = r)
                        })
                    }), this.ipad && (this.iosVersion = this.ipadVersion), this.ios = this.ios || this.ipad, this.osx = this.osx && this.mac, this.desktop = this.windows || this.mac || this.ubuntu || this.linux && !this.android && !this.mobile && !this.wp, this.mobile = this.mobile || this.android || this.ios || this.wp || this.ffos || this.symbian || this.blackberry
                }
            }]), e
        }();
    n.default = new l
}, function(e, n) {
    "use strict";

    function t(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = function() {
            function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var o = n[t];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(n, t, o) {
                return t && e(n.prototype, t), o && e(n, o), n
            }
        }(),
        i = function() {
            function e() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                t(this, e);
                var o = n.match(/(\w+):\/\/([^:\/\?]*):?(\d*)([^\?]*)\??([^#$]*)#?([^#]*)/) || [];
                this.scheme = o[1] || "", this.protocol = o[1] || "", this.domain = o[2] || "", this.host = o[2] || "", this.port = o[3] || "", this.path = o[4] || "", this.queryString = o[5] || "", this.search = o[5] || "", this.hash = o[6] || ""
            }
            return o(e, [{
                key: "getParams",
                value: function() {
                    var e = this.queryString.split("&"),
                        n = {};
                    return e.forEach(function(e) {
                        var t = e.split("=");
                        t[0] && (n[t[0]] = t[1])
                    }), n
                }
            }, {
                key: "getParamsStartWith",
                value: function(e) {
                    var n = new RegExp("^" + e),
                        t = this.getParams(),
                        o = {};
                    for (var i in t) n.test(i) && ("mw_cp_" === e || "mw_dynp_" === e ? o[i.replace(e, "")] = t[i] : o[i] = t[i]);
                    return o
                }
            }, {
                key: "getParam",
                value: function(e) {
                    return this.getParams()[e]
                }
            }, {
                key: "setParam",
                value: function(e, n) {
                    var t = this.getParams(),
                        o = [];
                    "undefined" == typeof n ? delete t[e] : t[e] = n;
                    for (var i in t) o.push(i + "=" + t[i]);
                    return this.queryString = o.join("&"), this
                }
            }, {
                key: "setParams",
                value: function(e) {
                    var n = this.getParams(),
                        t = [];
                    for (var o in e) null === n[o] ? delete n[o] : n[o] = e[o];
                    for (var i in n) t.push(i + "=" + n[i]);
                    return this.queryString = t.join("&"), this
                }
            }, {
                key: "toString",
                value: function() {
                    var e = [];
                    return e.push(this.scheme ? this.scheme + "://" : ""), e.push(this.host), e.push(this.port ? ":" + this.port : ""), e.push(this.path), e.push(this.queryString ? "?" + this.queryString : ""), e.push(this.hash ? "#" + this.hash : ""), e.join("")
                }
            }]), e
        }();
    n.default = i
}, function(e, n, t) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
                default: e
            }
    }

    function i(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var o = n[t];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(n, t, o) {
                return t && e(n.prototype, t), o && e(n, o), n
            }
        }(),
        a = t(2),
        s = o(a),
        u = t(1),
        c = o(u),
        l = t(3),
        d = o(l),
        h = window.navigator.userAgent,
        f = [{
            key: "Chrome",
            value: "chrome"
        }, {
            key: "CriOS",
            value: "CriOS",
            unambiguous: !0
        }, {
            key: "AppleWebkit",
            value: "webkit"
        }, {
            key: "AppleWebKit",
            value: "webkit"
        }, {
            key: "Safari",
            value: "safari"
        }, {
            key: "Opera",
            value: "opera",
            unambiguous: !0
        }, {
            key: "Firefox",
            value: "firefox",
            unambiguous: !0
        }, {
            key: "Firefox",
            value: "firefox",
            unambiguous: !0
        }, {
            key: "FxiOS",
            value: "fxios",
            unambiguous: !0
        }, {
            key: "MQQBrowser",
            value: "qqbrowser",
            unambiguous: !0
        }, {
            key: "QQ",
            value: "qq",
            unambiguous: !0
        }, {
            key: "Qzone",
            value: "qzone",
            unambiguous: !0
        }, {
            key: "Maxthon",
            value: "maxthon",
            unambiguous: !0
        }, {
            key: "UCWEB",
            value: "ucweb",
            unambiguous: !0
        }, {
            key: "SogouMobileBrowser",
            value: "sogou",
            unambiguous: !0
        }, {
            key: "UCBrowser",
            value: "uc",
            unambiguous: !0
        }, {
            key: "SE",
            value: "se",
            unambiguous: !0
        }, {
            key: "360SE",
            value: "360se",
            unambiguous: !0
        }, {
            key: "IEMobile",
            value: "iem",
            unambiguous: !0
        }, {
            key: "MSIE",
            value: "ie",
            unambiguous: !0
        }, {
            key: "weibo",
            value: "weibo",
            unambiguous: !0
        }, {
            key: "MagicWindow",
            value: "mw",
            unambiguous: !0
        }, {
            key: "SamsungBrowser",
            value: "samsung"
        }, {
            key: "QHBrowser",
            value: "qh360",
            unambiguous: !0
        }, {
            key: "Mb2345Browser",
            value: "mb2345",
            unambiguous: !0
        }, {
            key: "TencentTraveler",
            value: "tt",
            unambiguous: !0
        }, {
            key: "MxBrowser",
            value: "mx",
            unambiguous: !0
        }, {
            key: "BAIDUBrowser",
            value: "baidu",
            unambiguous: !0
        }, {
            key: "baidubrowser",
            value: "baidu",
            unambiguous: !0
        }, {
            key: "MicroMessenger",
            value: "wx",
            unambiguous: !0
        }, {
            key: "LieBaoFast",
            value: "liebao",
            unambiguous: !0
        }, {
            key: "AlipayClient/",
            value: "aliPay",
            unambiguous: !0
        }],
        p = "(" + f.map(function(e) {
                return e.key
            }).join("|") + ")[\\s_{3}\\/]*([\\d\\_\\.]*)",
        m = function() {
            function e() {
                var n = this;
                i(this, e);
                var t = h.match(new RegExp(p, "g")) || [];
                f.forEach(function(e) {
                    t.forEach(function(t) {
                        var o = t.match(new RegExp(p)),
                            i = e.value,
                            r = void 0;
                        o && o[1] === e.key ? (r = o[2] || "", r = r.replace(/(^[\._\/]*|[\._\/]*$)/g, ""), r = r ? r.split(/[_\.]/) : [0], r = r.map(function(e) {
                                return parseInt(e)
                            }), n[i] = !0, n[i + "Version"] = r, e.unambiguous === !0 && "undefined" == typeof n.unambiguous && (n.unambiguous = !0)) : "undefined" == typeof n[i] && (n[i + "Version"] = [0])
                    })
                });
                var o = this.unambiguous;
                if (this.chrome = this.chrome || this.CriOS, this.chrome = this.chrome && navigator.vendor.indexOf("Google") !== -1 && window.chrome, this.chrome = this.chrome && !o, this.chrome = !!this.chrome, this.safari = this.safari && navigator.vendor.indexOf("Apple") !== -1, this.safari = this.safari && (s.default.ios || s.default.osx), this.safari = this.safari && !this.chrome && !o, this.safari = !!this.safari, this.iosWebView = s.default.ios && this.webkit && !this.unambiguous && !this.safari && !this.chrome, this.androidWebView = s.default.android && this.webkit && !this.unambiguous && !this.chrome, this.wx && (this.qqbrowser = !1, this.qqbrowserVersion = []), this.mw) {
                    var r = this.magicWindowConfig = {},
                        a = h.match(/(MagicWindow\;).*?(?=\))/, "g");
                    if (a && a[0]) {
                        var u = a[0].replace(/MagicWindow\;/g, "");
                        u = u.split(";"), u.length > 0 && u.forEach(function(e) {
                            e = e.split("/"), e[0] && e[1] && (r[e[0]] = e[1])
                        })
                    }
                    var c = this.magicWindowConfig.sv.split(".");
                    this.mwVersion = c
                }
            }
            return r(e, [{
                key: "isSupportedScheme",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "auto";
                    return "auto" === n ? this.isSupportedSchemeAuto(e) : this.isSupportedSchemeClick(e)
                }
            }, {
                key: "isSupportedSchemeAuto",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return !c.default.smnote4 && (!this.weibo && (!((this.wx || this.qq) && !this.isSupportedYYB(e)) && e.isSupportedScheme !== !1))
                }
            }, {
                key: "isSupportedSchemeClick",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return this.isSupportedSchemeAuto(e) || this.isSupportedSchemeOnlyClick(e), !1
                }
            }, {
                key: "isSupportedSchemeOnlyClick",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = this.qq && this.qqVersion[0] >= 6;
                    return !!(s.default.android && e.isSupportedSchemeClick || this.chrome || n || this.aliPay || this.baidu)
                }
            }, {
                key: "isSupportedSchemeOnlyHref",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (!e.isSupportedSchemeClick) return !1;
                    if (s.default.ios) {
                        if (this.qq && this.qqVersion[0] >= 6) return !0
                    } else if (this.SamsungBrowser) return !0;
                    return !1
                }
            }, {
                key: "isSupportedUniversalLink",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (s.default.ios && s.default.iosVersion[0] >= 9 && e.iosUniversalLinkEnabled) {
                        var n = !1;
                        if (n = s.default.iosVersion[0] >= 10 ? this.weibo || this.wx || this.safari || this.aliPay || !this.unambiguous : this.weibo || this.wx || this.safari || this.aliPay || this.qqbrowser, this.mw && this.magicWindowConfig && this.magicWindowConfig.sv) {
                            var t = this.mwVersion,
                                o = this.mw && t && (t[0] >= 4 || 3 == t[0] && t[1] > 9 || 3 == t[0] && 9 == t[1] && t[2] > 161125);
                            if (s.default.ios && s.default.iosVersion[0] >= 9 && o) return !1;
                            if (s.default.ios && s.default.iosVersion[0] >= 9 && !o) return !0
                        }
                        return !!n
                    }
                    return !1
                }
            }, {
                key: "isSupportedAppLink",
                value: function() {
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return !1
                }
            }, {
                key: "isSupportedYYB",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        t = new d.default(n);
                    if ("dc" === t.getParam("mw_dc_order")) return !1;
                    var o = s.default.ios ? e.iosYyb : e.androidYyb,
                        i = s.default.ios && this.qzone,
                        r = this.wx || i;
                    return o && r
                }
            }, {
                key: "isSupportedIntent",
                value: function() {
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return !1
                }
            }]), e
        }();
    n.default = new m
}, function(e, n, t) {
    var o, i;
    (function(r, a) {
        "use strict";
        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
        /*!
         * @overview es6-promise - a tiny implementation of Promises/A+.
         * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
         * @license   Licensed under MIT license
         *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
         * @version   3.3.1
         */
        ! function(r, a) {
            "object" === s(n) && "undefined" != typeof e ? e.exports = a() : (o = a, i = "function" == typeof o ? o.call(n, t, n, e) : o, !(void 0 !== i && (e.exports = i)))
        }(void 0, function() {
            function e(e) {
                return "function" == typeof e || "object" === ("undefined" == typeof e ? "undefined" : s(e)) && null !== e
            }

            function n(e) {
                return "function" == typeof e
            }

            function o(e) {
                J = e
            }

            function i(e) {
                $ = e
            }

            function u() {
                return function() {
                    return r.nextTick(f)
                }
            }

            function c() {
                return function() {
                    G(f)
                }
            }

            function l() {
                var e = 0,
                    n = new ee(f),
                    t = document.createTextNode("");
                return n.observe(t, {
                    characterData: !0
                }),
                    function() {
                        t.data = e = ++e % 2
                    }
            }

            function d() {
                var e = new MessageChannel;
                return e.port1.onmessage = f,
                    function() {
                        return e.port2.postMessage(0)
                    }
            }

            function h() {
                var e = setTimeout;
                return function() {
                    return e(f, 1)
                }
            }

            function f() {
                for (var e = 0; e < F; e += 2) {
                    var n = oe[e],
                        t = oe[e + 1];
                    n(t), oe[e] = void 0, oe[e + 1] = void 0
                }
                F = 0
            }

            function p() {
                try {
                    var e = t(14);
                    return G = e.runOnLoop || e.runOnContext, c()
                } catch (e) {
                    return h()
                }
            }

            function m(e, n) {
                var t = arguments,
                    o = this,
                    i = new this.constructor(g);
                void 0 === i[re] && O(i);
                var r = o._state;
                return r ? ! function() {
                        var e = t[r - 1];
                        $(function() {
                            return M(r, i, e, o._result)
                        })
                    }() : E(o, i, e, n), i
            }

            function v(e) {
                var n = this;
                if (e && "object" === ("undefined" == typeof e ? "undefined" : s(e)) && e.constructor === n) return e;
                var t = new n(g);
                return A(t, e), t
            }

            function g() {}

            function w() {
                return new TypeError("You cannot resolve a promise with itself")
            }

            function y() {
                return new TypeError("A promises callback cannot return that same promise.")
            }

            function b(e) {
                try {
                    return e.then
                } catch (e) {
                    return ce.error = e, ce
                }
            }

            function k(e, n, t, o) {
                try {
                    e.call(n, t, o)
                } catch (e) {
                    return e
                }
            }

            function _(e, n, t) {
                $(function(e) {
                    var o = !1,
                        i = k(t, n, function(t) {
                            o || (o = !0, n !== t ? A(e, t) : P(e, t))
                        }, function(n) {
                            o || (o = !0, x(e, n))
                        }, "Settle: " + (e._label || " unknown promise"));
                    !o && i && (o = !0, x(e, i))
                }, e)
            }

            function S(e, n) {
                n._state === se ? P(e, n._result) : n._state === ue ? x(e, n._result) : E(n, void 0, function(n) {
                            return A(e, n)
                        }, function(n) {
                            return x(e, n)
                        })
            }

            function T(e, t, o) {
                t.constructor === e.constructor && o === m && t.constructor.resolve === v ? S(e, t) : o === ce ? x(e, ce.error) : void 0 === o ? P(e, t) : n(o) ? _(e, t, o) : P(e, t)
            }

            function A(n, t) {
                n === t ? x(n, w()) : e(t) ? T(n, t, b(t)) : P(n, t)
            }

            function C(e) {
                e._onerror && e._onerror(e._result), U(e)
            }

            function P(e, n) {
                e._state === ae && (e._result = n, e._state = se, 0 !== e._subscribers.length && $(U, e))
            }

            function x(e, n) {
                e._state === ae && (e._state = ue, e._result = n, $(C, e))
            }

            function E(e, n, t, o) {
                var i = e._subscribers,
                    r = i.length;
                e._onerror = null, i[r] = n, i[r + se] = t, i[r + ue] = o, 0 === r && e._state && $(U, e)
            }

            function U(e) {
                var n = e._subscribers,
                    t = e._state;
                if (0 !== n.length) {
                    for (var o = void 0, i = void 0, r = e._result, a = 0; a < n.length; a += 3) o = n[a], i = n[a + t], o ? M(t, o, i, r) : i(r);
                    e._subscribers.length = 0
                }
            }

            function L() {
                this.error = null
            }

            function I(e, n) {
                try {
                    return e(n)
                } catch (e) {
                    return le.error = e, le
                }
            }

            function M(e, t, o, i) {
                var r = n(o),
                    a = void 0,
                    s = void 0,
                    u = void 0,
                    c = void 0;
                if (r) {
                    if (a = I(o, i), a === le ? (c = !0, s = a.error, a = null) : u = !0, t === a) return void x(t, y())
                } else a = i, u = !0;
                t._state !== ae || (r && u ? A(t, a) : c ? x(t, s) : e === se ? P(t, a) : e === ue && x(t, a))
            }

            function j(e, n) {
                try {
                    n(function(n) {
                        A(e, n)
                    }, function(n) {
                        x(e, n)
                    })
                } catch (n) {
                    x(e, n)
                }
            }

            function D() {
                return de++
            }

            function O(e) {
                e[re] = de++, e._state = void 0, e._result = void 0, e._subscribers = []
            }

            function q(e, n) {
                this._instanceConstructor = e, this.promise = new e(g), this.promise[re] || O(this.promise), Q(n) ? (this._input = n, this.length = n.length, this._remaining = n.length, this._result = new Array(this.length), 0 === this.length ? P(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && P(this.promise, this._result))) : x(this.promise, N())
            }

            function N() {
                return new Error("Array Methods must be provided an Array")
            }

            function R(e) {
                return new q(this, e).promise
            }

            function B(e) {
                var n = this;
                return new n(Q(e) ? function(t, o) {
                        for (var i = e.length, r = 0; r < i; r++) n.resolve(e[r]).then(t, o)
                    } : function(e, n) {
                        return n(new TypeError("You must pass an array to race."))
                    })
            }

            function W(e) {
                var n = this,
                    t = new n(g);
                return x(t, e), t
            }

            function H() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }

            function V() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }

            function Y(e) {
                this[re] = D(), this._result = this._state = void 0, this._subscribers = [], g !== e && ("function" != typeof e && H(), this instanceof Y ? j(this, e) : V())
            }

            function K() {
                var e = void 0;
                if ("undefined" != typeof a) e = a;
                else if ("undefined" != typeof self) e = self;
                else try {
                        e = Function("return this")()
                    } catch (e) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                var n = e.Promise;
                if (n) {
                    var t = null;
                    try {
                        t = Object.prototype.toString.call(n.resolve())
                    } catch (e) {}
                    if ("[object Promise]" === t && !n.cast) return
                }
                e.Promise = Y
            }
            var z = void 0;
            z = Array.isArray ? Array.isArray : function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                };
            var Q = z,
                F = 0,
                G = void 0,
                J = void 0,
                $ = function(e, n) {
                    oe[F] = e, oe[F + 1] = n, F += 2, 2 === F && (J ? J(f) : ie())
                },
                X = "undefined" != typeof window ? window : void 0,
                Z = X || {},
                ee = Z.MutationObserver || Z.WebKitMutationObserver,
                ne = "undefined" == typeof self && "undefined" != typeof r && "[object process]" === {}.toString.call(r),
                te = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                oe = new Array(1e3),
                ie = void 0;
            ie = ne ? u() : ee ? l() : te ? d() : void 0 === X ? p() : h();
            var re = Math.random().toString(36).substring(16),
                ae = void 0,
                se = 1,
                ue = 2,
                ce = new L,
                le = new L,
                de = 0;
            return q.prototype._enumerate = function() {
                for (var e = this.length, n = this._input, t = 0; this._state === ae && t < e; t++) this._eachEntry(n[t], t)
            }, q.prototype._eachEntry = function(e, n) {
                var t = this._instanceConstructor,
                    o = t.resolve;
                if (o === v) {
                    var i = b(e);
                    if (i === m && e._state !== ae) this._settledAt(e._state, n, e._result);
                    else if ("function" != typeof i) this._remaining--, this._result[n] = e;
                    else if (t === Y) {
                        var r = new t(g);
                        T(r, e, i), this._willSettleAt(r, n)
                    } else this._willSettleAt(new t(function(n) {
                        return n(e)
                    }), n)
                } else this._willSettleAt(o(e), n)
            }, q.prototype._settledAt = function(e, n, t) {
                var o = this.promise;
                o._state === ae && (this._remaining--, e === ue ? x(o, t) : this._result[n] = t), 0 === this._remaining && P(o, this._result)
            }, q.prototype._willSettleAt = function(e, n) {
                var t = this;
                E(e, void 0, function(e) {
                    return t._settledAt(se, n, e)
                }, function(e) {
                    return t._settledAt(ue, n, e)
                })
            }, Y.all = R, Y.race = B, Y.resolve = v, Y.reject = W, Y._setScheduler = o, Y._setAsap = i, Y._asap = $, Y.prototype = {
                constructor: Y,
                then: m,
                catch: function(e) {
                    return this.then(null, e)
                }
            }, K(), Y.polyfill = K, Y.Promise = Y, Y
        })
    }).call(n, t(7), function() {
        return this
    }())
}, function(e, n) {
    "use strict";
    e.exports = {
        suHost: "a.mlinks.cc",
        ulHost: "s.mlinks.cc",
        dpEvent: "stats.mlinks.cc",
        env: "prod"
    }
}, function(e, n) {
    "use strict";

    function t() {
        throw new Error("setTimeout has not been defined")
    }

    function o() {
        throw new Error("clearTimeout has not been defined")
    }

    function i(e) {
        if (l === setTimeout) return setTimeout(e, 0);
        if ((l === t || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0);
        try {
            return l(e, 0)
        } catch (n) {
            try {
                return l.call(null, e, 0)
            } catch (n) {
                return l.call(this, e, 0)
            }
        }
    }

    function r(e) {
        if (d === clearTimeout) return clearTimeout(e);
        if ((d === o || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e);
        try {
            return d(e)
        } catch (n) {
            try {
                return d.call(null, e)
            } catch (n) {
                return d.call(this, e)
            }
        }
    }

    function a() {
        m && f && (m = !1, f.length ? p = f.concat(p) : v = -1, p.length && s())
    }

    function s() {
        if (!m) {
            var e = i(a);
            m = !0;
            for (var n = p.length; n;) {
                for (f = p, p = []; ++v < n;) f && f[v].run();
                v = -1, n = p.length
            }
            f = null, m = !1, r(e)
        }
    }

    function u(e, n) {
        this.fun = e, this.array = n
    }

    function c() {}
    var l, d, h = e.exports = {};
    ! function() {
        try {
            l = "function" == typeof setTimeout ? setTimeout : t
        } catch (e) {
            l = t
        }
        try {
            d = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (e) {
            d = o
        }
    }();
    var f, p = [],
        m = !1,
        v = -1;
    h.nextTick = function(e) {
        var n = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
        p.push(new u(e, n)), 1 !== p.length || m || i(s)
    }, u.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = c, h.addListener = c, h.once = c, h.off = c, h.removeListener = c, h.removeAllListeners = c, h.emit = c, h.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, h.cwd = function() {
        return "/"
    }, h.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, h.umask = function() {
        return 0
    }
}, function(e, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = [
        ["480", "800"],
        ["480", "854"],
        ["720", "1280"],
        ["1080", "1920"],
        ["1440", "2560"],
        ["600", "1024"],
        ["800", "1280"],
        ["1200", "1920"],
        ["2048", "1536"],
        ["2560", "1600"],
        ["1280", "720"],
        ["1920", "1080"],
        ["280", "280"],
        ["320", "290"],
        ["320", "320"]
    ]
}, function(e, n) {
    "use strict";

    function t(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = function() {
            function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var o = n[t];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(n, t, o) {
                return t && e(n.prototype, t), o && e(n, o), n
            }
        }(),
        i = function() {
            function e() {
                t(this, e)
            }
            return o(e, null, [{
                key: "getCookie",
                value: function(e) {
                    var n = new RegExp("(^|;)[ ]*" + e + "=([^;]*)"),
                        t = n.exec(document.cookie);
                    return t ? decodeURIComponent(t[2]) : null
                }
            }, {
                key: "setCookie",
                value: function(e, n, t, o, i, r) {
                    var a = void 0;
                    t && (a = new Date, a.setTime(a.getTime() + t)), document.cookie = e + "=" + encodeURIComponent(n) + (t ? ";expires=" + a.toGMTString() : "") + ";path=" + (o || "/") + (i ? ";domain=" + i : "") + (r ? ";secure" : "")
                }
            }]), e
        }();
    n.default = i
}, function(e, n, t) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
                default: e
            }
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = t(3),
        r = o(i);
    n.default = function() {
        var e = void 0;
        if (e = new r.default(document.location.href).getParam("MW_DEBUG")) {
            var n, t;
            (n = window).alert.apply(n, arguments), (t = console).log.apply(t, arguments)
        }
    }
}, function(e, n, t) {
    (function(e) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                    default: e
                }
        }

        function i(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e) {
            return !!e && e.constructor === Array
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function() {
                function e(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var o = n[t];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(n, t, o) {
                    return t && e(n.prototype, t), o && e(n, o), n
                }
            }(),
            s = t(5),
            u = o(s),
            c = t(1),
            l = o(c),
            d = t(2),
            h = o(d),
            f = t(3),
            p = o(f),
            m = t(4),
            v = o(m),
            g = t(12),
            w = o(g),
            y = t(10),
            b = o(y),
            k = t(13),
            _ = o(k),
            S = t(9),
            T = o(S),
            A = u.default.Promise,
            C = T.default,
            P = p.default,
            x = h.default,
            E = l.default,
            U = v.default,
            L = w.default,
            I = b.default,
            M = _.default,
            j = window.navigator.userAgent,
            D = 3,
            O = M.sha1(j),
            q = [],
            N = {},
            R = {},
            B = localStorage,
            W = function() {
                function e() {
                    i(this, e);
                    for (var n = arguments.length, t = Array(n), o = 0; o < n; o++) t[o] = arguments[o];
                    var r = this.formatConfig(t),
                        a = r.autoInit;
                    this.jsonData = {}, this.config = r.config, this.render = new L(this), document.location.hostname == e.env.suHost && document.body.classList.add("official-page"), a !== !1 && this.init()
                }
                return a(e, [{
                    key: "subDomainCheck",
                    value: function(n) {
                        var t = n.mlink,
                            o = new p.default(t);
                        return o.domain = e.env.suHost, o.host = e.env.suHost, n.mlink = o.toString(), n.domainUrl = t, n
                    }
                }, {
                    key: "init",
                    value: function() {
                        var n = this.config;
                        if (r(n)) ! function() {
                            var t = void 0;
                            n = r(n) ? n : [n], L.each(n, function(n) {
                                var o = "undefined" != typeof n.autoLaunchApp ? n.autoLaunchApp : n.autoRedirect;
                                o !== !0 || t ? (n.autoLaunchApp = !1, new e(n)) : (t = !0, new e(n))
                            })
                        }();
                        else if (this.checkConfig(n) === !0) {
                            n = this.subDomainCheck(n);
                            var t = n.button;
                            !t || t.constructor !== Array && t.constructor !== NodeList || ! function() {
                                var e = [];
                                L.each(t, function(n) {
                                    n && (n.tagName && e.push(n), n.constructor === NodeList && L.each(n, function(n) {
                                        e.push(n)
                                    }))
                                }), n.button = e
                            }(), this.trackingH5(n.mlink), this.initButton(n);
                            var o = "undefined" != typeof n.autoLaunchApp ? n.autoLaunchApp : n.autoRedirect;
                            o === !0 && ("shorturl" === e.env.model ? this.redirect(n) : e.location(this.applyParamsToShorturl(n.domainUrl)))
                        }
                    }
                }, {
                    key: "formatConfig",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            n = {},
                            t = e.length,
                            o = [];
                        return e.forEach(function(e, i) {
                            return i === t - 1 && "boolean" == typeof e ? void(n.autoInit = e) : void(e && e.constructor === Object ? o.push(e) : e && e.constructor === Array && (o = e))
                        }), 1 === o.length && o[0].constructor === Object && (o = o[0]), n.config = o, n
                    }
                }, {
                    key: "checkConfig",
                    value: function(n) {
                        return n.mlink && n.button ? (n.mlink.match(/^https?/) || (n.mlink = "https://" + e.env.suHost + "/" + n.mlink.replace(/(^[\/\s]*)/, "").replace(/[\s\/]*$/, "")), !0) : (console.log("new Mlink([{"), n.mlink ? console.log('    "mlink" : "' + n.mlink + '",') : console.error('  "mlink" : "{xxxx}", // 短链KEY是必要参数, 不能为空.'), n.button ? console.log('    "button" : "a标签(DOM类型)"') : console.error('  "button" : "DOM类型, 您页面中打开App的链接." // 必要参数, 不能为空'), console.log("}]);"), !1)
                    }
                }, {
                    key: "initButton",
                    value: function(n, t) {
                        var o = this,
                            i = n.button && "number" == typeof n.button.length ? n.button : [n.button],
                            r = t ? "number" == typeof t.length ? t : [t] : null;
                        r = r && r.length > 0 ? r : i;
                        for (var a = !!new P(n.mlink).getParam("DO_NOT_TRACKING") || "open" === e.env.model, s = void 0, u = 0, c = r.length; u < c; u++)
                            if (s = r[u], s && "function" == typeof s.setAttribute) {
                                var l = s.getAttribute("mlink-handling");
                                if (!l) {
                                    s.setAttribute("href", "javascript:void(0)");
                                    var d = function() {
                                        o.tracking(!0), "function" == typeof n.beforeClick && n.beforeClick(), o.redirect(n, !0)
                                    };
                                    s.onclick = d
                                }
                            }
                        this.loadData(null, null, {
                            doNotTracking: a
                        }).then(function(t) {
                            var i = o.config.mlink;
                            t = o.mwToApp(t);
                            var a = o.getUniversalLink(t),
                                s = U.isSupportedUniversalLink(t) && a && o.config.inapp !== !0,
                                u = x.ios ? t.iosLink : t.androidLink,
                                c = u && U.isSupportedSchemeOnlyClick(t),
                                l = s ? a : u,
                                d = o.getDownloadUrl(t);
                            if (l = o.passParamsToApp(l), s) {
                                var h = new P(l);
                                h.setParam("mw_func_ul_ru", encodeURIComponent(location.href)), l = h.toString()
                            }
                            if ("open" === e.env.model && (c || s) && !U.qq || (x.ios && x.iosVersion[0] < 9 || x.android) && U.qq && U.qqVersion[0] >= 6) {
                                o.sendEvent(l);
                                for (var f = function() {
                                    o.tracking(!0), o.sendEvent(l), "function" == typeof n.beforeClick && n.beforeClick(), document.location.href = l, s && x.ios && x.iosVersion[0] >= 9 && U.qq && U.qqVersion[0] >= 6 || c && ! function() {
                                        var n = setTimeout(function() {
                                            if (U.isSupportedYYB(t, i)) o.openDownloadUrl(t.yybDownloadUrl || d);
                                            else if ("open" === e.env.model && (U.wx || U.weibo)) {
                                                var n = new P(o.config.domainUrl),
                                                    r = !1;
                                                o.config.resetWeixinMenu === !0 && (n.setParam("resetWeixinMenu", 1), r = r || !n.getParam("resetWeixinMenu")), o.config.preventDownload === !0 && (n.setParam("preventDownload", 1), r = r || !n.getParam("preventDownload")), r ? e.location(n.toString()) : o.openDownloadUrl(d)
                                            } else o.openDownloadUrl(d)
                                        }, 1e3);
                                        o.onAppLaunched(function() {
                                            clearTimeout(n)
                                        })
                                    }()
                                }, p = 0, m = r.length; p < m; p++) {
                                    var v = r[p],
                                        g = v.getAttribute("mlink-handling");
                                    v && "function" == typeof v.setAttribute && !g && (v.setAttribute("mlink-handling", !0), x.ios && x.iosVersion[0] < 9 && U.qq && U.qqVersion[0] >= 6 ? (v.setAttribute("href", o.passParamsToApp(u)), v.addEventListener("click", f)) : x.ios && x.iosVersion[0] >= 9 && U.qq && U.qqVersion[0] >= 6 && !s ? (v.setAttribute("href", o.passParamsToApp(u)), v.addEventListener("click", f)) : (v.setAttribute("href", "javascript:void(0)"), v.onclick = function() {}, v.removeEventListener("click", f), v.addEventListener("click", f)))
                                }
                            } else if (x.ios && x.iosVersion[0] >= 9 && U.qq && U.qqVersion[0] >= 6)
                                for (var w = 0, y = r.length; w < y; w++) {
                                    var b = r[w];
                                    b.setAttribute("mlink-handling", !0), b.setAttribute("href", o.passParamsToApp(u)), o.sendEvent(u), b.onclick = function() {
                                        o.tracking(!0), o.sendEvent(u);
                                        var n = setTimeout(function() {
                                            if (U.isSupportedYYB(t, i)) o.openDownloadUrl(t.yybDownloadUrl || d);
                                            else if ("open" === e.env.model && (U.wx || U.weibo)) {
                                                var n = new P(o.config.domainUrl),
                                                    r = !1;
                                                o.config.resetWeixinMenu === !0 && (n.setParam("resetWeixinMenu", 1), r = r || !n.getParam("resetWeixinMenu")), o.config.preventDownload === !0 && (n.setParam("preventDownload", 1), r = r || !n.getParam("preventDownload")), r ? e.location(n.toString()) : o.openDownloadUrl(d)
                                            } else o.openDownloadUrl(d)
                                        }, 1e3);
                                        return o.onAppLaunched(function() {
                                            clearTimeout(n)
                                        }), !0
                                    }
                                }
                            "shorturl" === e.env.model && document.getElementById("icon").setAttribute("href", t.iconUrl + "?imageView/2/w/16/h/16/format/ico")
                        })
                    }
                }, {
                    key: "redirect",
                    value: function(n, t) {
                        var o = this,
                            i = this.config.mlink;
                        if (x.desktop) return void this.showQrCode();
                        var r = !!new P(n.mlink).getParam("DO_NOT_TRACKING") || "open" === e.env.model;
                        this.loadData(null, null, {
                            doNotTracking: r
                        }).then(function(r) {
                            I("load data end！"), "shorturl" === e.env.model && document.getElementById("icon").setAttribute("href", r.iconUrl + "?imageView/2/w/16/h/16/format/ico"), r = o.mwToApp(r), o.resetTitle(r.productName), E.resolution = r.resolution, U.supportScheme = r.supportScheme;
                            var a = new P(i),
                                s = x.android ? r.androidLink : r.iosLink,
                                u = o.getDownloadUrl(r),
                                c = o.isAppInstalled(),
                                l = o.getUniversalLink(r);
                            o.customDataView = "1" === a.getParam("mw_preview") && r.mwContent, o.applink = s, o.MW_ST = +new Date, o.MW_TQ = [], o.MW_TQ_TICKET = setInterval(function() {
                                o.MW_TQ.push(0)
                            }, 100), I("noUniversalLink start");
                            var d = U.isSupportedUniversalLink(r) && !l;
                            if (I("noUniversalLink end"), s || !d) {
                                if (U.isSupportedUniversalLink(r) && l && o.config.inapp !== !0) {
                                    I("ul."), l = o.passParamsToApp(l);
                                    var h = new P(l);
                                    return h.setParam("mw_func_ul_ru", encodeURIComponent(location.href)), l = h.toString(), o.applink = l, void(t ? (o.sendEvent(l).then(function() {
                                            U.wx && "open" === e.env.model && (setTimeout(function() {
                                                window.location.reload()
                                            }, 1e3), B && B.setItem("mwDoNotTracking", o.config.mlink))
                                        }), o.location(l, function() {}, 600)) : (o.sendEvent(l), o.showUniversalLinkButton(l)))
                                }
                                var f = !1;
                                U.qq && U.qqVersion[0] >= 6 && "open" !== e.env.model && (f = !0), U.qqbrowser && (f = !0);
                                var p = U.isSupportedYYB(r, i);
                                if (p && (u = r.yybDownloadUrl || u), p && !f) return I("YYB2 Event."), void o.sendEvent(s, null, 1).then(function() {
                                    I("Redirect to YYB."), o.location(u)
                                });
                                if (I("click scheme"), I("byClick " + t), !t && U.isSupportedSchemeOnlyClick(r)) return I("supported scheme by click"), o.sendEvent(s), void o.showSchemeButton(s);
                                if (U.wx || U.qq || U.weibo) {
                                    if (I("wx | qq | weibo."), o.sendEvent(s), I("sended event"), !U.isSupportedSchemeOnlyClick(r)) {
                                        if ("open" === e.env.model) {
                                            var m = new P(o.applyParamsToShorturl(n.domainUrl));
                                            return n.resetWeixinMenu === !0 && m.setParam("resetWeixinMenu", 1), n.preventDownload === !0 && m.setParam("preventDownload", 1), void(window.location.href = m.toString())
                                        }
                                        if (I("isSupportedSchemeOnlyClick else"), t || new P(n.mlink).getParam("DO_NOT_TRACKING") + "" == "1") {
                                            if (I("byClick else"), U.wx && (x.android || x.iosVersion[0] < 9) && U.isSupportedYYB(r, i)) return void o.sendEvent(s, null, 1).then(function() {
                                                I("Redirect to YYB."), o.location(u)
                                            });
                                            o.createOpenInBrowserModal()
                                        } else {
                                            I("byClick else href");
                                            var v = new P(o.applyParamsToShorturl(n.domainUrl));
                                            v.setParam("DO_NOT_TRACKING", 1), window.location.href = v.toString()
                                        }
                                        return
                                    }
                                    if (I("isSupportedSchemeOnlyClick"), t) return I("byClick"), void o.openScheme(s, function() {
                                        "open" === e.env.model ? window.location.href = o.applyParamsToShorturl(n.domainUrl) : U.qq ? o.openDownloadUrl(u) : o.createOpenInBrowserModal()
                                    }, 500)
                                }
                                return U.isSupportedScheme(r) ? (I("default for scheme: " + s), o.sendEvent(s), I("isAppInstalled:" + c), void(c === !0 ? o.openScheme(s, function() {
                                            o.render.showSchemeNotSupport(u)
                                        }, 500) : c === !1 ? o.openDownloadUrl(u, !0) : o.openScheme(s, function() {
                                                I("Redirect to Download URL.1"), o.openDownloadUrl(u)
                                            }, 500))) : (I("not support scheme."), o.sendEvent(s), o.render.showSchemeNotSupport(u), void 0)
                            }
                            I("!scheme && noUniversalLink:" + !s + "-" + d);
                            var g = !U.isSupportedSchemeOnlyClick(r) || t;
                            if (g && "LANDING_PAGE" === r.jumpType && r.landingPage) I("goto landing page.."), e.location(r.landingPage);
                            else {
                                I("setting error.");
                                var w = x.ios ? "iOS" : "Android",
                                    y = "很抱歉，" + r.productName + "暂未提供" + w + "对应的跳转服务。";
                                o.render.showPage(".setting-error", {
                                    title: y,
                                    text: " "
                                })
                            }
                        })
                    }
                }, {
                    key: "getApiHost",
                    value: function(n) {
                        var t = document.location.href,
                            o = void 0,
                            i = void 0;
                        if (t.match(/^https:/) || t.match(/^http:/)) {
                            var r = new P(n),
                                a = r.path.replace(/\/su\//, "/") + "?" + r.queryString;
                            i = "https://" + e.env.ulHost + "/su", o = i + a
                        } else o = n;
                        var s = new P(o);
                        return s.setParam("REQUEST_TYPE", "POST"), s.toString()
                    }
                }, {
                    key: "getUniversalLink",
                    value: function(e) {
                        if (e) {
                            var n = new P(e.ios9Link || e.universalLink);
                            return U.magicWindowConfig, this.config.downloadWhenUniversalLinkFailed === !0 && (n.setParam("downloadWhenFailed", "1"), e.ios9Link = n.toString()), this.config.resetWeixinMenu === !0 && n.setParam("resetWeixinMenu", 1), n.toString()
                        }
                    }
                }, {
                    key: "loadData",
                    value: function(e, n) {
                        var t = this,
                            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = 6e3,
                            r = this,
                            a = this.config,
                            s = a.timeout || i,
                            u = a.timeoutCallback || function() {
                                    r.render.showPage(".server-error")
                                };
                        (isNaN(+s) || +s < 0) && (s = i, console.warn("timeout  must be number and >0")), "function" != typeof u && (u = function() {
                            r.render.showPage(".server-error")
                        }, console.warn("timeoutCallback must be function")), n = n || this.config.mlink, n = this.applyParamsToShorturl(n);
                        var c = this.getApiHost(n);
                        if (B && B.getItem("mwDoNotTracking") === n && (o.doNotTracking = !0, B.setItem("mwDoNotTracking", "")), o.doNotTracking !== !0 && delete o.doNotTracking, U.mw) {
                            var l = U.magicWindowConfig && U.magicWindowConfig.ak;
                            l && (o.inAk = l)
                        }
                        return R[n] && e !== !0 ? new A(function(e) {
                                var t = R[n];
                                e(t)
                            }) : N[n] && e !== !0 ? N[n] : (N[n] = new A(function(e, i) {
                                    var r = new XMLHttpRequest,
                                        l = setTimeout(function() {
                                            console.warn("time out"), u(a), i()
                                        }, s);
                                    r.onreadystatechange = function() {
                                        if (4 == r.readyState) {
                                            if (200 == r.status) {
                                                clearTimeout(l);
                                                var o = t.parseJson(r.responseText);
                                                if (t.render.init(o), t.jsonData = o, t.config.preventDownload === !0 && o.ios9Link) {
                                                    var a = new P(o.ios9Link);
                                                    o.ios9Link = a.setParam("preventDownload", "1").toString()
                                                }
                                                if (t.config.sendDpEventWhenLoading) {
                                                    var s = x.ios ? o.iosLink : o.androidLink,
                                                        u = U.isSupportedUniversalLink(o) ? o.ios9Link : s;
                                                    u = t.passParamsToApp(u), t.sendEvent(u)
                                                }
                                                R[n] = o, e(o)
                                            } else t.render.showPage(".server-error"), i();
                                            delete N[n]
                                        }
                                    }, r.open("POST", c, !0), r.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), r.send(JSON.stringify(o))
                                }), N[n])
                    }
                }, {
                    key: "applyParamsToShorturl",
                    value: function(e) {
                        var n = [],
                            t = this.config.params || {};
                        for (var o in t) n.push(o + "=" + encodeURIComponent(t[o]));
                        var i = this.config.cparams || {};
                        for (var r in i) n.push("mw_cp_" + r + "=" + encodeURIComponent(i[r]));
                        var a = this.config.tparams || {};
                        for (var s in a) n.push("mw_dynp_" + s + "=" + encodeURIComponent(a[s]));
                        return n = n.sort(), n.length > 0 && (e += (e.indexOf("?") === -1 ? "?" : "&") + n.join("&")), e
                    }
                }, {
                    key: "parseJson",
                    value: function(e) {
                        var n = JSON.parse(e);
                        return n = n ? n.result || {} : {}
                    }
                }, {
                    key: "resetTitle",
                    value: function(n) {
                        "shorturl" === e.env.model && (this.originTitle = this.originTitle || document.title, document.title = n || this.originTitle)
                    }
                }, {
                    key: "getProtocol",
                    value: function(e) {
                        var n = /^(\w+):\/\//,
                            t = e.match(n);
                        if (t) return t[1]
                    }
                }, {
                    key: "getDownloadUrl",
                    value: function(e) {
                        (this.jsonData.iosDownloadUrl || this.jsonData.androidDownloadUrl) && (e = this.jsonData);
                        var n = e.landingPage,
                            t = x.ios ? e.iosDownloadUrl : e.androidDownloadUrl,
                            o = "";
                        if (n) {
                            var i = void 0;
                            i = new P(this.config.mlink).getParams(), o = new P(n).setParams(i).toString()
                        }
                        return "LANDING_PAGE" === e.jumpType ? o : t
                    }
                }, {
                    key: "getEventUrl",
                    value: function(n) {
                        var t = document.location.href,
                            o = n || (this.jsonData ? this.jsonData.server : "") || "https://" + e.env.dpEvent;
                        return t.match(/^https:/) ? (o = e.env.dpEvent, o = (o.match(/^https:\/\//) ? "" : "https://") + o) : o = (o.match(/^http:\/\//) ? "" : "https://") + o, o = o.replace(/\/$/, ""), o + "/dp/event"
                    }
                }, {
                    key: "getScreenResolution",
                    value: function() {
                        var e = window.screen,
                            n = void 0;
                        n = x.ios ? window.devicePixelRatio : U.wx || U.uc || !window.devicePixelRatio ? 1 : window.devicePixelRatio;
                        var t = e.width * n,
                            o = e.height * n;
                        return [t, o].join("x")
                    }
                }, {
                    key: "getShorturlKey",
                    value: function() {
                        var e = new P(this.config.mlink),
                            n = e.path.replace(/^\//, "");
                        return n = n.replace("su/", "")
                    }
                }, {
                    key: "sendEvent",
                    value: function(e, n) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                            o = this,
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                            r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                            a = this.jsonData || {},
                            s = "POST",
                            u = this.getEventUrl(n),
                            c = x.ios ? 1 : (x.android, 0),
                            l = 1 === c ? j.match(/iPhone OS ([\d_\.]*)/) : j.match(/Android ([\d_\.]*)/),
                            d = this.getShorturlKey(),
                            h = E.getScreenResolution(),
                            f = a.resX || h.width,
                            p = a.resY || h.height,
                            m = i || a.staticParams || "{}",
                            v = {
                                key: d,
                                dp: r ? this.passParamsToApp(e) : e,
                                sr: [f, p].join("x"),
                                dt: JSON.parse(m),
                                os: c,
                                osv: l ? (l[1] || "").replace(/_/g, ".") : "",
                                yyb: t
                            };
                        return I("send event start"), new A(function(a, c) {
                            var l = void 0;
                            l = new XMLHttpRequest, I("sending event"), 1 === t && o.sendEvent(e, n, 0, i, r), l && (l.open(s, u, !0), l.withCredentials = !0, l.setRequestHeader("Method", s + " " + u + " HTTP/1.1"), l.setRequestHeader("Content-type", "application/json"), l.send(JSON.stringify(v)), l.onreadystatechange = function() {
                                4 === parseInt(l.readyState) && (200 === parseInt(l.status) ? a() : c())
                            }, setTimeout(function() {
                                a()
                            }, 2e3))
                        })
                    }
                }, {
                    key: "trackingH5",
                    value: function(n) {
                        var t = (new Date).getTime() + Math.floor(1e13 * Math.random()),
                            o = new P(n),
                            i = new P(window.location.href),
                            r = i.getParam("mw_ck"),
                            a = "https://" + e.env.dpEvent + "/tracking/i";
                        a += "a.mlinks.cc" === i.domain || "at.mlinks.cc" === i.domain || "b.mlinks.cc" === i.domain || "bt.mlinks.cc" === i.domain ? "?ch=surl" : "?ch=h5", r && (a += "," + r);
                        var s = encodeURIComponent(o.protocol + "://" + o.host + o.path);
                        a += "&action=mwi&cid=" + s + "&rdm=" + t, setTimeout(function() {
                            (new Image).src = a
                        }, 0)
                    }
                }, {
                    key: "tracking",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this.btnClickedCounter = this.btnClickedCounter || 0, (this.btnClickedCounter > 0 || e) && this.loadData(!0), this.btnClickedCounter += 1
                    }
                }, {
                    key: "trackingDownload",
                    value: function() {}
                }, {
                    key: "getDeferredTime",
                    value: function() {
                        var e = +new Date,
                            n = (e - this.MW_ST) / 1e3,
                            t = n - this.MW_TQ.length / 10;
                        return clearInterval(this.MW_TQ_TICKET), t
                    }
                }, {
                    key: "openDownloadUrl",
                    value: function(n, t) {
                        var o = this,
                            i = new P(document.location.href);
                        if (this.config.preventDownload !== !0 && !i.getParam("preventDownload")) {
                            var r = t ? 0 : D,
                                a = t ? 0 : 1e3,
                                s = this.render.getCustomStyles().count_down_json || {};
                            try {
                                document.querySelector(".scheme-redirecting h3").style.color = s.countDownTextColor;
                                var u = document.querySelector(".scheme-redirecting .tips");
                                s.isOtherTextShow ? u.style.color = s.textColor : u.style.display = "none"
                            } catch (e) {}
                            var c = this.render.showPage(".scheme-redirecting", {
                                    bg: s.bgUrl
                                }),
                                l = void 0;
                            if (I(c), !c) return void setTimeout(function() {
                                if (o.isPageVisible()) {
                                    var t = "www.xingyun.cn" === document.location.hostname;
                                    o.config.autoRedirectToDownloadUrl === !1 || t ? o.render.showDownloadDialod() : e.location(n)
                                }
                            }, 1e3);
                            var d = e.isIosLE9() && U.safari;
                            if (!U.uc && !U.qqbrowser && !d) {
                                r = 0;
                                var h = c.querySelector(".timeSpan") || {};
                                h.style.display = "none", a = 1e3
                            }
                            I("Interval Times: " + r);
                            var f = c.querySelector(".time") || {};
                            f.innerHTML = r ? Math.floor(r) + "秒" : "", l = setInterval(function() {
                                f.innerHTML = r ? Math.floor(r - 1) + " 秒" : "0 秒", r -= 1;
                                var t = !o.isPageVisible();
                                return I(r + "; " + (r < 0)), t && !d ? (clearInterval(l), void o.render.showAppOpened(o.jsonData)) : void(r < 0 && (I("timeout"), clearInterval(l), o.render.showDownloadTips(n), e.location(n)))
                            }, a), n.match(/:\/\/itunes\.apple\.com/) || n.match(/\.apk($|\?)/) || this.onAppLaunched(function() {
                                clearInterval(l), I("Not APK & AppStore."), o.render.showAppOpened(o.jsonData)
                            })
                        }
                    }
                }, {
                    key: "isAppInstalled",
                    value: function e() {
                        var n = window.location.href,
                            t = new P(n),
                            o = "weixin" === t.getParam("platform"),
                            e = "1" === t.getParam("isappinstalled");
                        return o ? !!e : "unknow"
                    }
                }, {
                    key: "isPageVisible",
                    value: function() {
                        var e = void 0;
                        return e = "undefined" != typeof document.hidden ? document.hidden : "undefined" != typeof document.mozHidden ? document.mozHidden : "undefined" != typeof document.msHidden ? document.msHidden : "undefined" != typeof document.webkitHidden ? document.webkitHidden : "undefined" != typeof window.JSInterface && !window.JSInterface.mwAppOpened(), !e
                    }
                }, {
                    key: "createOpenInBrowserModal",
                    value: function() {
                        var e = x.ios ? ".openinbrowser.ios" : ".openinbrowser.android",
                            n = (this.jsonData || {}).iconUrl,
                            t = this.render.getCustomStyles(),
                            o = x.ios ? t.iosTipsImg : t.androidTipsImg,
                            i = this.render.showPage(e, {
                                appIcon: n
                            });
                        i && this.render.setTipsImg(i, o)
                    }
                }, {
                    key: "showQrCode",
                    value: function() {
                        var e = "https://a.mlinks.cc/qr/gen?margin=0&width=150&content=" + encodeURIComponent(this.config.mlink);
                        this.render.showPage(".mw-alert", {
                            title: "请扫描二维码在移动设备上访问",
                            text: '<img class="qrcode-img" src="' + e + '">'
                        })
                    }
                }, {
                    key: "getParam",
                    value: function(e) {
                        var n = window.document.location.href,
                            t = n.match(new RegExp("[?&]" + e + "=(\\w*)[&$]")),
                            o = t ? t[1] : "";
                        return o
                    }
                }, {
                    key: "passParamsToApp",
                    value: function(n) {
                        if (n && n.indexOf("mw_mk=") == -1) {
                            var t = this.jsonData ? this.jsonData : {},
                                o = [],
                                i = new P(this.config.mlink),
                                r = i.getParam("mw_ck"),
                                a = i.getParam("mw_dc_order"),
                                s = i.getParam("mw_dc"),
                                u = i.getParam("mw_ios_dc"),
                                c = i.getParam("mw_android_dc");
                            r && r.match(/(%\w{2})+/g) && (r = decodeURIComponent(r)), s && s.match(/(%\w{2})+/g) && (s = decodeURIComponent(s)), u && u.match(/(%\w{2})+/g) && (u = decodeURIComponent(u)), c && c.match(/(%\w{2})+/g) && (c = decodeURIComponent(c)), o.push(["mw_ck", encodeURIComponent(r || t.channel || "")].join("=")), o.push(["mw_dc", encodeURIComponent(s || "")].join("=")), o.push(["mw_dc_order", encodeURIComponent(a || "")].join("=")), o.push(["mw_ios_dc", encodeURIComponent(u || "")].join("=")), o.push(["mw_android_dc", encodeURIComponent(c || "")].join("=")), o.push(["mw_mk", encodeURIComponent(t.mLinkKey || "")].join("=")), o.push(["mw_slk", encodeURIComponent(this.getShorturlKey() || "")].join("=")), o.push(["mw_tags", encodeURIComponent(t.tags || "")].join("="));
                            var l = this.config.cparams;
                            l || (l = i.getParamsStartWith("mw_cp_") || {});
                            for (var d in l) o.push(["mw_cp_" + d, encodeURIComponent(l[d])].join("="));
                            var h = this.config.tparams;
                            h || (h = i.getParamsStartWith("mw_dynp_") || {});
                            for (var f in h) o.push(["mw_dynp_" + f, encodeURIComponent(h[f])].join("="));
                            if (n.indexOf(e.env.ulHost !== -1)) {
                                var p = new Function("return " + t.staticParams)();
                                p && p.IOS && (p = p.IOS, delete p.DO_NOT_TRACKING, delete p.REQUEST_TYPE), p = JSON.stringify(p), o.push(["mw_ulp", encodeURIComponent(btoa(encodeURIComponent(p || "")))].join("="))
                            }
                            o.push(["mw_tk", encodeURI(O)].join("=")), o = o.join("&"), n = n + (n.indexOf("?") === -1 ? "?" : "&") + o, n = n.replace(/REQUEST_TYPE=(\w+)(&|$)/, "").replace(/&$/, "")
                        }
                        return n
                    }
                }, {
                    key: "onAppLaunched",
                    value: function(e) {
                        var n = this;
                        e = "function" == typeof e ? e : function() {}, I("onAppLaunched");
                        var t = function(e) {
                            I(e.type)
                        };
                        window.addEventListener("beforeunload", t);
                        var o = !1,
                            i = function(t) {
                                if (!o) {
                                    o = !0;
                                    var i = t.type;
                                    I("event", i), "webkitvisibilitychange" === i && n.isPageVisible() || e(), n.render.showAppOpened(n.jsonData)
                                }
                            };
                        window.addEventListener("pagehide", i), window.addEventListener("unload", i), document.addEventListener("webkitvisibilitychange", i), document.addEventListener("visibilitychange", i)
                    }
                }, {
                    key: "showSchemeButton",
                    value: function(e) {
                        this.showRedirectButton(e, 0)
                    }
                }, {
                    key: "showUniversalLinkButton",
                    value: function(e) {
                        this.showRedirectButton(e, 1)
                    }
                }, {
                    key: "showRedirectButton",
                    value: function(e) {
                        var n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null),
                            t = n || this.config.button,
                            o = R[this.config.mlink] || {},
                            i = o.productName || o.appName,
                            r = o.iconUrl || o.appIcon,
                            a = this.render.getCustomStyles(),
                            s = a.open_app_json;
                        t && (t.constructor !== Array && (t = [t]), this.initButton(this.config, t)), null === n && this.render.showPage(".redirect-with-button", {
                            appIcon: r,
                            appName: i,
                            type: s.type,
                            bg: s.bgUrl,
                            btn: {
                                innerHTML: s.btnText || "打开App",
                                color: s.btnTextColor || "",
                                backgroundColor: s.btnColor || "",
                                btnDistanceBottom: s.btnDistanceBottom || "20%",
                                href: U.aliPay && e
                            }
                        })
                    }
                }, {
                    key: "openScheme",
                    value: function(e, n, t) {
                        I(x.ios + ";" + x.ipad + x.iosVersion[0]);
                        var o = n,
                            i = U.mw && U.mwVersion,
                            r = !1;
                        i && (i[0] >= 4 || 3 == i[0] && i[1] > 9 || 3 == i[0] && 9 == i[1] && i[2] > 161125) && (r = !0), x.ios && x.iosVersion[0] >= 9 && r ? (I("Scheme with magicwindow."), this.openAppWithMagicwindow(e, o, t)) : x.ios && x.iosVersion[0] >= 9 && !r ? (I("Scheme with location."), this.location(e, o, t)) : x.android && U.chrome ? (I("Scheme with location."), this.location(e, o, t)) : x.ios && U.chrome ? (I("Scheme with window.open."), this.openAppWithWindowOpen(e, o, t)) : this.location(e, o, t)
                    }
                }, {
                    key: "openAppWithWindowOpen",
                    value: function(e, n, t) {
                        e = this.passParamsToApp(e);
                        var o = void 0;
                        try {
                            o = window.open(e)
                        } catch (e) {}
                        o ? window.close() : n()
                    }
                }, {
                    key: "openAppWithMagicwindow",
                    value: function(e, n, t) {
                        var o = this,
                            i = setTimeout(n, t || 500);
                        e = this.passParamsToApp(e), window.MW_APP_OPEND_CALLBACK_FN = function(e) {
                            I("MW_APP_OPEND_CALLBACK_FN:" + e), +e && (o.render.showAppOpened(o.jsonData, e), clearTimeout(i))
                        }, webkit && webkit.messageHandlers && webkit.messageHandlers.MagicWindow && webkit.messageHandlers.MagicWindow.postMessage({
                            method: "mwOpenUrl",
                            data: JSON.stringify({
                                urlScheme: e,
                                callback: "MW_APP_OPEND_CALLBACK_FN"
                            })
                        })
                    }
                }, {
                    key: "location",
                    value: function(n, t, o) {
                        n = this.passParamsToApp(n), e.location(n);
                        var i = setTimeout(t, o || 500);
                        this.onAppLaunched(function() {
                            clearTimeout(i)
                        })
                    }
                }, {
                    key: "openAppWithIframe",
                    value: function(e, n, t) {
                        e = this.passParamsToApp(e);
                        var o = document.createElement("iframe");
                        o.style.width = "0px", o.style.height = "0px", o.style.overflow = "hidden", o.id = "mlinkIframeLauncher",
                            o.src = e, document.body.appendChild(o);
                        var i = setTimeout(n, t || 500);
                        this.onAppLaunched(function() {
                            clearTimeout(i)
                        })
                    }
                }, {
                    key: "mwToApp",
                    value: function(e) {
                        if (!U.mw) return e;
                        var n = {};
                        n.mw_mlink_k = "webview", n.mw_mlink_appid = U.magicWindowConfig && U.magicWindowConfig.ak, n.mw_aba_appName = e.inProductName, n.mw_mlink_cb = e.inScheme;
                        var t = e.ios9Link && new P(e.ios9Link),
                            o = e.iosLink && new P(e.iosLink);
                        for (var i in n) n[i] && (t && t.setParam(i, n[i]), o && o.setParam(i, n[i]));
                        return e.ios9Link = t ? t.toString() : "", e.iosLink = o && o.toString(), e
                    }
                }], [{
                    key: "isIosLE9",
                    value: function() {
                        return x.ios && x.iosVersion[0] >= 9
                    }
                }, {
                    key: "location",
                    value: function(e) {
                        e && (document.location.href = e)
                    }
                }, {
                    key: "loadScript",
                    value: function() {
                        for (var e = [], n = document.querySelector("head"), t = arguments.length, o = Array(t), i = 0; i < t; i++) o[i] = arguments[i];
                        return o.forEach(function(t) {
                            var o = document.createElement("script"),
                                i = new A(function(e, t) {
                                    o.onload = function() {
                                        e(), n.removeChild(o)
                                    }, o.onerror = function() {
                                        t(), n.removeChild(o)
                                    }
                                });
                            o.src = t, n.appendChild(o), e.push(i)
                        }), A.all(e)
                    }
                }, {
                    key: "ready",
                    value: function(e) {
                        var n = document.readyState;
                        "interactive" === n || "complete" === n ? e() : (q.push(e), document.addEventListener("readystatechange", function() {
                                var e = void 0;
                                if (n = document.readyState, "interactive" === n || "complete" === n)
                                    for (; q.length > 0;) e = q.shift(), "function" == typeof e && e()
                            }))
                    }
                }, {
                    key: "scanLink",
                    value: function() {
                        var n = 1;
                        e.ready(function() {
                            setInterval(function() {
                                var t = document.querySelectorAll("a");
                                L.each(t, function(t) {
                                    var o = t.getAttribute("href"),
                                        i = !!t.getAttribute("data-mlink-scan"),
                                        r = !(!t.getAttribute("data-auto") && !t.getAttribute("auto")),
                                        a = t.getAttribute("data-params") || t.getAttribute("params");
                                    o && (o = new P(o)), !i && o && o.host && (o.host.match(/a(t)?\.mlinks\.cc/) || o.host.match(/b(t)?\.mlinks\.cc/)) && (a = new Function("return " + a)(), t.setAttribute("data-mlink-scan", n), n += 1, new e({
                                        mlink: o.toString(),
                                        button: t,
                                        autoLaunchApp: r,
                                        params: a
                                    }))
                                })
                            }, 500)
                        })
                    }
                }]), e
            }();
        W.promise = u.default, W.Promise = A, W.Cookie = C, W.os = x, W.Uri = P, W.browser = U, W.debug = I, W.device = E, W.Render = L, W.env = {
            suHost: e.suHost,
            ulHost: e.ulHost,
            env: e.env,
            model: "shorturl",
            dpEvent: e.dpEvent
        }, W.scanLink(), window.Mlink = W, n.default = W
    }).call(n, t(6))
}, function(e, n, t) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
                default: e
            }
    }

    function i(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var o = n[t];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(n, t, o) {
                return t && e(n.prototype, t), o && e(n, o), n
            }
        }(),
        a = t(1),
        s = (o(a), t(2)),
        u = o(s),
        c = t(3),
        l = (o(c), t(4)),
        d = (o(l), t(5)),
        h = o(d),
        f = function() {
            function e() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                i(this, e), this.mlink = n
            }
            return r(e, [{
                key: "init",
                value: function(e) {
                    this.data = e || {}, this.getCustomStyles()
                }
            }, {
                key: "getCustomStyles",
                value: function() {
                    if (this.customStyles) return this.customStyles;
                    var e = {},
                        n = "custom_mp_data",
                        t = this.data.custom_data || {};
                    if ("string" == typeof t) try {
                        t = JSON.parse(t)
                    } catch (e) {
                        t = {}
                    }
                    n = "", t.ios_json = {
                        bgUrl: t.iosBgUrl
                    }, t.android_json = {
                        bgUrl: t.androidBgUrl
                    }, t.open_app_json = {
                        bgUrl: t.link && t.link.bgUrl,
                        btnText: t.link && t.link.openText,
                        btnTextColor: t.link && t.link.textColor,
                        btnColor: t.link && t.link.btnColor,
                        btnDistanceBottom: "20%"
                    }, t.safari_down_json = {
                        bgUrl: t.link && t.link.bgUrl,
                        btnTextColor: t.link && t.link.textColor,
                        btnColor: t.link && t.link.btnColor,
                        btnDistanceBottom: "20%"
                    }, t.app_back_json = {
                        bgUrl: t.link && t.link.bgUrl
                    }, e.iosTipsImg = t.ios_json && t.ios_json.bgUrl || "", e.androidTipsImg = t.android_json && t.android_json.bgUrl || "", e.open_app_json = t.open_app_json || {}, e.safari_down_json = t.safari_down_json || {}, e.app_back_json = t.app_back_json || {}, e.count_down_json = t.count_down_json || {};
                    for (var o in e) "iosTipsImg" !== o && "androidTipsImg" !== o && (e[o].type = n);
                    return e.open_app_json.btnDistanceBottom && (/^[0-9]{1,2}\%$/.test(t.open_app_json.btnDistanceBottom) || (e.open_app_json.btnDistanceBottom = "20%")), this.customStyles = e, e
                }
            }, {
                key: "on",
                value: function(e, n, t) {
                    if (e && n && t) {
                        var o = n && n.constructor === Array ? n : [n];
                        o.forEach(function(n) {
                            e.addEventListener(n, t)
                        })
                    }
                }
            }, {
                key: "off",
                value: function(e, n, t) {
                    if (e && n && t) {
                        var o = n && n.constructor === Array ? n : [n];
                        o.forEach(function(n) {
                            e.removeEventListener(n, t)
                        })
                    }
                }
            }, {
                key: "hideAllPage",
                value: function() {
                    var n = this;
                    return new h.default.Promise(function(t) {
                        var o = document.querySelectorAll(".mw-page");
                        e.each(o, function(e) {
                            var o = void 0,
                                i = ["WebkitAnimationEnd", "MozAnimationEnd", "OAnimationEnd", "MsAnimationEnd", "animationEnd", "animationend"],
                                r = function r() {
                                    n.off(e, i, r), clearTimeout(o), t()
                                };
                            n.on(e, i, r), o = setTimeout(r, 320), e.classList.remove("show"), e.classList.add("hide")
                        })
                    })
                }
            }, {
                key: "showPage",
                value: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        o = document.querySelector(".mw-page" + e);
                    if ("custom_mp_data" === n.type && n.bg)
                        for (var i = o.querySelectorAll(".middle"), r = 0; r < i.length; r++) {
                            var a = i[r].getAttribute("style");
                            i[r].setAttribute("style", a + ";display:none !important")
                        }
                    return this.renderPage(o, n, t), this.hideAllPage().then(function() {
                        o && (o.classList.add("show"), o.classList.remove("hide"))
                    }), o
                }
            }, {
                key: "renderPage",
                value: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    e && (n.bg && this.setBg(e, n.bg), n.title && this.setTitle(e, n.title), n.text && this.setText(e, n.text), n.tipsImg && this.setTipsImg(e, n.tipsImg), n.appIcon && this.setAppIcon(e, n.appIcon), n.appName && this.setAppName(e, n.appName), n.btn && this.setBtn(e, n.btn || {}))
                }
            }, {
                key: "showDownloadTips",
                value: function(e) {
                    if (e.match(/:\/\/itunes\.apple\.com/) || e.match(/\.apk($|\?)/)) {
                        var n = this.data,
                            t = n.productName || n.appName,
                            o = n.iconUrl || n.appIcon;
                        o += "?imageMogr/v2/thumbnail/300x300";
                        var i = this.getCustomStyles().open_app_json || {},
                            r = '\n                <h3>正在等您安装</h3>\n                <div class="app-icon"><img id="appIcon" src="' + o + '" alt="" onload="this.style.display=\'block\';" onerror="this.style.display=\'none\';"/></div>\n                <p><b onclick="window.location.reload();">' + t + '</b></p>\n\n                <br/>\n                <a class="mw-button no-margin" onclick="window.location.reload();">我已完成安装</a>\n                <div>如果您刚才不小心取消了安装, 请点击: </div>\n                <p>   \n</p>\n                <a class="mw-button no-margin min outline" href="' + e + '">再次安装</a>';
                        this.showPage(".mw-alert", {
                            text: r,
                            btn: {
                                color: i.btnTextColor || "",
                                backgroundColor: i.btnColor || ""
                            },
                            bg: i.bgUrl
                        })
                    }
                }
            }, {
                key: "showSchemeNotSupport",
                value: function(e) {
                    var n = this.getCustomStyles();
                    this.showPage(".scheme-notsupported", {
                        appName: this.data.productName,
                        btn: {
                            innerHTML: n && n.safari_down_json && n.safari_down_json.btnText,
                            url: e
                        }
                    })
                }
            }, {
                key: "showContentPage",
                value: function(e) {
                    var n = e.productName || e.appName,
                        t = e.iconUrl || e.appIcon,
                        o = e.mwContent,
                        i = this.showPage(".custom-content", {
                            appName: n,
                            appIcon: t
                        }),
                        r = i.querySelector("h1"),
                        a = i.querySelector(".mw-cc-banner"),
                        s = a.querySelector("img"),
                        u = i.querySelector(".content"),
                        c = o.content || o.summary;
                    return r.innerHTML = o.title, a.style.backgroundImage = 'url("' + o.contentImageUri + '")', s.src = o.contentImageUri, u.innerHTML = c, o.contentImageUri || (a.style.display = "none"), i
                }
            }, {
                key: "showAppOpened",
                value: function(e) {
                    if (this.mlink.customDataView) return void this.showContentPage(e);
                    var n = this.data.productName,
                        t = this.data.iconUrl;
                    t += "?imageMogr/v2/thumbnail/300x300";
                    var o = this.mlink,
                        i = this.getCustomStyles().app_back_json || {},
                        r = "" + (i.isTextOneShow ? "<h1 " + (i.textOneColor ? 'style="color:' + i.textOneColor + ';"' : "") + ">已经为您打开了App</h1>" : "") + (i.type ? "" : '<div class="app-icon logo">\n                        <img src="' + t + '" onload="onImgLoaded(this)" onerror="onImgError(this)" />\n                    </div>\n                    <div class="blue" onclick="location.reload();" style="font-weight: bold;">' + n + "</div>") + ('<p style="position: absolute;width: 100%;left:0;' + (i.btnDistanceBottom ? "bottom:" + i.btnDistanceBottom : "bottom:20%;") + '">\n                        <a class="linkBtn mw-button" href="javascript:void(0)" style="\n                            ' + (i.btnTextColor ? "color:" + i.btnTextColor + ";" : "") + "\n                            " + (i.btnColor ? "background-color:" + i.btnColor + ";" : "") + '\n                            font-size:1.4em;\n                        \n                        ">' + (i.btnText || "再次打开") + "</a>.\n                    </p>");
                    this.showPage(".mw-alert", {
                        text: r,
                        btn: {
                            initAction: function(e) {
                                var n = o.applink,
                                    t = n.match(/^https:\/\//) ? 1 : 0;
                                o.showRedirectButton(n, t, e)
                            }
                        },
                        bg: i.bgUrl
                    })
                }
            }, {
                key: "showDownloadDialod",
                value: function() {
                    var e = this.data,
                        n = document.createElement("div"),
                        t = '.mw-dialog.mw-only-css {\n                      position: fixed;\n                      left: 0;\n                      top: 0;\n                      right: 0;\n                      bottom: 0;\n                      height: 100%;\n                      width: 100%;\n                      background-color: rgba(0, 0, 0, 0.6);\n                      box-sizing: border-box;\n                      z-index: 99999999999;\n                      display: -ms-flex;\n                      display: flex;\n                      display: -webkit-flex;\n                      display: -webkit-box;\n                      display: -ms-flexbox;\n                      display: flex;\n                      -ms-flex-align: center;\n                      -webkit-align-items: center;\n                      -webkit-box-align: center;\n                      align-items: center;\n                      -webkit-justify-content: space-between;\n                      -ms-flex-pack: justify;\n                      justify-content: space-between;\n                    }\n                    .mw-dialog.mw-only-css > div {\n                      display: block;\n                      width: 100%;\n                    }\n                    .mw-dialog.mw-only-css .mw-close {\n                      width: 80px;\n                      height: 80px;\n                      -webkit-border-radius: 50%;\n                      border-radius: 50%;\n                      display: block;\n                      margin: 2em auto 0;\n                      background: rgba(0, 0, 0, 0.4);\n                      padding: 1.1em;\n                      -webkit-box-sizing: border-box;\n                      -moz-box-sizing: border-box;\n                      box-sizing: border-box;\n                      border: 2px solid #ffffff;\n                    }\n                    .mw-dialog.mw-only-css .mw-close:before,\n                    .mw-dialog.mw-only-css .mw-close:after {\n                      display: block;\n                      content: " ";\n                      height: 0;\n                      width: 100%;\n                      border-bottom: 2px solid rgba(255, 255, 255, 0.8);\n                      transform: rotate(45deg);\n                      position: relative;\n                      top: 50%;\n                    }\n                    .mw-dialog.mw-only-css .mw-close:after {\n                      transform: rotate(-45deg);\n                    }\n                    .mw-dialog.mw-only-css .mw-dialog-container {\n                      max-width: 640px;\n                      overflow: auto;\n                      max-height: 100%;\n                      width: 80%;\n                      padding: 2em 1em;\n                      box-sizing: border-box;\n                      font-size: 14px;\n                      text-align: center;\n                      border: 2px solid #fff;\n                      border-radius: 1em !important;\n                      background-color: #fff;\n                      color: #666;\n                      margin: auto;\n                      box-shadow: 2px 2px 3em rgba(0, 0, 0, 0.2);\n                    }\n                    .mw-dialog.mw-only-css .mw-dialog-container .mw-app-icon {\n                      width: 6em;\n                      height: 6em;\n                    }\n                    .mw-dialog.mw-only-css .mw-dialog-container .mw-app-name {\n                      font-size: 1em;\n                      margin-bottom: 2em;\n                      color: #000;\n                    }\n                    .mw-dialog.mw-only-css .mw-dialog-container .mw-button {\n                      font-size: 1.5em;\n                      padding: 1em 2em;\n                    }\n                    ';
                    this.dialodStyleAppend || (this.appenStyle(t), this.dialodStyleAppend = !0);
                    var o = e.iconUrl;
                    o += "?imageMogr/v2/thumbnail/300x300";
                    var i = e.productName,
                        r = u.default.ios ? e.iosDownloadUrl : e.androidDownloadUrl,
                        a = '<div class="mw-dialog mw-download-dialog mw-only-css">\n            <div>\n                <div class="mw-dialog-container">\n                    <img class="mw-app-icon" src="' + o + '" onload="this.style.display=\'inline-block\'" onerror="this.style.display=\'none\'" />\n                    <h3 class="mw-app-name" onclick="location.reload();" style="font-weight: bold;">' + i + '</h3>\n                    <div>如果您没有安装,请点击立即安装</div>\n                    <p>\n                        <a class="linkBtn mw-button" href="' + r + '">立即安装</a>\n                    </p>\n                </div>\n                <a href="javascript:void(0);" class="mw-close" onclick="this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);"></a>\n            </div>\n        </div>';
                    n.innerHTML = a, a = n.getElementsByTagName("div")[0];
                    var s = a.querySelector(".mw-close"),
                        c = function() {
                            a && (document.body.removeChild(a), a = null)
                        };
                    s.addEventListener("click", c), s.addEventListener("touchend", c), document.body.appendChild(a)
                }
            }, {
                key: "setBg",
                value: function(e, n) {
                    n ? (e.style.backgroundImage = 'url("' + n + '")', e.classList.remove("default")) : (e.style.backgroundImage = "", e.classList.add("default"))
                }
            }, {
                key: "setTipsImg",
                value: function(e, n) {
                    var t = e.querySelector(".tips");
                    n ? (t.style.backgroundImage = 'url("' + n + '")', e.classList.remove("default")) : (t.style.backgroundImage = "", e.classList.add("default"))
                }
            }, {
                key: "setTitle",
                value: function(e, n) {
                    var t = e.querySelector("h3");
                    t && (t.innerHTML = n)
                }
            }, {
                key: "setText",
                value: function(e, n) {
                    var t = e.querySelector(".tips");
                    t && (t.innerHTML = n)
                }
            }, {
                key: "setAppName",
                value: function(n, t) {
                    e.each(n.querySelectorAll(".app-name"), function(e) {
                        e.innerHTML = t
                    })
                }
            }, {
                key: "setAppIcon",
                value: function(n, t) {
                    t && (t += "?imageMogr/v2/thumbnail/300x300", e.each(n.querySelectorAll(".app-icon img"), function(e) {
                        e.parentElement.style.backgroundImage = "none", e.setAttribute("src", t)
                    }))
                }
            }, {
                key: "setBtn",
                value: function(n) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = t;
                    e.each(n.querySelectorAll(".mw-button"), function(e) {
                        o.backgroundColor && (e.style.backgroundColor = o.backgroundColor), o.color && (e.style.color = o.color), o.btnDistanceBottom && (e.parentElement.style.bottom = o.btnDistanceBottom), t.innerHTML && (e.innerHTML = t.innerHTML), t.initAction ? t.initAction(e) : (t.url && (e.href = t.url), t.onclick && (e.onclick = t.onclick))
                    })
                }
            }, {
                key: "hidePage",
                value: function(e) {
                    var n = document.querySelector(e);
                    n && (n.classList.remove("show"), n.classList.add("hide"))
                }
            }, {
                key: "appenStyle",
                value: function(e) {
                    var n = document.createElement("style");
                    n.textContent = e, document.getElementsByTagName("head")[0].appendChild(n)
                }
            }], [{
                key: "each",
                value: function(e, n) {
                    for (var t = 0; t < e.length; t++) n(e[t], t)
                }
            }]), e
        }();
    n.default = f
}, function(e, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = {
        sha1: function(e) {
            var n, t, o, i, r, a, s, u, c, l, d = function(e, n) {
                    return e << n | e >>> 32 - n
                },
                h = function(e) {
                    var n, t, o = "";
                    for (n = 7; n >= 0; n--) t = e >>> 4 * n & 15, o += t.toString(16);
                    return o
                },
                f = [],
                p = 1732584193,
                m = 4023233417,
                v = 2562383102,
                g = 271733878,
                w = 3285377520,
                y = [];
            for (e = this.utf8_encode(e), l = e.length, t = 0; t < l - 3; t += 4) o = e.charCodeAt(t) << 24 | e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | e.charCodeAt(t + 3), y.push(o);
            switch (3 & l) {
                case 0:
                    t = 2147483648;
                    break;
                case 1:
                    t = e.charCodeAt(l - 1) << 24 | 8388608;
                    break;
                case 2:
                    t = e.charCodeAt(l - 2) << 24 | e.charCodeAt(l - 1) << 16 | 32768;
                    break;
                case 3:
                    t = e.charCodeAt(l - 3) << 24 | e.charCodeAt(l - 2) << 16 | e.charCodeAt(l - 1) << 8 | 128
            }
            for (y.push(t); 14 !== (15 & y.length);) y.push(0);
            for (y.push(l >>> 29), y.push(l << 3 & 4294967295), n = 0; n < y.length; n += 16) {
                for (t = 0; t < 16; t++) f[t] = y[n + t];
                for (t = 16; t <= 79; t++) f[t] = d(f[t - 3] ^ f[t - 8] ^ f[t - 14] ^ f[t - 16], 1);
                for (i = p, r = m, a = v, s = g, u = w, t = 0; t <= 19; t++) c = d(i, 5) + (r & a | ~r & s) + u + f[t] + 1518500249 & 4294967295, u = s, s = a, a = d(r, 30), r = i, i = c;
                for (t = 20; t <= 39; t++) c = d(i, 5) + (r ^ a ^ s) + u + f[t] + 1859775393 & 4294967295, u = s, s = a, a = d(r, 30), r = i, i = c;
                for (t = 40; t <= 59; t++) c = d(i, 5) + (r & a | r & s | a & s) + u + f[t] + 2400959708 & 4294967295, u = s, s = a, a = d(r, 30), r = i, i = c;
                for (t = 60; t <= 79; t++) c = d(i, 5) + (r ^ a ^ s) + u + f[t] + 3395469782 & 4294967295, u = s, s = a, a = d(r, 30), r = i, i = c;
                p = p + i & 4294967295, m = m + r & 4294967295, v = v + a & 4294967295, g = g + s & 4294967295, w = w + u & 4294967295
            }
            return c = h(p) + h(m) + h(v) + h(g) + h(w), c.toLowerCase()
        },
        utf8_encode: function(e) {
            return encodeURIComponent(e)
        }
    }
}, function(e, n) {}]);