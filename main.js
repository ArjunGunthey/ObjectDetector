
function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    canvas.hide();
}

function draw() {
    image(canvas, 0, 0, 480, 380);
    if(status != "")
    {
        objectDetector.detect(canvas, gotResult);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Detecting Objects";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+ objects.length;

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);  
        }
    }
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelloaded() {
    console.log("Model Loaded!");
    status = true;
}   

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}