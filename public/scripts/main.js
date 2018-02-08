// TODO: render images in canvas
// TODO: add sounds to each ID
// TODO: looping functionality
// TODO: recording functionality
// TODO: make images move through lanes * speed
// TODO: download song after recording has ended
// TODO: START / STOP


var canvas;
var canWidth;
var img;
var x1 = 0;
var y1 = 0;
var x2 = 0;
var y2 = 0;
var x3 = 0;
var y3 = 0;
var currentImg;

function setup() {
    canvas = createCanvas(windowWidth / 7, windowHeight);
    canvas.parent('sidebar');
    canvas.position(0, 0);
}

function draw() {
    strokeWeight(2);
    canWidth = canvas.width;
    noFill();
    rect(2, 30, canWidth - 5, canvas.height - 70);

    if(currentImg) {
      putImageInLane(currentImg);
    }

}

function determineLane(node) {
    var nodeValue = node.context.innerHTML;
    if (nodeValue.length < 2) { // Only call functions if button is hit
        findImageURL(node);
        if (nodeValue === '1') { // DO sound stuff here
            x = 0, y = 0;
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
    var remove = "http://localhost:5000"; // Replace with static image URL when deployed
    var result = imgRegEx.exec(imageURL)[0];
    result = result.replace(remove, '');
    passImage(result);
}



function passImage(result) {
  currentImg = loadImage(result);

}

function putImageInLane(currentImg) {
  image(currentImg, x, y, currentImg.width/20, currentImg.height/20);
  console.log(currentImg);
}

function iteratePosition() {
  x +=10;
  y +=10;
}



$(document).ready(function() {
    var currentNode;
    var currentValue;

    $(document).click(function(event) {
        currentNode = $(event.target);
        determineLane(currentNode);
        currentNode.blur();
        iteratePosition();
    });

}); // End document ready
