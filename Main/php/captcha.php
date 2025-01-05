<?php
session_start();

$captchaText = substr(str_shuffle("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"), 0, 6);
$_SESSION['captcha'] = $captchaText;

$width = 120;
$height = 40;

$image = imagecreate($width, $height);
$bgColor = imagecolorallocate($image, 255, 255, 255);
$textColor = imagecolorallocate($image, 0, 0, 0);
$lineColor = imagecolorallocate($image, 64, 64, 64);

imageline($image, 0, 0, $width, $height, $lineColor);
imageline($image, $width, 0, 0, $height, $lineColor);

imagestring($image, 5, 30, 10, $captchaText, $textColor);

header("Content-type: image/png");
imagepng($image);
imagedestroy($image);
?>
