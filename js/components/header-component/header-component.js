import './nav-bar/nav-bar.js'
import './header-logo/header-logo.js'

const template = document.createElement('template')
const navBar = document.createElement('nav-bar')
const logo = document.createElement('header-logo')

template.innerHTML = `
<style>
    #headerContainer {
        margin-top: 10px;
        display: grid;
        grid-template-columns: 110px 200px auto;
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
        margin: 20px 0 10px 25px;
        width: 120px;
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

        this.myLogo = this.shadowRoot.querySelector('#logo')
    }

    connectedCallback () {
        this.shadowRoot.querySelector('#navBar').append(navBar.cloneNode(true))
        this.myLogo.append(logo.cloneNode(true))
        this.myLogo.lastElementChild.setAttribute('src', './images/web-components.svg')
        // logo.firstElementChild.firstElementChild.setAttribute('src', './images/web-components.svg')
    }
})