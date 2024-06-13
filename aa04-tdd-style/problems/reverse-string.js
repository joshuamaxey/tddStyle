// module.exports =

function reverseString(string) {

  if (typeof string !== "string") {

    throw new TypeError("Input must be a string!");
  }

  let newString = "";

  for (let i = string.length - 1; i >= 0; i--) {

    let char = string[i];

    newString += char;
  }

  return newString;
};

console.log(reverseString("testing"));

module.exports = reverseString;
