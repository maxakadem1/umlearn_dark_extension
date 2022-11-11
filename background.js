chrome.webNavigation.onCompleted.addListener(function () {
  //if local storage is true, run appOn.js
  if (localStorage.getItem("buttonOn") === "true") {
    chrome.tabs.executeScript({
      file: "appOn.js",
    });
  } else {
    chrome.tabs.executeScript({
      file: "appOff.js",
    });
  }
});
