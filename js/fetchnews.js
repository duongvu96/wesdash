$(document).ready(function() {
	createCarousel("#news-carousel", 2, 2, 1, 1);

	getArgusNews();
	getWesEduNews();
	getWesleyingNews();
	getGroundhogNews();
	getArtifexNews();
})

function getArgusNews() {
	$.ajax({
		url: "http://wesleyanargus.com/",
		crossDomain: true,
		success: function(data) {
			var html = $($.parseHTML(data));
			var topStory = html.find(".row.content.top");
			var imgSrc = topStory.find("img").attr("src");
			var caption = topStory.find("h2 span").text();
			var link = topStory.find("h2 span a").attr("href");

			updateDashItem("#argus", {
				imgSrc: imgSrc,
				caption: caption,
				link: link
			});
		}
	});
}

function getWesEduNews() {
	$.ajax({
		url: "http://wesleyan.edu/",
		crossDomain: true,
		success: function(data) {
			var html = $($.parseHTML(data));
			var topStory = html.find(".newspic.columns");
			var interchangeImages = topStory.find("img").attr("data-interchange").split(", ");
			var imgSrc = "http://wesleyan.edu" + interchangeImages[interchangeImages.length - 2].substring(1);
			var caption = topStory.find(".caption").text();
			var link = topStory.find("a.news-feat-img").attr("href");

			updateDashItem("#wesedu", {
				imgSrc: imgSrc,
				caption: caption,
				link: link
			});
		}
	});
}

function getWesleyingNews() {
	$.ajax({
		url: "http://wesleying.org/category/featured/",
		crossDomain: true,
		success: function(data) {
			var html = $($.parseHTML(data));
			var topStory = html.find("article").first();
			var imgSrc = topStory.find(".entry-content img").first().attr("src");
			var caption = topStory.find(".entry-title > a").text();
			var link = topStory.find(".entry-title > a").attr("href");

			updateDashItem("#wesleying", {
				imgSrc: imgSrc,
				caption: caption,
				link: link
			});
		}
	});
}

function getGroundhogNews() {
	$.ajax({
		url: "https://wesgroundhog.wordpress.com/category/wesleyan/",
		crossDomain: true,
		success: function(data) {
			var html = $($.parseHTML(data));
			var topStory = html.find("article").first();
			var imgSrc = topStory.find(".featured-image img").first().attr("src");
			var caption = topStory.find(".entry-title > a").text();
			var link = topStory.find(".entry-title > a").attr("href");

			updateDashItem("#groundhog", {
				imgSrc: imgSrc,
				caption: caption,
				link: link
			});
		}
	});
}

function getArtifexNews() {
	$.ajax({
		url: "http://wesleyanartifex.org/",
		crossDomain: true,
		success: function(data) {
			var html = $($.parseHTML(data));
			var topStory = html.find(".summary-item").first();
			var imgSrc = topStory.find(".summary-thumbnail > img").attr("data-src");
			var captionElement = topStory.find(".summary-content > .summary-title > a");
			var caption = captionElement.text();
			var link = "http://wesleyanartifex.org" + captionElement.attr("href");

			updateDashItem("#artifex", {
				imgSrc: imgSrc,
				caption: caption,
				link: link
			});
		}
	});
}

function updateDashItem(targetId, info) {
	$(targetId + " .dash-item-img").css("background-image", "url(" + info.imgSrc + ")");
	$(targetId + " .dash-item").click(function() {
		window.location.href = info.link;
	});
	$(targetId + " .dash-item-caption > .main-caption").text(info.caption);
}