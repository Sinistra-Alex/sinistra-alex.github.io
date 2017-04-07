var data = [];
for(var i=0; i<50; i++){
  data.push(50+Math.random()*150);
}
for (var i=0; i<data.length; i++){
  console.log(data[i]);

  var p = document.createElement('p');
  p.innerText = data[i];
  p.style.color= 'white';

  var div = document.createElement('div');
  div.style.height = '20px';
  div.style.background = '#105463';
  div.style.marginBottom = '3px';
  div.style.width= data[i]+'px';

  div.appendChild(p);
  document.body.appendChild(div);

}
