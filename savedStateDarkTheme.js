chrome.storage.local.get(["buttonOn"], function (result) {
  console.log("I got (memory): " + result.buttonOn);
  buttonOn = result.buttonOn;

  //edge case for if buttonOn is undefined
  chrome.storage.local.get(["buttonOn"], function (result) {
    console.log("I got (memory): " + result.buttonOn);
    buttonOn = result.buttonOn;
    if (buttonOn == undefined) {
      chrome.storage.local.set({ buttonOn: false }, function () {});
    }
  });

  //if local storage is true, run appOn.js
  if (buttonOn == true) {
    //IT BREAKS EVERYTHING WTF

    //images.src = "1.svg";

    let media = document.querySelectorAll("img, picture, video");

    document.querySelector("html").style.filter =
      "invert(1) hue-rotate(180deg)";

    media.forEach((mediaItem) => {
      mediaItem.style.filter = "invert(1) hue-rotate(180deg)";
    });
  }
});
