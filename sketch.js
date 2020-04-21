let circlesX = [];
let circlesY = [];
let curves = [];

function setup() {
  let speed = 0.08;
  let padding = 100;
  let offset = 150;
  let colors = [
    // color(31, 3, 152),
    color(80, 0, 195),
    color(117, 33, 238),
    color(0, 153, 195),
    color(0, 195, 143),
    color(62, 227, 183)
  ];

  createCanvas(windowWidth,windowHeight);

  for(i = 1; i < colors.length + 1; i++){
      circlesX.push(new Circle(createVector((padding + offset*i), padding), speed/i, colors[i-1]));
      circlesY.push(new Circle(createVector(padding, (padding + offset*i)), speed/i, colors[i-1]));
  }

  for(x = 0; x < circlesX.length; x++){
    curves[x] =  new Array(circlesX.length).fill(0);
    for(y = 0; y < circlesY.length; y++){
      let curveX = circlesX[x].orbit.x;
      let curveY = circlesY[y].orbit.y;
      let color = lerpColor(circlesX[x].color,circlesY[y].color, .5);
      curves[x][y] = new Curve(curveX, curveY, color);
    }
  }

}

function draw() {
  // ellipseMode(CORNER)
  background(33,37,43);
  for(i = 0; i < circlesX.length; i++){
    circlesX[i].show();
    circlesX[i].update();
    circlesY[i].show();
    circlesY[i].update();
  }
  for(x = 0; x < circlesX.length; x++){
    for(y = 0; y < circlesY.length; y++){
      let curveX = circlesX[x].orbit.x;
      let curveY = circlesY[y].orbit.y;
      curves[x][y].update(curveX, curveY);
      curves[x][y].show();

    }
  }

  // put drawing code here
}
