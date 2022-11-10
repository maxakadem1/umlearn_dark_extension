/*
    triggers when the browser has starts loading a webpage.
*/

chrome.webNavigation.onCommitted.addListener(function (tab) 
{
    // Prevents script from running when other frames load
    if (tab.frameId == 0) 
    {
        chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => 
        {
            // Get the URL of the webpage
            let url = tabs[0].url;
            // Remove unnecessary protocol definitions and www subdomain from the URL
            let parsedUrl = url.replace("https://", "")
                .replace("http://", "")
                .replace("www.", "")

            // Remove path and queries e.g. https://universityofmanitoba.desire2learn.com/login or https://universityofmanitoba.desire2learn.com?query=value
            // We only want the base domain
            let domain = parsedUrl.slice(0, parsedUrl.indexOf('/') == -1 ? parsedUrl.length : parsedUrl.indexOf('/'))
                .slice(0, parsedUrl.indexOf('?') == -1 ? parsedUrl.length : parsedUrl.indexOf('?'));

            try 
            {
                if (domain.length < 1 || domain === null || domain === undefined) 
                {
                    return;
                }

                else if (domain == "universityofmanitoba.desire2learn.com") 
                {
                    runDarkTheme();
                    return;
                }
            } 

            catch (err) 
            {
                throw err;
            }

        });
    }
});

function runDarkTheme() 
{
    // Inject script from file into the webpage
    chrome.tabs.executeScript({
        file: 'darkTheme.js'
    });
    return true;
}