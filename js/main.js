

$(document).ready(function(){
    requestWeatherData('Austin');
    $('.getWeatherData').on('submit', function(e) {
        e.preventDefault();
        let input = $('.weather-city').val();

        requestWeatherData(input);

    });

});

function requestWeatherData(myCity) {
    //this sould request live weather data frim the api
    //eventually based on what the user types


    $.ajax({
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather?q=' + myCity + '&APPID=e925dcf3ad4fb0bfe01b0061aad55ae2&units=imperial',
        data: '',
        dataType: 'json',
        success: onSuccess,
        error: onError
    });

    function onSuccess(json) {
        console.dir(json.weather[0].description);

        $('.city-error').attr('style', 'display:none;');
        let icon = 'https://openweathermap.org/img/w/' + json.weather[0].icon + '.png';
        $('img').attr('src', icon);
        $('img').addClass('appear');
        $('.results-city').text(json.name);
        $('.temperature').text("Temperature: " + json.main.temp);
        $('.humidity').text("Humidity: " + json.main.humidity);
        let url = './flags/1x1/' + json.sys.country.toLowerCase() + '.svg';
        $('.flag').attr('src', url);
        $('.description').text(json.weather[0].description);

    }

    function onError() {
        $('.city-error').attr('style', 'display:contents;');

    }
 }
