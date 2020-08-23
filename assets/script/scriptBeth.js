function renderWeatherbyLocation() {
    $("#mainBtn").on("click", function() {

        console.log("click!")
            // function to render current weather:
        var apiKey = "631af5c78fdde025e0d500219377445c";
        var userLocation = $("#enterCity").val().trim();
        var queryURLWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + userLocation + "&appid=" + apiKey;

        $.ajax({
                url: queryURLWeather,
                method: "GET"
            })
            .then(function(response) {
                console.log(response);

                // Temp from K to F
                var Farenheit = (response.main.temp - 273.15) * 1.80 + 32;
                console.log(Farenheit.toFixed(2))

                //getting the icon
                iconID = response.weather[0].icon

                console.log(iconID)

                //  setting the text

                $(".current-weather").text("  " + " " + userLocation.toUpperCase() + " " + " " + Farenheit.toFixed(1) + " °F");

                //  adding attributes: 
                $(".icon").attr("src", " https://openweathermap.org/img/wn/" + iconID + ".png")

            })
    })
}




renderWeatherbyLocation();




function wineSelection() {

    var temp = 60
    var authorClicked = 'James Patterson'
    var wineName = ""

    var catalog = [
        ['Stephen King', 'Rose', 'Sauvignon Blanc', 'Pinot Noir'],
        ['Fyodor Dostoevsky', 'Malbec', 'Merlot', 'Pinot Noir'],
        ['James Patterson', 'Cabernet Sauvignon', 'Shiraz', 'Riesling'],
        ['Agatha Christie', 'Zinf Andel', 'Viognier', 'Merlot/Pinot Gris'],
        ['Isabel Allende', 'Torrentes', 'Syrah', 'Garnacha'],
        ['Camille Perri', 'Chenin Blanc', 'Cabernet Sauvignon', 'Chardonnay/Rose'],
        ['Sofi Oksanen', 'Chardonnay', 'Chianti', 'Cabarnet Sauvignon'],
        ['Herta Muller', 'Mulled Wine', 'Suavignon Blanc', 'Malbec'],
        ['Olga Tokarczuk', 'Chenin Blanc', 'Reisling', 'Prosecco'],
        ['Cormac McCarthy', 'Malbec', 'Chianti', 'Sauvignon Blanc'],
        ['Aldous Huxley', 'Mulled Wine', 'Pinot Noir', 'Pinot Grigio'],
        ['Penn Jillette', 'Decaf Caffè Americano w/ 8 shots of Decaf Espresso', 'Decaffinated Coffee', 'Sparkling Water']
    ]



    for (i = 0; i < exampleList.length; i++) {
        if ((authorClicked === catalog[i][0]) && (temp <= 60)) {
            wineName = catalog[i][1]
        }
        if ((authorClicked === catalog[i][0]) && (temp > 60 && temp < 80)) {
            wineName = catalog[i][2]
        }
        if ((authorClicked === catalog[i][0]) && (temp >= 80)) {
            wineName = catalog[i][3]
        }
    }

    return wineName

}


var listName = "combined print fiction" // best seller books in this section 
var queryURLNYT = "https://api.nytimes.com/svc/books/v3/lists/current/" + listName + ".json?api-key=E7hqgdVcY5GIbLAfpBFL6tvAVz8oV8WG";
console.log(queryURLNYT)
$.ajax({
        url: queryURLNYT,
        method: "GET"
    })
    .then(function(response) {
        console.log(response);

        // console.log(response.items.0.saleInfo.buyLink);
        var randInt = Math.floor(Math.random() * 20)

        // console.log(response.results.books[randInt].author)

        var surprise = []
        var surpriseWine = ['Malbec', 'Cabernet Sauvignon', 'Rose', 'Pinot Noir', 'Pinot Grigio', 'Shiraz', 'Chardonnay', 'Zinfandel', 'Sauvigon Blanc']
        var wineIndex = Math.floor(Math.random() * 9)
        console.log(surpriseWine[wineIndex]) // randomly chooses wine type for the surpise book 


        surprise.push(response.results.books[randInt].author)
        surprise.push(response.results.books[randInt].title)
        surprise.push(response.results.books[randInt].book_image)
        surprise.push(response.results.books[randInt].description)
        surprise.push(response.results.books[randInt].amazon_product_url)
        console.log(surprise)


    });