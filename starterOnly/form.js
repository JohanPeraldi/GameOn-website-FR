/**
 * DOM Elements
 */

/* ********************* FIRST NAME ************************ */
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
const inputBorderStyleValid = '1px solid green';
const inputBorderStyleInvalid = '1px solid red';
const messageFontSize = '14px';
const messageColor = 'red';
firstNameInputMessage.style.fontSize = messageFontSize;
firstNameInputMessage.style.color = messageColor;

/* ********************* LAST NAME ************************ */
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

/* *********************** EMAIL ************************** */
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
const emailMessageEmpty = 'Ce champ ne peut pas être vide';
const emailMessageInvalid = 'Veuillez entrer une adresse email valide du type x@x.x';
// Style the message
emailInputMessage.style.fontSize = messageFontSize;
emailInputMessage.style.color = messageColor;

/* ******************* DATE OF BIRTH ********************** */
// "Date of birth" input
const dateOfBirthInput = document.getElementById('birthdate');

// Parent of "date of birth" input
const dateOfBirthInputParent = dateOfBirthInput.parentElement;

// Create a span element that will contain a message
// to be inserted after date of birth element
const dateOfBirthInputMessage = document.createElement('span');
// Give it an id
dateOfBirthInputMessage.setAttribute('id', 'date-of-birth-input-message');
// The message to display inside the created 'span' element
const dateOfBirthMessage = 'Veuillez entrer votre date de naissance';
// Style the message
dateOfBirthInputMessage.style.fontSize = messageFontSize;
dateOfBirthInputMessage.style.color = messageColor;

/* ********************* TOURNAMENTS *********************** */
// "Number of participations in tournaments" input
const numberOfTournamentsInput = document.getElementById('quantity');

// Parent of "number of participations in tournaments" input
const numberOfTournamentsInputParent = numberOfTournamentsInput.parentElement;

// Create a span element that will contain a message
// to be inserted after number of tournaments element
const numberOfTournamentsInputMessage = document.createElement('span');
// Give it an id
numberOfTournamentsInputMessage.setAttribute('id', 'number-of-tournaments-input-message');
// The message to display inside the created 'span' element
const numberOfTournamentsMessage = 'Veuillez entrer un nombre entre 0 et 99 inclus';
// Style the message
numberOfTournamentsInputMessage.style.fontSize = messageFontSize;
numberOfTournamentsInputMessage.style.color = messageColor;


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
    firstNameInput.style.border = inputBorderStyleValid;
    firstNameInput.style.backgroundColor = '#E6FFEA';
  } else {
    firstNameInput.style.border = inputBorderStyleInvalid;
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
    lastNameInput.style.border = inputBorderStyleValid;
    lastNameInput.style.backgroundColor = '#E6FFEA';
  } else {
    lastNameInput.style.border = inputBorderStyleInvalid;
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
    emailInput.style.border = inputBorderStyleValid;
    emailInput.style.backgroundColor = '#E6FFEA';
  } else {
    emailInput.style.border = inputBorderStyleInvalid;
    emailInput.style.backgroundColor = '#FFE6E6';
    if ($event.target.value === '') {
      console.log('Le champ email ne peut pas être vide');
      emailInputMessage.textContent = emailMessageEmpty;
    } else {
      console.log('Veuillez entrer une adresse email valide du type x@x.x');
      emailInputMessage.textContent = emailMessageInvalid;
    }
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


/**
 * Date of birth validation
 */

// A variable to store the validity of the input
let dateOfBirthIsValid = false;

// Check that, when clicking outside "date of birth" input box,
// date of birth has been entered (and is valid? ie. not a future or too close in the past date)
dateOfBirthInput.addEventListener('blur', ($event) => {
  console.log($event.target.value);
  if ($event.target.value !== '') {
    console.log('Le champ date de naissance est valide');
    dateOfBirthIsValid = true;
    dateOfBirthInput.style.border = inputBorderStyleValid;
    dateOfBirthInput.style.backgroundColor = '#E6FFEA';
  } else {
    console.log('Le champ date de naissance est invalide');
    dateOfBirthInput.style.border = inputBorderStyleInvalid;
    dateOfBirthInput.style.backgroundColor = '#FFE6E6';
    dateOfBirthInputMessage.textContent = dateOfBirthMessage;
    dateOfBirthInputParent.appendChild(dateOfBirthInputMessage);
  }
});

// 'Focus' event listener aimed at removing any existing 'dateOfBirthInputMessage'
// element created when leaving blank input field
dateOfBirthInput.addEventListener('focus', () => {
  // Check whether a 'span' element exists at the very end of the parent element
  if (document.getElementById('date-of-birth-input-message') !== null) {
    // Remove element
    dateOfBirthInputParent.removeChild(dateOfBirthInputMessage);
  }
});


/**
 * Number of participations in tournaments validation
 */

// A variable to store the validity of the input
let numberOfTournamentsIsValid = false;

// Check that, when clicking outside "number of tournaments" input box,
// a valid number >=0 and <=99 has been entered
numberOfTournamentsInput.addEventListener('blur', ($event) => {
  console.log('Number of participations in tournaments: ' + $event.target.value);
  if ($event.target.value !== '' && $event.target.value >= 0 && $event.target.value <= 99) {
    console.log('Le champ nombre de participations en tournois est valide');
    numberOfTournamentsIsValid = true;
    numberOfTournamentsInput.style.border = inputBorderStyleValid;
    numberOfTournamentsInput.style.backgroundColor = '#E6FFEA';
  } else {
    console.log('Le champ nombre de participations en tournois est invalide');
    numberOfTournamentsInput.style.border = inputBorderStyleInvalid;
    numberOfTournamentsInput.style.backgroundColor = '#FFE6E6';
    numberOfTournamentsInputMessage.textContent = numberOfTournamentsMessage;
    numberOfTournamentsInputParent.appendChild(numberOfTournamentsInputMessage);
  }
});

// 'Focus' event listener aimed at removing any existing 'numberOfTournamentsInputMessage'
// element created when leaving blank input field or entering invalid number
numberOfTournamentsInput.addEventListener('focus', () => {
  // Check whether a 'span' element exists at the very end of the parent element
  if (document.getElementById('number-of-tournaments-input-message') !== null) {
    // Remove element
    numberOfTournamentsInputParent.removeChild(numberOfTournamentsInputMessage);
  }
});
