var romanNChart = {
  1:"I",
  4:"IV",
  5:"V",
  9:"IX",
  10:"X",
  40:"XL",
  50:"L",
  90:"XC",
  100:"C",
  400: "CD",
  500: "D",
  900: "CM",
  1000:"M"
}

var keyArray = [1000,900,500,400,100,90,50,40,10,9,5,4,1];



function makeMeRoman(input = null){
	var romanNumeralString = "";
  for(let i = 0; i<keyArray.length; i++){
    var currentKey = keyArray[i];
    if(input / currentKey >= 1){
      var multiplier = Math.floor(input/currentKey);
      var remainder = input - multiplier * currentKey;
      for(let j = 0; j < multiplier; j++){
        romanNumeralString += romanNChart[currentKey];
      }
      makeMeRoman(remainder);
      return romanNumeralString;
    }
    if(input / currentKey == 0){
      return romanNumeralString;
    }
  }
}
