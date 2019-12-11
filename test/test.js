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
  });

  describe('Test using Should Chai', function () {
    it('Should return the same number with 2', function () {
      methods.FizzBuzzMethod(2).should.equal(2);
    });

    it('Should return the same number with 16', function () {
      methods.FizzBuzzMethod(16).should.equal(16);
    });
  });
});
