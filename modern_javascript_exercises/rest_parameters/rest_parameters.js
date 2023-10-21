// Instructions can be found in rest_parameters.md

// Add rest parameters here!
export function add(...args) {
  // Add a loop here
  let sum = 0;
  for (const numbers of args) {
    sum += numbers;
  }
  return sum;
}

add(1, 2, 3, 4, 5);
