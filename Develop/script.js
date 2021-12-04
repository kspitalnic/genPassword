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
    window.alert("Please try again selecting a whole number greater than or equal to 8 and less then or equal to 128.");
  }

//variable for character amount. converted to float?

  //if input is greater than 8 and less than 128, then confirm the variable 



  
  

//variable for characters. prompt and return numerical variable. convert string to float 
//if input is number greater than 8 or less than 128, then confirm that as the variable. 
//else if not enough char or too many, say invalid and call again. 
//else cant understand the value please input an appropriate number (call again)

//initialize password chars as empty string actually array?

//confirm upper. if yes. set up variables. if no. empty set. then pwdchar=pwdchar+one random character from the set (concatinate)
//(so if yes pwd string will now have one upper char in it. if no, will remain an empty set). also append to master char 

//confirm lower. if yes. set up variables. if no. empty set. then pwdchar=pwdchar+one random character from the set (concatinate)
//(so if yes pwd string will now have any previous confirm char types. if no, will remain an empty set)

//confirm numberic char. if yes. set up variables. if no. empty set. then pwdchar=pwdchar+one random character from the set (concatinate)
//(so if yes pwd string will now have any previous confirm char types. if no, will remain an empty set)

//confirm special char. if yes. set up variables. if no. empty set. then pwdchar=pwdchar+one random character from the set (concatinate)
//(so if yes pwd string will now have any previous confirm char types. if no, will remain an empty set)



//password chars remaining = char length - pwdchar.length
//we have the  master char which is all the characters that are acceptable with their preferences 

//for pwd chars remaining pick a random item from the set and append it to pwdchar (do this until pwd char = char amount)


//once have the pwd char filled with appropriate char amount, randomize values in pwd char and use all the items in the pwd char variable 
//and append one by one to a string. this will be the generated password. 



// var upperChar=window.confirm ("Would you like to include uppercase letters in your password?");

// var lowerChar=window.confirm ("Would you like to include lowercase letters in your password?");

// var numChar=window.confirm ("Would you like to include numerical characters in your password?");

// var specialChar=window.confirm ("Would you like to include special characters in your password?");


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