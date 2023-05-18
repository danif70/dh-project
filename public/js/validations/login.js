const email = document.getElementById('email');
const password = document.getElementById('password');
const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');
const buttonLogin = document.querySelector('.login');

// Disable login button OnLoad
window.onload = () => {
  buttonLogin.disabled = true;
};

let emailValid = false;
let passwordValid = false;

// Validate if is a valid email and disable login button if not
email.addEventListener('keyup', () => {
  let warning = '';
  const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  if (!regexEmail.test(email.value.trim())) {
    warning += 'El email no es válido';
    buttonLogin.disabled = true;
    emailValid = false;
  } else {
    emailValid = true;
    if (passwordValid) {
      buttonLogin.disabled = false;
    }
  }

  emailError.innerHTML = warning;
});

// Enable login button if email and password are valid
password.addEventListener('keyup', () => {
  let warning = '';

  if (!password.value.trim().length > 0) {
    warning = 'La contraseña no puede estar vacía';
    buttonLogin.disabled = true;
    passwordValid = false;
  } else {
    passwordValid = true;
    if (emailValid) {
      buttonLogin.disabled = false;
    }
  }

  passwordError.innerHTML = warning;
});
