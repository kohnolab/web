$(document).ready(function() {
	$("#former_information dd.title").hover(function(){
	 	if ($(this).next().next().is(".abstract")) {
		$(this).css("cursor","pointer");
		$(this).css("text-decoration","underline");
		}
	},function(){
		$(this).css("cursor","default");
		$(this).css("text-decoration","none");
		});
	$("#former_information dd.abstract").css("display","none");
	$("#former_information dd.title").click(function(){
	 	if ($(this).next().next().is(".abstract")) {
		$(this).next().next().slideToggle("slow");
		}
		});
});