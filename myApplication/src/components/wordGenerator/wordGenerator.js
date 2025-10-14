import { template } from './wordGenerator-template.js'
import { wordList } from './wordList.js'

customElements.define('word-generator',

  /**
 * Generates and displays random words for the drawing game.
 *
 * @class
 * @extends {HTMLElement}
 */
  class extends HTMLElement {
    #wordGenerator
    #generateWordButton
    #displayWord
    #randomWords = wordList

    /**
     * Sets up the word-generator, shadow DOM, and grabs all the needed elements.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
      this.#wordGenerator = this.shadowRoot.querySelector('#wordGeneratorContainer')
      this.#generateWordButton = this.shadowRoot.querySelector('#generateWordButton')
      this.#displayWord = this.shadowRoot.querySelector('#displayWord')
    }

    /**
     * Sets up event listeners when element is inserted.
     */
    connectedCallback () {
      console.log('word-gen added')
      this.#setupWordEvents()
    }

    /**
     * Sets up click listener for word generation button.
     *
     * @private
     */
    #setupWordEvents () {
      this.#generateWordButton.addEventListener('click', () => {
        console.log('generate word')
        const randomWord = this.#getRandomWord()
        this.#displayWord.textContent = randomWord
      })
    }

    /**
     * Returns random word from word list.
     *
     * @private
     * @returns {string}
     */
    #getRandomWord () {
      const randomIndex = Math.floor(Math.random() * this.#randomWords.length)
      return this.#randomWords[randomIndex]
    }
  })
