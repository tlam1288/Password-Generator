1. when button is clicked: Need to add eventlistener
   and creat a prompt for password criteria.

2.Create a prompt to ask for length of password betwee 8-128 characters
create a fucntion in an if statement to check to see if # of characters meets min and max allowed

3. create prompt to ask which types of characters to include.
   lower, uppercase, numeric, and/or special characters.
   make sure at least 1 character typer is selected

4. generate a password based on criteria

5. display password in an alert or written to the page

PROMPT "how many characters do you want? Choose between 8 - 128"

//take the value submited for the # of characters and turn it into an integer
var characterNum = Math.floor(document.querySelector("#password").value)

//create confirm alert boxes to ask for types of characters to include

var lowerCase = confirm("Do you want lowercase characters?);
var upperCase = confirm("Do you want uppercase characters?);
var numeric = confirm ("Do you want numerics?");
var specialChar = confirm("Do you want special characters?);

// these confirm boxes will return true or false

IF
lowerCase = true {add lowercase}
upperCase = true {add uppercase}
numeric = ture {add numbers}
specialChar = true {add special characters}

// randomly generate password string
var random =
Math.random().toString(36).substring(2, 15) +
Math.random().toString(36).substring(2, 15);

// print the new password into #password
