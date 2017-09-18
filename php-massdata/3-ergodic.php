<?php
/**
 * Created by PhpStorm.
 * User: Host-0034
 * Date: 2017/9/15
 * Time: 15:16
 */

// 取出目录的所有文件列表
function myGlob($targetFolder){
    $filePath = $targetFolder . '/*.txt';
    $files    = glob($filePath);

    return $files;
}

//获取小文件中ip出现次数最多一个

/*
1）初始化一个$ipValue 记录小文件中ip次数出现最多的那个IP的值  $ipMax 表示IP出现的次数。
2）构建名为“ip”的Dictionary，“key”为IP地址，“value”为该IP地址出现的次数，用来记录每一个小文件的所有IP地址
3）遍历文件的时候，同时，把$ipValue,$ipMax 更新为IP出现的次数最多的那个IP
4)  构建名为“result”的Dictionary，“key”为IP地址，“value”为该IP地址出现的次数，用来记录11个文件每一个的最多出现的IP
5)  遍历result,即可以获取到IP
*/
// 打开一个文件夹，遍历文件里面的各种子文件的内容
function findIp($targetFolder){
    // 遍历文件夹
    $files = myGlob($targetFolder);
    // 用来统计每个子文件中出现次数最多的IP
    $result = [];

    foreach ($files as $file) {
        // 用来统计每个文件的中各个IP出现的个数
        $ip = array();
        // 标识最大出现次数的ip的值
        $ipValue = '';
        // 标识这个iP出现的次数
        $ipMax  = 0;
        $handle = fopen($file, 'r');
        if ($handle) {
            while(! feof($handle)) {
                // 去掉换行,这里需要特别注意
                $buffer = trim(fgets($handle));

                if (isset($ip[$buffer])) {
                    $ip[$buffer] = $ip[$buffer] + 1;
                } else {
                    $ip[$buffer] = 1;
                }

                if ($ip[$buffer] > $ipMax) {
                    $ipMax = $ip[$buffer];
                    $ipValue = $buffer;
                }
            }
        }

        fclose($handle);
        $result[] =  [$ipValue => $ipMax];
    }

    return $result;

}

$res = findIp('.');
asort($res);
echo '<pre>';
var_dump($res);