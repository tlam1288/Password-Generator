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
  console.log(characterNum);
  //verifies character count chosen is within range
  if (characterNum < 8 || characterNum > 128) {
    alert("Please choose a number between 8 - 128");
  }

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  //passwordText.value = password;

  //Testing to see if code to generate string works below
  // var random =
  //   Math.random().toString(36).substring(2, 15) +
  //   Math.random().toString(36).substring(2, 15);
  // alert(random);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
