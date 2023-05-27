function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberEl = document.querySelector('input[type="number"]');
const createEl = document.querySelector("button[data-create]");
const destroyEl = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

let size = 30;

function createBoxes(amount) {
  let boxList = [];
  for (let i = 0; i < amount; i++) {
    const oneBox = document.createElement("div");

    oneBox.style.height = `${size}px`;
    oneBox.style.width = `${size}px`;
    oneBox.style.marginTop = "10px";
    oneBox.style.backgroundColor = getRandomHexColor();
    boxList.push(oneBox);
    size += 10;
  }
  boxesEl.append(...boxList);
}

createEl.addEventListener("click", () => {
  const amount = numberEl.valueAsNumber;
  createBoxes(amount);
});

function destroyBoxes() {
  boxesEl.innerHTML = "";
  size = 30;
}

destroyEl.addEventListener("click", destroyBoxes);
