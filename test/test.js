var assert = require('assert');
var chai = require('chai');
var assert = chai.assert;
var should = require('chai').should();
var expect = require('chai').expect;
const methods = require('../Methods.js');

describe('Scenarios for FizzBuzz Exercice', function () {
  describe('Tests using Mocha', function () {
    it('Return Fizz with 3', function () {
      assert.equal(methods.FizzBuzzMethod(3), 'Fizz');
    });

    it('Return Buzz with 10', function () {
      assert.equal(methods.FizzBuzzMethod(10), 'Buzz');
    });

    it('Return Message "Only enter a Numbers"', function () {
      assert.equal(methods.FizzBuzzMethod('a'), 'Only enter a Numbers');
    });
  });

  describe('Tests using Chai', function () {
    it('Return Fizz with 6', function () {
      assert.equal(methods.FizzBuzzMethod(6), 'Fizz');
    });

    it('Return Buzz with 5', function () {
      assert.equal(methods.FizzBuzzMethod(5), 'Buzz');
    });
  });

  describe('Tests using Expect Chai', function () {
    it('Expect return FizzBuzz with 15', function () {
      expect(methods.FizzBuzzMethod(15)).to.equal('FizzBuzz');
    });

    it('Expect return FizzBuzz with 30', function () {
      expect(methods.FizzBuzzMethod(30)).to.equal('FizzBuzz');
    });

    it('Expect return FizzBuzz with -30', function () {
      expect(methods.FizzBuzzMethod(-30)).to.equal('FizzBuzz');
    });
  });

  describe('Test using Should Chai', function () {
    it('Should return the same number with 2', function () {
      methods.FizzBuzzMethod(2).should.equal(2);
    });

    it('Should return the same number with 16', function () {
      methods.FizzBuzzMethod(16).should.equal(16);
    });

    it('Should return the same number with 0', function () {
      methods.FizzBuzzMethod(0).should.equal('FizzBuzz');
    });
  });

  describe('Insert two numbers', function () {
    it('Insert first number 2 and second number 3', function () {
      methods.FizzBuzzString(2, 3).should.equal('2,Fizz');
    });

    it('Insert first number 1 and second number 5', function () {
      expect(methods.FizzBuzzString(1, 5)).to.equal('1,2,Fizz,4,Buzz');
    });

    it('Insert first number -10 and second number 5', function () {
      expect(methods.FizzBuzzString(-10, 5))
      .to
      .equal('Buzz,Fizz,-8,-7,Fizz,Buzz,-4,Fizz,-2,-1,FizzBuzz,1,2,Fizz,4,Buzz');
    });

    it('Insert first number 1 and second number 15', function () {
      assert.equal(methods.
        FizzBuzzString(1, 15), '1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz');
    });
  });
});
