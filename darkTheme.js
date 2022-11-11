if (document.querySelector(".popup")) {
  const button = document.querySelector(".button");
  const images = document.querySelector(".images");

  let buttonOn = false;

  button.addEventListener("click", () => {
    if (!buttonOn) {
        
      buttonOn = true;
      chrome.storage.sync.set({ buttonOn: true });
      chrome.tabs.executeScript({
        file: "appOn.js",
      });
      //change 1.svg to 2.svg
      images.src = "1.svg";
    } else {
      buttonOn = false;
      chrome.storage.sync.set({ buttonOn: false });
      chrome.tabs.executeScript({
        file: "appOff.js",
      });
      //change 1.svg to 2.svg
      images.src = "2.svg";
    }
  });
}
