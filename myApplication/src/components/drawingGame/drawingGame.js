import '../../../../myModule/src/js/index.js'
import '../playerManager/index.js'
import '../startScreen/index.js'
import '../wordGenerator/index.js'
import { template } from './drawingGame-template.js'

customElements.define('drawing-game',

  /**
 * Main drawing game element. Handles game flow, player turns, rounds,
 * word generation, and the drawing board.
 *
 * @class
 * @extends {HTMLElement}
 */
  class extends HTMLElement {
    #wordGenerator
    #playerManager
    #board
    #startScreen
    #winScore = 4
    #mainMenuButton
    #currentDrawerDisplay
    #displayRound
    #currentPlayerIndex
    #roundNumber

    /**
     * Sets up shadow DOM and caches references to child components and UI elements.
     */
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

    /**
     * Called when the element is added to the DOM. Sets up event listeners and canvas.
     */
    connectedCallback () {
      setTimeout(() => this.#canvasConfig(), 0)
      this.#setupStartGameEvent()
      this.#setupBackToMainMenuEvent()
      this.#setupNextRoundButton()
    }

    /**
     * Configures the drawing board canvas, colors, and pen sizes.
     *
     * @private
     */
    #canvasConfig () {
      this.#board.setCanvasSize(500, 500)

      this.#board.setPenColor(
        'black', 'white', 'violet', 'yellow', 'lime',
        'green', 'blue', 'blueviolet', 'brown', 'grey',
        'orange', 'red'
      )

      this.#board.setCanvasColor(
        'white', 'black', 'grey', 'green', 'blue',
        'red', 'yellow', 'limegreen'
      )

      this.#board.setPenSize(3, 6, 10)
    }

    /**
     * Sets up the event listener for starting the game.
     *
     * @private
     */
    #setupStartGameEvent () {
      this.#startScreen.addEventListener('startGame', () => {
        this.#handleStartGame()
      })
    }

    /**
     * Initializes game state when the game starts.
     *
     * @private
     */
    #handleStartGame () {
      const players = this.#playerManager.getCurrentPlayers()
      if (players.length < 2) {
        alert('At least 2 players are needed to start the game!')
        return
      }

      this.#board.classList.remove('hidden')
      this.#wordGenerator.classList.remove('hidden')
      this.#startScreen.classList.add('hidden')

      this.#currentPlayerIndex = 0
      this.#roundNumber = 1
      this.#updateRoundUI()

      this.#wordGenerator.showNewRandomWord()
      this.#board.clearCanvas()
    }

    /**
     * Sets up the back-to-main-menu button.
     *
     * @private
     */
    #setupBackToMainMenuEvent () {
      this.#mainMenuButton.addEventListener('click', () => {
        this.#handleBackToStartScreen()
      })
    }

    /**
     * Handles returning to the main menu and resetting UI.
     *
     * @private
     */
    #handleBackToStartScreen () {
      this.#board.classList.add('hidden')
      this.#wordGenerator.classList.add('hidden')
      this.#startScreen.classList.remove('hidden')
      this.#board.clearCanvas()
    }

    /**
     * Sets up the next-round button to advance the turn.
     *
     * @private
     */
    #setupNextRoundButton () {
      const nextRoundButton = this.shadowRoot.querySelector('#nextRoundButton')
      nextRoundButton.addEventListener('click', () => this.#nextTurn())
    }

    /**
     * Updates the UI for the current round and current player.
     *
     * @private
     */
    #updateRoundUI () {
      const players = this.#playerManager.getCurrentPlayers()
      this.#displayRound.textContent = `Round: ${this.#roundNumber}`
      this.#currentDrawerDisplay.textContent = players[this.#currentPlayerIndex].name
    }

    /**
     * Advances to the next player's turn, updates round number, board, and word.
     *
     * @private
     */
    #nextTurn () {
      const players = this.#playerManager.getCurrentPlayers()
      if (!players.length) return

      this.#currentPlayerIndex = (this.#currentPlayerIndex + 1) % players.length

      if (this.#currentPlayerIndex === 0) {
        this.#roundNumber++
      }

      this.#updateRoundUI()
      this.#wordGenerator.showNewRandomWord()
      this.#board.clearCanvas()
    }
  }
)
