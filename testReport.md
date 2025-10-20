# Testreport

| Test | Type of test | Status | Requirement (FR) | Description | Comment |
|------|---------------|--------|------------------|-------------|----------|
| **TC1** | Manual test | √ | FR1 | Add a player through the input field and confirm they appear in the player list with score 0. | Confirms **Add Player** functionality from UI perspective. |
| **TC2** | Manual test | √ | FR3 | Remove a player using the “Remove” button beside their name. | Tests **Remove Player** and ensures DOM updates correctly. |
| **TC3** | Manual test | √ | FR7 | Increase a player's score using the “+” button. | Verifies **Increment Player Score** updates both DOM and data model. |
| **TC4** | Manual test | √ | FR2 | Display player list and verify names and scores are visible and updated. | Confirms **Display Player List** functionality. |
| **TC5** | Manual test | √ | FR4, FR5, FR6 | Generate a random word and check that it displays hidden (blurred). | Tests **Generate Random Word** and **Hide Word by Default**. |
| **TC6** | Manual test | √ | FR8 | Draw a figure on the canvas and verify drawing tools work. | Tests **Drawing Integration** by ensuring pen, eraser, and colors work together with canvas module. |
| **TC7** | Manual test | √ | FR9 | Click the **Clear Canvas** button and verify all drawings disappear. | Tests **Clear Canvas** and integration with canvas API. |
| **TC8** | Manual test | √ | FR10, FR11 | Click **Next Round** and verify that the next player’s turn is displayed and a new word is generated. | Tests **Next Round** and **Turn Indicator**. |
| **TC9** | Manual test | √ | FR12 | Complete one full cycle where all players have drawn, verify round counter increases. | Tests **Round Counter** logic. |
| **TC10** | Manual test | √ | FR13 | Click **New Game** and verify all scores reset to 0 and round resets to 1. | Tests **New Game**. |
| **TC11** | Manual test | √ | FR14, NFR19 | Attempt to add more than 4 players. | Tests **Player Limit** and **Error Handling**. |
| **TC12** | Manual (UI) test | √ | NFR15 | Observe the UI and confirm the layout is intuitive and self-explanatory. | Tests **Intuitive UI** by visual inspection. |
| **TC13** | Manual (UI) test | √ | NFR16 | Verify hidden word visually looks interactive (e.g., blurred but hoverable). | Tests **Word Visibility**. |
| **TC14** | Manual (Performance) test | √ | NFR17 | Click buttons (add player, next round, clear) and measure visual response delay. | Confirms **Performance** under 100ms interaction time. |

---

## Test Specification for Manual Test Cases

### TC1 — Add Player  
**Requirement:** FR1  
**Use Case:** Add a new player through the player input field.  
**Scenario:** Successfully add a new player with a starting score of 0.  
**Test Steps:**  
1. Locate the player input field in the Player Manager panel.  
2. Type in the name Bob  
3. Press Enter
4. Now enter Karl into the field and press enter 

**Expected Results:**  
1. A new player with name "Bob" appears in the player list.  
2. A new player with name "Karl" appears in the player list.  
3. The player’s initial score is `0`.  

---

### TC2 — Remove Player  
**Requirement:** FR3  
**Use Case:** Remove a player from the game.  
**Scenario:** Successfully delete a player from the list.  
**Test Steps:**  
1. Add at least one player.  
2. Click the **Remove** button beside their name.  

**Expected Results:**  
1. Player is removed from both UI and internal data array.  

---

### TC3 — Increment Player Score  
**Requirement:** FR7  
**Use Case:** Increase a player’s score by 1.  
**Scenario:** Successfully increment the score.  
**Test Steps:**  
1. Add a player.  
2. Click the **+** button beside the player’s name multiple times.  

**Expected Results:**  
1. Player’s score increases each time (+1 per click).
2. Win meesage is shown once a player gets 4 points.  

---

### TC4 — Display Player List  
**Requirement:** FR2  
**Use Case:** View player names and scores.  
**Scenario:** Displayed correctly after adding/removing players.  
**Test Steps:**  
1. Locate the player input field in the Player Manager panel.  
2. Type in the name Bob  
3. Press Enter
4. Now enter Karl into the field and press enter 
5. Now click the delete button next to Bob 
6. Add a new player named Kalle

**Expected Results:**  
1. Players should be added to the list
2. The remove button next to bob should remove bob from the lst
3. In the end you should have karl at the top of the list and kalle under karl in the list

---

### TC5 — Generate Random Word  
**Requirement:** FR4, FR5, FR6  
**Use Case:** Generate a word for the drawer.  
**Scenario:** Word appears hidden by default.  
**Test Steps:**  
1. Add 2 players of your choice via the input field under the add players header
2. Once two players are added click the start game button
3. Now the game is active and you can see the word generator to the right of the canvas
4. Hover over the blurred word and make sure you can read it
5. Click the back to main menu button

**Expected Results:**
1. Random word is generated
2. Word appears and is hidden until you mouse over it


---

### TC6 — Drawing Integration  
**Requirement:** FR8  
**Use Case:** Draw using integrated canvas tools.  
**Scenario:** Drawing behaves as expected.  
**Test Steps:**  
1. Add 2 players of your choice via the input field under the add players header
2. Once two players are added click the start game button
3. Now at the left side of the canvas you see the tools section
4. Click on the pen and choose a color of your choice
5. Draw a square on the canvas
6. Now select the eraser under the pen and attempt to erase the square

**Expected Results:**  
1. Pen and eraser both function correctly within the game interface.

---

### TC7 — Clear Canvas  
**Requirement:** FR9  
**Use Case:** Clear the entire drawing area.  
**Scenario:** Successfully clear all drawings.  
**Test Steps:**  
1. Add 2 players of your choice via the input field under the add players header
2. Once two players are added click the start game button
3. Now at the left side of the canvas you see the tools section
4. Click on the pen and choose a color of your choice
5. Draw a square on the canvas
6. Top right oif the canvas locate the clear canvas button and click it

**Expected Results:**  
1. All drawings are erased immediately.  

---

### TC8 — Next Round  
**Requirement:** FR10, FR11  
**Use Case:** Move to the next player’s turn.  
**Scenario:** Turn and word update correctly.  
**Test Steps:**  
1. Add 2 players of your choice via the input field under the add players header
2. Once two players are added click the start game button
3. Over the drawing area (canvas) click the next player button

**Expected Results:**  
1. The next player’s name is highlighted as current drawer.  
2. A new word is generated automatically.  

---

### TC9 — Round Counter  
**Requirement:** FR12  
**Use Case:** Track completed rounds.  
**Scenario:** Round counter increases after each cycle.  
**Test Steps:**  
1. Add 2 players of your choice via the input field under the add players header
2. Once two players are added click the start game button
3. Over the drawing area (canvas) click the next player button two times

**Expected Results:**  
1. Round counter increases to 2.  

---

### TC10 — New Game  
**Requirement:** FR13  
**Use Case:** Reset all scores and rounds.  
**Scenario:** Successfully start over.  
**Test Steps:**  
1. Add 2 players of your choice via the input field under the add players header
2. Once two players are added click the start game button
3. Increase Karls score by one via the "+" button next to his name
4. Now click the red back to main menu button. 

**Expected Results:**  
1. All scores reset to 0 once back to main menu button is clicked. 

---

### TC11 — Player Limit  
**Requirement:** FR14, NFR19  
**Use Case:** Restrict number of players.  
**Scenario:** Prevent adding a fifth player.  
**Test Steps:**  
1. Add four players.  
2. Attempt to add a fifth.  

**Expected Results:**  
1. Fifth player does **not** get added.  
2. Message popup shows “Max 4 players allowed.”  

---

### TC12 — Intuitive UI  
**Requirement:** NFR15  
**Use Case:** Assess visual clarity.  
**Scenario:** Check if UI is easy to navigate.  
**Test Steps:**  
1. Observe layout and controls. 

**Expected Results:**  
1. Controls are intuitive and labeled clearly.  

---

### TC13 — Word Visibility (UI)  
**Requirement:** NFR16  
**Use Case:** Check word hiding style.  
**Scenario:** Word appears blurred and interactive.  
**Test Steps:**  
1. Look at the word display area.  

**Expected Results:**  
1. Word looks blurred but changes on hover.  

---

### TC14 — Performance  
**Requirement:** NFR17  
**Use Case:** Measure interaction delay.  
**Scenario:** UI responds quickly.  
**Test Steps:**  
1. Click main buttons (Add Player, Next Round, Clear Canvas).  

**Expected Results:**  
1. Response time <100ms per action.  

---

## ✅ What Has Been Tested

The **Guess the Drawing** application was tested through **manual tests** (validating real user interactions).    

### Manual Tests  
Manual tests (**TC1–TC14**) focused on **functional and non-functional requirements**, validating that gameplay, UI, and performance aligned with the requirements document.  

### Improvements and Learnings  
Testing highlighted the benefits of **modular and clean code**, allowing each function to be verified independently. Manual testing also emphasized UX considerations like turn visibility and word clarity.  
Future improvements could include **automated UI testing** using tools like **Playwright** or **Jest DOM** to simulate user actions.  

Overall, this testing ensured **full requirement coverage** and traceability between design, implementation, and validation.
