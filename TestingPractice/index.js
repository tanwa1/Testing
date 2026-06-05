function capitalize(string) {
	const conversion = string.charAt(0).toUpperCase() + string.slice(1);
	return conversion;
}

function reverseString(string) {
	let reversed = '';
	for (let i = string.length - 1; i >= 0; i--) {
		reversed += string[i];
	}

	return reversed;
}



const calculator = {

		 add(a, b) {
			return  a + b;
		},

		 subtract(a, b) {
			return a - b;
		},

		 divide(a, b) {
			return a / b;
		},

		 multiply(a, b) {
			return a * b;
		},
};

function caesarCipher(word, shift) {
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const map = {};
	let result = '';
	let isUpper;
	let mapped;
	let key;

	for (let i = 0; i < alphabet.length; i++) {
		const letter = alphabet[i];
		const shiftedIndex = (i + shift + 26) % 26;
		map[letter] = alphabet[shiftedIndex];
	}

	for (let j = 0; j < word.length; j++) {
		const retrieveWord = word[j];
		if (retrieveWord.match(/[a-z]/iv)) {
			key = retrieveWord.toUpperCase();
			isUpper = (retrieveWord === retrieveWord.toUpperCase());
			mapped = map[key] || retrieveWord;
			result += isUpper ? mapped : mapped.toLowerCase();
		} else {
			result += retrieveWord;
		}
	}

	return result;
}

function analyzeArray(numberedArray) {
	// eslint-disable-next-line no-useless-assignment
	let average = 0;
	let sum = 0;
	let min = numberedArray[0];
	let max = numberedArray[0];

	for (const n of numberedArray) {
		sum += n;
		if (n > max) {
			max = n;
		}

		if (n < min) {
			min = n;
		}
	}
	const {length} = numberedArray;
	average = sum / length;

	return {
		average,
		max,
		min,
		length,
	};
}

export {
	capitalize,
	reverseString,
	calculator,
	caesarCipher,
	analyzeArray,
};
