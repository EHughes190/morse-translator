import { convertToMorse, convertToEnglish } from "./functions.js";

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
