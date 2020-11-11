import { expect } from 'chai';
import FizzBuzz from '../src/fizzbuzz';

describe('FizzBuzz', () => {
  it('should return `fizz` when multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
  });
  it('should return `buzz` when multiple of 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
  });
  it('should return `fizzbuzz` when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it('should return `number` when no multiple', () => {
    expect(FizzBuzz(7)).to.be.equal(7);
  });

  it('should return `0` when number 0', () => {
    expect(FizzBuzz(0)).to.be.equal(0);
  });
});
