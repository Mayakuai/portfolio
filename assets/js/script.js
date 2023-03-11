(function( $ ) {
	"use strict";
//   //Add JS for active nav link
  $(document).ready(function($) {
  	$(".tabs-menu a").click(function(event) {
  		event.preventDefault();
  		$(this).parent().addClass("current");
  		$(this).parent().siblings().removeClass("current");
  		var tab = $(this).attr("href");
  		$(".tab-content").not(tab).css("display", "none");
  		$(tab).fadeIn(1200);
			console.log('active');
  	});


	//Mobile Menu Toggler

	$('#mobile-menu-button').on('click',function(e){
		e.preventDefault();

		// Toggle the active class
		$('body').toggleClass('mobile-menu-active');
		$(this).toggleClass('is-active');

		// Aria toggles
		$(this).attr('aria-expanded', function (i, attr) {
			return attr == 'true' ? 'false' : 'true'
		});

		// Text Toggler
		var text = $('#mobile-menu-button .hamburger-text').text();
		$('#mobile-menu-button .hamburger-text').text(text == 'Menu' ? 'Close' : 'Menu');
	});




		//Header Anchor Tag to About section
		$('nav a').bind('click',function(event){
			var $anchor = $(this);
			$('a').each(function () {
				$(this).removeClass('active');
			})
			$(this).addClass('active');
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top-80
			}, 1500,'easeInOutExpo');

			event.preventDefault();
			console.log("nav");
		});
		$('.hero a').bind('click',function(event){
			var $anchor = $(this);
			$('a').each(function () {
				$(this).removeClass('active');
			})
			$(this).addClass('active');
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500,'easeInOutExpo');

			event.preventDefault();
			console.log("hero a");
		});


		///Magnific Popup
		$('.popup-modal').magnificPopup({
			type: 'inline',
			preloader: false,
			modal: true
		});

		$(document).on('click', '.popup-modal-dismiss', function (e) {
			e.preventDefault();
			$.magnificPopup.close();
		});

		//Portfolio gallery
		$('.project-btn').click(function () {
			$('#' + $(this).data("index")).fadeIn(300);
		});
			$(".pop > .project-btn").click(function () {
				$(".pop").fadeOut(300);
			});

		//Nav Bar Color transition
	 $(window).scroll(function(){
	    var scrollTop = $(window).scrollTop();
	    // if (scrollTop > 49) {
	    //     $('body').addClass('header-fixed');
	    // } else {
	    //     $('body').removeClass('header-fixed');
	    // }

			var headerHeight = $('.navbar').height();
	    var topOffset = $('#about').offset().top;
	    var abtTransitionPoint = topOffset - headerHeight;
			var contactOffset = $('#contact').offset().top;
			var contactTransitionPoint = contactOffset - headerHeight;
	    if (scrollTop > abtTransitionPoint) {
	        $('.navbar').addClass('sunshine');
	    } else {
	        $('.navbar').removeClass('sunshine');
	    }
			if (scrollTop > contactTransitionPoint) {
				$('.navbar').removeClass('sunshine');
					$('.navbar').addClass('white');
			} else {
					$('.navbar').removeClass('white');
			}
	  });

  });
})( jQuery );
