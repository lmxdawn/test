<?php
/**
 * Created by PhpStorm.
 * User: Host-0034
 * Date: 2017/9/15
 * Time: 14:53
 */

// 快排算法
function q_sort($arr = []){
    $len = count($arr);
    if ($len <= 1){
        return $arr;
    }
    $left_arr = [];
    $right_arr = [];
    $base = $arr[0];
    for ($i = 1; $i < $len; $i++){
        $val = $arr[$i];
        if ($base > $val){
            $left_arr[] = $val;
        }else{
            $right_arr[] = $val;
        }
    }
    $left_arr = q_sort($left_arr);
    $right_arr = q_sort($right_arr);
    return array_merge($left_arr, [$base], $right_arr);
}

$arr = array(1,45,27,13,9,18,68,59,62,94,19,14,34);

echo '<pre>';
var_dump(q_sort($arr));