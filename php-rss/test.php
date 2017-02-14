<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2017/2/13
 * Time: 18:04
 */


include_once("RSS.class.php");//引入RSS PHP类
$RSS= new RSS("名称","地址","描述","RSS频道图标");
$RSS->AddItem("日志的标题","日志的地址","日志的摘要","日志的发布日期");
$RSS->Display();//输出RSS内容
