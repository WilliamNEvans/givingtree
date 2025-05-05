let tree;
let ree;
let x, y, a, b, c, d;
let angle = 0;
let roll = false;
let hasRedirected = false;

const baseWidth = 1600;
const baseHeight = 800;
let scaleFactor = 1;

function preload() {
  tree = loadImage('img/branch.png');
  ree = loadFont("SCHLBKB.TTF");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textAlign(CENTER, RIGHT);
  updatePositions();
}

function updatePositions() {
  x = baseWidth / 2 - 275;
  y = baseHeight - 130;
  a = baseWidth / 2;
  b = baseHeight - 130;
  c = baseWidth / 2 + 275;
  d = baseHeight - 130;
}

function draw() {
  background(255);

  scaleFactor = min(width / baseWidth, height / baseHeight);
  translate((width - baseWidth * scaleFactor) / 2, (height - baseHeight * scaleFactor) / 2);
  scale(scaleFactor);

  push();
  translate(260, 610);
  rotate(radians(angle));
  image(tree, 0, 0);
  pop();

  drawLetter(x, y, 'r');
  drawLetter(a, b, 'e');
  drawLetter(c, d, 'e');

  if (roll) {
    if (angle < 90) {
      angle += 5;
    } else {
      angle = 90;
      roll = false;

      // Redirect after short delay
      if (!hasRedirected) {
        hasRedirected = true;
        setTimeout(() => {
          window.location.href = "https://williamnevans.github.io/givingtree/forth.html";
        }, 500); // optional half-second delay
      }
    }
  }
}

function drawLetter(px, py, char) {
  push();
  translate(px, py);
  rotate(radians(angle));
  textFont(ree);
  textSize(500);
  text(char, 0, 0);
  pop();
}

function mousePressed() {
  if (!roll && angle < 90) {
    roll = true;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}