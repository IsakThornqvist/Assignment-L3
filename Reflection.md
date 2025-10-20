# Reflection on Clean Code

**Author:** [Isak]  
**Course:** [1dv610]  

---

## Introduction

This reflection document examines how the principles from Robert C. Martin's "Clean Code" chapters 2-11 have influenced the development of my drawing game application (L3) and the underlying canvas board module (L2). Each chapter is analyzed in terms of its practical impact on my code, the challenges encountered, and the trade-offs made during implementation. The reflection aims to demonstrate understanding of Clean Code principles and their real-world application in object-oriented programming.

---

## Chapter 2: Meaningful Names
Chapter 2 is all about `meaningful names` and this is something that has had a big influnce in how I name my methods, variables etc. An axample of this in my code is the `#increasePlayerScore` method, at first I named the method `#increaseScore` but then I remembered that with just adding the small word of **player** in the method name the goes from being fairly good to  being really good and meaningful. Another good practise is to try to communicate the indent clearly so from only reading the method names you should be able to get a good understanding of what is going on and what responsibilities the method has. Overall enforcing this on my code made it easier to maintain because if something went wrong I sort of knew where to look.


**Code Example:**

```js
#handlePlayerNameSubmission() {
  const playerName = this.#playerNameInput.value.trim()
  if (!this.#validatePlayerName(playerName)) return

  this.#addPlayerToList(playerName)
  this.#playerNameInput.value = ''
  this.#showPlayerList()
}
```
The code above handles the `name submission` of the players and shows the list of the current players through the `  this.#showPlayerList()` call.



---

## Chapter 3: Functions
Chapter 3 is all about `functions` and how to design them, the thing that left the biggest mark on me from this chapter is the `single responsibility principle` by keeping the functions small and focused one one task. During development there was many times where I implemented a functionality and then went back to refactor the code and seperate the fuctionality between the different methods as much as possible. 

Another thing that gets brough up in chapter 3 is that you should keep the `number of arguments` to a minumal (0-2). The most ammount of arguments a method has in my code is currently one. So to sum it up, in general I had chapter 3 in mind during the entire development proccess and tried to follow the guidelines in it to the best of my ability.

**Code Example:**
```js
    #removePlayer (index) {
      this.#currentPlayers.splice(index, 1)
      this.#showPlayerList()
    }
```
The code above handles the `remove` functionality for the players, it is a small method that enforces the `single responsibility principle` and keeps the arguments to one and does not rely on other methods it only calls `this.#showPlayerList()` to display the list of current players.

---

## Chapter 4: Comments
I tried to shorten my comments and applied a simple principle I learned about from the book `explain why, not what`. All my comments do not currently follow this and I still have some work to do on my comments i ngeneral but I can already see an improvement in my comments. In an ideal world the code would be more `self documented` but I need to keep some comments for now because they help with understanding the code better. Reducing unneccessary comments help with cohesion and clarity for anyone who reads the code. 

**Code Example:**
```js
    /**
   * Sets up UI event listeners for the component.
   *
   * Attaches a click event handler to the "Generate Word" button,
   * which retrieves and displays a new random word each time it’s pressed.
   *
   * @private
   * @returns {void}
   */
    #setupWordEvents () {
      this.#generateWordButton.addEventListener('click', () => {
        console.log('generate word')
        const randomWord = this.#getRandomWord()
        this.#displayWord.textContent = randomWord
      })
    }
```
The code shows comments are used only when necessary, explaining why rather than what. A method name like `#getRandomWord()` are self-explanatory, following the Clean Code principle of self-documenting code. Minimal comments reduce clutter while JSDoc clarifies intent and side effects for maintainability.

---

## Chapter 5: Formatting
During development I consistently applied formatting best preactices to improve readability of the code. This includes `indentation, spacing, and grouping related operations visually`. Blank lines is used between logical sections to highlight separation of concerns. You may think formatting is just cosmetic, but it actually communicates levels of abstraction and guides the reader and his eyes through the logic of the application. I also used a `linter` which helped enforce consistency in the formatting of the code.

**Code Example:**
```js
    #decreasePlayerScore (index) {
      const currentPlayer = this.#currentPlayers[index]
      if (currentPlayer.score < 1) {
        console.log('Score cant be lower than 0')
      } else {
        currentPlayer.score = currentPlayer.score - 1
        this.#showPlayerList()
      }
    }
```
In this code I tried to `indent` the code to make it as easy as possible to read, the `linter` helps me with the indentaion and formation of the code.

---

## Chapter 6: Objects and Data Structures
I tried to structure each player as an object with properties name and score instead of two arrays. This helps with the `data encapsulation` principle and nicely captures a object-oriented design. If you want to access the player array you do so via private methods, supporting `information hiding`. This structure improves maintainability, and reduces coupling between data representation and the UI logic.


**Code Example:**
```js
#currentPlayers.push({ name: playerName, score: 0 })
```
In the code above I show an example of my code where I use the object and basically add a player to the list of players.

---

## Chapter 7: Error Handling
I tried to apply `defensive programming` concepts for invalid or wrong inputs, such as empty names or not allowed player limits. My error handling is predictable, and does not silently fail. Following this principle makes debugging easier. For example, validation occurs before mutating state, which aligns with Clean Code’s recommendation to `return early and fail fast`. I also broke out the validations to its own method whereever possible.

**Code Example:**
```js
    /**
     * Validates player name.
     *
     * @private
     * @param {string} playerName
     * @returns {boolean}
     */
    #validatePlayerName (playerName) {
      if (!playerName) return false
      if (this.#currentPlayers.length >= 4) {
        console.log('Max 4 players allowed')
        return false
      }
      return true
    }
```
Here we see an example of me using a `validation method` to validate the player name. I then call for this method in my `  #handlePlayerNameSubmission ()` method instead of putting the validation itself in the submission method.

---

## Chapter 8: Boundaries
Chapter 8 discusses managing boundaries between modules, libraries, and external systems. In my project, I applied this principle by keeping the canvas board module `independent` from the game logic. For example, the drawing functionality (L2) does not know anything about players or rounds, it only exposes a clear API for actions like `setPenColor(), clearCanvas(), and setCanvasSize()`. The game logic (L3) then interacts with this module through those defined boundaries, not by directly manipulating its internal state.
This separation made it easier to reuse and test components independently, and it reflects the Clean Code recommendation of `"protecting boundaries"` through okay defined interfaces.

**Code Example:**
```js
    #canvasConfig () {
      this.#board.setCanvasSize(700, 500)

      this.#board.setPenColor(
        'black', 'white', 'violet', 'yellow', 'lime',
        'green', 'blue', 'blueviolet', 'brown', 'grey',
        'orange', 'red'
      )

      this.#board.setCanvasColor(
        'white', 'black', 'grey', 'green', 'blue',
        'red', 'yellow', 'limegreen'
      )

      this.#board.setPenSize(3, 6, 10)
    }
```


---

## Chapter 9: Unit Tests
For this project, I decided not to implement automated unit tests, and instead focused on creating a good set of manual test cases. My reasoning for this is that the manual tests I developed effectively cover all the critical areas of the application, including functionality, user interactions, and visual elements.

While I did not automate these tests, I aimed to maintain the same level of structure typically found in unit testing. I followed the `F.I.R.S.T.` principles by ensuring that my manual tests are Fast, Independent, Repeatable, Self-Validating, and Timely. This helped me design clear and repeatable manual procedures that verify expected behaviors without relying on complex tooling.

I recognize that automated unit tests offer advantages such as speed, repeatability, and integration into CI/CD pipelines and automatic deployment. However, for this project, my focus was on verifying the overall structure and functionality of the drawing-game custom element. In this context, I found that manual testing provided sufficient coverage and allowed for more flexibility in evaluating the visual and interactive aspects of the application.

In the future, I may consider adding basic structural unit tests, similar to those used in the L2 module to automatically verify that all required elements are present within the drawing-game component. This would complement the manual testing process and help ensure that future changes do not inadvertently break the application’s core structure.

---

## Chapter 10: Classes
The class design principles guided how I structured `PlayerManager` and `WordGenerator`. Each class has a `single responsibility` and exposes a minimal public API while hiding implementation details. This ensures `high cohesion and encapsulation, reduces side effects`, and makes it easier for other developers to extend functionality without breaking existing behavior. `Private properties` (#) are used to reinforce these boundaries.

**Code Example:**
```js
class extends HTMLElement {
  #playerNameInput
  #playerList
  #currentPlayers = []
  #isGameMode = false

  getCurrentPlayers () {
    return this.#currentPlayers
  }

  resetScores () {
    this.#currentPlayers.forEach(player => {
      player.score = 0
    })
    this.#showPlayerList()
  }
}
```
The `playerManager`class uses private fields to hide internal state and only exposes necessary public methods like getCurrentPlayers() and resetScores(). This encapsulation ensures that other parts of the application can not accidentally corrupt or ruin the player data, following the principle of information `hiding`.

---

## Chapter 11: Systems
Chapter 11 focuses on building clean systems through separation of concerns, modularity, and clear startup processes. I applied this by treating my application as a composition of smaller subsystems/customElements: StartScreen, PlayerManager, WordGenerator, and Board. Each one can be developed and tested independently, and DrawingGame acts as the system coordinator that ties it all together.
This modular system design allowed me to reason about the application at a higher level. When a bug occurred, I could usually trace it to a specific component without affecting the rest of the system. This also aligns with Clean Code’s idea that `emergent design` arises from good and well-organized modules and clean boundaries throughout the code.

**Code Example:**
```js
#setupStartGameEvent() {
  this.#startScreen.addEventListener('startGame', () => {
    this.#handleStartGame()
  })
}
```

---

## Conclusion
Throughout this project, applying Clean Code principles has made a noticeable difference in how I structure and reason about code. The focus on meaningful names, small functions, and strong boundaries improved readability and maintainability. While my code is not perfect, it is far cleaner, easier to debug, and more modular than before.
The process also taught me to think more about why I write code in certain ways, not just how. Going forward, I plan to continue refining my code using these principles, especially around testing and reducing dependencies to build even more robust and modular systems.

---