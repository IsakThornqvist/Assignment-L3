import '../../myModule/src/js/index.js'

const board = document.createElement('my-board')
document.body.appendChild(board)

board.setCanvasSize(800, 450)
board.setPenColor('black', 'white', 'violet', 'yellow', 'lime', 'green', 'blue', 'blueviolet', 'brown', 'grey', 'orange', 'red')
board.setCanvasColor('white', 'black', 'grey', 'green', 'blue', 'red', 'yellow', 'limegreen')
board.setPenSize(3, 6, 10)
