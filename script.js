import { convertToMorse, convertToEnglish, toggleBool } from "./functions.js";

const input = document.getElementById("english-input");
const output = document.querySelector(".main-content__result");
const translateBtn = document.querySelector(".translate");
const switchBtn = document.querySelector(".switch");
const subHeading = document.querySelector(".heading-subtitle");
const heading = document.querySelector(".heading");
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
  const info = document.createElement("p");

  isCalculatingMorse = toggleBool(isCalculatingMorse);
  if (!isCalculatingMorse) {
    subHeading.innerHTML = "Morse Code to English";
    info.innerHTML =
      "Place a space between each letter, and a slash between words";
  } else {
    subHeading.innerHTML = "English to Morse Code";
    info.innerHTML = "";
  }
});
