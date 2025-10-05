const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    console.log("Menu clicked");
  const isExpanded = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", !isExpanded);
  if (!isExpanded) {
    navLinks.style.display = "block";
  } else {
    navLinks.style.display = "none";
  }
});
