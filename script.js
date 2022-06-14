// Assignment Code
var generateBtn = document.querySelector("#generate");

var lengthsPeeps = 8;
var everyPeeps = [];
var numberPeeps = ["1","2","3","4","5","6","7","8","9","0"];
var littlePeeps = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var bigPeeps = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialPeeps = ["~","`","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","{","]","}",";",":","'",",","<",".",">","/","?"];


function generatePassword() {
  console.log("Let's get this!")
};
// 1. prompt the user for the password criteria
//  a. password length 8 < 128
//  b. lowercase, uppercase, numbers, and special characters
// 2. validate input
// 3. generate password based on criteria
// 4. display password on page
// things to store numbers

// things to store special characters

// things to store lower case letters

// things to store uppercase letters

// what sorts oftasks does me code need to complete?




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
