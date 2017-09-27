/* Javascript goes here! */

$(function(){
   $('.results').attr('style', 'display: none');
  $('form').submit(function(e){
    e.preventDefault();
    requestWeatherData();
  });
});

function requestWeatherData() {

  var x = $("form").serialize();
  var urlx = 'http://api.openweathermap.org/data/2.5/weather?'+x;

 $.ajax({
    method: 'GET',
    url: urlx,
    //data: $("form").serialize(),// 'q=Austin&appid=1c53e15b8d17e80f85194c2079c3afe2',
    dataType: 'json',
    success: onSuccess,
    error: onError
 });

 function clearValues(){
    $('.temperature').html(" ");
    $('.results-city').html(" ");
    $('.results-flag').html(" ");
    $('.humidity').html(" ");
    $('.description').html(" ");
 }

 function onSuccess(jsonreturn) {
  $('.city-error').attr('style', 'display: none');
    clearValues();


    //get data
    var dataweather = jsonreturn.weather[0];
    var descript = jsonreturn.weather[0].description;
    var name = jsonreturn.name;
    var kelvins = jsonreturn.main.temp;
    var celsius = kelvins-273.15;
    var fahren = parseInt(celsius * 9 / 5 + 32);
    var humidity = jsonreturn.main.humidity;
    var icon = jsonreturn.weather[0].icon;
    var iconimg = "<img src='http://openweathermap.org/img/w/"+icon+".png'>";
    var flag = jsonreturn.sys.country;
    var flagimg = "<img class='flagimg' width='200' src='1x1/"+flag+".svg'>";


    //place data
    $('.temperature').html(fahren +"&deg; F");
    $('.results-city').html(name);
    $('.results-flag').html(flagimg);
    $('.results-city').append(iconimg);
    $('.humidity').html(humidity +" %");
    $('.description').html(descript);
    $('.results').attr('style', 'display: block');


 }

 function onError() {
  //to do code me
  clearValues();
  $('.city-error').attr('style', 'display: block');
  $('.results').attr('style', 'display: none');
 }

}
