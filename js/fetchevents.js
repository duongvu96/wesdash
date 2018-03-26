$(document).ready(function() {
	getEvents();
})

// change this function for front-end
function updateCalendarItem(events) {
	var formatAllEvents = events.map(formatCalendarItem).join('');
	$("#calendar").html(formatAllEvents);
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
	'<div class = "event-name">',
		'<a href ="',
		event[4],
		'">',
		event[0],
		'</a>',
	'</div>',
	'<div class = "event-location">',
	event[1],
	'</div>',
	'<div class = "event-time">',
	eventTime,
	'</div>'
	];
	return css.join('');
}



function getEvents() {
	$.ajax({
		url: "http://eaglet.wesleyan.edu/MasterCalendar/iCalFeed.aspx?data=cr7N8e0fDWNjP%2btgb2leSQknEQLeOROtX%2biFGn9Jorc%3d",
		success: function(data) {
			// events is an array of events. each event is of the format: title, location, timestart, timeend, url
			var events = parseEvents(data)
			updateCalendarItem(events)
		}
	})

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
