import { convertToMorse } from "./functions.js";

const input = document.getElementById("english-input");
const output = document.querySelector(".result");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  const morseValue = convertToMorse(input.value);
  output.innerHTML = morseValue;
});
