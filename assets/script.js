// Assignment code here

// ask how many characters in password
var passwordCharacters = function() {
  var passwordLength = window.prompt("How long would you like your password to be? Enter a number between 8 and 128.")
    if (passwordLength === "" || passwordLength === null || passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    window.alert("Please enter a number between 8 and 128");
    return;
    }
  passwordLength = parseInt(passwordLength);

  // ask if numbers should be included
  var includeNumbers = window.confirm("Press ok if you would like NUMBERS included in your password.");

  // ask if special characters should be included
  var specialCharacters = window.confirm("Press ok if you would like SPECIAL CHARACTERS included in your password.");

  // ask if lower case letters should be included
  var lowerCase = window.confirm("Press ok if you would like LOWER CASE LETTERS included in your password.");

  //  as if upper case letters should be included
  var upperCase = window.confirm("Press ok if you would like UPPER CASE LETTERS included in your password.");

  // object to hold password 
  return {
    pwordLength: passwordLength,
    pwordNumber: includeNumbers,
    pwordCharacter: specialCharacters,
    pwordLowercase: lowerCase,
    pwordUppercase: upperCase,
  }

}
// call function to ask for password character desired and length
var options = passwordCharacters();

options.pwordLength

options.pwordNumber
var includenumbers = '0123456789'
var i = Math.floor(Math.random() * 10);
var chosenNumber = includenumbers[i]

options.specialCharacters
// 33 total
var specialCharacters = ' !"#$%&()*+,-./:;<=>?@[\]^_`{|}~'
// list does not incluce '
var i = Math.floor(Math.random() * 33);
var chosenSpecialCharacter = specialCharacters[i]

options.pwordLowercase
var lowercase = 'abcdefghijklmnopqrstuvwxyz'
var i = Math.floor(Math.random() * 26);
var chosenLowercase = lowercase[i]

options.pwordUppercase
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var i = Math.floor(Math.random() * 26);
var chosenUppercase = uppercase[i]

for(var i = 0; i < options.pwordLength; i++){
  console.log(chosenNumber || chosenSpecialCharacter || chosenLowercase || chosenUppercase)
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// pseudocode 
// 1- get password length
// use window.prompt 
// 2- ask if numbers should be included in the password
// if yes, include at least one number
// if no, do not include numbers
// 3- ask if special characters should be included in the password
// if yes, include at least one special characters
// if no, do not include special characters
// 4- ask if lower case letters should be included in the password
// if yes, include at least one lower case letter
// if no, do not include any lower case letters
// 5- ask if upper case letters should be included in the password
// if yes, include at least one upper case letter
// if no, do not include any upper case letters
// 6- put them all together
// 7- randomize the order 
// 8- get to desired length
