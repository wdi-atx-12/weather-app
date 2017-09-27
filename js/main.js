/* Javascript goes here! */
console.log('stuff');

$(document).ready(function(){
    console.log('I am ready');
    //eventually, this should be tiggered by button
    requestWeatherData('Austin');
    $('.btn').on('click', function() {
        console.log('clicked thing');
        let input = $('.weather-city').val();
        //console.log(input);
        requestWeatherData(input);
    });

});

function requestWeatherData(myCity) {
    //this sould request live weather data frim the api
    //eventually based on what the user types
    console.log('requesting data..');

    $.ajax({
        method: 'GET',
        //api.openweathermap.org/data/2.5/weather?q={city name}
        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + myCity + '&APPID=e925dcf3ad4fb0bfe01b0061aad55ae2&units=imperial',
        data: '',
        dataType: 'json',
        success: onSuccess,
        error: onError
    });

    function onSuccess(json) {
        // todo: code mew
        console.log('success!');
        console.dir(json.sys.country);

        $('.city-error').attr('style', 'display:none;');
        let icon = 'http://openweathermap.org/img/w/' + json.weather[0].icon + '.png';
        $('img').attr('src', icon);
        $('.results-city').text(json.name);
        $('.temperature').text(json.main.temp);
        $('.humidity').text(json.main.humidity);
        let url = 'flags/1x1/' + json.sys.country + '.svg';
        $('.flag').attr('src', url);
        // $('.flag').addClass('flag-icon');
        // let flagIcon = 'flag-icon-' + json.sys.country;
        // $('.flag').addClass(flagIcon.toLowerCase());
        // $('.flag').addClass('flag-icon-squared');
        // console.log($('.flag').attr('class'));

    }

    function onError() {
        // todo: code me
        console.log('you\'ve erred');
        $('.city-error').attr('style', 'display:contents;');

    }
 }
