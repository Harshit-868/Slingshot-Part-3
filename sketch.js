// Create constants for Engine, World, etc.
const {Engine, World, Bodies, Body, Constraint} = Matter;

// Create all the global variables.
var engine, world;
var sling, ball;
var platform1, block1;
var flag = "ready";
var blocks = [];
var num = 15;
var score = 15 - num;

function setup() {
    // Create the canvas and define values for 'engine' and 'world'.
    var canvas = createCanvas(600, 400);
    engine = Engine.create();
    world = engine.world;

    // Create the ball and slingshot
    ball = new Ball(100, 280, 15);
    sling = new Slingshot(ball.body, {x: 100, y: 270});

    // Create the platforms and blocks
    platform1 = new Platform(400, 360, 160, 15);
    block1 = new Block(350, 325, "b1");
    block2 = new Block(375, 325, "b2");
    block3 = new Block(400, 325, "b3");
    block4 = new Block(425, 325, "b4");
    block5 = new Block(450, 325, "b5");
    block6 = new Block(375, 300, "b6");
    block7 = new Block(400, 300, "b7");
    block8 = new Block(425, 300, "b8");
    block9 = new Block(400, 275, "b9");
    
    platform2 = new Platform(450, 180, 130, 15);
    block10 = new Block(425, 125, "b10");
    block11 = new Block(450, 125, "b11");
    block12 = new Block(475, 125, "b12");
    block13 = new Block(437.5, 100, "b13");
    block14 = new Block(462.5, 100, "b14");
    block15 = new Block(450, 75, "b15");
    blocks.push(block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15);
}

function draw() {
    // Set the background and update the Engine.
    background("black");
    Engine.update(engine);
    
    // Message to the viewer
    fill("white");
    textSize(16);
    text("Drag and release to launch the ball.", 50, 160);
    text("Press SPACE to reload.", 85, 180);
    if (score < 15) {
        fill("yellow");
        text("Score:" + score, 135, 200);
    } else {
        textSize(25);
        fill(0, 210, 15);
        text("YOU WIN !!!", 100, 225);
    }
    
    
    //Display all the elements.
    sling.display();
    ball.display();
    platform1.display();
    platform2.display();
    
    for (i = 0; i < blocks.length; i++) {
        blocks[i].display();
    }
    num = 0;
    for (i = 0; i < blocks.length; i++) {
        if (blocks[i].checkPos()) {
            num++;
        }
    }
    score = 15 - num;
}

function mouseDragged() {
    if (flag != "launched") {
        Body.setPosition(ball.body, {x: mouseX, y: mouseY});
        flag = "loading";
    }
}

function mouseReleased() {
    if (flag == "loading") {
        sling.release();
        flag = "launched";
    }
}

function keyPressed() {
    if (keyCode == 32 && flag == "launched") {
        World.remove(world, ball.body);
        ball = new Ball(100, 280, 15);
        sling = new Slingshot(ball.body, {x: 100, y: 270});
        flag = "ready";
    }
}