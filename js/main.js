/* Javascript goes here! */
console.log('Sanity Check');

var mapURL;
var toF;
var thisMap;

$('.weather-app').css('background-color', 'rgba(255,255,255,.5)');

$(document).ready(function(){
  //Initialized description
  $('.description').append("<strong>Condition Outside:</strong> ");

  $('.submission').click(function(event){
    event.preventDefault();
  });

  $('.submission').on('click', function(){
    var userInput = $('.weather-city').val();
    requestWeatherData(userInput);
    console.log(userInput);
  });
});

function requestWeatherData(cityName){
  //AJAX request based on user input
  $.ajax({
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather',
    dataType:'json' ,
    data: 'q=' + cityName + '&APPID=461bf158b2034c572293a7dfe13219a2',
    success: onSuccess,
    error: onError
  });
};

function onSuccess(weatherData){
  $('.results').css('display', 'block');
  $('.results-city').empty();
  $('.temperature').empty();
  $('.humidity').empty();
  $('.description').empty();
  $('.flag-icon').empty();
  $('.city-error').css('display', 'none');

  var toF = parseInt(((((weatherData.main.temp)-273.15)*1.8)+32));
  console.dir(toF);
  $('.results-city').append(weatherData.name + ", " + weatherData.sys.country);
  $('.temperature').append(toF + '°');
  $('.humidity').append(weatherData.main.humidity);
  $('.description').append("<strong>Condition Outside:</strong> " + weatherData.weather[0].main);
  $('.flag-icon').append('<img src="../../../../flag-icon-css-master/flags/4x3/' + weatherData.sys.country + '.svg" style="width:304px;height:228px;">');
  // mapURL =  getWeatherMap(weatherData.coord.lon, weatherData.coord.lat)
  // console.log(mapURL);
  // $('body').css("backgroundImage", mapURL);
};

function onError(){
  $('.results').css('display', 'none');

  $('.city-error').css('display', 'inline-block');
  $('.city-error').css('color', 'red');
  console.log('dangit');
};

function getWeatherMap(x, y){
  // thisMap = 'http://tile.openweathermap.org/map/clouds_new/' + '6' + '/' + x + '/' + y + '.png?appid=' + '461bf158b2034c572293a7dfe13219a2';
  thisMap = 'http://tile.openweathermap.org/map/clouds_new/6/-97.74/30.37.png?appid=461bf158b2034c572293a7dfe13219a2'
  console.log(thisMap)
  $.ajax({
    method: 'GET',
    url: thisMap,
    dataType:'json' ,
    // data: 'q=' + cityName + '&APPID=461bf158b2034c572293a7dfe13219a2',
    success: mapSuccess,
    // error: onError
  });
  function mapSuccess(mapData){
    console.log(mapData);
    console.log("here");
  };
};

getWeatherMap('-97.74', '30.37');
