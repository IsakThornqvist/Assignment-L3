export const template = document.createElement('template')

template.innerHTML = `
  <div id="playerManagerContainer"> 
    <h2>Player Manager</h2>
    <button id="addNewPlayerButton">Add new player</button>
    <div id='playerInputContainer'>
    <input id='playerInputField'> </input>
    </div>

    <div id='playerControls'> 
        <button id='removePlayerButton'> Remove Player </button>
        <button id='increaseScoreButton'> Increasee Score</button>
    </div>


    <ul id='playerList'>

    </ul>
    
  </div>




  <style>

  </style>
`
