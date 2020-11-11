import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/calc';

describe('Calc', () => {
  describe('Smoke Tests', () => {
    it('should exists the method `sum`', () => {
      expect(sum).to.exist;
    });

    it('should exists the method `sub`', () => {
      expect(sub).to.exist;
    });

    it('should exists the method `mult`', () => {
      expect(mult).to.exist;
    });

    it('should exists the method `div`', () => {
      expect(div).to.exist;
    });
  });

  describe('Method `sum`', () => {
    context('sum two number integers positive', () => {
      it('should return 5', () => {
        expect(sum(2, 3)).to.be.equal(5);
      });
    });
  });

  describe('Method `sub`', () => {
    context('sub two number integers positive', () => {
      it('should return 2', () => {
        expect(sub(5, 3)).to.be.equal(2);
      });
    });
  });

  describe('Method `mult`', () => {
    context('mult two number integers positive', () => {
      it('should return 15', () => {
        expect(mult(5, 3)).to.be.equal(15);
      });
    });
  });

  describe('Method `div`', () => {
    context('div two number integers positive', () => {
      it('should return 5', () => {
        expect(div(10, 2)).to.be.equal(5);
      });
    });
    context('div two number integers positive by 0', () => {
      it('should return `não pode ser divido por zero`', () => {
        expect(div(10, 0)).to.be.equal(`não pode ser divido por zero`);
      });
    });
  });
});
