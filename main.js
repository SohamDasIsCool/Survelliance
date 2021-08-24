video="";
objects=[];
status="";
function preload(){
    video=createVideo('video.mp4');
    video.hide();
}
function setup(){
    canvas=createCanvas(700,320);
    canvas.center();
}
function draw(){
    image(video,0,0,700,320);
    if(status!=""){
        objDetector.detect(video,gotResults);
        for (index = 0; index < objects.length; index++) {
            document.getElementById("status").innerHTML="Status:Object(s) detected";
            document.getElementById("number_of_objects").innerHTML="Number of objects detected are:"+objects.length;
            fill('#FF0000');
            percent=floor(objects[index].confidence*100);
            text(objects[index].label+" "+percent+"%",objects[index].x+15,objects[index].y+15);
            noFill();
            stroke('#FF0000');
            rect(objects[index].x,objects[index].y,objects[index].width,objects[index].height);
        }
    }
}
function gotResults(error,results){
    if(error){
     console.error(error);
    }
    else{
        console.log(results);
        objects=results;
    }
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