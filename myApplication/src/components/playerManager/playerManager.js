import { template } from './playerManager-template.js'

customElements.define('player-manager',

  class extends HTMLElement {
    #addNewPlayerButton
    #playerNameInput
    #removePlayerButton
    #increaseScoreButton
    #playerList
    #currentPlayers = []

    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
      this.#addNewPlayerButton = this.shadowRoot.querySelector('#addNewPlayerButton')
      this.#playerNameInput = this.shadowRoot.querySelector('#playerInputField')
      this.#removePlayerButton = this.shadowRoot.querySelector('#removePlayerButton')
      this.#increaseScoreButton = this.shadowRoot.querySelector('#increaseScoreButton')
      this.#playerList = this.shadowRoot.querySelector('#playerList')
    }

    connectedCallback () {
      this.#addPlayer()
      this.#showPlayerList()
    }

    #addPlayer () {
      this.#playerNameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          this.#handlePlayerNameSubmission()
        }
      })

      this.#addNewPlayerButton.addEventListener('click', () => this.#handlePlayerNameSubmission())
    }

    #handlePlayerNameSubmission () {
      const playerName = this.#playerNameInput.value.trim()
      if (!this.#validatePlayerName(playerName)) return

      this.#addPlayerToList(playerName)
      this.#playerNameInput.value = ''
      this.#showPlayerList()
    }

    #validatePlayerName (playerName) {
      if (!playerName) return false
      if (this.#currentPlayers.length >= 4) {
        console.log('Max 4 players allowed')
        return false
      }
      return true
    }

    #addPlayerToList (playerName) {
      this.#currentPlayers.push({ name: playerName, score: 0 })
      console.log(`currentplayers ${this.#currentPlayers}`)
    }

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

    #removePlayer (index) {
      this.#currentPlayers.splice(index, 1)
      this.#showPlayerList()
    }

    #increasePlayerScore (index) {
      const currentPlayer = this.#currentPlayers[index]
      if (currentPlayer.score >= 8) {
        console.log('Score cannot go higer than 8')
      } else {
        currentPlayer.score = currentPlayer.score + 1
        this.#showPlayerList()
      }
    }

    #decreasePlayerScore (index) {
      const currentPlayer = this.#currentPlayers[index]
      if (currentPlayer.score < 1) {
        console.log('Score cant be lower than 0')
      } else {
        currentPlayer.score = currentPlayer.score - 1
        this.#showPlayerList()
      }
    }
  }
)
