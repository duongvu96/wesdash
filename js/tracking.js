var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-83954022-3']);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = 'https://ssl.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


function trackItemClick(eventName) {
	_gaq.push(['_trackEvent', eventName, 'clicked']);
	console.log(eventName);
};

var clickTrackingItems = 
	['#useful-links a', '#news a.header', '#news .dash-item-img', '#eats .dash-item-img', 'a.twitter-timeline'];

$(document).ready(function() {
	clickTrackingItems.forEach(function(itemSelector) {
		$(itemSelector).click(function(e) {
			trackItemClick(e.target.id);
		});
	});

	$('.film .dash-item-img').click(function(e) {
		trackItemClick('event');
	});
	$('.event .event-name a').click(function(e) {
		trackItemClick('event');
	});
});

