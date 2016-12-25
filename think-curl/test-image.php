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
class TestImages{

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
     * @param $image_name
     */
    public function down_image($html,$image_name)
    {
        $this->start();
        $image_path ="./".$image_name.".xls";
        echo $html;
        // 把文件写入磁盘
        $this->save($image_path);

        ob_flush();
        flush();

        // 下载文件
        $this->downFile($image_name.".xls",$image_path);
    }

    /**
     * php文件下载
     * @param $file_name      下载文件名称
     * @param $file_path     下载文件路径
     * return void()
     */
    public function downFile($file_name, $file_path) {
        header("Content-type:text/html;charset=utf-8");
        $file_name = iconv("utf-8", "gb2312", $file_name);
        //首先要判断给定的文件存在与否
        if (file_exists($file_path)) {
            $fp = fopen($file_path, "r");
            $file_size = filesize($file_path);
            //下载文件需要用到的头
            Header("Content-type: application/octet-stream");
            Header("Accept-Ranges: bytes");
            Header("Accept-Length:" . $file_size);
            Header("Content-Disposition: attachment; filename=" . $file_name);
            $buffer = 1024;
            $file_count = 0;
            //向浏览器返回数据
            while (!feof($fp) && $file_count < $file_size) {
                $file_con = fread($fp, $buffer);
                $file_count += $buffer;
                echo $file_con;
            }
            fclose($fp);
        } else {
            echo '文件不存在';
        }
    }

    // 页面缓存
    private function start(){
        ob_start();
        ob_implicit_flush(0);
    }

    private function save($path){

        // 获取并清空缓存
        $content = ob_get_clean();
        //echo $content;exit;
        $this->wirtefile ($path,$content);
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

$html_data = $curl->send_http('http://www.cnblogs.com/freephp/p/4962591.html','get');

//var_dump($html_data);

$image = TestImages::getInstance();

$image->down_image($html_data,'test');




