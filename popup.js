const button = document.querySelector("button");
const circle = document.querySelector(".circle");

let buttonOn = false;

button.addEventListener("click", () => {
  if (!buttonOn) {
    buttonOn = true;
    //some script here
  } else {
    buttonOn = false;
  }
});
