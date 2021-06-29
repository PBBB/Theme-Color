const app = Vue.createApp({})
app.component('color-option', {
    props: {
        isCurrent: Boolean,
        color: String
    },
    methods: {
        changeColor(color) {
            browser.tabs.getCurrent().then(currentTab => {
                browser.tabs.sendMessage(currentTab.id, {color: color})
            });
            browser.runtime.sendMessage({type: "Word count request"}).then(value => {
                console.log("success" + value); // Success!
              }, reason => {
                console.error("error" + reason); // Error!
              });
            console.log("send1")
        }
    },
    template: `
        <div :style="{background: color}" @click.native="changeColor(color)"></div>
        `
    })
app.mount('#color-demo')
