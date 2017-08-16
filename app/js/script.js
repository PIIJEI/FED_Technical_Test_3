/* Variable Elements */
var body = $('body'),
	overflowBodyHide = body.css('overflow:hidden'),
	dialogPop = $('#dialogPopUp'),
	dialogClick = $('#dialog');

/* Callback Functions */
function dialog() {
	$('#dialogPopUp').fadeIn(400).css("display","block");
	$('body').css("overflow","hidden");
	return;
}

function dialogClose() {
	$('#dialogPopUp').fadeOut(400).css("display","none");
	$('body').css("overflow","visible");
	$(document).keyup(function(e){
		if(e.which == '27') {
			$('#dialogPopUp').css("display","none");
			$('body').css("overflow","visible");
		}
	});
	return;
}

function popUpTip() {
	$('.tooltip').fadeIn().css("display","block");
	return;
}

function closeTip() {
	$('.tooltip').css("display","none");
	return;
}

$("#sales").on("click",function(){
	$("#sales").addClass("active-report");
	$("#tickets").removeClass("active-report");
	$("#graph__sales").removeClass("displayHidden");
	$("#graph__tickets").addClass("displayHidden");
});

$("#tickets").on("click",function(){
	$("#tickets").addClass("active-report");
	$("#sales").removeClass("active-report");
	$("#graph__tickets").removeClass("displayHidden");
	$("#graph__sales").addClass("displayHidden");
});


$('#bars').click(function(){
	$('#contentNav').slideToggle(150);
});

function loginForm() {
	$('#login-form').fadeIn(300).removeClass('hidden');
	$('body').css("overflow","hidden");
}

$('#closeBox').on('click',function(){
	$('#login-form').fadeOut(300).addClass('hidden');
	$('body').css("overflow","visible");
});

$(document).ready(function() {
    $('#fullpage').fullpage({
      navigation: true,
      navigationPosition: 'left',
      scrollingSpeed: 500
    });
});


$('#f-mobile-bars-only').click(function(){
	$('#f-main-nav').slideToggle(300).css("display","block");
});

$(".scrollDown").click(function(event){
	 event.preventDefault();
	 //calculate destination place
	 var dest=0;
	 if($(this.hash).offset().top > $(document).height()-$(window).height()){
	      dest=$(document).height()-$(window).height();
	 }else{
	      dest=$(this.hash).offset().top;
	 }
	 //go to destination
	 $('html,body').animate({scrollTop:dest}, 560,'swing');
});