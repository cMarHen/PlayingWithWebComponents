import '../box-component/box-component.js'
const template = document.createElement('template')
const box = document.createElement('box-component')

// Styling for content placed inside this shadow root.
template.innerHTML = `
<style>
    div {
        display: flex;
        flex-wrap: wrap;
        max-width: 1024px;
        background-color:red;
        justify-content: center; 
    }
    #firstDiv {
        background-color: green;
        width: 100%;
    }
    p {
       background-color: black;
       text-align: center;
       padding: 4px;
    }
    span {
        text-decoration: underline;
        color: blue;
    }
    
</style>
<div part="tab">
    <h2>This is a headline</h2>
    <p> This is my first component<span> With a span </span> to illustrate styling inheritance.</p>
    <div id="firstDiv"></div>
    <div id="secondDiv"></div>
</div>
`

customElements.define('first-component', 
class extends HTMLElement {
    
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
    }
    connectedCallback () {
        // Creates 8 boxes
        for (let i = 0; i < 8; i++) {
           this.shadowRoot.querySelector('#firstDiv').append(box.cloneNode(true)) 
           this.shadowRoot.querySelector('#secondDiv').append(box.cloneNode(true)) 
        }
    }
})