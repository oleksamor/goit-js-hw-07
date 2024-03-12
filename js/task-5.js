const bgColor = document.querySelector(".widget");

const btn = document.querySelector(".change-color");

btn.addEventListener("click", handleClick);

function handleClick(event) {
const color = getRandomHexColor();
const p = document.querySelector(".color");
p.textContent = `${color}`;

const body = document.querySelector("body");

body.style.backgroundColor = color;
 
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
