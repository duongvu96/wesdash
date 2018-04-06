$(document).ready(function() {
	initializeRandomizer();
});

function initializeRandomizer() {
	$("#randomizer-options button").click(function(e) {
		console.log(e.target.dataset.randomType);
		fetchRandomCourse(e.target.dataset.randomType);
	});
}

function displayCourse(courseData) {
	var courseTitleElement = $("#randomizer-result > a");
	courseTitleElement.text(`${courseData.full_code}: ${courseData.title}`);
	courseTitleElement.attr("href", courseData.url);
}

function fetchRandomCourse(randomType) {
	$.ajax({
		url: "http://localhost:3000/randomizer",
		type: "get",
		contentType: "application/json",
		data: { 
			type: randomType.toUpperCase(),
		},
		success: function(courseData) {
			console.log(courseData);
			displayCourse(courseData);
		},
		error: function(xhr) {
		//Do Something to handle error
		}
	});
}