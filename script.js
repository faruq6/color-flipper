const input = document.getElementById("userInput");
const container = document.getElementById("container");
const button = document.getElementById("button");
const Simple = document.getElementById("Simple");

function randomNo() {
  let min = 0;
  let max = 255;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(`rgb(${r}, ${g}, ${b})`);
function changeColor() {
  let r, g, b;
  r = randomNo();
  g = randomNo();
  b = randomNo();
  input.placeholder = `rgba(${r},${g},${b},0.8)`;
  container.style.backgroundColor = `rgba(${r},${g},${b},0.8)`;
  Simple.style.fontWeight = "bold";
  Simple.style.fontSize = "larger";
  Simple.style.color = "#f00";
  Simple.style.textDecoration = "underline";
}
button.addEventListener("click", changeColor);
