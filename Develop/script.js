// Assignment Code. This links click to the button in HTML
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //prompts how many characters you want
  var number = prompt(
    "How many characters would you like? Choose a number between 8 - 128"
  );
  //this makes sure number chosen in prompt is an integer
  var characterNum = Math.floor(number);
  //console.log(characterNum);
  //verifies character count chosen is within range
  if (characterNum < 8 || characterNum > 128) {
    alert("Please choose a number between 8 - 128");
    return false;
  }

  //prompts to ask about character choices
  var lowerChoice = confirm("Do you want lowercase characters?");
  var upperChoice = confirm("Do you want uppercase characters?");
  var numericChoice = confirm("Do you want numerics?");
  var specialChoice = confirm("Do you want special characters?");

  var lowerCase = false;
  var upperCase = false;
  var numeric = false;
  var special = false;
  var specialCharacters = ["!", "@", "#", "$", "%"];

  if (lowerChoice === true) {
    var lowerCase = Math.random().toString(36).substring(2, 15).toLowerCase();
    console.log(lowerCase);
  }

  if (upperChoice === true) {
    var upperCase = Math.random().toString(36).substring(2, 15).toUpperCase();
    console.log(upperCase);
  }

  if (numericChoice === true) {
    var numeric = Math.random();
    console.log(numeric);
  }

  if (specialChoice === true) {
    var special = specialCharacters[Math.floor(Math.random * 5)];
    console.log(specialCharacters);
  }

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  //passwordText.value = password;

  //Testing to see if code to generate string works below
  var random =
    // Math.random().toString(36).substring(2, 15) +
    // Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15).toUpperCase();
  alert(random);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
