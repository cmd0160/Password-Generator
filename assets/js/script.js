// Assignment code here
const upperChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const lowerChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const numChars = [0,1,2,3,4,5,6,7,8,9];
const specChars = ['!','@','#','$','%','^','&','*','(',')','_','+'];
let passwordArr = [];
let newPass = [];




function generatePassword() {
  newPass = [];
  var upper = window.confirm("Do you want to include Uppercase Characters?");
  if (upper) {
    passwordArr = passwordArr + upperChars;
    alert("You are inluding uppercase characters");
  } else {
    alert("You are not including uppercase characters");
  }
  
  var lower = window.confirm("Do you want to include Lower Characters?");
  if (lower) {
    passwordArr = passwordArr + lowerChars;
    alert("You are inluding Lower characters");
  } else {
    alert("You are not including Lower characters");
  }
  
  var nums = window.confirm("Do you want to include Number Characters?");
  if (nums) {
    passwordArr = passwordArr + numChars;
    alert("You are inluding Number characters");
  } else {
    alert("You are not including Number characters");
  }
  
  var specs = window.confirm("Do you want to include Special Characters?");
  if (specs) {
    passwordArr = passwordArr + specChars;
    alert("You are inluding Special characters");
  } else {
    alert("You are not including Special characters");
  }
  // console.log(passwordArr);
  
  var passwordLength = parseInt(
    window.prompt(
      "How many characters would you like to include in your password? Please select a number between 8 and 128."
    )
  );
  alert(`You have chosen to include ${passwordLength} characters in your password.`);
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Please pick a number between 8 and 128.");
  }
  // console.log(passwordLength);


  for(i = 1; i <= passwordLength; i++) {
    let randPasswordChar =  Math.floor(Math.random() * passwordArr.length + 1);
    let oneChar = passwordArr[randPasswordChar];
    newPass += oneChar;
  }

  return newPass ;
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


