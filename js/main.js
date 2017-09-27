$(function() {

  var api_key = 'afd4d6d077d641b5f569fc8d57f2e4ff';
  let $temperature = $('.temperature');
  let $humidity = $('.humidity');
  let $description = $('.description');
  let $weatherImg = $('.results-city img');
  let $cityHeading = $('.results h1');
  let $flagImg = $('#flag');
  

  $('#submit').on('click', (e) => {
    clearVals();
    e.preventDefault();
    let $getInput = $('.weather-city').val().trim();
    let city = $getInput;
    city = city.replace(/ /g, "+");
    requestWeatherData(city);
  });


  function requestWeatherData(city = 'Austin') {
    $.ajax({
      method: 'GET',
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=imperial`,
      dataType: 'json',
    })
    .done((response) => {
      getWeatherVals(response);
    })
    .fail(() => {
      $('.city-error').css('display', 'block');
    });
  };

  function getWeatherVals(response) {
    $temperature.text(response.main.temp);
    $humidity.text(response.main.humidity);
    $description.text(response.weather[0].main);
    let imgCode = response.weather[0].icon;
    $weatherImg.attr('src', `http://openweathermap.org/img/w/${imgCode}.png`);
    $cityHeading.text(response.name);
    let countryCode = response.sys.country.toLowerCase();
    $flagImg.attr('src', `flags/4x3/${countryCode}.svg`);
  };

  function clearVals() {
    let varArry = [$humidity, $temperature, $description, $weatherImg, $cityHeading, $flagImg];
    $.each(varArry, function(i , val) {
      $(val)
      .contents()
      .filter(function() {
        return this.nodeType === 3;
      }).remove();
    });
  };
  
});