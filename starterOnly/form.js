/**
 * First name validation
 */

// Select input with id="first"
const firstNameInput = document.getElementById('first');
firstNameInput.addEventListener('blur', ($event) => {
  if ($event.target.value.length > 1) {
    console.log('First name is valid');
    firstNameInput.style.border = '2px solid green';
    firstNameInput.style.backgroundColor = '#E6FFEA';
  } else {
    console.log('First name is invalid');
    firstNameInput.style.border = '2px solid red';
    firstNameInput.style.backgroundColor = '#FFE6E6';
  }
});

/**
 * Last name validation
 */

// Select input with id="last"
const lastNameInput = document.getElementById('last');
lastNameInput.addEventListener('blur', ($event) => {
  if ($event.target.value.length > 1) {
    console.log('Last name is valid');
    lastNameInput.style.border = '2px solid green';
    lastNameInput.style.backgroundColor = '#E6FFEA';
  } else {
    console.log('Last name is invalid');
    lastNameInput.style.border = '2px solid red';
    lastNameInput.style.backgroundColor = '#FFE6E6';
  }
});

/**
 * Email validation
 */

// Validate email with x@x.x pattern
const emailIsValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Select input with id="email"
const emailInput = document.getElementById('email');
emailInput.addEventListener('blur', ($event) => {
  if (emailIsValid($event.target.value)) {
    console.log('Email is valid');
    emailInput.style.border = '2px solid green';
    emailInput.style.backgroundColor = '#E6FFEA';
  } else {
    console.log('Email is invalid');
    emailInput.style.border = '2px solid red';
    emailInput.style.backgroundColor = '#FFE6E6';
  }
});