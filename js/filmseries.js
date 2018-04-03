$(document).ready(function() {
	renderFilms();
});

function renderFilms() {
	$('#films').html(generateFilmsHtml(getFilmsToShow()));
	$('#films').slick({
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
	$('#films .dash-item').click(function() {
		window.location.href = "http://www.wesleyan.edu/filmseries/";
	});
}

function generateFilmsHtml(films) {
	return films.map(filmTemplate).join('');
}

function filmTemplate(film) {
	return `
	<div class="dash-item-wrapper film">
		<div class="dash-item shadow">
			<div class="dash-item-img" style="background-image:url(${film.photo || "../media/film-tape.jpg"})">
				<div class="dash-item-caption">
					<h5 class="main-caption">${film.name}
						<small>${film.year_made || ""}</small>
					</h5>
					<p class="sub-caption">${film.show_time} ${film.show_day}, ${film.show_date} &mdash; <em>${film.price}</em></p>
				</div>
			</div>
		</div>
	</div>
	`;
}

function getFilmsToShow() {
	return schedule.filter(function(film) {
		return new Date(film.show_date_numeric) >= new Date();
	});
}

var schedule = [
	{
		"name": "Call Me by Your Name",
		"photo": "https://nylon-img.imgix.net/featured_images/attachments/000/036/716/original/Screen_Shot_2017-11-22_at_12.39.22_PM.png?auto=format&ch=Width%2CDPR&q=75&w=640&ixlib=js-1.1.1&cs=strip&s=1cbead23f5c6d2bc79c475838fdb2a9e",
		"show_time": "8:00 PM", 
		"show_day": "Wednesday",
		"show_date": "March 28",
		"show_date_numeric": "2018-03-28",
		"duration": "132 min",
		"year_made": 2017,
		"country": "Italy",
		"price": "Free"
	},
	{
		"name": "Duck Season",
		"photo": "http://i150.photobucket.com/albums/s90/obviouslysubtle/c752c4b1-a866-4132-980f-21f86429eb3a_zpsaf0875ee.jpg",
		"show_time": "8:00 PM", 
		"show_day": "Thursday",
		"show_date": "March 29",
		"show_date_numeric": "2018-03-29",
		"duration": "90 min",
		"year_made": 2004,
		"country": "Mexico",
		"price": "Free"
	},
	{
		"name": "Fantastic Mr. Fox",
		"photo": "http://cinema.cornell.edu/Summer2017/images/fantastic-mr-fox.jpg",
		"show_time": "8:00 PM", 
		"show_day": "Friday",
		"show_date": "March 30",
		"show_date_numeric": "2018-03-30",
		"duration": "132 min",
		"year_made": 2009,
		"country": "USA",
		"price": "$5"
	},
	{
		"name": "Pierrot Le Fou",
		"photo": "https://www.bam.org/media/5292599/pierrotlefou613x463.jpg",
		"show_time": "8:00 PM", 
		"show_day": "Saturday",
		"show_date": "March 31",
		"show_date_numeric": "2018-03-31",
		"duration": "115 min",
		"year_made": 1965,
		"country": "France",
		"price": "Free"
	},
	{
		"name": "XXY",
		"photo": "https://www.critikat.com/wp-content/uploads/fly-images/37257/arton2260-980x0.jpg",
		"show_time": "8:00 PM", 
		"show_day": "Wednesday",
		"show_date": "April 4",
		"show_date_numeric": "2018-04-04",
		"duration": "91 min",
		"year_made": 2007,
		"country": "Argentina",
		"price": "Free"
	},
	{
		"name": "Welcome to the Dollhouse",
		"photo": "http://www.jjmurphyfilm.com/blog/wp-content/uploads/2008/06/425welcomedollhouse1031071.jpg",
		"show_time": "8:00 PM", 
		"show_day": "Thursday",
		"show_date": "April 5",
		"show_date_numeric": "2018-04-05",
		"duration": "88 min",
		"year_made": 1995,
		"country": "USA",
		"price": "Free"
	},
	{
		"name": "Phantom Thread",
		"photo": "https://media.newyorker.com/photos/5a998784b224117c02f50cb4/master/w_727,c_limit/Taylor-Power-of-Personal-Style-in-Phantom-Thread.jpg",
		"show_time": "8:00 PM", 
		"show_day": "Friday",
		"show_date": "April 6",
		"show_date_numeric": "2018-04-06",
		"duration": "130 min",
		"year_made": 2017,
		"country": "USA",
		"price": "$5"
	},
	{
		"name": "The Man from Laramie",
		"photo": "https://assets.mubi.com/images/film/2598/image-w1280.jpg?1481124461",
		"show_time": "8:00 PM", 
		"show_day": "Saturday",
		"show_date": "April 7",
		"show_date_numeric": "2018-04-07",
		"duration": "103 min",
		"year_made": 1955,
		"country": "USA",
		"price": "Free"
	},
	{
		"name": "Water Lilies",
		"photo": "https://static01.nyt.com/images/2008/04/04/arts/04lilies-600.jpg",
		"show_time": "8:00 PM", 
		"show_day": "Wednesday",
		"show_date": "April 11",
		"show_date_numeric": "2018-04-11",
		"duration": "85 min",
		"year_made": 2007,
		"country": "France",
		"price": "Free"
	},
	{
		"name": "A Conversation with Wesley Morris and A.O. Scott",
		"photo": null,
		"show_time": "8:00 PM", 
		"show_day": "Thursday",
		"show_date": "April 12",
		"show_date_numeric": "2018-04-12",
		"duration": null,
		"year_made": null,
		"country": null,
		"price": "Free"
	},
	{
		"name": "Crouching Tiger, Hidden Dragon",
		"photo": "http://www.televisual.com/images/news/3_1411464958_1083_012285.jpg.jpg",
		"show_time": "8:00 PM", 
		"show_day": "Friday",
		"show_date": "April 13",
		"show_date_numeric": "2018-04-13",
		"duration": "120 min",
		"year_made": 2000,
		"country": "Taiwan/Hong Kong/USA/China",
		"price": "$5"
	},
	{
		"name": "Ex Libris: The New York Public Library",
		"photo": "https://www.dia.org/sites/default/files/styles/events_main/public/exlibris.jpg?itok=q3sopVXx",
		"show_time": "2:00 PM", 
		"show_day": "Saturday",
		"show_date": "April 14",
		"show_date_numeric": "2018-04-14",
		"duration": "197 min",
		"year_made": 2017,
		"country": "USA",
		"price": "Free"
	},
	{
		"name": "Design for Living",
		"photo": "https://s3.amazonaws.com/criterion-production/images/4830-e78823cc5ce7ffd57811a48611208c9b/current_1286_034_large.jpg",
		"show_time": "8:00 PM", 
		"show_day": "Saturday",
		"show_date": "April 14",
		"show_date_numeric": "2018-04-14",
		"duration": "91 min",
		"year_made": 1933,
		"country": "USA",
		"price": "Free"
	},
	{
		"name": "A Silent Voice",
		"photo": "https://linfotoutcourt.com/wp-content/uploads/2017/06/a-silent-voice.jpg",
		"show_time": "8:00 PM", 
		"show_day": "Wednesday",
		"show_date": "April 18",
		"show_date_numeric": "2018-04-18",
		"duration": "130 min",
		"year_made": 2016,
		"country": "Japan",
		"price": "Free"
	},
	{
		"name": "Brimstone & Glory",
		"photo": "http://www.roxie.com/wp-content/uploads/2017/10/Brimstone_and_Glory_5-WEB-614x384.jpg",
		"show_time": "8:00 PM", 
		"show_day": "Thursday",
		"show_date": "April 19",
		"show_date_numeric": "2018-04-19",
		"duration": "67 min",
		"year_made": 2017,
		"country": "Mexico/USA",
		"price": "Free"
	},
	{
		"name": "Paddington 2",
		"photo": "http://trailers.apple.com/trailers/wb/paddington-2/images/thumbnail_27249.jpg",
		"show_time": "8:00 PM", 
		"show_day": "Friday",
		"show_date": "April 20",
		"show_date_numeric": "2018-04-20",
		"duration": "132 min",
		"year_made": 2018,
		"country": "UK",
		"price": "$5"
	},
	{
		"name": "High and Low",
		"photo": "http://3.bp.blogspot.com/-vU8w5xzHtbY/VNZzG1xPrJI/AAAAAAAAuc0/Yg-jUi3SRVU/s1600/HighandLowStill6.png",
		"show_time": "8:00 PM", 
		"show_day": "Saturday",
		"show_date": "April 21",
		"show_date_numeric": "2018-04-21",
		"duration": "143 min",
		"year_made": 1963,
		"country": "Japan",
		"price": "Free"
	},
	{
		"name": "Do the Right Thing",
		"photo": "http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/23-lfrb-dotherightthing_0.png?itok=VvDBPdRb&resize=1100x619",
		"show_time": "8:00 PM", 
		"show_day": "Wednesday",
		"show_date": "April 25",
		"show_date_numeric": "2018-04-25",
		"duration": "120 min",
		"year_made": 1989,
		"country": "USA",
		"price": "Free"
	},
	{
		"name": "A Fantastic Woman",
		"photo": "https://images.haarets.co.il/image/upload/w_2176,h_1267,x_24,y_3,c_crop,g_north_west/w_609,h_343,q_auto,c_fill,f_auto/fl_any_format.preserve_transparency.progressive:none/v1520180541/1.5869099.2370396922.jpg",
		"show_time": "8:00 PM", 
		"show_day": "Thursday",
		"show_date": "April 26",
		"show_date_numeric": "2018-04-26",
		"duration": "104 min",
		"year_made": 2017,
		"country": "Chile",
		"price": "Free"
	},
	{
		"name": "Top Gun",
		"photo": "https://files.elle.se/uploads/2017/05/topgun2.jpg",
		"show_time": "8:00 PM", 
		"show_day": "Friday",
		"show_date": "April 27",
		"show_date_numeric": "2018-04-27",
		"duration": "110 min",
		"year_made": 1966,
		"country": "USA",
		"price": "$5"
	},
	{
		"name": "The Heiress",
		"photo": "https://i.pinimg.com/736x/5f/63/8d/5f638d864ad86c5d778ac276a32b7c56--montgomery-clift-olivia-de-havilland.jpg",
		"show_time": "8:00 PM", 
		"show_day": "Saturday",
		"show_date": "April 28",
		"show_date_numeric": "2018-04-28",
		"duration": "115 min",
		"year_made": 1949,
		"country": "USA",
		"price": "Free"
	},
	{
		"name": "Bad Genius",
		"photo": "https://4.bp.blogspot.com/-vN_I145imFw/WY_MzEZ2XLI/AAAAAAAAFCc/IGucDyhypzAsVrdx3xLb3k8dS3nZWmk4wCLcBGAs/s1600/film-bad-genius.jpg",
		"show_time": "8:00 PM", 
		"show_day": "Wednesday",
		"show_date": "May 2",
		"show_date_numeric": "2018-05-02",
		"duration": "130 min",
		"year_made": 2017,
		"country": "Thailand",
		"price": "Free"
	},
	{
		"name": "Withnail & I",
		"photo": "https://suntimesmedia.files.wordpress.com/2017/04/withnail-and-i.jpg?w=763",
		"show_time": "8:00 PM", 
		"show_day": "Thursday",
		"show_date": "May 3",
		"show_date_numeric": "2018-05-03",
		"duration": "107 min",
		"year_made": 1987,
		"country": "UK",
		"price": "Free"
	},
	{
		"name": "Legally Blonde",
		"photo": "http://img.diply.com/article-images/a/78fb39b3-9240-4f96-8cdf-4a5aeb279da0.jpg?impolicy=desktop",
		"show_time": "8:00 PM", 
		"show_day": "Friday",
		"show_date": "May 4",
		"show_date_numeric": "2018-05-04",
		"duration": "96 min",
		"year_made": 2001,
		"country": "USA",
		"price": "$5"
	},
	{
		"name": "Vertigo",
		"photo": "http://cdn.jornaldaparaiba.com.br/assets/upload_imagens/fotos_publicadas/album-1/f85e75a27edf0bfcf2fc.jpg",
		"show_time": "8:00 PM", 
		"show_day": "Saturday",
		"show_date": "May 5",
		"show_date_numeric": "2018-05-05",
		"duration": "128 min",
		"year_made": 1958,
		"country": "USA",
		"price": "Free"
	},
]