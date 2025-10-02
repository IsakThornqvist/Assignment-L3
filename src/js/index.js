import '../components/board/index.js'

const board = document.createElement('my-board')
document.body.appendChild(board)

// The standard canvas size is 500 by 500 pixels. You can set whatever standard you want here
board.setCanvasSize(500, 500)

// By default you have 12 colors to set to whatever you want.
board.setPenColor('black', 'white', 'violet', 'yellow', 'lime', 'green', 'blue', 'blueviolet', 'brown', 'grey', 'orange', 'red')

// This is used to set the options for the background colors of the canvas.
board.setCanvasColor('white', 'black', 'grey', 'green', 'blue', 'red', 'yellow', 'limegreen')

// First parameter is the small size, middle is medium and the last is the big size.
board.setPenSize(3, 6, 10)
