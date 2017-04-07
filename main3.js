var box = document.querySelector('#box');
//box.style.background = 'red';
var x, y;


function move(){
  x= Math.floor(Math.random()*400);
  y= Math.floor(Math.random()*400);
TweenMax.to(box, 2, {
   left: x + 'px',
   top: y + 'px',
   background: 'rgb(' + Math.floor(Math.random()*255) + ', 40, 186 )',
   ease: Back.easeNone,
   onComplete: grow

  });
}

function grow(){
  TweenMax.to(box, 3, {
     width: Math.floor(Math.random()*400)+'px',
     height: Math.floor(Math.random()*400)+'px',
     ease: Power2.easeIn,

  });
}

document.body.addEventListener('click', move);
