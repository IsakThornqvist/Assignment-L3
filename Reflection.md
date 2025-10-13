# Reflection during development
The first step in my work process was deciding what kind of application I wanted to create. At first, I was leaning toward making a football tactics board, but I eventually came up with an idea that I think is even better and more fun. I decided to use my canvas module to create a drawing game where players gather around one computer, draw random words, and the others have to guess what’s being drawn.

The implementation of the wordGenerator was quite simple, I tried to follow the best practices by making all the methods private and the wordGenerator itself has no external needs it exists on its own and the component could easily be reused in another project or application. A late addition I did to the wordGenerator is that I added a wordList.js which I import in the wordGenerator.js and then I generate the words from this list. 

The **playerManager** is more complex than the wordGenerator, I started out with making the template for the component and set it all up so that the element was visible in the browser. I decided that you can play with up to 4 players and I handled the players in this way. Firstly I created a private empty array called **#currentPlayers** that I use to thore the current players. As I mentioned the array only allows 4 players to be added. Then I created a ul list which will be used to display these names and the scores next to them and so on. I also added in the ability to remove a player aswell as the ability to be able to increase the score of a player manually.

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

[4-6 sentences about how this chapter affected the code]



**Code Example:**



---

## Chapter 3: Functions

[4-6 sentences about how this chapter affected the code]


**Code Example:**


---

## Chapter 4: Comments

[4-6 sentences about how this chapter affected the code]


**Code Example:**


---

## Chapter 5: Formatting

[4-6 sentences about how this chapter affected the code]


**Code Example:**


---

## Chapter 6: Objects and Data Structures

[4-6 sentences about how this chapter affected the code]


**Code Example:**


---

## Chapter 7: Error Handling

[4-6 sentences about how this chapter affected the code]

**Code Example:**

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

[4-6 sentences about how this chapter affected the code]

**Code Example:**


---

## Chapter 11: Systems

[4-6 sentences about how this chapter affected the code]

**Code Example:**

---

## Conclusion


---