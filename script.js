import { convertToMorse, convertToEnglish } from "./functions.js";

const input = document.getElementById("english-input");
const output = document.querySelector(".main-content__result");
const translateBtn = document.querySelector(".translate");
const switchBtn = document.querySelector(".switch");
const subHeading = document.querySelector(".heading-subtitle");
let isCalculatingMorse = true;

translateBtn.addEventListener("click", () => {
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

  toggleBool(isCalculatingMorse);
  console.log(isCalculatingMorse);
  if (!isCalculatingMorse) {
    subHeading.innerHTML = "Morse Code to English";
  } else {
    subHeading.innerHTML = "English to Morse Code";
  }
});

const toggleBool = () => {
  isCalculatingMorse = !isCalculatingMorse;
};
