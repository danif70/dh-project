document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login-form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const loginButton = document.getElementById('login-button');

  loginForm.addEventListener('submit', function (event) {
    if (!validateForm()) {
      loginButton.disabled = true;
      event.preventDefault();
    }
  });

  emailInput.addEventListener('input', function () {
    validateEmail();
    checkFormValidity();
  });

  passwordInput.addEventListener('input', function () {
    validatePassword();
    checkFormValidity();
  });

  function validateForm() {
    const isValidEmail = validateEmail();
    const isValidPassword = validatePassword();

    return isValidEmail && isValidPassword;
  }

  function validateEmail() {
    const emailError = document.querySelector('.email-error');
    emailError.textContent = '';

    if (emailInput.value.trim() === '') {
      emailError.textContent = 'Por favor, ingresa tu correo electrónico.';
      return false;
    }

    return true;
  }

  function validatePassword() {
    const passwordError = document.querySelector('.password-error');
    passwordError.textContent = '';

    if (passwordInput.value.trim() === '') {
      passwordError.textContent = 'Por favor, ingresa una contraseña.';
      return false;
    }

    return true;
  }

  function checkFormValidity() {
    const isValidForm = validateForm();
    loginButton.disabled = !isValidForm;
  }
});
