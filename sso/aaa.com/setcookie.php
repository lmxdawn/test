<?php  

header('Content-Type:text/html; charset=utf-8');  

//header('P3P: CP="CURa ADMa DEVa PSAo PSDo OUR BUS UNI PUR INT DEM STA PRE COM NAV OTC NOI DSP COR"');  
 if (!empty($_GET['sign'])) {
 	
 	setcookie("sign",$_GET['sign'], time()+3600, "/", ".aaa.com");
 }

?>


