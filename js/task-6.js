
const frm = document.querySelector("#controls");

const createBtn = document.querySelector(`button[data-create]`);

const inputEl = document.querySelector("input");

const destroyBtn = document.querySelector(`button[data-destroy]`);

const box = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes); 

destroyBtn.addEventListener("click", destroyBoxes);

inputEl.addEventListener("input", handleInput);

let amount;

  function handleInput(event) {
   
  const inputEl = Number(event.target.value);
   console.log(typeof inputEl);
  }

   
  
 
function createBoxes() {

  let sizes = 30;
  box.innerHTML = '';
  
//  console.log(Number(inputEl.value));
  
  if (Number(inputEl.value) >= 1 && Number(inputEl.value) <= 100) {
  
 
  
    for (let index = 0; index < (Number(inputEl.value)); index++) {
      
      const myBox = document.createElement("div")
      myBox.style.width = `${sizes}px`;
      myBox.style.height = `${sizes}px`;
      myBox.style.backgroundColor = getRandomHexColor();
     
      box.append(myBox);
      sizes += 10;
      
      
    }
    inputEl.value = "";
  }
    return
  }
   


function destroyBoxes(event) {
    box.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
