<?php

/*
 * curl 请求类
 *
 * @auther  ken<lmxdawn@gmail.com>
 * @time    2016-12-16
 */

namespace lmxdawn\curl;

class Curl {

    private  $url = ''; // 访问的url
    private  $oriUrl = ''; // referer url
    private  $data = array(); // 可能发出的数据 post,put
    private  $method = 'get'; // 访问方式，默认是GET请求
    private  $param = array();// 数组参数
    private  $ship = ''; // 带#号的参数
    private  $config = array(
        'methods' => array('get', 'post', 'put', 'delete'),//允许请求的类型
    );


    //保存例实例在此属性中
    private static $_instance;

    /**
     * Curl constructor.私有构造函数，防止外界实例化对象
     * @param array $config 配置
     */
    private function __construct($config = array()) {

        if (!empty($config) && is_array($config)){
            $this->config = array_merge($this->config,$config);
        }


    }

    /**
     * @param $method
     * @return bool
     */
    private function is_method($method){

        return in_array($method,$this->config['methods']);

    }

    /**
     * 私有克隆函数，防止外办克隆对象
     */
    private function __clone() {}



    /**
     * 静态方法，单例统一访问入口
     * @return Curl
     */
    public static function getInstance($config = array()) {

        if (is_null ( self::$_instance ) || isset ( self::$_instance )) {
            self::$_instance = new self ($config);
        }
        return self::$_instance;
    }


    /**
     * 发送请求 http请求
     * @param $url 请求地址
     * @param string $method 类型
     * @param array $data 数据
     * @return mixed
     */
    public function send_http($url, $method = 'get', $data = array()) {
        if (!$url) exit('url can not be null');

        $this->url = $url;
        $urlArr = parse_url($url);//解析URL
        $this->oriUrl = $urlArr['scheme'] .'://'. $urlArr['host'];
        $this->method = $this->is_method($method) ? $method : 'get';
        $this->data = $data;
        $func = $this->method . '_request';
        // 类方法不存在
        if (!method_exists($this,$func)){
            exit('Class method does not exist');
        }
        return $this->$func();
    }

    /**
     * 发送HTTP请求方法，目前只支持CURL发送请求
     * @param  string $url    请求URL
     * @param  string $method 请求方法
     * @param  string  $data   POST的数据，GET请求时该参数无效
     * @param  array  $param  GET参数数组
     * @param  string $ship   #参数
     * @return array          响应数据
     */
    protected function _request($url, $method = 'get', $data = '', $param, $ship = ''){

        $opts = array(
            CURLOPT_TIMEOUT        => 30,//要求结果为字符串且输出到屏幕上
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_SSL_VERIFYHOST => false,
        );
        /* 根据请求类型设置特定参数 */
        $opts[CURLOPT_URL] = $url . '?' . http_build_query($param) . $ship;
        if(strtoupper($method) != 'get'){
            $opts[CURLOPT_POST] = 1;
            $opts[CURLOPT_POSTFIELDS] = $data;

            if(is_string($data)){ //发送JSON数据
                $opts[CURLOPT_HTTPHEADER] = array(
                    'Content-Type: application/json; charset=utf-8',
                    'Content-Length: ' . strlen($data),
                );
            }
        }
        /* 初始化并执行curl请求 */
        $ch = curl_init();
        curl_setopt_array($ch, $opts);
        $data  = curl_exec($ch);
        $error = curl_error($ch);
        curl_close($ch);
        //发生错误，抛出异常
        if($error) exit('请求发生错误 : '.$error);
        return  $data;
    }


    /**
     * 发起get请求
     */
    protected function get_request() {
        return $this->_request($this->url,'get',$this->data,$this->param,$this->ship);
    }
    /**
     * 发起post请求
     */
    protected function post_request() {
        return $this->_request($this->url,'post',$this->data,$this->param,$this->ship);
    }
    /**
     * 发起put请求
     */
    protected function put_request() {
        return $this->_request($this->url,'put',$this->data,$this->param,$this->ship);
    }

    /**
     * 发起delete请求
     */
    protected function delete_request() {
        return $this->_request($this->url,'delete',$this->data,$this->param,$this->ship);
    }

}