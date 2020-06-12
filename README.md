# Password-Generator

This application was designed to randomly generate a password based off criteria the user selects.

## Description

The user is first promted to selected a number of characters they wish to make their password. A conditional verifies that the user's selection is indeed a number and that it is within the accepted range of 8-128 characters.

A confirm box is then used to ask if the user wants to include lowercase, uppercase, numerics, and/or special characters in their password. Variables for each criteria (lowerCase, upperCase, numeric, special) are oringally set to false. Conditional statements are created to see if the user selected ok for any of the critera. If selected, the variables get set to true and then their string value is concatenated into the empty totalString. At the end of the conditionals, a for loop is started to loop through the string values of totalString based off the number the user originally selected. A random character is chosen from totalString by using Math.floor(Math.random()). Each random character is then concatenated into the variable password. Once the loop ends the password is then printed into the textbox on the browser.

## Skills Showcased

Using conditionals to:
*Verify charater types
*Concatenating strings

Creating for loop to randomly select characters from a string to display

Adding event listeners to start a function upon a click

## Challenges I faced during this project

This was one of the hardest applications that I have made thus far in my coding journey. However this was also the first project that pseudo-coded before hand which was a game changer. I was able to map out and plan the steps of the code. This outline definately saved a lot of time guessing what to do next. My biggest challenge for this project was finding a way to sort out the types of characters that the user selected. Figuring out that adding certain character types into totalString by using a conditional was a breakthrough for me. That allowed me to be able to include or exclude a character type if needed.
