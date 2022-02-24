function preload() {
}

function setup() {
        canvas=createCanvas(640, 480);
        canvas.position(110, 250);
        video=createCapture(VIDEO);
        video.hide();    
}

function draw() {
    image(video, 0, 0, 640, 480);
    ellipse(56, 46, 55, 55);
    Describe('pink ellipse with white outline in middle of a grey canvas');
}

function take_snapshot() {
    save('student_name.png');
}

function filter_tint() {
    syntax.getElementById("shape").value;
}