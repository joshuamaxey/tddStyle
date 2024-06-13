function returnsThree() {

  return 3;
}

//^ ( Note: reciprocal (n) === 1/(n) )

function reciprocal(n) {

  if (typeof n !== "number") {

    throw TypeError("Input must be a number!")
  }
  return 1/n;
}

// reciprocal("string");

module.exports = {
  returnsThree,
  reciprocal
};
