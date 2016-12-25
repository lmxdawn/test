<?php
// +----------------------------------------------------------------------
// | lmxdawn [ WE CAN DO IT JUST THINK IT ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016 .
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: Byron Sampson <lmxdawn@gmail.com>
// +----------------------------------------------------------------------

/**
 * 把资源强制变为图片
 * Class TestImages
 */
class WorldImages{

    private  $config = array(

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
     * 私有克隆函数，防止外办克隆对象
     */
    private function __clone() {}


    /**
     * 静态方法，单例统一访问入口
     * @param array $config 配置
     * @return TestImages
     */
    public static function getInstance($config = array()) {

        if (is_null ( self::$_instance ) || isset ( self::$_instance )) {
            self::$_instance = new self ($config);
        }
        return self::$_instance;
    }

    /**
     * 保存为图片
     * @param $html 页面数据
     * @param $name
     */
    public function down($html,$name)
    {
        $image_path ="./".$name.".doc";
        // 把文件写入磁盘
        $this->wirtefile($image_path,$html);

    }


    private function wirtefile ($fn,$data){
        $fp=fopen($fn,"wb");
        fwrite($fp,$data);
        fclose($fp);
    }

}

// 载入 curl 请求类
require './src/Curl.php';

header("Content-type:text/html;charset=utf-8");

$curl = lmxdawn\curl\Curl::getInstance();

$html_data = $curl->send_http('https://segmentfault.com/','get');

//var_dump($html_data);

$image = WorldImages::getInstance();

$image->down($html_data,'test');




