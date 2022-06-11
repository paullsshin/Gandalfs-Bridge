// Assignment Code
// event listener to generate button
const generateBtn = document.getElementById('generateBtn')
generateBtn.addEventListener('click', writePassword)
// the special characters 
const specialCharacters = "!@#$%^&*()";

// Places password in the input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}

// Prompts that come up after you click generate password
function generatePassword() {
  var passwordLength = prompt("Desired character length of password between 8 and 128");

  var numbers = confirm("Do you desire numbers in your password?");

  var lowerCases = confirm("Do desire lowercases in your password?");

  var upperCases = confirm("Do you desire uppercases in your password?");

  var special = confirm("Do you desire special characters in your password?");

  // minimum count for numbers, lower Cases, upper Cases & special characters
  var minimumCount = 1;


  // variable of empty minimums for numbers, lower Cases, upper Cases & special characters

  var minimumNumbers = "2";
  var minimumLowerCases = "2";
  var minimumUpperCases = "2";
  var minimumSpecialCharacters = "2";


  // Functions that assist password generation
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

};


// if statements to ensure user selected ok for all and uses empty minimums above
  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;

  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;

  }

  // empty string variable utilised for loop below
  var randomPasswordGenerated = "";

  // loop gathering random characters
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }

  // ensures characters are added to password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  return randomPasswordGenerated;

}