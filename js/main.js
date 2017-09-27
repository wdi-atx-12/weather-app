console.log("yo")

/* Javascript goes here! */

$(document).ready(function(){
console.log('JQuery doing stuff');
//eventually, this should be triggered by search button click/submit
requestWeatherData();


});

function requestWeatherData(){
  console.log('requesting data');
  //this should request live weather data from the API
  //eventually based on the user types
  $("form").submit(function(event){
  event.preventDefault();


  $(".temperature").text('');
  $(".humidity").text('');
  $(".results-city").text('');
  $(".results-flag").text('');
  console.log('huh?');



  $.ajax({
    method: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather',
    // url: 'http://api.openweathermap.org/data/2.5/weather?q=austin&appid=50f94f818455a348c7481a5574d8700d',

    // data: $("form").serialize(),
    // type: 'default GET (Other values: POST)',
    dataType: 'json',
    data: $("form").serialize(),
    success: onSuccess,
    error: onError

  })
   console.log( $('form').serialize() );
  });
}

function onSuccess(data){
  //TODO: code me
  var weatherIcon = data.weather[0].icon;
  var weatherType = data.weather[0].description;
  var countryFlag = data.sys.country
  var kelvin = data.main.temp;
  var fahrenheit =  ((9/5)*(kelvin - 273) + 32);
  $(".results-flag").append('<img src= flag-icon-css-master/flags/4x3/'+countryFlag+'.svg>');
  $(".temperature").append(fahrenheit.toFixed(2) + '°F');
  $(".humidity").append(data.main.humidity+"%");

  $(".results-city").append(data.name + '<img src=http://openweathermap.org/img/w/' + weatherIcon + '.png>');
  $(".description").append(weatherType)

  console.log('Request Successful');
  console.dir(data);
  console.dir(data.main);
  console.dir(data.main.temp);
  console.dir(data.main.humidity);
  console.log(data.sys.country);


}

function onError(data){
  //TODO: code me
  $(".city-error").css("display", "block");
  console.log('Error Error Error');
}
