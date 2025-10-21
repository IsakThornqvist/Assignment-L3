import { template } from './playerManager-template.js'

customElements.define('player-manager',

  /**
  * Manages game players and their scores.
  *
  * @class
  * @extends {HTMLElement}
  */
  class extends HTMLElement {
    #playerNameInput
    #playerList
    #playerManagerHeader
    #scoreHeader
    #currentPlayers = []
    #gameActive = false

    /**
     * Sets up the player-manager, shadow DOM, and grabs all the needed elements.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
      this.#playerNameInput = this.shadowRoot.querySelector('#playerInputField')
      this.#playerList = this.shadowRoot.querySelector('#playerList')
      this.#playerManagerHeader = this.shadowRoot.querySelector('#playerManagerHeader')
      this.#scoreHeader = this.shadowRoot.querySelector('#scoreHeader')
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
        const li = this.#createPlayerListItem(player, index)
        this.#playerList.appendChild(li)
      })
    }

    #createPlayerListItem (player, index) {
      const list = document.createElement('li')
      list.textContent = `${player.name} Score: ${player.score}`
      list.dataset.index = index

      list.appendChild(this.#createRemoveButton(index))
      list.appendChild(this.#createScoreButton('-', () => this.#decreasePlayerScore(index)))
      list.appendChild(this.#createScoreButton('+', () => this.#increasePlayerScore(index)))

      return list
    }

    #createRemoveButton (index) {
      const removeButton = document.createElement('button')
      removeButton.textContent = 'remove'
      removeButton.classList.add('remove-button')
      if (this.#gameActive) removeButton.classList.add('hidden')
      removeButton.addEventListener('click', () => this.#removePlayer(index))
      return removeButton
    }

    #createScoreButton (text, onClick) {
      const scoreButton = document.createElement('button')
      scoreButton.textContent = text
      scoreButton.addEventListener('click', onClick)
      return scoreButton
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
     * Toggles UI between add-player mode and leaderboard mode.
     */
    onlyShowPlayerList () {
      this.#gameActive = !this.#gameActive
      this.#playerNameInput.classList.toggle('hidden')
      this.#playerManagerHeader.classList.toggle('hidden')
      this.#scoreHeader.classList.toggle('hidden')
      const removeButtons = this.shadowRoot.querySelectorAll('.remove-button')
      removeButtons.forEach(btn => btn.classList.toggle('hidden'))
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

        if (currentPlayer.score >= 4) {
          this.dispatchEvent(new CustomEvent('playerWon', {
            detail: { playerName: currentPlayer.name }
          }))
        }
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

    /**
     * Resets all player scores to 0.
     */
    resetScores () {
      this.#currentPlayers.forEach(player => {
        player.score = 0
      })
      this.#showPlayerList()
    }
  }
)
