(function () {
  let media = document.querySelectorAll("img, picture, video");

  console.log("app off ran");

  document.querySelector("html").style.filter = "invert(0) hue-rotate(0)";

  media.forEach((mediaItem) => {
    mediaItem.style.filter = "invert(0) hue-rotate(0)";
  });

  if(document.querySelector("d2l-my-courses") && document.querySelector("d2l-my-courses").shadowRoot.querySelector("d2l-my-courses-container"))
    {
      //find all d2l enrollment cards udner multiple shadow roots
      let enrollmentCards = document.querySelector("d2l-my-courses")
      .shadowRoot.querySelector("d2l-my-courses-container")
      .shadowRoot.querySelector("d2l-my-courses-content")
      .shadowRoot.querySelector("d2l-my-courses-card-grid")
      .shadowRoot.querySelectorAll("d2l-enrollment-card");

      // go over all enrollmentCards
      enrollmentCards.forEach((enrollmentCard)=>
      {
          // get an image container under multiple nested shadow roots and change its style
          enrollmentCard.shadowRoot.querySelector(".d2l-enrollment-card-image-container").style.filter = "invert(0) hue-rotate(0)";
      })
    }
})();