
const template = document.createElement('template')
template.innerHTML = `
    <style>
        img { 
            clip-path: circle(50%);
            height: 100%;
            width: 100%; 
        }
    </style>
    <div>
        <img id="logo" src="" alt="The logo of the page">
    </div>`


customElements.define('header-logo', 
class extends HTMLElement {
    #image
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

        this.#image = this.shadowRoot.querySelector('#logo')
    }

    static get observedAttributes () {
        return ['src']
    }

     attributeChangedCallback (name, oldValue, newValue) {
        if (name === 'src' && newValue !== oldValue) {
            this.#image.setAttribute('src', newValue)
        }
    } 
})
