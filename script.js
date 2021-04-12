// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {
  var number = prompt("How long do you want your password")
  var retVal = ""
  
  if (number < 8 || number > 128) {
    retVal = "yes"
    
  }

  if (number >= 8 && number <= 128) {
    characters = ""
    var lowercase = confirm("Do you want the password to contain lowercase")
    if (lowercase == true) {
      
    }






    characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  
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



