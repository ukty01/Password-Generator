document.getElementById('generate-password').addEventListener('click', function() {
  const length = parseInt(document.getElementById('password-length').value);
  const useUppercase = document.getElementById('include-uppercase').checked;
  const useNumbers = document.getElementById('include-numbers').checked;
  const useSpecial = document.getElementById('include-special').checked;

  const password = generatePassword(length, useUppercase, useNumbers, useSpecial);
  document.getElementById('generated-password').textContent = password;
});

document.getElementById('copy-password').addEventListener('click', function() {
  const password = document.getElementById('generated-password').textContent;
  navigator.clipboard.writeText(password).then(() => {
    alert('클립보드에 복사되었습니다.');
  });
});

function generatePassword(length, useUppercase, useNumbers, useSpecial) {
  const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specialChars = '!@#$%^&*()_+=-';

  let allChars = lowerChars;
  if (useUppercase) allChars += upperChars;
  if (useNumbers) allChars += numbers;
  if (useSpecial) allChars += specialChars;

  let password = '';
  for (let i = 0; i < length; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  return password;
}
