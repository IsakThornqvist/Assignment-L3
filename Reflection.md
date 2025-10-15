# Reflection during development
The first step in my work process was deciding what kind of application I wanted to create. At first, I was leaning toward making a football tactics board, but I eventually came up with an idea that I think is even better and more fun. I decided to use my canvas module to create a drawing game where players gather around one computer, draw random words, and the others have to guess what’s being drawn.

The implementation of the wordGenerator was quite simple, I tried to follow the best practices by making all the methods private and the wordGenerator itself has no external needs it exists on its own and the component could easily be reused in another project or application. A late addition I did to the wordGenerator is that I added a wordList.js which I import in the wordGenerator.js and then I generate the words from this list. 

The **playerManager** is more complex than the wordGenerator, I started out with making the template for the component and set it all up so that the element was visible in the browser. I decided that you can play with up to 4 players and I handled the players in this way. Firstly I created a private empty array called **#currentPlayers** that I use to thore the current players. As I mentioned the array only allows 4 players to be added. Then I created a ul list which will be used to display these names and the scores next to them and so on. I also added in the ability to remove a player aswell as the ability to be able to increase the score of a player manually.

After setting up the individual components, I decided to create a drawingGame component to bring everything together. This made the old GameController unnecessary, since now the game logic could live directly inside this one element. I used the shadow DOM to encapsulate everything and imported the playerManager, wordGenerator, startScreen, and the canvas board. Having all the elements inside the same component made it much easier to manage the game flow and keep things organized and I am also more familiar with this way of working.

One tricky part was getting the board to initialize correctly. Since it is a custom element, I had to make sure its methods like setCanvasSize and setPenColor were ready when I called them. To handle this, I used a small setTimeout to delay the setup slightly, which made everything work reliably.

I also added the start screen functionality, so that the start screen hides and the board and word generator show when the game begins. I created private methods like #setupStartGameEvent and #handleStartGame to manage this transition cleanly. I also left placeholders for ending the game and going back to the start screen, knowing I can fill those in later when the round and scoring logic is ready.

Overall, moving the game logic into drawingGame.js felt like a big step forward. It made communication between components simpler, kept the code more modular, and let me really take advantage of private fields and methods to keep things encapsulated. I feel like this approach will make it easier to expand the game later without things getting messy.



# Notes to self - Workflow
1. Get new sections to show up in interface
2. Word generator component
    - getRandomWord() returns random word
    - Array of 15 words to start with
    - wordGenerator.js
    - Hidden word container
    - New word button
    - **Test: Click "New Word" → word appears hidden → hover reveals it**
3. Player management
    - player-manager.js
    - Array to store players
    - addPlayer(name)
    - removePlayer(id)
    - getAllPlayers()
    - HTML template for player name, score, remove buttons
    - textinput for player name, add player button
    - Display players in list
    - **Test: Add 3-4 players → all appear in list → remove one → it disappears**
4. Score tracking
    - Add score property to each player (default 0)
    - Add + button next to each player in UI
    - incrementScore(playerId) method in PlayerManager
    - Update display when score changes
    - **Test: Click + button → score increases from 0 to 1 to 2, etc.**
5. Game flow / Turn management
    - game-controller.js
    - Property for current player index
    - Property for round number
    - nextTurn() to advance to next player
    - getCurrentPlayer()
    - Visual indicator (highlight) for whose turn it is
    - Display round number in UI
    - "Next Round" button
    - Connect button to advance turn and generate new word
    - **Test: Player 1 highlighted → Click "Next Round" → Player 2 highlighted, new word appears**
6. Additional features & polish
    - "New Game" button (resets scores, round, canvas, turn)
    - Player limit (max 8 players)
    - Validation (no empty names, no duplicate names)
    - Make "Clear Canvas" button prominent
    - Round cycling (after last player → back to first)
    - **Test: Complete full round with 3 players → turn cycles back to Player 1**
7. Integration testing & UX
    - Test complete game flow with 4 players
    - Test edge cases (empty name, removing player during turn, new game mid-round)
    - Improve visual design (colors, spacing, fonts)
    - Add hover effects to buttons
    - Make hidden word area obvious ("Hover to reveal" text)
    - **Test: Have friends play and observe any confusion**
8. Documentation & deployment
    - README.md (vision, how to run, how to play, screenshots)
    - Test case table
    - Update functional requirements status
    - reflection.md (Clean Code chapters 2-11 with code screenshots)
    - Deploy to public URL
    - Test deployed version
    

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
In this code I tried to `indent` the code to make it as easy as possible to read, the `linter` helps me with the indentaion and foramtion of the code.

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

[4-6 sentences about how this chapter affected the code]

**Code Example:**


---

## Chapter 9: Unit Tests

[4-6 sentences about how this chapter affected the code]

**Code Example:**


---

## Chapter 10: Classes
The class design principles guided how I structured `PlayerManager` and `WordGenerator`. Each class has a `single responsibility` and exposes a minimal public API while hiding implementation details. This ensures `high cohesion and encapsulation, reduces side effects`, and makes it easier for other developers to extend functionality without breaking existing behavior. `Private properties` (#) are used to reinforce these boundaries.

**Code Example:**


---

## Chapter 11: Systems

[4-6 sentences about how this chapter affected the code]

**Code Example:**

---

## Conclusion


---