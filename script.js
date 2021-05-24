import { convertToMorse, convertToEnglish } from "./functions.js";

const input = document.getElementById("english-input");
const output = document.querySelector(".main-content__result");
const btn = document.querySelector(".main-content__btn");
const switchBtn = document.querySelector(".switch");
const subHeading = document.querySelector(".heading-subtitle");
let isCalculatingMorse = true;

btn.addEventListener("click", () => {
  if (isCalculatingMorse) {
    const morseValue = convertToMorse(input.value);
    output.innerHTML = morseValue;
  } else {
    const englishValue = convertToEnglish(input.value);
    output.innerHTML = englishValue;
  }
});

switchBtn.addEventListener("click", () => {
  output.innerHTML = "";
  input.value = "";

  toggleBool();
  if (!isCalculatingMorse) {
    subHeading.innerHTML = "Morse Code to English";
  } else {
    subHeading.innerHTML = "English to Morse Code";
  }
});

function toggleBool() {
  isCalculatingMorse = !isCalculatingMorse;
}
