// class responsible for text color: .d2l-typography
// class responsible for navigation link text color: d2l-navigation-s-item

let media = document.querySelectorAll("img, picture, video");


//if button on
document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";

media.forEach((mediaItem)=>
{
    mediaItem.style.filter = "invert(1) hue-rotate(180deg)";
})

//if button off

document.querySelector("html").style.filter = "invert(0) hue-rotate(0)";

media.forEach((mediaItem)=>
{
    mediaItem.style.filter = "invert(0) hue-rotate(0)";
})