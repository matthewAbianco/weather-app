$("#search-button").addEventListener("click", function(event){
    event.preventDefault();
    let textCityName = searchedCity.val();
    localStorage.setItem("Name", textCityName);
    console.log(textCityName);
});

searchedCity.val(localStorage.getItem("Name"))


$.get(queryUV)
.then(function (uvResponse) {
    console.log(uvResponse)
    

    let color = "green";
    let UVindex = uvResponse.value;
    if(UVindex > 10){
        color = "red";
    }
    else if(UVindex > 4){
        color = "orange";
    };


    let uvSpan = $("<span>").text(uvResponse.value).css("color", color)
    let pFour = $("<p>").text("UV Index: ").append(uvSpan);
    cityDiv.append(header, pOne, pTwo, pThree, pFour);

    // =======Push Element to Page =====

    $("#weather-view").empty();
    $("#weather-view").prepend(cityDiv);
})


})

}


var uvCheck = function (){

 // 9 am time check
 if (parseInt(time9am.attr('data-time')) < currentTime) {
    text9am.removeClass('past present future');
    text9am.addClass('past');

} else if (parseInt(time9am.attr('data-time')) === currentTime) {
    text9am.removeClass('past present future');
    text9am.addClass('present');


} else {

    text9am.removeClass('past present future');
    text9am.addClass('future');
}


}
uvCheck();

var cityUv = $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=4c67d1c852a0404242197e390eff43e5").donefunction(){
    var latitude = cityUv.responseJSON.coord.lat;
    var longitude = cityUv.responseJSON.coord.lon;

     

    var uvIndex = $.getJSON("http://api.openweathermap.org/data/2.5/uvi?lat=" + latitude + "&lon=" + longitude + "&appid=4c67d1c852a0404242197e390eff43e5"). function(JSONuvIndex){


        var uv = parseInt(Math.floor(uvIndex.responseJSON.value));


        $(".uv-index").append(uv) ;
        console.log(parseInt($(".uv-index")));

        
var uvCheck = function (){

    // 9 am time check
    if ( 5 >= uv) {
       uvColour.removeClass('low moderate high');
       uvColour.addClass('low');
   
    } if ( 10 = uv) {
    uvColour.removeClass('low moderate high');
    uvColour.addClass('high');
   
   
   } else {
   
    uvColour.removeClass('low moderate high');
    uvColour.addClass('moderate');
   }
   

   }
   uvCheck();
        

 });
 
});





$.ajax("http://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=4c67d1c852a0404242197e390eff43e5").done(function(JSONdata) {
 console.log(JSONdata.main.humidity);
});

$.ajax("https://api.github.com/users/octocat/repos").done(function(data) {
 console.log(data);
});
getUserRepos("microsoft");




// old code

// API key
var key = "813dabee4e4e5ea4aecea876113e9598";

var cityForm = $("city-form")
var cityNameInput = $("#city-name")

// search bar
var cityUv = $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=4c67d1c852a0404242197e390eff43e5", function(data){
    console.log(data);        

        
});
 var uvCity = $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=4c67d1c852a0404242197e390eff43e5").done(function(uvdata){
    console.log(uvdata);    
}); 





$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=4c67d1c852a0404242197e390eff43e5", function(currentWeatherData){
        console.log(currentWeatherData);

        var icon = "https://openweathermap.org/img/w/" + currentWeatherData.weather[0].icon + ".png";
      
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

var citySubmit = function(citySubmitEvent) {
    citySubmitEvent.preventDefault();
    console.log(citySubmitEvent);
  };
  


$('#current-date');

function update() {
  $('#current-date').html(moment().format("MMM Do YY"));

};
update(update, 600,000);

cityForm.addEventListener("submit", citySubmit);