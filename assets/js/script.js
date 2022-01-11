// Assignment code here

function getLowerChars() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getUpperChars() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getNumberChars() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getSymbolChars() {
  return String.fromCharCode(Math.floor(Math.random() * 14) + 33);
}


console.log(getSymbolChars());












function setPasswordCriteria() {

  let promptLength = prompt('How long would you like the password to be?');
    if(promptLength >= 8 && promptLength <= 128) {
      alert(`Your password will be ${promptLength} characters long.`)
    }else{
      alert('Please pick a number between 8-128?')
    }

    let capitalLetterPrompt = confirm('Would you like to include capital letters in your password?')
    if(numberChars) {
      alert('Your password will include capital letters.')
    }else{
      alert('Your password will not include capital letters');
    }

    let lowercaseLetterPrompt = confirm('Would you like to include lowercase letters in your password?')
    if(numberChars) {
      alert('Your password will include lowercase letters.')
    }else{
      alert('Your password will not include lowercase letters');
    }

    let numPrompt = confirm('Would you like to include numbers in your password?')
    if(numberChars) {
      alert('Your password will include numbers.')
    }else{
      alert('Your password will not include numbers');
    } 
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
