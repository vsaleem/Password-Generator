//DOM elements / Handlers
const resultElement = document.getElementById("result");
const lengthElement = document.getElementById("length");
const uppercaseElement = document.getElementById("uppercase");
const lowercaseElement = document.getElementById("lowercase");
const numbersElement = document.getElementById("numbers");
const symbolsElement = document.getElementById("symbols");
const generateElement = document.getElementById("generate");
const clipboardElement = document.getElementById("clipboard");

//Object of Random Generation functions
const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

//Generate button
generateElement.addEventListener("click", function() {
  const hasLower = lowercaseElement.checked;
  const hasUpper = uppercaseElement.checked;
  const hasNumber = numbersElement.checked;
  const hasSymbol = symbolsElement.checked;
  const length = +lengthElement.value; 

  resultElement.innerText = generatePassword(
    length, 
    hasSymbol, 
    hasUpper, 
    hasLower, 
    hasNumber
    );
});

//Generate password function
function generatePassword(lower, upper, symbol, number, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
  (
    item => Object.values(item)[0]
  );


  if(typesCount === 0) {
    return "";
  }

  for(let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunction[funcName]();
    });
  }
  const finalPassword = generatedPassword.slice(0, length);
}

//Add seperate functions to generate random upper case, lower case, symbols, and numbers
//Charset code - http://www.net-comber.com/charset.html

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*()_+";
  return symbols[Math.floor(Math.random() * symbols.length)];
}


 


// // generate random password options
// function generateOptions() {
//   //Adding prompts to indicate length of password from user
//   let length = parseInt(
//       prompt("Select number of characters for your password.")
//   ); 

//   //Verifying if user chooses a whole number
//   if (isNaN(length) === true) {
//       alert("Choose a number, letters are not allowed.");
//       return;
//   }

//   //Verifying if password has at least 8 characters
//   if (length < 8) {
//       alert("Password must be at least 8 characters.");
//       return;
//   }

//   //Verifying if password is < 129
//   if (length > 128) {
//       alert("Password must be less than 129 characters.");
//       return;
//   }

//   // Variable to store boolean regarding the inclusion of special characters
//   let hasSymbol = confirm(
//       'Click OK to confirm including special characters.'
//   );

//   // Variable to store boolean regarding the inclusion of numeric characters
//   let hasNumber = confirm(
//       'Click OK to confirm including numeric characters.'
//   );

//   // Variable to store boolean regarding the inclusion of lowercase characters
//   let hasLower = confirm(
//       'Click OK to confirm including lowercase characters.'
//   );

//   // Variable to store boolean regarding the inclusion of uppercase characters
//   let hasUpper = confirm(
//       'Click OK to confirm including uppercase characters.'
//   );
  
//   // //If all options are no, generator will start over.
//   // let passwordOptions = {
//   //     length: length,
//   //     specialCharacters: specialCharacters,
//   //     numericCharacters: numericCharacters,
//   //     lowerCasedCharacters: lowerCasedCharacters,
//   //     upperCasedCharacters: upperCasedCharacters
//   //   };
  
//     return passwordOptions;

//   }

//Copy to clipboard
clipboardElement.addEventListener("click", function() {
  const textarea = document.createElement("textarea");
  const password = resultElement.innerText;

  if(!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard!");
});
