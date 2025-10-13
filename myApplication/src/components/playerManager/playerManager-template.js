export const template = document.createElement('template')

template.innerHTML = `
  <div id="playerManagerContainer"> 
    <h2>Player Manager</h2>
    <button id="addNewPlayerButton">Add new player</button>
    <div id='playerInputContainer'>
    <input id='playerInputField'> </input>
    </div>

    <div id='playerControls'> 
        <button id='removePlayerButton'> </button>
        <button id='increaseScoreButton'> </button>
    </div>

    // current score

    <ul id='playerList'>

    </ul>
    
  </div>




  <style>

  </style>
`
