//browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
//    console.log("Received response: ", response);
//});

browser.runtime.onMessage.addListener((request) => {
    changeColor(request.color)
});

function changeColor(color) {
    //    document.querySelector("meta[name=theme-color]").setAttribute("content", color);
    var themeColorElement = document.querySelector("meta[name=theme-color]");
    if (themeColorElement) {
        themeColorElement.setAttribute("content", color);
    } else {
        var meta = document.createElement('meta');
        meta.name = "theme-color";
        meta.content = color;
        document.head.appendChild(meta)
    }
}
