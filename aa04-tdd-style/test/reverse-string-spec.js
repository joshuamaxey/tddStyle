const chai = require('chai')
const { expect } = require('chai')

const reverseString = require('../problems/reverse-string')

describe('reverseString function', function () {
    it('should return reversed string', function () {

        let string = "string"
        expect(reverseString(string)).to.equal("gnirts");
    });
});
