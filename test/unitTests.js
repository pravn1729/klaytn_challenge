let sumOfAllMultiplesOf3Or5 = require('../sumOfAllMultiplesOf3Or5');
let evenFibonacciSum = require('../evenFibonacciSum');

let chai = require('chai');
let assert = chai.assert;

describe('sum of 3 or 5 multiples', () => {
    it('it should return 0 for < 3 input value', (done) => {
        let n = 2;
        let expected = 0;
        let output = sumOfAllMultiplesOf3Or5(n);
        assert.equal(expected, output);
        done();
    });

    it('it should return 23 for input 10', (done) => {
        let n = 10;
        let expected = 23;
        let output = sumOfAllMultiplesOf3Or5(n);
        assert.equal(expected, output);
        done();
    });

    it('it should return 233168 for input 1000', (done) => {
        let n = 1000;
        let expected = 233168;
        let output = sumOfAllMultiplesOf3Or5(n);
        assert.equal(expected, output);
        done();
    });
});

describe('even fibonacci sum', () => {
    it('it should return 0 for < 2 terms', (done) => {
        let n = 2;
        let expected = 0;
        let output = evenFibonacciSum(n);
        assert.equal(expected, output);
        done();
    });

    it('it should return 44 for input 10', (done) => {
        let n = 10;
        let expected = 44;
        let output = evenFibonacciSum(n);
        assert.equal(expected, output);
        done();
    });

    it('it should return 188 for input 12', (done) => {
        let n = 12;
        let expected = 188;
        let output = evenFibonacciSum(n);
        assert.equal(expected, output);
        done();
    });

    it('it should return 0 if value exceeds 4 million', (done) => {
        let n = 40;
        let expected = 0;
        let output = evenFibonacciSum(n);
        assert.equal(expected, output);
        done();
    });
});