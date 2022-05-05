/**
 * DOM Elements
 */

// "Prénom" input
const firstNameInput = document.getElementById('first');

// Parent of "prénom" input
const firstNameInputParent = firstNameInput.parentElement;

// Create a span element that will contain a message
// to be inserted after input element
const firstNameInputMessage = document.createElement('span');
// Give it an id
firstNameInputMessage.setAttribute('id', 'first-name-input-message');
// The message to display inside the created 'span' element
const nameMessageEmpty = 'Ce champ ne peut pas être vide';
const nameMessageShort = 'Veuillez entrer au moins deux caractères';
// Style the message
const messageFontSize = '14px';
const messageColor = 'red';
firstNameInputMessage.style.fontSize = messageFontSize;
firstNameInputMessage.style.color = messageColor;

// "Nom" input
const lastNameInput = document.getElementById('last');

// Parent of "nom" input
const lastNameInputParent = lastNameInput.parentElement;

// Create a span element that will contain a message
// to be inserted after input element
const lastNameInputMessage = document.createElement('span');
// Give it an id
lastNameInputMessage.setAttribute('id', 'last-name-input-message');
// Style the message
lastNameInputMessage.style.fontSize = messageFontSize;
lastNameInputMessage.style.color = messageColor;

// "Email" input
const emailInput = document.getElementById('email');

// Parent of "email" input
const emailInputParent = emailInput.parentElement;

// Create a span element that will contain a message
// to be inserted after email element
const emailInputMessage = document.createElement('span');
// Give it an id
emailInputMessage.setAttribute('id', 'email-input-message');
// The message to display inside the created 'span' element
const emailMessage = 'Veuillez entrer une adresse email valide du type x@x.x';
// Style the message
emailInputMessage.style.fontSize = messageFontSize;
emailInputMessage.style.color = messageColor;


/**
 * First name validation
 */

// A variable to store the validity of the input
let firstNameIsValid = false;

// Check that, when clicking outside "first name" input box,
// entered first name has at least two characters
firstNameInput.addEventListener('blur', ($event) => {
  if ($event.target.value.length > 1) {
    console.log('Le champ du prénom est valide');
    firstNameIsValid = true;
    firstNameInput.style.border = '1px solid green';
    firstNameInput.style.backgroundColor = '#E6FFEA';
  } else {
    firstNameInput.style.border = '1px solid' + messageColor;
    firstNameInput.style.backgroundColor = '#FFE6E6';
    if ($event.target.value.length === 1) {
      console.log('Veuillez entrer au moins deux caractères');
      firstNameInputMessage.textContent = nameMessageShort;
      firstNameInputParent.appendChild(firstNameInputMessage);
    } else {
      console.log('Le champ prénom ne peut pas être vide');
      firstNameInputMessage.textContent = nameMessageEmpty;
      firstNameInputParent.appendChild(firstNameInputMessage);
    }
  }
});

// 'Focus' event listener aimed at removing any existing 'firstNameInputMessage'
// element created when entering an invalid first name
firstNameInput.addEventListener('focus', () => {
  // Check whether a 'span' element exists at the very end of the parent element
  // console.log(firstNameInputParent.lastElementChild);
  console.log(document.getElementById('first-name-input-message')); // returns null if does not exist
  if (document.getElementById('first-name-input-message') !== null) {
    // Remove element
    firstNameInputParent.removeChild(firstNameInputMessage);
  }
});


/**
 * Last name validation
 */

// A variable to store the validity of the input
let lastNameIsValid = false;

// Check that, when clicking outside "last name" input box,
// entered last name has at least two characters
lastNameInput.addEventListener('blur', ($event) => {
  if ($event.target.value.length > 1) {
    console.log('Le champ du nom est valide');
    lastNameIsValid = true;
    lastNameInput.style.border = '1px solid green';
    lastNameInput.style.backgroundColor = '#E6FFEA';
  } else {
    lastNameInput.style.border = '1px solid' + messageColor;
    lastNameInput.style.backgroundColor = '#FFE6E6';
    if ($event.target.value.length === 1) {
      console.log('Veuillez entrer au moins deux caractères');
      lastNameInputMessage.textContent = nameMessageShort;
      lastNameInputParent.appendChild(lastNameInputMessage);
    } else {
      console.log('Le champ nom ne peut pas être vide');
      lastNameInputMessage.textContent = nameMessageEmpty;
      lastNameInputParent.appendChild(lastNameInputMessage);
    }
  }
});

// 'Focus' event listener aimed at removing any existing 'lastNameInputMessage'
// element created when entering an invalid last name
lastNameInput.addEventListener('focus', () => {
  // Check whether a 'span' element exists at the very end of the parent element
  if (document.getElementById('last-name-input-message') !== null) {
    // Remove element
    lastNameInputParent.removeChild(lastNameInputMessage);
  }
});


/**
 * Email validation
 */

// Check that, when clicking outside "email" input box,
// entered email address follows x@x.x pattern
// (white spaces not allowed, second @ character not allowed)
const emailIsValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

emailInput.addEventListener('blur', ($event) => {
  if (emailIsValid($event.target.value)) {
    console.log('Le champ email est valide');
    emailInput.style.border = '1px solid green';
    emailInput.style.backgroundColor = '#E6FFEA';
  } else {
    console.log('Veuillez entrer une adresse email valide du type x@x.x');
    emailInput.style.border = '1px solid' + messageColor;
    emailInput.style.backgroundColor = '#FFE6E6';
    emailInputMessage.textContent = emailMessage;
    emailInputParent.appendChild(emailInputMessage);
  }
});

// 'Focus' event listener aimed at removing any existing 'emailInputMessage'
// element created when entering an invalid email
emailInput.addEventListener('focus', () => {
  // Check whether a 'span' element exists at the very end of the parent element
  if (document.getElementById('email-input-message') !== null) {
    // Remove element
    emailInputParent.removeChild(emailInputMessage);
  }
});
