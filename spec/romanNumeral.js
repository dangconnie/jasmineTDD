describe ("Roman Numeral Converter Test", ()=>{

  it("Roman Numeral function should be defined", ()=>{
    expect(makeMeRoman()).toBeDefined();//Fail b/c function is defined
  });

  it("romanNChart must be defined", ()=>{
  	expect(romanNChart).toBeDefined();
  });

  it("keyArray must be defined", ()=>{
  	expect(keyArray).toBeDefined();
  });

  // Check to see if input is a number
  it("Input passed into function must be a number", ()=>{
  	//Need to make a function called makeMeRoman
  	var inputType = typeof(makeMeRoman(1984))
  	expect(inputType).toBe("string");
  });

  //******* We needed to make romanNumeralString local. Otherwise, it kept concatenating with each test

  it("When 1 is passed, I is returned", ()=>{
    expect(makeMeRoman(1)).toBe("I");
  });

  it("When 4 is passed, IV is returned", ()=>{
    expect(makeMeRoman(4)).toBe("IV");
  });

  it("When 5 is passed, V is returned", ()=>{
    expect(makeMeRoman(5)).toBe("V");
  });

  it("When 9 is passed, IX is returned", ()=>{
    expect(makeMeRoman(9)).toBe("IX");
  });

  //Does not work!!!
  it("When 23 is passed, XXIII is returned", ()=>{
    expect(makeMeRoman(23)).toBe("XXIII");
  });

});