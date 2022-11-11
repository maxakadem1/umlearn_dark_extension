// class responsible for text color: .d2l-typography
// class responsible for navigation link text color: d2l-navigation-s-item
<<<<<<< Updated upstream
if(document.querySelector(".popup"))
{
    
    const button = document.querySelector("button");

    let buttonOn = false;

    button.addEventListener("click", () => 
    {
    if (!buttonOn) {
        buttonOn = true;
        chrome.tabs.executeScript(
            {
                file: "appOn.js"
            })
        
    } 
    else 
    {
        buttonOn = false;
        chrome.tabs.executeScript(
        {
            file: "appOff.js"
        })
    }
=======

let media = document.querySelectorAll("img, picture, video");
const button = document.querySelector("button");

let buttonOn = false;

button.addEventListener("click", () => {
  if (!buttonOn) {
    buttonOn = true;
    document.querySelector("html").style.filter =
      "invert(1) hue-rotate(180deg)";

    media.forEach((mediaItem) => {
      mediaItem.style.filter = "invert(1) hue-rotate(180deg)";
>>>>>>> Stashed changes
    });

    // change 1.svg to 2.svg in popup.html
    document.querySelector("img").src = "2.svg";
  } else {
    buttonOn = false;
    document.querySelector("html").style.filter = "invert(0) hue-rotate(0)";

    media.forEach((mediaItem) => {
      mediaItem.style.filter = "invert(0) hue-rotate(0)";
    });
    // change 2.svg to 1.svg in popup.html
    document.querySelector("img").src = "1.svg";
  }
});

//if button on

//if button off
