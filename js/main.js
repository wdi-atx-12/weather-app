  console.log("helloworld!");
$(document).ready( function(){
  console.log('I am ready for this stuff');
    // eventually this should be triggered by search button
    $("form").submit(function(e) {
  e.preventDefault();
  requestWeatherData();
});
});

function requestWeatherData() {
  // this should request live weather data from API
  // eventually based on what the user searches
  console.log('Requesting Data');

  $.ajax({
    method: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather',
    data: $("form").serialize(),
    dataType: 'json',
    success: onSuccess,
    error: onError,
  });
}

function onSuccess(data) {
  // TODO: code me
  var imgSource = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

  $('.temperature').html(data.main.temp);
  $('.description').html(data.weather[0].description);
  $('.icon-container').html(`<img src=${imgSource}>`);
  console.log('Request successful');
  console.log(data);
}

function onError() {
  // TODO: code me
  $('.city-error').css('display', 'block'); 
  console.log('Oops its broken');
};
