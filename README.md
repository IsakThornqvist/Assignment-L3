# Drawing Game Application

## Features

1. Multiplayer Support: 2-4 players can compete in the same game
2. Turn-Based Gameplay: Automatic turn rotation with visual indicators
3. Score Tracking: Real-time score updates with automatic win detection
4. Word Generation: Random word prompts for each drawing round
5. Interactive Canvas: Full-featured drawing board with colors and pen sizes
6. Player Management: Add, remove, and manage players dynamically
7. Leaderboard System: Track scores throughout the game
8. Zero Dependencies: Pure vanilla JavaScript implementation

## Demo

gif here

## Access the application here

## Game Rules

1. Setup Phase:
- Add **2-4 players** using the player input field
- Press **"Start Game"** when ready

2. Gameplay:
- The current drawer sees a random word at the roght of the canvas
- The drawer should hover over the hidden word while the other players look away
- Draw the word using the canvas tools
- Other players try to guess what's being drawn
- Press "Next Player" to rotate turns

3. Scoring:
- Use the + and - buttons to adjust player scores
- Player gets a point for every correct guess
- First player to reach 4 points wins
- Scores reset after each game

4. Navigation:
- "Back to Main Menu" returns to the start screen
- Players are preserved when returning to menu but scores are cleared

## Components
### Drawing Game `(drawing-game)`
- Main application component that orchestrates game flow and manages child components.

#### Key Features:
- State management
- Turn rotation logic
- Win condition detection
- Component coordination

### Player Manager `(player-manager)`
- Handles player registration, score tracking, and leaderboard display.

#### Features:
- Add/remove players
- Score increment/decrement
- Automatic mode switching (add players ↔ leaderboard)
- Win event dispatching

### Word Generator `(word-generator)`
- Provides random word prompts for each drawing round.

#### Features:
- Random word selection
- Word reveal on hover
- "New Word" button for turn changes

### Start Screen `(start-screen)`
- Welcome screen with game instructions.

#### Features:
- Game description
- Player requirements information
- Start game trigger

### Drawing Board `(my-board)`
- Custom canvas component for drawing (L2 module).

#### Features:
- Pen tool with multiple colors
- Eraser tool
- Canvas size configuration
- Clear canvas functionality


### File Structure

### Clean Code Principles

### License

### Acknowledgments