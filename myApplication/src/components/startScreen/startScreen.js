import { template } from './startScreen-template.js'

customElements.define('start-screen',

  /**
  * Manages game players and their scores.

  * @class
 * @extends {HTMLElement}
 */
  class extends HTMLElement {
    #startScreenHeader
    #startScreenText
    #startGameButton


    /**
     * Sets up the player-manager, shadow DOM, and grabs all the needed elements.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
      this.#startScreenHeader = this.shadowRoot.querySelector('#startScreenHeader')
      this.#startGameButton = this.shadowRoot.querySelector('#startGameButton')
      this.#startScreenText = this.shadowRoot.querySelector('#startScreenText')
    }

    /**
     * Runs setup when the element is added to the page.
     */
    connectedCallback () {
    }
  }
)
