$(document).ready(function() {
  var boxes = document.getElementsByClassName('box');
  var currentNode;

  $(document).click(function(event) {
      currentNode = $(event.target);
      console.log(currentNode.css('background-image'));
  });




}); // End document ready
