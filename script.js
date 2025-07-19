gsap.registerPlugin(ScrollTrigger);


gsap.from(".hero-left h1", {
  duration: 1.6,
  y: -40,
  opacity: 0,
  ease: "power3.out"
});

gsap.from(".hero-left p", {
  duration: 1.4,
  y: -20,
  opacity: 0,
  delay: 0.5,
  ease: "power3.out"
});

gsap.from(".btn", {
  duration: 1,
  scale: 0,
  opacity: 0,
  delay: 1,
  ease: "back.out(1.7)"
});

gsap.from(".hero-right", {
  duration: 1.5,
  x: 100,
  opacity: 0,
  delay: 0.8,
  ease: "power3.out"
});

document.querySelectorAll(".section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
});

function randMinMax(min, max) {
  return Math.random() * (max - min) + min;
}

const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
let W, H;

function resizeCanvas() {
  W = canvas.width = canvas.offsetWidth;
  H = canvas.height = canvas.offsetHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

let objects = [];

for (let i = 0; i < 50; i++) {
  objects.push({
    x: randMinMax(0, W),
    y: randMinMax(0, H),
    width: randMinMax(8, 16),
    height: randMinMax(8, 16),
    vx: randMinMax(-0.3, 0.3),
    vy: randMinMax(-0.3, 0.3)
  });
}

function loop() {
  ctx.clearRect(0, 0, W, H);

  for (let obj of objects) {
    obj.x += obj.vx;
    obj.y += obj.vy;

    // Bounce on edges
    if (obj.x < 0 || obj.x + obj.width > W) obj.vx *= -1;
    if (obj.y < 0 || obj.y + obj.height > H) obj.vy *= -1;

    // Draw object
    ctx.fillStyle = 'rgba(0, 255, 200, 0.15)';
    ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
  }

  requestAnimationFrame(loop);
}

loop();
