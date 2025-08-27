gsap.from(".hero-left h1", { y: -30, opacity: 0, duration: 1, ease: "power2.out" });
gsap.from(".hero-left p", { y: -20, opacity: 0, duration: 1, delay: 0.3, ease: "power2.out" });
gsap.from(".btn", { scale: 0.8, opacity: 0, duration: 0.6, delay: 0.6, ease: "back.out(1.7)" });

// const canvas = document.getElementById("bgCanvas");
// const ctx = canvas.getContext("2d");
// let W, H;

// function resizeCanvas() {
//   W = canvas.width = canvas.offsetWidth;
//   H = canvas.height = canvas.offsetHeight;
// }
// window.addEventListener("resize", resizeCanvas);
// resizeCanvas();

// const boxes = Array.from({ length: 30 }, () => ({
//   x: Math.random() * W,
//   y: Math.random() * H,
//   size: Math.random() * 8 + 6,
//   vx: Math.random() * 0.5 - 0.25,
//   vy: Math.random() * 0.5 - 0.25
// }));

// function draw() {
//   ctx.clearRect(0, 0, W, H);
//   boxes.forEach(b => {
//     b.x += b.vx;
//     b.y += b.vy;
//     if (b.x < 0 || b.x > W) b.vx *= -1;
//     if (b.y < 0 || b.y > H) b.vy *= -1;
//     ctx.fillStyle = 'rgba(0,255,200,0.1)';
//     ctx.fillRect(b.x, b.y, b.size, b.size);
//   });
//   requestAnimationFrame(draw);
// }
// draw();

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


window.addEventListener("scroll", () => {
  const scrollProgress = document.getElementById("scrollProgress");
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = `${progress}%`;
});

// Back to Top Button
const topBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

document.getElementById("scrollTopBtn").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const heroRight = document.querySelector(".hero-right");

document.addEventListener("mousemove", (e) => {
  let x = (e.clientX / window.innerWidth - 0.5) * 30; // rotate left/right
  let y = (e.clientY / window.innerHeight - 0.5) * 30; // rotate up/down

  heroRight.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

document.addEventListener("mouseleave", () => {
  heroRight.style.transform = `rotateY(0deg) rotateX(0deg)`;
});