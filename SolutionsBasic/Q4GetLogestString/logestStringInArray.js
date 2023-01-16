const getLogestStringInArray = (inputArray) => {
  let longestString = "";
  inputArray.forEach((element) => {
    longestString =
      element.length > longestString.length ? element : longestString;
  });
  return longestString;
};

const inputArray = ["we", "love", "code", "academy"];
console.log(getLogestStringInArray(inputArray));
