console.log('hello');/* Javascript goes here! */


$(document).ready(function() {

  requestWeatherData();
});

function requestWeatherData(){
  console.log('requesting data');
  //this should request live weather data from api
  //eventually based on what the user types

  $('.btn-primary').on('click', search);

      function search(event){
      event.preventDefault();
      $(".weather-city").empty();
      alert('Before the search');
    };

$.ajax({
    method: 'GET',
    url:`http://api.openweathermap.org/data/2.5/weather`,
    data:`q={$(".weather-city").val()}&units=metric&appid=b485267fdf94c954775bbd8f902595a2`,
    datatype:'json',
    success: onSuccess,
    error: onError
  })
}

function onSuccess(data){

  console.log('request succesful');
  console.log(data);
  $('.results-city').text(data.name);
  $('.temperature').text(data.main.temp);
  $('.humidity').text(data.main.humidity);
  $('.description').text(data.weather[0].description);
  console.log(data.weather);
  console.log(data.weather[0]);
  console.log(data.weather[0].description);

    var icon = data.weather[0].icon;
    var pic = `<img src='http://openweathermap.org/img/w/${icon}.png'>`;
    $('.iconPic').append(pic);

    var obj = data.name;
    (function(el){
    $('.weather-city').append(obj);

});
  }

function onError(){
  event.preventDefault();


//TOdo:code me
console.log('oops.itdonebrokered');

}
