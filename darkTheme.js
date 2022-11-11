// class responsible for text color: .d2l-typography
// class responsible for navigation link text color: d2l-navigation-s-item
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
    });
}



