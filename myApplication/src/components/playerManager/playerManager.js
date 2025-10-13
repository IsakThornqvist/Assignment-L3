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
        this.addPlayer()
    }

    addPlayer () {
      this.#playerNameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const playerName = this.#playerNameInput.value.trim()

          if (playerName) {
            console.log('Name submitted:', playerName)
            this.#playerNameInput.value = ''
            if (this.#currentPlayers.length >= 4) {
              console.log('Max 4 players allowed currently')
              return
            }

            this.#currentPlayers.push(playerName)
            console.log(this.#currentPlayers)

            this.#playerList.innerHTML = ''
            this.#currentPlayers.forEach((playerName, index) => {
              const playerListItem = document.createElement('li')
              playerListItem.textContent = `${playerName} SCORE: ??`
              playerListItem.dataset.index = index
              this.#playerList.appendChild(playerListItem)
            }
            )
          }
        }
      })
    }

    removePlayer () {
        this.#playerList

    }

    getAllPlayers () {

    }
  }
)
