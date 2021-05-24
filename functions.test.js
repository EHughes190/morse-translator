import { convertToMorse } from "./functions.js";

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

// it("Should return sentence if input is hello world", () => {
//   const result = convertToMorse("hello world");
//   expect(result).toBe(".... . .-.. .-.. ---.-- --- .-. .-.. -..");
// });
