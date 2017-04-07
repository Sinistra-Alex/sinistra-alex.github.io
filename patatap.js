var colors = [
  '#194e9d',
  '#33a1c9',
  '#371658',
  '#1a8760',
  '#a84848',
];

var couleur;

var params = {
  width: 0,
  x: 100,
}


function setup (){
  createCanvas(windowWidth, windowHeight);
  noStroke();
  couleur = random(colors);
}


function draw(){
  background('#a2b3b0');

  fill(couleur);
  rect(params.x, height/2-100, params.width, 200)
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed(){
  couleur = random(colors);
  TweenMax.fromTo(params, 0.1,{
    x:100,
    width:0,
  },
  {
    width: width-200,
    onComplete: reduce,

  });
}

function reduce(){
  TweenMax.to(params,0.1, {
    x: width-100,
    width:0,
  });
}
