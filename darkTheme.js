if (document.querySelector(".popup")) {
  const button = document.querySelector(".button");
  const images = document.querySelector(".images");

  let buttonOn = false;

  button.addEventListener("click", () => {
    if (buttonOn === false) {
      buttonOn = true;
      //change local storage to true
      chrome.storage.local.set({ buttonOn: true }, function () {
        console.log("Value is set to " + buttonOn);
      });
      // localStorage.setItem("buttonOn", "true");

      chrome.tabs.query({ active: true }, function (tabs) {
        let tab = tabs[0];
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["appOn.js"],
        });
      });

      //change 1.svg to 2.svg
      images.src = "1.svg";
    } else {
      buttonOn = false;
      //change local storage to false
      chrome.storage.local.set({ buttonOn: false }, function () {
        console.log("Value is set to " + buttonOn);
      });
      //localStorage.setItem("buttonOn", "false");

      chrome.tabs.query({ active: true }, function (tabs) {
        let tab = tabs[0];
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["appOff.js"],
        });
      });

      //change 1.svg to 2.svg
      images.src = "2.svg";
    }
  });
}
