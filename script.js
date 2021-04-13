// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input



function generatePassword() {
    //asking the user how long the string should be
  var number = prompt("How long do you want your password")
    //value for the password
  var retVal = ""
  


    //checks that the user is making a secure password or one that is not too long
  if (number < 8 || number > 128) {
    retVal = "Please enter a number greater than 8 and less than 128"
    
  }
    //start of the check for what values the user wants in their password
  if (number >= 8 && number <= 128) {

      //all the values for the password parts
    var lowercase = confirm("Do you want the password to contain lowercase")
    var uppercase = confirm("Do you want the password to contain uppercase")
    var numbers = confirm("Do you want the password to contain numbers")
    var specialChar = confirm("Do you want the password to contain special characters")

      //checks what the user had selected
    if (lowercase == true) {
      charactersL = "abcdefghijklmnopqrstuvwxyz" 
    } else {
      charactersL = ""
    }
      if (uppercase == true) {
        charactersU = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
      } else {
        charactersU = ""
      }
        if (numbers == true) {
          charactersN = "0123456789" 
        } else {
          charactersN = ""
        }
          if (specialChar == true) {
            charactersS = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~" 
          } else {
            charactersS = ""
          }
          
      //adds all the strings together to make the value to be randomized 
    characters = charactersL + charactersU + charactersN + charactersS
      //randomizer
    for (var i = 0, n = characters.length; i < number; ++i) {
    retVal += characters.charAt(Math.floor(Math.random() * n));
  }
  
  
 
}
return retVal;
}


function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
