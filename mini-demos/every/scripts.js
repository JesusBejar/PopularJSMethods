array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isFalse = array.every((num) => {
  return num >= 9;
});
console.log(isFalse);

array = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
const isTrue = array.every((num) => {
  return num == 2;
});
console.log(isTrue);
