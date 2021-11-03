const template = document.createElement('template')

template.innerHTML = `
<style>
    #headerContainer {
        margin-top: 10px;
        display: flex;
        background-color: burlywood;
        height: 120px;
        justify-content: center;
    }
</style>
<div id="headerContainer">
    <h1>TESTAR WEBBKOMPONENTER</h1>
</div>`

customElements.define('header-component', 
class extends HTMLElement {
    constructor () {
        super ()

        this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
    }
})