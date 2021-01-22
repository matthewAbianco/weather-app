// API key
var key = "813dabee4e4e5ea4aecea876113e9598";

// search bar
var cityUv = $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=4c67d1c852a0404242197e390eff43e5", function(){
    var latitude = cityUv.responseJSON.coord.lat;
    var longitude = cityUv.responseJSON.coord.lon;

     

    var violet = $.getJSON("http://api.openweathermap.org/data/2.5/uvi?lat=" + latitude + "&lon=" + longitude + "&appid=4c67d1c852a0404242197e390eff43e5", function(){
        console.log(violet);

        var uv = violet.responseJSON.value;
        console.log(uv);
 });
 
});
  

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=4c67d1c852a0404242197e390eff43e5", function(currentWeatherData){
        console.log(currentWeatherData);

        var icon = "https://openweathermap.org/img/w/" + currentWeatherData.weather[0].icon + ".png";
        console.log(icon);

        var temp = Math.floor(currentWeatherData.main.temp);
        var cityName = currentWeatherData.name;
        var humidity = currentWeatherData.main.humidity;
        var windSpeed = currentWeatherData.wind.speed;

// city info
        $(".current-city-name").append(cityName)
        $('#date').append();
        $(".weather-icon").attr("src", icon);

// weather info
        $(".temperature").append(temp);
        $(".humidity").append(humidity);
        $(".wind-speed").append(windSpeed);


        
}); 




$('#date');

function update() {
  $('#date').html(moment().format("MMM Do YY"));

setInterval(update, 600,000);
};
update();

