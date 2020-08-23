// nyt book review api
var listName = "hardcover-fiction" //input "hardcover-fiction" is for testing purposes. list is in google sheets doc. we'll need to make an array for the drop down menu.
var queryURLNYT = "https://api.nytimes.com/svc/books/v3/lists/current/" + listName + ".json?api-key=E7hqgdVcY5GIbLAfpBFL6tvAVz8oV8WG";
        console.log(queryURLNYT)
      $.ajax({
        url: queryURLNYT,
        method: "GET"
      })
        .then(function(response) {
            console.log(response);
        });
        
// google books api test
var searchTerm = ""
var authorName = "McCarthy"
var queryURLGoogle = "https://www.googleapis.com/books/v1/volumes?q=" + searchTerm + "+inauthor:" + authorName + "&printType=books&maxResults=4" +  "&key=AIzaSyBTrX3sauMMmvjx2xDJpF8G58thA3OD4Qk";
                   // https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
        console.log(queryURLGoogle)
      $.ajax({
        url: queryURLGoogle,
        method: "GET"
      })
        .then(function(response) {
            console.log(response)
            console.log(response.items[0].volumeInfo.title)

           // for (i = 0; i < //MADDIE! not sure what to do!
           var coverPage = (response.items[0].volumeInfo.imageLinks.thumbnail)
           var author = (response.items[0].volumeInfo.authors[0])
           var description = (response.items[0].volumeInfo.description)
           var title = (response.items[0].volumeInfo.title)
           var buyLink = (response.items[0].saleInfo.buyLink)

        });

$(document).ready(function(){	
    $("#myform").submit(function(){
       
      var search = $("#books").val();
      if(search == "")
      {
        alert("Might want to enter something here since you need something git pull to search for but I dunno... I just work here. ");
      }
      else{		
        var url = "";
        var img = "";
        var title = "";
        var author = "";
       
$.get(queryURLGoogle,function(response){
       
      for(i=0;i<response.items.length;i++)
      {
        title=$(response.items[i].volumeInfo.title);  
        author=$(response.items[i].volumeInfo.authors);
        img = $('<img id="dynamic"><br><a href=' + response.items[i].volumeInfo.infoLink + '><button id="imagebutton">Read More</button></a>'); 	
        url= response.items[i].volumeInfo.imageLinks.thumbnail;
        img.attr('src', url);
        title.appendTo('#result');
        author.appendTo('#result');
        img.appendTo('#result');
        }
      });
             
      }
      return false;
    });
       
  });
       
var apiKey = "&appid=5e7b224c91d9b5f0ca260c0e0222df35"
var cityInput = "Houston"
var queryURLWeather = "https://api.openweathermap.org/data/2.5/weather?q="
  
    $.ajax({
    url: queryURLWeather + cityInput + apiKey,
    method: "GET"
    })
    .then(function(response){
    console.log(response);
    })

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


  var temp = 60
  var authorClicked = 'Penn Jillette'
  var wineName = ""
  
  var exampleList = [
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
      ['Penn Jillette', 'Decaf Caffè Americano w/ 8 shots of Decaf Espresso', 'Decaffinated Coffee', 'Sparkling Water']]
  
  
  
  for (i = 0; i < exampleList.length; i++) {
      if ((authorClicked === exampleList[i][0]) && (temp <= 60)) {
          wineName = exampleList[i][1]
      }
      if ((authorClicked === exampleList[i][0]) && (temp > 60 && temp < 80)){
          wineName = exampleList[i][2]
      }
      if ((authorClicked === exampleList[i][0]) && (temp >= 80)) {
          wineName = exampleList[i][3]
      }
  }
  
  console.log(wineName)

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
            var surpriseWine = ['Malbec', 'Cabernet Sauvignon', 'Rose', 'Pinot Noir', 'Pinot Grigio', 'Shiraz', 'Chardonnay','Zinfandel', 'Sauvigon Blanc']
            var wineIndex = Math.floor(Math.random()* 9)
            console.log(surpriseWine[wineIndex]) // randomly chooses wine type for the surpise book
            surprise.push(response.results.books[randInt].author)
            surprise.push(response.results.books[randInt].title)
            surprise.push(response.results.books[randInt].book_image)
            surprise.push(response.results.books[randInt].description)
            surprise.push(response.results.books[randInt].amazon_product_url)
            console.log(surprise)
        });

        

  // this is the button event listener for index.html
var corkbtn = document.getElementById("btn");

corkbtn.addEventListener("click", function(){
    document.location.href = 'formPage.html';
});
    
  // listener for dropdown menu in html
  //  document.addEventListener('DOMContentLoaded', function() {
  //    var elems = document.querySelectorAll('.dropdown-trigger');
  //    var instances = M.Dropdown.init(elems, options);
  //  });
  
    // Or with jQuery
  
  //  $('.dropdown-trigger').dropdown();

  // listener for modal (button)
  //  document.addEventListener('DOMContentLoaded', function() {
  //    var elems = document.querySelectorAll('.modal');
  //    var instances = M.Modal.init(elems, options);
  //  });
  
    // Or with jQuery
  
  //  $(document).ready(function(){
  //    $('.modal').modal();
  //  });