<?php
/**
 * Created by PhpStorm.
 * User: Host-0034
 * Date: 2017/9/15
 * Time: 15:03
 */

// 拆分文件, 根据ip hash拆分文件

/**
1）分割大文件，我的HASH算法是：逐行读取大文件，把获取的IP转化成整形，取模10（这个数字是我随意定义的），根据取模10结果把ip存储到不同的文件中，这样就会保证ip不会出现在两个不同的文件中。
2）对小文件遍历，获取文件中出现频率次数最高的IP, 这样遍历10个小文件后，就可以获取到10这样IP,保存到一个数组里面，形式为：ip的具体值 => ip的出现次数。
3）对生成的数组排序，既可以获取到出现次数最大的IP
*/

function fileSplit($fileLaction, $num)
{
    $handle = fopen($fileLaction, 'r');
    if ($handle) {
        $count = 0;
        while(! feof($handle)) {
            // 去掉最后的换行符
            $buffer = trim(fgets($handle));
            $ip = ip2long($buffer);
            $count++;
            // 分成num个文件
            $i = $ip % $num;
            $childHandle = fopen('child_' . $i . '.txt', 'a');
            $buffer = $buffer . "\r\n";
            fwrite($childHandle, $buffer);
            fclose($childHandle);
        }
    }

    fclose($handle);
    unset($handle);
}

fileSplit('./file.txt',10);