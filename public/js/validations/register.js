document.addEventListener('DOMContentLoaded', function () {
  // Declare variables for form inputs
  const nombreInput = document.getElementById('nombre');
  const apellidoInput = document.getElementById('apellido');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('contraseña');
  const repeatPasswordInput = document.getElementById('repcontraseña');
  const termsCheckbox = document.getElementById('terminos');
  const registerButton = document.getElementById('register-button');

  // Event listeners for real-time validation
  nombreInput.addEventListener('input', function () {
    validateNombre();
    checkFormValidity();
  });

  apellidoInput.addEventListener('input', function () {
    validateApellido();
    checkFormValidity();
  });

  emailInput.addEventListener('input', function () {
    validateEmail();
    checkFormValidity();
  });

  passwordInput.addEventListener('input', function () {
    validatePassword();
    checkFormValidity();
  });

  repeatPasswordInput.addEventListener('input', function () {
    validateRepeatPassword();
    checkFormValidity();
  });

  termsCheckbox.addEventListener('change', function () {
    validateTerms();
    checkFormValidity();
  });

  // Validation functions for each input field
  function validateNombre() {
    const nombreError = document.querySelector('.name-error');
    nombreError.textContent = '';

    if (nombreInput.value.trim() === '') {
      nombreError.textContent = 'Por favor, ingresa tu nombre.';
      return false;
    }

    return true;
  }

  function validateApellido() {
    const apellidoError = document.querySelector('.surname-error');
    apellidoError.textContent = '';

    if (apellidoInput.value.trim() === '') {
      apellidoError.textContent = 'Por favor, ingresa tu apellido.';
      return false;
    }

    return true;
  }

  function validateEmail() {
    const emailError = document.querySelector('.email-error');
    emailError.textContent = '';

    if (emailInput.value.trim() === '') {
      emailError.textContent = 'Por favor, ingresa tu correo electrónico.';
      return false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      emailError.textContent = 'Por favor, ingresa un correo electrónico válido.';
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
    } else if (passwordInput.value.length < 8) {
      passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres.';
      return false;
    }

    return true;
  }

  function validateRepeatPassword() {
    const repeatPasswordError = document.querySelector('.repeat-password-error');
    repeatPasswordError.textContent = '';

    if (repeatPasswordInput.value.trim() === '') {
      repeatPasswordError.textContent = 'Por favor, verifica tu contraseña.';
      return false;
    } else if (repeatPasswordInput.value !== passwordInput.value) {
      repeatPasswordError.textContent = 'Las contraseñas no coinciden.';
      return false;
    }

    return true;
  }

  function validateTerms() {
    const termsError = document.querySelector('.check-terms-error');
    termsError.textContent = '';

    if (!termsCheckbox.checked) {
      termsError.textContent = 'Debes aceptar los términos y condiciones.';
      return false;
    }

    return true;
  }

  // Function to validate the register form
  function validateForm() {
    const isNombreValid = validateNombre();
    const isApellidoValid = validateApellido();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isRepeatPasswordValid = validateRepeatPassword();
    const isTermsValid = validateTerms();

    // Form is valid only if all fields are valid
    return (
      isNombreValid &&
      isApellidoValid &&
      isEmailValid &&
      isPasswordValid &&
      isRepeatPasswordValid &&
      isTermsValid
    );
  }

  // Function to check if email is valid
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Event listener for form submission
  const registerForm = document.querySelector('form');
  registerForm.addEventListener('submit', function (event) {
    if (!validateForm()) {
      // Prevent form submission if validation fails
      registerButton.disabled = true;
      event.preventDefault();
    }
  });

  function checkFormValidity() {
    var isValidForm = validateForm();
    registerButton.disabled = !isValidForm;
  }
});
