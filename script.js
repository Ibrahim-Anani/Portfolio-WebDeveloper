gsap.from(".hero-left h1", { y: -30, opacity: 0, duration: 1, ease: "power2.out" });
gsap.from(".hero-left p", { y: -20, opacity: 0, duration: 1, delay: 0.3, ease: "power2.out" });
gsap.from(".btn", { scale: 0.8, opacity: 0, duration: 0.6, delay: 0.6, ease: "back.out(1.7)" });



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


window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});


const heroRight = document.querySelector(".hero-right");

document.addEventListener("mousemove", (e) => {
  let x = (e.clientX / window.innerWidth - 0.5) * 30; 
  let y = (e.clientY / window.innerHeight - 0.5) * 30; 

  heroRight.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

document.addEventListener("mouseleave", () => {
  heroRight.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

gsap.to(".tech-cloud img", {
  y: 20,
  repeat: -1,
  yoyo: true,
  duration: 2,
  ease: "sine.inOut",
  stagger: {
    amount: 2,
    from: "random"
  }
});
