document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menu-toggle"), nav = document.querySelector(".main-nav");
  if (btn && nav) {
    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
  }
  document.querySelectorAll(".year").forEach(el => el.textContent = new Date().getFullYear());
});
