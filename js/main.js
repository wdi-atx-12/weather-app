/* Javascript goes here! */
$(function () {
  $('.getWeatherData').submit(requestWeatherData);
});

function requestWeatherData(e) {
  e.preventDefault();
  $.ajax({
    method: 'GET',
    dataType: 'json',
    data: getDataSerialized(),
    url: 'https://api.openweathermap.org/data/2.5/weather',
    success: onSuccess
  });
}

function onSuccess(response) {
  $('.temperature').text(kelvinToFahrenheit(response.main.temp) + '° F');
  $('.humidity').text(response.main.humidity + '%');
  $('.description').text(response.weather.map(w => w.description).join(' '));
}

function getDataSerialized(obj = {}) {
  let serialData = $('.getWeatherData').serialize();
  for(key in obj) {
    serialData += `&${key}=${obj[key]}`;
  }
  return serialData;
}

function kelvinToFahrenheit(k) {
  return (parseFloat(k)-273.15) * 9/5 + 32;
}
