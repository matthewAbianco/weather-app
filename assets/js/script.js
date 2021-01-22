// API key
var key = "813dabee4e4e5ea4aecea876113e9598";

// search bar
var cityUv = $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=4c67d1c852a0404242197e390eff43e5")
    console.log(cityUv);
var lat = cityUv.responseJSON;
console.log(lat);
var lon = Math.floor(cityUv.responseJSON);
console.log(lon);


$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=4c67d1c852a0404242197e390eff43e5", function(currentWeatherData){
        console.log(currentWeatherData);

        var icon = "https://openweathermap.org/img/w/" + currentWeatherData.weather[0].icon + ".png";
        console.log(icon);

        var temp = Math.floor(currentWeatherData.main.temp);
        var cityName = currentWeatherData.name;
        var humidity = currentWeatherData.main.humidity;

        $("#city-name").append(cityName)
        $('#date').append();
        $(".weather-icon").attr("src", icon);
       
        $(".temperature").append(temp);
        $(".humidity").append(humidity);

        
}); 



  var violet = $.getJSON("http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=4c67d1c852a0404242197e390eff43e5", function(uv){
   console.log(uv);

        $("#uv-index").append(uv);
});

    searchButton.addEventListener("click", function(event){
        event.preventDefault();
        let textCityName = searchedCity.val();
        localStorage.setItem("Name", textCityName);
        console.log(textCityName);
    });

    searchedCity.val(localStorage.getItem("Name"))

$('#date');

function update() {
  $('#date').html(moment().format("MMM Do YY"));

setInterval(update, 600,000);
};
update();

searchButton.addEventListener("click", searchButtonEvent);