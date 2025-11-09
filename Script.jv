// ===== Page Loader =====
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});

// ===== Smooth Fade-In Animation =====
document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll(".hero, .about, .services, footer");
  fadeEls.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "all 0.8s ease";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 400);
  });
});
