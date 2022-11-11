/*
    triggers when the browser finished loading a webpage.
*/

chrome.webNavigation.onCompleted.addListener(function () 
{
    if(chrome.storage.sync.get({buttonOn}))
    {
        chrome.tabs.executeScript({
            file: "appOn.js",
            });
    }
});
