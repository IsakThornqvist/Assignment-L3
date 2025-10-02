export const template = document.createElement('template')

template.innerHTML = `
<div id='boardContainer'>
    <div id='header'>
        <h1>The Board</h1>
        <button id='clearCanvasButton'>Clear Canvas</button>
    </div>

    <div id='mainContent'>
        <div id='toolBar'>
            <h2>Tools</h2>
            <button class='toolButton active' data-tool='none'>None</button>
            <button class='toolButton' data-tool='pen'>Pen</button>
            <button class='toolButton' data-tool='eraser'>Eraser</button>
<!--             <button class='toolButton' data-tool='shapes'>Shapes</button> -->

            <div id='penControls' class='hidden'>
                <h3>Pen Settings</h3>
                
                <label>Color</label>
                <div id='colorPicker'>
                    <button class='colorButton' data-color='black'></button>
                    <button class='colorButton' data-color='black'></button>
                    <button class='colorButton' data-color='black'></button>
                    <button class='colorButton' data-color='black'></button>
                    <button class='colorButton' data-color='black'></button>
                    <button class='colorButton' data-color='black'></button>
                    <button class='colorButton' data-color='black'></button>
                    <button class='colorButton' data-color='black'></button>
                    <button class='colorButton' data-color='black'></button>
                    <button class='colorButton' data-color='black'></button>
                    <button class='colorButton' data-color='black'></button>
                    <button class='colorButton' data-color='black'></button>
                </div>

                <label>Pen Size</label>
                <div id='penSizePicker'>
                    <button class='sizeButton' data-size='2'>Small</button>
                    <button class='sizeButton' data-size='5'>Medium</button>
                    <button class='sizeButton' data-size='10'>Large</button>
                </div>
            </div>
        </div>

        <div id='canvasContainer'>
            <canvas id="myCanvas" width="500" height="500"></canvas>
        </div>

        <div id='heightWidthChangeContainer'>
            <h3>Canvas Size</h3>
            <label>Width</label>
            <input id='widthInput' type='number' placeholder='500'>
            <button id='widthButton'>Set</button>
            
            <label>Height</label>
            <input id='heightInput' type='number' placeholder='500'>
            <button id='heightButton'>Set</button>

            <label>Canvas Color</label>
            <div id='canvasColorPicker'>
                    <button class='colorButton' data-color='white'></button>
                    <button class='colorButton' data-color='black'></button>
                    <button class='colorButton' data-color='black'></button>
                    <button class='colorButton' data-color='black'></button>
                    <button class='colorButton' data-color='black'></button>
                    <button class='colorButton' data-color='black'></button>
                    <button class='colorButton' data-color='black'></button>
                    <button class='colorButton' data-color='black'></button>
                    
                </div>

        </div>
    </div>
</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');


.hidden {
    display: none;
}

#boardContainer {
    background: white;
    padding: 24px;
    border-radius: 12px;
    font-family: 'Inter', sans-serif;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    max-width: 1400px;
    margin: 20px auto;
}

#header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 2px solid #e5e7eb;
}

#header h1 {
    font-size: 28px;
    margin: 0;
    color: #1e293b;
}

#clearCanvasButton {
    padding: 10px 20px;
    background: #ef4444;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}

#clearCanvasButton:hover {
    background: #dc2626;
}

#mainContent {
    display: grid;
    grid-template-columns: 200px 1fr 220px;
    gap: 24px;
}

#toolBar {
    background: #f8fafc;
    padding: 20px;
    border-radius: 12px;
}

#toolBar h2 {
    margin: 0 0 16px 0;
    font-size: 18px;
}

.toolButton {
    display: block;
    width: 100%;
    padding: 12px;
    margin-bottom: 8px;
    background: white;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
}

.toolButton:hover {
    border-color: #3b82f6;
    background: #eff6ff;
}

.toolButton.active {
    background: #2563eb;
    color: white;
    border-color: #2563eb;
}

#penControls {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #e2e8f0;
}

#penControls h3 {
    margin: 0 0 12px 0;
    font-size: 14px;
    text-transform: uppercase;
}

#penControls label {
    display: block;
    margin: 12px 0 8px 0;
    font-size: 12px;
    font-weight: 600;
    color: #64748b;
    text-transform: uppercase;
}

#colorPicker, #canvasColorPicker {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    margin-bottom: 16px;
}

.colorButton {
    width: 100%;
    aspect-ratio: 1;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
}

.colorButton:hover {
    border-color: #2563eb;
    transform: scale(1.1);
}

#penSizePicker {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.sizeButton {
    padding: 8px;
    background: white;
    border: 2px solid #e2e8f0;
    border-radius: 6px;
    cursor: pointer;
}

.sizeButton.active {
    background: #2563eb;
    color: white;
    border-color: #2563eb;
}

.sizeButton:hover {
    border-color: #3b82f6;
}

#canvasContainer {
    background: #f8fafc;
    padding: 20px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#myCanvas {
    border: 2px solid #cbd5e1;
    border-radius: 8px;
    background: white;
    cursor: crosshair;
}

#myCanvas:hover {
    border-color: #3b82f6;
}

#heightWidthChangeContainer {
    background: #f8fafc;
    padding: 20px;
    border-radius: 12px;
}

#heightWidthChangeContainer h3 {
    margin: 0 0 16px 0;
    font-size: 16px;
}

#heightWidthChangeContainer label {
    display: block;
    margin: 12px 0 6px 0;
    font-size: 12px;
    font-weight: 600;
    color: #64748b;
    text-transform: uppercase;
}

#widthInput, #heightInput {
    width: 100%;
    padding: 8px 12px;
    border: 2px solid #e2e8f0;
    border-radius: 6px;
    margin-bottom: 6px;
}

#widthInput:focus, #heightInput:focus {
    outline: none;
    border-color: #3b82f6;
}

#widthButton, #heightButton {
    width: 100%;
    padding: 8px 16px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin-bottom: 12px;
}

#widthButton:hover, #heightButton:hover {
    background: #1e40af;
}

@media (max-width: 900px) {
    #mainContent {
        grid-template-columns: 1fr;
    }
    
    #canvasContainer {
        order: 1;
    }
    
    #toolBar {
        order: 2;
    }
    
    #heightWidthChangeContainer {
        order: 3;
    }
}
</style>
`
