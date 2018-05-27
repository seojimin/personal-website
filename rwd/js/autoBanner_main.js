/* autoBanner_main.js */

/*
	<section class="banner_auto">
		<ul class="main_banner">
			<li><a href="#" id="aGallery2"><img src="images/visual_bnn_01.png" alt="on air" id="gallery"/></a></li>
			<li><a href="#" id="aGallery2"><img src="images/visual_bnn_02.png" alt="on air" id="gallery"/></a></li>		
			<li><a href="#" id="aGallery2"><img src="images/visual_bnn_03.png" alt="on air" id="gallery"/></a></li>	
			<li><a href="#" id="aGallery2"><img src="images/visual_bnn_04.png" alt="on air" id="gallery"/></a></li>
		</ul>
		<p class="onAir_time" id="onAir_time"><a href="#">ON AIR 마감시간 <span>00:31:48</span></a></p>
		<!--
		<div class="arrow">
			<a class="prev" href="#"><img src="images/btn_prev.png" alt="이전" /></a>
			<a class="next" href="#"><img src="images/btn_next.png" alt="다음" /></a>
		</div>-->
		<ul class="main_roll" id="main_roll">
			<li><a href="images/visual_bnn_01.png"><img src="images/state_over.png" alt="뉴스1" /></a></li>
			<li><a href="images/visual_bnn_02.png"><img src="images/state_out.png" alt="뉴스2" /></a></li>
			<li><a href="images/visual_bnn_03.png"><img src="images/state_out.png" alt="뉴스3" /></a></li>
			<li><a href="images/visual_bnn_04.png"><img src="images/state_out.png" alt="뉴스4" /></a></li>
		</ul>
	</section>
*/

function galleryLoad2(){
	var mainList = document.getElementById("main_roll"); //ul
	var theAtag2 = mainList.getElementsByTagName("a") //li a
	var theGallery2 =document.getElementById("gallery"); //큰 img
	var myImg2 = mainList.getElementsByTagName("img") // 작은 img

	for(var i=0;i<theAtag2.length;i++){
		theAtag2[i].onfocus=theAtag2[i].onmouseover=function(){ //a
			theGallery2.src=this.href; //event발생한 a의 href값으로 바꿔주어라
			
			//큰 이미지 교체	
			for(var k=0;k<myImg2.length;k++){
				myImg2[k].src=myImg2[k].src.replace("over.png","out.png");
			}

			this.children[0].src=this.children[0].src.replace("out.png","over.png");

			clearTimeout(myAuto); //마우스 올렸을때 자동배너 정지

			addNum = this.children[0].alt.charAt(2)-1; //img의 alt속성! 그림1 그림2 그림3 그림4
		}

		theAtag2[i].onblur = theAtag2[i].onmouseout = function(){
			myAuto = setTimeout(autoBanner,2200);
			
			
		}
	}
	var addNum = 0; //배너번호
	function autoBanner(){
		addNum++;
		if(addNum>=theAtag2.length){
			addNum=0;
		}
		theAtag2[addNum].onmouseover(); //a 에 onmouseover한 것과 같은 효과를 내라
		myAuto = setTimeout(autoBanner,2200); // 재귀함수 -자기자신을 계속 실행
	}

	var myAuto = setTimeout(autoBanner,2200); //자동이벤트함수를 호출해야실행됨

	var aGallery2 = document.getElementById("aGallery2"); //큰그림 a
	aGallery2.onfocus = aGallery2.onmouseover = function(){
		clearTimeout(myAuto); //clearTimeout은 setTimeout을 없애는 것 큰그림에 마우스올리면 멈춰야해
	} 
	aGallery2.onblur = aGallery2.onmouseout = function(){
		myAuto = setTimeout(autoBanner,2200);
	}
}

/* 가장먼저쓸것 */
if(window.addEventListener){ 
	window.addEventListener("load",galleryLoad2,false);
}else if(window.attachEvent){
	window.attachEvent("onload",galleryLoad2);
}

