    chrome.webNavigation.onCommitted.addListener(function () {
  //if local storage is true, run appOn.js
  if (localStorage.getItem("buttonOn") === "true") {
    chrome.tabs.executeScript({
      file: "appOn.js",
    });
  } 
});
