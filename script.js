// ======================
// COMPONENTS
// ======================

const Hero = () => `
  <div class="box">
    <h1>SEO Architect</h1>
    <p>4+ Tahun Meningkatkan Traffic & Revenue Website</p>
    <a href="portfolio.html">
    <button>Lihat Portfolio</button>
  </div>
`;

const Projects = () => `
  <h2>Projects</h2>
  <div class="grid">

    <div class="box">
  <h3>Zona Ekonomi</h3>
  <p>Website analisis ekonomi dengan semantic SEO & topical authority.</p>

  <a href="https://zonaekonomi.com" target="_blank">
    <button> Visit Website</button>
  </a>
</div>

    <div class="box">
      <h3>Client SEO</h3>
      <p>Optimasi website UMKM hingga naik signifikan di Google.</p>
    </div>

  </div>
`;

const Testimonials = () => `
  <h2>Client Success Stories</h2>
  <div class="grid">

    <div class="box">
      <p>"Traffic naik 300% dalam 6 bulan"</p>
      <strong>- UMKM</strong>
    </div>

    <div class="box">
      <p>"Keyword ranking page 1 Google"</p>
      <strong>- Startup</strong>
    </div>

  </div>
`;


// ======================
// FUNCTIONALITY
// ======================

function toggleDark() {
  document.body.classList.toggle("dark");
}


// ======================
// RENDER
// ======================

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("hero").innerHTML = Hero();
  document.getElementById("projects").innerHTML = Projects();
  document.getElementById("testimonials").innerHTML = Testimonials();

  animate();
});


// ======================
// ANIMATION (SMOOTH)
// ======================

function animate() {
  const elements = document.querySelectorAll(".box");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transform = "translateY(0)";
        entry.target.style.opacity = 1;
      }
    });
  });

  elements.forEach(el => {
    el.style.transform = "translateY(40px)";
    el.style.opacity = 0;
    el.style.transition = "all 0.5s ease";
    observer.observe(el);
  });
}

// ======================
// SIMPLE CHART ANIMATION
// ======================

function drawChart() {
  const canvas = document.getElementById("growthChart");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  canvas.width = canvas.offsetWidth;
  canvas.height = 300;

  const data = [10, 30, 50, 80, 120, 180]; // growth data
  let progress = 0;

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#ff3c00";

    data.forEach((value, index) => {
      const x = (index / (data.length - 1)) * canvas.width;
      const y = canvas.height - (value * progress);

      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });

    ctx.stroke();

    if (progress < 1) {
      progress += 0.02;
      requestAnimationFrame(animate);
    }
  }

  animate();
}

// trigger saat load
document.addEventListener("DOMContentLoaded", drawChart);

ctx.fillText(value, x + barWidth / 2, y - 5);