import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!;

const canvas = document.createElement("canvas");

app.appendChild(canvas);

canvas.width = 800;
canvas.height = 600;


let ctx = canvas.getContext("2d")!;

ctx.beginPath();
ctx.moveTo(150, 50);
ctx.lineTo(650, 50);
ctx.lineTo(650, 550);
ctx.lineTo(150, 550);
ctx.lineTo(150, 50);
ctx.closePath();

ctx.lineWidth = 5;
ctx.strokeStyle = "#AA394C";

ctx.stroke();

const canvas1 = document.createElement("canvas");

app.appendChild(canvas1);

canvas1.width = 800;
canvas1.height = 600;


let ctx1 = canvas1.getContext("2d")!;

ctx1.beginPath();
ctx1.moveTo(150, 50);
ctx1.lineTo(650, 50);
ctx1.lineTo(650, 550);
ctx1.lineTo(150, 550);
ctx1.lineTo(150, 50);
ctx1.closePath();

ctx1.lineWidth = 5;
ctx1.strokeStyle = "#AA394C";
ctx1.fillStyle = "yellow";

ctx1.fill();
ctx1.stroke();

function drawRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, fill: string, borderW: number, borderColor: string) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + w, y);
  ctx.lineTo(x + y, y + h);
  ctx.lineTo(x, y + h);
  ctx.lineTo(x, y);
  ctx.closePath();

  ctx.fillStyle = fill;
  ctx.strokeStyle = borderColor;
  ctx.lineWidth = borderW;
  ctx.fill();
  ctx.stroke();
}

const canvas2 = document.createElement("canvas");

app.appendChild(canvas2);

canvas2.width = 800;
canvas2.height = 600;


let ctx2 = canvas2.getContext("2d")!;

drawRect(ctx2, 150, 50, 50, 50, "red", 5, "blue");
drawRect(ctx2, 250, 50, 50, 50, "green", 5, "red");
drawRect(ctx2, 350, 50, 50, 50, "yellow", 5, "black");



const canvas3 = document.createElement("canvas");

app.appendChild(canvas3);

canvas3.width = 800;
canvas3.height = 600;

let ctx3 = canvas3.getContext("2d")!;

const drawRect1 = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number) => {
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.closePath();
  
  ctx.lineWidth = 5;
  ctx.strokeStyle = "black";
  ctx.fillStyle = "#fff";

  ctx.fill();
  ctx.stroke();
}

for (let i = 0; i < 20; i++) {
  drawRect1(ctx3, 200 + 10 * i, 100 + 10 * i, 400 - 20 * i, 400 - 20 * i);  
}