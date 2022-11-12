(function waitForCourseContainer() {
    const observer = new MutationObserver(function (mutations, mutationInstance) {
        const element = document.querySelectorAll("d2l-my-courses-container");
        if (element) {
            fixImagesD2l();
            mutationInstance.disconnect();
        }
    });
    
    observer.observe(document, {
        childList: true,
        subtree:   true
    });
}) ();


function fixImagesD2l()
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