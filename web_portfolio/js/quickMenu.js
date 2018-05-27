$(function(){
	var gnbA = $("#gnb>li>a"); //a
	var h = new Array(); //배열
	var sum = 0;

	$("#content > div").each(function(index){ //h[0]=div
		h[index] = sum; //h[0]=div높이값, h[1]=div, h[2]=div, h[3]=div
		sum += $(this).innerHeight(); //sum=div 높이값, height와 padding만 포함
	}); //여기까지가 div의 높이값
	$(window).scroll(function(){
		var t = $(this).scrollTop() + ($(this).height()/2 - $("#quick").height()/2);
		$("#quick").stop().animate({top:t},300); //퀵메뉴가 항상있어야하는 위치- 화면 1/2에서 퀵메뉴절반의값을 나눈 값

		$("#content > div").each(function(index){
			if($(window).scrollTop() >= h[index]){ //h[0]
				gnbA.removeClass("on"); //class를 지워라
				gnbA.eq(index).addClass("on"); //gnb중에 지금 영향받는 index에 넣어줘라

				quickA.removeClass("on");
				quickA.eq(index).addClass("on");
			} 
		});
	});

	gnbA.click(function(){
		var target = $(this).attr("href"); //#m1

		$("html,body").stop().animate({scrollTop:$(target).offset().top-$("#content").offset().top},500);

		if(gnbA.target){
			$(gnbA.target).removeClass("on");
			$(this).addClass("on");
		}else{
			$(this).addClass("on");
		}
		gnbA.target = this;
		return false;
	});

	gnbA[0].click(); //항상 처음이 클릭이 되어있어야한다.

	var quickA= $("#quick>li>a"); //a

	$("#quick").css("top",$(window).height()/2-$("#quick").height()/2+"px");

	quickA.click(function(){
		var target = $(this).attr("href"); //#m1
		$("html,body").animate({scrollTop:$(target).offset().top},1000);
		if(quickA.terget){
			$(quickA.target).removeClass("on");
			$(this).addClass("on");
		}else{
			$(this).addClass("on");
		}
		quickA.target = this;
		return false;
	});
	quickA[0].click();
});