// Assignment code here

var passwordCharacters = function() {
// function passwordCharacters() {
  var passwordLength = parseInt(window.prompt("How long would you like your password to be? Enter a number between 8 and 128."))
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    window.alert("Please enter a number between 8 and 128");
    return passwordCharacters();
    }

  // ask what should be included in password
  var includeNumbers = window.confirm("Press ok if you would like NUMBERS included in your password.");
  var specialCharacters = window.confirm("Press ok if you would like SPECIAL CHARACTERS included in your password.");
  var lowerCase = window.confirm("Press ok if you would like LOWER CASE LETTERS included in your password.");
  var upperCase = window.confirm("Press ok if you would like UPPER CASE LETTERS included in your password.");
  if (includeNumbers === false && specialCharacters === false && lowerCase === false && upperCase === false) {
    window.alert("Please choose at least one type of character to include.");
    return passwordCharacters();
  }

  let charArray = [];
  if (includeNumbers) {
    charArray.push ('0123456789');
  }
  if (specialCharacters) {
    charArray.push('!"#$%&()*+,-./:;<=>?@[]^_`{|}~\'');
  }
  if (lowerCase) {
    charArray.push ('abcdefghijklmnopqrstuvwxyz');
  }
  if (upperCase) {
    charArray.push ('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  }
  // console.log(charArray);

  // object to hold password 
  return {
    // key : value,
    pwordLength: passwordLength,
    pwordNumber: includeNumbers,
    pwordCharacter: specialCharacters,
    pwordLowercase: lowerCase,
    pwordUppercase: upperCase,
    possibleCharacterTypes: charArray
  }
}

function generatePassword() {
  // call function to ask for password character desired and length
  var options = passwordCharacters();

  var createdPassword = "";
  for(var i = 0; i < options.pwordLength; i++){
    // get a random index from charArray 
    var randomIndex = Math.floor(Math.random()*options.possibleCharacterTypes.length);
    // get a random index from charArray[]
    var myString = options.possibleCharacterTypes[randomIndex];
    var randomCharacter = Math.floor(Math.random()*myString.length);
    var addedChar = myString[randomCharacter];
    // append to createdPassword
    createdPassword += addedChar;
    console.log({createdPassword});
  }
  // return createdPassword
  return createdPassword;
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
// 9- put the password into the html
