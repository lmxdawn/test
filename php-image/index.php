<?php
/**
 * 测试压缩图片
 */

image_resize('./images/image.jpg','./images/image11.jpg');

/**
 * 压缩图片
 * @param $image_src 需要压缩的图片路径
 * @param $imgae_resrc 压缩后保存的路径
 * @param float $percent 压缩比例
 */
function image_resize($image_src,$imgae_resrc,$percent = 0.3){
    list($width, $height,$type) = getimagesize($image_src); //获取原图尺寸
    //缩放尺寸
    $newwidth = $width * $percent;
    $newheight = $height * $percent;
    $src_im = imagecreatefromjpeg($image_src);
    $dst_im = imagecreatetruecolor($newwidth, $newheight);
    imagecopyresized($dst_im, $src_im, 0, 0, 0, 0, $newwidth, $newheight, $width, $height);
    imagejpeg($dst_im,$imgae_resrc); //输出压缩后的图片
    imagedestroy($dst_im);
    imagedestroy($src_im);
}