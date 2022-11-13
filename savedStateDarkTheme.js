// A script to get back the saved state of the chrome extension and apply it to the page

chrome.storage.local.get(["buttonOn"], function (result) {
  console.log("I got (memory): " + result.buttonOn);
  buttonOn = result.buttonOn;

  if (buttonOn == undefined) {
    chrome.storage.local.set({ buttonOn: false }, function () {});
  }

  //if local storage is true, appy the dark theme
  if (buttonOn == true) {
    let media = document.querySelectorAll("img, picture, video,  div.d2l-fileviewer, div.vui-mediaplayer");

    document.querySelector("html").style.filter =
      "invert(1) hue-rotate(180deg)";

    media.forEach((mediaItem) => {
      mediaItem.style.filter = "invert(1) hue-rotate(180deg)";
    });
  }
});
