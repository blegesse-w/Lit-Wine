// function wineSelection() {

//     var temp = 60
//     var authorClicked = 'James Patterson'
//     var wineName = ""

//     var catalog = [
//         ['Stephen King', 'Rose', 'Sauvignon Blanc', 'Pinot Noir'], 
//         ['Fyodor Dostoevsky', 'Malbec', 'Merlot', 'Pinot Noir'], 
//         ['James Patterson', 'Cabernet Sauvignon', 'Shiraz', 'Riesling'],
//         ['Agatha Christie', 'Zinf Andel', 'Viognier', 'Merlot/Pinot Gris'],
//         ['Isabel Allende', 'Torrentes', 'Syrah', 'Garnacha'],
//         ['Camille Perri', 'Chenin Blanc', 'Cabernet Sauvignon', 'Chardonnay/Rose'],
//         ['Sofi Oksanen', 'Chardonnay', 'Chianti', 'Cabarnet Sauvignon'],
//         ['Herta Muller', 'Mulled Wine', 'Suavignon Blanc', 'Malbec'],
//         ['Olga Tokarczuk', 'Chenin Blanc', 'Reisling', 'Prosecco'],
//         ['Cormac McCarthy', 'Malbec', 'Chianti', 'Sauvignon Blanc'],
//         ['Aldous Huxley', 'Mulled Wine', 'Pinot Noir', 'Pinot Grigio'],
//         ['Penn Jillette', 'Decaf Caffè Americano w/ 8 shots of Decaf Espresso', 'Decaffinated Coffee', 'Sparkling Water']]

            

//     for (i = 0; i < exampleList.length; i++) {
//         if ((authorClicked === catalog[i][0]) && (temp <= 60)) {
//             wineName = catalog[i][1]
//         }
//         if ((authorClicked === catalog[i][0]) && (temp > 60 && temp < 80)){
//             wineName = catalog[i][2]
//         }
//         if ((authorClicked === catalog[i][0]) && (temp >= 80)) {
//             wineName = catalog[i][3]
//         }
//     }

//     return wineName
    
// }

// function feelingLucky(){
//     var listName = "combined print fiction" // best seller books in this section 
//     var queryURLNYT = "https://api.nytimes.com/svc/books/v3/lists/current/" + listName + ".json?api-key=E7hqgdVcY5GIbLAfpBFL6tvAVz8oV8WG";
//             console.log(queryURLNYT)
//         $.ajax({
//             url: queryURLNYT,
//             method: "GET"
//         })
//             .then(function(response) {
//                 console.log(response);
                
//                 // console.log(response.items.0.saleInfo.buyLink);
//                 var randInt = Math.floor(Math.random() * 20)
                
//                 // console.log(response.results.books[randInt].author)

//                 var surprise = []
//                 var surpriseWine = ['Malbec', 'Cabernet Sauvignon', 'Rose', 'Pinot Noir', 'Pinot Grigio', 'Shiraz', 'Chardonnay','Zinfandel', 'Sauvigon Blanc']
//                 var wineIndex = Math.floor(Math.random()* 9)
//                 console.log(surpriseWine[wineIndex]) // randomly chooses wine type for the surpise book 


//                 surprise.push(response.results.books[randInt].author)
//                 surprise.push(response.results.books[randInt].title)
//                 surprise.push(response.results.books[randInt].book_image)
//                 surprise.push(response.results.books[randInt].description)
//                 surprise.push(response.results.books[randInt].amazon_product_url)
//                 console.log(surprise)


//             });

// }   

// // var authorbtn = document.querySelector('author')
// // authorbtn.addEventListener('click', function(){
// //     console.log('im clicked')
// // })

// var searchTerm = ""
// var authorName = "King"
// var queryURLGoogle = "https://www.googleapis.com/books/v1/volumes?q=" + searchTerm + "+inauthor:" + authorName + "&printType=books&maxResults=4" +  "&key=AIzaSyBTrX3sauMMmvjx2xDJpF8G58thA3OD4Qk";
//                    // https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
//         console.log(queryURLGoogle)
//       $.ajax({
//         url: queryURLGoogle,
//         method: "GET"
//       })
//         .then(function(response) {
//             console.log(response)
//             console.log(response.items[0].volumeInfo.title)

//            var coverPage = (response.items[0].volumeInfo.imageLinks.thumbnail)
//            var author = (response.items[0].volumeInfo.authors[0])
//            var description = (response.items[0].volumeInfo.description)
//            var title = (response.items[0].volumeInfo.title)
//            var buyLink = (response.items[0].saleInfo.buyLink)

//         });
// function googleBooks() {
//     $(document).ready(function(){    
//         $("#myform").submit(function(){
            
//             var search = $("#books").val();
//             if(search == "")
//             {
//             alert("Might want to enter something here since you need something git pull to search for but I dunno... I just work here. ");
//             }
//             else{        
//             var url = "";
//             var img = "";
//             var title = "";
//             var author = "";
//             var description = "";
            
//             $.get(queryURLGoogle,function(response){
                    
//                 for(i=0;i<response.items.length;i++){
//                     title=$(response.items[i].volumeInfo.title);
//                     description=$(response.items[0].volumeInfo.description)  

//                     author=$(response.items[i].volumeInfo.authors);
//                     img = $('<img id="dynamic"><br><a href=' + response.items[i].volumeInfo.thumbnail + '><button id="imagebutton">Read More</button></a>');     
//                     url= response.items[i].saleInfo.buyLink;
//                     img.attr('src', url);
//                     title.appendTo('.title');
//                     author.appendTo('.author');
//                     description.appendTo('.description')
//                     img.appendTo('#result');
//                 }
//             });
                        
//         }
//                 return false;
//         });
                    
//     });
// }  

// function normalSelection() {
//     wineSelection()
//     googleBooks()
    
// }
// function luckySelection(){
//     feelingLucky()
// }

// $('.author').click(function(){
//    var authorClicked = $(this).val()
//    var temp = 60
    
//     var wineName = ""

//     var catalog = [
//         ['Stephen King', 'Rose', 'Sauvignon Blanc', 'Pinot Noir'], 
//         ['Fyodor Dostoevsky', 'Malbec', 'Merlot', 'Pinot Noir'], 
//         ['James Patterson', 'Cabernet Sauvignon', 'Shiraz', 'Riesling'],
//         ['Agatha Christie', 'Zinf Andel', 'Viognier', 'Merlot/Pinot Gris'],
//         ['Isabel Allende', 'Torrentes', 'Syrah', 'Garnacha'],
//         ['Camille Perri', 'Chenin Blanc', 'Cabernet Sauvignon', 'Chardonnay/Rose'],
//         ['Sofi Oksanen', 'Chardonnay', 'Chianti', 'Cabarnet Sauvignon'],
//         ['Herta Muller', 'Mulled Wine', 'Suavignon Blanc', 'Malbec'],
//         ['Olga Tokarczuk', 'Chenin Blanc', 'Reisling', 'Prosecco'],
//         ['Cormac McCarthy', 'Malbec', 'Chianti', 'Sauvignon Blanc'],
//         ['Aldous Huxley', 'Mulled Wine', 'Pinot Noir', 'Pinot Grigio'],
//         ['Penn Jillette', 'Decaf Caffè Americano w/ 8 shots of Decaf Espresso', 'Decaffinated Coffee', 'Sparkling Water']]

            

//     for (i = 0; i < exampleList.length; i++) {
//         if ((authorClicked === catalog[i][0]) && (temp <= 60)) {
//             wineName = catalog[i][1]
//         }
//         if ((authorClicked === catalog[i][0]) && (temp > 60 && temp < 80)){
//             wineName = catalog[i][2]
//         }
//         if ((authorClicked === catalog[i][0]) && (temp >= 80)) {
//             wineName = catalog[i][3]
//         }
//     }

//     return wineName

 

// })

// $('.author').on('click', function(){
//     // console.log('clicked', $(this).text())
//     console.log('test')
// })
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
                        <p>Wine:</p>
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
                        <p>Wine:</p>
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
                        <p>Wine:</p>
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
                        <p>Wine:</p>
                        <a class="uk-button uk-button-default" href="${response.results.books[3].amazon_product_url}">Book Link</a>
                    </div>
                </div>
            </div>`
        
            $("#authorCards").html(authorCard);
            });
})

