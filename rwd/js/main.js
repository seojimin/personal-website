/* main.js */
var $devWidth; // 전역변수 var는 형식 $는 변수이름 devise(pc tablet mobile)
var $limitsize=1024; //tablet width 값을 저장한 변수
/* 변수: A=10 -> A에 10을 담아라 밖으로 빼서 쓰는건 전역변수 함수에 쓰는 것은 지역변수*/

$(document).ready(function(){
	
	$(window).resize(function(){  // 함수=method
		$devWidth = $("body").width();
		//console.log($devWidth); - 변수의 값을 화면에 찍어준다.
		if($devWidth>=$limitsize){
		$(".gnb").show();
		
		}else if($devWidth<=$limitsize){
		$(".gnb").hide();

		}
	}); 
	


	/* 주메뉴 */

		$(".gnb > ul > li > a").bind("mouseover focus",function(){ //기존의 하위ul은 안보이고 event 가 발생한 하위 ul만 보여라
		/*
		if($devWidth < $limitsize){ // 조건문 if ()안의 조건이면 {조건이 참일 경우에만 실행}를 실행해라
			return false; // return false - 함수실행중지 함수안의 내용은 실행하지말고 함수를 빠져나오라는 명령어
		};*/
		
		$(".gnb > ul > li > a").css({"color":"#333","background":"#fff"});
		$(this).css({"color":"#fff","background":"#ed2539"});

		$(".gnb > ul > li > ul").hide(); 
		$(this).next().show();

	});
	

	$(".gnb").bind("mouseleave blur",function(){  // 전체(ul과 li모두)에서 마우스를 떼면 사라져야하니 넓은개념의 mouseenter,mouseleave를 사용한다.
		/*
		if($devWidth < $limitsize){
			return false;
		};
		*/
		$(".gnb > ul > li > ul").fadeOut(100);
		$(".gnb > ul > li > a").css({"color":"#333","background":"#fff"});

	});


	/* tablet smartphone 주메뉴 */

	$(".moreMenu").click(function(e){
		e.preventDefault();
		$(".gnb").stop().fadeToggle("slow");
	});

	/* 계열사바로가기 */
	$(".cj_companies").hide();
	$(".go_companies").click(function(e){
		e.preventDefault();
		$(".cj_companies").slideToggle(500);
	});



	//모바일 기기의 방향을 전환(가로/세로) 할 때 화면의 너비가 달라지는 것에 대비해서 항상 바른위치에 있도록 애니메이션 적용
	$("body>section").bind("orientationchange",function(e){
		$book_w=$("body>section").width();
		$("div.book_frame").animate({left:-$book_w*$bnnNum},300);	
	});

	//모바일에서 -------------
	$("body>section").bind("swipeleft",function(){
		$(".next").trigger("click"); //trigger(클릭한 것처럼 강제로 이벤트 발생)
	});

	$("body>section").bind("swiperight",function(){
		$(".prev").trigger("click"); 
	});

	
	

});
