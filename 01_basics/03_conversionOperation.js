let score = false

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber); //NaN :- Not a number when the I/P is mixture of number and string e.g. 33abc


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "A"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Animesh" => true

let someNumber = 69

let stringNumber = String(someNumber)
// console.log(typeof stringNumber);

// ********************* Operations *********************

let value = 3
let negValue = -value
// console.log(negValue);

let str1 = "Hello"
let str2 = " Animesh"

let str3 = str1 + str2
// console.log(str3); 

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1"+2+2); //122
// console.log(1+2+"2"); //32

// console.log(+true);

let num1,num2,num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
// gameCounter++ //If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
// ++gameCounter //If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
console.log(gameCounter);