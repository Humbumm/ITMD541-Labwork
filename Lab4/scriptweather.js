let myRequest = new XMLHttpRequest();

myRequest.onload = function request(updatedLink) {
  let data = JSON.parse(myRequest.responseText);
  currentWeather(data);
}

function currentWeather(data) {
  document.getElementById("city").innerHTML= "Weather in "+data.region;
  document.getElementById("hum").textContent= "Humidity : "+data.currentConditions.humidity;
  document.getElementById("icon").src = data.currentConditions.iconURL;
  document.getElementById("currentTemp").textContent= data.currentConditions.temp.f +'°F';
  document.getElementById("preci").textContent= "Precipitation : "+data.currentConditions.precip;
  document.getElementById("des").textContent= data.currentConditions.comment;
  document.getElementById("windy").textContent= "Wind : "+data.currentConditions.wind.mile +'mph';
  document.getElementById("dayh").textContent= "Day Hour : "+data.currentConditions.dayhour;
}

/* document.getElementById('searchButton').addEventListener('click', function(){
  let locSearch = (document.getElementById('searchButton').value)
  console.log(locSearch);
  let updatedLink = "https://weatherdbi.herokuapp.com/data/weather/"+locSearch+"";
  request(updatedLink);
}); */

function search() {
    let location=(document.getElementById("searchButton").value);
    let apiLoc = " https://weatherdbi.herokuapp.com/data/weather/"+location+"";

    fetchSearch(apiLoc);
  };
document.getElementById("searchButton").addEventListener("click", function () {
   search();
});


myRequest.open('GET', "https://weatherdbi.herokuapp.com/data/weather/Chicago");

myRequest.send();
