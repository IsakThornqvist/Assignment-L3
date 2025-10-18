export const template = document.createElement('template')

template.innerHTML = `
<div id='drawingGameContainer'>
  <start-screen id='start-screen'> </start-screen>
  <my-board id="my-board" class='hidden'>
  <word-generator slot="rightOfCanvas" id="word-generator"></word-generator>
    <div id='gameInfo' slot='headerPanel'>
    <p id='displayRound'></p>
    <p id='currentDrawer'></p>
  </div>
    <div id='gameControls' slot='headerPanel'>
    <button id='nextRoundButton'> Next Player </button>
    <button id='backToStartScreenButton'> Back To Main Menu </button>
  </div>
</my-board>
  <player-manager id='player-manager'> </player-manager>
  <word-generator class='hidden' id='word-generator'> </word-generator>
  
</div>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #drawingGameContainer {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #424040ff 0%, #000000ff 100%);
    min-height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .hidden {
    display: none;
  }

  #gameInfo {
    background: white;
    border-radius: 12px;
    padding: 20px 40px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    display: flex;
    gap: 40px;
    align-items: center;
    margin-top: 10px;
  }

  #gameControls {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  #displayRound,
  #currentDrawer {
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
  }

  #displayRound {
    color: #e08b1bff;
  }

  #currentDrawer::before {
    content: '🎨 Current Drawer: ';
    color: #e08b1bff;
  }

  #nextRoundButton,
  #backToStartScreenButton {
    background: white;
    color: #e08b1bff;
    border: none;
    padding: 12px 30px;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  #nextRoundButton:hover,
  #backToStartScreenButton:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    background: #f8f9fa;
  }

  #nextRoundButton:active,
  #backToStartScreenButton:active {
    transform: translateY(0);
  }

  #backToStartScreenButton {
    background: #ff0000ff;
    color: white;
  }

  #backToStartScreenButton:hover {
    background: #b63c36ff;
  }
</style>
`
