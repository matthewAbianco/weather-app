$("#search-button").addEventListener("click", function(event){
    event.preventDefault();
    let textCityName = searchedCity.val();
    localStorage.setItem("Name", textCityName);
    console.log(textCityName);
});

searchedCity.val(localStorage.getItem("Name"))







var lat = cityUv.responseJSON.coord.lat;
console.log(lat);

var lon = Math.floor(cityUv.responseJSON.coord.lon);
console.log(lon);


var violet = $.getJSON("http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=4c67d1c852a0404242197e390eff43e5", function(uv){
    console.log(uv);
 
         $("#uv-index").append(uv);
 });
 
 