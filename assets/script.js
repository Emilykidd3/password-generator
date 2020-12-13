// Assignment code here

// ask how many characters in password
var passwordCharacters = function() {
  var passwordLength = window.prompt("How long would you like your password to be? Enter a number between 8 and 128.")
    if (passwordLength === "" || passwordLength === null || passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    window.alert("Please enter a number between 8 and 128");
    return;
    }
  passwordLength = parseInt(passwordLength);

  // ask what should be included in password
  var includeNumbers = window.confirm("Press ok if you would like NUMBERS included in your password.");
  var specialCharacters = window.confirm("Press ok if you would like SPECIAL CHARACTERS included in your password.");
  var lowerCase = window.confirm("Press ok if you would like LOWER CASE LETTERS included in your password.");
  var upperCase = window.confirm("Press ok if you would like UPPER CASE LETTERS included in your password.");

  let charArray = [];
  let i = 0;
  if (includeNumbers) {
    charArray[i] += '0123456789';
    i++;
  }
  if (specialCharacters) {
    charArray[i] += '!"#$%&()*+,-./:;<=>?@[]^_`{|}~\''
    i++;
  }
  if (lowerCase) {
    charArray[i] += 'abcdefghijklmnopqrstuvwxyz'
    i++;
  }
  if (upperCase) {
    charArray[i] += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    i++;
  }
  console.log(charArray);

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

  // var numberString = '0123456789'
  // var i = Math.floor(Math.random() * 10);
  // var chosenNumber = numberString[i]

  // // 33 total
  // var specialCharactersString = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~'
  // // list does not incluce '
  // var i = Math.floor(Math.random() * 32);
  // var chosenSpecialCharacter = specialCharactersString[i]

  // var lowercaseString = 'abcdefghijklmnopqrstuvwxyz'
  // var i = Math.floor(Math.random() * 26);
  // var chosenLowercase = lowercaseString[i]

  // var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  // var i = Math.floor(Math.random() * 26);
  // var chosenUppercase = uppercaseString[i]

  // var allChars = chosenNumber + chosenSpecialCharacter + chosenLowercase + chosenUppercase

  // ["abc", "ABC", ]
  var createdPassword = "";
  var characterArray = []
  for(var i = 0; i < options.pwordLength; i++){
    // get a random index from charArray ==> 1
    var randomIndex = Math.floor(Math.random()*options.possibleCharacterTypes.length);
    // charIndex = 1
    // get a random index from charArray[1]
    console.log({randomIndex});
    var myString = options.possibleCharacterTypes[randomIndex];
    console.log({myString});
    var randomCharacter = Math.floor(Math.random()*myString.length);
    console.log({randomCharacter});
    // append to createdPassword
    createdPassword += randomCharacter;
    console.log({createdPassword});
    // console.log(chosenNumber + chosenSpecialCharacter + chosenLowercase + chosenUppercase)
  }
  // return createdPassword
}





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("I'm being called")
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
