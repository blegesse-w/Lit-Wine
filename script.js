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