export const template = document.createElement('template')

template.innerHTML = `
<div id='drawingGameContainer'> 

<start-screen id='start-screen'> </start-screen>
<player-manager id='player-manager'> </player-manager>
<word-generator class='hidden' id='word-generator'> </word-generator>
<my-board class='hidden' id='my-board'> </my-board>

<button id='nextRoundButton'> Next Player </button>
<button id='backTStartScreenButton'> Back To Main Menu </button>

</div>
<style>

.hidden {
    display: none;
}

</style>

`
