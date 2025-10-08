# Reflection during development
The first challenge I encountered was my lack of familiarity with the HTML element **canvas**. Initially, I attempted to create my canvas using a **div** element, but after consulting the MDN documentation, I realized that the **canvas** element was much better suited for my project.

Through this process, I gained hands-on experience with various canvas methods, such as beginPath() and stroke(). These methods made it straightforward to implement functionality like the pen tool correctly. The documentation for these methods was extremely helpful and made it easy to understand how to use them in combination to achieve the desired drawing behavior.

I wanted to set up testing for my module early in the development process. Initially, I encountered issues with importing the module using:

```js
import '../src/components/board/board.js'
```

The issue I had was that Jest could not natively handle ES module imports from the browser-based code. To resolve this, I configured Babel and updated the Jest configuration to work with ES modules. Once these configurations were in place, the tests ran successfully, allowing me to validate the functionality of my module.

Setting up the eraser tool went really well, and I understood what I needed to do from the start. Since the pen tool was already implemented, I realized that much of its code could be reused, as both the pen and eraser work in a similar way.

Initially, I tried to make the eraser by simply turning it into a white pen. However, I quickly realized this approach had several problems. First, if I wanted to allow users to change the background color of the canvas, the eraser would fail immediately, since it would only "erase" to white, not to the actual background color. Another issue was that the eraser itself didn’t work well at all,it was hard to erase cleanly when all it did was draw white lines.

Instead of using a white pen, I decided to implement the eraser by actually clearing parts of the canvas. I used the clearRect method of the canvas context to remove a rectangular area where the user moves the eraser. This approach works regardless of the background color and provides a much more natural erasing experience. By clearing pixels directly, the eraser behaves as expected and is not dependent on the canvas color.

```js
  /**
   * Erases a rectangular area at the current mouse position.
   *
   * @param {MouseEvent} event - The mouse event object.
   */
  erase (event) {
    const { offsetX, offsetY } = event
    const size = 20
    this.canvasContext.clearRect(offsetX - size / 2, offsetY - size / 2, size, size)
  }
  ```

When designing the pen functionality, I considered several approaches for handling color changes.  
The long-term goal is to implement a full **RGB color picker** so that users can select any color freely.  
For the current version, I chose to provide a set of predefined colors.

To achieve this, I added a `colorPicker` section in the **board-template**, which contains four buttons.  
Each button has a `data-color` attribute that stores its corresponding color value.  

In **board.js**, I listen for click events on these buttons.  
When a button is pressed, the pen tool updates its active color using the value from the `data-color` attribute.  

This setup is straightforward to extend — I can either add more predefined buttons or later replace them with a full RGB picker.

---

#### Flow of Color Selection

1. User clicks a color button inside the `colorPicker`.
2. The button’s `data-color` attribute is read in `board.js`.
3. The value is passed to `pen.setColor(color)`.
4. The pen updates its stroke color and uses it for subsequent drawings.

    ```js
      /**
     * Sets up event listeners for color buttons to change the pen color.
     */
    pickColor () {
      this.#colorPicker.querySelectorAll('.colorButton').forEach(button => {
        button.addEventListener('click', () => {
          const color = button.getAttribute('data-color')
          console.log(`color selected is ${color}`)
          this.#pen.setColor(color)
        })
      })
    }
    ```

    For the pen size feature, I wanted users to draw with different thicknesses instead of a fixed line width. To do this, I created a penSizePicker section in the template with buttons that each have a data-size attribute that I use to change the size of the pen depending on what button the user clicks.

    In board.js, I added event listeners so that when a button is clicked, the value from data-size is passed to pen.setSize(size). At first, I ran into the issue that the values were read as strings, which caused problems since the canvas expects a number. I fixed this by converting the values with parseInt.

    In the future, this could easily be extended with a slider instead of fixed buttons for even more flexibility.

    ```js
    /**
     * Sets up event listeners for pen size buttons to change the pen size.
     */
    pickSize () {
      this.#penSizePicker.querySelectorAll('.sizeButton').forEach(button => {
        button.addEventListener('click', () => {
          const size = parseInt(button.getAttribute('data-size'), 10)
          console.log(`size selected is ${size}`)
          this.#pen.setSize(size)
        })
      })
    }
    ```


# Naming Analysis

| Name | Explanation | Reflection |
|------|------------|--------------------------------------|
| `my-board` | The name of the custom-element that will be used in the html to show the component | **Use Intention-Revealing Names:** The name clearly represents what the customelement represents which is the board itself, I could probably be even more specific and call it something like 'drawing board' but I think the name I gave it is good enough and most people will understand the meaning of it. |
| `PenTool` | Class name for the tool that handles drawing freehand lines on the canvas. | **Classes and Objects Should Have Noun or Noun Phrase Names:** The name correctly uses a noun that reflects its role. It reveals the intent of the class (a pen-like drawing tool). One improvement could be dropping the suffix “Tool” since the module already exists in a /tools/ directory, which makes it redundant. |
| `setColor` | Method name in PenTool that changes the color of the pen. | **Method Names Should Be Verbs or Verb Phrases:** This follows the rule because setColor describes exactly what the function does: it sets the color. It could be even clearer if renamed to setPenColor, since the tool works with the pen, but overall it’s descriptive and conventional. |
| `pickColor` | Method that listens for color button clicks and updates the pen color. | **Use Solution Domain Names:** “Pick” is understandable, but could be confused with a color-picker input. Something like pickColorButtons might better reflect its purpose. |
| `erase` | Method in the eraser tool that removes pixels from the canvas. | **Avoid Disinformation:** The name is simple and effective. However, it does not reveal that it erases a rectangular area rather than a freehand line. A more precise name could be eraseAtPosition. |

## Reflection of what I learnt by reading chapter 2 

While reading Chapter 2 of Clean Code, I gained a appreciation for the importance of meaningful names in programming. Even before reading this I always have tried to write the code in a way that is easy to understand both for myself and also for other people that may come across the code. I learned that choosing good names is not just a matter of "gold-spray" or to make things look good it directly affects how easily other developers can understand and use your code.

**Some key takeaways are:**

**Intention-Revealing Names:** Names should clearly express what a class, function, or variable does. For example, naming my custom element my-board immediately communicates that it represents a board component.

**Avoid Disinformation:** Names should not include unnecessary numbers or terms that might confuse users. For instance, I realized that appending numbers to a class or function name adds no real value most of the time.

**Use Problem Domain or Solution Domain Names:** It is important to use terms that relate either to the problem you are solving or to the solution itself. This helps other programmers quickly understand the purpose without needing additional context.

**Readable and Pronounceable Names:** Names should be easy to read and pronounce so they are easier to discuss, debug, and maintain both for the developer and also for the consumer.

Reflecting on my own code, I noticed that while most of my names were fairly descriptive, some could be even clearer. For example, setColor could be expanded to setPenColor to explicitly indicate which tool it affects. I also learned that balancing how concise a method is with clarity of the name itself is important, names should be concise but never ambiguous.

Overall, **Chapter 2** reinforced that good naming is the foundation of clean, maintainable code. By carefully naming classes, methods, and variables, I can make my module much easier for other developers to understand and use correctly.

# The longest method/function

```js
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
```


**1. Do One Thing**

The code above follows the **Do One Thing** rule, the only thing the method **setupSetWidthAndHeight** does is described in the name of the function, this function only handles the logic with setting the width and height of the canvas. 

  ```js
  /**
   * Draws a line to the current mouse position.
   *
   * @param {MouseEvent} event
   */
  draw (event) {
    const { offsetX, offsetY } = event

    this.canvasContext.strokeStyle = this.color

    this.canvasContext.lineTo(offsetX, offsetY)
    this.canvasContext.stroke()

    this.canvasContext.beginPath()
    this.canvasContext.moveTo(offsetX, offsetY)
  }
  ```
  
**2. Small Functions**

This method is short, but it currently mixes concerns, it both handles the mouse event and performs canvas drawing. According to **Chapter 3 of Clean Code**, each function should do one thing. Splitting this into helper methods such as startDrawing(event) and continueDrawing(event) would improve readability and maintainability for both the developer and the user.


  ```js
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
  ```
**3. Use descriptive names**

The code above follows the **Use descriptive names** rule, the method **swapTool** has a descriptive name, this function only handles the logic with the tool swapping. This method also handles the logic of hiding different elements that should not be available at a specific time. For example, this method removes the class **hidden** from the color swap section whenever the pen is active so that the use can swap the color of the pen.  


  ```js
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
  ```

  **4.Do One Thing**
  The method **setPenSize** follows the **Do One Thing** principle because it focuses solely on updating the data-size attributes of the pen size buttons. It does not handle event listeners, drawing logic, or any other part of the pen tool functionality. Its single responsibility is to ensure that each size button correctly reflects the size values passed in.

  ```js
    /**
     * Adds mouse events for drawing and erasing on the canvas.
     */
    #setupPenEvents () {
      this.#canvas.addEventListener('mousedown', e => this.#handleMouseDown(e))
      this.#canvas.addEventListener('mouseup', e => this.#handleMouseUp(e))
      this.#canvas.addEventListener('mousemove', e => this.#handleMouseMove(e))
    }
  ```

  **5. Avoid disinformation**
  For the method `#setupPenEvents` I tried my best to avoid disinformation by giving the private method a name that clearly indicates its purpose: setting up event listeners for pen interactions. The name accurately reflects what the method does and does not suggest that it handles drawing logic itself or other tool events. This ensures that anyone reading the code will understand its responsibility without being misled about its behavior or functionality.



## Reflection of what I learnt by reading chapter 3
While reading Chapter 3 of **Clean Code**, I gained a deeper understanding of the importance of writing small and focused functions that each do one thing. This chapter reinforced the idea that clarity and maintainability improve dramatically when functions are concise and responsibilities are clearly separated between functions. Even before getting into the boon **Clean code** I tried to seperate the concers between methods but I feel like it has gotten to another level after learning from the material in the book.

# Reflection on the code quality
During this assignment, I have learned that writing clean code is not just about making code work it is also about making it understandable and maintainable for other developers. 

The most important lesson from **Chapter 2 (Naming)** was that good names eliminate the need for comments. When I named my method `setColor`, I initially thought it was clear enough. But reflecting on it, `setPenColor` would have been even better since it explicitly states what is being colored. This small change makes a big difference in clarity.

From **Chapter 3 (Functions)**, the "Do One Thing" principle was eye-opening. I realized that several of my methods, like `swapTool()`, were trying to do multiple things. While the code works, splitting responsibilities would make it easier to test and modify in the future.

One area where I struggled was balancing abstraction with simplicity. I wanted to make the module flexible hence methods like `setPenColor()` and `setPenSize()`, but I also needed to keep the implementation simple enough for others to understand. I think I found a reasonable balance, though there is always room for improvement in the future.

I am looking forward to making an app that uses my module. I now understand that clean code is not about perfection it is about continuous improvement and clear communication through the entire workflow and proccess. Every name, every function, and every comment is a form of documentation that helps other developers including myself to understand the intent and meaning of the code.