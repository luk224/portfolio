$("#buttonSpanish").click(function(){
	$(".spanish").attr("hidden", false);
	$(".english").attr("hidden", true);
});
$("#buttonEnglish").click(function(){
	$(".english").attr("hidden", false);
	$(".spanish").attr("hidden", true);
});