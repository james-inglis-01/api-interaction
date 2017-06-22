//Maori Quote Generator

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  var button = document.getElementById("button");
  //add listener event listener.
  button.addEventListener("click", function(e) {
    //request to API -> AJAX, Native HTTP req or FETCH in browser or JQuery.
    $.ajax({
      url: "https://eda-te-reo.herokuapp.com/api/proverbs"
    }).done(function(data) {
      console.log(data);
      // var quoteobj=JSON.parse(data);
      var authorDiv = document.getElementById("author");
      var quoteDiv = document.getElementById("quote");
      authorDiv.innerHTML = data.translation;
      quoteDiv.innerHTML = data.source;
    });

    //put results into div
  });
});
