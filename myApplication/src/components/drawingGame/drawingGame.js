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
    #mainMenuButton
    #currentDrawerDisplay
    #displayRound

    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
      this.#wordGenerator = this.shadowRoot.querySelector('#word-generator')
      this.#playerManager = this.shadowRoot.querySelector('#player-manager')
      this.#board = this.shadowRoot.querySelector('#my-board')
      this.#startScreen = this.shadowRoot.querySelector('#start-screen')
      this.#mainMenuButton = this.shadowRoot.querySelector('#backToStartScreenButton')
      this.#currentDrawerDisplay = this.shadowRoot.querySelector('#currentDrawer')
      this.#displayRound = this.shadowRoot.querySelector('#displayRound')
    }

    connectedCallback () {
      console.log('quiz game added')
      setTimeout(() => this.#canvasConfig(), 0)
      this.#setupStartGameEvent()
      this.#setupBackToMainMenuEvent()
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
      const players = this.#playerManager.getCurrentPlayers()
      if (players.length < 2) {
        alert('Atleast 2 players is needed to start the game!')
        return
      }

      this.#board.classList.remove('hidden')
      this.#wordGenerator.classList.remove('hidden')
      this.#startScreen.classList.add('hidden')

      this.#wordGenerator.showNewRandomWord()
    }

    #handleEndGame () {

    }

    #setupBackToMainMenuEvent () {
      this.#mainMenuButton.addEventListener('click', () => {
        this.#handleBackToStartScreen()
      })
    }

    #handleBackToStartScreen () {
      this.#board.classList.add('hidden')
      this.#wordGenerator.classList.add('hidden')
      this.#startScreen.classList.remove('hidden')
      this.#board.clearCanvas()
    }
  }
)
