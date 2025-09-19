import { describe, expect, test } from 'vitest'
import { add, subtract, multiply, divide } from './math.helper'

describe('add', () => {
    test('Should be two positives numbers ', () => {
        //! 1. Arrange
        const a = 1,
            b = 3;

        //! 2. Act
        const result = add(a, b);

        //! 3. Assert
        expect(result).toBe(a + b)
    });


    test('Should be one positive number y one negative number ', () => {
        const a = -1,
            b = 2;

        const result = subtract(a, b)

        expect(result).toBe(-3)
    })
})

describe('subtract', () => {
    test('should be two negatives numbers', () => {
        const a = -3,
            b = -4;

        const result = subtract(a, b)

        expect(result).toBe(a - b)
    })
})

describe('multiply', () => {
    test('should be 0 and a positive number', () => {
        const a = 0,
            b = 12;

        const result = multiply(a, b)

        expect(result).toBe(a * b)
    })


    test('should be a positive number and another negative number', () => {
        const a = 1,
            b = -2;

        const result = multiply(a, b);

        expect(result).toBe(a * b)
    })
})

