<?php

if ($_POST) {

	if(empty($_POST['user_name'])){
	    exit('用户名不能为空');
	}
	if(empty($_POST['pwd'])){
	    exit('密码不能为空');
	}

	$sign = $_POST['user_name'].$_POST['pwd'];

    exit(json_encode(['sign' => $sign]));
}
?>

<!--引入第三方sso js文件-->
<script type="text/javascript" src="http://www.ccc.com/js/sso.js"></script>

<script type="text/javascript">
    window.onload = function() {

        var form = document.getElementById("form")
        form.addEventListener('submit', function(event) {
            // sso 登录
            Sso.login({
                iframeId: 'ifActionResult',
                //iframes : [],
                success: function (res) {
                    console.log(res);
                }
            });

        })
    }



</script>

<h1 id="myHeader">这是标题</h1>
<p>点击标题，会提示出它的值。</p>

<form id="form" target="ifTmp" action="http://www.ccc.com/login.php" method="post">
<!-- <form id="form" target="ifTmp" action="http://www.aaa.com/a_getcookie.php" method="post"> -->

	<input type="test" name="user_name" id="user_name" value="">
	<input type="test" name="pwd" id="pwd" value="">

	<input type="submit" name="" value="登录">

</form>

<iframe id="ifActionResult" name="ifTmp" width="1px" height="1px" style="display: none;"></iframe>

<a href="http://kf.workerman.net" web-id="lmxdawn" id="workerman-kefu">在线客服</a>
<script src="http://kf.workerman.net/static/layui/layui.js"></script>
<script src="http://kf.workerman.net/static/layui/workerman-kefu.js"></script>




