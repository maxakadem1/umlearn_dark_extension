(function () {
  let media = document.querySelectorAll(
    "img, picture, video, .d2l-enrollment-card-image-container"
  );
  //find all d2l enrollment cards udner multiple shadow roots
  // let enrollmentCards = document.querySelector("d2l-my-courses")
  // .shadowRoot.querySelector("d2l-my-courses-container")
  // .shadowRoot.querySelector("#panel-search-my-enrollments > d2l-my-courses-content")
  // .shadowRoot.querySelector("d2l-my-courses-card-grid")
  // .shadowRoot.querySelectorAll("d2l-enrollment-card");

  document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";

  media.forEach((mediaItem) => {
    mediaItem.style.filter = "invert(1) hue-rotate(180deg)";
  });

  //go over all enrollmentCards
  // enrollmentCards.forEach((enrollmentCard)=>
  // {
  //     // get an image container under multiple nested shadow roots and change its style
  //     enrollmentCard.shadowRoot.querySelector(".d2l-enrollment-card-image-container").style.filter = "invert(1) hue-rotate(180deg)";
  // })
})();
