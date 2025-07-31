const greenStates = [
  "AL", "AZ", "FL", "IL", "IN", "KS", "LA",
  "MI", "MO", "MS", "NH", "OH", "OK",
  "SC", "TN", "TX", "UT"
  // MN removed
];

const resultElement = document.getElementById("result");
const inputField = document.getElementById("state");

function check() {
  const inputtedState = inputField.value.trim().toUpperCase();

  resultElement.textContent = "Checking...";
  resultElement.className = "mt-6 text-xl font-medium text-gray-600 dark:text-gray-300";

  if (!inputtedState) {
    resultElement.textContent = "Please enter a state abbreviation.";
    resultElement.className = "mt-6 text-xl font-medium text-yellow-600 dark:text-yellow-400";
    return;
  }

  if (greenStates.includes(inputtedState)) {
    resultElement.textContent = `${inputtedState} is an ACCEPTED state.`;
    resultElement.className = "mt-6 text-xl font-semibold text-green-600 dark:text-green-400";
  } else {
    resultElement.textContent = `${inputtedState} is NOT an accepted state.`;
    resultElement.className = "mt-6 text-xl font-semibold text-red-600 dark:text-red-400";
  }

  inputField.value = '';
}
// Toggle Dark Mode
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
}
