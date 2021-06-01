let Input = "BanglaDesh";

function reverseString(str) {
	var findUpperCase = [];
	for (let index = 0; index < str.length; index++) {
		if (str[index] >= "A" && str[index] <= "Z") {
			findUpperCase.push(index);
		}
	}
	var makeArray = str.split("").reverse();
	var create = [];
	for (let i = 0; i < makeArray.length; i++) {
		for (let j = 0; j < findUpperCase.length; j++) {
			if (i !== findUpperCase[j]) {
				create.push(makeArray[i].toLowerCase());
				break;
			} else {
				console.log(findUpperCase[j]);
				const upperCaseLetter = makeArray[i].toUpperCase();
				create.push(upperCaseLetter);
				break;
			}
		}
	}

	return create.join("");
}
const output = reverseString(Input);
console.log(output);
