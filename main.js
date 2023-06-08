img="";
status="";
object=[];
function preload(){
img=loadImage("dog_cat.jpg");
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectdetector=ml5.objectDetector('cocossd', modelLoded);
    document.getElementById("status").innerHTML="Status: Detecting";
}

function modelLoaded(){
    console.log("modelloaded");
    status=true;
    objectdetector.detector(img, gotResult);
}

function gotResult(error, results){
if(error){
    console.log(error);
}
console.log(results);
}

function draw(){
    image(img, 0, 0, 640, 420);
    /*
    text("Dog", 45, 75);
    noFill();
    stroke(255,0,0);
    rect(30,60, 450, 350);

    fill(255,0,0);
    text("Cat",320, 120);
    noFill();
    stroke(255,0,0);
    rect(300,90,270,320)
    */

    if(status != ''){
        for (i=0; i <= object.length; i++){
            document.getElementById("status").innerHTML="staus: Object Detected.";
            fill(255,0,0);
            percent=floor(object[i].confidence*100);
            text(object[i].label+" "+percent+"%", object[i].x+15, object[i].y+ 15);
            noFill();
            stroke(255,0,0);
            rect(object[i].x,object[i].y, object[i].width,object[i].height);
        }
    }
}
