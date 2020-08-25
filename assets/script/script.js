function renderWinebyWeather() {
    $("#mainBtn").on('click', function() {

        var apiKey = "631af5c78fdde025e0d500219377445c";

        var userLocation = $("#enterCity").val().trim();

        var queryURLWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + userLocation + "&appid=" + apiKey;
        // function to render current weather:
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

                $(".current-weather").text("  " + " " + userLocation.toUpperCase() + " | " + Farenheit.toFixed(1) + " °F" + " |");

                //  adding attributes: 
                $(".icon").attr("src", " https://openweathermap.org/img/wn/" + iconID + ".png")

                $(document).on('click', '.author', function(event){
                    // event.preventDefault();
                
                    var authorClicked = $(this).text()
                    console.log(authorClicked)

                    var temp = Farenheit
                    console.log(temp)
                    
    
    
    
                    var catalogArray = [{
                            Author: "Dan Brown",
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
                            Author: "Gillian Flynn",
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
                            Author: "Camille Perri",
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
                            Author: "Herta Müller",
                            wineCold: " Mulled Wine",
                            wineWarm: "Suavignon Blanc",
                            wineHot: "Malbec",
                        },
                        {
                            Author: "Lee Child",
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
                    for (var i = 0; i < catalogArray.length; i++) {
                        var wineName = ""
                            // console.log(catalogArray[i].Author)
                            // console.log(catalogArray[i].wineCold)
                            // console.log(catalogArray[i].wineHot)
                            // console.log(catalogArray[i].wineWarm)
                        if (authorClicked === catalogArray[i].Author && temp <= 60) {
                            wineName = catalogArray[i].wineCold
                            console.log(wineName)
                        }
                        if (authorClicked === catalogArray[i].Author && temp > 60 && temp < 80) {
                            wineName = catalogArray[i].wineWarm
                            console.log(wineName)
                        }
                        if (authorClicked === catalogArray[i].Author && temp >= 80) {
                            wineName = catalogArray[i].wineHot
                            console.log(wineName)
                        }
    
                        // var wineOne = document.querySelector('#wineOne')
                         
                        // $('#wineOne').text("Wine: " + wineName)
                        
                        // var wineTwo = document.querySelector('#wineTwo')
                        // var wineThree = document.querySelector('#wineThree')
                        // var wineFour = document.querySelector('#wineFour')
                        $('#wineOne').append(wineName)
                        $('#wineTwo').append(wineName)
                        $('#wineThree').append(wineName)
                        $('#wineFour').append(wineName)
                        // wineOne.textContent("Wine: " + wineName)
                        // wineTwo.append("Wine: " + wineName)
                        // wineThree.append("Wine: " + wineName)
                        // wineFour.append("Wine: " + wineName)
                    }
                       


                })
               

            })
        })
}   
$(document).on('click', '.author', function(event){
    // event.preventDefault();

    var authorClicked = $(this).text()
    console.log(authorClicked)
   
    var index = document.getElementById('starterPage')
    var suggestion = document.getElementById('suggestionPage')
    
    index.style.display = "none"
    suggestion.style.display = "block"

    
    
    
    var searchTerm = ""
    
    var queryURLGoogle = "https://www.googleapis.com/books/v1/volumes?q=" + searchTerm + "+inauthor:" + authorClicked + "&printType=books&maxResults=4" +  "&key=AIzaSyAY3w9MXUcw0hyZQHhfwGWZLP2O_iyJCgI";
                   // https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
        console.log(queryURLGoogle)
    $.ajax({
        url: queryURLGoogle,
        method: "GET"
    })
        .then(function(response) {
            console.log(response)
            // console.log(response.items[0].volumeInfo.title)

            

                var coverPage = (response.items[3].volumeInfo.imageLinks.thumbnail)
                var author = (response.items[3].volumeInfo.authors[0])
                var description = (response.items[3].volumeInfo.description)
                var title = (response.items[3].volumeInfo.title)
                var buyLink = (response.items[3].saleInfo.buyLink)
                
                
                

                var writerOne = document.querySelector('#writerOne')
                var topicOne = document.querySelector('#titleOne')
                var descripOne = document.querySelector('#descriptionOne')
                var linkOne = document.querySelector('#linkOne')

                writerOne.append("Author: " + author)
                topicOne.append("Title: " + title)
                descripOne.append("Description: " + description)
                $('#imgOne').attr('src', coverPage)
                $('#linkOne').attr('href', buyLink)
            
                /////////////////////////////////////////////////////////////////////

                var coverPage = (response.items[1].volumeInfo.imageLinks.thumbnail)
                var author = (response.items[1].volumeInfo.authors[0])
                var description = (response.items[1].volumeInfo.description)
                var title = (response.items[1].volumeInfo.title)
                var buyLink = (response.items[1].saleInfo.buyLink)
                
                
                

                var writerTwo = document.querySelector('#writerTwo')
                var topicTwo = document.querySelector('#titleTwo')
                var descripTwo = document.querySelector('#descriptionTwo')
                var linkTwo = document.querySelector('#linkTwo')

                writerTwo.append("Author: " + author)
                topicTwo.append("Title: " + title)
                descripTwo.append("Description: " + description)
                $('#imgTwo').attr('src', coverPage)
                $('#linkTwo').attr('href', buyLink)
            
                /////////////////////////////////////////////////////////////////////

                var coverPage = (response.items[2].volumeInfo.imageLinks.thumbnail)
                var author = (response.items[2].volumeInfo.authors[0])
                var description = (response.items[2].volumeInfo.description)
                var title = (response.items[2].volumeInfo.title)
                var buyLink = (response.items[2].saleInfo.buyLink)
                
                
                

                var writerThree = document.querySelector('#writerThree')
                var topicThree = document.querySelector('#titleThree')
                var descripThree = document.querySelector('#descriptionThree')
                var linkThree = document.querySelector('#linkThree')

                writerThree.append("Author: " + author)
                topicThree.append("Title: " + title)
                descripThree.append("Description: " + description)
                $('#imgThree').attr('src', coverPage)
                $('#linkThree').attr('href', buyLink)

                /////////////////////////////////////////////////////////////////////

                var coverPage = (response.items[0].volumeInfo.imageLinks.thumbnail)
                var author = (response.items[0].volumeInfo.authors[0])
                var description = (response.items[0].volumeInfo.description)
                var title = (response.items[0].volumeInfo.title)
                var buyLink = (response.items[0].saleInfo.buyLink)
                
                
                

                var writerFour = document.querySelector('#writerFour')
                var topicFour = document.querySelector('#titleFour')
                var descripFour = document.querySelector('#descriptionFour')
                var linkFour = document.querySelector('#linkFour')

                writerFour.append("Author: " + author)
                topicFour.append("Title: " + title)
                descripFour.append("Description: " + description)
                $('#imgFour').attr('src', coverPage)
                $('#linkFour').attr('href', buyLink)
        })

           

           

        

        
     
        
})

$(".luckyList").on("click", function(){

    var index = document.getElementById('starterPage')
    var suggestion = document.getElementById('suggestionPage')
    
    index.style.display = "none"
    // suggestion.style.display = "block"

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
                var authorCard = `<div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                <div class="uk-card-media-left uk-cover-container">
                    <img src="${response.results.books[0].book_image}" alt="" uk-cover>
                    <canvas width="600" height="400"></canvas>
                </div>
                <div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title title">Title: ${response.results.books[0].title}</h3>
                        <p class="author">Author: ${response.results.books[0].author}</p>
                        <p class="description">Description: ${response.results.books[0].description}</p>
                       
                        <a class="uk-button uk-button-default" href="${response.results.books[0].amazon_product_url}">Book Link</a>
                    </div>
                </div>
            </div>
            <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                <div class="uk-card-media-left uk-cover-container">
                    <img src="${response.results.books[1].book_image}" alt="" uk-cover>
                    <canvas width="600" height="400"></canvas>
                </div>
                <div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title title">Title: ${response.results.books[1].title}</h3>
                        <p class="author">Author: ${response.results.books[1].author}</p>
                        <p class="description">Description: ${response.results.books[1].description}</p>
                       
                        <a class="uk-button uk-button-default" href="${response.results.books[1].amazon_product_url}">Book Link</a>
                    </div>
                </div>
            </div>
            <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                <div class="uk-card-media-left uk-cover-container">
                    <img src="${response.results.books[2].book_image}" alt="" uk-cover>
                    <canvas width="600" height="400"></canvas>
                </div>
                <div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title title">Title: ${response.results.books[2].title}</h3>
                        <p class="author">Author: ${response.results.books[2].author}</p>
                        <p class="description">Description: ${response.results.books[2].description}</p>
                        
                        <a class="uk-button uk-button-default" href="${response.results.books[2].amazon_product_url}">Book Link</a>
                    </div>
                </div>
            </div>
            <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                <div class="uk-card-media-left uk-cover-container">
                    <img src="${response.results.books[3].book_image}" alt="" uk-cover>
                    <canvas width="600" height="400"></canvas>
                </div>
                <div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title title">Title: ${response.results.books[3].title}</h3>
                        <p class="author">Author: ${response.results.books[3].author}</p>
                        <p class="description">Description: ${response.results.books[3].description}</p>
                        
                        <a class="uk-button uk-button-default" href="${response.results.books[3].amazon_product_url}">Book Link</a>
                    </div>
                </div>
            </div>`
        
            $("#authorCards").html(authorCard);
            });
})


$("#home").on("click", function(){
    
    
    var index = document.getElementById('starterPage')
    var suggestion = document.getElementById('suggestionPage')

    
    
    index.style.display = "block"
    suggestion.style.display = "none"

    location.reload(true);

    // var titleOne = document.getElementById("titleOne")
    // var writerOne = document.getElementById('writerOne')
    // var wineOne = document.getElementById('wineOne')

    // console.clear()
    // titleOne.textContent = ""
    // writerOne.textContent = ""
    // descriptionOne.textContent = ""
    // wineOne.textContent = ""

    // titleTwo.textContent = ""
    // writerTwo.textContent = ""
    // descriptionTwo.textContent = ""
    // wineTwo.textContent = ""

    // titleThree.textContent = ""
    // writerThree.textContent = ""
    // descriptionThree.textContent = ""
    // wineThree.textContent = ""

    // titleFour.textContent = ""
    // writerFour.textContent = ""
    // descriptionFour.textContent = ""
    // wineFour.textContent = ""

    // $('#mainBtn').clear()

    authorCard.textContent = ""
    
})

renderWinebyWeather();