/* Javascript goes here! */

$(document).ready(function(){


  $('.getWeatherData').submit(function(event){
    event.preventDefault();
    //we have to prevent the default event so the page doesn't
    //refresh every time it loads.
    requestWeatherData();

    //NOTE: So, how is it that you can use the dataType to get the name from the
    //obj? /\(--__--)/\

  })
})

function requestWeatherData(myCity){
  //TODO: Code me
  //Okay now I get it. So requestWeatherData literally just means put AJAX here.
  //Could that have been better explained earlier?
  $.ajax({
    //The method we post or receive
    method: 'GET',
    //A link to the source
    url: 'http://api.openweathermap.org/data/2.5/weather',
    //What data type are we using?
    dataType: 'json',
    data: $('form').serialize(),
    //What do we want to do if it succeeds or fails?
    success: onSuccess,
    error: onError
  })
  //console.log('here is the city ', myCity);
  //console.log('Testing requestWeatherData function');
}

function calculateTempurature(myCity){
  //k is placement for now
  console.log(myCity, ' is my city')
  var k = myCity.main.temp;
  var temp = Math.floor(9/5 * (k - 273) + 32);
  $('.temperature').text(temp + 'F');
}

function onSuccess(response){
  //TODO: Code me
  //console.log('response received', response)
  // on successful
  // append weahter data to page
    $('.results-city').text(response.name);
    var icon = response.weather[0].icon;
    var pic = `http://openweathermap.org/img/w/${icon}.png`;
    $('.image-icon').attr('src', pic);
    $('.humidity').text(response.main.humidity + '%');
    calculateTempurature(response);

  //Okay so now append the city name. Check classes.
  console.log('Request successful');
  console.log(response);
  console.log(response.weather[0].description)
}

function onError(){
  //TODO: Code me
  console.log('It be dead. You broke it.');
  $('.description').text('Sorry, this page doesn\'t exist. 404 ERROR');
}
