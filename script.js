const form = document.getElementById('contact-Form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('Email');
const phoneInput = document.getElementById('phone');
const submit = document.getElementById('submit');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const phoneError = document.getElementById('phone-error');

function onSubmit(e) {
  e.preventDefault();
}

function onClick() {
  if (
    nameInput.value === '' &&
    phoneInput.value === '' &&
    emailInput.value === ''
  ) {
    nameError.textContent = 'Name is required !';
    nameInput.style.borderColor = 'red';
    nameError.style.margin = '-50px 0 0 10px';
    nameError.style.margin = '-50px 0 0 10px';
    nameError.style.color = 'red';
    phoneError.textContent = 'Phone is required !';
    phoneInput.style.borderColor = 'red';
    phoneError.style.margin = '-50px 0 0 10px';
    phoneError.style.color = 'red';
    emailError.textContent = 'Email is required !';
    emailInput.style.borderColor = 'red';
    emailError.style.margin = '-50px 0 0 10px';
    emailError.style.color = 'red';
    // return false;
  } else {
    nameError.textContent = '';
    nameInput.style.borderColor = 'green';
    phoneError.textContent = '';
    phoneInput.style.borderColor = 'green';
    emailError.textContent = '';
    emailInput.style.borderColor = 'green';
    // return true
  }

  if (nameInput.value === '' || nameInput.value.length <= 5) {
    nameError.textContent = 'Name is required !';
    nameInput.style.borderColor = 'red';
    nameError.style.color = 'red';
  } else {
    nameError.textContent = '';
    nameInput.style.borderColor = 'green';
  }

  if (phoneInput.value === '' || phoneInput.value.length <= 5) {
    phoneError.textContent = 'Phone Number is required !';
    phoneInput.style.borderColor = 'red';
    phoneError.style.margin = '-50px 0 0 10px';
    phoneError.style.color = 'red';
  } else {
    phoneError.textContent = '';
    phoneInput.style.borderColor = 'green';
  }

  if (emailInput.value === '' || emailInput.value.lenght <= 5) {
    emailError.textContent = 'Email is required !';
    emailInput.style.borderColor = 'red';
    emailError.style.margin = '-50px 0 0 10px';
    emailError.style.color = 'red';
  } else {
    emailError.textContent = '';
    emailInput.style.borderColor = 'green';
  }
}

function onNameInput(e) {
  if (e.target.value.length <= 5) {
    nameError.textContent = 'Name requires a minimum of 5 Characters !';
    nameInput.style.borderColor = 'red';
    nameError.style.margin = '-50px 0 0 10px';
    nameError.style.color = 'red';
    return true;
  } else if (e.target.value.length > 5 || onNameInput) {
    nameError.textContent = '';
    nameInput.style.borderColor = 'green';
    return false;
  }
}

function onPhoneInput(e) {
  if (e.target.value.length <= 5) {
    phoneError.textContent = 'Phone requires a minimum of 5 characters !';
    phoneInput.style.borderColor = 'red';
    phoneError.style.margin = '-50px 0 0 10px';
    phoneError.style.color = 'red';
    return true;
  } else if (e.target.value.length > 5) {
    phoneError.textContent = '';
    phoneInput.style.borderColor = 'green';
    return false;
  }
}

function onEmailInput(e) {
  if (e.target.value.length <= 5) {
    emailError.textContent = 'Email requires a minimum of 5 Characters !';
    emailInput.style.borderColor = 'red';
    emailError.style.margin = '-50px 0 0 10px';
    emailError.style.color = 'red';
    return true;
  } else if (e.target.value.length > 5) {
    emailError.textContent = '';
    emailInput.style.borderColor = 'green';
    return false;
  }
}

form.addEventListener('submit', onSubmit);
nameInput.addEventListener('input', onNameInput);
emailInput.addEventListener('input', onEmailInput);
phoneInput.addEventListener('input', onPhoneInput);
submit.addEventListener('click', onClick);

// const form = document.getElementById('contact-Form');
// const nameInput = document.getElementById('name');
// const emailInput = document.getElementById('Email');
// const phoneInput = document.getElementById('phone');
// const submit = document.getElementById('submit');
// const nameError = document.getElementById('name-error');
// const emailError = document.getElementById('email-error');
// const phoneError = document.getElementById('phone-error');

// function showError(input, errorElement, message) {
//     errorElement.textContent = message;
//     errorElement.style.color = 'red';
//     errorElement.style.margin = '-50px 0 0 10px';
//     input.style.borderColor = 'red';
// }

// function hideError(input, errorElement) {
//     errorElement.textContent = '';
//     input.style.borderColor = 'green';
// }

// function validateInput(input, errorElement, minLength, emptyMessage, minLengthMessage) {
//     if (input.value === '') {
//         showError(input, errorElement, emptyMessage);
//         return false;
//     } else if (input.value.length < minLength) {
//         showError(input, errorElement, minLengthMessage);
//         return false;
//     } else {
//         hideError(input, errorElement);
//         return true;
//     }
// }

// function onSubmit(e) {
//     e.preventDefault();

//     const isNameValid = validateInput(
//         nameInput, nameError, 5,
//         'Name is required!',
//         'Name requires a minimum of 5 characters!'
//     );
//     const isPhoneValid = validateInput(
//         phoneInput, phoneError, 5,
//         'Phone is required!',
//         'Phone requires a minimum of 5 characters!'
//     );
//     const isEmailValid = validateInput(
//         emailInput, emailError, 5,
//         'Email is required!',
//         'Email requires a minimum of 5 characters!'
//     );

//     if (isNameValid && isPhoneValid && isEmailValid) {
//         console.log('Form submitted successfully');
/*        // Form submission logic goes here */
//     }
// }

// function onInputValidation() {
//     validateInput(nameInput, nameError, 5, 'Name is required!', 'Name requires a minimum of 5 characters!');
//     validateInput(phoneInput, phoneError, 5, 'Phone is required!', 'Phone requires a minimum of 5 characters!');
//     validateInput(emailInput, emailError, 5, 'Email is required!', 'Email requires a minimum of 5 characters!');
// }

// form.addEventListener('submit', onSubmit);
// nameInput.addEventListener('input', () => onInputValidation());
// phoneInput.addEventListener('input', () => onInputValidation());
// emailInput.addEventListener('input', () => onInputValidation());
