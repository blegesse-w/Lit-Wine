// nyt book review api test
var queryURLNYT = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=E7hqgdVcY5GIbLAfpBFL6tvAVz8oV8WG";
console.log(queryURLNYT)
$.ajax({
        url: queryURLNYT,
        method: "GET"
    })
    .then(function(response) {
        console.log(response)
            // $(".TBD").text("Headline:" + response.docs)
    });

// google books api test
var queryURLGoogle = "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBTrX3sauMMmvjx2xDJpF8G58thA3OD4Qk";
console.log(queryURLGoogle)
$.ajax({
        url: queryURLGoogle,
        method: "GET"
    })
    .then(function(response) {
        console.log(response)
            // $(".TBD").text("Headline:" + response.docs)
    });


function renderWeatherbyCityState() {
    var apiKey = "631af5c78fdde025e0d500219377445c";
    var city = "Austin, Texas"

    var queryURLWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;


    $.ajax({
            url: queryURLWeather,
            method: "GET"
        })
        .then(function(response) {
            console.log(response);

            var lat = response.coord.lat
            console.log(lat)

            var lon = response.coord.lon
            console.log(lon)

            var forecastURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;

            $.ajax({
                url: forecastURL,
                method: "GET"
            }).then(function(response) {
                console.log(response);


            })


        })



}

renderWeatherbyCityState();