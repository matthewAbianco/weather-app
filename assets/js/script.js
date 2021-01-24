var citySearch = document.querySelector("#city-form");
var cityName = document.querySelector("#city-name");



// takes the userFormEl
var formSubmitHandler = function(event) {
    event.preventDefault();
    // get value from input element
  var searchedCity = cityName.value.trim();
  
  if (searchedCity) {
    getCityInfo(searchedCity);
    cityName.value = "";
  } else {
    alert("Please choose a city on Earth");
  }

/////////////////////////////////////////////////////////////////////////////////
// save  to local storage isnt working, it displays the proper city data, but doesnt set it to local storage
  citySearch.addEventListener("click", function(event){
    event.preventDefault();
    let cityTextVal = $("#city-name").val();
    localStorage.setItem("name", cityTextVal);
    console.log(cityTextVal);
 });
  };
/////////////////////////////////////////////////////////////////////////////////

var getCityInfo = function(city) {

  var currentWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=21b63c71c6a3e2308ee862840ee05551";
  
  fetch(currentWeatherUrl).then(function(currentWeatherUrlResponse) {
    currentWeatherUrlResponse.json().then(function(currentWeatherUrldata) {
      currentCity(currentWeatherUrldata, city);
    });
  });

  

 
    var fiveDayForecastUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=21b63c71c6a3e2308ee862840ee05551";
    
    fetch(fiveDayForecastUrl).then(function(fiveDayForecastUrlResponse) {
      fiveDayForecastUrlResponse.json().then(function(fiveDayForecastUrldata) {
        fiveDayForecast(fiveDayForecastUrldata, city);
        return;
      });
    });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//this is what you were last working on, trying to get the weather icon and 5 day forcast functions. 
fiveDayForecast = function(fiveDayForecastData){
  var test = fiveDayForecastData;
  console.log(test);
  
  var day1Temp = fiveDayForecastData.list[0].main.temp;
  var day1Icon = "https://openweathermap.org/img/w/" + fiveDayForecastData.weather.icon + ".png";
  var day1Humidity= fiveDayForecastData.main.humidity;




    $('.date-day-one').html.moment().add(1, 'days').calendar();
    $('.icon-day-one').append(day1Icon);
    $('.temp-day-one').append(day1Temp);
    $('.humidity-day-one').append(day1Humidity);
    
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// weather values for the current city
currentCity = function(currentCityData){

    var searchedCity = currentCityData.name;
    var temp = Math.floor(currentCityData.main.temp);
    var icon = "https://openweathermap.org/img/w/" + currentCityData.weather[0].icon + ".png";
    var humidity = currentCityData.main.humidity;
    var windSpeed = currentCityData.wind.speed;

    var latitude = currentCityData.coord.lat;
    var longitude = currentCityData.coord.lon;


    $(".current-city-name").append(searchedCity);
    $('#current-date');
    $(".weather-icon").attr("src", icon);

    $(".temperature").append(temp);
    $(".humidity").append(humidity);
    $(".wind-speed").append(windSpeed);

// date 
    function update() {
        $('#current-date').html(moment().format("MMM Do YY"));
      
      };
      update(update, 600,000);

// 
    var uvIndexUrl = "http://api.openweathermap.org/data/2.5/uvi?lat=" + latitude + "&lon=" + longitude + "&appid=21b63c71c6a3e2308ee862840ee05551"

   // make a request to the uv url
   fetch(uvIndexUrl).then(function(uvIndexUrlResponse) {
    uvIndexUrlResponse.json().then(function(uvIndexdata) {
      console.log(uvIndexdata);
      uvData(uvIndexdata);
       
    });
  });

};
// uv index data
uvData = function(uvIndex){
    console.log(uvIndex);
    
    var uvValue = Math.floor(uvIndex.value);
    $(".uv-index").append(uvValue);

    uvCheck(uvValue);


 
};
// uv index value checking severity to add class value
var uvCheck = function (uvValue){
        
    console.log(uvCheck)
    // 9 am time check
    if ( 5 > uvValue) {
        $(".uv-index").removeClass('low moderate high');
        $(".uv-index").addClass('low');
   
    } if ( 10 < uvValue) {
        $(".uv-index").removeClass('low moderate high');
        $(".uv-index").addClass('high');
   
     if (null === uvValue) {
        $(".uv-index").removeClass('low moderate high');
        $(".uv-index").addClass('test');
    }
   
   } if (6,7,8,9 === uvValue){
   
    $(".uv-index").removeClass('low moderate high');
    $(".uv-index").addClass('moderate');
   };
   

}


uvCheck();
citySearch.addEventListener("submit", formSubmitHandler);


