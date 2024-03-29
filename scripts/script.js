let tab = function () {
  const tabNav = document.querySelectorAll(".tab_item");
  const tabContent = document.querySelectorAll(".tabs_block");
  const parentTabContent = tabContent[0].parentNode;
  const activeClassName = "active";
  const removeTabClass = (elem) =>
    elem.forEach((item) => item.classList.remove(activeClassName));

  tabNav.forEach((item) => item.addEventListener("click", selectTabNav));

  function selectTabNav() {
    removeTabClass(tabNav);
    this.classList.add(activeClassName);
    selectTabContent(this.dataset.tabName);
  }

  const selectTabContent = (tabName) => {
    removeTabClass(tabContent);
    parentTabContent
      .querySelector(`[data-tab-content=${tabName}]`)
      .classList.add(activeClassName);
  };
};
tab();

const CLASS_NAME_MODAL_CONTAINER = "modal_container_close";
const btnShowModal = document.querySelector("#open-modal");
const modal = document.querySelector("#my-modal");
const closeBtn = modal.querySelector("#close-btn");
const modalClose = () => modal.classList.add(CLASS_NAME_MODAL_CONTAINER);

btnShowModal.addEventListener("click", () =>
  modal.classList.remove(CLASS_NAME_MODAL_CONTAINER)
);

closeBtn.addEventListener("click", modalClose);

window.addEventListener("keydown", (elem) => {
  const isEsc = elem.key === "Escape";
  return isEsc && modalClose();
});

modal.addEventListener("click", (elem) => {
  const isOverlay = elem.target.classList.contains("modal_container");
  return isOverlay && modalClose();
});

new Swiper(".image-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  spaceBetween: 0,
});

new Swiper('.image-slider', {
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,

  },
  spaceBetween: 0,
  simulateTouch: false,
});

let swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  width: 300,
});
const imageSlider = new Swiper(".mySwiper2", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  thumbs: {
    swiper: swiper,
  },
  spaceBetween: 100,
});
