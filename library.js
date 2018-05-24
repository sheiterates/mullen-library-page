// Hey you! Thanks for checking this pen. :) I open source it as library. https://github.com/greenwoodents/quickbeam.js
var DEFAULT_ID = 1;
var WS_ADDRESS = 'http://localhost:8080/books/';

$.getJSON(WS_ADDRESS,
  function(data) {
   var buffer='';
    $.each(data, function(index, val) {
      buffer += '<li><a id="book' + val.bookID + '" class="dropdown-item">' + val.title + '</a></li>'
    });
  
    $('#booklist').html(buffer);
  
    $.each(data, function(index, val) {
      $('#book'+val.bookID).click(function(e) {
        console.log("CLICKED");
        updateBook(val.bookID);
      });
    });
  });

var updateBook = function(id) {
  $.getJSON(
    WS_ADDRESS + 'id/' + id,
    function(data) {
      // Success! Do stuff with data.
      $("#titlebox").text(data[0].title);
      $("#authorbox").text(data[0].author);
      $("#imagebox").html('<img src="' + data[0].imageLink + '" width=80%/>')
    });
}
updateBook(DEFAULT_ID);
