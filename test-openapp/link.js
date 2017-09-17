
!function () {

    // 判断浏览器
    var Navigator = navigator.userAgent;
    var ifChrome = Navigator.match(/Chrome/i) != null && Navigator.match(/Version\/\d+\.\d+(\.\d+)?\sChrome\//i) == null ? true : false;
    var ifAndroid = (Navigator.match(/(Android);?[\s\/]+([\d.]+)?/)) ? true : false;
    var ifiPad = (Navigator.match(/(iPad).*OS\s([\d_]+)/)) ? true : false;
    var ifiPhone = (!ifiPad && Navigator.match(/(iPhone\sOS)\s([\d_]+)/)) ? true : false;
    var ifIos = (ifiPhone || ifiPad);
    var ifSafari = ifIos && Navigator.match(/Safari/);
    var safariVersion = 0
    ifSafari && (safariVersion = Navigator.match(/Version\/([\d\.]+)/)[1]);
    safariVersion = parseFloat(safariVersion, 10);


    // 是否从微信打开
    var ifWeixin = navigator.userAgent.indexOf("MicroMessenger") >= 0; // weixin
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
    function openApp(option) {

        var openLink = null,
            downloadUrl = null;
        if (ifIos){
            openLink = option.iosLink || null
            downloadUrl = option.iosDownloadUrl || null
        }else if (ifAndroid){
            openLink = option.androidLink || null
            downloadUrl = option.androidDownloadUrl || null
        }

        var params = option.params || []
        openLink = formatUrl(openLink,params) //格式化url 加参数

        //在浏览器打开，判断是在移动端还是在PC端
        var matchVersion,locationApp = false,deviceVersion
        if(matchVersion = Navigator.match(/OS\s*(\d+)/)){
            //IOS设备的浏览器
            deviceVersion = matchVersion[1] || 0;
            deviceVersion >= 9 && (locationApp = true);
        }else if(matchVersion = Navigator.match(/Android\s*(\d+)/)){
            //Android的设备
            deviceVersion = matchVersion[1] || 0;
            deviceVersion >= 5 && (locationApp = true);

        }

        if(ifiPhone && ifWeixin){
            var ifr = document.querySelector("#" + iframe);
            ifr.src = openLink // 将iframe增加src
        }

        // if (ifChrome) { // 如果是chrome
        //     if (ifAndroid) { //安卓浏览器
        //         // 延后50毫秒
        //         setTimeout(function() {
        //             window.location.href = openLink
        //         }, 0)
        //     }
        // }else
        location.href = openLink;
        if (locationApp){

            // location.href = openLink;
            // setTimeout(function() {
            //     location.href = downloadUrl;
            // }, 250);
            // setTimeout(function() {
            //     location.reload();
            // }, 1000);
            setTimeout(function() {  // 必须要使用settimeout
                var a = document.createElement("a"); //创建a元素
                a.setAttribute("href", openLink), a.style.display = "none", document.body.appendChild(a);
                var t = document.createEvent("HTMLEvents"); // 返回新创建的 Event 对象，具有指定的类型。
                t.initEvent("click", !1, !1) // 初始化新事件对象的属性
                    ,a.dispatchEvent(t)  // 绑定事件
            }, 0)
        }else {
            var ifr = document.querySelector("#" + iframe);
            ifr.src = openLink // 将iframe增加src
        }

        // ios9 和 Android5 以前的版本
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
            if(opened === 0){
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
                openApp(option)
            })
        }

    }

    Link = function (option) {
        init(option)
    }

}();