// Assignment Code
// 1. prompt the suer for the password criteria
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



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
