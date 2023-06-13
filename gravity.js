var canvas = document.getElementsByTagName('canvas')[0];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d');

/*context.beginPath();
context.fillStyle = 'rgb(244,200,32)';
context.fillRect(200,100,300,150);
context.beginPath();
context.moveTo(400,100);
context.lineTo(400,700);*/


context.beginPath();
context.fillStyle('blue');
context.arc(10,10,100,0,Math.PI * 2,false);
context.fill();
