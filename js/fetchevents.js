$(document).ready(function() {
	var storedEvents = getStoredEvents();
	if (storedEvents === null || new Date() > new Date(storedEvents.expiry)) {
		removeStoredEvents();
		getEvents();
	} else {
		updateCalendar(storedEvents.events);
	}
})

function getEvents() {
	$.ajax({
		url: "http://eaglet.wesleyan.edu/MasterCalendar/iCalFeed.aspx?data=cr7N8e0fDWNjP%2btgb2leSQknEQLeOROtX%2biFGn9Jorc%3d",
		success: function(data) {
			// events is an array of events. each event is of the format: title, location, timestart, timeend, url
			var events = parseEvents(data);
			var formattedEvents = events.map(formatCalendarItem).join('');
			storeEvents(formattedEvents);
			updateCalendar(formattedEvents);
		}
	})

}

// change this function for front-end
function updateCalendar(formattedEvents) {
	$("#calendar").html(formattedEvents);
	$('#calendar').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
  		autoplaySpeed: 2000,
		responsive: [
		{
	    	breakpoint: 992,
	    	settings: {
	      		slidesToShow: 1,
	      		slidesToScroll: 1,
	        	infinite: true,
	        	autoplay: true,
  				autoplaySpeed: 2000
	 		}
	    }]
	});
}

function storeEvents(events) {
	Utils.saveToLocalStorage("eventsToday", {
		events: events,
		expiry: getEventsExpiry()
	});
}

function getStoredEvents() {
	return Utils.retrieveFromLocalStorage("eventsToday");
}

function removeStoredEvents() {
	Utils.removeFromLocalStorage("eventsToday");
}

// change this function for front-end
function formatCalendarItem(event) {
	// TODO: needs some finessing
	// check if start is date based or time based
	var isTime = event[2].search("T") > -1;
	if (isTime) {
		var time = event[2].match("(?<=T).*")[0];
		var hour = time.substr(0,2);
		if (parseInt(hour.substr(0)) > 12) {
			hour = parseInt(hour.substr(0)) - 12;
			var eventTime =  hour.toString() + "pm";
		} else {
			var eventTime =  hour + "am";
		}
		
	} else {
		var eventTime = event[2];
	}

	var css = [
	'<div class="event shadow dash-item-carousel">',
		'<div class="event-name">',
			'<a class="faded-link" href ="', event[4], '">',
				event[0],
			'</a>',
		'</div>',
		'<div class="event-details">',
			'<p class = "event-location">',
				event[1],
			'</p>',
			'<p class = "event-time">',
				eventTime,
			'</p>',
		'</div>',
	'</div>'
	];
	return css.join('');
}

function parseEvents(icsdata) {
	var re = /BEGIN:VEVENT(?:.|\s)*?END:VEVENT/g;
	var events = icsdata.match(re);
	var parsedEvents = [];
	for (var i = 0; i < events.length; i ++) {
		if (isEventToday(events[i])) {
			parsedEvents.push(parseEventDetails(events[i]));
		} else {
			break;
		}
	}
	// var parsedEvents = events.map(parseEventDetails)
	return parsedEvents;
}


function isEventToday(event) {
	var dateRow = event.match("DTSTART.*")[0];
	var date = dateRow.match(/[0-9]{8}/g)[0];

	var today = new Date();
	var year = today.getFullYear();
	if (today.getDate() < 10) {
		var day = '0' + today.getDate();
	} else {
		var day = today.getDate();
	}
	if (today.getMonth()+1 < 10) {
		var month = '0' + (today.getMonth()+1);
	} else {
		var month = today.getMonth()+1;
	}
	var todayFormatted = "".concat(today.getFullYear(), month, day);
	return date === todayFormatted;
}

function parseEventDetails(event) {
	var detailKeys = ["SUMMARY", "LOCATION", "DTSTART;(?:TZID=GMT|VALUE=DATE)", "DTEND;(?:TZID=GMT|VALUE=DATE)", "UID"]
	var detailValues = detailKeys.map(function(key) {
		return parseDetail(event, key)
	})
	return detailValues
}

function parseDetail(event, entryPattern) {

	var entryPattern = "".concat("(?<=",entryPattern,":).*");
	var patternAsRegex = new RegExp(entryPattern);
	var parsedDetail = event.match(patternAsRegex)[0]
	return parsedDetail
}

function getEventsExpiry() {
	var endOfDay = new Date();
	endOfDay.setHours(23, 59, 59);
	return endOfDay;
}