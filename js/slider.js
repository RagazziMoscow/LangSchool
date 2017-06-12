/*
var UserData = [
	[],
	[["lang"]],
	[["appr"]],
	[["sex"],["carrier"],["age"]],
	[["features"]],
	[["carrier"],["pack"]],
	[["name"],["email"],["phone"]]
];
*/


var UserData = [
	{},
	{"lang" : ""},
	{"appr" : ""},
	[{"sex" : ""}, {"carrier" : ""}, {"age" : ""}],
	{"features" : ""},
	[{"carrier" : ""} ,{"pack" : ""}],
	[{"name" : ""}, {"email" : ""}, {"phone" : ""}]
];

var mydata = [{"lang" : "1312"},{"sex" : ""},{"carrier" : ""}] ;

var CurrentSlide;



$(document).ready(function(){


	//Установка нулевых значений
	CurrentSlide = 0; //Установка счётчика
	$("#item-0").addClass("current") ;
	setMan();
	setCar();
	setCarP();




	/*Пробное*/


/*
	$(".link").click(function(){



		

		$("#item-0").animate({
			left:"-2500px"
			
		},1500).delay();

		$("#item-1").css("left","2500px");
		$("#item-1").show()
		$("#item-1").animate({
			left:"0"
		},1500);
		});

		
	/*Пробное*/


	init(); //инициализация
 



});


/*
Инициализирует обработчики событий
*/
function init() {

	$("#link-next-0").on("click", {x:0}, getNextSlide) ;
	$("#link-prev-1").on("click", {x:1}, getPrevSlide) ;
	$("#link-next-1").on("click", {x:1}, getNextSlide) ;
	$("#link-prev-2").on("click", {x:2}, getPrevSlide) ;
	$("#link-next-2").on("click", {x:2}, getNextSlide) ;
	$("#link-prev-3").on("click", {x:3}, getPrevSlide) ;
	$("#link-next-3").on("click", {x:3}, getNextSlide) ;
	$("#link-prev-4").on("click", {x:4}, getPrevSlide) ;
	$("#link-next-4").on("click", {x:4}, getNextSlide) ;
	$("#link-prev-5").on("click", {x:5}, getPrevSlide) ;
	$("#link-next-5").on("click", {x:5}, getNextSlide) ;
	$("#link-prev-6").on("click", {x:6}, getPrevSlide) ;
	$("#link-prev-7").on("click", {x:7}, getPrevSlide) ;

	$("#block-data-12 img").on("click", setCurrentLang) ;
	$("#block-data-12 img").on("click", {x:1}, getNextSlide) ;
	$("#img-1-1").on("click", setEng) ;
	$("#img-1-2").on("click", setGer) ;
	$("#img-1-3").on("click", setSpa) ;
	$("#img-1-4").on("click", setCha) ;
	$("#img-1-5").on("click", setFra) ;
	$("#img-1-6").on("click", setOther) ;

	$(".circle").on("click", animateSwitchFirst) ;
	$("#button-21").on("click", {x:2}, getNextSlide) ;
	$("#button-21").on("click", setApprFirst) ;
	$("#button-22").on("click", {x:2}, getNextSlide) ;
	$("#button-22")	.on("click", setApprSecond);
	$("#button-41").on("click", {x:4}, getNextSlide) ;
	$("#button-41").on("click", setFeat) ;
	$(".circle-2").on("click", animateSwitchSecond) ;
	$(".price").on("click", SetPrice) ;
	$("#button-61").on("click", sendDada);

	$("#inputs").validate({
		rules : {
			name : {required : true, minlength: 2},
			email : {required:true, email:true},
			phone : {required:true, digits : true}
		},
		messages : {
			name : {required : "", minlength : ""},
			email : {required : "", email : ""},
			phone : {required : "", digits : ""}
		} 
	}) ;



/*
	$(".button-link-next").unbind("click", getNextSlide);
	$(".button-link-next").bind("click", { x:CurrentSlide }, getNextSlide);
	$(".button-link-prev").unbind("click", getNextSlide);
	$(".button-link-prev").bind("click", { x:CurrentSlide }, getPrevSlide);
	*/
}


/*
Показывает слдующий слайд
x - Номер текущего слайда
*/
function getNextSlide(event) {

	var x = event.data.x ; // Номер текущего слайда
	var template ; //Шаблон для id
	template = "#item-" ;


	/*Задвигаем старое*/
	$(template+x).animate({
		left:"-2500px"
	},1500, function() {
		$(this).
		hide() ; //Скрываем старое
	}).delay();


	/*Меняем background*/
	if (CurrentSlide==0) {

		$('#picture').animate({opacity: 0}, 'slow', function() {
        $(this)
            .css({'background-image': 'url(img/2.png)'})
            .animate({opacity: 1},1500);
    });

	}
	$(template+x).removeClass("current") ;
	x++;
	/*Выдвигаем новое*/
	$(template+x).css("left","2500px");
	$(template+x).show();
	$(template+x).addClass("current") ;
	$(template+x).animate({
		left:"0"
	},1500);


	CurrentSlide++; //увеличиваем счётчик
	
}


/*
Показывает предыдущий слайд
x - Номер текущего слайда
*/
function getPrevSlide(event) {
 
	var x =event.data.x; //номер текущего слайд
	var template; //шаблон для id
	template = "#item-" ;


	/*Задвигаем старое*/
	$(template+x).animate({
		left:"-2500px"
	},1500, function() {
		$(this).hide() ; //Скрываем старое
	}).delay();

	/*Меняем background*/
	if (CurrentSlide==1) {

		$('#picture').animate({opacity: 0}, 'slow', function() {
        $(this)
            .css({'background-image': 'url(img/1.png)'})
            .animate({opacity: 1},1500);
    });

	}


	$(template+x).removeClass("current") ;
	x--;
	/*Выдвигаем новое*/
	$(template+x).css("left","2500px");
	$(template+x).show();
	$(template+x).addClass("current") ;
	$(template+x).animate({
		left:"0"
	},1500);



	CurrentSlide--; //уменьшаем счётчик
	
}



/*
Возвращает номер текущего слайда (от 0 до 6)
*/
function getCurrentSlideNumber() {
	var number; //Номер текущего слайда
	var filter; //Фиьтр
	filter = $(".current").attr("id").substr(-1);
	number = Number(filter) ;
	return number;
}






/*Функции установки языков(1 слайд)*/

function setEng() {
	UserData[1]["lang"]="Английский" ;
}

function setGer() {
	UserData[1]["lang"]="Немецкий" ;
}

function setSpa() {
	UserData[1]["lang"]="Испанский" ;
}

function setCha() {
	UserData[1]["lang"]="Китайский" ;
}

function setFra() {
	UserData[1]["lang"]="Французский" ;
}


function setOther() {
	UserData[1]["lang"]="Другой(редкий)" ;
}

/*Функции установки языков(1 слайд)*/

/*Функции установки(2 слайд)*/

function setApprFirst() {
	UserData[2]["appr"]="Мне нравится Ваш подход!" ;
}

function setApprSecond() {
	UserData[2]["appr"]="Хм, посмотрим, что еще интересного у Вас тут для меня имеется..." ;
}

/*Функции установки(2 слайд)*/

/*Функции установки(3 слайд)*/

//пол
function setMan() {
	UserData[3][0]["sex"]="Мужчина" ;
}

function setFam() {
	UserData[3][0]["sex"]="Женщина" ;
}
//носитель или нет
function setCar() {
	UserData[3][1]["carrier"]="Носитель языка" ;
}
function setNotCar() {
	UserData[3][1]["carrier"]="НЕ носитель языка" ;
}
//возраст


/*Функции установки(3 слайд)*/

/*4 слайд*/
function setFeat() {
	UserData[4]["features"]="Да, мне было бы приятно пообщаться и узнать про свой уровень!" ;
}
/*4 слайд*/


/*Функции установки характеристики(5 слайд)*/

function setCarP() {
	UserData[5][0]["carrier"]="Носитель языка" ;
}
function setNotCarP() {
	UserData[5][0]["carrier"]="Русскоязычный преподаватель" ;
}

function SetPrice() {

	//установка выбранного пакета
	UserData[5][1]["pack"]=$(this).find("p:first").text()+" - " +$(this).find("p:last").text() ;
	$(".price").removeClass("current-price") ;
	$(this).addClass("current-price") ;
}

/*Функции установки характеристики обучаемого(5 слайд)*/


/*Языки и флаги*/
//установка текущго языка
function setCurrentLang() {
	$("#block-data-12 img").removeClass("current-language") ;
	$(this).addClass("current-language") ;
	
}

/*Языки и флаги*/



/*Переключатели*/

function animateSwitchFirst() {

	if($(this).css("marginRight")!="39px") {
		// женщина или нет
		
		$(this).animate({
					
			
			'marginRight' : "39px"
		},300);
		if ($(this).parent().parent().parent().attr("id")=="group") {
			//для пола
			$(".background").css("background-color","#ff3333") ;
			setFam();
			$("#fam").css("backgroundImage", "url('img/female1.png')") ;
			$("#man").css("backgroundImage", "url('img/man2.png')") ;

		}
		else {
			//не для пола
			setNotCar() ;
		}
		

	}
	else {
		//мужчина или да

		$(this).animate({
					
			
			'marginRight' : "6px"
		},300);
		if ($(this).parent().parent().parent().attr("id")=="group") {
			//для пола
			$(".background").css("background-color","#006ab3") ;
			setMan();
			$("#fam").css("backgroundImage", "url('img/female2.png')") ;
			$("#man").css("backgroundImage", "url('img/man1.png')") ;
		}
		else {
			//не для пола
			setCar() ;
		}
		
	}
}



function animateSwitchSecond() {
	if($(this).css("marginRight")!="33px") {
		$(".background-2").css("background-color", "#cc3333") ;
		$(".price .first").css("background-color", "#cc3333") ;
		$(this).animate({
			'marginRight': "33px"
		},300) ;
		setCarP() ;
		switchPrices() ;
		UserData[5][1]["pack"]="" ;
		$(".price").removeClass("current-price") ;
	}
	else {
		$(".background-2").css("background-color","#1d6b43") ;
		$(".price .first").css("background-color", "#1d6b43") ;
		$(this).animate({
			"marginRight" : "5px"
		},300) ;
		setNotCarP() ;
		switchPrices() ;
		UserData[5][1]["pack"]="" ;
		$(".price").removeClass("current-price") ;
	}
}


/*Изменения в ценах*/
function switchPrices() {

	if (UserData[5][0]["carrier"]=="Носитель языка") {

		$("#price-1 p:last").html("1100<span>руб.</span>");
		$("#price-2 p:last").html("1030<span>руб.</span>");
		$("#price-3 p:last").html("960<span>руб.</span>");
		$("#price-4 p:last").html("890<span>руб.</span>");	

	}
	else {

		$("#price-1 p:last").html("740<span>руб.</span>");
		$("#price-2 p:last").html("690<span>руб.</span>");
		$("#price-3 p:last").html("640<span>руб.</span>");
		$("#price-4 p:last").html("590<span>руб.</span>");
	}
}

/*Переключатели*/


/*Проверка формы*/
function isValid() {
	if($("#input-61").hasClass("valid") &&
		$("#input-62").hasClass("valid") &&
		$("#input-63").hasClass("valid")) {
		return true ;
	}
	else {
		return false ;
	}
}
/*Проверка формы*/



/*Отправка*/

function sendDada() {


	UserData[6][0]["name"]=$("#input-61").val() ;
	UserData[6][1]["email"]=$("#input-62").val() ;
	UserData[6][2]["phone"]=$("#input-63").val() ;


	if(isValid()) {

	$.ajax({
		type: 'POST',
		url : "process.php",
		
		data : {request : JSON.stringify(UserData)} ,
	  	success: function(data){

	  	var x = 6 ; // Номер текущего слайда
		var template ; //Шаблон для id
		template = "#item-" ;


		/*Задвигаем старое*/
		$(template+x).animate({
			left:"-2500px"
		},1500, function() {
			$(this).
			hide() ; //Скрываем старое
		}).delay();


		/*Меняем background*/
		if (CurrentSlide==0) {

			$('#picture').animate({opacity: 0}, 'slow', function() {
	        $(this)
	            .css({'background-image': 'url(img/2.png)'})
	            .animate({opacity: 1},1500);
	    });

		}
		$(template+x).removeClass("current") ;
		x++;
		/*Выдвигаем новое*/
		$(template+x).css("left","2500px");
		$(template+x).show();
		$(template+x).addClass("current") ;
		$(template+x).animate({
			left:"0"
		},1500);


		CurrentSlide++; //увеличиваем счётчик
	    	
	  	},
	  	error: function() {
	  		alert("При отправлении анкеты произошла"+
	  			" ошибка, попробуйте отправить анкету позже") ;
	  	}
	});
	}
}


/*Отправка*/