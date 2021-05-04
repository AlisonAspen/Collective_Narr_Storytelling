let canvasHolder = document.getElementById("storyElement");
let text1 = "In the subway, the trains come roaring past."
function setup() {
  let myCanv = createCanvas(windowWidth - 50, 500);
  background(100, 0, 100, 100);
  myCanv.parent(canvasHolder);
}

function draw() {
  textSize(48);
  text(text1, 10, 100);
}
