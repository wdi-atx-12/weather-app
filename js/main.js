/* Javascript goes here! */
console.log('is your script running? better go catch it!');

$(document).ready(function(){
  console.log('ready');

//I DONT KNOW WHAT TO DO TO MAKE MY WEBSITE DELETE OLD STUFF ON ENTRY!!!
  $('form').submit(function(event) {
    event.preventDefault();
    // $('.temperature').remove();
    // $('.humidity').remove();
    // $('.description').remove();

    requestWeatherData();
  });
});

function requestWeatherData(){
  console.log('requesting data...');
  $.ajax({
    method: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather',
    data: $('form').serialize() + '&units=imperial&appid=a77765c844f61df44fe43412c991b9cf',
    dataType: 'json',
    success: onSuccess,
    error: onError
  })
}

function onSuccess(data) {
  console.log('success. proceed.');
  displayCityAndIcon(data);
  displayTemp(data);
  displayHumid(data);
  displayDescription(data);
}

function onError() {
  console.log('errororororor');
  $('.city-error').css('display', 'block');
}

function ifInvalidEntry(data){

}


// error 403 forbidden for img :'(
function displayCityAndIcon(data){
  var cityName = String(data.name);
  var iconID = String(data.weather[0].icon);
  var img = '<img src="http://openweathermap.org/img/w/" + iconID +".png">';
  console.log(iconID);
  console.log(img);
  $('.icon').append(img);
  $('.results-city').append(cityName);
}

function displayTemp(data){
  var temp = parseFloat(data.main.temp);
  console.log(temp);
  $('.temperature').append(temp);
}

function displayHumid(data){
  var humidity = parseFloat(data.main.humidity);
  console.log(humidity);
  $('.humidity').append(humidity + '%');
}

function displayDescription(data){
  var description = String(data.weather[0].description);
  $('.description').append('The weather is currently: ' + description + '.');
}
