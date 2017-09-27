/* Javascript goes here! */
$(document).ready(function(){
	console.log('doc ready');
	$('.get-weather').on('click', requestWeatherData)
});

function requestWeatherData(event){
	event.preventDefault();
	clearWeather();
	var city = $('.weather-city').val();
	$.ajax({
		method: 'GET',
		url: 'http://api.openweathermap.org/data/2.5/weather',
		data:'q='+city+"&APPID=3144149a97be3c6915ea0d79b1d0cebb",
		dataType:'json',
		success: onSuccess,
		error: onError
	})
}

function onSuccess(data){
	console.log("Request successful");
	console.log(data);
	//Set weather text
	setTemp(data);
	//find and set icon && flag
	setIcon(data)
	setFlag(data)
	setDesc(data)
}

function onError(){
	console.log('Data request unsuccesful.');
	$('.city-error').css('display','block');
}
function setTemp(data){
	var humidity = data['main'].humidity;
	var temp = data['main'].temp;
	temp = Math.floor((9/5)*(temp-273)+32);
	$('.temperature').text(temp +"F");
	$('.humidity').text(humidity);	
}
function setIcon(data){
	console.log(data.weather[0].icon);
	var icon_code = data.weather[0].icon;
	var icon_src = '<img src="http://openweathermap.org/img/w/' +icon_code+'.png">';  	
	$('.icon-container').append(icon_src)

}
function setFlag(data){
	var country_code = data.sys.country;
	var src = 'file:///C:/Users/Cesco%20IV/Desktop/wdi-atx-12/homework/weather-app/4x3/'+country_code+'.svg';
	$('.flag').attr('src', src);
	$('.flag').css('display', 'block');
}
function setDesc(data){
	var label = data.weather[0].main;
	var desc = data.weather[0].description;
	$('.description-label').text(label);
	$('.description').text(desc);
}
function clearWeather(){
	$('.icon-container').empty();
}