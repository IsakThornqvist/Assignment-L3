import '../../myModule/src/js/index.js'
import '../src/components/wordGenerator/index.js'

const board = document.createElement('my-board')
const wordGenerator = document.createElement('word-generator')
document.body.appendChild(board)
document.body.appendChild(wordGenerator)

board.setCanvasSize(500, 500)

board.setPenColor('black', 'white', 'violet', 'yellow', 'lime', 'green', 'blue', 'blueviolet', 'brown', 'grey', 'orange', 'red')

board.setCanvasColor('white', 'black', 'grey', 'green', 'blue', 'red', 'yellow', 'limegreen')

board.setPenSize(3, 6, 10)
