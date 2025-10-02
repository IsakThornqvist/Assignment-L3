/**
 * Tool for erasing parts of a canvas by clearing rectangular areas.
 */
export class EraseTool {
  /**
   * Creates an instance of EraseTool.
   *
   * @param {CanvasRenderingContext2D} canvasContext - The 2D context of the canvas to erase on.
   */
  constructor (canvasContext) {
    this.isErasing = false
    this.canvasContext = canvasContext
    this.color = 'white'
    this.size = 40
  }

  /**
   * Handles mouse down event to start erasing.
   *
   * @param {MouseEvent} event - The mouse down event object.
   */
  handleMouseDown (event) {
    this.isErasing = true

    const { offsetX, offsetY } = event

    this.canvasContext.beginPath()
    this.canvasContext.moveTo(offsetX, offsetY)
  }

  /**
   * Handles mouse move event to erase if erasing is active.
   *
   * @param {MouseEvent} event - The mouse move event object.
   */
  handleMouseMove (event) {
    if (!this.isErasing) return
    this.erase(event)
  }

  /**
   * Handles mouse up event to stop erasing.
   */
  handleMouseUp () {
    if (this.isErasing) {
      this.isErasing = false

      this.canvasContext.beginPath()
    }
  }

  /**
   * Erases a rectangular area at the current mouse position.
   *
   * @param {MouseEvent} event - The mouse event object.
   */
  erase (event) {
    const { offsetX, offsetY } = event
    const size = this.size
    this.canvasContext.clearRect(offsetX - size / 2, offsetY - size / 2, size, size)
  }
}
