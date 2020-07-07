var ground;
var doctor;

function setup(){
    createCanvas(1200,800);
    ground = new Ground(600,790,1200,20);
    doctor = new Doctor(50,720,40,100);
}
function draw(){
    background(50);
    //doctor.body.bounceOff(ground.body);
    ground.body.debug = true;
    ground.reset();
    doctor.check();
    drawSprites();
}