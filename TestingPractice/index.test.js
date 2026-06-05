import {
	capitalize,
	reverseString,
	calculator,
	caesarCipher,
	analyzeArray,
} from './index';

describe('capitalize()', () => {
	test('capitalizes the first letter', () => {
		expect(capitalize('hello')).toMatch('Hello');
	});
});

describe('reverseString()', () => {
	test('reverses a string', () => {
		expect(reverseString('abdcfe')).toBe('efcdba');
	});
});

describe('calculator()', () => {
	test('calculates between two numbers', () => {
		expect(calculator.add(1,2)).toEqual(3);
		expect(calculator.subtract(1,2)).toEqual(-1);
		expect(calculator.divide(1,2)).toEqual(0.5);
		expect(calculator.multiply(1,2)).toEqual(2);
	});
});

describe('caesarCipher()', () => {
	test('deciphers the code', () => {
		expect(caesarCipher('xyz', 3)).toMatch('abc');
	});
});

describe('analyzeArray()', () => {
	test('returns avg, length, max, and min ', () => {
		expect(analyzeArray([1,8,3,4,2,6])).toEqual({"average": 4, "min": 1, "max": 8, "length": 6});
	});
});
