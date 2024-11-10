const burger = document.querySelector(".header__menu-burger");
const menu = document.querySelector(".header__menu-list");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
