chrome.storage.local.get(["buttonOn"], function (result) {
  console.log("I got (memory): " + result.buttonOn);
  buttonOn = result.buttonOn;
});

//if local storage is true, run appOn.js
if (buttonOn == true) {
  let media = document.querySelectorAll(
    "img, picture, video"
  );

  document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";

  media.forEach((mediaItem) => {
    mediaItem.style.filter = "invert(1) hue-rotate(180deg)";
  });
}
