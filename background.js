// async function getCurrentTab() 
// {
//     let queryOptions = { active: true, currentWindow: true };
//     let [tab] = await chrome.tabs.query(queryOptions);
//     return tab;
// }


// let tab = await getCurrentTab();

// chrome.scripting.executeScript({
//   target: {tabId: tab.id},
//   files: ['content-script.js']
// });


// "persistent": true was removed from manifest.json
chrome.webNavigation.onCommitted.addListener(function () {
    chrome.tabs.query({ active: true }, function (tabs) {
    let tab = tabs[0];
    chrome.scripting.executeScript(
        {
            target: {tabId: tab.id},
            files: ['savedStateDarkTheme.js']
        },
    );
    });
  });
