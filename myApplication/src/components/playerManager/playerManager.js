import { template } from './playerManager-template.js'

customElements.define('player-manager',

  /**
  * Manages game players and their scores.

  * @class
 * @extends {HTMLElement}
 */
  class extends HTMLElement {
    #playerNameInput
    #removePlayerButton
    #increaseScoreButton
    #playerList
    #currentPlayers = []

    /**
     * Sets up the player-manager, shadow DOM, and grabs all the needed elements.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
      this.#playerNameInput = this.shadowRoot.querySelector('#playerInputField')
      this.#removePlayerButton = this.shadowRoot.querySelector('#removePlayerButton')
      this.#increaseScoreButton = this.shadowRoot.querySelector('#increaseScoreButton')
      this.#playerList = this.shadowRoot.querySelector('#playerList')
    }

    /**
     * Runs setup when the element is added to the page.
     */
    connectedCallback () {
      this.#addPlayer()
      this.#showPlayerList()
    }

    /**
     * Sets up event listeners for player input.
     *
    * @private
     */
    #addPlayer () {
      this.#playerNameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          this.#handlePlayerNameSubmission()
        }
      })
    }

    /**
     * Handles player name submission.
     *
     * @private
     */
    #handlePlayerNameSubmission () {
      const playerName = this.#playerNameInput.value.trim()
      if (!this.#validatePlayerName(playerName)) return

      this.#addPlayerToList(playerName)
      this.#playerNameInput.value = ''
      this.#showPlayerList()
    }

    /**
     * Validates player name.
     *
     * @private
     * @param {string} playerName
     * @returns {boolean}
     */
    #validatePlayerName (playerName) {
      if (!playerName) return false
      if (this.#currentPlayers.length >= 4) {
        console.log('Max 4 players allowed')
        return false
      }
      return true
    }

    /**
     * Adds player to array.
     *
     * @private
     * @param {string} playerName
     */
    #addPlayerToList (playerName) {
      this.#currentPlayers.push({ name: playerName, score: 0 })

      this.dispatchEvent(new CustomEvent('playersChanged'))
    }

    /**
     * Renders player list with action buttons.
     *
     * @private
     */
    #showPlayerList () {
      this.#playerList.innerHTML = ''
      this.#currentPlayers.forEach((player, index) => {
        const li = document.createElement('li')
        li.textContent = `${player.name} SCORE: ${player.score}`

        const removePlayerButton = document.createElement('button')
        removePlayerButton.textContent = 'remove'
        removePlayerButton.addEventListener('click', () => this.#removePlayer(index))
        li.appendChild(removePlayerButton)

        const increaseScoreButton = document.createElement('button')
        increaseScoreButton.textContent = '+'
        increaseScoreButton.addEventListener('click', () =>
          this.#increasePlayerScore(index))
        li.appendChild(increaseScoreButton)

        const decreaseScoreButton = document.createElement('button')
        decreaseScoreButton.textContent = '-'
        decreaseScoreButton.addEventListener('click', () =>
          this.#decreasePlayerScore(index))
        li.appendChild(decreaseScoreButton)

        li.dataset.index = index
        this.#playerList.appendChild(li)
      })
    }

    /**
     * Removes player at index.
     *
     * @private
     * @param {number} index
     */
    #removePlayer (index) {
      this.#currentPlayers.splice(index, 1)
      this.#showPlayerList()

      this.dispatchEvent(new CustomEvent('playersChanged'))
    }

    /**
     * Increments player score (max 8).
     *
     * @private
     * @param {number} index
     */
    #increasePlayerScore (index) {
      const currentPlayer = this.#currentPlayers[index]
      if (currentPlayer.score >= 8) {
        console.log('Score cannot go higer than 8')
      } else {
        currentPlayer.score = currentPlayer.score + 1
        this.#showPlayerList()
        this.dispatchEvent(new CustomEvent('scoreChanged'))
      }
    }

    /**
     * Decrements player score (min 0).
     *
     * @private
     * @param {number} index
     */
    #decreasePlayerScore (index) {
      const currentPlayer = this.#currentPlayers[index]
      if (currentPlayer.score < 1) {
        console.log('Score cant be lower than 0')
      } else {
        currentPlayer.score = currentPlayer.score - 1
        this.#showPlayerList()
        this.dispatchEvent(new CustomEvent('scoreChanged'))
      }
    }

    /**
 * Returns the current list of players with their scores.
 *
 * @returns {Array<{name: string, score: number}>} Array of player objects.
 */
    getCurrentPlayers () {
      return this.#currentPlayers
    }
  }
)
