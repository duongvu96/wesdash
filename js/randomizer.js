$(document).ready(function() {
	initializeRandomizer();
});

var timeOutShowLoading;

function initializeRandomizer() {
	$("#randomizer-options button").click(function(e) {
		fetchRandomCourse(e.target.dataset.randomType);

		// Show squirrel if it takes more than 300ms to fetch data
		timeOutShowLoading = setTimeout(function() {
			$("#randomizer-load").show();
			$("#randomizer-result").hide();
		}, 300);
	});
}

function displayCourse(courseData) {
	clearTimeout(timeOutShowLoading);
	$("#randomizer-load").hide();
	$("#randomizer-result").show();

	var courseTitleElement = $("#randomizer-result > a");
	courseTitleElement.text(`${courseData.full_code}: ${courseData.title}`);
	courseTitleElement.attr("href", courseData.url);

	$("#randomizer-result > p").text(`${courseData.instructor} \u2014 ${courseData.time}`);
}

function fetchRandomCourse(randomType) {
	$.ajax({
		url: "https://wesdash.herokuapp.com/randomizer",
		type: "get",
		contentType: "application/json",
		data: { 
			type: randomType.toUpperCase(),
		},
		success: function(courseData) {
			displayCourse(courseData);
		},
		error: function(xhr) {
		//Do Something to handle error
		}
	});
}