const chai = require('chai')
const { expect } = require('chai')

const reverseString = require('../problems/reverse-string')

describe('reverseString function', function () {
    it('should return reversed string', function () {

        let string = "string"
        expect(reverseString(string)).to.equal("gnirts");
    });
    it('should throw a TypeError if input is not a string', function () {

        let input = 45;
        expect(() => reverseString(input)).to.throw(TypeError);
    })
});
