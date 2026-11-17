document.addEventListener("DOMContentLoaded", function () {
  const revealOptions = {
    root: null,
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  const sections = document.querySelectorAll(".reveal-section");
  sections.forEach(section => {
    revealObserver.observe(section);
  });


  const navLinks = document.querySelectorAll(".nav-tabs a");

  const navObserverOptions = {
    root: null,
    rootMargin: "-25% 0px -60% 0px",
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute("id");

        
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${currentId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, navObserverOptions);

  
  document.querySelectorAll("section[id]").forEach(section => {
    navObserver.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const vid1 = document.getElementById("earth-vid-1");
  const vid2 = document.getElementById("earth-vid-2");

  if (vid1 && vid2) {
    let activeVid = vid1;
    let nextVid = vid2;
    const crossfadeDuration = 1.5; 

    activeVid.play();

    setInterval(() => {
      if (activeVid.duration && activeVid.currentTime >= activeVid.duration - crossfadeDuration) {
        nextVid.currentTime = 0;
        nextVid.play();
        nextVid.style.opacity = 1;
        activeVid.style.opacity = 0;

        
        const temp = activeVid;
        activeVid = nextVid;
        nextVid = temp;
      }
    }, 200);
  }
});