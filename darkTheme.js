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
      chrome.tabs.executeScript({
        file: "appOn.js",
      });
      //change 1.svg to 2.svg
      images.src = "1.svg";
    } else {
      buttonOn = false;
      //change local storage to false
      localStorage.setItem("buttonOn", "false");
      chrome.storage.sync.set({ buttonOn: false });
      chrome.tabs.executeScript({
        file: "appOff.js",
      });
      //change 1.svg to 2.svg
      images.src = "2.svg";
    }
  });
}
