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


  $.ajax({
    method: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=Austin&appid=50f94f818455a348c7481a5574d8700d',
    data: '',
    // type: 'default GET (Other values: POST)',
    dataType: 'json',
    // data: {param1: 'value1'},
    success: onSuccess,
    error: onError
  });
}

function onSuccess(data){
  //TODO: code me
  console.log('Request Successful');
  console.dir(data);
  console.dir(data);
  console.dir(data.weather[0]);
  console.dir(data.weather[0].description);


}

function onError(){
  //TODO: code me
  console.log('Error Error Error');
}
