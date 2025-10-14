import { template } from './wordGenerator-template.js'
import { wordList } from './wordList.js'

customElements.define('word-generator',

  class extends HTMLElement {
    #wordGenerator
    #generateWordButton
    #displayWord
    #randomWords = wordList

    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
      this.#wordGenerator = this.shadowRoot.querySelector('#wordGeneratorContainer')
      this.#generateWordButton = this.shadowRoot.querySelector('#generateWordButton')
      this.#displayWord = this.shadowRoot.querySelector('#displayWord')
    }

    /**
   * Called automatically when the custom element is inserted into the DOM.
   * Initializes event listeners and displays an initial random word.
   *
   * @override
   */
    connectedCallback () {
      console.log('word-gen added')
      this.#setupWordEvents()
      // this.#displayRandomWord()
    }

    /**
   * Sets up UI event listeners for the component.
   *
   * Attaches a click event handler to the "Generate Word" button,
   * which retrieves and displays a new random word each time it’s pressed.
   *
   * @private
   * @returns {void}
   */
    #setupWordEvents () {
      this.#generateWordButton.addEventListener('click', () => {
        console.log('generate word')
        const randomWord = this.#getRandomWord()
        this.#displayWord.textContent = randomWord
      })
    }

    #getRandomWord () {
      const randomIndex = Math.floor(Math.random() * this.#randomWords.length)
      return this.#randomWords[randomIndex]
    }
  })
