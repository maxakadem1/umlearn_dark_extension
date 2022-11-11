let media = document.querySelectorAll("img, picture, video");
document.querySelector("html").style.filter = "invert(0) hue-rotate(0)";

media.forEach((mediaItem)=>
{
    mediaItem.style.filter = "invert(0) hue-rotate(0)";
})