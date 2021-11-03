
const template = document.createElement('template')
template.innerHTML = `
<style>
    #navContainer {
        display: flex;
        flex-direction: row;
        margin-right: 20px;
    }
    a {
        padding: 5px 5px;
        margin: 0 6px;
        color: black;
        border-left: 2px solid black;
    }
</style>
<div id="navContainer">
    <a href="#">Sida 1</a>
    <a href="#">Sida 2</a>
    <a href="#">Sida 2</a>
    <a href="#">Sida 2</a>
    <a href="#">Sida 2</a>
    <a href="#">Sida 2</a>
    <a href="#">Sida 2</a>
    <a href="#">Sida 2</a>
</div>`


customElements.define('nav-bar', 
class extends HTMLElement {
    
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
    }
})
