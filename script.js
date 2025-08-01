gsap.from(".hero-left h1", { y: -30, opacity: 0, duration: 1, ease: "power2.out" });
gsap.from(".hero-left p", { y: -20, opacity: 0, duration: 1, delay: 0.3, ease: "power2.out" });
gsap.from(".btn", { scale: 0.8, opacity: 0, duration: 0.6, delay: 0.6, ease: "back.out(1.7)" });

const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
let W, H;

function resizeCanvas() {
  W = canvas.width = canvas.offsetWidth;
  H = canvas.height = canvas.offsetHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const boxes = Array.from({ length: 30 }, () => ({
  x: Math.random() * W,
  y: Math.random() * H,
  size: Math.random() * 8 + 6,
  vx: Math.random() * 0.5 - 0.25,
  vy: Math.random() * 0.5 - 0.25
}));

function draw() {
  ctx.clearRect(0, 0, W, H);
  boxes.forEach(b => {
    b.x += b.vx;
    b.y += b.vy;
    if (b.x < 0 || b.x > W) b.vx *= -1;
    if (b.y < 0 || b.y > H) b.vy *= -1;
    ctx.fillStyle = 'rgba(0,255,200,0.1)';
    ctx.fillRect(b.x, b.y, b.size, b.size);
  });
  requestAnimationFrame(draw);
}
draw();

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));