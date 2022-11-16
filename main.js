function preload() {
    
}
function setup() {
    canvas = createCanvas(640,480);
    canvas.position(110, 200);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0,0, 640,480);
    fill("red")
    circle(320, 240, 30)
    fill('black')
    rect(270, 0, 100, 100);
    rect(220, 100, 200, 50);
    
}
function tirarFoto() {
    save('aloha.png');
}
