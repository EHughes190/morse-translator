import { convertToMorse } from "./functions.js";

const input = document.getElementById("english-input");
const output = document.querySelector(".main-content__result");
const button = document.querySelector(".main-content__button");

button.addEventListener("click", () => {
  const morseValue = convertToMorse(input.value);
  output.innerHTML = morseValue;
});
