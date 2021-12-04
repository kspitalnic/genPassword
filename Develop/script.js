// Assignment code here

var charAmountString = window.prompt ("How many characters would you like your password to have? (Please enter a numerical value that is greater than or equal to 8 and less than or equal to 128)."); 
  console.log("charAmount input = " + charAmountString); 
  var charAmount=parseInt(charAmountString);
  console.log(charAmount);
  console.log(charAmount>=8);
  console.log(charAmount<=128);

  if (charAmount>=8 && charAmount<=128) {
    window.alert("Great! Your password will be " + charAmount + " characters long.");
    console.log("Var  charAmount = " + charAmount)   }
  else {
    window.alert("Invalid input. Please try again selecting a whole number greater than or equal to 8 and less then or equal to 128.");
  }

var pwdChars = [];


var upperChar=window.confirm ("Would you like to include uppercase letters in your password?");

var lowerChar=window.confirm ("Would you like to include lowercase letters in your password?");

var numChar=window.confirm ("Would you like to include numerical characters in your password?");

var specChar=window.confirm ("Would you like to include special characters in your password?");


function determineChars(){

  if (upperChar) {
    upperSet= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    pwdChars=pwdChars+1;
  }
  else {
    upperSet=[];
    pwdChars=pwdChars;
  }

  

  if(lowerChar) {
    lowerSet= 'abcdefghijklmnopqrstuvwxyz'.split('');
    pwdChars=pwdChars+1;
  }
  else{
    lowerSet=[];
    pwdChars=pwdChars;
  }

  if (numChar) {
    numSet='0123456789'.split('');
    pwdChars=pwdChars+1;
  }
  else{
    numSet=[];
    pwdChars=pwdChars;

  }


  if (specChar){
    specSet=" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split('');
    specSet.push('"');
    pwdChars=pwdChars+1;
  }
  else {
    specSet=[];
    pwdChars=pwdChars;

  }

  console.log(upperSet);
  console.log(lowerSet);
  console.log(numSet);
  console.log(specSet);
  console.log(pwdChars.length);

var charRemain = charAmount-pwdChars.length;
  console.log(charRemain);
}

determineChars();







//password chars remaining = char length - pwdchar.length
//we have the  master char which is all the characters that are acceptable with their preferences 

//for pwd chars remaining pick a random item from the set and append it to pwdchar (do this until pwd char = char amount)


//once have the pwd char filled with appropriate char amount, randomize values in pwd char and use all the items in the pwd char variable 
//and append one by one to a string. this will be the generated password. 





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// }

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);}