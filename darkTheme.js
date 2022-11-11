// class responsible for text color: .d2l-typography
// class responsible for navigation link text color: d2l-navigation-s-item
if(document.querySelector(".popup"))
{
    let media = document.querySelectorAll("img, picture, video");
    const button = document.querySelector("button");
    const circle = document.querySelector(".circle");

    let buttonOn = false;

    button.addEventListener("click", () => 
    {
    if (!buttonOn) {
        buttonOn = true;
        document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";

        media.forEach((mediaItem)=>
        {
            mediaItem.style.filter = "invert(1) hue-rotate(180deg)";
        })
    } 
    else 
    {
        buttonOn = false;
        document.querySelector("html").style.filter = "invert(0) hue-rotate(0)";

        media.forEach((mediaItem)=>
        {
            mediaItem.style.filter = "invert(0) hue-rotate(0)";
        })
    }
    });
}



