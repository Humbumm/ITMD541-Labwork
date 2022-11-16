document.getElementById("searchButton").addEventListener("click", function () {

  let locSearch = (document.getElementById('searchBar').value);
  let apiLoc = "https://weatherdbi.herokuapp.com/data/weather/"+locSearch+"";
  let myRequest = new XMLHttpRequest();

  myRequest.addEventListener('load', function(x){
    console.log(x);
    let data = JSON.parse(myRequest.responseText);

    futureForecast(data);
    currentWeather(data);
  });
  myRequest.open('GET', apiLoc);

  myRequest.send();
}, false);

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

function futureForecast(data) {
  forecastData = data.next_days;

  forecastData.forEach((forecast) => {
    let fcDay = forecastData[0].day;
    let fcComment = forecastData[0].comment;
    let fcMaxTemp = forecastData[0].max_temp.f;
    let fcMinTemp = forecastData[0].min_temp.f;
    let fcIcon = forecastData[0].iconURL;

    forecastDay = document.createElement('p');
    forecastDay.textContent = `${fcDay}`;
    forecastDay.className = ('dayClass');
    forecastComment = document.createElement('p');
    forecastComment.textContent = `${fcComment}`;
    forecastComment.className = ('commentClass');
    forecastMaxTemp = document.createElement('p');
    forecastMaxTemp.textContent = `${fcMaxTemp}`;
    forecastMaxTemp.className = ('maxtempClass');
    forecastMinTemp = document.createElement('p');
    forecastMinTemp.textContent = `${fcMinTemp}`;
    forecastMinTemp.className = ('mintempClass');
    forecastIcon = document.createElement('img');
    forecastIcon.textContent = `${fcIcon}`;
    forecastIcon.className = ('iconClass');

    let parentForecast = document.getElementById("forecast-parent");
    let singleForecast = document.createElement("div");
    singleForecast.className = ("forecastPapi");
    singleForecast.append(forecastDay, forecastComment, forecastMaxTemp, forecastMinTemp, forecastIcon);
    parentForecast.append(singleForecast);
  });
};
