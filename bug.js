function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

const calculator = {
  add,
  subtract,
  multiply,
  divide,
};

// Uncommon bug: Unexpected behavior with non-number inputs
console.log(calculator.add(10, '5')); // Output: 105 (String concatenation)
console.log(calculator.add(true, 5)); //Output: 6 (Type coercion)