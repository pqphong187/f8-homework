Array.prototype.filter2 = function (callback, thisArg) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (callback((thisArg = this[i]), i, this)) {
        result.push(this[i]);
      }
    }
  }
  return result;
};

const arr = [1, 2, , 4, 5, , , , 7];
const result = arr.filter2((value) => {
  return value % 2 !== 0;
});

console.log(result);

const result2 = arr.filter((value) => {
  return value % 2 !== 0;
});
console.log(result2);
