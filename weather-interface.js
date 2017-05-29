var apiKey = '9bf5d4106b3e1540e8a806d743388ee4';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey,function(response)
  {
    console.log(JSON.stringify(response));
    $('.showWeather').text("The humidity in" + city +' is '+ response.main.humidity+'%');
  });
  });
});
