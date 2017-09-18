<?php
/**
 * Created by PhpStorm.
 * User: Host-0034
 * Date: 2017/9/15
 * Time: 14:43
 */

// 生成数据,构造10万条IP，每一条ip以‘10.192’开头，并把这些数据保存到一个文本中，命名为file.txt.

function generageMassiveIPAddr($fileLaction, $numberOfLines)
{
    // 打开此文件
    $handle = fopen($fileLaction, 'a+');
    $ip = '';
    while ($numberOfLines) {
        $ip .= '10.192.' . rand(0, 255) . '.' . rand(0, 255) . "\r\n";
        $numberOfLines--;
    }

    fwrite($handle, $ip);
    fclose($handle);
    unset($handle);
}

// 生成了148KB的文件
generageMassiveIPAddr('./file.txt', 100000);