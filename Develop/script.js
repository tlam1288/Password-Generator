// Assignment Code. This links click to the button in HTML
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //prompts how many characters you want
  var number = prompt(
    "How many characters do you want your password to be? Must be at between 8 - 128"
  );

  //this makes sure number chosen in prompt is an integer
  var characterNum = Math.floor(number);
  //console.log(characterNum);
  //verifies character count chosen is within range and if a number is picked
  if (characterNum < 8 || characterNum > 128) {
    alert("Please choose a number between 8 - 128");
    return false;
  } else if (isNaN(number)) {
    alert("Must a number");
    return false;
  }

  //prompts to ask about character choices
  var lowerChoice = confirm("Do you want lowercase characters?");
  var upperChoice = confirm("Do you want uppercase characters?");
  var numericChoice = confirm("Do you want numerics?");
  var specialChoice = confirm("Do you want special characters?");

  // these store the choices from user prompts about characters
  var lowerCase = false;
  var upperCase = false;
  var numeric = false;
  var special = false;

  var totalString = "";
  var lowerString = "abcdefghijklmnopqrstuvwxyz";
  var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberString = "1234567890";
  var specialString = "!@#$%^&*";

  //if user chooses ok, the string values of variables above will get added to totalString
  if (lowerChoice === true) {
    var totalString = totalString + lowerString;
  }
  if (upperChoice === true) {
    var totalString = totalString + upperString;
  }
  if (numericChoice === true) {
    var totalString = totalString + numberString;
  }
  if (specialChoice === true) {
    var totalString = totalString + specialString;
  }

  // this for loop loops thorugh the totalString the number of times the user chose
  var password = "";
  for (i = 1; i <= characterNum; i++) {
    var character = Math.floor(Math.random() * totalString.length + 1);
    password += totalString.charAt(character);
  }

  //prints password into text box
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
} // closes writePassword()

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
