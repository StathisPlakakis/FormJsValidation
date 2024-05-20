import './style.css';
import checkZIP from './zip';

window.addEventListener('load', () => {
  const form = document.querySelector('form');

  const email = document.querySelector('#mail');
  const errorEmail = email.nextElementSibling;
  const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

  const country = document.getElementById('Country');
  const ZIPField = document.getElementById('ZIP');
  const errorZIP = ZIPField.nextElementSibling;
  let zipData = checkZIP(country.value);
  let zipRegExp = new RegExp(zipData[0], '');

  const password = document.querySelector('#password');
  const errorPassword = password.nextElementSibling;

  const isValidEmail = emailRegExp.test(email.value);
  email.className =
    isValidEmail || email.value.length > 0 ? 'valid' : 'invalid';

  email.addEventListener('input', () => {
    const isValid = email.value.length > 0 && emailRegExp.test(email.value);
    if (isValid) {
      email.className = 'valid';
      errorEmail.textContent = '';
      errorEmail.className = 'error';
    } else {
      email.className = 'invalid';
      errorEmail.textContent = 'I expect an email, darling!';
      errorEmail.className = 'error active';
    }
  });

  country.addEventListener('change', () => {
    zipData = checkZIP(country.value);
    zipRegExp = new RegExp(zipData[0], '');
    const isValid = ZIPField.value.length > 0 && zipRegExp.test(ZIPField.value);
    if (isValid) {
      ZIPField.className = 'valid';
      errorZIP.textContent = '';
      errorZIP.className = 'error';
    } else {
      ZIPField.className = 'invalid';
      errorZIP.textContent = zipData[1];
      errorZIP.className = 'error active';
    }
  });

  ZIPField.addEventListener('input', () => {
    zipData = checkZIP(country.value);
    zipRegExp = new RegExp(zipData[0], '');
    const isValid = ZIPField.value.length > 0 && zipRegExp.test(ZIPField.value);
    if (isValid) {
      ZIPField.className = 'valid';
      errorZIP.textContent = '';
      errorZIP.className = 'error';
    } else {
      ZIPField.className = 'invalid';
      errorZIP.textContent = zipData[1];
      errorZIP.className = 'error active';
    }
  });

  password.addEventListener('input', () => {
    if (password.validity.valid) {
      errorPassword.textContent = '';
      errorPassword.className = 'error';
    } else if (password.validity.tooShort) {
      errorPassword.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
      errorPassword.className = 'error active';
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isValidEmail =
      email.value.length > 0 && emailRegExp.test(email.value);
    if (!isValidEmail) {
      email.className = 'invalid';
      errorEmail.textContent = 'I expect an email, darling!';
      errorEmail.className = 'error active';
    } else {
      email.className = 'valid';
      errorEmail.textContent = '';
      errorEmail.className = 'error';
    }

    const isValidZIPField =
      ZIPField.value.length > 0 && zipRegExp.test(ZIPField.value);
    if (!isValidZIPField) {
      ZIPField.className = 'invalid';
      errorZIP.textContent = zipData[1];
      errorZIP.className = 'error active';
    } else {
      ZIPField.className = 'valid';
      errorZIP.textContent = '';
      errorZIP.className = 'error';
    }

    if (!password.validity.valid) {
      errorPassword.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
      errorPassword.className = 'error active';
    } else {
      errorPassword.textContent = '';
      errorPassword.className = 'error';
    }
  });
});
