// TODO: render images in canvas
// TODO: add sounds to each ID
// TODO: looping functionality
// TODO: recording functionality
// TODO: make images move through lanes * speed
// TODO: download song after recording has ended
// TODO: START / STOP


var canvas;
var canWidth;

function setup() {
    canvas = createCanvas(windowWidth / 7, windowHeight);
    canvas.parent('sidebar');
    canvas.position(0, 0);
}

function draw() {
    strokeWeight(2);
    canWidth = canvas.width;
    rect(2, 30, canWidth - 5, canvas.height - 70);
}

function determineLane(node) {
    var nodeValue = node.context.innerHTML;

    if (nodeValue.length < 2) { // Only call functions if button is hit
        findImageURL(node);
        if (nodeValue === '1') { // DO sound stuff here
            console.log("hits 1");
        } else if (nodeValue === '2') { // DO sound stuff here
            console.log("hits 2");
        } else if (nodeValue === '3') { // DO sound stuff here
            console.log("hits 3");
        } else {
            console.log("did not hit value");
        }
    }
}

function findImageURL(node) {
    var imageURL = node.parent().css('background-image');
    var imgRegEx = /(https?:\/\/.*\.(?:png))/i;
    var result = imgRegEx.exec(imageURL)[0];
    passImage(result);
}



function passImage(result) {
  var img = loadImage(result);
  putImageInLane(img);
}

function putImageInLane(img) {
  image(img, 0, 0, img.width/2, img.height/2);
  console.log(img)
}



$(document).ready(function() {
    var currentNode;
    var currentValue;

    $(document).click(function(event) {
        currentNode = $(event.target);
        determineLane(currentNode);
        currentNode.blur();
    });

}); // End document ready
