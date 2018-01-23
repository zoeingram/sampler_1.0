var canvas;
var canWidth;

function setup() {
  canvas = createCanvas(windowWidth/7, windowHeight);
  canvas.parent('sidebar');
  canvas.position(0, 0);
}

function draw() {
  strokeWeight(2);
  canWidth = canvas.width;
  rect(2, 30, canWidth -5, canvas.height -70);
}

function determineLane(nodeValue) {
  if (nodeValue === '1') {
    console.log("hits 1");
  } else if (nodeValue === '2') {
    console.log("hits 2");
  } else if (nodeValue === '3'){
    console.log("hits 3");
  } else {
    console.log("did not hit value");
  }
}



$(document).ready(function() {
  var currentNode;
  var currentValue;

  $(document).click(function(event) {
      currentNode = $(event.target.innerHTML);
      currentValue = currentNode.selector;
      determineLane(currentValue);
  });


}); // End document ready
