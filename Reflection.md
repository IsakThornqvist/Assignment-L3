# Reflection during development
The first step in my work process was deciding what kind of application I wanted to create. At first, I was leaning toward making a football tactics board, but I eventually came up with an idea that I think is even better and more fun. I decided to use my canvas module to create a drawing game where players gather around one computer, draw random words, and the others have to guess what’s being drawn.

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
    
