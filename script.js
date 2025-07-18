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

