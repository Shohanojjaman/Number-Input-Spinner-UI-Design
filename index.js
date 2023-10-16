// Get the number element by its ID
var numberElement = document.getElementById('number');

// Get the increase button element by its ID
var nextBtn = document.getElementById('nextBtn');
var prevBtn = document.getElementById('prevBtn');

// Initialize the number
var number = 0;

// Update the number display
function updateNumber() {
  numberElement.textContent = number;
}

// Increment the number when the button is clicked
nextBtn.addEventListener('click', function () {
  number++;
  updateNumber();
});
// Increment the number when the button is clicked
prevBtn.addEventListener('click', function () {
  number--;
  updateNumber();
});
