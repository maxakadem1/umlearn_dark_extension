(function()
{
    let media = document.querySelectorAll("img, picture, video");
    console.log("App on ran");

    document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";

    media.forEach((mediaItem)=>
    {
        mediaItem.style.filter = "invert(1) hue-rotate(180deg)";
    })

    if(document.querySelector("d2l-my-courses"))
    {
        //find all d2l enrollment cards udner multiple shadow roots
        let enrollmentCards = document.querySelector("d2l-my-courses")
        .shadowRoot.querySelector("d2l-my-courses-container")
        .shadowRoot.querySelector("d2l-my-courses-content")
        .shadowRoot.querySelector("d2l-my-courses-card-grid")
        .shadowRoot.querySelectorAll("d2l-enrollment-card");

        //go over all enrollmentCards
        enrollmentCards.forEach((enrollmentCard)=>
        {
            // get an image container under multiple nested shadow roots and change its style
            enrollmentCard.shadowRoot.querySelector(".d2l-enrollment-card-image-container").style.filter = "invert(1) hue-rotate(180deg)";
        })
    }
})();


