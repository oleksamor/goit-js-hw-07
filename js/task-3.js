const inputEl = document.querySelector("#name-input");

inputEl.addEventListener("input", handleInput);

const nameOutput = document.querySelector("#name-output");


function handleInput(event) {
   const inputName = event.currentTarget.value.trim();
     (inputName === ``)? nameOutput.textContent = `Anonymous` : nameOutput.textContent = inputName;
    }
  

