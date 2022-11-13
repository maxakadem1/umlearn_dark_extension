const button = document.querySelector(".button");
const images = document.querySelector(".images");

//get the prev state of the button, if it was true - > set the image on the button to the dark mode state
if (document.querySelector(".popup")) {
  chrome.storage.local.get(["buttonOn"], function (result) {
    console.log("I got: " + result.buttonOn);
    buttonOn = result.buttonOn;
    if (buttonOn == true) {
      images.src = "1.svg";
    }
  });

  button.addEventListener("click", () => {
    if (buttonOn == false) {
      buttonOn = true;
      //change local storage to true
      chrome.storage.local.set({ buttonOn: true }, function () {});
      console.log("I set: " + buttonOn);

      chrome.tabs.query({ active: true }, function (tabs) {
        let tab = tabs[0];
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["appOn.js"],
        });
      });

      images.src = "1.svg";
    } else if (buttonOn == true) {
      buttonOn = false;
      //change local storage to false
      chrome.storage.local.set({ buttonOn: false }, function () {});
      console.log("I set: " + buttonOn);

      chrome.tabs.query({ active: true }, function (tabs) {
        let tab = tabs[0];
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["appOff.js"],
        });
      });

      images.src = "2.svg";
    } else {
      console.log("very descriptive error");
    }
  });
}
