var Utils = {
	createCarousel: function (
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
	},

	saveToLocalStorage: function (key, value) {
		localStorage.setItem(key, JSON.stringify(value));
	},

	retrieveFromLocalStorage: function (key) {
		return JSON.parse(localStorage.getItem(key));
	},

	removeFromLocalStorage: function (key) {
		localStorage.setItem(key, null);
	}
}