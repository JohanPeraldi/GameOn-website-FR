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
const emailMessageInvalid = 'Veuillez entrer une adresse email valide du type xx@xxx.xx';
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
const numberOfTournamentsMessageOutOfRange = 'Veuillez entrer un nombre entre 0 et 99 inclus';
const numberOfTournamentsMessageEmpty = 'Ce champ ne peut pas être vide';
// Add the message
// numberOfTournamentsInputMessage.textContent = numberOfTournamentsMessage;
// Style the message
numberOfTournamentsInputMessage.style.fontSize = messageFontSize;
numberOfTournamentsInputMessage.style.color = messageColor;

/* ***************** TOURNAMENT OPTIONS ******************** */
// "Radio buttons" input parent element
const radioButtonsParent = document.getElementById('location1').parentElement;
// Create a span element that will contain a message
// to be inserted after tournament options radio buttons element
radioButtonsInputMessage = document.createElement('span');
// Give it an id
radioButtonsInputMessage.setAttribute('id', 'tournament-options-input-message');
// The message to display inside the created 'span' element
const radioButtonsMessage = 'Veuillez choisir une option';
// Add the contents of the message
radioButtonsInputMessage.textContent = radioButtonsMessage;
// Style the message
radioButtonsInputMessage.style.fontSize = messageFontSize;
radioButtonsInputMessage.style.color = messageColor;

/* ******************** TERMS OF USE *********************** */
// "Checkbox" input with id='checkbox1' (terms of use)
const termsOfUseCheckbox = document.getElementById('checkbox1');

// "Checkboxes" input parent element
const checkboxesParent = document.getElementById('checkbox1').parentElement;

// Create a paragraph element that will contain a message
// to be inserted after checkboxes element
const checkboxesInputMessage = document.createElement('p');
// Give it an id
checkboxesInputMessage.setAttribute('id', 'terms-of-use-input-message');
// The message to display inside the created 'p' element
const checkboxesMessage = 'Veuillez lire et accepter les conditions d\'utilisation';
// Add the contents of the message
checkboxesInputMessage.textContent = checkboxesMessage;
// Style the message
checkboxesInputMessage.style.fontSize = messageFontSize;
checkboxesInputMessage.style.color = messageColor;
checkboxesInputMessage.style.marginBottom = '10px';

/* ****************** FORM SUBMISSION ********************* */
// Form element
const form = document.querySelector('form');

/* ********* SUCCESSFUL FORM SUBMISSION MESSAGE *********** */
// Create a 'p' element to hold the message to be displayed
const successMessageElement = document.createElement('p');
// The message to display
const successMessage = 'Merci! Votre réservation a été reçue.';
// Add the contents of the message
successMessageElement.textContent = successMessage;
// Style the message
successMessageElement.style.backgroundColor = '#E6FFEA';
successMessageElement.style.fontSize = '20px';
successMessageElement.style.color = 'green';
successMessageElement.style.padding = '20px';
successMessageElement.style.border = inputBorderStyleValid;
successMessageElement.style.zIndex = '1000';
successMessageElement.style.position = 'absolute';
successMessageElement.style.top = '50vh';
successMessageElement.style.left = '35vw';
successMessageElement.style.borderRadius = '10px';
// Target the main element
const main = document.querySelector('main');

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

// A variable to store the validity of the email address
let emailIsValid = false;

// Check that, when clicking outside "email" input box,
// entered email address follows xx@xxx.xx pattern
// (white spaces not allowed, second @ character not allowed)
const emailCheckSuccess = (email) => {
  return /^[^\s@]{2,}@[^\s@]{3,}\.[^\s@]{2,}$/.test(email);
}

emailInput.addEventListener('blur', ($event) => {
  if (emailCheckSuccess($event.target.value)) {
    console.log('Le champ email est valide');
    emailIsValid = true;
    emailInput.style.border = inputBorderStyleValid;
    emailInput.style.backgroundColor = '#E6FFEA';
  } else {
    emailInput.style.border = inputBorderStyleInvalid;
    emailInput.style.backgroundColor = '#FFE6E6';
    if ($event.target.value === '') {
      console.log('Le champ email ne peut pas être vide');
      emailInputMessage.textContent = emailMessageEmpty;
    } else {
      console.log('Veuillez entrer une adresse email valide du type xx@xxx.xx');
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
  if ($event.target.value.length !== 0 && $event.target.value >= 0 && $event.target.value <= 99) {
    console.log('Le champ nombre de participations en tournois est valide');
    numberOfTournamentsIsValid = true;
    numberOfTournamentsInput.style.border = inputBorderStyleValid;
    numberOfTournamentsInput.style.backgroundColor = '#E6FFEA';
  } else {
    numberOfTournamentsInput.style.border = inputBorderStyleInvalid;
    numberOfTournamentsInput.style.backgroundColor = '#FFE6E6';
    if ($event.target.value.length === 0) {
      console.log('Ce champ ne peut pas être vide');
      numberOfTournamentsInputMessage.textContent = numberOfTournamentsMessageEmpty;
    }
    if ($event.target.value < 0 || $event.target.value > 99) {
      console.log('Veuillez choisir un nombre entre 0 et 99 inclus');
      numberOfTournamentsInputMessage.textContent = numberOfTournamentsMessageOutOfRange;
    }
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


/**
 * Radio buttons validation
 */

// A variable to store the validity of the radio buttons selection
let radioInputIsValid = false;

radioButtonsParent.addEventListener('change', ($event) => {
  const tournamentLocation = $event.target.value;
  radioInputIsValid = tournamentLocation === 'New York'
    || tournamentLocation === 'San Francisco'
    || tournamentLocation === 'Seattle'
    || tournamentLocation === 'Chicago'
    || tournamentLocation === 'Boston'
    || tournamentLocation === 'Portland';
  console.log(`Option selected: ${tournamentLocation}`);
  console.log(`Option is valid: ${radioInputIsValid}`);
  // Remove error message if present
  if (radioInputIsValid) {
    if (document.getElementById('tournament-options-input-message')) {
      radioButtonsParent.removeChild(radioButtonsInputMessage);
    }
  }
});


/**
 * Checkboxes validation
 */

// A variable to store the validity of the checkboxes selection
// I think it is important to set this variable to false by default
  // because we want the user to be active here: she must check the box
  // herself to agree to the terms, the agreement box can't be
  // checked by default.

let checkboxesInputIsValid = false;

// We need to verify that the input with id='checkbox1' is checked
// to make the checkbox input valid
termsOfUseCheckbox.addEventListener('change', ($event) => {
  checkboxesInputIsValid = $event.target.checked;
  console.log(`Terms of use have been agreed to: ${checkboxesInputIsValid}`);
  if (checkboxesInputIsValid) {
    if (checkboxesParent.lastChild === checkboxesInputMessage) {
      checkboxesParent.removeChild(checkboxesInputMessage);
    }
  }
});


/**
 * Validation of all fields before form submission
 */

// Check if all fields are valid
// let allFieldsAreValid = false;

form.addEventListener('submit', ($event) => {
  $event.preventDefault();
  // allFieldsAreValid = firstNameIsValid
  //                  && lastNameIsValid
  //                  && emailIsValid
  //                  && dateOfBirthIsValid
  //                  && numberOfTournamentsIsValid
  //                  && radioInputIsValid
  //                  && checkboxesInputIsValid;
  // if (allFieldsAreValid) {
  //   console.log(`All fields are valid. Form can be submitted! ${allFieldsAreValid}`);
  //   // showSuccessMessage();
  // } else {
  //   console.log(`Sorry, form cannot be submitted! ${allFieldsAreValid}`);
  //   console.log(`First name is valid: ${firstNameIsValid}`);
  //   console.log(`Last name is valid: ${lastNameIsValid}`);
  //   console.log(`Email is valid: ${emailIsValid}`);
  //   console.log(`DOB is valid: ${dateOfBirthIsValid}`);
  //   console.log(`Nb of tourneys is valid: ${numberOfTournamentsIsValid}`);
  //   console.log(`Radio input is valid: ${radioInputIsValid}`);
  //   console.log(`Checkboxes input is valid: ${checkboxesInputIsValid}`);

  // Check validity of input fields one by one
  // in order to display one message at a time
  if (!firstNameIsValid) {
    console.log('First name is invalid!');
    firstNameInput.style.border = inputBorderStyleInvalid;
    firstNameInput.style.backgroundColor = '#FFE6E6';
    // Two possible scenarii:
    // 1) Field is empty
    if (firstNameInput.value.length === 0) {
      firstNameInputMessage.textContent = nameMessageEmpty;
    }
    // 2) Input has only one character
    if (firstNameInput.value.length === 1) {
      firstNameInputMessage.textContent = nameMessageShort;
    }
    firstNameInputParent.appendChild(firstNameInputMessage);
  } else if (!lastNameIsValid) {
    console.log('Last name is invalid!');
    lastNameInput.style.border = inputBorderStyleInvalid;
    lastNameInput.style.backgroundColor = '#FFE6E6';
    // Two possible scenarii:
    // 1) Field is empty
    if (lastNameInput.value.length === 0) {
      lastNameInputMessage.textContent = nameMessageEmpty;
    }
    // 2) Input has only one character
    if (lastNameInput.value.length === 1) {
      lastNameInputMessage.textContent = nameMessageShort;
    }
    lastNameInputParent.appendChild(lastNameInputMessage);
  } else if (!emailIsValid) {
    console.log('Email is invalid!');
    emailInput.style.border = inputBorderStyleInvalid;
    emailInput.style.backgroundColor = '#FFE6E6';
    // Two possible scenarii:
    // 1) Field is empty
    if (emailInput.value.length === 0) {
      emailInputMessage.textContent = emailMessageEmpty;
    }
    // 2) Input doesn't match regex
    if (emailCheckSuccess(emailInput.value)) {
      lastNameInputMessage.textContent = emailMessageInvalid;
    }
    emailInputParent.appendChild(emailInputMessage);
  } else if (!dateOfBirthIsValid) {
    console.log('Date of birth is invalid!');
    dateOfBirthInput.style.border = inputBorderStyleInvalid;
    dateOfBirthInput.style.backgroundColor = '#FFE6E6';
    // For the moment, one possible scenario:
    // Field is empty
    dateOfBirthInputMessage.textContent = dateOfBirthMessage;
    dateOfBirthInputParent.appendChild(dateOfBirthInputMessage);
    // A second check is needed to invalidate dates in the future
    // and also dates in a too recent past (persons of up to a certain age)
    // YET TO BE IMPLEMENTED!
  } else if (!numberOfTournamentsIsValid) {
    console.log('Number of tournaments is invalid!');
    numberOfTournamentsInput.style.border = inputBorderStyleInvalid;
    numberOfTournamentsInput.style.backgroundColor = '#FFE6E6';
    // Two possible scenarii:
    // 1) Field is empty
    if (numberOfTournamentsInput.value.length === 0) {
      numberOfTournamentsInputMessage.textContent = numberOfTournamentsMessageEmpty;
    }
    // 2) Number falls outside allowed range
    if (numberOfTournamentsInput.value < 0 || numberOfTournamentsInput.value > 99) {
      numberOfTournamentsInputMessage.textContent = numberOfTournamentsMessageOutOfRange;
    }
    numberOfTournamentsInputParent.appendChild(numberOfTournamentsInputMessage);
  } else if (!radioInputIsValid) {
    console.log('Please select an option!');
    radioButtonsParent.appendChild(radioButtonsInputMessage);
  } else if (!checkboxesInputIsValid) {
    console.log('Please read and agree to the terms of use!');
    checkboxesParent.appendChild(checkboxesInputMessage);
  } else {
    console.log('Yeepee! All input fields are valid!');
  }

  // Display error message if no radio button is selected
  // if (!radioInputIsValid) {
  //   radioButtonsParent.appendChild(radioButtonsInputMessage);
  // }
  // Display error message if "terms of use" checkbox is left unchecked
  // if (!checkboxesInputIsValid) {
  //   checkboxesParent.appendChild(checkboxesInputMessage);
  // }
// }
});


/**
 * Confirmation message after successful form submission
 */

// const showSuccessMessage = () => {
//   main.appendChild(successMessageElement);
//   setTimeout(() => {
//     main.removeChild(successMessageElement);
//   }, 2000);
//   console.log('showSuccessMessage function called');
// };
