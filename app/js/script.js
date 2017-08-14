/* Variable Elements */
var body = $('body'),
	overflowBodyHide = body.css('overflow:hidden'),
	dialogPop = $('#dialogPopUp'),
	dialogClick = $('#dialog');

/* Callback Functions */
function dialog() {
	$('#dialogPopUp').css("display","block");
	$('body').css("overflow","hidden");
	return;
}

function dialogClose() {
	$('#dialogPopUp').css("display","none");
	$('body').css("overflow","visible");
	$(document).keyup(function(e){
		if(e.which == '27') {
			$('#dialogPopUp').css("display","none");
			$('body').css("overflow","visible");
		}
	});
	return;
}