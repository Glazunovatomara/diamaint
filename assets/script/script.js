"use strict";

const burger = document.querySelector(".header__menu-burger");
const menu = document.querySelector(".header__menu-list");
const menu1 = document.querySelector(".menu");

burger.addEventListener("click", () => {
  menu1.classList.toggle("active");
  menu.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function() {
  let currentImageIndex = 0;

  function showSlide(index) {
      const images = document.querySelectorAll('.author-images img');
      const totalImages = images.length;

      if (index >= totalImages - 1) {
          currentImageIndex = totalImages - 1;
          document.querySelector('.next').disabled = true;
      } else if (index <= 0) {
          currentImageIndex = 0;
          document.querySelector('.prev').disabled = true;
      } else {
          currentImageIndex = index;
          document.querySelector('.next').disabled = false;
          document.querySelector('.prev').disabled = false;
      }

      document.querySelector('.author-images').style.transform = `translateX(-${currentImageIndex * 100}%)`;
  }

  function nextSlide() {
      showSlide(currentImageIndex + 1);
  }

  function prevSlide() {
      showSlide(currentImageIndex - 1);
  }

  // Назначаем обработчики событий для кнопок
  document.querySelector('.next').addEventListener('click', nextSlide);
  document.querySelector('.prev').addEventListener('click', prevSlide);

  // Показываем первое изображение при загрузке
  showSlide(currentImageIndex);
});

// swiper slider block 2 
const swiper = new Swiper('.swiper', {
    spaceBetween:20,
    slidesPerView: 1,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });