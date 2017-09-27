/* Javascript goes here! */
$(function () {
  $('.getWeatherData').submit(requestWeatherData);
});

function requestWeatherData(e) {
  e.preventDefault();
  $.ajax({
    method: 'GET',
    dataType: 'json',
    data: getDataSerialized({units: 'imperial'}),
    url: 'https://api.openweathermap.org/data/2.5/weather',
    success: onSuccess,
    error: onError
  });
}

function onError(request, error) {
  $('.error-msg').removeAttr('hidden');
}

function onSuccess(response) {
  $('.error-msg').attr('hidden','');
  $('.results-city').text(response.name);
  $('.results-icon').append();
  $('.results-flag').append();
  $('.temperature').text(response.main.temp + '° F');
  $('.humidity').text(response.main.humidity + '%');
  $('.description').text(response.weather.map(w => w.description).join(' '));

  // TODO set weather icon
  // TODO set country flag
}

function getDataSerialized(obj = {}) {
  let serialData = $('.getWeatherData').serialize();
  for(key in obj) {
    serialData += `&${key}=${obj[key]}`;
  }
  return serialData;
}
