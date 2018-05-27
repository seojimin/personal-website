/* main.js */
$(document).ready(function(){
	$(".allMenuBtn").click(function(){		
		$(".allMenu").show(200);
		$(".allMenuBg").show();	
	});
	$(".closeBtn").click(function(){
		$(".allMenu").hide(200);
		$(".allMenuBg").hide();

	});

	
	
		$(".autoBtn").click(function(){
			$(this).css({"right":"10px","background-color":"#fd632b","transition":"all 0.5s ease"});
	

	});

});
