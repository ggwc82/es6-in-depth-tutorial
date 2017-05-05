/* we have a string and we want to create a map 
which has keys representing each character, and 
values of the frequency of the character occurance;
*/

//create the string
let superstring = "ejhfjbfkjksfbjkesfjjkwavncjkvwijngjevrshfguvjwebwuhewiewqopefj";

const countLetters = (string, whichLetter) => {
	//split the string into an array of characters
	let lettersArray = string.split("");

	//now create the map data structure
	let lettersMap = new Map();

	//create the for loop to iterate over each item in the lettersArray
	for (var i=0; i < lettersArray.length; i++) {
		//create the temp variable
		let letter = lettersArray[i];

		//create the if not in the lettersMap statement
		if (!lettersMap.has(letter)) {
			// create the key value pair and set to 1
			lettersMap.set(letter, 1);
		} else {
			// increment the existing value by 1
			lettersMap.set(letter, lettersMap.get(letter) + 1);
		}
	}
	return `The letter ${whichLetter} occurs ${lettersMap.get(whichLetter)} times in ${superstring}`;
}

console.log(countLetters(superstring, "a"));