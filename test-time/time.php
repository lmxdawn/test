<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2017/1/5
 * Time: 12:47
 */

$time = strtotime("-1 days",time());

echo date("Y-m-d H:i:s",$time);