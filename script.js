let wheather = {
    apiKey: "b177be65504f14cf97306d36951e4b09",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid="
        + this.apiKey
        )
    .then((response) => response.json())
    .then((data) => console.log(data));
},
  displayWeather: function(data) {

  }
};