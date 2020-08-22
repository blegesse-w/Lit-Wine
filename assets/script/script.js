// nyt book review api
var listName = "Espionage" //input "hardcover-fiction" is for testing purposes. list is in google sheets doc. we'll need to make an array for the drop down menu.
var queryURLNYT = "https://api.nytimes.com/svc/books/v3/lists/current/" + listName + ".json?api-key=E7hqgdVcY5GIbLAfpBFL6tvAVz8oV8WG";
        console.log(queryURLNYT)
      $.ajax({
        url: queryURLNYT,
        method: "GET"
      })
        .then(function(response) {
            console.log(response)
        });
        
// google books api test
var searchTerm = ""
var authorName = "Huxley"
var queryURLGoogle = "https://www.googleapis.com/books/v1/volumes?q=" + searchTerm + "+inauthor:" + authorName + "&key=AIzaSyBTrX3sauMMmvjx2xDJpF8G58thA3OD4Qk";
                   // https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
        console.log(queryURLGoogle)
      $.ajax({
        url: queryURLGoogle,
        method: "GET"
      })
        .then(function(response) {
            console.log(response)
            // $(".TBD").text("Headline:" + response.docs)
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



    
  // listener for dropdown menu in html
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.dropdown-trigger');
      var instances = M.Dropdown.init(elems, options);
    });
  
    // Or with jQuery
  
    $('.dropdown-trigger').dropdown();

  // listener for modal (button)
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems, options);
    });
  
    // Or with jQuery
  
    $(document).ready(function(){
      $('.modal').modal();
    });