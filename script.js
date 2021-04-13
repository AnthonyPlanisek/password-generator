// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {
  var number = prompt("How long do you want your password")
  var retVal = ""
  



  if (number < 8 || number > 128) {
    retVal = "Please enter a number greater than 8 and less than 128"
    
  }

  if (number >= 8 && number <= 128) {

    var lowercase = confirm("Do you want the password to contain lowercase")
    var uppercase = confirm("Do you want the password to contain uppercase")
    var numbers = confirm("Do you want the password to contain numbers")
    var specialChar = confirm("Do you want the password to contain special characters")


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
            charactersS = "0123456789" 
          } else {
            charactersS = ""
          }
          
      






    characters = charactersL + charactersU + charactersN + charactersS
  
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



