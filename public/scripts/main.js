var canvas;
var canWidth;

function setup() {
  canvas = createCanvas(windowWidth/7, windowHeight);
  canvas.parent('sidebar');

}

function draw() {
  strokeWeight(2);
  canWidth = canvas.width;


  rect(2, 40, canWidth -5, canvas.height -5);
}

$(document).ready(function() {
  var boxes = document.getElementsByClassName('box');
  var currentNode;


  $(document).click(function(event) {
      currentNode = $(event.target);
      console.log(currentNode.css('background-image'));
  });


}); // End document ready
