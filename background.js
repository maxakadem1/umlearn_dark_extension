// "persistent": true was removed from manifest.json
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

  async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }
  let tab = await getCurrentTab();

  button.addEventListener("click", () => {
    if (localStorage.getItem("buttonOn") === "false") {
      buttonOn = true;
      //change local storage to true
      localStorage.setItem("buttonOn", "true");

      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["appOn.js"],
      });

      //change 1.svg to 2.svg
      images.src = "1.svg";
    } else {
      buttonOn = false;
      //change local storage to false
      localStorage.setItem("buttonOn", "false");

      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["appOff.js"],
      });

      //change 1.svg to 2.svg
      images.src = "2.svg";
    }
  });
}
