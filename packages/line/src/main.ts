import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!;

const canvas = document.createElement("canvas");

app.appendChild(canvas);

canvas.width = 800;
canvas.height = 600;


let ctx = canvas.getContext("2d")!;

ctx.moveTo(50, 50);
ctx.lineTo(550, 550);

ctx.lineWidth = 5;
ctx.strokeStyle = "#AA394C";

ctx.stroke();


const canvas1 = document.createElement("canvas");

app.appendChild(canvas1);

canvas1.width = 800;
canvas1.height = 600;

let ctx1 = canvas1.getContext("2d")!;

ctx1.beginPath();
ctx1.moveTo(100, 100);
ctx1.lineTo(300, 300);
ctx1.lineTo(100, 500);

ctx1.lineWidth = 5;
ctx1.strokeStyle = "red";
ctx1.stroke();

ctx1.beginPath();
ctx1.moveTo(300, 100);
ctx1.lineTo(500, 300);
ctx1.lineTo(300, 500);

ctx1.lineWidth = 5;
ctx1.strokeStyle = "blue";
ctx1.stroke();

ctx1.beginPath();
ctx1.moveTo(500, 100);
ctx1.lineTo(700, 300);
ctx1.lineTo(500, 500);

ctx1.lineWidth = 5;
ctx1.strokeStyle = "black";
ctx1.stroke();
// https://airingursb.gitbooks.io/canvas/content/03.html