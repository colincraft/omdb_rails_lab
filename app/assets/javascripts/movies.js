$(document).ready(function () {
  $("form").on("submit", function (event) {
    event.preventDefault();
    var searchTerm = event.target.search_term.value;
    $.getJSON("/movies/index.json", {search_term: searchTerm}, function (data) {
      var list = $("ul").empty();
      var template = HandlebarsTemplates["movie"];
      var html = template({movies: data});
      list.append(html);
    });
  });
});
