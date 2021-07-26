nosex=0;
nosey=0;
leftwristx=0;
rightwristx=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    posenet=ml5.poseNet(video,modelloded);
    posenet.on('pose',gotposes);   
}
function draw(){
    background("lightpink");
    fill("blue");
    stroke("black");
    square(nosex,nosey,difference);
}
function modelloded(){
    console.log("Model loded");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x
        nosey=results[0].pose.nose.y
        console.log("nosex"+nosex+"nosey"+nosey);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
        console.log("left writst"+leftwristx+"right wrist"+rightwristx+"difference"+difference);
        }
}