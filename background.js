// "persistent": true was removed from manifest.json
chrome.webNavigation.onCommitted.addListener(function () {
  chrome.tabs.query({ active: true }, function (tabs) {
    let tab = tabs[0];
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["savedStateDarkTheme.js"],
    });
  });
});

chrome.webNavigation.onCompleted.addListener(function () {
  chrome.tabs.query({ active: true }, function (tabs) {
    let tab = tabs[0];
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["fixImages.js"],
    });
  });
});

