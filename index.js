// swiper
const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  loop: true,
  spaceBetween: 32,
});

// tabs
document.querySelectorAll(".tabs-nav__btn").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll(".tabs-nav__btn").forEach(function (btn) {
      btn.classList.remove("tabs-nav__btn--active");
    });
    e.currentTarget.classList.add("tabs-nav__btn--active");

    document.querySelectorAll(".tabs-item").forEach(function (tabsBtn) {
      tabsBtn.classList.remove("tabs-item--active");
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("tabs-item--active");
  });
});

// accordion
new Accordion(".accordion-container", {
  duration: 400,
});

// burger
let burger = document.querySelector(".burger");
let menu = document.querySelector(".burger-nav");
let menuLinks = menu.querySelectorAll(".burger-nav__link");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  menu.classList.toggle("burger-nav--active");
  document.body.classList.toggle("stop-scroll");
});

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");
    menu.classList.remove("burger-nav--active");
    document.body.classList.remove("stop-scroll");
  });
});

// search
let search = document.querySelector(".search");
let searchForm = document.querySelector(".header-form");
let close = document.querySelector(".close");

search.addEventListener("click", function () {
  searchForm.classList.toggle("header-form--active");
  search.classList.toggle("search--active");
});

close.addEventListener("click", function () {
  searchForm.classList.remove("header-form--active");
  search.classList.remove("search--active");
});
