// Helper function to create drum arrays
const arrayInitialToFalse = (numberOfIndexes) => {
	let array = [];
	for (let i = 0; i < numberOfIndexes; i++) {
		array.push(false);
	}
	return array;
};

// Drum Arrays
let kicks = arrayInitialToFalse(16);
let snares = arrayInitialToFalse(16);
let hiHats = arrayInitialToFalse(16);
let rideCymbals = arrayInitialToFalse(16);



