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
