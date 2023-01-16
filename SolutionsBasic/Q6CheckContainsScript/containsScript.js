const checkContainsScript = (inputString) => {
  const result = inputString.includes("Script") ? true : false;
  return result;
};
const input = "JavaScript";
console.log(checkContainsScript(input));
