function generatePassword(){
  //TODO: your code goes here
  return "password"
}

var upperCase = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
var lowerCase = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var number = ['1','2','3','4','5','6','7','8','9']
var special = ['!','@','#','$','%','^','&','*','+','=','-','?']
// GIVEN I need a new, secure password

// WHEN I click the button to generate a password

// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
promt1= window.confirm ("Uppercase?")
promt2= window.confirm ("lowercase?")
prompt3= window.confirm ("number?")
prompt4= window.confirm ("special character?")
prompt5= window.confirm ("how many characters")
// THEN I select which criteria to include in the password

  if (prompt1 == prompt1);{
    upperCase = Math.floor(Math.random* upperCase.length)
    console.log ("confirm")
    
  }


// WHEN prompted for the length of the password

// THEN I choose a length of at least 8 characters and no more than 128 characters 

// WHEN asked for character types to include in the password

// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt

// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered

// THEN a password is generated that matches the selected criteria


// WHEN the password is generated

// THEN the password is either displayed in an alert or written to the page


// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
