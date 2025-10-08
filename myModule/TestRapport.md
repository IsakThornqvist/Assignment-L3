# Documentation for the test-cases

| Test | Type of test | Status | Description | Comment |
|------|--------------|--------|-------------|---------|
| **TC1** | Unit test (jest) | √ | Checks if the custom element `my-board` has a canvas element. | First test to verify Jest and Babel config works, and to ensure `my-board` contains the correct elements. |
| **TC2** | Unit test (jest) | √ | Checks if the custom element `my-board` has the toolbar. | Similar to **TC1**, but checks for the div with id `toolBar` instead of the canvas. |
| **TC3** | Manual test | √ | Makes sure that the eraser clears the pixels off the canvas. | This is a manual test case that you test by following the instructions below at the **Test Specification for Manual test cases**. |
| **TC4** | Manual test | √ | Makes sure that the user can change the size of the board via two input fields. | This is a manual test case that you can test by following the instructions below at the **Test Specification for Manual test cases** section. |
| **TC5** | Manual test | √ | Test the pen tool draws lines on the canvas | Draw with different colors and sizes. Check if the stroke appears correctly. |
| **TC6** | Manual test | √ | Tests changing pen color. | Click color buttons in the toolbar, draw lines, verify the stroke color matches selected color. |
| **TC7** | Manual test | √ | Tests changing pen size. | Click size buttons in the pen controls, draw lines, verify line thickness updates accordingly. |
| **TC8** | Manual test | √ | Tests clearing the canvas using the "Clear Canvas" button. | Draw on canvas, click "Clear Canvas", verify all content is removed. |
| **TC9** | Manual test | √ | Tests tool switching via toolbar buttons. | Click Pen → Eraser, verify toolbar highlights the active tool and behavior matches selection. |
| **TC10** | Manual test | √ | Tests programmatic canvas resizing using setCanvasSize. | Call **board.setCanvasSize(600,400)** in code, verify canvas width and height update correctly. |
| **TC11** | Manual test | √ | Tests programmatic pen color changes using setPenColor. | Call board.setPenColor(...colors), verify color buttons update and drawing uses new colors. |
| **TC12** | Manual test | √ | Tests programmatic pen size changes using setPenSize. | Call board.setPenSize(2,5,10), verify size buttons update and drawing uses correct thickness. |
| **TC13** | Manual test | √ | Tests programmatic canvas color changes using setCanvasColor. | Call board.setCancasColor(...colors), and verify that you correctly can choose the set of colors that you want to be able to swap the canvas between. |
| **TC14** | Manual test | √ | Test the height and width input fields and makes sure that the data you input and submit in the field is valid. | In the interface of the custom canvas element navigate to the height and width change section on the right of the canvas and follow the instructions bellow. |
| **TC15** | Unit test (jest) | √ | Checks if the custom element `my-board` has a toolBar. | Makes sure the customelement structure is correct and that the elements that are needed exist. |
| **TC16** | Unit test (jest) | √ | Checks if the custom element `my-board` has a height and width change container. | Makes sure the customelement structure is correct and that the elements that are needed exist. |
| **TC17** | Unit test (jest) | √ | Checks if the custom element `my-board` has the canvasColorPicker. | Makes sure the customelement structure is correct and that the elements that are needed exist. |
| **TC18** | Unit test (jest) | √ | Checks if the custom element `my-board` has the penControls section. | Makes sure the customelement structure is correct and that the elements that are needed exist. |
| **TC19** | Unit test (jest) | √ | Checks if the custom element `my-board` has the clear canvas button. | Makes sure the customelement structure is correct and that the elements that are needed exist. |



## Test Specification for Manual test cases

### TC3 Test the Eraser tool
**Use Case:** Remove pixels from the canvas using the eraser tool

**Scenario:** Erase a painted area successfully

**Test Steps:**
1. Select the **pen tool** from the toolbar.
2. Pick any color and paint a square on the canvas.
3. Switch to the **eraser tool** and attempt to erase the square you just painted.

**Expected Results:**
1. The pixels of the square should be removed.  
2. No trace of the square should remain visible.

### TC4 Test the size input fields
**Use Case:** Change the size of the canvas through the input fields in the component

**Scenario:** Swap size successfully

**Test Steps:**
1. At the right side of the component locate the **canvas size** section
2. Input 600 width and 800 height
3. Click the **set** button for both fields

**Expected Results:**
1. The canvas should now change size  
2. The canvas should be cleared
3. You should clearly be able to see that the height is more that the width

### TC5 Test the penTool
**Use Case:** Draw pixelson the canvas using the **penTool**

**Scenario:** Paint the canvas successfully

**Test Steps:**
1. Select the **pen tool** from the toolbar.
2. Pick any color and size and paint anything you want on the canvas.

**Expected Results:**
1. The pen should be able to draw on the canvas.

### TC6 Test swapping colors
**Use Case:** Swap the color of the **penTool**

**Scenario:** Color swap worked as expected

**Test Steps:**
1. Select the **pen tool** from the toolbar.
2. Pick a color of you choice
3. Draw a few lines on the canvas
4. Swap to a diffrent color in the color section of the interface
5. Draw some more lines and verify that both set of lines are the correct and diffrent colors

**Expected Results:**
1. The penTool should be able to change colors

### TC7 Test changing pen size
**Use Case:** Change the size of the **penTool**

**Scenario:** Size of the pen changes

**Test Steps:**
1. Select the **pen tool** from the toolbar.
2. The small size in the pen size section
3. Draw a few lines on the left canvas
4. Swap to the medium pen size
5. With the medium pen draw a few lines in the middle of the canvas
6. Swap to the big pen size
7. With the big pen draw a few lines on the right of the canvas

**Expected Results:**
1. You should see three set of lines
2. The left most lines should be the smallest
3. The middle lines should be bigger than the left most lines but smaller that the lines on the right

### TC8 Test the Clear Canvas button
**Use Case:** Clearing the canvas via the **Clear Canvas** button

**Scenario:** Clear paint of the canvas using the Clear Canvas button

**Test Steps:**
1. Select the **pen tool** from the toolbar.
2. Draw a circle in the middle of the canvas
3. At the top left locate a red **Clear Canvas** button
4. Click the button

**Expected Results:**
1. When the **Clear Canvas** button is clicked the circle you drew earlier should be removed and the entire canvas should be cleared

### TC9 Test tool switching
**Use Case:** Swap between pen and eraser tools using the toolbar

**Scenario:** Switch tools successfully

**Test Steps:**
1. Select the pen tool from the toolbar.
2. Draw some lines on the canvas.
3. Switch to the eraser tool from the toolbar.
4. Attempt to erase parts of the previously drawn lines.
5. Switch back to the pen tool and continue drawing.

**Expected Results:**
1. Toolbar highlights the active tool correctly.
2. Pen tool draws lines as expected.
3. Eraser tool removes pixels correctly.
4. Switching tools does not break the functionality.

### TC10 Test programmatic canvas resizing
**Use Case:** Resize the canvas via `setCanvasSize`

**Scenario:** Programmatic resizing works

**Test Steps:**
1. Call in in the index.js call:
   ```js
   board.setCanvasSize(600, 400)
   ```

2. Watch the canvas change size

**Expected Results:**
1. Canvas width is 600px
2. Canvas height is 400px
3. Canvas is cleared after resizing

### TC11 Test programmatic pen color changes
**Use Case:** Change pen colors via `setPenColor`

**Scenario:** Colors are updated programmatically

**Test Steps:**
1. Call in the index.js or console:
   ```js
   board.setPenColor('red', 'green', 'blue')
   ```

2. Activate the pen by clicking the **pen**

**Expected Results:**
1. Once only 3 colors is set the first 3 colors from the right should be red, green, blue in that order
2. The rest of the colors should be white boxes to indicate that no color is set for them yet

### TC12 Test programmatic pen size changes
**Use Case:** Change pen sizes via `setPenSize`

**Scenario:** Sizes are updated programmatically

**Test Steps:**
1. Call in the index.js or console:
   ```js
   board.setPenSize(2, 5, 10)

2. Observe the pen size buttons in the interface.
3. Draw on the canvas using each size.

**Expected Results:**
1. Size buttons reflect the new values.
2. Drawing uses the correct thickness for each size.

### TC13 Test programmatic canvas color changes
**Use Case:** Change canvas colors via `setCanvasColor`

**Scenario:** Color choices for the canvas are updated programmatically

**Test Steps:**
1. Call in the index.js or console:
   ```js
   board.setCanvasColor('white', 'green', 'blue')
   ```

2. Click the green button on the right of the canvas under the **canvas color** label and make sure the canvas changes to green
3. Click the blue followed by the white canvas button and observe the color changing


**Expected Results:**
1. Once only 3 colors is set the first 3 colors from the right should be white, green and blue in that order
2. The rest of the colors should be white boxes to indicate that no color is set for them yet
3. When clicking one of the three colors you set the canvas should swap to that color

### TC14 Test input field input
**Use Case:** You should not be able to input anyithing other than a number into the input fields

**Scenario:** Strings not allowed

**Test Steps:**
1. Under the canvas size header on the right side of the compoenent you should eb able to see two input fields one for width and one for height
2. In the width input field input hello and in the height input field input world
3. Click the set button for both

**Expected Results:**
1. Size should not change because the input was not a number



# What has been tested?
The first thing that I tested was the structure of the customelement **my-board**. I have unit tests that basically checks that the customelement has the correct structure. This was the first thing that I tested because I wanted to make sure that my jest and babel configration was working.

### Unit tests ###

The first unit tests (TC1-TC2, TC15-TC19) helped ensure that the basic structure of the component was correct. This was important to validate before performing more functional tests. It confirmed that all required DOM elements existed and were accessible.

### Manual tests ###
Manual tests such as TC3-TC14 highlighted the importance of user interaction. Testing the pen, eraser, color picker, and size inputs gave a realistic sense of how the module would behave for end users. Some challenges included:

1. Ensuring that programmatic changes like **setPenColor** correctly updated the interface.

2. Verifying that invalid input for example typing text in numeric fields was properly handled.

### Improvements and overall learning ###
Testing the **my-board** custom element provided important and valuable insights into both component design and user interaction with the module. Unit tests confirmed the structure and existence of all necessary elements, while manual tests allowed verification of the actual functionality, such as drawing, erasing, and programmatic changes to pen and canvas properties and attributes. This process highlighted the importance of input validation, correct and smooth UI behavior, and exposing clear methods for programmatic control for any uses rof the module. Overall, the project reinforced best practices for developing robust web components and combining automated and manual testing to ensure reliability and usability. I do feel like I could have made more use of the unit tests, for this project I mostly used the unit tests as a way to make sure that the structure of the customelement is correct. I do feel like some more unit tests like a input check for the input fields or something like that could have been a good idea.