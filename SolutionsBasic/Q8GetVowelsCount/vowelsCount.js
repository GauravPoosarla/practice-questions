const getVowelsCount = (inputString) => {
  let count = 0;

  const vowelString = "aeiou";
  [...inputString].forEach((element) => {
    count += vowelString.includes(element.toLowerCase()) ? 1 : 0;
  });
  return count;
};
const input = "codeAcademy";
console.log(getVowelsCount(input));
