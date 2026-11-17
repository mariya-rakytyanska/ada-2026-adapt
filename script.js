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

document.addEventListener("DOMContentLoaded", function () {
  const vid1 = document.getElementById("earth-vid-1");
  const vid2 = document.getElementById("earth-vid-2");

  if (vid1 && vid2) {
    let activeVid = vid1;
    let nextVid = vid2;
    const crossfadeDuration = 1.5; // seconds before end to start fading

    activeVid.play();

    setInterval(() => {
      if (activeVid.duration && activeVid.currentTime >= activeVid.duration - crossfadeDuration) {
        nextVid.currentTime = 0;
        nextVid.play();
        nextVid.style.opacity = 1;
        activeVid.style.opacity = 0;

        // Swap references
        const temp = activeVid;
        activeVid = nextVid;
        nextVid = temp;
      }
    }, 200);
  }
});