$(window).on("load", function(){
	$(".img").addClass("fadeIn").css("opacity", "1.0");
	$("h1, p, ul").addClass("fadeInRight");
	$("h1").css("animation-delay", "0.5s");
	$("p").css("animation-delay", "0.25s");
	var i = setInterval(function(){setOpaque();}, 1000);
});
function setOpaque(){
	$("h1, p, ul").css("opacity", "1.0")
	clearInterval(i);
}