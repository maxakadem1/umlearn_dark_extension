chrome.webNavigation.onCommitted.addListener(function () 
{
  
  // alert("Background ran");

  //if local storage is true, run appOn.js
  if (localStorage.getItem("buttonOn") === "true") 
  {
    chrome.tabs.executeScript({file: "appOn.js",});
    // alert("Background executed appOn.js");
  } 
});


chrome.webNavigation.onCompleted.addListener(function () 
{
  //if local storage is true, run appOn.js
  if (localStorage.getItem("buttonOn") === "true") 
  {
    chrome.tabs.executeScript({file: "fixImages.js",});
  } 
});

