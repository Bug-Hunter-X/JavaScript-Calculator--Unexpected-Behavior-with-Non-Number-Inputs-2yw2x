function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}

function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a - b;
}

function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a * b;
}

function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
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

//Corrected code
console.log(calculator.add(10, '5')); // Throws an error
console.log(calculator.add(true, 5)); // Throws an error