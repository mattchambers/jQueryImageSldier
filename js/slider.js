$(function(){
	//set interval
	  //animate margin left
	   //if last slide, got to postion 1 (0px)

	//configuration
	var width = 720;
	var animationSpeed = 1000;
	var pause = 3000;
	var currentSlide = 1;

	//cache DOM elements
	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');
	var interval;

	function startSlider(){
		interval = setInterval(function(){
		$slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function(){

			currentSlide++;
			if (currentSlide == $slides.length) {
				currentSlide = 1;
				$slideContainer.css('margin-left',0);
			}
		});


	},pause);
	}

	function pauseSlider(){
		clearInterval(interval);
	}


	//listen for mouse enter and pause 
	//resume on mouseleave 


	$slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);
	startSlider();


});