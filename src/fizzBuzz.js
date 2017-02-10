// Defining fizzBuzz
//Must return a value to be defined

function fizzBuzz(input = null){
	if (input % 3 == 0){
		return "Fizz";
	}else if(input % 5 == 0){
		return "Buzz";
	}else{
		return input;
	}
}