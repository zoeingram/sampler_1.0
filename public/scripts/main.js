var canvas;

function setup() {
  canvas = createCanvas(windowWidth/7, windowHeight);
  canvas.parent('sidebar');

}

function draw() {
  strokeWeight(2);
  rect(2, 2, canvas.width -5, canvas.height -5);


}
$(document).ready(function() {
  var boxes = document.getElementsByClassName('box');
  var currentNode;


  $(document).click(function(event) {
      currentNode = $(event.target);
      console.log(currentNode.css('background-image'));
  });


}); // End document ready
