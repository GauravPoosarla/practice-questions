const getChangedCapitalization = (inputString) => {
  let result = "";
  [...inputString].forEach((element) => {
    result +=
      element.toUpperCase() === element
        ? element.toLowerCase()
        : element.toUpperCase();
  });
  return result;
};

const input = "MeRRy hAD a LITTle lAMp";
console.log(getChangedCapitalization(input));
