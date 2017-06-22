//Maori Quote Generator

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

var button=document.getElementById("button");

button.addEventListener(click, function (c)) {
  $.ajax({
    url: "https://eda-te-reo.herokuapp.com/api/proverbs";
  })
  .done(function (data)){
    var authorDiv = document.getElementById("author");
    var quoteDiv = document.getElementById("quote");
    authorDiv.innerHTML = data.translation;
    quoteDiv.innerHTML = data.source;
  };
};
