<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2017/2/3
 * Time: 11:27
 */

/**
 * php实现二分查找算法的类
 * Class search
 */
class Search {

    // 查找有序数组
    public $arr;
    // 查找的值
    public $key;

    /**
     * 构造函数-初始化
     * search constructor.
     * @param array  $arr
     * @param string $key
     */
    public function __construct($arr = [], $key = '') {
        // 数组或者查找值不能为空
        if ((empty($arr) && !is_array($arr)) || empty($key)){
            die('Array or lookup value cannot be empty !');
        }
        $this->arr = $arr;
        $this->key = $key;
    }

    /**
     * @return array
     */
    public function getArrCount() {
        return count($this->arr) - 1;
    }

    /**
     * 非递归二分查找
     * @return bool|float
     */
    public function binarySearch(){
        $start = 0;
        $end = $this->getArrCount();

        while ($start <= $end){
            // 中间下标
            $mid = ceil(($start + $end) / 2);
            if ($this->arr[$mid] == $this->key){
                return $mid;
            }else if ($this->arr[$mid] < $this->key){
                //当前值小于查找值往右边排
                $start = $mid + 1;
            }else if($this->arr[$mid] > $this->key){
                //当前值大于查找值往左边排
                $end = $mid - 1;
            }

        }

    }


    /**
     * 递归二分查找
     * @param $start
     * @param $end
     * @return bool|float
     */
    public function treeBinarySearch($start = 0, $end = 0){
        if (empty($end)  || $start > $end){
            //没找到
            return false;
        }else{
            $mid = ceil(($start + $end) / 2);
            if ($this->arr[$mid] == $this->key){
                return $mid;
            }elseif ($this->arr[$mid] < $this->key){
                //当前值小于查找值往右边排
                return $this->treeBinarySearch($mid + 1, $end);
            }else{
                //当前值大于查找值往左边排
                return $this->treeBinarySearch($start, $end - 1);
            }
        }
    }


    /**
     * 快速排序
     */
    public function quickSort($array = []){
        if (isset($array[1])){
            $mid = $array[0];//用于分割的关键字
            $leftArray = [];
            $rightArray = [];
            $count = count($array);
            // 从第二个元素开始
            for($i = 1; $i < $count; $i++){
                $value = $this->arr[$i];
                if ($value > $mid){
                    $rightArray[] = $value;//把比$mid大的数放到右边数组里
                }else{
                    $leftArray[] = $value;//把比$mid小的数放到右左边数组里
                }
            }

            $leftArray = $this->quickSort($leftArray);//把比较小的数组再一次进行分割

        }

        return $this;
    }

}

$arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66];

$search = new Search($arr,65);
header("Content-Type: text/html; charset=UTF-8");

$stime = microtime(true);//执行时间

//echo "<br/>非递归：" . $search->binarySearch();
echo "<br/>递归：" . $search->treeBinarySearch(0, $search->getArrCount());

$etime = microtime(true);

$total = $etime - $stime;   //计算差值

echo "<br/>[页面执行时间：{$total}]秒";

//echo "<br/>[";
//for ($i = 1;$i < 100000;$i++){
//    echo $i.",";
//}
//echo "]";
