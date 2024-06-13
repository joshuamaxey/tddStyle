function returnsThree() {

  return 3;
}

//^ ( Note: reciprocal (n) === 1/(n) )

function reciprocal(n) {

  if (typeof n !== "number") {

    throw TypeError("Input must be a number!")
  }

  if (n > 1000000 || n < 1) {
    throw RangeError("Input must be between 1 and 1 million")
  }

  return 1/n;
}

// reciprocal("string");

// console.log(reciprocal(0));
// console.log(reciprocal(10));
// console.log(reciprocal(100000000));



module.exports = {
  returnsThree,
  reciprocal
};
