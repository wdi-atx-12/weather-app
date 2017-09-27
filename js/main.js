/* Javascript goes here! */
$(document).ready(function () {

  $('.getWeatherData').on('submit', e => {

    e.preventDefault();


    $.ajax({

      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather',
      data: $('form').serialize() + ('&units=imperial'),
      dataType: 'json',
      success: onSuccess,
      error: onError

    })
  });

});


function onSuccess(returnData) {

  $('.city-error').css('display', 'none');
  var imgSource = `http://openweathermap.org/img/w/${returnData.weather[0].icon}.png`;
  var country = returnData.sys.country.toLowerCase();

  $('.results-city').html(returnData.name);
  $('.temperature').html(returnData.main.temp);
  $('.humidity').html(returnData.main.pressure);
  $('.description').html(returnData.weather[0].description);
  $('.icon-container').html(`<img src=${imgSource}>`);
  $('.flag-container').html(`<span class="flag-icon flag-icon-${country}"></span>`);
}

function onError() {
  $('.city-error').css('display', 'block');
}
