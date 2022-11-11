(function () {
  let media = document.querySelectorAll(
    "img, picture, video, div.d2l-enrollment-card-image-container, slot, div.d2l-card-header"
  );
  document.querySelector("html").style.filter = "invert(0) hue-rotate(0)";

  media.forEach((mediaItem) => {
    mediaItem.style.filter = "invert(0) hue-rotate(0)";
  });
})();
