import { template } from './playerManager-template.js'

customElements.define('player-manager', 

    class extends HTMLElement {
        #addNewPlayerButton
        #playerNameInput
        #removePlayerButton
        #increaseScoreButton

        constructor () {
            super()

            this.attachShadow({ mode: 'open '})
            this.shadowRoot.appendChild(template.content.cloneNode(true))
            this.#addNewPlayerButton = this.shadowRoot.querySelector('')
            this.#playerNameInput = this.shadowRoot.querySelector('')
            this.#removePlayerButton = this.shadowRoot.querySelector('')
            this.#increaseScoreButton = this.shadowRoot.querySelector('')
        }
    }
)