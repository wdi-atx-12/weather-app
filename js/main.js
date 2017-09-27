$(document).ready(function(){

$('form').submit('click', function(event) {

var myCity = $('.getWeatherData').val().trim();

    event.preventDefault();

    $.ajax({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?q=${myCity}&&appid=373b383635979fcc983487687a41a48a',
      dataType: 'json',
      success: onSuccess,
      error: onError
    })
  });

  function onSuccess(data) {
    console.log("Success");
    console.log(data);
    var temp = (data.main.temp);
    var fahren = (9/5) * (temp - 273) + 32;
    var humid = (data.main.humidity);
    $('.temperature').text(Math.round(fahren) + " degrees Fahrenheit");
    $('.humidity').text(humid + '%');
    myCity = $('.weather-city').val().trim();
  };

  function onError () {
    console.log("Error: Please input a valid city name.");
  };
});
