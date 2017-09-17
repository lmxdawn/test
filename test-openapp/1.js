
(function(){
    // 判断浏览器
    var Navigator = navigator.userAgent;
    var ifChrome = Navigator.match(/Chrome/i) != null && Navigator.match(/Version\/\d+\.\d+(\.\d+)?\sChrome\//i) == null ? true : false;
    var ifAndroid = (Navigator.match(/(Android);?[\s\/]+([\d.]+)?/)) ? true : false;
    var ifiPad = (Navigator.match(/(iPad).*OS\s([\d_]+)/)) ? true : false;
    var ifiPhone = (!ifiPad && Navigator.match(/(iPhone\sOS)\s([\d_]+)/)) ? true : false;
    var ifSafari = (ifiPhone || ifiPad) && Navigator.match(/Safari/);
    var version = 0;
    ifSafari && (version = Navigator.match(/Version\/([\d\.]+)/));

    version = parseFloat(version[1], 10);
    // 是否从微信打开
    var ifWeixin = navigator.userAgent.indexOf("MicroMessenger") >= 0; // weixin
    var j = false;
    var iframe = "plugIn_downloadAppPlugIn_loadIframe";
    var t = false;
    var i = 0;
    var B = {};
    var b = {};
    var selector = null;
    var Hquery = {};
    // 判断当前使用的js框架是zepto还是jquery
    var Query = window.Zepto || window.jQuery ? true : false;
    var g = [];
    // 是否存在html5的localStorage 存储
    var v = window.localStorage ? true : false;
    var o = "mdownloadAppPlugInskip";
    var p = null;

    function m() { // 打印时间 例如:2016-5-18
        var M = new Date();
        var N = M.getFullYear();
        var O = M.getMonth() + 1;
        var L = M.getDate();
        strDate = N + "-" + O + "-" + L;
        return strDate
    }
    // 微信相关操作
    function r() { // weixin api
        WeixinJSBridge.invoke("getInstallState", {
            packageName: "com.jingdong.app.mall",
            packageUrl: "openApp.jdMobile://"
        }, function(M) {
            var N = M.err_msg,
                L = 0;
            if (N.indexOf("get_install_state:yes") > -1) {
                j = true
            }
        })
    }
    // 根据是否存在js框架进行dom和时间的绑定
    function bind(dom, event, fun) { // bind event
        if (Query) {
            selector("#" + dom).bind(event, fun)
        } else {
            selector("#" + dom).addEventListener(event, fun, !1)
        }
    }

    function z(L) {
        var M = (L || "mGen") + (++i);
        return M
    }
    // 微信操作
    if (ifWeixin) { // if navigitor is weixin
        if (window.WeixinJSBridge && WeixinJSBridge.invoke) {
            r()
        } else {
            document.addEventListener("WeixinJSBridgeReady", r, !1)
        }
    }

    // 如果存在js框架
    if (Query) {
        selector = window.$;
        Hquery = window.$
    } else {
        selector = function(obj) {
            if (typeof obj == "object") {
                return obj
            }
            return document.querySelector(obj);
        };
        if (!window.$) {
            window.$ = Hquery = selector
        } else {
            Hquery = window.$
        }
    }
    window.onblur = function() {
        for (var L = 0; L < g.length; L++) {
            clearTimeout(g[L])
        }
    };
    // 设置cookie。
    function e(N) {
        var M = document.cookie.indexOf(N + "=");
        if (M == -1) {
            return ""
        }
        M = M + N.length + 1;
        var L = document.cookie.indexOf(";", M);
        if (L == -1) {
            L = document.cookie.length
        }
        return document.cookie.substring(M, L)
    }
    // 设置cookie
    function l(N, P, L, Q, O) {
        var R = N + "=" + escape(P);
        if (L != "") {
            var M = new Date();
            M.setTime(M.getTime() + L * 24 * 3600 * 1000);
            R += ";expires=" + M.toGMTString()
        }
        if (Q != "") {
            R += ";path=" + Q
        }
        if (O != "") {
            R += ";domain=" + O
        }
        document.cookie = R
    }

    // 打开的链接集合
    function F(L) {
        var url = {
            downAppURl: "http://h5.m.jd.com/active/download/download.html?channel=jd-m",
            downAppIos: "http://union.m.jd.com/download/go.action?to=http%3A%2F%2Fitunes.apple.com%2Fcn%2Fapp%2Fid414245413&client=apple&unionId=12532&subunionId=m-top&key=e4dd45c0f480d8a08c4621b4fff5de74",
            downWeixin: "http://a.app.qq.com/o/simple.jsp?pkgname=com.jingdong.app.mall&g_f=991850",
            downIpad: "https://itunes.apple.com/cn/app/jing-dong-hd/id434374726?mt=8",
            inteneUrl: "openApp.jdMobile://360buy?type=1",
            inteneUrlParams: null,
            openAppBtnId: "",
            closePanelBtnId: "",
            closePanelId: "",
            closeCallblack: null,
            closeCallblackSource: null,
            cookieFlag: null,
            noRecord: false,
            sourceType: "JSHOP_SOURCE_TYPE",
            sourceValue: "JSHOP_SOURCE_VALUE",
            openAppEventId: "MDownLoadFloat_OpenNow",
            closePanelEventId: "MDownLoadFloat_Close"
        };
        if (L) {
            for (var M in L) {
                if (M && L[M]) {
                    url[M] = L[M]
                }
            }
        }
        return url
    }
    // 敲黑板 重点内容。看京东是怎么解决兼容问题的。
    function openApp(N, L) { // openApp
        var R = h(N); //获取相对应的url
        var O = null;
        if (ifWeixin) { // 如果是微信端
            var M = null;
            if (j) {
                M = R
            } else {
                M = N.downWeixin
            }
            location.href = M; // 直接使用location.href打开
            return
        }
        if (ifiPad) { // 如果是ipad
            O = N.downIpad
        } else {
            if (ifiPhone) { // 如果是iphone
                O = N.downAppIos
            } else {
                O = N.downAppURl
            }
        }

        if (ifChrome) { // 如果是chrome
            if (ifAndroid) { //安卓浏览器
                var Q = R;
                R = y(Q);
                // 延后50毫秒
                setTimeout(function() {
                    window.location.href = R
                }, 50)
            }
        }
        if (ifSafari && version >= 9) { // 判断safari版本 如果大于9
            setTimeout(function() {  // 必须要使用settimeout
                var S = document.createElement("a"); //创建a元素
                S.setAttribute("href", R), S.style.display = "none", document.body.appendChild(S);
                var T = document.createEvent("HTMLEvents"); // 返回新创建的 Event 对象，具有指定的类型。
                T.initEvent("click", !1, !1)// 初始化新事件对象的属性,   S.dispatchEvent(T)  // 绑定事件
            }, 0)
        } else {
            document.querySelector("#" + iframe).src = R // 将iframe增加src
        }
        var P = Date.now();
        setTimeout(function() {
            if (L) {
                var S = setTimeout(function() {
                    x(P, O)
                }, 1500);
                g.push(S)
            }
        }, 100)
    }
    // x方法
    function x(N, downUrl) {
        var L = Date.now();
        if (N && (L - N) < (1500 + 200)) {
            window.location.href = downUrl
        }
    }

    function h(N) {
        var V = [];
        var P = N.inteneUrlParams;
        var T = {
            category: "jump",
            des: "productDetail"
        };
        if (N.sourceType && N.sourceValue) {
            T.sourceType = N.sourceType;
            T.sourceValue = N.sourceValue;
            if (P && !P.sourceType && !P.sourceValue) {
                P.sourceType = N.sourceType;
                P.sourceValue = N.sourceValue
            }
        }
        if (P) {
            for (var U in P) {
                if (U && P[U]) {
                    V.push('"' + U + '":"' + P[U] + '"')
                }
            }
        } else {
            for (var U in T) {
                if (U && T[U]) {
                    V.push('"' + U + '":"' + T[U] + '"')
                }
            }
        }
        try {
            var Q = MPing.EventSeries.getSeries();
            if (Q) {
                var W = JSON.parse(Q);
                W.jdv = encodeURIComponent(e("__jdv"));
                W.unpl = encodeURIComponent(e("unpl"));
                W.mt_xid = encodeURIComponent(e("mt_xid"));
                W.mt_subsite = encodeURIComponent(e("mt_subsite"))
            }
            var S = {
                mt_subsite: encodeURIComponent(e("mt_subsite")),
                __jdv: encodeURIComponent(e("__jdv")),
                unpl: encodeURIComponent(e("unpl")),
                __jda: encodeURIComponent(e("__jda"))
            };
            Q = JSON.stringify(W);
            V.push('"m_param":' + Q);
            V.push('"SE":' + JSON.stringify(S))
        } catch (R) {
            V.push('"m_param":null')
        }
        var M = "{" + V.join(",") + "}";
        var O = N.inteneUrl.split("?");
        var L = null;
        if (O.length == 2) {
            L = O[0] + "?" + O[1] + "&params=" + M
        } else {
            L = O[0] + "?params=" + M
        }
        return L
    }

    function y(L) {
        return "intent://m.jd.com/#Intent;scheme=" + L + ";package=com.jingdong.app.mall;end"
    }

    function n(L) {
        if (L.openAppBtnId) {
            B[L.openAppBtnId] = L;
            G(L.openAppBtnId, L.openAppEventId);
            bind(L.openAppBtnId, "click", function() {
                var P = this.getAttribute("id");
                var M = B[P];
                if (!t) {
                    var N = document.createElement("iframe");
                    N.id = iframe;
                    document.body.appendChild(N);
                    document.getElementById(iframe).style.display = "none";
                    document.getElementById(iframe).style.width = "0px";
                    document.getElementById(iframe).style.height = "0px";
                    t = true
                }
                var O = M.cookieFlag ? "downloadAppPlugIn_downCloseDate_" + M.cookieFlag : "downloadAppPlugIn_downCloseDate";
                l(O, Date.now() + "_2592000000", 60, "/", "m.jd.com");
                l(O, Date.now() + "_2592000000", 60, "/", "m.jd.hk");
                openApp(M, true)
            })
        }
    }

    function D(M) {
        if (M.closePanelBtnId && M.closePanelId) {
            B[M.closePanelBtnId] = M;
            G(M.closePanelBtnId, M.closePanelEventId);
            var Q = M.cookieFlag ? "downloadAppPlugIn_downCloseDate_" + M.cookieFlag : "downloadAppPlugIn_downCloseDate";
            var O = e(Q);
            var P = null;
            if (O) {
                P = O.split("_");
                if (P.length == 2) {
                    P[0] = parseInt(P[0], 10);
                    P[1] = parseInt(P[1], 10)
                } else {
                    P = null
                }
            }
            var L = Date.now();
            if (Html5Plus() || (!M.noRecord && P && P.length == 2 && (L - P[0]) < P[1])) {
                document.querySelector("#" + M.closePanelId).style.display = "none";
                if (M.closeCallblack) {
                    var N = M.closeCallblackSource ? M.closeCallblackSource : null;
                    M.closeCallblack.call(N)
                }
                return
            } else {
                document.querySelector("#" + M.closePanelId).style.display = "block"
            }
            bind(M.closePanelBtnId, "click", function() {
                var U = this.getAttribute("id");
                var R = B[U];
                var T = R.cookieFlag ? "downloadAppPlugIn_downCloseDate_" + R.cookieFlag : "downloadAppPlugIn_downCloseDate";
                if (!R.noRecord) {
                    l(T, Date.now() + "_259200000", 60, "/", "m.jd.com");
                    l(T, Date.now() + "_259200000", 60, "/", "m.jd.hk")
                }
                document.querySelector("#" + R.closePanelId).style.display = "none";
                if (R.closeCallblack) {
                    var S = R.closeCallblackSource ? R.closeCallblackSource : null;
                    R.closeCallblack.call(S)
                }
            })
        }
    }

    function Html5Plus() { // htmlplus
        if (Navigator.indexOf("Html5Plus") >= 0) {
            return true
        } else {
            return false
        }
    }

    function G(P, M) {
        try {
            var O = document.getElementById(P);
            var L = O.className;
            if (L) {
                L = L + " J_ping"
            } else {
                L = "J_ping"
            }
            O.className = L;
            O.setAttribute("report-eventid", M)
        } catch (N) {}
    }

    function C(L) {
        var M = F(L);
        n(M);
        D(M)
    }
    Hquery.downloadAppPlugIn = C;
    Hquery.downloadAppPlugInOpenApp = function(L) {
        var M = F(L);
        openApp(M);
    }
});
