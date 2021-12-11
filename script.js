// Assignment code here 

//Questions: 
//how to make code start over if something is invalid  
//does it all stay within one function? (local/global?)

function generatePassword() {

  var charAmountString = window.prompt("How many characters would you like your password to have? (Please enter a numerical value that is greater than or equal to 8 and less than or equal to 128).");
  console.log("charAmount input = " + charAmountString);
  var charAmount = parseInt(charAmountString);
  console.log(charAmount);
  console.log(charAmount >= 8);
  console.log(charAmount <= 128);

  if (charAmount >= 8 && charAmount <= 128) {
    window.alert("Great! Your password will be " + charAmount + " characters long.");
    console.log("Var  charAmount = " + charAmount)
  }
  else {
    window.alert("Invalid input. To generate a password, please refresh the browser and try again with an acceptable number.");
  }
  //return null

  var pwdCharCount = [];
  var charSet = [];
  var pwdChars = [];


  window.alert("There are 4 character types: Uppercase, Lowercase, Numbers, and Special Characters. You must agree to include at least one character type in order to generate your password. You may agree to have all character types in your password (this is recommended for increased password protection). For each alert, press 'OK' if you would like the character type in your password. If not, press 'Cancel'.");

  var upperChar = window.confirm("Would you like to include uppercase letters in your password?");
  if (upperChar) {
    console.log("Include uppercase.");
  }
  else {
    console.log("Do not include uppercase.")
  }

  var lowerChar = window.confirm("Would you like to include lowercase letters in your password?");
  if (lowerChar) {
    console.log("Include lowercase.");
  }
  else {
    console.log("Do not include lowercase.")
  }

  var numChar = window.confirm("Would you like to include numerical characters in your password?");
  if (numChar) {
    console.log("Include numbers.");
  }
  else {
    console.log("Do not include numbers.")
  }

  var specChar = window.confirm("Would you like to include special characters in your password?");
  if (specChar) {
    console.log("Include special characters.");
  }
  else {
    console.log("Do not include special characters.")
  }

  function determineChars() {

    //Uppercase Characters Array
    if (upperChar) {
      upperSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      pwdCharCount = pwdCharCount + 1;
  
      var randomUpper = upperSet[Math.floor(Math.random() * upperSet.length)];
      pwdChars.push(randomUpper);
    }
    else {
      upperSet = [];
      pwdCharCount = pwdCharCount;
    }
  
  
  
    //Lowercase Characters Array
    if (lowerChar) {
      lowerSet = 'abcdefghijklmnopqrstuvwxyz'.split('');
      pwdCharCount = pwdCharCount + 1;
      var randomLower = lowerSet[Math.floor(Math.random() * lowerSet.length)];
      pwdChars.push(randomLower);
    }
    else {
      lowerSet = [];
      pwdCharCount = pwdCharCount;
    }
  
  
    //Numerical Charicters Array
    if (numChar) {
      numSet = '0123456789'.split('');
      pwdCharCount = pwdCharCount + 1;
  
      var randomNum = numSet[Math.floor(Math.random() * numSet.length)];
      pwdChars.push(randomNum);
  
    }
    else {
      numSet = [];
      pwdCharCount = pwdCharCount;
    }
  
  
    //Special Characters Array 
    if (specChar) {
      specSet = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split('');
      specSet.push('"');
      pwdCharCount = pwdCharCount + 1;
  
      var randomSpec = specSet[Math.floor(Math.random() * specSet.length)];
      pwdChars.push(randomSpec);
    }
    else {
      specSet = [];
      pwdCharCount = pwdCharCount;
    }
    charSet = charSet.concat(upperSet, lowerSet, numSet, specSet)
  
    console.log(upperSet);
    console.log(lowerSet);
    console.log(numSet);
    console.log(specSet);
    console.log(pwdCharCount.length);
    console.log("current characters in array: " + pwdChars);
    console.log("charSet = " + charSet);
  
  
    console.log(pwdChars);
  
    if (pwdCharCount.length >= 1) {
      var charRemain = charAmount - pwdCharCount.length;
      console.log("Will generate" + charRemain + " more random characters before generating a password");
    }
    else {
      window.alert("You are required to accept at least one of the types of characters. A password will not generate. Please try again and confirm what types of characters you would like in your password.")
    }
  
  
    console.log(charRemain);
  
    for (let i = 0; i < charRemain; i++) {
      pwdChars.push(charSet[Math.floor(Math.random() * charSet.length)]);
    }
  
    console.log(pwdChars);
  
    pwdChars = pwdChars.join("");
  
    console.log(pwdChars);
  
  
    return pwdChars;
  }

  var generatedPassword = determineChars();
  return generatedPassword
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
  

  // // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
