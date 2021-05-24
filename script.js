import { convertToMorse, convertToEnglish } from "./functions.js";

const input = document.getElementById("english-input");
const output = document.querySelector(".main-content__result");
const btn = document.querySelector(".main-content__btn");
const switchBtn = document.querySelector(".switch");
let isCalculatingMorse = true;

btn.addEventListener("click", () => {
  if (isCalculatingMorse) {
    const morseValue = convertToMorse(input.value);
    output.innerHTML = morseValue;
  } else {
    const englishValue = convertToEnglish(input.value);
    console.log(input.value);
    output.innerHTML = englishValue;
  }
});

switchBtn.addEventListener("click", () => {
  output.innerHTML = "";
  input.value = "";
  toggleBool(isCalculatingMorse);
  console.log(isCalculatingMorse);
});

function toggleBool() {
  isCalculatingMorse = !isCalculatingMorse;
}
