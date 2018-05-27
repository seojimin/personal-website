/* news_autoBanner 

		<section class="news" id="news">
			<header class="news_header">
			<h2><a href="#">NEWS</a></h2>
			<a href="#" id="aGallery"><img src="images/news_1.png" alt="CJ오쇼핑" id="large"/></a>
			<ul class="news_roll" id="news_roll">
				<li><a href="images/news_1.png"><img src="images/blt_over.png" alt="뉴스1" /></a><p>- 16일 협력사 60여곳 초청 '파트너스 클럽' 행사 개최</p></li>
				<li><a href="images/news_2.png"><img src="images/blt_out.png" alt="뉴스2" /></a><p>- 5월 29일 AK플라자 수원점에 CJ오쇼핑 다섯 번째 오프라인 매장오픈</p></li>
				<li><a href="images/news_3.png"><img src="images/blt_out.png" alt="뉴스3" /></a><p>- 최신핫 키워드 테마로 구성된 총 4개의 신규 프로그램 론칭</p></li>
				<li><a href="images/news_4.png"><img src="images/blt_out.png" alt="뉴스4" /></a><p>- 6월 1일 공중파 4개 채널 통해 700만 가구 송출</p></li>
				<li><a href="images/news_5.png"><img src="images/blt_out.png" alt="뉴스5" /></a><p>-‘소통’과 ‘공감’의 대명사 최화정 CJ오쇼핑 합류</p></li>
			</ul>
			</header>
		</section>*/


	function galleryLoad(){
	var myList = document.getElementById("news_roll"); //ul
	var theAtag = myList.getElementsByTagName("a") //li a
	var theGallery = document.getElementById("large"); //큰 img
	var myImg = myList.getElementsByTagName("img") // 작은 img

	for(var i=0;i<theAtag.length;i++){
		theAtag[i].onfocus=theAtag[i].onmouseover=function(){ //a
			theGallery.src=this.href; //event발생한 a의 href값으로 바꿔주어라
			//큰 이미지 교체	
			for(var k=0;k<myImg.length;k++){
				myImg[k].src=myImg[k].src.replace("over.png","out.png");
			
			}

			for(var i=0;i<theAtag.length;i++){
				theAtag[i].nextSibling.style.opacity="0";
			}

			var theNext = this.nextSibling;
				if(theNext.nodeType==3){theNext=theNextSibling;}
				theNext.style.opacity="1";

			this.children[0].src=this.children[0].src.replace("out.png","over.png");
			//this.nextSibling.style.display="block";

			clearTimeout(myAuto); //마우스올렸을때 자동배너정지

			addNum = this.children[0].alt.charAt(2)-1;
		}

		theAtag[i].onblur = theAtag[i].onmouseout = function(){
			myAuto = setTimeout(autoBanner,2500);
		}
	}
	var addNum = 0; //배너번호
	function autoBanner(){
		addNum++;
		if(addNum>=theAtag.length){
			addNum=0;
		}
		theAtag[addNum].onmouseover();
		myAuto = setTimeout(autoBanner,2500); // 재귀함수 자기자신을 호출해서 1.5초후에 돌아가야하니 재귀함수사용
	}

	var myAuto = setTimeout(autoBanner,2500); //자동이벤트함수를 호출해야실행됨

	var aGallery = document.getElementById("aGallery"); //큰그림 a
	aGallery.onfocus = aGallery.onmouseover = function(){
		clearTimeout(myAuto);
	}
	aGallery.onblur = aGallery.onmouseout = function(){
		myAuto = setTimeout(autoBanner,2500);
	}
}


if(window.addEventListener){ 
	window.addEventListener("load",galleryLoad,false);
}else if(window.attachEvent){
	window.attachEvent("onload",galleryLoad);


}

