// Assignment Code

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // variables for each requirement
  var numberPeeps = ["1","2","3","4","5","6","7","8","9","0"];
  var littlePeeps = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var bigPeeps = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var specialPeeps = ["~","`","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","{","]","}",";",":","'",",","<",".",">","/","?"];
  var lengthPeeps = [];
// prompts asking the use what they want in their password
 characterLength = prompt("How many characters would you like to be in your password? Please choose a number between 8 and 128 chracters. ");
  if (characterLength < 8 || characterLength > 128) {
    return prompt("Please enter a valid number between 8 and 128.");
  } else if (isNaN(characterLength)) {
    characterLength = prompt("Please enter a number digit. ");
  } 

  lowerCase = confirm(("Would you like to have little letters in your password? "));

  upperCase = confirm(("Would you like to have big letters in your password? ")); 

  storeNumbers = confirm(("Would you like to have numbers in your password? "));


  makeSpecial = confirm(("Would you like to have special characters in your password? "));
 
// if no options are chosen then a message will pop up saying to choose at least one option
  if (lowerCase === false && upperCase === false && storeNumbers === false && makeSpecial === false) {
    return confirm("Please select at least one option for your password.");
  };
// once options are chosen they will be merged to create a password
  if (lowerCase) {
    lengthPeeps = lengthPeeps.concat(littlePeeps);
  }

  if (upperCase) {
    lengthPeeps = lengthPeeps.concat(bigPeeps);
  }

  if (storeNumbers) {
    lengthPeeps = lengthPeeps.concat(numberPeeps);
  }

  if (makeSpecial) {
    lengthPeeps = lengthPeeps.concat(specialPeeps);
  }

  var getPassword = "";
  for ( var i = 0; i < characterLength; i++) {
    var rng = [Math.floor(Math.random() * lengthPeeps.length)];
    getPassword = getPassword + lengthPeeps[rng];
  }
  // password will generate off of the given options
  return getPassword;
};
// password will appear inside of the box
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
