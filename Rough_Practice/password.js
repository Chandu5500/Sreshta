function isPasswordValid(password) {
  // Check if the password has a minimum length of 8 characters
  if (password.length < 8) {
    return false;
  }

  // Check if the password contains at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // Check if the password contains at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }

  // Check if the password contains at least one digit
  if (!/\d/.test(password)) {
    return false;
  }

  // Check if the password contains at least one special character
  if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
    return false;
  }

  // Check if the password contains common words or patterns
  const commonWords = ["password", "123456", "qwerty", "admin"]; // Add more if needed
  for (const commonWord of commonWords) {
    if (password.toLowerCase().includes(commonWord)) {
      return false;
    }
  }

  // If all checks pass, the password is valid
  return true;
}

// Example usage:
const password = "StrongP@ssw0rd";
if (isPasswordValid(password)) {
  console.log("Password is valid!");
} else {
  console.log("Password is invalid. Please choose a stronger password.");
}