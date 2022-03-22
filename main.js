rise_up = "";
darkside = "";

function preload(){
    rise_up = loadImage("rise_up.mp3");
    darkside = loadImage("darkside.mp3");
}

function setup(){
    canvas = createCanvas(200,100);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,200,100);
}