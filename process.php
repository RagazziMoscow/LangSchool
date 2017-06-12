<?php 


	function mail_utf8($to, $subject = '(No subject)', $message = '', $from) {
  		$header = 'MIME-Version: 1.0' . "\n" . 'Content-type: text/html; charset=UTF-8'
    	. "\n" . 'From: Школа иностранных языков<' . $from . ">\n";
  		mail($to, '=?UTF-8?B?'.base64_encode($subject).'?=', $message, $header);
	}

	function print_result() {

		$data = json_decode($_POST['request'],true) ;
		$content = "<html><head><style>".
		"body{font-family:Verdana ;}".
		"p{font-size:18px;}".
		"h1{font-size:20px;}".
		"</style>".
		"</head>".
		"<body><div id='wrapper'>".
		"<div id='one'><h1>Наиболее важный язык: </h1><p>".$data[1]["lang"]."</p></div>".
		"<div id='two'><h1>Цель изучения: </h1><p>".$data[2]["appr"]."</p></div>".
		"<div id='three'><h1>Видит своего преподавателя как: </h1>".
			"<div id='sex'><p>Пол: ".$data[3][0]["sex"]."</p></div>".
			"<div id='carrier'><p>Носитель языка: ".$data[3][1]["carrier"]."</p></div>".
		"</div>".
		"<div id='four'><h1>Интерес :</h1><p>".$data[4]["features"]."</p></div>".
		"<div id='five'><h1>Выбранная цена и преподаватель: </h1>".
			"<div id='carr'><p>".$data[5][0]["carrier"]."</p></div>".
		"<div id='pack'><p>".$data[5][1]["pack"]."</p></div>".
		"</div>".
		"<div id='six'><h1>Оставленные контакты:</h1>".
			"<div id='name'><p>Имя: <bold>".$data[6][0]["name"]."</bold></p></div>".
			"<div id='email'><p>Email: <bold>".$data[6][1]["email"]."</bold></p></div>".
			"<div id='phone'><p>Телефон: <bold>".$data[6][2]["phone"]."</bold></p></div>".
		"</div>".
		"</div></body></html>" ;
		return $content ;

	}

	function get_email() {
		return "iliya5376@mail.com" ;
		//return "andrey0099yuzhakov9900@ya.ru" ;
	}
	
	$name1 = json_decode(($_POST['request']),true);
	echo "Заявка отправлена";
	//echo print_result() ;
	//echo var_dump(($name));
	//echo $name[2]["appr"];
	$mail = array(  
	'to' => "iliya5376@mail.com",  
	'subject' => "Новое сообщение",  
	'message' => "<html><body><p>Текст сообщения</p></body></html>",  
	'headers' => "MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n"."From: SCHOOL <frommail@site.ru>\r\n"); 

	
	mail_utf8(get_email(),"Оставлена новая заявка",print_result(),"Школа") ;


	/*
	if(mail($mail['to'], $mail['subject'], $mail['message'], $mail['headers']))  {
		echo "!!!!!!";
	} */





 ?>