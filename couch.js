Status = "";
picture = "";

function preload() {
    picture = loadImage("couch.jpg");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    objectDetector = ml5.objectDetector('cocosd', modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects...";
}

function draw() {
    image(picture, 0, 0, 400, 400);
}
status1 = "";
function modelLoaded() {
    console.log('Cocosd IS WORKING');
    Status: true;
    objectDetector.detect(picture, gotResults);
}

function gotResults(error, results) {
    if(error) {
        console.log(error);
    }

    else {
        console.log(results);
    }
}