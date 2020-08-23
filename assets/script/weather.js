// function to render current weather:
var apiKey = "631af5c78fdde025e0d500219377445c";
var cityState = []


var queryURLWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + userLocation + "&appid=" + apiKey;



function renderWeatherbyCityState(userLocation) {

    //current weather

    $.ajax({
            url: queryURLWeather,
            method: "GET"
        })
        .then(function(response) {
            console.log(response);

            //Temp from K to F
            var Farenheit = (response.main.temp - 273.15) * 1.80 + 32;

            // from UIX Date to Readable Date

            var UnixTimestamp = (response.dt)
            var milliseconds = UnixTimestamp * 1000
            var dateObject = new Date(milliseconds)
                //console logs day, date, time, and timezone,
            var humanDateFormat = dateObject.toLocaleDateString("en-US", { month: "numeric", day: "numeric", year: "numeric" })

            //getting the icon

            iconID = response.weather[0].icon

            // setting the text
            $("#current-date").text(cityState + " " + humanDateFormat)
            $("#current-temp").text("Temperature: " + Farenheit.toFixed(2) + " °F");
            $("#current-windspeed").text("Wind Speed: " + response.wind.speed + " MPH")
                // adding attributes: 
            $("#current-icon").attr("src", " https://openweathermap.org/img/wn/" + iconID + ".png")

            // // 5 day forecast

            // var lat = response.coord.lat
            // console.log(lat)
            // var lon = response.coord.lon
            // console.log(lon)
            // var forecastURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;

            // $.ajax({
            //     url: forecastURL,
            //     method: "GET"
            // }).then(function(response) {
            //     console.log(response);

            //     for (var i = 1; i < 6; i++) {
            //         //adding the html elements
            //         var card = $("<section>")
            //         var header = $("<h1>")
            //         var icon = $("<img>")
            //         var temp = $("<p>")
            //         var wind = $("<p>")
            //             //adding class
            //         card.addClass("card")
            //         header.addClass("forecast-city-date")
            //         icon.addClass("forecast-icon")
            //         temp.addClass("forecast-temp")
            //         wind.addClass("forecast-wind")

            //         //adding attributes
            //         card.attr("id", "forecast-weather")
            //         temp.attr("id", "forecast-temp")
            //         wind.attr("id", "forecast-wind")
            //         iconImg = response.daily[i].weather[0].icon
            //         $(icon).attr("src", " https://openweathermap.org/img/wn/" + iconImg + ".png")

            //         // addingtext
            //         UnixTimestamp = (response.daily[i].dt)
            //         milliseconds = UnixTimestamp * 1000
            //         dateObject = new Date(milliseconds)
            //         humanDateFormat = dateObject.toLocaleDateString("en-US", { month: "numeric", day: "numeric", year: "numeric" })
            //         header.text(city + " " + humanDateFormat)
            //         farenheit = (response.daily[i].temp.day - 273.15) * 1.80 + 32;
            //         temp.text("Temperature: " + farenheit.toFixed(2) + " °F")
            //         wind.text("Wind Speed " + " " + response.daily[i].wind_speed + "MPH")

            //         //appending elements.
            //         $("#forecast").append(card)
            //         $(card).append(header)
            //         $(card).append(icon)
            //         $(card).append(temp)
            //         $(card).append(wind)
            //     }


            // })
        })

}



function renderUserInputCityState() {

    $("#nextBtn").on("click", function() {
        userLocation = $("#userCityState").val().trim();
        console.log(userLocation)
        console.log("click!")
        renderWeatherbyCityState(userLocation);
        cityState.push(userLocation)
        console.log(cityState)




    })

}

renderUserInputCityState();



// document.addEventListener('someevent', function(e) {
//     console.log(e.target);
// });