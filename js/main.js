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
    if ($getInput === ''){
      $('.city-error').css('display', 'block');
    }
    else {
      $('.city-error').css('display', 'none');
    }
    let city = $getInput;
    city = city.replace(/ /g, "+");

    function requestWeatherData() {
      console.log('Requesting Data');

      $.ajax({
        method: 'GET',
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`,
        dataType: 'json',
      })
      .done((response) => {
        let values = getWeatherVals(response);
        printToDOM(values);
        
      })
      .fail(() => {
        console.log('Your shit broke');
      });
    };

    function getWeatherVals(response) {
      let weatherVals = new Array(3);
      let temperature = response.main.temp;
      weatherVals[0] = (9/5 * (temperature - 273) + 32).toFixed(2);
      weatherVals[1] = response.main.humidity;
      weatherVals[2] = response.weather[0].main;
      weatherVals[3] = response.weather[0].icon;
      weatherVals[4] = response.name;
      weatherVals[5] = response.sys.country.toLowerCase();
      return weatherVals;
    };

    function printToDOM(values) {
      $temperature.append(`${values[0]} &deg;F`);
      $humidity.append(`${values[1]} %`);
      $description.append(`${values[2]}`);
      $weatherImg.attr('src', `http://openweathermap.org/img/w/${values[3]}.png`);
      $cityHeading.append(`${values[4]}`);
      $flagImg.attr('src', `flags/4x3/${values[5]}.svg`);
    };
    // flag-icon flag-icon-gr
    requestWeatherData();
  });

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