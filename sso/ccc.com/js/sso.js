/**
 * Created by Host-0034 on 2017/3/16.
 */


;!function (win) {
    "use strict";

    var Sso = function(){
        this.v = '1.0.0'; //版本号
    };
    Sso.fn = Sso.prototype;
    var doc = document, config = {
        'iframeId' : '',
        'iframes'  : [{
            'url' : 'http://www.bbb.com/setcookie.php'
        }]
    }

    /**
     * 配置
     * @param options
     * @returns {Sso}
     */
    Sso.fn.config = function(options){
        options = options || {};
        for(var key in options){
            config[key] = options[key];
        }
        return this;
    };

    /**
     * 登录操作
     * @param options 登录的iframe id
     * @returns {Sso}
     */
    Sso.fn.login = function(options){

        var iframes = options.iframes || config.iframes;

        var iframeId = options.iframeId || config.iframeId;

        var obj = doc.getElementById(iframeId)
            ,handler = function () {
                var res //返回的值
                    ,$iframe //页面要加载的iframe

                try {
                    res = obj.contentWindow.document.body.innerHTML
                } catch(e) {
                    alert('返回值存在跨域');
                }

                try {
                    res = JSON.parse(res);
                } catch(e){
                    res = {};
                    alert('返回值必须是json格式')
                }

                if (typeof res.sign != 'undefined') {
                    obj.contentWindow.document.body.innerHTML = '';
                    for(var i in iframes){
                        if (typeof iframes[i].url != 'undefined'){
                            $iframe = doc.createElement("iframe");
                            $iframe.src = iframes[i].url + '?sign=' + res.sign;
                            $iframe.frameborder = 0;
                            $iframe.width = 0;
                            $iframe.height = 0;
                            $iframe.style.display = 'none';
                            doc.body.appendChild($iframe);
                        }
                    }
                }

                // 执行回调
                typeof options.success === 'function' && options.success(res);

            }

        //for most explores
        if (null != obj && null != obj.addEventListener) {
            obj.addEventListener('load', handler, false);
        }
        //for IE
        else if (null != obj && null != obj.attachEvent) {
            obj.attachEvent('onload', handler);
        }
        //not support
        else {
            //选择dom元素错误
            throw new Error('不支持该dom元素');
        }

        return this;
    };


    win.Sso = new Sso();

}(window)
