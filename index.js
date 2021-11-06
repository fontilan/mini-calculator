let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let result = 0;
let sumEl = document.getElementById("sum-el");

/**
 * addition
 * @param {number} num1
 * @param {number} num2
 */
function add() {
  result = num1 + num2;
  sumEl.textContent = "Sum: " + result;
}
/**
 * substraction
 * @param {number} num1
 * @param {number} num2
 */
function substract() {
  result = num1 - num2;
  sumEl.textContent = "Sum: " + result;
}
/**
 * division
 * @param {number} num1
 * @param {number} num2
 */
function divide() {
  result = num1 / num2;
  sumEl.textContent = "Sum: " + result;
}
/**
 * multiplication
 * @param {number} num1
 * @param {number} num2
 */
function multiply() {
  result = num1 * num2;
  sumEl.textContent = "Sum: " + result;
}
