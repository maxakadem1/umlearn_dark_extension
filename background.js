chrome.webNavigation.onCommitted.addListener(function () {
  //if local storage is true, run appOn.js
  if (localStorage.getItem("buttonOn") === "true") {
    let media = document.querySelectorAll(
      "img, picture, video, div.d2l-enrollment-card-image-container, slot, div.d2l-card-header"
    );
    document.querySelector("html").style.filter =
      "invert(1) hue-rotate(180deg)";

    media.forEach((mediaItem) => {
      mediaItem.style.filter = "invert(1) hue-rotate(180deg)";
    });
  }
});

// class responsible for text color: .d2l-typography
// class responsible for navigation link text color: d2l-navigation-s-item
if (document.querySelector(".popup")) {
  const button = document.querySelector(".button");
  const images = document.querySelector(".images");

  let buttonOn = false;

  button.addEventListener("click", () => {
    if (localStorage.getItem("buttonOn") === "false") {
      buttonOn = true;
      //change local storage to true
      localStorage.setItem("buttonOn", "true");
      let media = document.querySelectorAll(
        "img, picture, video, div.d2l-enrollment-card-image-container, slot, div.d2l-card-header"
      );
      document.querySelector("html").style.filter =
        "invert(1) hue-rotate(180deg)";

      media.forEach((mediaItem) => {
        mediaItem.style.filter = "invert(1) hue-rotate(180deg)";
      });
      //change 1.svg to 2.svg
      images.src = "1.svg";
    } else {
      buttonOn = false;
      //change local storage to false
      localStorage.setItem("buttonOn", "false");
      let media = document.querySelectorAll(
        "img, picture, video, div.d2l-enrollment-card-image-container, slot, div.d2l-card-header"
      );
      document.querySelector("html").style.filter = "invert(0) hue-rotate(0)";

      media.forEach((mediaItem) => {
        mediaItem.style.filter = "invert(0) hue-rotate(0)";
      });
      //change 1.svg to 2.svg
      images.src = "2.svg";
    }
  });
}

// "persistent": true was removed from manifest.json
