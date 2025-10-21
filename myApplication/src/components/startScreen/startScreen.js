import { template } from './startScreen-template.js'

customElements.define('start-screen',

  /**
  * Manages game players and their scores.

  * @class
 * @extends {HTMLElement}
 */
  class extends HTMLElement {
    #startGameButton

    /**
     * Sets up the player-manager, shadow DOM, and grabs all the needed elements.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
      this.#startGameButton = this.shadowRoot.querySelector('#startGameButton')
    }

    /**
     * Runs setup when the element is added to the page.
     */
    connectedCallback () {
      this.#startGameButton.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('startGame'))
      })
    }
  }
)
