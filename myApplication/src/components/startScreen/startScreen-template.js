export const template = document.createElement('template')

template.innerHTML = `
  <div id="startScreenContainer"> 
    <h2 id='startScreenHeader'>Drawing Game</h2>
    <p id='startScreenText'>
      Welcome to the drawing game! You need a minimum of 2 and a maximum of 4 players to start the game.
    </p>
    <button id="startGameButton">Start Game</button>
  </div>

  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    #startScreenContainer {
      background: white;
      border-radius: 16px;
      padding: 40px;
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 25px;
      animation: fadeIn 0.6s ease-in-out;
    }

    #startScreenHeader {
      color: #e08b1bff;
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 10px;
    }

    #startScreenText {
      color: #000000ff;
      font-size: 1.1rem;
      line-height: 1.6;
      max-width: 500px;
    }

    #startGameButton {
      background: linear-gradient(135deg, #e08b1bff 0%, #ce2711ff 100%);
      color: white;
      border: none;
      padding: 14px 36px;
      border-radius: 10px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 14px rgba(228, 153, 15, 0.4);
    }

    #startGameButton:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(233, 151, 29, 0.5);
    }

    #startGameButton:active {
      transform: translateY(0);
      box-shadow: 0 3px 10px rgba(228, 139, 23, 0.4);
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
`
