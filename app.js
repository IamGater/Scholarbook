const acordeon = document.querySelector(".acordeon");

const acordeonTitles = document.querySelectorAll(".acordeon__wrapper");

console.log(acordeonTitles);
acordeonTitles.forEach.call(acordeonTitles, function (acordeonTitle) {
  acordeonTitle.addEventListener("click", function () {
    const currentText =
      acordeonTitle.parentElement.querySelector(".acordeon__text");

    acordeonTitle.classList.toggle("acordeon__title-active");

    currentText.classList.toggle("acordeon__text-visible");

    if (currentText.classList.contains("acordeon__text-visible")) {
      currentText.style.maxHeight = currentText.scrollHeight + "px";
    } else {
      currentText.style.maxHeight = null;
    }
  });
});

let modalButton = document.querySelector(".main__btn");
let closeModalButton = document.querySelector(".modal__close");
modalButton.addEventListener("click", openModal);

function openModal() {
  let modalOverlay = document.querySelector(".modal__overlay");
  let modalDialog = document.querySelector(".modal__dialog");
  modalOverlay.classList.toggle("modal__overlay--visible");
  modalDialog.classList.toggle("modal__dialog--visible");
}

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 16,

  navigation: {
    prevEl: ".navigation-prev",
    nextEl: ".navigation-next",
  },
});
