/**
 * Tool for drawing freehand lines on a canvas.
 */
export class PenTool {
  /**
   * Creates an instance of PenTool.
   *
   * @param {CanvasRenderingContext2D} canvasContext - The 2D context of the canvas to draw on.
   */
  constructor (canvasContext) {
    this.isDrawing = false
    this.canvasContext = canvasContext
    this.color = 'black'
    this.size = 1
  }

  /**
   * Handles mouse down event to start drawing.
   *
   * @param {MouseEvent} event
   */
  handleMouseDown (event) {
    this.isDrawing = true

    const { offsetX, offsetY } = event
    // Lift the pen
    this.canvasContext.beginPath()
    this.canvasContext.moveTo(offsetX, offsetY)
  }

  /**
   * Handles mouse move event to draw if drawing is active.
   *
   * @param {MouseEvent} event
   */
  handleMouseMove (event) {
    if (!this.isDrawing) return
    this.canvasContext.lineWidth = this.size
    this.draw(event)
  }

  /**
   * Handles mouse up event to stop drawing.
   */
  handleMouseUp () {
    if (this.isDrawing) {
      this.isDrawing = false

      // Start fresh so that the next dwaring doesn't connect
      this.canvasContext.beginPath()
    }
  }

  /**
   * Draws a line to the current mouse position.
   *
   * @param {MouseEvent} event
   */
  draw (event) {
    // Current pos
    const { offsetX, offsetY } = event

    this.canvasContext.strokeStyle = this.color

    this.canvasContext.lineTo(offsetX, offsetY)
    this.canvasContext.stroke()

    this.canvasContext.beginPath()
    this.canvasContext.moveTo(offsetX, offsetY)
  }

  /**
   * Sets the color for the pen tool.
   *
   * @param {string} color - The color to set for drawing.
   */
  setColor (color) {
    this.color = color
  }

  /**
   * Sets the size for the pen tool.
   *
   * @param {number} size - The size to set for drawing.
   */
  setSize (size) {
    this.size = size
  }
}
