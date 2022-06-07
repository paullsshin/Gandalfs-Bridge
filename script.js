// Assignment Code

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
