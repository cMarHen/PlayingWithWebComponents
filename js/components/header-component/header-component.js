import './nav-bar/nav-bar.js'

const template = document.createElement('template')
const navBar = document.createElement('nav-bar')

template.innerHTML = `
<style>
    #headerContainer {
        margin-top: 10px;
        display: grid;
        grid-template-columns: 70px 200px auto;
        grid-template-rows: 70px 50px;
        grid-template-areas:
        "logo top top"
        "logo nav nav";
        background-color: burlywood;
        height: 120px;
        justify-content: space-between;
    }

    #heading {
        grid-area: top;
        text-align: center;
    }
    #logo {
        grid-area: logo;
        display: flex;
        justify-content: center;
    }
    #navBar {
        grid-area: nav;
        justify-self: flex-end;
    }
</style>
<div id="headerContainer">
    <div id="heading">
        <h1>TESTAR WEBBKOMPONENTER</h1>
    </div>
    <div id="logo">
        <h4>LOGO</h4>
    </div>
    <div id="navBar">
    </div>
</div>`

customElements.define('header-component', 
class extends HTMLElement {
    constructor () {
        super ()

        this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
    }

    connectedCallback () {
        this.shadowRoot.querySelector('#navBar').append(navBar.cloneNode(true))
    }
})