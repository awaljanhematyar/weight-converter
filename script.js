// Get references to the input, error, and result elements by their IDs
// (IDs must be passed as strings, in quotes)
const inputEl = document.getElementById("input");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");

// These will hold our setTimeout IDs so we can cancel/reset them
let errorTime;
let resultTime;

function updateResult() {
  // Check if the entered value is invalid: zero, negative, or not a number
  if (inputEl.value <= 0 || isNaN(inputEl.value)) {
    // Show an error message
    errorEl.innerText = "please enter a valid number!";

    // Cancel any previous pending timeout so they don't stack up
    clearTimeout(errorTime);

    // After 2 seconds, clear the error message and reset the input
    errorTime = setTimeout(() => {
      errorEl.innerText = "";
      inputEl.value = "";
    }, 2000);
  } else {
    // Valid number: convert kg to lb (divide by 2.2) and show 2 decimal places
    resultEl.innerText = (+inputEl.value / 2.2).toFixed(2);

    // Cancel any previous pending timeout
    clearTimeout(resultTime);

    // After 10 seconds, clear the result text and reset the input
    resultTime = setTimeout(() => {
      resultEl.innerText = ""; // was resultEl.value — wrong property, fixed
      inputEl.value = "";
    }, 10000);
  }
}

// Listen for input changes and run updateResult each time
// (added the missing comma between "input" and updateResult)
inputEl.addEventListener("input", updateResult);
