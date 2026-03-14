const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 120; i++) {
stars.push({
x: Math.random() * canvas.width,
y: Math.random() * canvas.height,
size: Math.random() * 2
});
}

function drawStars() {
ctx.fillStyle = "white";

stars.forEach(s => {
ctx.fillRect(s.x, s.y, s.size, s.size);
});
}

function heart(t) {
return {
x: 16 * Math.pow(Math.sin(t), 3),
y: 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)
};
}

let particles = [];

for (let i = 0; i < 800; i++) {

let t = Math.random() * Math.PI * 2;
let h = heart(t);

particles.push({

x: canvas.width / 2,
y: canvas.height / 2,

targetX: canvas.width / 2 + h.x * 15,
targetY: canvas.height / 2 - h.y * 15

});

}

function animate() {

ctx.fillStyle = "rgba(0,0,0,0.3)";
ctx.fillRect(0, 0, canvas.width, canvas.height);

drawStars();

particles.forEach(p => {

p.x += (p.targetX - p.x) * 0.03;
p.y += (p.targetY - p.y) * 0.03;

ctx.fillStyle = "#ff4d6d";
ctx.fillRect(p.x, p.y, 2, 2);

});

requestAnimationFrame(animate);
}

animate();
