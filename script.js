document.addEventListener("DOMContentLoaded", function () {

// =========================
// 🔥 LOADER SYSTEM (FAST 3 SEC FIX)
// =========================

const loader = document.createElement("div");
loader.id = "pageLoader";
loader.innerHTML = `
  <div class="spinner"></div>
  <h3>Loading School Website...</h3>
`;
document.body.appendChild(loader);

// loader CSS
const style = document.createElement("style");
style.innerHTML = `
  #pageLoader {
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:#0f172a;
    color:white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    z-index:9999;
  }

  .spinner {
    width:60px;
    height:60px;
    border:6px solid #334155;
    border-top:6px solid #38bdf8;
    border-radius:50%;
    animation:spin 1s linear infinite;
    margin-bottom:15px;
  }

  @keyframes spin {
    0% { transform:rotate(0deg); }
    100% { transform:rotate(360deg); }
  }
`;
document.head.appendChild(style);

// ✅ FIXED: 3 SECONDS ONLY (NO HEAVY LOAD WAIT)
setTimeout(() => {
  loader.style.opacity = "0";
  loader.style.transition = "0.5s";

  setTimeout(() => {
    loader.remove();
  }, 500);

}, 3000); // 👈 EXACT 3 SECONDS

  // =========================
  // 🌙 DARK MODE TOGGLE
  // =========================
  window.toggleDark = function () {
    document.body.classList.toggle("dark");
  };

  // =========================
  // 🎞️ HERO IMAGE SLIDER
  // =========================
  const hero = document.querySelector(".hero");

  if (hero) {
    const images = [
      "https://via.placeholder.com/1500x800",
      "https://via.placeholder.com/1500x801",
      "https://via.placeholder.com/1500x802"
    ];

    let i = 0;

    setInterval(() => {
      hero.style.backgroundImage =
        `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${images[i]}')`;
      hero.style.backgroundSize = "cover";
      hero.style.backgroundPosition = "center";
      i = (i + 1) % images.length;
    }, 4000);
  }

  // =========================
  // 📢 NOTICE AUTO SCROLL
  // =========================
  const noticeList = document.querySelector("#notice-list");

  if (noticeList) {
    setInterval(() => {
      noticeList.appendChild(noticeList.firstElementChild);
    }, 3000);
  }

  // =========================
  // ✨ SMOOTH SCROLL
  // =========================
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

});
