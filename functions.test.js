import { expect, it } from "@jest/globals";
import { convertToMorse, convertToEnglish, toggleBool } from "./functions.js";

it("Should return .- if a", () => {
  const result = convertToMorse("a");
  expect(result).toBe(".-");
});

it("Should return .- if A", () => {
  const result = convertToMorse("A");
  expect(result).toBe(".-");
});

it("Should return ....- if 4", () => {
  const result = convertToMorse("4");
  expect(result).toBe("....-");
});

it("Should return sentence if input is hello world", () => {
  const result = convertToMorse("hello world");
  expect(result).toBe(".... . .-.. .-.. ---/.-- --- .-. .-.. -..");
});

it("Should return a if .-", () => {
  const result = convertToEnglish(".-");
  expect(result).toBe("a");
});

it("Should return 4 if ....-", () => {
  const result = convertToEnglish("....-");
  expect(result).toBe("4");
});

it("Should return sentence if input is morse", () => {
  const result = convertToEnglish(".... . .-.. .-.. ---/.-- --- .-. .-.. -..");
  expect(result).toBe("hello world");
});

it("Should return true if input is false", () => {
  const result = toggleBool(false);
  expect(result).toBe(true);
});

it("Should return true if input is variable", () => {
  let testCase = true;
  const result = toggleBool(testCase);
  expect(result).toBe(false);
});
