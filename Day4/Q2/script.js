document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Clear previous error messages
  clearErrors();

  // Validate each field
  let isValid = true;
  isValid &= validateName();
  isValid &= validateEmail();
  isValid &= validatePassword();

  if (isValid) {
      alert('Form submitted successfully!');
      // Here you can add the code to actually submit the form if needed
  }
});

function clearErrors() {
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('passwordError').textContent = '';
}

function validateName() {
  const name = document.getElementById('name').value;
  const nameError = document.getElementById('nameError');

  if (name === '') {
      nameError.textContent = 'Name is required.';
      return false;
  } else if (!/^[A-Za-z\s]+$/.test(name)) {
      nameError.textContent = 'Name should contain only alphabetic characters.';
      return false;
  }
  return true;
}

function validateEmail() {
  const email = document.getElementById('email').value;
  const emailError = document.getElementById('emailError');

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === '') {
      emailError.textContent = 'Email is required.';
      return false;
  } else if (!emailRegex.test(email)) {
      emailError.textContent = 'Please enter a valid email address.';
      return false;
  }
  return true;
}

function validatePassword() {
  const password = document.getElementById('password').value;
  const passwordError = document.getElementById('passwordError');

  if (password === '') {
      passwordError.textContent = 'Password is required.';
      return false;
  } else if (password.length < 8) {
      passwordError.textContent = 'Password must be at least 8 characters long.';
      return false;
  }
  return true;
}
