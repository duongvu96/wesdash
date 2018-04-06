// Use slick.js
function createCarousel(
	target, 
	slidesToShowFullScreen, 
	slidesToScrollFullScreen,
	slidesToShowSmallScreen,
	slidesToScrollSmallScreen) {
	$(target).slick({
		infinite: true,
		slidesToShow: slidesToShowFullScreen,
		slidesToScroll: slidesToScrollFullScreen,
		autoplay: true,
  		autoplaySpeed: 2000,
		responsive: [
		{
	    	breakpoint: 992,
	    	settings: {
	      		slidesToShow: slidesToShowSmallScreen,
	      		slidesToScroll: slidesToScrollSmallScreen,
	        	infinite: true,
	        	autoplay: true,
  				autoplaySpeed: 2000
	 		}
	    }]
	});
}