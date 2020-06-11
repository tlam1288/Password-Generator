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
  var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"];
  var total = ""; //this holds the concatenated password strings

  //if true then lower case letters will be added. .replace changes numbers to x
  if (lowerChoice === true) {
    var lowerCase = Math.random()
      .toString(36)
      .substring(2, 15)
      .toLowerCase()
      .replace(/[0-9]/g, "x");

    var total = total + lowerCase;
    console.log(lowerCase);
  }

  //if true then upper case letters will be added. .replace changes numbers to A
  if (upperChoice === true) {
    var upperCase = Math.random()
      .toString(36)
      .substring(2, 15)
      .toUpperCase()
      .replace(/[0-9]/g, "A");
    var total = total + upperCase;
    console.log(upperCase);
  }

  //if true then numbers will be added
  if (numericChoice === true) {
    var numeric = Math.random().toString(10).substring(2, 15);
    var total = total + numeric;
    console.log(numeric);
  }

  //if true then a special character will be added
  if (specialChoice === true) {
    var special = specialCharacters[Math.floor(Math.random() * 8)];
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
} // closes writePassword()

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
