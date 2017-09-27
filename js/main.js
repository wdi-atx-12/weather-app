$(function() {

  GetWeather();

  $("form").submit(function(e) {
    e.preventDefault();
    GetWeather();
  });

});

function GetWeather() {
  $.ajax({
    method: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather',
    dataType: 'json',
    data: $("form").serialize(),
    success: OnSuccess//, //code to run if request succeeds
    //error: OnError
  });
} // GetWeather()

function FormatTemperature(temp)
{
  console.log($("[name='units']").val());

}

function OnSuccess(resp) {
console.log("hello");
  var units = "&degF";
  $(".city-name").html(resp.name);
  $(".coor-lon").html(resp.coord.lon);
  $(".coor-lat").html(resp.coord.lat);


  $(".temperature").html(resp.main.temp+units);
  $(".temp-min").html(resp.main.temp_min+units);
  $(".temp-max").html(resp.main.temp_max+units);

  $(".humidity").html(resp.main.humidity+"%"); //%
  $(".pressure").html(resp.main.pressure+" hPa"); //hPa

  $(".wind-speed").html(resp.wind.speed+" mph"); //miles/hour
  $(".wind-deg").html(resp.wind.deg+units);
  $(".clouds").html(resp.clouds.all+"%"); // %


  $(".description").text(resp.weather[0].description); //add to css => text-transform: capitalize;
  $(".weather-icon").attr("src",`http://openweathermap.org/img/w/${resp.weather[0].icon}.png`);
  //$(".weather-descr") resp.weather[0].description
  $(".country-flag").attr("src",`img/flags/4x3/${resp.sys.country}.svg`);

}
