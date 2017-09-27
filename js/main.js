console.log('hello');

$(function() {
	// eventually this should be triggered by search button
	requestWeatherData();
});

function requestWeatherData() {
	$('form').submit(function(event) {
		event.preventDefault();
		$.ajax({
		method: 'GET',
		url: 'http://api.openweathermap.org/data/2.5/weather',
		data: $("form").serialize(),
		dataType: 'json',
		success: onSuccess,
		error: onError
		});
	});
}


function onSuccess(data) {
//TODO
	console.log(data);
	var humidity = $('.humidity').text(data.main.humidity);
	var temperature = $('.temperature').text(data.main.temp);
	var pic = `<img src='http://openweathermap.org/img/w/${data.weather[0].icon}.png'>`;
	var flags = `<img src='flags/1x1/${data.sys.country}.svg'>`;
	var description = $('.description').text(data.weather[0].description);
	var image = $('.image').html(pic);
	var flag = $('.flag').html(flags);
}


function onError () {
//TODO
	console.log('Error');
	var description = $('.description').text('That\'s not a real city!');
}