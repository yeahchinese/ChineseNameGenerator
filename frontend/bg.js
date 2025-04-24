const canvas = document.getElementById('inkCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height;
    this.radius = Math.random() * 10 + 5;
    this.speed = Math.random() * 2 + 1;
    this.opacity = 0.1 + Math.random() * 0.3;
  }

  update() {
    this.y -= this.speed;
    this.x += Math.sin(this.y / 20);
    if (this.y < 0) this.y = canvas.height;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = `rgba(0, 0, 0, ${this.opacity})`;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (particles.length < 100) {
    particles.push(new Particle());
  }

  for (let p of particles) {
    p.update();
    p.draw();
  }

  requestAnimationFrame(animate);
}

animate();
