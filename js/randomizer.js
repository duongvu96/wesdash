$(document).ready(function() {
	initializeRandomizer();
});

function initializeRandomizer() {
	$("#randomizer-options button").click(function(e) {
		$("#randomizer-result").hide();
		$("#randomizer-load").show(function() {
			setTimeout(function() {
				fetchRandomCourse(e.target.dataset.randomType)
			}, 500);
		});
	});
}

function displayCourse(courseData) {
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