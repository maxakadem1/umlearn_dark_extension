(function () {
  let media = document.querySelectorAll(
    "img, picture, video, div.d2l-enrollment-card-image-container, slot, div.d2l-card-header"
  );
  document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";

  media.forEach((mediaItem) => {
    mediaItem.style.filter = "invert(1) hue-rotate(180deg)";
  });
})();
