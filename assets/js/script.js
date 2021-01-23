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
  };



var getCityInfo = function(city) {
  // format the github api url
  var currentWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=4c67d1c852a0404242197e390eff43e5";

  // make a request to the url
  fetch(currentWeatherUrl).then(function(currentWeatherUrlResponse) {
    currentWeatherUrlResponse.json().then(function(currentWeatherUrldata) {
      console.log(currentWeatherUrldata);
      currentCity(currentWeatherUrldata, city);
    });
  });
};

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


    function update() {
        $('#current-date').html(moment().format("MMM Do YY"));
      
      };
      update(update, 600,000);

    var uvIndexUrl = "http://api.openweathermap.org/data/2.5/uvi?lat=" + latitude + "&lon=" + longitude + "&appid=4c67d1c852a0404242197e390eff43e5"

   // make a request to the url
   fetch(uvIndexUrl).then(function(uvIndexUrlResponse) {
    uvIndexUrlResponse.json().then(function(uvIndexdata) {
      console.log(uvIndexdata);
      uvData(uvIndexdata);
       
    });
  });
};
    
uvData = function(uvIndex){
    console.log(uvIndex);
    
    var uvValue = Math.floor(uvIndex.value);
    $(".uv-index").append(uvValue);

    uvCheck(uvValue);


 
};

var uvCheck = function (uvValue){
        
        
    console.log(uvCheck)
    // 9 am time check
    if ( 5 > uvValue) {
        $(".uv-index").removeClass('low moderate high');
        $(".uv-index").addClass('low');
   
    }else if ( 10 < uvValue) {
        $(".uv-index").removeClass('low moderate high');
        $(".uv-index").addClass('high');
   
   
   } else {
   
    $(".uv-index").removeClass('low moderate high');
    $(".uv-index").addClass('moderate');
   }
   

   }
   uvCheck();
    



citySearch.addEventListener("submit", formSubmitHandler);