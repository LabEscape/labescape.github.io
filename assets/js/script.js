// Fade-in on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
      if (!entry.isIntersecting) entry.target.classList.remove("visible");
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(".fade-in, section")
  .forEach((el) => observer.observe(el));
