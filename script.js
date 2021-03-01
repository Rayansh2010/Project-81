var canvas = document.getElementById("Canvas");
var context = canvas.getContext("2d");

context.beginPath();
context.strokeStyle="black";
context.lineWidth=2;
context.rect(200, 143, 430, 200);
context.stroke();

context.beginPath();
context.strokeStyle="blue";
context.lineWidth=3.5;
context.arc(320,225,40,0,2*Math.PI);
context.stroke();

context.beginPath();
context.strokeStyle="yellow";
context.lineWidth=3.5;
context.arc(370,275,40,0,2*Math.PI);
context.stroke();

context.beginPath();
context.strokeStyle="black";
context.lineWidth=3.5;
context.arc(420,225,40,0,2*Math.PI);
context.stroke();

context.beginPath();
context.strokeStyle="green";
context.lineWidth=3.5;
context.arc(470,275,40,0,2*Math.PI);
context.stroke();

context.beginPath();
context.strokeStyle="red";
context.lineWidth=3.5;
context.arc(520,225,40,0,2*Math.PI);
context.stroke();