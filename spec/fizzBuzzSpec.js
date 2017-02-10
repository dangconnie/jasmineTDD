// 1 = 1
// 2 = 2
// 3 = Fizz
// 4 = 4
// 5 = Buzz
// 15 = FizzBuzz

//If it's divisible by 3, "Fizz"
//If it's divisible by 5, "Buzz"
//If it's divisible by 3 and 5, "FizzBuzz"

describe ("FizzBuzz Testing", ()=>{

	it("FizzBuzz must be defined", ()=>{//check if fxn is defined
		expect(fizzBuzz(1)).toBeDefined();//toBeDefined is part of jasmine
	});

	it("Should be a string 1 for passing 1.", ()=>{
		expect(fizzBuzz(1)).toBe(1);
	});

	it("Should be a string 2 for passing 2.", ()=>{
		expect(fizzBuzz(2)).toBe(2);
	});

	it("Should be a string Fizz for passing 3.", ()=>{
		expect(fizzBuzz(3)).toBe("Fizz");
	});

	it("Should be a string 4 for passing 4.", ()=>{
		expect(fizzBuzz(4)).toBe(4);
	});

	it("Should be a string Buzz for passing 5.", ()=>{
		expect(fizzBuzz(5)).toBe("Buzz");
	});

	it("Should be a string Fizz for passing 6.", ()=>{
		expect(fizzBuzz(6)).toBe("Fizz");
	});

	it("Should be a string Fizz for passing 9.", ()=>{
		expect(fizzBuzz(9)).toBe("Fizz");
	});

	var random = Math.floor(Math.random() * 10) * 15;
		it("Should be String FizzBuzz for passing " +random, ()=>{
		expect(fizzBuzz(random)).toEqual("FizzBuzz");
	});

});