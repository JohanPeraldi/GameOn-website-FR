/**
 * Class Input
 */

class Input {
  constructor(type, element, parentElement, regex, messageElement, isValid) {
    this.type = type;
    this.element = element;
    this.parentElement = parentElement;
    this.regex = regex;
    this.messageElement = messageElement;
    this.isValid = isValid;
  }

  validate() {
    console.log('Entered validate() method');
    this.element.addEventListener('input', ($event) => {
      // Check whether there is a regex for current input
      if (this.regex) {
        console.log(`${this.type} type input validity uses regex`);
        if (this.regex.test($event.target.value)) {
          this.isValid = true;
          this.isValid === true ? console.log(`${this.element} is valid`) : console.log(`${this.element} is invalid`);
          this.element.style.border = inputBorderStyleValid;
          this.element.style.backgroundColor = '#E6FFEA';
          this.parentElement.removeChild(this.messageElement);
        } else {
          this.element.style.border = inputBorderStyleInvalid;
          this.element.style.backgroundColor = '#FFE6E6';
          // Code below for empty fields
          if ($event.target.value.length === 0) {
            console.log('Ce champ ne peut pas être vide');
            this.messageElement.textContent = messageEmpty;
          }
          // Code below only for names
          if (this.type === 'text') {
            if ($event.target.value.length === 1) {
              console.log('Veuillez entrer au moins deux caractères');
              this.messageElement.textContent = nameMessageShort;
            }
          }
          // Code below only for email
          if (this.type === 'email') {
            if ($event.target.value !== '') {
              console.log('Veuillez entrer une adresse email valide du type xx@xxx.xx');
              this.messageElement.textContent = emailMessageInvalid;
            }
          }
          this.parentElement.appendChild(this.messageElement);
        }
      } else {
        console.log(`${this.type} type input validity doesn't use regex`);
        // For inputs that don't use a regex for validation, i.e. date of birth
        // Code below only for date of birth
        if (this.type === 'date') {
          console.log('Checking DOB validity...');
          dateOfBirthIsInPast = Date.now() - Date.parse($event.target.value) > 0;
          console.log(`Date of birth is in the past: ${dateOfBirthIsInPast}`);
          if ($event.target.value !== '') {
            if (!dateOfBirthIsInPast) {
              console.log('Come on! You can\'t be born in the future!');
              dateOfBirthElement.style.border = inputBorderStyleInvalid;
              dateOfBirthElement.style.backgroundColor = '#FFE6E6';
              dateOfBirthMessageElement.textContent = dateOfBirthMessageInvalid;
              dateOfBirthParentElement.appendChild(dateOfBirthMessageElement);
            } else {
              console.log('Le champ date de naissance est valide');
              dateOfBirthIsValid = true;
              dateOfBirthElement.style.border = inputBorderStyleValid;
              dateOfBirthElement.style.backgroundColor = '#E6FFEA';
              dateOfBirthParentElement.removeChild(dateOfBirthMessageElement);
            }
          } else {
            console.log('Le champ date de naissance ne peut pas être vide');
            dateOfBirthElement.style.border = inputBorderStyleInvalid;
            dateOfBirthElement.style.backgroundColor = '#FFE6E6';
            dateOfBirthMessageElement.textContent = dateOfBirthMessageEmpty;
            dateOfBirthParentElement.appendChild(dateOfBirthMessageElement);
          }
        }
      }
    });
  }
}

/**
 * VARIABLES
 */

// Input types
const nameType = 'text';
const emailType = 'email';
const dateOfBirthType = 'date';
const numberOfTournamentsType = 'number';
const radioButtonsType = 'radio';
const termsOfUseType = 'checkbox';
// Message displayed when a required field is left empty
const messageEmpty = 'Ce champ ne peut pas être vide';
// Message displayed after first & last name inputs if under 2 characters in length
const nameMessageShort = 'Veuillez entrer au moins deux caractères';
// The alternate email message to display when email input field is not empty but invalid
const emailMessageInvalid = 'Veuillez entrer une adresse email valide du type xx@xxx.xx';
// Message displayed when DOB field is left empty
const dateOfBirthMessageEmpty = 'Veuillez entrer votre date de naissance';
// Message displayed when DOB entered is a future date
const dateOfBirthMessageInvalid = 'Veuillez naître avant de vous inscrire';
// Messages styles
const inputBorderStyleValid = '1px solid green';
const inputBorderStyleInvalid = '1px solid red';
const messageFontSize = '14px';
const messageColor = 'red';

/**
 * Regular Expressions
 */

// First & last name validation
const nameRegex = /^\S{2,}$/;
// Email validation
const emailRegex = /^[^\s@]{2,}@[^\s@]{3,}\.[^\s@]{2,}$/;


/**
 * DOM Elements
 */

/* ********************* FIRST NAME ************************ */
// "Prénom" input
const firstNameElement = document.getElementById('first'); // Repeated code: REFACTOR!

// Parent of "prénom" input
const firstNameParentElement = firstNameElement.parentElement; // Repeated code: REFACTOR!

// Create a span element that will contain a message
// to be inserted after input element
const firstNameMessageElement = document.createElement('span'); // Repeated code: REFACTOR!
// Give it an id
// firstNameMessageElement.setAttribute('id', 'first-name-input-message');
// Style the message
firstNameMessageElement.style.fontSize = messageFontSize; // Repeated code: REFACTOR!
firstNameMessageElement.style.color = messageColor; // Repeated code: REFACTOR!

/* ********************* LAST NAME ************************ */
// "Nom" input
const lastNameElement = document.getElementById('last'); // Repeated code: REFACTOR!

// Parent of "nom" input
const lastNameParentElement = lastNameElement.parentElement; // Repeated code: REFACTOR!

// Create a span element that will contain a message
// to be inserted after input element
const lastNameMessageElement = document.createElement('span'); // Repeated code: REFACTOR!
// Give it an id
// lastNameMessageElement.setAttribute('id', 'last-name-input-message');
// Style the message
lastNameMessageElement.style.fontSize = messageFontSize; // Repeated code: REFACTOR!
lastNameMessageElement.style.color = messageColor; // Repeated code: REFACTOR!

/* *********************** EMAIL ************************** */
// "Email" input
const emailElement = document.getElementById('email'); // Repeated code: REFACTOR!

// Parent of "email" input
const emailParentElement = emailElement.parentElement; // Repeated code: REFACTOR!

// Create a span element that will contain a message
// to be inserted after email element
const emailMessageElement = document.createElement('span'); // Repeated code: REFACTOR!
// Give it an id
// emailMessageElement.setAttribute('id', 'email-input-message');
// Style the message
emailMessageElement.style.fontSize = messageFontSize; // Repeated code: REFACTOR!
emailMessageElement.style.color = messageColor; // Repeated code: REFACTOR!

/* ******************* DATE OF BIRTH ********************** */
// "Date of birth" input
const dateOfBirthElement = document.getElementById('birthdate'); // Repeated code: REFACTOR!

// Parent of "date of birth" input
const dateOfBirthParentElement = dateOfBirthElement.parentElement; // Repeated code: REFACTOR!

// Create a span element that will contain a message
// to be inserted after date of birth element
const dateOfBirthMessageElement = document.createElement('span'); // Repeated code: REFACTOR!
// Give it an id
// dateOfBirthMessageElement.setAttribute('id', 'date-of-birth-input-message');
// Style the message
dateOfBirthMessageElement.style.fontSize = messageFontSize; // Repeated code: REFACTOR!
dateOfBirthMessageElement.style.color = messageColor; // Repeated code: REFACTOR!

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
const radioButtonsInputMessage = document.createElement('span');
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
// The div with the class "bground"
const backgroundElement = document.querySelector('.bground');
// Create a 'div' element
const successModal = document.createElement('div');
successModal.setAttribute('class', 'content');
// Set its styles
successModal.style.display = 'flex';
successModal.style.flexDirection = 'column';
successModal.style.justifyContent = 'center';
successModal.style.alignItems = 'center';
successModal.style.height = '90vh';
// Create a 'p' element to hold the message to be displayed
const successMessageElement = document.createElement('p');
// The message to display
const successMessage = 'Merci pour votre inscription';
// Add the contents of the message
successMessageElement.textContent = successMessage;
// Style the message
successMessageElement.style.fontSize = '32px';
successMessageElement.style.textAlign = 'center';
successMessageElement.style.lineHeight = '1.6';
successMessageElement.style.padding = '24px';
// Insert the paragraph inside the div
successModal.appendChild(successMessageElement);
// Add top close icon
const closeIcon = document.createElement('span');
closeIcon.setAttribute('class', 'close');
successModal.appendChild(closeIcon);
// Add functionality to close icon
closeIcon.addEventListener('click', () => {
  backgroundElement.style.display = 'none';
});
// Add close button
const closeButton = document.createElement('input');
closeButton.setAttribute('class', 'btn-submit');
closeButton.setAttribute('type', 'button');
closeButton.setAttribute('value', 'Fermer');
closeButton.style.position = 'absolute';
closeButton.style.bottom = '25px';
successModal.appendChild(closeButton);
// Add functionality to close icon
closeButton.addEventListener('click', () => {
  backgroundElement.style.display = 'none';
});

/*******************************************************************************/

/**
 * START REFACTOR
 */

/*******************************************************************************/

// FIRST NAME VALIDATION
let firstNameIsValid = false;
const firstNameInput = new Input(nameType, firstNameElement, firstNameParentElement, nameRegex, firstNameMessageElement, firstNameIsValid);
firstNameInput.validate(); // Repeated code: REFACTOR!

// LAST NAME VALIDATION
let lastNameIsValid = false;
const lastNameInput = new Input(nameType, lastNameElement, lastNameParentElement, nameRegex, lastNameMessageElement, lastNameIsValid);
lastNameInput.validate(); // Repeated code: REFACTOR!

// EMAIL VALIDATION
let emailIsValid = false;
const emailInput = new Input(emailType, emailElement, emailParentElement, emailRegex, emailMessageElement, emailIsValid);
emailInput.validate(); // Repeated code: REFACTOR!

// DATE OF BIRTH VALIDATION
let dateOfBirthIsValid = false;
let dateOfBirthIsInPast = false;
const dateOfBirthInput = new Input(dateOfBirthType, dateOfBirthElement, dateOfBirthParentElement, null, dateOfBirthMessageElement, dateOfBirthIsValid);
dateOfBirthInput.validate(); // Repeated code: REFACTOR!

/*******************************************************************************/

/**
 * END REFACTOR
 */

/*******************************************************************************/


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

form.addEventListener('submit', ($event) => {
  $event.preventDefault();
  // Check validity of input fields one by one
  // in order to display one message at a time
  if (!firstNameIsValid) {
    console.log('First name is invalid!');
    firstNameElement.style.border = inputBorderStyleInvalid;
    firstNameElement.style.backgroundColor = '#FFE6E6';
    // Two possible scenarii:
    // 1) Field is empty
    if (firstNameElement.value.length === 0) {
      firstNameMessageElement.textContent = messageEmpty;
    }
    // 2) Input has only one character
    if (firstNameElement.value.length === 1) {
      firstNameMessageElement.textContent = nameMessageShort;
    }
    firstNameParentElement.appendChild(firstNameMessageElement);
  } else if (!lastNameIsValid) {
    console.log('Last name is invalid!');
    lastNameElement.style.border = inputBorderStyleInvalid;
    lastNameElement.style.backgroundColor = '#FFE6E6';
    // Two possible scenarii:
    // 1) Field is empty
    if (lastNameElement.value.length === 0) {
      lastNameMessageElement.textContent = messageEmpty;
    }
    // 2) Input has only one character
    if (lastNameElement.value.length === 1) {
      lastNameMessageElement.textContent = nameMessageShort;
    }
    lastNameParentElement.appendChild(lastNameMessageElement);
  } else if (!emailIsValid) {
    console.log('Email is invalid!');
    emailElement.style.border = inputBorderStyleInvalid;
    emailElement.style.backgroundColor = '#FFE6E6';
    // Two possible scenarii:
    // 1) Field is empty
    if (emailElement.value.length === 0) {
      emailMessageElement.textContent = messageEmpty;
    }
    // 2) Input doesn't match regex
    if (emailRegex.test(emailElement.value)) {
      emailMessageElement.textContent = emailMessageInvalid;
    }
    emailParentElement.appendChild(emailMessageElement);
  } else if (!dateOfBirthIsValid) {
    console.log('Date of birth is invalid!');
    dateOfBirthInput.style.border = inputBorderStyleInvalid;
    dateOfBirthInput.style.backgroundColor = '#FFE6E6';
    // Two possible scenarii:
    // 1) Field is empty
    if (dateOfBirthInput.value === '') {
      dateOfBirthInputMessage.textContent = dateOfBirthMessageEmpty;
    }
    // 2) Entered date is in the future
    else if (!dateOfBirthIsInPast) {
      dateOfBirthInputMessage.textContent = dateOfBirthMessageInvalid;
    }
    dateOfBirthInputParent.appendChild(dateOfBirthInputMessage);
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
    replaceFormContent();
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

// Form content DOM element
const formContent = document.querySelector('.content');

// Replace form content with success message
const replaceFormContent = () => {
  formContent.style.display = 'none';
  backgroundElement.appendChild(successModal);
};
