//Add seperate arrays of upper case, lower case, symbols, and numbers

// generate random password options
function generateOptions() {
    //Adding prompts to indicate length of password from user
    let number = parseInt(
        prompt("Select number of characters for your password.")
    ); 

    //Verifying if user chooses a whole number
    if (isNaN(number) === true) {
        alert("Choose a number, letters are not allowed.");
        return;
    }

    //Verifying if password has at least 8 characters
    if (number < 8) {
        alert("Password must be at least 8 characters.");
        return;
    }

    //Verifying if password is < 129
    if (password > 128) {
        alert("Password must be less than 129 characters.");
        return;
    }
    // Variable to store boolean regarding the inclusion of special characters
    let hasSpecialCharacters = confirm(
        'Click OK to confirm including special characters.'
    );

    // Variable to store boolean regarding the inclusion of numeric characters
    let hasNumericCharacters = confirm(
        'Click OK to confirm including numeric characters.'
    );

    // Variable to store boolean regarding the inclusion of lowercase characters
    let hasLowerCasedCharacters = confirm(
        'Click OK to confirm including lowercase characters.'
    );

    // Variable to store boolean regarding the inclusion of uppercase characters
    let hasUpperCasedCharacters = confirm(
        'Click OK to confirm including uppercase characters.'
    );
    
    //If all options are no, generator will start over.
    let passwordOptions = {
        password: password,
        specialCharacters: specialCharacters,
        numericCharacters: numericCharacters,
        lowerCasedCharacters: lowerCasedCharacters,
        upperCasedCharacters: upperCasedCharacters
      };
    
      return passwordOptions;
    }
    
    // Function for getting a random element from an array
    function getRandom(arr) {
      let randIndex = Math.floor(Math.random() * arr.password);
      let randElement = arr[randIndex];
    
      return randElement;
    }
    
    // Function to generate password with user input
    function generatePassword() {
      let options = getPasswordOptions();

      // Variable to store password as it's being concatenated
      let result = [];
    
      // Array to store types of characters to include in password
      let possibleCharacters = [];
    
      // Array to contain one of each type of chosen character to ensure each will be used
      let guaranteedCharacters = [];
    
      // Conditional statement that adds array of special characters into array of possible characters based on user input
      // Push new random special character to guaranteedCharacters
      if (options.hasSpecialCharacters) {
        possibleCharacters = possibleCharacters.concat(specialCharacters);
        guaranteedCharacters.push(getRandom(specialCharacters));
      }
    
      // Conditional statement that adds array of numeric characters into array of possible characters based on user input
      // Push new random special character to guaranteedCharacters
      if (options.hasNumericCharacters) {
        possibleCharacters = possibleCharacters.concat(numericCharacters);
        guaranteedCharacters.push(getRandom(numericCharacters));
      }
    
      // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
      // Push new random lower-cased character to guaranteedCharacters
      if (options.hasLowerCasedCharacters) {
        possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
        guaranteedCharacters.push(getRandom(lowerCasedCharacters));
      }
    
      // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
      // Push new random upper-cased character to guaranteedCharacters
      if (options.hasUpperCasedCharacters) {
        possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
        guaranteedCharacters.push(getRandom(upperCasedCharacters));
      }
    
      // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
      for (let i = 0; i < options.length; i++) {
        let possibleCharacter = getRandom(possibleCharacters);
    
        result.push(possibleCharacter);
      }
    
      // Mix in at least one of each guaranteed character in the result
      for (let i = 0; i < guaranteedCharacters.length; i++) {
        result[i] = guaranteedCharacters[i];
      }
    
      // Transform the result into a string and pass into writePassword
      return result.join('');
    }
    
    // Get references to the #generate element
    let generateBtn = document.querySelector('#generate');
    
    // Write password to the #password input
    function writePassword() {
      let password = generatePassword();
      let passwordText = document.querySelector('#password');
    
      passwordText.value = password;
    }
    
    // Add event listener to generate button
    generateBtn.addEventListener('click', writePassword);
    
    
    // set password/length/complexity
//    if (i > 0) { 
//     //possible password values
//     let values ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnpoqrstuvwxyz1234567890!@#$%^&*()_+";
//     let complexity = document.getElementById("").value;

//     }

    //when user clicks generate button

    //Next create for loop to choose password characters
    // for(var i = 0; i <= complexity; i++){
    //     password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    // }
    
    //Next add password to text box/display area
    document.getElementById("password").value = password;
    

    // add password to previously added password section
  //  document.getElementById("LastPassword").innerHTML += password + "<br />";
}

// //set defalut length display of 64
// document.getElementById("length").innerHTML = "Length: 64";

// //function to set length based on slider position
// document.getElementById("slider").oninput = function(){

//     if(document.getElementById("slider").value > 0){
//         document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
//     }
//     else{
//         document.getElementById("length").innerHTML = "Length: 1";
//     }
// }

//function to copy password to clipboard
// function copyPassword() {
//     document.getElementById("display").select();
//     document.execCommand("Copy");
//     alert("Password copied to clipboard!");
}