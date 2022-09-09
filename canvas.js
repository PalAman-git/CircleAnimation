const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const Array = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

const c = canvas.getContext("2d");

//drawing circle

// for (let i = 0; i < 2000; i++) {
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = RandomColor();
//   c.stroke();
// }

//random color function
function RandomColor() {
  let result = "#";
  for (let i = 0; i < 6; i++) {
    random = Math.floor(Math.random() * Array.length);
    result += Array[random];
  }
  return result;
}
//using the object oreinted javascript for creating multiple circles
function Circle(x, y, dy, dx, radius) {
  this.x = x;
  this.y = y;
  this.dy = dy;
  this.dx = dx;
  this.radius = radius;

  this.draw = () => {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = RandomColor();
    c.stroke();
  };
  this.update = () => {
    if (
      this.radius + this.x + this.dx >= canvas.width ||
      this.dx + this.x - this.radius < 0
    ) {
      this.dx = -this.dx;
    } else {
      this.x += this.dx;
    }
    if (
      this.radius + this.y + this.dy >= canvas.height ||
      this.dy + this.y - this.radius < 0
    ) {
      this.dy = -this.dy;
    } else {
      this.y += this.dy;
    }
    //drawing after updating
    this.draw();
  };
}

//creating 100 circles and storing them in the array
let CircleArray = [];

for (let i = 0; i < 100; i++) {
  let radius = 30;
  let x = Math.random() * (innerWidth - 2*radius)+radius;
  //giving random velocity
  dx = 8* (Math.random() * -0.5);
  dy = 8* (Math.random() * -0.5);
  y = Math.random() *( innerHeight - 2*radius)+radius;
  CircleArray.push(new Circle(x, y, dy, dx, radius));
}
console.log(CircleArray);

//for animation
function animate() {
  c.fillStyle = "white";
  c.clearRect(0, 0, canvas.width, canvas.height);
  for(let i=0;i<CircleArray.length;i++){
    CircleArray[i].update();
  }
  window.requestAnimationFrame(animate);
  console.log('man');
}
animate();
