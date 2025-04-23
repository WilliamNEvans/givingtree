var tree;
var appleImages = [];
var apples = [];

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
  createCanvas(800, 800);
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
  image(tree, 400, 400);

  for (var apple of apples) {
    if (apple.falling == true) {
      if (apple.y < height - 30) {
        apple.y += 10;
      }
    }
    image(apple.img, apple.x, apple.y);
  }
}

function mousePressed() {
  for (var apple of apples) {
    var d = dist(mouseX, mouseY, apple.x, apple.y);

    if (d < 30) {
      if (apple.falling == false) {
        apple.falling = true;
        
      }
    }
  }
}