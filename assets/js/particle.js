const areas = document.querySelectorAll(".particle-area");

areas.forEach((area) => {
  area.style.position = "relative";

  const numParticles = parseInt(area.getAttribute("data-particles")) || 30;

  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = 80 + Math.random() * 20 + "%";

    const duration = 4 + Math.random() * 4;
    const delay = Math.random() * 5;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;

    area.appendChild(particle);
  }
});

 