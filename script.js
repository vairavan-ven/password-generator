var generateBtn = document.querySelector("#generate");

// Function to generate a random character from a given character set
function getRandomCharacter(charSet) {
  var randomIndex = Math.floor(Math.random() * charSet.length);
  return charSet[randomIndex];
}

// Function to generate a password based on user criteria
function generatePassword() {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_-+=<>?";

  // Prompt for password length
  var passwordLength = parseInt(prompt("Enter the password length (between 8 and 128 characters):"));

  // Validate password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be a number between 8 and 128.");
    return;
  }

  // Prompt for character types
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must select at least one character type.");
    return;
  }

  // Build character set based on selected criteria
  var charSet = "";
  if (includeLowercase) {
    charSet += lowercaseChars;
  }
  if (includeUppercase) {
    charSet += uppercaseChars;
  }
  if (includeNumeric) {
    charSet += numericChars;
  }
  if (includeSpecial) {
    charSet += specialChars;
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += getRandomCharacter(charSet);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
