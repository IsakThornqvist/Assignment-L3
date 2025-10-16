import { PenTool } from '../tools/pen/pen.js'
import { EraseTool } from '../tools/eraser/eraser.js'
import { template } from './board-template.js'

customElements.define('my-board',

  /**
   * Drawing board custom element.
   */
  class extends HTMLElement {
    #pen
    #eraser
    #canvas
    #currentTool = 'none'
    #widthInput
    #heightInput
    #widthButton
    #heightButton
    #colorPicker
    #canvasColorPicker
    #penSizePicker
    #clearCanvasButton
    #penControls

    /**
     * Sets up the board, shadow DOM, and grabs all the needed elements.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
      this.#canvas = this.shadowRoot.querySelector('#myCanvas')
      this.#heightInput = this.shadowRoot.querySelector('#heightInput')
      this.#widthInput = this.shadowRoot.querySelector('#widthInput')
      this.#widthButton = this.shadowRoot.querySelector('#widthButton')
      this.#heightButton = this.shadowRoot.querySelector('#heightButton')
      this.#colorPicker = this.shadowRoot.querySelector('#colorPicker')
      this.#canvasColorPicker = this.shadowRoot.querySelector('#canvasColorPicker')
      this.#penSizePicker = this.shadowRoot.querySelector('#penSizePicker')
      this.#clearCanvasButton = this.shadowRoot.querySelector('#clearCanvasButton')
      this.#penControls = this.shadowRoot.querySelector('#penControls')

      this.#pen = new PenTool(this.#canvas.getContext('2d'))
      this.#eraser = new EraseTool(this.#canvas.getContext('2d'))
    }

    /**
     * Runs setup when the element is added to the page.
     */
    connectedCallback () {
      this.#setupToolButtons()
      this.#setupPenEvents()
      this.#setupSetWidthAndHeight()
      this.#setupPenColorPicker()
      this.#setupCanvasColorPicker()
      this.#setupPenSizePicker()
      this.#setupClearCanvas()
    }

    /**
     * Adds a click event to the clear button to wipe the canvas.
     */
    #setupClearCanvas () {
      this.#clearCanvasButton.addEventListener('click', () => {
        const canvasContext = this.#canvas.getContext('2d')
        canvasContext.clearRect(0, 0, this.#canvas.width, this.#canvas.height)
      })
    }

    /**
     * Adds mouse events for drawing and erasing on the canvas.
     */
    #setupPenEvents () {
      this.#canvas.addEventListener('mousedown', e => this.#handleMouseDown(e))
      this.#canvas.addEventListener('mouseup', e => this.#handleMouseUp(e))
      this.#canvas.addEventListener('mousemove', e => this.#handleMouseMove(e))
    }

    /**
     * Adds click events to all tool buttons so you can switch tools.
     */
    #setupToolButtons () {
      this.shadowRoot.querySelectorAll('.toolButton').forEach(button => {
        button.addEventListener('click', () => {
          this.#swapTool(button.dataset.tool, button)
        })
      })
    }

    /**
     * Adds click events to color buttons to change pen color.
     */
    #setupPenColorPicker () {
      this.#colorPicker.querySelectorAll('.colorButton').forEach(button => {
        button.addEventListener('click', () => {
          const color = button.getAttribute('data-color')
          this.#pen.setColor(color)
        })
      })
    }

    /**
     * Adds click events to canvas color buttons to change the canvas background.
     */
    #setupCanvasColorPicker () {
      this.#canvasColorPicker.querySelectorAll('.colorButton').forEach(button => {
        button.addEventListener('click', () => {
          const color = button.getAttribute('data-color')
          this.#canvas.style.backgroundColor = color
        })
      })
    }

    /**
     * Adds click events to pen size buttons to change pen size.
     */
    #setupPenSizePicker () {
      this.#penSizePicker.querySelectorAll('.sizeButton').forEach(button => {
        button.addEventListener('click', () => {
          const size = parseInt(button.getAttribute('data-size'), 10)
          this.#penSizePicker.querySelectorAll('.sizeButton').forEach(button =>
            button.classList.remove('active')
          )
          button.classList.add('active')
          this.#pen.setSize(size)
        })
      })
    }

    /**
     * Switches the active tool and updates the button styles.
     *
     * @param {string} toolname - Tool to activate.
     * @param {HTMLElement} buttonClicked - The button that was clicked.
     */
    #swapTool (toolname, buttonClicked) {
      this.shadowRoot.querySelectorAll('.toolButton').forEach(button =>
        button.classList.remove('active')
      )
      buttonClicked.classList.add('active')
      this.#currentTool = toolname
      const penControls = this.#penControls
      if (this.#currentTool === 'pen') {
        penControls.classList.remove('hidden')
      } else {
        penControls.classList.add('hidden')
      }
    }

    /**
     * Handles mouse up on the canvas and calls the right tool's method.
     *
     * @param {MouseEvent} e - The mouse up event object.
     */
    #handleMouseUp (e) {
      if (this.#currentTool === 'pen') {
        this.#pen.handleMouseUp(e)
      } else if (this.#currentTool === 'eraser') {
        this.#eraser.handleMouseUp(e)
      }
    }

    /**
     * Handles mouse down on the canvas and calls the right tool's method.
     *
     * @param {MouseEvent} e - The mouse down event object.
     */
    #handleMouseDown (e) {
      if (this.#currentTool === 'pen') {
        this.#pen.handleMouseDown(e)
      } else if (this.#currentTool === 'eraser') {
        this.#eraser.handleMouseDown(e)
      }
    }

    /**
     * Handles mouse move on the canvas and calls the right tool's method.
     *
     * @param {MouseEvent} e - The mousemove event object.
     */
    #handleMouseMove (e) {
      if (this.#currentTool === 'pen') {
        this.#pen.handleMouseMove(e)
      } else if (this.#currentTool === 'eraser') {
        this.#eraser.handleMouseMove(e)
      }
    }

    /**
     * Adds click events to the width and height buttons to resize the canvas.
     */
    #setupSetWidthAndHeight () {
      this.#widthButton.addEventListener('click', () => {
        const widthValue = this.#widthInput.value
        if (!isNaN(widthValue) && widthValue > 0) {
          this.#canvas.width = widthValue
        }
      })

      this.#heightButton.addEventListener('click', () => {
        const heightValue = this.#heightInput.value
        if (!isNaN(heightValue) && heightValue > 0) {
          this.#canvas.height = heightValue
        }
      })
    }

    // Methods that you can call in index.js to change the board

    /**
     * Change the canvas size from code and hide the input fields.
     *
     * @param {number} width - The new width for the canvas.
     * @param {number} height - The new height for the canvas.
     */
    setCanvasSize (width, height) {
      const widthValue = width
      if (!isNaN(widthValue)) {
        this.#canvas.width = widthValue
      }

      const heightValue = height
      if (!isNaN(heightValue)) {
        this.#canvas.height = heightValue
      }
    }

    clearCanvas () {
      const canvasContext = this.#canvas.getContext('2d')
      canvasContext.clearRect(0, 0, this.#canvas.width, this.#canvas.height)
    }

    /**
     * Set the pen color buttons and their data-color attribute from code.
     *
     * @param {...string} colors - The colors to set for the color buttons.
     */
    setPenColor (...colors) {
      const colorButton = this.#colorPicker.querySelectorAll('.colorButton')
      colors.forEach((color, index) => {
        if (colorButton[index]) {
          colorButton[index].style.backgroundColor = color
          colorButton[index].setAttribute('data-color', color)
        }
      })
    }

    /**
     * Set the canvas color buttons and their data-color attribute from code.
     *
     * @param {...string} colors - The colors to set for the canvas color buttons.
     */
    setCanvasColor (...colors) {
      const colorButton = this.#canvasColorPicker.querySelectorAll('.colorButton')
      colors.forEach((color, index) => {
        if (colorButton[index]) {
          colorButton[index].style.backgroundColor = color
          colorButton[index].setAttribute('data-color', color)
        }
      })
    }

    /**
     * Set the pen size buttons from code.
     *
     * @param {...number} sizes - The sizes to set for the pen size buttons.
     */
    setPenSize (...sizes) {
      const penSizeButton = this.#penSizePicker.querySelectorAll('.sizeButton')
      sizes.forEach((size, index) => {
        if (penSizeButton[index]) {
          penSizeButton[index].setAttribute('data-size', size)
        }
      })
    }
  })
