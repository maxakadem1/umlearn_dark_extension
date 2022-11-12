// class responsible for text color: .d2l-typography
// class responsible for navigation link text color: d2l-navigation-s-item
if (document.querySelector(".popup")) 
{
  const button = document.querySelector(".button");
  const images = document.querySelector(".images");

  //set image light bulb in the pop up to be dark if the user used dark mode previously
  if (localStorage.getItem("buttonOn") === "true")
  {
    images.src = "1.svg";
  }

  button.addEventListener("click", () => {
    // alert("DarkTheme ran");

    if (localStorage.getItem("buttonOn") === "false") 
    {
      //change local storage to true
      localStorage.setItem("buttonOn", "true");
      chrome.tabs.executeScript({file: "appOn.js"});
      //change 1.svg to 2.svg
      images.src = "1.svg";
    } 
    
    else 
    {
      buttonOn = false;
      //change local storage to false
      localStorage.setItem("buttonOn", "false");
      chrome.tabs.executeScript({file: "appOff.js"});
      //change 1.svg to 2.svg
      images.src = "2.svg";
    }
  });
}
