// toggle class xctive
const navbarNav = document.querySelector(".navbar-nav");
// ketika humbeger menu diklik
document.querySelector("#hamberger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// klik diluar sidebar utuk menghilangkan NAV
const hamburger = document.querySelector("#hamberger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
