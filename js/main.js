$(function(){
  console.log("Listo!");
  requestWeatherData();
    $("form").submit(function(event){
    event.preventDefault();
    document.querySelector('.city-error').style.display = "none";
    $('.icon img').remove();
    requestWeatherData();
    })
})

function requestWeatherData(){
  console.log("requesting your data!");
    $.ajax({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather',
      data:$('form').serialize(),
      dataType: 'json',
      success: onSuccess,
      error: onError
    })
}

function onSuccess(data){
  var flagUrl = 'images/flags/1x1/'+data.sys.country+'.svg';
  $('#flag').attr('src', flagUrl);
  var city = data.name;
  $('.results-city').text(city);
  var img = "<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'>";
  $('.icon').append(img);
  var temp = data.main.temp + " ° fahrenheit";
  $(".temperature").text(temp);
  var humidity = data.main.humidity;
  $(".humidity").text(humidity);
  $('.description').text(data.weather[0].description);
  console.log("request successful!");
  console.dir(data);
}


function onError(){
  document.querySelector(".city-error").style.display = "block";
  // var p1 = document.createElement('p');
  // p1.innerText = "Oops! Looks like this isn't a city. Try again.";
  // document.querySelector(".results-city").appendChild(p1);
  console.log("OOPS!! dis no workie");
}


//data: 'q='+myCity+'&appid=b50ac3053e89e914f36d2be3efcfbe52&units=imperial',
