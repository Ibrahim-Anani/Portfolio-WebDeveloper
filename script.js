gsap.registerPlugin(ScrollTrigger);

// Animate Hero Section Text
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

// Animate Hero Visual Block
gsap.from(".hero-right", {
  duration: 1.5,
  x: 100,
  opacity: 0,
  delay: 0.8,
  ease: "power3.out"
});

// Animate sections on scroll
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

  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const offset = 80; // Adjust this value to match your header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    });
  });
