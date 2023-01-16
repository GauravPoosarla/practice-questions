const getConcatenatedSubstring = (inputArray) => {
  let result = "";
  inputArray.forEach((element) => {
    result += element.slice(1);
  });
  return result;
};
const inputArray = ["Yashi", "Misra"];
console.log(getConcatenatedSubstring(inputArray));
