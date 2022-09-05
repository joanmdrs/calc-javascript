import {Calculadora} from '../calc.js'
import { Stack } from '../stack.js';
import chai from 'chai';
const expect = chai.expect;
const assert = chai.assert;

// Calculadora 

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


describe("condicional()", () => {

    const calc = new Calculadora("Condicional");

    it('0 < 10 must be 10', () => {
        expect(calc.condicional(0, 10)).to.equal(10);
    });

    it('0 == 0 must be 0', () => {
        expect(calc.condicional(0, 0)).to.equal(0);
    });

    it('10 > 0 must be 10', () => {
        expect(calc.condicional(10, 0)).to.equal(10);
    });
});

// Stack

describe("isEmpty()", () => {
    const stack = new Stack();
    const empty = stack.isEmpty();

    it('must be true', () => {
        assert.isTrue(empty, "it'strue");
    })
})