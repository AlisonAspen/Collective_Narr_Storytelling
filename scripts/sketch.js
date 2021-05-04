//js file
let radius = 50;
function setup() {
  let canvas = createCanvas(windowWidth - 10, 500);
  background(100);
  let canvHolder = createDiv().addClass("canvas");
  canvas.parent(canvHolder);
}

function draw() {
  ellipse(400, 70, radius, radius);
  ellipse(100, 350, radius, radius);
  ellipse(500, 150, radius, radius);
  ellipse(650, 300, radius, radius);
}
