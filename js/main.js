/* Javascript goes here! */
const IMG_URL = 'http://openweathermap.org/img/w/';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather/';

$(function () {
  $('.getWeatherData').submit(requestWeatherData);
});

function requestWeatherData(e) {
  e.preventDefault();
  $.ajax({
    method: 'GET',
    dataType: 'json',
    data: getDataSerialized({units: 'imperial'}),
    url: API_URL,
    success: onSuccess,
    error: onError
  });
}

function onError(request, error) {
  $('.error-msg').removeAttr('hidden');
  $('.results').attr('hidden', '');
}

function onSuccess(response) {
  $('.error-msg').attr('hidden', '');
  $('.results').removeAttr('hidden');
  $('.results-city').text(response.name);
  $('.results-icons-container').empty();
  response.weather.forEach(w => {
    $('.results-icons-container').append(`<img src="${IMG_URL}${w.icon}.png"></img>`);
  });
  $('.flag-icon').addClass(`flag-icon-${response.sys.country.toLowerCase()}`);
  $('.temperature').text(response.main.temp + '° F');
  $('.humidity').text(response.main.humidity + '%');
  $('.description').text(response.weather.map(w => w.description).join(', '));
}

function getDataSerialized(obj = {}) {
  let serialData = $('.getWeatherData').serialize();
  for(key in obj) {
    serialData += `&${key}=${obj[key]}`;
  }
  return serialData;
}
