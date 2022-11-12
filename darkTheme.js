if (document.querySelector(".popup")) {
    const button = document.querySelector(".button");
    const images = document.querySelector(".images");

    let buttonOn = false;
        
    button.addEventListener("click", () => {
        if (localStorage.getItem("buttonOn") === "false") {
            buttonOn = true;
            //change local storage to true
            localStorage.setItem("buttonOn", "true");

            chrome.tabs.query({ active: true }, function (tabs) {
                let tab = tabs[0];
                chrome.scripting.executeScript(
                    {
                        target: {tabId: tab.id},
                        files: ['appOn.js']
                    },
                );
            });

        //change 1.svg to 2.svg
        images.src = "1.svg";
        } else {
        buttonOn = false;
        //change local storage to false
        localStorage.setItem("buttonOn", "false");

        chrome.tabs.query({ active: true }, function (tabs) {
            let tab = tabs[0];
            chrome.scripting.executeScript(
                {
                    target: {tabId: tab.id},
                    files: ['appOff.js']
                },
            );
        });

        //change 1.svg to 2.svg
        images.src = "2.svg";
        }
    });
}
  