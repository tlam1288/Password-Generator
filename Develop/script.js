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

  // these store the choices from user prompts about characters
  var lowerCase = false;
  var upperCase = false;
  var numeric = false;
  var special = false;
  var specialCharacters = ["!", "@", "#", "$", "%"];
  var total = "";

  //if true then lower case letters will be added
  if (lowerChoice === true) {
    var lowerCase = Math.random().toString(36).substring(2, 15).toLowerCase();
    var total = total + lowerCase;
    console.log(lowerCase);
  }

  //if true then upper case letters will be added
  if (upperChoice === true) {
    var upperCase = Math.random().toString(36).substring(2, 15).toUpperCase();
    var total = total + upperCase;
    console.log(upperCase);
  }

  //if true then numbers will be added
  if (numericChoice === true) {
    var numeric = Math.floor(Math.random() * 10);
    var total = total + numeric;
    console.log(numeric);
  }

  //if true then a special character will be added
  if (specialChoice === true) {
    var special = specialCharacters[Math.floor(Math.random() * 5)];
    var total = total + special;
    console.log(special);
  }

  //var password = lowerCase + upperCase + numeric + special;
  // getPassword();
  // console.log(password);

  // function getPassword(characterNum) {
  //   var total = lowerCase + upperCase + numeric + special;
  //   var password = total.substring(2, characterNum);
  //   console.log(password);
  // }

  //getPassword();

  // var password = generatePassword();

  //prints password into text box
  var passwordText = document.querySelector("#password");
  passwordText.value = total;

  //Testing to see if code to generate string works below
  //var random =
  // Math.random().toString(36).substring(2, 15) +
  // Math.random().toString(36).substring(2, 15) +
  // Math.random().toString(36).substring(2, 15).toUpperCase();
  //alert(random);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
