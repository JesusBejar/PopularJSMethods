array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numPresentTrue = array.some((num) => {
  return num > 9;
});

console.log(numPresentTrue);

const numPresentFalse = array.some((num) => {
  return num == 12;
});

console.log(numPresentFalse);
