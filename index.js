const INCREASE_BTN = document.querySelector(".increase_btn"); // увеличение
const DECREASE_BTN = document.querySelector(".decrease_btn");
const COUNTER_VALUE = document.querySelector(".counter_value");

let counter = 0;
INCREASE_BTN.addEventListener("click", (event) => {
  event.preventDefault();
  counter++;
  COUNTER_VALUE.textContent = counter;
});

DECREASE_BTN.addEventListener("click", (event) => {
  event.preventDefault();
  counter--;
  COUNTER_VALUE.textContent = counter;
});
