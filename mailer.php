<?php

$addr = $_POST['addr'];
$theme = $_POST['theme'];
$text = $_POST['text'];
if (isset($addr) && isset($theme) && isset($text)
 		&& $addr != "" && $theme != "" && $text != "") {
 	if (mail($addr, $theme, $text, "From: vova_33@mail.ru")) {
 		echo "<h3>Сообщение отправлено</h3>";
 	}
 	else {
 		echo "<h3>При отправке сообщения возникла ошибка</h3>";
 	}
 }

 ?>