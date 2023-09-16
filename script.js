function generatePassword(length, includeNumbers, includeSymbols) {

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  
  let chars = uppercaseChars + lowercaseChars;
  if (includeNumbers) chars += numberChars;
  if (includeSymbols) chars += symbolChars;
  
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
}
  
  return password;
}

function generatePassword(length, includeNumbers, includeSymbols) {
  
return password;
}