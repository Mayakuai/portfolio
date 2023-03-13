(function( $ ) {
	"use strict";
//   //Add JS for active nav link
  $(document).ready(function($) {


		//Nav Bar Color transition
	 $(window).scroll(function(){
			var scrollTop = $(window).scrollTop();
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

		//Mobile Menu Toggler
		$('.toggle-menu').click (function(){
		  $(this).toggleClass('active');
		  $('#menu').toggleClass('open');
		});

		$('.mobile-nav a').bind('click',function(event){
			var $anchor = $(this);
			$('a').each(function () {
				$(this).removeClass('active');
			})
			$(this).addClass('active');
			$('#menu').removeClass('open');

			event.preventDefault();
			console.log("mobile-nav a");
		});


		var addClassOnScroll = function () {
      var windowTop = $(window).scrollTop();
      $('section[id]').each(function (index, elem) {
        var offsetTop = $(elem).offset().top;
        var outerHeight = $(this).outerHeight(true);

        if( windowTop > (offsetTop - 50) && windowTop < ( offsetTop + outerHeight)) {
          var elemId = $(elem).attr('id');
          $("nav ul li a.active").removeClass('active');
          $("nav ul li a[href='#" + elemId + "']").addClass('active');
				}
			});
    };

    $(function () {
      $(window).on('scroll', function () {
        addClassOnScroll();
      });
    });

		// About Section Tabs
  	$(".tabs-menu a").click(function(event) {
  		event.preventDefault();
  		$(this).parent().addClass("current");
  		$(this).parent().siblings().removeClass("current");
  		var tab = $(this).attr("href");
  		$(".tab-content").not(tab).css("display", "none");
  		$(tab).fadeIn(1200);
			console.log('active');
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


  });
})( jQuery );
