<?php

/*
 * RSA加密解密 单例类
 *
 * @auther  ken<862253272@qq.com>
 * @time    2016-12-16
 */


class RsaCrypt {

    //私钥文件路径
    const PRIVATE_KEY_FILE_PATH = 'certificates\rsa_private_key.pem';
    //公钥文件路径
    const PUBLIC_KEY_FILE_PATH = 'certificates\rsa_public_key.pem';

    //保存例实例在此属性中
    private static $_instance;

    //私有构造函数，防止外界实例化对象
    private function __construct() {

    }

    //私有克隆函数，防止外办克隆对象
    private function __clone() {

    }


    //静态方法，单例统一访问入口
    public static function getInstance() {
        if (is_null ( self::$_instance ) || isset ( self::$_instance )) {
            self::$_instance = new self ();
        }
        return self::$_instance;
    }

    /**
     * 获取私钥文件内容
     * @return string
     */
    private static function get_private_key_file(){
        //密钥文件的路径
        $privateKeyFilePath = self::PRIVATE_KEY_FILE_PATH;
        extension_loaded('openssl') or die('php需要openssl扩展支持');

        (file_exists($privateKeyFilePath)) or die('密钥的文件路径不正确');

        return file_get_contents($privateKeyFilePath);
    }
    /**
     * 获取公钥文件内容
     * @return string
     */
    public static function get_public_key_file(){
        //公钥文件的路径
        $publicKeyFilePath = self::PUBLIC_KEY_FILE_PATH;

        extension_loaded('openssl') or die('php需要openssl扩展支持');

        (file_exists($publicKeyFilePath)) or die('公钥的文件路径不正确');

        return file_get_contents($publicKeyFilePath);
    }


    /**
     * 私钥加密
     * @param string $data 要加密的数据
     * @return string 加密后的字符串
     */
    public function privateKeyEncode($data)
    {
        $encrypted = '';
        $this->_needKey(2);
        $private_key = openssl_pkey_get_private(self::get_private_key_file());
        openssl_private_encrypt($data, $encrypted, $private_key); //私钥加密
        return base64_encode($encrypted); //序列化后base64_encode
    }

    /**
     * 公钥加密
     * @param string $data 要加密的数据
     * @return string 加密后的字符串
     */
    public function publicKeyEncode($data)
    {
        $encrypted = '';
        $this->_needKey(1);
        $public_key = openssl_pkey_get_public(self::get_public_key_file());
        openssl_public_encrypt($data, $encrypted, $public_key); //私钥加密
        return base64_encode($encrypted);
    }

    /**
     * 用公钥解密私钥加密内容
     * @param string $data 要解密的数据
     * @return string 解密后的字符串
     */
    public function decodePrivateEncode($data)
    {
        $decrypted = '';
        $this->_needKey(1);
        $public_key = openssl_pkey_get_public(self::get_public_key_file());
        openssl_public_decrypt(base64_decode($data), $decrypted, $public_key); //私钥加密的内容通过公钥可用解密出来
        return $decrypted;
    }

    /**
     * 用私钥解密公钥加密内容
     * @param string $data  要解密的数据
     * @return string 解密后的字符串
     */
    public function decodePublicEncode($data)
    {
        $decrypted = '';
        $this->_needKey(2);//检查配置文件
        $private_key = openssl_pkey_get_private(self::get_private_key_file());
        openssl_private_decrypt(base64_decode($data), $decrypted, $private_key); //私钥解密
        return $decrypted;
    }

    /**
     * 检查是否 含有所需配置文件
     * @param int 1 公钥 2 私钥
     * @return int 1
     * @throws Exception
     */
    private function _needKey($type)
    {
        switch ($type) {
            case 1:
                $pu_key = self::get_public_key_file();//公钥
                if (empty($pu_key)) {
                    throw new Exception('请配置公钥');
                }
                break;
            case 2:
                $pr_key = self::get_private_key_file();//私钥
                if (empty($pr_key)) {
                    throw new Exception('请配置私钥');
                }
                break;
        }
        return true;
    }


}


