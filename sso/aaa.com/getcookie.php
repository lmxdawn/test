<?php  
header('Content-Type:text/html; charset=utf-8');  



if (!empty($_COOKIE['sign'])) {
	echo "登录成功-----------------sign为：".$_COOKIE['sign'];
	exit;
}else{
	var_dump($_POST);
	exit;
}