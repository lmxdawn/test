<?php

/**
 * 短信发送
 *
 * @param string $uid 短信账号
 * @param string $pwd MD5接口密码
 * @param string $mobile 手机号码
 * @param string $content 短信内容
 * @param string $template 短信模板ID
 * @return array
 */
function sendSMS($uid, $pwd, $mobile, $content, $type = 1, $template = '') {

    switch ($type) {
        case 2:
            $apiUrl = 'http://60.205.14.180:9000/HttpSmsMt';  //短信接口地址
            $mttime = date("YmdHis");
            $data = array(
                'name' => $uid, //用户账号
                'pwd' => md5($pwd . $mttime), //MD5位32密码
                'content' => $content, //内容
                'phone' => $mobile, //号码
                'subid' => '', //接口返回信息格式 json\xml\txt
                'mttime' => $mttime, //变量模板ID 全文模板不用填写
            );

            break;
        case 3:
            $apiUrl = 'http://60.205.14.180:9000/HttpSmsMt';  //短信接口地址
            $mttime = date("YmdHis");
            $data = array(
                'name' => $uid, //用户账号
                'pwd' => md5($pwd . $mttime), //MD5位32密码
                'content' => $content, //内容
                'phone' => $mobile, //号码
                'subid' => '', //接口返回信息格式 json\xml\txt
                'mttime' => $mttime, //变量模板ID 全文模板不用填写
            );

            break;
        default:

            $apiUrl = 'http://api.sms.cn/sms/';         //短信接口地址
            $data = array(
                'ac' => 'send',
                'uid' => $uid, //用户账号
                'pwd' => $pwd, //md5($pwd.$uid),  //MD5位32密码,密码和用户名拼接字符
                'mobile' => $mobile, //号码
                'content' => $content, //内容
                'template' => $template, //变量模板ID 全文模板不用填写
                'format' => 'json', //接口返回信息格式 json\xml\txt
            );

            break;
    }
    $result = getSMS($apiUrl, $data);
    $result["response"] = json_to_array($result["response"]); //GET方式提交

    return $result;
}

/**
 * GET方式HTTP请求
 *
 * @param string $url URL地址
 * @param array $data POST参数
 * @return string
 */
function getSMS($url, $data = '') {
    $get = '';
    while (list($k, $v) = each($data)) {
        $get .= $k . "=" . urlencode($v) . "&"; //转URL标准码
    }
    return curl($url . '?' . $get);
}

function curl($url, $method = "GET", $postDate = "") {
    $ci = curl_init ();
    curl_setopt ( $ci, CURLOPT_URL, $url );
    //curl_setopt ( $ci, CURLOPT_PORT,80);
    curl_setopt ( $ci, CURLOPT_TIMEOUT, 200 );
    curl_setopt ( $ci, CURLOPT_RETURNTRANSFER, 1 );
    curl_setopt ( $ci, CURLOPT_FORBID_REUSE, 0 );
    curl_setopt ( $ci, CURLOPT_CUSTOMREQUEST, $method );
    if ($postDate) {
        curl_setopt ( $ci, CURLOPT_POSTFIELDS, $postDate );
    }
    $response = curl_exec ( $ci );
    $rinfo = curl_getinfo($ci);
    return array("response"=>$response,"rinfo"=>$rinfo);
}


//数字随机码
function randNumber($len = 6) {
    $chars = str_repeat('0123456789', 10);
    $chars = str_shuffle($chars);
    $str = substr($chars, 0, $len);
    return $str;
}


//把json字符串转数组
function json_to_array($p) {
    if (mb_detect_encoding($p, array('ASCII', 'UTF-8', 'GB2312', 'GBK')) != 'UTF-8') {
        $p = iconv('GBK', 'UTF-8', $p);
    }
    return json_decode($p, true);
}

// 打印函数
function p($arr) {
    echo "<pre>";
    print_r($arr);
    echo "<pre>";
    return $arr;
}

/**
* 日志写入接口
* @access public
* @param string $log 日志信息
* @param string $destination  写入目标
* @return void
*/
function write($log,$destination='') {
    $now = date('c');
    if(empty($destination)){
        $destination = './log/'.date('y_m_d').'.log';
    }
    // 自动创建日志目录
    $log_dir = dirname($destination);
    if (!is_dir($log_dir)) {
        mkdir($log_dir, 0755, true);
    }        
    //检测日志文件大小，超过配置大小则备份日志文件重新生成
    if(is_file($destination) && floor(2097152) <= filesize($destination) ){
        rename($destination,dirname($destination).'/'.time().'-'.basename($destination));
    }
    error_log("[{$now}] ".$_SERVER['REMOTE_ADDR'].' '.$_SERVER['REQUEST_URI']."\r\n{$log}\r\n", 3,$destination);
}



$ch = curl("http://www.baidu.com");


$msg = "";
$rinfo = $ch['rinfo'];
$msg = $msg."请求状态code码：{$rinfo['http_code']}；";
$msg = $msg."头信息大小：{$rinfo['header_size']}；";
$msg = $msg."请求资源大小：{$rinfo['request_size']}；";
$msg = $msg."ssl验证结果：{$rinfo['ssl_verify_result']}；";
$msg = $msg."重定向数量：{$rinfo['redirect_count']}；";
$msg = $msg."请求总时间：{$rinfo['total_time']}；";
$msg = $msg."查找时间：{$rinfo['namelookup_time']}；";
$msg = $msg."资源链接时间：{$rinfo['connect_time']}；";
$msg = $msg."预计时间：{$rinfo['pretransfer_time']}；";
$msg = $msg."上传大小：{$rinfo['size_upload']}；";
$msg = $msg."下载大小：{$rinfo['size_download']}；";
$msg = $msg."下载速度：{$rinfo['speed_download']}；";
$msg = $msg."上传速度：{$rinfo['speed_upload']}；";
$msg = $msg."下载内容总长度：{$rinfo['download_content_length']}；";
$msg = $msg."上传内容总长度：{$rinfo['upload_content_length']}；";

p($ch['rinfo']);
//write(json_encode());








?>