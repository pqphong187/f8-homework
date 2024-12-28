Array.prototype.reduce2 = function (callback, initialValue) {
  if (this.length === 0 && initialValue === undefined) {
    return "Error: Reduce of empty array with no initial value";
  }

  let accumulator = initialValue === undefined ? this[0] : initialValue;
  let i = initialValue === undefined ? 1 : 0;

  for (; i < this.length; i++) {
    if (i in this) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }

  return accumulator;
};

// Sample usage

// Sample 1

const arr1 = [1, 2, 3, 4, 5];

const result1 = arr1.reduce2((accumulator, value) => {
  return accumulator + value;
}, 0);

console.log(result1); // 15

// Sample 2

const arr2 = [];

const result2 = arr2.reduce2((accumulator, value) => {
  return accumulator + value;
});

console.log(result2); // Error: Reduce of empty array with no initial value

// Sample 3

const arr3 = [];

const result3 = arr3.reduce2((accumulator, value) => {
  return accumulator + value;
}, 0);

console.log(result3); // 0

// // Sample 1
// const arr1 = [1, 2, 3, 4, 5];

// const result1 = arr1.reduce((accumulator, value) => {
//   return accumulator + value;
// }, 0);

// console.log(result1); // 15

// // Sample 2

// const arr2 = [];

// const result2 = arr2.reduce((accumulator, value) => {
//   return accumulator + value;
// });

// console.log(result2); // Error: Reduce of empty array with no initial value

// // Sample 3

// const arr3 = [];

// const result3 = arr3.reduce((accumulator, value) => {
//   return accumulator + value;
// }, 0);

// console.log(result3); // 0
