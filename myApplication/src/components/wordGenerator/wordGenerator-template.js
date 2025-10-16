export const template = document.createElement('template')

template.innerHTML = `
  <div id="wordGeneratorContainer"> 
    <h2>Word Generator</h2>
    <button id="generateWordButton">Generate Word</button>
    <div id='wordDiv'>
    <p id="displayWord"></p>
    </div>
  </div>




  <style>
    #wordGeneratorContainer {
      font-family: system-ui, sans-serif;
      background: #f8f9fa;
      border: 2px solid #ddd;
      border-radius: 12px;
      padding: 20px;
      width: 250px;
      text-align: center;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      transition: box-shadow 0.3s ease;
    }

    #wordGeneratorContainer:hover {
      box-shadow: 0 6px 14px rgba(0,0,0,0.15);
    }

    #generateWordButton {
      background-color: #e08b1bff;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1rem;
      transition: background-color 0.2s ease;
    }

    #generateWordButton:hover {
      background-color: #b68039ff;
    }

    #wordDiv {
      margin-top: 15px;
      padding: 10px;
      border-radius: 8px;
      background: #ffffff;
      border: 1px solid #ddd;
      transition: background-color 0.3s ease;
    }

    #displayWord {
      color: transparent;
      user-select: none;
      transition: color 0.3s ease;
    }

    #wordDiv:hover #displayWord {
      color: #333;
    }
  </style>
`
