import '../../../../myModule/src/js/index.js'
import '../playerManager/index.js'
import '../startScreen/index.js'
import '../wordGenerator/index.js'
import { template } from './drawingGame-template.js'

customElements.define('drawing-game',
  class extends HTMLElement {
    #wordGenerator
    #playerManager
    #board
    #startScreen
    #roundNumber
    #winScore = 4

    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
      this.#wordGenerator = this.shadowRoot.querySelector('#word-generator')
      this.#playerManager = this.shadowRoot.querySelector('#player-manager')
      this.#board = this.shadowRoot.querySelector('#my-board')
      this.#startScreen = this.shadowRoot.querySelector('#start-screen')
    }

    connectedCallback () {
      console.log('quiz game added')
      setTimeout(() => this.#canvasConfig(), 0)
      this.#setupStartGameEvent()
    }

    #canvasConfig () {
      this.#board.setCanvasSize(500, 500)

      this.#board.setPenColor('black', 'white', 'violet', 'yellow', 'lime', 'green', 'blue', 'blueviolet', 'brown', 'grey', 'orange', 'red')

      this.#board.setCanvasColor('white', 'black', 'grey', 'green', 'blue', 'red', 'yellow', 'limegreen')

      this.#board.setPenSize(3, 6, 10)
    }

    #setupStartGameEvent () {
      this.#startScreen.addEventListener('startGame', () => {
        this.#handleStartGame()
      })
    }

    #handleStartGame () {
      this.#board.classList.remove('hidden')
      this.#wordGenerator.classList.remove('hidden')
      this.#startScreen.classList.add('hidden')
    }

    #handleEndGame () {

    }

    #handleBackToStartScreen () {

    }
  }
)
