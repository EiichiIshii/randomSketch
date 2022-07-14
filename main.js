let num = 10;
let img = [];
let index;
let w;
let posx, posy, amx, amy, angle, an, sclX, sclY, sec;

function preload() {
    for (let i = 0; i < num; i++) {
        img[i] = loadImage("data/r" + i + ".PNG");
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    imageMode(CENTER);
    noCursor();

    setPara();
    sec = 10;
}

function draw() {
    background(0);

    if (frameCount % (sec * 60) == 0) {
        setPara();
    }

    posx += amx;
    posy += amy;
    if (posx > width + width / 20 || posx < -width / 20) {
        amx = -amx;
    }
    if (posy > height + height / 20 || posy < -height / 20) {
        amy = -amy;
    }

    let ada = map(noise(an), 0, 1, -180, 180);
    an += 0.0005;

    push();
    translate(posx, posy);
    rotate(angle + ada);
    scale(sclX, sclY);
    image(img[index], 0, 0, w * 3, w * 3);
    pop();
}

function setPara() {
    index = int(random(num));
    w = max(windowWidth, windowHeight);
    posx = random(w);
    posy = random(w);
    amx = random(-1, 1);
    amy = random(-1, 1);
    angle = random(360);
    an = random(-180, 180);
    sclX = random([-1, 1]);
    sclY = random([-1, 1]);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    setPara();
}
