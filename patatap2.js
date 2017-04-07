
var colors = [
  '#a6d13e',
  '#127a55',
  '#248a87',
  '#e2ec2d',
  '#5d1a98',
  '#0a6e93',
];
var couleur;

var params = {
  x: 400,
  y: 250,
}

var params2 = {
  p:0,
  o:100,
  angle:0,
}
// var bruit1;

function preload() {
  mySound = loadSound('397.mp3');
  mySound2 = loadSound('564.mp3');
  mySound3 = loadSound('342.mp3');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  noStroke();
  couleur = random(colors);
  params.x = width/2+200;

}

function draw(){

  background('#afabb3');
  fill(couleur);
  triangle(width/2-200, 200, width/2+200, 250, params.x, params.y);

  rectMode(CENTER);
  fill(0);
  rect( width/2-200, 200, 5,5);
  rect( width/2+200, 250, 5,5);
  rect( params.x, params.y, 5,5);

push();
translate(params2.o, height/2-100);
  rotate(params2.angle);
  rectMode(CORNER);
  fill(couleur);
  rect(-params2.p/2, -100, params2.p, 200);

pop();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

// function mousePressed(){

function keyTyped(){
  noStroke();
  if (key === 'a') {
  couleur = random(colors);
  TweenMax.fromTo(params, 0.5,{
    x:width/2+200,
    y:250,
  },
  {
    x: 0,
    y: 700,
    onComplete: reduce,
  });

}

else if (key === 'b') {
  couleur = random(colors);
  TweenMax.fromTo(params, 0.9,{
    x:width/2+200,
    y:250,
  },
  {
    x: 100,
    y: 250,
    onComplete: reduce,

  });

}

else if (key === 'c') {
  couleur = random(colors);
  TweenMax.fromTo(params, 0.6,{
    x:width/2+200,
    y:250,
  },
  {
    x: -200,
    y: 50,
    onComplete: reduce,

  });

}

else if (key === 'd') {
  couleur = random(colors);
  TweenMax.fromTo(params, 0.3,{
    x:width/2+200,
    y:250,
  },
  {
    x: random(width/2-200, width/2+200),
    y: random(width/2-400, height/2+400),
    onComplete: reduce,

  });

}

else if (key === 'e') {
  mySound.play();
  couleur = random(colors);
  TweenMax.fromTo(params2, 1,{
    o:100,
    p:0,
    angle:0
  },
  {
    p: width-200,
    angle:2*PI,
    onComplete: reducerect,

  });

}

else if (key === 'f') {
  mySound2.play();
  couleur = random(colors);
  TweenMax.fromTo(params2, 0.2,{
    o:250,
    p:0,
  },
  {
    p: width-500,
    o:250,
    onComplete: reducerect,

  });

}

else if (key === 'g') {
  mySound3.play();
  couleur = random(colors);
  TweenMax.fromTo(params2, 0.2,{
    o:0,
    p:1,
  },
  {
    p: 100,
    o:width,
    onComplete: reducerect,

  });

}




function reduce(){
  noStroke();
  TweenMax.to(params,0.1, {
    x: width/2+200,
    y:250,
  });
}

function reducerect(){
  TweenMax.to(params2,0.1, {
    o: width-100,
    p:0,
  });
}


}
