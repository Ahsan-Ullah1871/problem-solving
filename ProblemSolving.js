let Input = "BanglaDesh";

function reverseString(str) {
	var findUpperCase = [];
	for (let index = 0; index < str.length; index++) {
		if (str[index] >= "A" && str[index] <= "Z") {
			findUpperCase.push(index);
		}
	}
	var makeArray = str.toLowerCase().split("").reverse();
	var create = makeArray.map((letter, index) =>
		findUpperCase.includes(index) ? letter.toUpperCase() : letter
	);

	return create.join("");
}
const output = reverseString(Input);
console.log(output);
