<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Simple Mail</title>
</head>
<body>





<form action="mailer.php" method="post">
<p>
<label for="addr">eMail:</label>
 	<input type="text" name="addr" id="addr" size="30" />
</p>
<p>
 	<label for="theme">Тема письма:</label>
 	<input type="text" name="theme" id="theme" size="30" />
</p>
<p>
	<label for="text">Текст письма:</label>
 	<textarea rows="10" cols="20" name="text" id="text"></textarea>
</p>
<p>
 	<input type="submit" value="Отправить" />
</p>
</form>

<?php 

phpinfo() ;

 ?>
</body>
</html>