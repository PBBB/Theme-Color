//browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
//    console.log("Received response: ", response);
//});

browser.runtime.onMessage.addListener((request) => {
    changeColor(request.color)
});

function changeColor(color) {
    document.querySelector("meta[name=theme-color]").setAttribute("content", color);
}
