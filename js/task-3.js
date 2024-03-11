const inputEl = document.querySelector("#name-input");

inputEl.addEventListener("input", handleInput);

const titleEl = document.querySelector("#name-output");


function handleInput(event) {
   let inputName = event.currentTarget.value.trim();
     (inputName === ``)? titleEl.textContent = `Anonymous` : titleEl.textContent = inputName;
    }
  

