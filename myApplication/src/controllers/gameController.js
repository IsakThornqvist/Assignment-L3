import '../components/playerManager/index.js'
import '../components/wordGenerator/index.js'
import '../../../myModule/src/components/board/index.js'

export class GameController {
  #playerManager
  #board
  #wordGenerator
  #currentPlayer
  #roundNumber
  #winScore = 4

  constructor(playerManager, board, wordGenerator) {
    this.#playerManager = playerManager
    this.#board = board
    this.#wordGenerator = wordGenerator

    this.#playerManager.addEventListener('scoreChanged', () => {
      this.checkForWinner()
    })
  }

  getCurrentPlayers () {
    this.#playerManager.addEventListener('playersChanged', () => {
      const currentPlayers = this.#playerManager.getCurrentPlayers()
      console.log('current players', currentPlayers)
      return currentPlayers
    })
  }

  nextTurn () {

  }

  displayRoundNumber () {

  }

  setupRound () {

  }

  checkForWinner () {
    const players = this.#playerManager.getCurrentPlayers()

    if (!players || players.length === 0) {
      return 'No players yet'
    }

    const winner = players.find(player => player.score >= this.#winScore)

    if (winner) {
      console.log(`${winner.name} wins the game!`)
      return `${winner.name} wins the game!`
    } else {
      console.log('No winner yet.')
      return 'No winner yet.'
    }
  }

  displayWinner () {
    
  }

  // next roundButtomn
  // end game
  // new game
  //
}
