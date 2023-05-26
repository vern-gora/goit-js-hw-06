const textInput = document.querySelector("input#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener(
  "input",
  () => (output.textContent = textInput.value || "Anonymous")
);
