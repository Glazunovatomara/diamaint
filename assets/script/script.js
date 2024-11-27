"use strict";

const burger = document.querySelector(".header__menu-burger");
const menu = document.querySelector(".header__menu-list");
const menu1 = document.querySelector(".menu");

burger.addEventListener("click", () => {
  menu1.classList.toggle("active");
  menu.classList.toggle("active");
});

// переход к блоку из меню хэдера
// при клике на меню переходим в соотв раздел
const links = document.querySelectorAll(".header__menu-item > a");
for (let i = 0; i < links.length; i++) {
  // обработчик клика
  links[i].onclick = function () {
    document
      .getElementById(links[i].getAttribute("data-link"))
      .scrollIntoView({ behavior: "smooth" });
  };
}

// кнопка "Выбрать продукт" переход к продуктам
document.querySelector(".main__content-btn").onclick = function () {
  // скролл к меню с продуктами
  document
    .getElementById("section-product")
    .scrollIntoView({ behavior: "smooth" });
};

document.addEventListener("DOMContentLoaded", function () {
  let currentImageIndex = 0;

  function showSlide(index) {
    const images = document.querySelectorAll(".author-images img");
    const totalImages = images.length;

    if (index >= totalImages - 1) {
      currentImageIndex = totalImages - 1;
      document.querySelector(".next").disabled = true;
    } else if (index <= 0) {
      currentImageIndex = 0;
      document.querySelector(".prev").disabled = true;
    } else {
      currentImageIndex = index;
      document.querySelector(".next").disabled = false;
      document.querySelector(".prev").disabled = false;
    }

    document.querySelector(".author-images").style.transform = `translateX(-${
      currentImageIndex * 100
    }%)`;
  }

  function nextSlide() {
    showSlide(currentImageIndex + 1);
  }

  function prevSlide() {
    showSlide(currentImageIndex - 1);
  }

  // Назначаем обработчики событий для кнопок
  document.querySelector(".next").addEventListener("click", nextSlide);
  document.querySelector(".prev").addEventListener("click", prevSlide);

  // Показываем первое изображение при загрузке
  showSlide(currentImageIndex);
});

// swiper slider block 2
const swiper = new Swiper(".swiper", {
  spaceBetween: 20,
  slidesPerView: 1,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//BLOCK4
const modal = document.getElementById("publicationMyModal");
const hoverTextBlock = document.getElementById("hoverTextBlock");
const modalBodyContent = modal.querySelector(".publication__modal-body");
const span = modal.getElementsByClassName("publication__close")[0];

let myModalOpen = false;

// Открываем модальное окно
hoverTextBlock.addEventListener("mouseover", () => {
  if (!myModalOpen) {
    modal.style.display = "block";
    modalBodyContent.innerHTML = hoverTextBlock.innerHTML;

    myModalOpen = true;
  }
});

// Закрываем модальное окно
span.addEventListener("click", () => {
  modal.style.display = "none";
});

// Закрываем модальное окно
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

//BLOCK_5
const cardContainers = [
  document.querySelector(".articles__container .articles__container-card-1 "),
  document.querySelector(".articles__container .articles__container-card-2"),
  document.querySelector(".articles__container .articles__container-card-3"),
  document.querySelector(".articles__container .articles__container-card-4"),
];

const articles = [
  {
    subtitle: "Совет",
    title: "Как выбрать крем",
    description:
      "7 критериев правильного выбора. Под воздействием окружающей среды кожа теряет питательные вещества...",
    link: "https://kora.ru/articles/kak-vybrat-krem-dlya-litsa/",
  },
  {
    subtitle: "Совет",
    title: "Что добавить к зимнему уходу",
    description:
      "Зимой кожа лица особенно остро нуждается в уходе. Холод и ветер, сухость воздуха отапливаемых помещений...",
    link: "https://lecreme.ru/selections/ukhod-za-kozhey-litsa-zimoy-pravila/",
  },
  {
    subtitle: "Совет",
    title: "Как узнать свой тип кожи",
    description:
      "У одних кожа от природы жирная, у других сухая и тонкая, считается, что в современных условиях...",
    link: "https://christinacosmetics.ru/guide-to-christina/product-reviews/kak-samostoyatelno-opredelit-svoy-tip-kozhi/",
  },
  {
    subtitle: "Совет",
    title: "Как правильно наносить крем",
    description:
      "Любой тип кожи нельзя сильно натирать при очищении или тонизировании, все движения...",
    link: "https://hb-shop.by/blog/kak-pravilno-nanosit-krem-na-lico-i-vokrug-glaz.html",
  },
];

articles.forEach((article, index) => {
  const cardContainer = cardContainers[index];

  //Создаем подзаголовок
  const subtitle = document.createElement("h3");
  subtitle.classList.add("articles__card-h3");
  subtitle.textContent = article.subtitle;

  // Создаем заголовок
  const title = document.createElement("h2");
  title.classList.add("articles__card-h2");
  title.textContent = article.title;

  // Создаем описание
  const description = document.createElement("p");
  description.classList.add("articles__card-p");
  description.textContent = article.description;

  //Создаем новый контейнер
  const newCardContainer = document.createElement("div");
  newCardContainer.classList.add("articles__card-container");

  const spanLink = document.createElement("span");
  spanLink.classList.add("articles__card-span");
  newCardContainer.appendChild(spanLink);

  const newCardP = document.createElement("p");
  newCardP.classList.add("articles__card-link");
  newCardContainer.appendChild(newCardP);

  // Создаем ссылку
  const link = document.createElement("a");
  link.textContent = "Читать";
  link.href = article.link;
  link.target = "_blank";
  newCardP.appendChild(link);

  //Добавляем элементы в карточку
  cardContainer.appendChild(subtitle);
  cardContainer.appendChild(title);
  cardContainer.appendChild(description);
  cardContainer.appendChild(newCardContainer);
  newCardContainer.appendChild(newCardP);
});
