// modern.js

document.addEventListener("DOMContentLoaded", function () {
    // Animate on scroll
    const revealElements = document.querySelectorAll(".reveal");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });
  
    revealElements.forEach((el) => observer.observe(el));
  
    // Smooth scroll for internal links
    const scrollLinks = document.querySelectorAll("a[href^='#']");
  
    scrollLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  });
  