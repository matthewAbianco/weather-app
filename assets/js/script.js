// API key
var key = "813dabee4e4e5ea4aecea876113e9598";

// search bar
var searchedCity = $("#search-box");
var searchButton = $("search-button");

// weather info
var cityTitle = $("current-city-name");
var weatherIcon = $("weather-icon");
var temperature = $(".temperature");
var humidity = $(".humidity");
var windSpeed = $(".wind-speed");
var uvIndex = $("uv-index");



var cityName = searchedCity.value;
    if (cityName) {
        getCityName(cityName);

        // clear search value
        searchedCity.textContent = "";

    } else {
        alert("Pick a city");
    };

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

}
update();

searchButton.addEventListener("click", searchButtonEvent);