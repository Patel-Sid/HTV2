var host = "https://ca.yahoo.com/";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: host + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]};
    },
    {
        urls: [
            "*://google.ca/*",
            "*://www.google.ca/*"
        ],
    },
    ["blocking"]
);
