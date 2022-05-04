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