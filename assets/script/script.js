"use strict";

const burger = document.querySelector(".header__menu-burger");
const menu = document.querySelector(".header__menu-list");
const menu1 = document.querySelector(".menu");

burger.addEventListener("click", () => {
  menu1.classList.toggle("active");
  menu.classList.toggle("active");
});
