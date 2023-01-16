const getLargestEvenNumber = (inputArray) => {
  let result = -1;
  inputArray.forEach((element) => {
    if (element % 2 === 0 && element > result) result = element;
  });
  return result;
};

// const inputArray = [1, 2, 3, 4, 5];
// console.log(getLargestEvenNumber(inputArray));
module.exports = getLargestEvenNumber;
