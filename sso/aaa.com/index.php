    
<?php

header('Content-Type:text/html; charset=utf-8');  



if (!empty($_COOKIE['sign'])) {
	echo "登录成功-----------------sign为：".$_COOKIE['sign'];
	exit;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script type="text/javascript" src="./js/jquery-1.7.min.js"></script>
</head>
<body>

	尚未登录
	<a href="http://www.bbb.com/setcookie.php">设置b站点cookie</a>

</body>
</html>
