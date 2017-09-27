/* Javascript goes here! */



$(document).ready(function(){
  console.log("ready!");
    //this is what has to be triggered when they look for weather and click submit
  $("#fetchWeather").click(function(event){
    event.preventDefault();
  });
  $("#fetchWeather").on("click", function(){
    var userCity = $("input.weather-city").val();
    requestWeatherData(userCity);
    console.log(userCity);
    // $("div.col-md-4.col-md-offset-4.results").prepend();
  })
})

function currentTemperature(){

}



function requestWeatherData(myCity){
  //request the weather where the user types
  console.log("pu");
  $.ajax({
    method: "GET",
    url: "http://api.openweathermap.org/data/2.5/weather",
    data: "q=" + myCity + "&units=metric&APPID=0e99d65a925828dcf2054957b19bb709",
    dataType: "json",
    success: onSuccess,
    error: onError
  })
}

function onSuccess(data){
  // data.forEach(function eraseInfo(boxes){
  //   $("div.col-md-4.col-md-offset-4.results").text("");
  // });
  $("h2").text(data.name);
  $("h3").text(data.sys.country);
  $("h3.results-country").append('<img class="flagger" src="flag-icon-css-master/flags/1x1/'+data.sys.country+'.svg">');
  $(".temperature-label").append(data.main.temp);
  $(".humidity-label").append(data.main.humidity);
  $("span.description-label").append(data.weather[0].main);
}
function onError(){
  console.log("oopsies");
  $("p").css("display", "");
}
