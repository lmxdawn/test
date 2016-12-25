<?php

header("Content-type:text/html; charset=utf-8");


require "RsaCrypt.php";


$rsa = RsaCrypt::getInstance();//实例化单例类


if ($_POST){
    //web端公钥加密的内容
    $pu_pwd = $_POST["pu_pwd"];

    echo '私钥解密公钥加密的内容：'.$rsa->decodePublicEncode($pu_pwd);
    exit;
}

$str = md5('123456');
echo '原始数据：'.$str . '<br><br><br>';

//私钥加密
$data = $rsa->privateKeyEncode($str);
echo '私钥加密：'.$data . '<br><br><br>';


//公钥解密
$decode = $rsa->decodePrivateEncode($data);
echo '公钥解密：'.$decode . '<br><br><br>';


//公钥加密
$str = md5('654789');
echo '原始数据：'.$str . '<br><br><br>';

$pdata = $rsa->publicKeyEncode($str);
echo '公钥加密：'.$pdata . '<br><br><br>';


//私钥解密
$pdecode = $rsa->decodePublicEncode($pdata);
echo '私钥解密：'.$pdecode . '<br><br><br>';


//私钥解密




?>
