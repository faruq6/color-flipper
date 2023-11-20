const input = document.getElementById("userInput");
const container = document.getElementById("container");
const Hex = document.getElementById("Hex");

const button = document.getElementById("button");

function randomNo() {
  //   let hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16];

  //   let min = hexDigits[0];
  //   let max = hexDigits[15];
  return Math.floor(Math.random() * 16);
}

function changeColor() {
  let rr, gg, bb;
  rr = randomNo() + randomNo();
  gg = randomNo() + randomNo();
  bb = randomNo() + randomNo();
  console.log(`#(${rr}, ${gg}, ${bb})`);

  input.placeholder = `#${rr}${gg}${bb}`;
  container.style.backgroundColor = `#${rr}${gg}${bb}`;
  Hex.style.fontWeight = "bold";
  Hex.style.fontSize = "larger";
  Hex.style.color = "#f00";
  Hex.style.textDecoration = "underline";
}
button.addEventListener("click", changeColor);
