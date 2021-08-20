video="";
function preload(){
    video=createVideo('video.mp4');
    video.hide();
}
function setup(){
    canvas=createCanvas(480,280);
    canvas.center();
}
function draw(){
    image(video,0,0,480,280)
}
function start(){
    objDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting";
}
function modelLoaded(){
    console.log("Model has loaded!");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}