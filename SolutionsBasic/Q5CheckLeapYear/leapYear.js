const checkLeapYear = (input) => {
  const result =
    input % 400 == 0 || (input % 100 != 0 && input % 4 === 0) ? true : false;
  return result;
};

console.log(checkLeapYear(2000));
