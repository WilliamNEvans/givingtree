let tree;
let leafImages = [];
let leafs = [];
let scaleFactor = 1;

const baseSize = 800; // Original canvas width & height

function preload() {
  tree = loadImage('img/branch.png');

  leafImages[0] = loadImage('img/cut.leaf.png');
  leafImages[1] = loadImage('img/down.leaf.png');
  leafImages[2] = loadImage('img/my.leaf.png');
  leafImages[3] = loadImage('img/trunk.leaf.png');
  leafImages[4] = loadImage('img/and.leaf.png');
  leafImages[5] = loadImage('img/make.leaf.png');
  leafImages[6] = loadImage('img/a.leaf.png');
  leafImages[7] = loadImage('img/boat.leaf.png');
  leafImages[8] = loadImage('img/Then.leaf.png');
  leafImages[9] = loadImage('img/you.leaf.png');
  leafImages[10] = loadImage('img/can.leaf.png');
  leafImages[11] = loadImage('img/sail.leaf.png');
  leafImages[12] = loadImage('img/away.leaf.png');
  leafImages[13] = loadImage('img/and.leaf.png');
  leafImages[14] = loadImage('img/be.leaf.png');
  leafImages[15] = loadImage('img/happy.leaf.png');
  leafImages[16] = loadImage('img/leaf.png');
  leafImages[17] = loadImage('img/leaf2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  // Your leaf positioning remains unchanged
  leafs.push({ img: leafImages[0], x: 180, y: 170, falling: false });
  leafs.push({ img: leafImages[1], x: 240, y: 160, falling: false });
  leafs.push({ img: leafImages[2], x: 310, y: 140, falling: false });
  leafs.push({ img: leafImages[3], x: 395, y: 140, falling: false });
  leafs.push({ img: leafImages[4], x: 470, y: 140, falling: false });
  leafs.push({ img: leafImages[5], x: 530, y: 140, falling: false });
  leafs.push({ img: leafImages[6], x: 590, y: 140, falling: false });
  leafs.push({ img: leafImages[7], x: 630, y: 130, falling: false });
  leafs.push({ img: leafImages[8], x: 180, y: 250, falling: false });
  leafs.push({ img: leafImages[9], x: 250, y: 250, falling: false });
  leafs.push({ img: leafImages[10], x: 300, y: 230, falling: false });
  leafs.push({ img: leafImages[11], x: 350, y: 240, falling: false });
  leafs.push({ img: leafImages[12], x: 420, y: 250, falling: false });
  leafs.push({ img: leafImages[13], x: 480, y: 250, falling: false });
  leafs.push({ img: leafImages[14], x: 530, y: 240, falling: false });
  leafs.push({ img: leafImages[15], x: 570, y: 250, falling: false });
  leafs.push({ img: leafImages[16], x: 570, y: 290, falling: false });
  leafs.push({ img: leafImages[16], x: 590, y: 190, falling: false });
  leafs.push({ img: leafImages[16], x: 400, y: 200, falling: false });
  leafs.push({ img: leafImages[16], x: 300, y: 200, falling: false });
  leafs.push({ img: leafImages[16], x: 240, y: 200, falling: false });
  leafs.push({ img: leafImages[17], x: 370, y: 180, falling: false });
  leafs.push({ img: leafImages[17], x: 270, y: 110, falling: false });
  leafs.push({ img: leafImages[17], x: 340, y: 270, falling: false });
  leafs.push({ img: leafImages[17], x: 500, y: 280, falling: false });
  leafs.push({ img: leafImages[17], x: 540, y: 160, falling: false });
  leafs.push({ img: leafImages[16], x: 600, y: 280, falling: false });
  leafs.push({ img: leafImages[16], x: 230, y: 280, falling: false });
  leafs.push({ img: leafImages[17], x: 500, y: 190, falling: false });
  leafs.push({ img: leafImages[17], x: 200, y: 290, falling: false });
  leafs.push({ img: leafImages[17], x: 280, y: 270, falling: false });
  leafs.push({ img: leafImages[17], x: 180, y: 270, falling: false });
  leafs.push({ img: leafImages[17], x: 130, y: 290, falling: false });
  leafs.push({ img: leafImages[17], x: 130, y: 290, falling: false });
  leafs.push({ img: leafImages[16], x: 230, y: 280, falling: false });
}

function draw() {
  background(255);

  // Determine scale factor and apply translation
  scaleFactor = min(width / baseSize, height / baseSize);
  translate((width - baseSize * scaleFactor) / 2, (height - baseSize * scaleFactor) / 2);
  scale(scaleFactor);

  image(tree, baseSize / 2, baseSize / 2);

  // Adjust mouse coordinates to scaled canvas
  let scaledMouseX = (mouseX - (width - baseSize * scaleFactor) / 2) / scaleFactor;
  let scaledMouseY = (mouseY - (height - baseSize * scaleFactor) / 2) / scaleFactor;

  for (let leaf of leafs) {
    let d = dist(scaledMouseX, scaledMouseY, leaf.x, leaf.y);

    if (d < 30 && !leaf.falling) {
      leaf.falling = true;
    }

    if (leaf.falling) {
      leaf.x += random(-11, 11);
      leaf.y -= 3;
    }

    image(leaf.img, leaf.x, leaf.y);
  }

  let allOffScreen = leafs.every(leaf => leaf.y < 0);
  if (allOffScreen) {
    window.location.href = '../sketch3/index.html';
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}