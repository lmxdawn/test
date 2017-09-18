
# 说明

 测试文件：app.html 

# 首先是判断浏览器

```
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
```
# android5 及以上的高版本
```
// 延后50毫秒
setTimeout(function() {
    location.href = ‘自定义 URL’
}, 50)
```
# ios9 及以上的版本

```
setTimeout(function() {  // 必须要使用settimeout
    var a = document.createElement("a"); //创建a元素
    a.setAttribute("href", ‘自定义 URL’), a.style.display = "none", document.body.appendChild(a);
    var t = document.createEvent("HTMLEvents"); // 返回新创建的 Event 对象，具有指定的类型。
    t.initEvent("click", !1, !1) // 初始化新事件对象的属性
    a.dispatchEvent(t)  // 绑定事件
}, 0)
```
# 所有情况都用 iframe

```
document.querySelector("#" + iframe).src = ‘自定义 URL’ // 将iframe增加src
```
# 计算时差的方案打开APP

```
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
```

# 注意

> ios9 以上的 Universal Link 设置自行百度下（这个需要问问ios开发人员） 这里还有个我自己发现的 bug
> 在Android里面的qq里面打开
> 如果打开APP的同时立马返回到QQ里面，应用宝的下载页立马又重新打开APP。ios里面也有个情况，打开APP的同时立马用左上角的返回再次点击打开APP按钮则
> Universal Link 失效，跳转到配置好的 Universal Link 链接，大家有知道的解答哈，共同成长

**测试的配置所有用的 得到 的APP链接，为了方便**




