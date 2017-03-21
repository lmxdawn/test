
<?php

if (!empty($_POST)) {

	$data = $_POST;
	$token = '';

	if(empty($data['user_name']) || empty($data['pwd'])){ 
	    $data['err_no'] = 2;
		$data['msg'] = '用户名或密码为空';
	}else{
		if (1 != 1) {
			//判断账号是否有效
			$data['err_no'] = 0;
			$data['msg'] = '登录成功';
		}else{
			$data['err_no'] = 1;
			$data['msg'] = '登录失败';
		}
		$token = $data['user_name'].$data['pwd'];
		
	}

	$data['token'] = $token;

	unset($data['pwd']);

	$url = $data['staticpage'];

	unset($data['staticpage']);

	$pame = http_build_query($data);
	//exit($pame);

	
}

?>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body>


<iframe src="http://www.aaa.com/setcookie.php?sign=456789" width="0" height="0" style="display: none;"></iframe>
<iframe src="http://www.bbb.com/setcookie.php?sign=456789" width="0" height="0" style="display: none;"></iframe>


<script type="text/javascript">


	var href = decodeURIComponent("<?php echo $url?>")+"?<?php echo $pame?>"

	if(window.location){
	    window.location.replace(href);
	}else{
	   document.location.replace(href); 
	}
</script>
</body>
</html>

