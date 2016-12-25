<?php
header("Content-type:text/html; charset=utf-8");

$data  = array();
$data["name"] = "章撒";
$callback = $_GET['jsoncallback'];


//echo json_encode($data);exit;
echo $callback.'('.json_encode($data).')';
exit;
?>