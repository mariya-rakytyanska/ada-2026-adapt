document.addEventListener("DOMContentLoaded", function () {
  const options = {
    root: null, 
    threshold: 0.15 
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); 
      }
    });
  }, options);

  
  const sections = document.querySelectorAll(".reveal-section");
  sections.forEach(section => {
    observer.observe(section);
  });
});