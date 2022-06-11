import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!;

((app) => {
  const canvas = document.createElement("canvas");

  app.appendChild(canvas);

  canvas.width = 800;
  canvas.height = 600;


  let ctx = canvas.getContext("2d")!;

  ctx.lineWidth = 50;
  ctx.strokeStyle = "#AA394C";

  ctx.beginPath();
  ctx.moveTo(100, 100);
  ctx.lineTo(700, 100);
  ctx.lineCap = "butt";
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(100, 300);
  ctx.lineTo(700, 300);
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(100, 500);
  ctx.lineTo(700, 500);
  ctx.lineCap = "square";
  ctx.stroke();
  ctx.closePath();

  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(100, 0);
  ctx.lineTo(100, 600);
  ctx.moveTo(700, 0);
  ctx.lineTo(700, 600);
  ctx.closePath();
  ctx.stroke();
})(app);

//********************************************
// lineJoin

((app) => {
  const canvas = document.createElement("canvas");

  app.appendChild(canvas);

  canvas.width = 800;
  canvas.height = 600;


  let ctx = canvas.getContext("2d")!;

  ctx.beginPath();
  ctx.moveTo(100, 100);
  ctx.lineTo(300, 300);
  ctx.lineTo(100, 500);
  ctx.lineJoin = "miter";
  ctx.lineWidth = 20;
  ctx.strokeStyle = "red";
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(300, 100);
  ctx.lineTo(500, 300);
  ctx.lineTo(300, 500);
  ctx.lineJoin = "bevel";
  ctx.lineWidth = 20;
  ctx.strokeStyle = "blue";
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(500, 100);
  ctx.lineTo(700, 300);
  ctx.lineTo(500, 500);
  ctx.lineJoin = "round";
  ctx.lineWidth = 20;
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.closePath();
})(app);

((app: { appendChild: (arg0: HTMLCanvasElement) => void; }) => {
  const canvas = document.createElement("canvas");

  app.appendChild(canvas);

  canvas.width = 800;
  canvas.height = 600;


  let ctx = canvas.getContext("2d")!;

  ctx.beginPath();
  ctx.moveTo(100, 100);
  ctx.lineTo(300, 300);
  ctx.lineTo(100, 500);
  ctx.lineJoin = "miter";
  ctx.miterLimit = 10;
  ctx.lineWidth = 5;
  ctx.strokeStyle = "red";
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(300, 200);
  ctx.lineTo(500, 300);
  ctx.lineTo(300, 400);
  ctx.lineJoin = "miter";
  ctx.miterLimit = 10;
  ctx.lineWidth = 5;
  ctx.strokeStyle = "blue";
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(500, 290);
  ctx.lineTo(700, 300);
  ctx.lineTo(500, 310);
  ctx.lineJoin = "miter";
  ctx.miterLimit = 10;
  ctx.lineWidth = 5;
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.closePath();
})(app)