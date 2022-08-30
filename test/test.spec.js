import {Calculadora} from '../calc.js'
import chai from 'chai';
const expect = chai.expect;

describe("multiply()", () => {
    const calc = new Calculadora("Multiply");

    it('10 x 0 must be 0', () => {
        expect(calc.multiply(10, 0)).to.equal(0);
    });

    it('0 x 10 must be 0', () => {
        expect(calc.multiply(0, 10)).to.equal(0);
    });

    it('0 x 0 must be 0', () => {
        expect(calc.multiply(0, 0)).to.equal(0);
    });
});