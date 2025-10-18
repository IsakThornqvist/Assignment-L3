export const template = document.createElement('template')

template.innerHTML = `
  <div id="playerManagerContainer"> 
    <h2 id='playerManagerHeader'>Add Players!</h2>
    <h2 id='scoreHeader' class='hidden'>Leaderboard</h2>
    <div id='playerInputContainer'>
    <input id='playerInputField' placeholder="Input Player Names"> </input>
    </div>



    <ul id='playerList'>

    </ul>
    
  </div>




 <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    .hidden {
      display: none;
    }

    #playerManagerContainer {
      background: white;
      border-radius: 16px;
      padding: 25px;
      width: 100%;
      max-width: 400px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    h2 {
      color: #e08b1bff;
      font-size: 1.8rem;
      margin-bottom: 20px;
      text-align: center;
      font-weight: 700;
    }

    #playerInputContainer {
      display: flex;
      gap: 10px;
      margin-bottom: 25px;
    }

    #playerInputField {
      flex: 1;
      padding: 12px 16px;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      font-size: 1rem;
      transition: all 0.3s ease;
      outline: none;
    }

    #playerInputField:focus {
      border-color: #e08b1bff;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    #addNewPlayerButton {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      white-space: nowrap;
    }

    #addNewPlayerButton:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    }

    #addNewPlayerButton:active {
      transform: translateY(0);
    }

    #playerList {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    #playerList li {
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
      padding: 16px 20px;
      border-radius: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.1rem;
      font-weight: 600;
      color: #333;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
    }

    #playerList li:hover {
      transform: translateX(5px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    }

    #playerList button {
      background: #e08b1bff;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      margin-left: 8px;
      transition: all 0.2s ease;
      font-size: 0.9rem;
    }

    #playerList button:hover {
      transform: scale(1.05);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }

    #playerList button:first-of-type {
      background: #ff0000ff;
    }

    #playerList button:first-of-type:hover {
      background: #ee5a52;
    }

    #playerList button:nth-of-type(2) {
      background: #51cf66;
    }

    #playerList button:nth-of-type(2):hover {
      background: #40c057;
    }

    #playerList button:nth-of-type(3) {
      background: #ffa94d;
    }

    #playerList button:nth-of-type(3):hover {
      background: #ff922b;
    }
  </style>
`
