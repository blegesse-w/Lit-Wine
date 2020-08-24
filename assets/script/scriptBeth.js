// function renderWeatherbyLocation() {
//     $("#mainBtn").on("click", function() {

//         console.log("click!")
//             // function to render current weather:
//         var apiKey = "631af5c78fdde025e0d500219377445c";
//         var userLocation = $("#enterCity").val().trim();
//         var queryURLWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + userLocation + "&appid=" + apiKey;

//         $.ajax({
//                 url: queryURLWeather,
//                 method: "GET"
//             })
//             .then(function(response) {
//                 console.log(response);

//                 // Temp from K to F
//                 var Farenheit = (response.main.temp - 273.15) * 1.80 + 32;
//                 console.log(Farenheit.toFixed(2))

//                 //getting the icon
//                 iconID = response.weather[0].icon

//                 console.log(iconID)

//                 //  setting the text

//                 $(".current-weather").text("  " + " " + userLocation.toUpperCase() + " " + " " + Farenheit.toFixed(1) + " °F");

//                 //  adding attributes: 
//                 $(".icon").attr("src", " https://openweathermap.org/img/wn/" + iconID + ".png")

//             })
//     })
// }

// renderWeatherbyLocation();




function wineSelection() {
    var temp = 80
    var authorChoice = "Stephen King"



    var catalogArray = [{
            Author: "Stephen King",
            wineCold: " Rose",
            wineWarm: "Sauvignon Blanc",
            wineHot: "Pinot Noir",
        },
        {
            Author: "Fyodor Dostoevsky",
            wineCold: " Malbec",
            wineWarm: "Merlot",
            wineHot: "Pinot Noir",
        },

        {
            Author: "James Patterson",
            wineCold: " Cabarnet Suavignon",
            wineWarm: "Shiraz",
            wineHot: "Riesling",
        },
        {
            Author: "Agatha Christie",
            wineCold: " Zinf Andel",
            wineWarm: "Viognier",
            wineHot: "Merlot/Pinot Gris",
        },
        {
            Author: "Isabel Allende",
            wineCold: " Torrentes",
            wineWarm: "Syrah",
            wineHot: "Garnacha",
        },
        {
            Author: "Camille Perri'",
            wineCold: " Chenin Blanc",
            wineWarm: "Cabernet Sauvignon",
            wineHot: "Chardonnay/Rose",
        },
        {
            Author: "Sofi Oksanen",
            wineCold: " Chardonnay",
            wineWarm: "Chianti",
            wineHot: "Cabarnet Sauvignon",
        },
        {
            Author: "Herta Muller",
            wineCold: " Mulled Wine",
            wineWarm: "Suavignon Blanc",
            wineHot: "Malbec",
        },
        {
            Author: "Olga Tokarczuk",
            wineCold: " Chenin Blanc",
            wineWarm: "Reisling",
            wineHot: "Prosecco",
        },
        {
            Author: "Cormac McCarthy",
            wineCold: " Malbec",
            wineWarm: "Chianti",
            wineHot: "Sauvignon Blanc",
        },
        {
            Author: "Aldous Huxley",
            wineCold: " Mulled Wine",
            wineWarm: "Pinot Noir",
            wineHot: "Pinot Grigio",
        },
        {
            Author: "Penn Jillette",
            wineCold: " Decaf Caffè Americano w/ 8 shots of Decaf Espresso",
            wineWarm: "Decaffinated Coffee",
            wineHot: "Sparkling Water",
        },
    ];

    // console.log(catalogArray[0].Author)
    // console.log(catalogArray[0].wineHot)
    // console.log(catalogArray[0].wineWarm)
    // console.log(catalogArray[0].wineCold)


    for (var i = 0; i < catalogArray.length; i++) {
        var wineName = ""
            // console.log(catalogArray[i].Author)
            // console.log(catalogArray[i].wineCold)
            // console.log(catalogArray[i].wineHot)
            // console.log(catalogArray[i].wineWarm)
        if (authorChoice === catalogArray[i].Author && temp <= 60) {
            wineName = catalogArray[i].wineCold
            console.log(wineName)
        }
        if (authorChoice === catalogArray[i].Author && temp > 60 && temp < 80) {
            wineName = catalogArray[i].wineWarm
            console.log(wineName)
        }
        if (authorChoice === catalogArray[i].Author && temp >= 80) {
            wineName = catalogArray[i].wineHot
            console.log(wineName)
        }


    }

    wineSelection();

    // function feelingLucky() {
    //     var listName = "combined print fiction" // best seller books in this section
    //     var queryURLNYT = "https://api.nytimes.com/svc/books/v3/lists/current/" + listName + ".json?api-key=E7hqgdVcY5GIbLAfpBFL6tvAVz8oV8WG";
    //     console.log(queryURLNYT)
    //     $.ajax({
    //             url: queryURLNYT,
    //             method: "GET"
    //         })
    //         .then(function(response) {
    //             console.log(response);
    //             // console.log(response.items.0.saleInfo.buyLink);
    //             var randInt = Math.floor(Math.random() * 20)
    //                 // console.log(response.results.books[randInt].author)
    //             var surprise = []
    //             var surpriseWine = ['Malbec', 'Cabernet Sauvignon', 'Rose', 'Pinot Noir', 'Pinot Grigio', 'Shiraz', 'Chardonnay', 'Zinfandel', 'Sauvigon Blanc']
    //             var wineIndex = Math.floor(Math.random() * 9)
    //             console.log(surpriseWine[wineIndex]) // randomly chooses wine type for the surpise book
    //             surprise.push(response.results.books[randInt].author)
    //             surprise.push(response.results.books[randInt].title)
    //             surprise.push(response.results.books[randInt].book_image)
    //             surprise.push(response.results.books[randInt].description)
    //             surprise.push(response.results.books[randInt].amazon_product_url)
    //             console.log(surprise)
    //         });
    // }
    // // var authorbtn = document.querySelector('author')
    // // authorbtn.addEventListener('click', function(){
    // //     console.log('im clicked')
    // // })
    // var searchTerm = ""
    // var authorName = "King"
    // var queryURLGoogle = "https://www.googleapis.com/books/v1/volumes?q=" + searchTerm + "+inauthor:" + authorName + "&printType=books&maxResults=4" + "&key=AIzaSyBTrX3sauMMmvjx2xDJpF8G58thA3OD4Qk";
    // // https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
    // console.log(queryURLGoogle)
    // $.ajax({
    //         url: queryURLGoogle,
    //         method: "GET"
    //     })
    //     .then(function(response) {
    //         console.log(response)
    //         console.log(response.items[0].volumeInfo.title)
    //         var coverPage = (response.items[0].volumeInfo.imageLinks.thumbnail)
    //         var author = (response.items[0].volumeInfo.authors[0])
    //         var description = (response.items[0].volumeInfo.description)
    //         var title = (response.items[0].volumeInfo.title)
    //         var buyLink = (response.items[0].saleInfo.buyLink)
    //     });

    // function googleBooks() {
    //     $(document).ready(function() {
    //         $("#myform").submit(function() {
    //             var search = $("#books").val();
    //             if (search == "") {
    //                 alert("Might want to enter something here since you need something git pull to search for but I dunno... I just work here. ");
    //             } else {
    //                 var url = "";
    //                 var img = "";
    //                 var title = "";
    //                 var author = "";
    //                 var description = "";
    //                 $.get(queryURLGoogle, function(response) {
    //                     for (i = 0; i < response.items.length; i++) {
    //                         title = $(response.items[i].volumeInfo.title);
    //                         description = $(response.items[0].volumeInfo.description)
    //                         author = $(response.items[i].volumeInfo.authors);
    //                         img = $('<img id="dynamic"><br><a href=' + response.items[i].volumeInfo.thumbnail + '><button id="imagebutton">Read More</button></a>');
    //                         url = response.items[i].saleInfo.buyLink;
    //                         img.attr('src', url);
    //                         title.appendTo('.title');
    //                         author.appendTo('.author');
    //                         description.appendTo('.description')
    //                         img.appendTo('#result');
    //                     }
    //                 });
    //             }
    //             return false;
    //         });
    //     });
    // }

    // function normalSelection() {
    //     wineSelection()
    //     googleBooks()
    // }

    // function luckySelection() {
    //     feelingLucky()
}