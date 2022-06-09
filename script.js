// Assignment Code

// things to store numbers
var numbers = "1234567890".split("") 

// or ["1","2","3","4","5","6","7","8","9","0"]

// things to store special characters
var characters = []

// things to store lower case letters

// things to store uppercase letters

// what sorts oftasks does me code need to complete?

// generate password

function writePassword() {
  // prompt the user for their password length and store it in a variable

  // validate thepassword length and make sure it is a number between or equal to 8-128

  // prompt the user to see if they want special characters and to store it in a variable
}



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// https://www.w3schools.com/jsref/jsref_concat_array.asp

// function generatePassword() {
//   if( true )
//   return;
// }