// ***********PALINDROME***************
let palindrome;
function isPalindrome(palindrome) {
	let array = String(palindrome).split('');
	let reverseArray = [];
	for (let i=0; i< array.length; i++) {
		reverseArray[array.length-i] = array[i];
	};

	if ( String(palindrome).toLowerCase() === reverseArray.join('').toLowerCase() ) {
		console.log("this is palindrome");
	} else { 
		console.log("it's not palindrome");
	};
};

isPalindrome(13431);
isPalindrome("Bob");
isPalindrome("bzzz");

// ***************FizzBuzz***************
function FizzBuzz(){
	for (let j=0; j<100; j++) {
		if (j%3 === 0 && j%5 === 0 ) {
			console.log("FizzBuzz");
		} else if (j%3 === 0 ) {
			console.log("Fizz");
		} else if ((j%5 === 0 )) {
			console.log("Buzz");
		} else {
			console.log(j);
		};
	};
};

FizzBuzz();