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

/*
//设，有数组：
    $arr = [3, 1, 2, 4, 8, 7, 9, 10, 13, 15];
//写一个函数，使其输出格式为:
    $arr = array(
        0 => '1~4',
        1 => '7~10',
        2 => '13',
        3 => '15'
    );
 //*/

class Test {

    private $test_array;//需要操作的数组

    private $ico = '~';//分隔符

    private static $_instance;//

    private function __construct($test_array = array()) {
        $this->test_array = $test_array;
    }

    private function __clone() {
        // TODO: Implement __clone() method.
    }

    public static function getInstance($test_array = array()){
        if (is_null(self::$_instance) || !isset(self::$_instance)){
            self::$_instance = new self($test_array);
        }
        return self::$_instance;
    }

    /**
     * 数组分组
     * @return array 返回分好的数组
     */
    public function array_group(){

        //首先 升序对数组排序
        sort($this->test_array);
        // 去重数组
        $test_array = array_unique($this->test_array);
        //定义临时数组
        $tmp_array = array();
        $one = $test_array[0];//记录第一次的值
        $tmp_array_key = -1;//临时数组的下标 （初始值为 -1）不然临时数组的下标会从 1 开始
        foreach ($test_array as $key => $val){
            // 取出临时数组的最后一个元素
            $last_val = end($tmp_array);
            // 用分隔符把字符串转换为数组
            $last_array = explode($this->ico,$last_val);
            //如果最后一个元素为数组 就去最后一个元素的最后一个元素，否则就是取第一个
            $tmp_last_val = (is_array($last_array)) ? end($last_array) : $last_array[0];
            //判断是否是连续值
            if (!empty($tmp_last_val) && ($tmp_last_val + 1) == $val){
                $val = $one.$this->ico.$val;
            }else{
                // 如果不连续，更改第一次记录的值
                $one = $val;
                // 临时数组的值加一
                $tmp_array_key++;
            }
            //存入临数组
            $tmp_array[$tmp_array_key] = $val;
        }

        return $tmp_array;//返回临时数组

    }


    /**
     * 格式化输出数组
     * @param      $var
     * @param bool $echo
     * @param null $label
     * @param bool $strict
     * @return mixed|null|string
     */
    public static function dump($var, $echo=true, $label=null, $strict=true) {
        header("Content-type: text/html; charset=utf-8");
        $label = ($label === null) ? '' : rtrim($label) . ' ';
        if (!$strict) {
            if (ini_get('html_errors')) {
                $output = print_r($var, true);
                $output = '<pre>' . $label . htmlspecialchars($output, ENT_QUOTES) . '</pre>';
            } else {
                $output = $label . print_r($var, true);
            }
        } else {
            ob_start();
            var_dump($var);
            $output = ob_get_clean();
            if (!extension_loaded('xdebug')) {
                $output = preg_replace('/\]\=\>\n(\s+)/m', '] => ', $output);
                $output = '<pre>' . $label . htmlspecialchars($output, ENT_QUOTES) . '</pre>';
            }
        }
        if ($echo) {
            echo($output);
            return null;
        }else
            return $output;
    }

}

$test_array = array(3, 1, 2, 4, 8, 7, 9, 10, 13, 15,3,1,2,4,23,56,85,24);
$test = Test::getInstance($test_array);

// 打印数组
Test::dump($test->array_group());



