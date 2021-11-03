const template = document.createElement('template')
template.innerHTML = `
<style>
    div {
        height: 100px;
        width: 100px;
        background-color: orange;
        margin: 10px;
    }
</style>
<div>
    <h2 part="tab2">A box</h2>
    <p>With p-tag <span>and span</span></p>
</div>`

customElements.define('box-component', 
class extends HTMLElement {
    constructor () {
        super()
        this.attachShadow({mode: 'open'})
        .append(template.content.cloneNode(true))
    }

    connectedCallback () {
        this.shadowRoot.setAttribute('part', 'tab2')
    }
})