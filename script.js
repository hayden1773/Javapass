function generatePassword() {
  //TODO: your code goes here

  var prompt1 = window.confirm("Uppercase?")
  var prompt2 = window.confirm("lowercase?")
  var prompt3 = window.confirm("number?")
  var prompt4 = window.confirm("special character?")
  var prompt5 = parseInt(window.prompt("how many characters"))

  if (prompt5 >= 8 && prompt5 <= 128) {

    console.log("confirm")

    if (prompt1 == true || prompt2 == true || prompt3 == true || prompt4 == true) {
      console.log("confirm")

      var passwordOptions = []
      if (prompt1 == true) {
        for (var index = 0; index < upperCase.length; index++) {
          passwordOptions.push(upperCase[index])

        }
      }
      if (prompt2 == true) {
        for (var index = 0; index < lowerCase.length; index++) {
          passwordOptions.push(lowerCase[index])

        }
      }
      if (prompt3 == true) {
        for (var index = 0; index < number.length; index++) {
          passwordOptions.push(number[index])

        }
      }
      if (prompt4 == true) {
        for (var index = 0; index < special.length; index++) {
          passwordOptions.push(special[index])

        }
      }
      console.log(passwordOptions)
      var password = ""
      for (var index = 0; index < prompt5; index++) {
        var randomCharacter = passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
        password = password + randomCharacter
        console.log(password)
      }
      return password
    }

  }
  alert("password criteria not met, please keep between 8 and 128 characters")

}

var upperCase = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
var lowerCase = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '+', '=', '-', '?']
// GIVEN I need a new, secure password

// WHEN I click the button to generate a password

// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// promt1= window.confirm ("Uppercase?")
// promt2= window.confirm ("lowercase?")
// prompt3= window.confirm ("number?")
// prompt4= window.confirm ("special character?")
// prompt5= window.confirm ("how many characters")
// THEN I select which criteria to include in the password

// if (prompt1 == prompt1);{
//   upperCase = Math.floor(Math.random* upperCase.length)
//   console.log ("confirm")

// }


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
