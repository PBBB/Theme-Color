const app = Vue.createApp({})
app.component('color-option', {
props: {
isCurrent: Boolean,
color: String
},
methods: {
    changeColor(color) {
        setColor(color);
    }
},
template: `
        <div :style="{background: color}" @click.native="changeColor(color)"></div>
        `
})
app.mount('#color-group')

function setColor(color) {
    browser.tabs.getCurrent().then(currentTab => {
        browser.tabs.sendMessage(currentTab.id, {color: color})
    });
}

var color_picker = document.getElementById("color-picker");
var color_picker_wrapper = document.getElementById("color-picker-wrapper");
color_picker.onchange = function () {
    color_picker_wrapper.style.backgroundColor = color_picker.value;
    setColor(color_picker.value);
}
color_picker_wrapper.style.backgroundColor = color_picker.value;
