
!function () {

    // 判断浏览器
    var Navigator = navigator.userAgent;
    var ifChrome = Navigator.match(/Chrome/i) != null && Navigator.match(/Version\/\d+\.\d+(\.\d+)?\sChrome\//i) == null ? true : false;
    var ifAndroid = (Navigator.match(/(Android);?[\s\/]+([\d.]+)?/)) ? true : false;
    var ifiPad = (Navigator.match(/(iPad).*OS\s([\d_]+)/)) ? true : false;
    var ifiPhone = (!ifiPad && Navigator.match(/(iPhone\sOS)\s([\d_]+)/)) ? true : false;
    var ifIos = Navigator.match(/iPhone|iPad|iPd/i) ? true : false;
    var ifSafari = ifIos && Navigator.match(/Safari/);
    // ios 设备的版本号
    var iosVersion = Navigator.match(/OS\s*(\d+)/)
    iosVersion = iosVersion ? (iosVersion[1] || 0) : 0;
    // 安卓版本号
    var androidVersion = Navigator.match(/Android\s*(\d+)/)
    androidVersion = androidVersion ? (androidVersion[1] || 0) : 0;

    // 是否从微信打开
    var ifWeixin = Navigator.indexOf("MicroMessenger") >= 0; // weixin
    var iframe = "plugIn_downloadAppPlugIn_loadIframe";
    var isIfr = false;
    // 绑定事件
    function bind(dom, event, fun) { // bind event
        if (dom.addEventListener) {
            dom.addEventListener(event, fun, !1)
        }else if (dom.attachEvent){
            dom.attachEvent(event, fun)
        }else{
            throw new Error('不存在的方法')
        }
    }

    // 打开APP
    function openApp(option,isAutoLaunchApp) {

        var openLink = null,
            downloadUrl = null;
        if (ifIos){
            openLink = option.iosLink || null
            // 开启应用宝跳转
            downloadUrl = (option.iosYyb || false) ? (option.yybDownloadUrl || null) : (option.iosDownloadUrl || null)
        }else if (ifAndroid){
            openLink = option.androidLink || null
            // 开启应用宝跳转
            downloadUrl = (option.androidYyb || false) ? (option.yybDownloadUrl || null) : (option.androidDownloadUrl || null)
        }
        var params = option.params || []
        openLink = formatUrl(openLink,params) //格式化url 加参数
        // android5 及以上的高版本
        if (ifAndroid && androidVersion >= 5) {
            // 延后50毫秒
            setTimeout(function() {
                // 如果为自动跳转直接用应用宝链接
                if (isAutoLaunchApp) openLink = (option.yybDownloadUrl || null);
                location.href = openLink
            }, 50)

        }
        // 设备是ios9 及以上的版本
        if (ifIos && iosVersion >= 9){
            // 如果是自动跳转或者未开启Universal Link 用之前的链接 否则用 Universal Link
            var iosUniversalLinkEnabled = (option.iosUniversalLinkEnabled || false) ? false : true
            openLink = isAutoLaunchApp || iosUniversalLinkEnabled ? openLink : (option.ios9Link || null)
            // setTimeout(function() {  // 必须要使用settimeout
            //     var a = document.createElement("a"); //创建a元素
            //     a.setAttribute("href", openLink), a.style.display = "none", document.body.appendChild(a);
            //     var t = document.createEvent("HTMLEvents"); // 返回新创建的 Event 对象，具有指定的类型。
            //     t.initEvent("click", !1, !1) // 初始化新事件对象的属性
            //     a.dispatchEvent(t)  // 绑定事件
            // }, 0)
            document.location.href = openLink;
            // 不是 Safari 浏览器才跳转下载链接
            if (!ifSafari){
                setTimeout(function () {
                    document.location.href = downloadUrl;
                }, 100)
            }
            setTimeout(function () {
                document.location.reload();
            }, 1000)
            // 如果是自动跳转 则直接返回
            if (isAutoLaunchApp) return
        }else {
            document.querySelector("#" + iframe).src = openLink // 将iframe增加src
        }
        //使用计算时差的方案打开APP
        var checkOpen = function (cb){
            var _clickTime = +(new Date());
            function check(elsTime) {
                if ( elsTime > 3000 || document.hidden || document.webkitHidden) {
                    cb(1);
                } else {
                    cb(0);
                }
            }
            //启动间隔20ms运行的定时器，并检测累计消耗时间是否超过3000ms，超过则结束
            var _count = 0, intHandle;
            intHandle = setInterval(function(){
                _count++;
                var elsTime = +(new Date()) - _clickTime;
                if (_count>=100 || elsTime > 3000 ) {
                    clearInterval(intHandle);
                    check(elsTime);
                }
            }, 20);
        }
        checkOpen(function(opened){
            // APP没有打开成功  并且开启自动跳转到下载页
            if(opened === 0 && option.autoRedirectToDownloadUrl){
                location.href = downloadUrl;
            }
        });

    }

    
    // 格式化url
    function formatUrl(url, params) {
        var arr = []
        for (var p in params) {
            if (p && params[p]) {
                arr.push(p + '=' + encodeURIComponent(params[p]))
            }
        }
        arr = arr.join('&');
        var u = url.split("?");
        var newUrl = null;
        if (u.length == 2) {
            newUrl = u[0] + "?" + u[1] + "&" + arr
        } else {
            newUrl = u[0] + "?" + arr
        }
        return newUrl;
    }

    // 初始化
    function init(option) {
        if (option.button){
            option.button.setAttribute('href','javascript:void(0)')
            bind(option.button, 'click', function () {
                if (!isIfr){
                    var ifr = document.createElement("iframe");
                    ifr.id = iframe;
                    document.body.appendChild(ifr);
                    document.getElementById(iframe).style.display = "none";
                    document.getElementById(iframe).style.width = "0px";
                    document.getElementById(iframe).style.height = "0px";
                    isIfr = true
                }
                // 打开APP
                openApp(option,false)
            })
        }
        // 如果开启自动打开
        if (option.autoLaunchApp){
            // 打开APP
            openApp(option,true)
        }

    }

    Link = function (option) {
        init(option)
    }

}();