import '../../myModule/src/js/index.js'
import '../src/components/wordGenerator/index.js'
import '../src/components/playerManager/index.js'
import '../src/components/startScreen/index.js'
import { GameController } from '../src/controllers/gameController.js'

const board = document.createElement('my-board')
const wordGenerator = document.createElement('word-generator')
const playerManager = document.createElement('player-manager')
const startScreen = document.createElement('start-screen')
document.body.appendChild(board)
document.body.appendChild(wordGenerator)
document.body.appendChild(playerManager)
document.body.appendChild(startScreen)

/* board.style.display = 'none'
wordGenerator.style.display = 'none' */

board.setCanvasSize(500, 500)

board.setPenColor('black', 'white', 'violet', 'yellow', 'lime', 'green', 'blue', 'blueviolet', 'brown', 'grey', 'orange', 'red')

board.setCanvasColor('white', 'black', 'grey', 'green', 'blue', 'red', 'yellow', 'limegreen')

board.setPenSize(3, 6, 10)

const gameController = new GameController(playerManager, board, wordGenerator)

console.log('App.js: GameController created')
gameController.getCurrentPlayers()
