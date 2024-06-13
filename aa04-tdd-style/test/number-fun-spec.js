const chai = require('chai')
const { expect } = require('chai')
const { returnsThree, reciprocal } = require('../problems/number-fun')

describe('returnsThree function', function() {
    it('should return the number 3', function() {
        expect(returnsThree()).to.equal(3)
    });
});

describe('reciprocal function', function() {
    it('should return the reciprocal of a number', function() {
        let n1 = 5;
        let n2 = 100;

        expect(reciprocal(n1)).to.equal(1/n1);
        expect(reciprocal(n2)).to.equal(1/n2);
    });

    it('should throw TypeError if input is not a number', function() {

        let string = "string"
        let object = {"key": "value"}
        let boolean = false;

        expect(() => reciprocal(string)).to.throw(TypeError);
        expect(() => reciprocal(object)).to.throw(TypeError);
        expect(() => reciprocal(boolean)).to.throw(TypeError);
    });

    it('should throw a RangeError if number is not 1 to 1,000,000', function() {
        let num1 = 0;
        let num2 = 2000000;
        expect(() => reciprocal(num1)).to.throw(RangeError);
        expect(() => reciprocal(num2)).to.throw(RangeError);
    })
});
