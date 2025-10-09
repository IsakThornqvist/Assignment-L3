import { template } from './wordGenerator-template.js'

customElements.define('word-generator',

  class extends HTMLElement {
    #wordGenerator

    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
      this.#wordGenerator = this.shadowRoot.querySelector('#wordGeneratorContainer')
    }

    connectedCallback () {
        console.log('word-gen added')
    }
  })
