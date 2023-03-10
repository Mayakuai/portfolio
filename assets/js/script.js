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
			console.log('visible');
		});
			$(".pop > .project-btn").click(function () {
				$(".pop").fadeOut(300);
				console.log('why')
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
