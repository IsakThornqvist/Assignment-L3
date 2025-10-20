# Functional Requirements

## 1. Introduction 📘
This requirements specification describes the requirements and features that "Guess the Drawing" shall fulfill. The application aims to provide an entertaining drawing guessing game for groups of players sharing the same computer, where players take turns drawing random words while others guess, with manual score tracking.

## 2. Functional Requirements 🔧

| ID | Name | Description | Test | Priority | Dependencies | Status |
|---|---|---|---|---|---|---|
| 1 | Add Player | The user shall be able to add a player by entering a name. | Verify that a new player appears in the player list with score 0 | High | - | Implemented ✅ |
| 2 | Display Player List | The application shall display all active players with their names and current scores. | Verify that all added players are visible in the list | High | 1 | Implemented ✅ |
| 3 | Remove Player | The user shall be able to remove a player from the active game. | Verify that clicking remove deletes the player from the list | Medium | 1 | Implemented ✅ |
| 4 | Generate Random Word | The application shall generate a random word from a predefined word list. | Verify that a word is displayed when requested | High | - | Implemented ✅ |
| 5 | Hide Word by Default | The generated word shall be hidden/blurred by default to prevent guessers from seeing it. | Verify that the word is not readable when first displayed | High | 4 | Implemented ✅ |
| 6 | Reveal Word on Hover | The word shall become visible when the drawer hovers over the hidden word area. | Verify that hovering reveals the word clearly | High | 5 | Implemented ✅ |
| 7 | Increment Player Score | Each player shall have a + button that increases their score by 1 when clicked. | Verify that clicking + increases the score from 0 to 1, and continues incrementing | High | 2 | Implemented ✅ |
| 8 | Drawing Integration | The application shall integrate the canvas board module for drawing functionality. | Verify that pen, eraser, and color tools work as expected | High | - | Implemented ✅ |
| 9 | Clear Canvas | The user shall be able to clear the canvas between rounds. | Verify that clicking clear removes all drawings | High | 8 | Implemented ✅ |
| 10 | Next Round | The application shall provide a "Next Round" button to advance to the next player's turn. | Verify that the turn indicator moves to the next player and a new word is generated | High | 4, 11 | Implemented ✅ |
| 11 | Turn Indicator | The application shall display which player's turn it is to draw. | Verify that the current drawer is clearly indicated | High | 1 | Implemented ✅ |
| 12 | Round Counter | The application shall display the current round number. | Verify that the round number increases after all players have drawn | Medium | 10 | Implemented ✅ |
| 13 | New Game | The user shall be able to start a new game, resetting all scores to 0 and round to 1. | Verify that all scores reset and round counter resets to 1 | Medium | 2, 12 | Implemented ✅ |
| 14 | Player Limit | The application shall allow a maximum of 4 players per game. | Verify that attempting to add a 5th player does not add a player to the list | Low | 1 | Implemented ✅ |

## 3. Non-Functional Requirements 🌟

| ID | Name | Description | Test | Priority | Dependencies | Status |
|---|---|---|---|---|---|---|
| 15 | Intuitive UI | The interface shall be easy to understand without instructions. | User testing with first-time users | High | - | Implemented ✅ |
| 16 | Word Visibility | The hidden word shall be clearly distinguishable as interactive (hoverable). | Visual inspection of the hidden word element | Medium | 5 | Implemented ✅ |
| 17 | Performance | The application shall respond to user actions within 100ms. | Measure response time for button clicks and drawing | Medium | - | Implemented ✅ |
| 18 | Colorful Theme | The UI shall use vibrant, playful colors suitable for a game. | Visual inspection of color scheme | Low | - | Implemented ✅ |
| 19 | Error Handling | The application shall handle invalid inputs gracefully make the user experience smooth. | Test adding players past 4 | Medium | 1 | Implemented ✅ |