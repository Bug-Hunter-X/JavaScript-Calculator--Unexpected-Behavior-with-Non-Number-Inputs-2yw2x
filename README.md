# JavaScript Calculator Bug: Unexpected Behavior with Non-Number Inputs

This repository demonstrates an uncommon bug in a simple JavaScript calculator. The functions are designed to perform basic arithmetic operations (addition, subtraction, multiplication, and division). However, when the functions are given non-number inputs, they exhibit unexpected behavior instead of throwing an error.

## Bug Description

The calculator functions do not handle non-number inputs gracefully. Instead of throwing an error or returning NaN (Not a Number), they perform string concatenation or type coercion, leading to unexpected results.

## Bug Reproduction

1. Clone this repository.
2. Open `bug.js`.
3. Run the file in a JavaScript environment (e.g., Node.js).
4. Observe the unexpected outputs when non-number inputs are given to the calculator functions.

## Bug Solution

The solution involves adding explicit type checking to ensure that only numbers are passed to the functions. If a non-number input is detected, an error is thrown.

The solution file (`bugSolution.js`) shows the corrected code.