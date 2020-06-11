// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //Testing to see if code to generate string works below
  // var random =
  //   Math.random().toString(36).substring(2, 15) +
  //   Math.random().toString(36).substring(2, 15);
  // alert(random);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
