/*global $*/




$(function(){
	'use strict';
	
	
	
	
	
	
	
	//scroll to elements
	$('.navbar li a').click(function(e){
		e.preventDefault();
		$('html,body').animate({
			
			scrollTop:$('.'+$(this).data('scroll')).offset().top-11
		},1000);
	});
	
	
	
	
	
	//add active class on links
	$('.navbar li a').click(function(){
		$(this).addClass('active').parent().siblings().find('a').removeClass('active')
	})
	
	
	
	//tyrewriter effect
	
	
	var theText=$('.typer').data('text'),
		theTextLength=theText.length,
		n=0,
	theTyper=setInterval(function(){
		
		$('.typer').each(function(){
			
			$(this).html($(this).html()+theText[n]);
		});
		
		n+=1;
		if(n>=theTextLength){
			clearInterval(theTyper)
		}
	},200);
	
	
	
	//scroll to top
	
	var scrollButton=$('#scroll-top');
	
	$(window).scroll(function(){
		
		$(this).scrollTop()>=500? scrollButton.fadeIn():scrollButton.fadeOut();
	})
	
	
	scrollButton.click(function(){
		
		$("html,body").animate({
			scrollTop:0
		},600);
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})