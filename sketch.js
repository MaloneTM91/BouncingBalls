let ballCount = 100;

let x = [];
let y = [];

let xSpeed = [];
let ySpeed = [];
let r = [];
let b = [];
let g = [];
let size = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
  
      for (let i = 0; i < ballCount; i++) {
        x[i] = width/2;
        y[i] = height/2;

        xSpeed[i] = random(-10, 10);
        ySpeed[i] = random(-5, 5);

        size[i] = random(25, 75);

        r[i] = random(0, 256);
        b[i] = random(0, 256);
        g[i] = random(0, 256);

      }  
  }
  
  function draw() {
    background(0, 50);
    
    // TODO: Iterate through a new for loop to change the properties in order to animate the balls
    for (let i = 0; i < ballCount; i++) {
        x[i] += xSpeed[i];
        y[i] += ySpeed[i];
        if (x[i] < 0 || x[i] > width) {
            xSpeed[i] *= -1;
        }
        if (y[i] < 0 || y[i] > height) {
            ySpeed[i] *= -1;
        }
        fill(r[i], g[i], b[i]);
        noStroke();
        ellipse(x[i], y[i], size[i])
    }
  }