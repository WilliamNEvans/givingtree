let tree;
let appleImages = [];
let apples = [];
let scaleFactor = 1;

const baseSize = 800; // Original canvas width & height

function preload() {
  tree = loadImage('img/tree.full.png');

  appleImages[0] = loadImage('img/Andapple (2).png');
  appleImages[1] = loadImage('img/soapple.png');
  appleImages[2] = loadImage('img/theapple3.png');
  appleImages[3] = loadImage('img/boyapple.png');
  appleImages[4] = loadImage('img/climbedapple.png');
  appleImages[5] = loadImage('img/upapple.png');
  appleImages[6] = loadImage('img/treeapple.png');
  appleImages[7] = loadImage('img/andapple.png');
  appleImages[8] = loadImage('img/gatheredapple.png');
  appleImages[9] = loadImage('img/herapple.png');
  appleImages[10] = loadImage('img/applesapple.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  apples.push({ img: appleImages[0], x: 100, y: 225, falling: false });
  apples.push({ img: appleImages[1], x: 150, y: 270, falling: false });
  apples.push({ img: appleImages[2], x: 180, y: 230, falling: false });
  apples.push({ img: appleImages[3], x: 240, y: 260, falling: false });
  apples.push({ img: appleImages[4], x: 300, y: 200, falling: false });
  apples.push({ img: appleImages[5], x: 330, y: 260, falling: false });
  apples.push({ img: appleImages[2], x: 380, y: 210, falling: false }); 
  apples.push({ img: appleImages[6], x: 410, y: 290, falling: false });
  apples.push({ img: appleImages[7], x: 460, y: 230, falling: false });
  apples.push({ img: appleImages[8], x: 500, y: 300, falling: false });
  apples.push({ img: appleImages[9], x: 550, y: 220, falling: false });
  apples.push({ img: appleImages[10], x: 610, y: 330, falling: false });
}

function draw() {
  background(255);

  scaleFactor = min(width / baseSize, height / baseSize);
  translate((width - baseSize * scaleFactor) / 2, (height - baseSize * scaleFactor) / 2);
  scale(scaleFactor);

  image(tree, baseSize / 2, baseSize / 2);

  let allFallen = true;

  for (let apple of apples) {
    if (apple.falling && apple.y < baseSize - 30) {
      apple.y += 10;
      allFallen = false;
    } else if (!apple.falling) {
      allFallen = false;
    }

    image(apple.img, apple.x, apple.y);
    
  }

  // Redirect to sketch2/index.html when all apples are done falling
  if (allFallen) {
    setTimeout(() => {
      window.location.href = '../sketch2/index.html';
    }, 1000); // 1-second delay for a smoother transition
  }
}

function mousePressed() {
  // Adjust mouse coordinates to match scaled canvas
  let scaledMouseX = (mouseX - (width - baseSize * scaleFactor) / 2) / scaleFactor;
  let scaledMouseY = (mouseY - (height - baseSize * scaleFactor) / 2) / scaleFactor;

  for (let apple of apples) {
    let d = dist(scaledMouseX, scaledMouseY, apple.x, apple.y);
    if (d < 30 && !apple.falling) {
      apple.falling = true;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}