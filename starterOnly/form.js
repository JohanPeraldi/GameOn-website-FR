/**
 * Class Input
 */

class Input {
  constructor(type, element, parentElement, regex, messageElement, messageElementId, isValid) {
    this.type = type;
    this.element = element;
    this.parentElement = parentElement;
    this.regex = regex;
    this.messageElement = messageElement;
    this.messageElementId = messageElementId;
    this.isValid = isValid;
  }

  validate() {
    console.log(`Entered validate() method for ${this.type}`);
    this.element.addEventListener('input', ($event) => {
      // Check whether there is a regex for current input
      if (this.regex) {
        console.log(`${this.type} type input validity uses regex`);
        console.log(`Entered: ${$event.target.value}`);
        if (this.regex.test($event.target.value)) {
          this.isValid = true;
          this.isValid === true ? console.log(`${this.type} is valid`) : console.log(`${this.type} is invalid`);
          this.element.style.border = input.style.inputBorderValid;
          this.element.style.backgroundColor = input.style.backgroundColorValid;
          console.log(this.messageElement);
          if (document.getElementById(this.messageElementId)) {
            this.parentElement.removeChild(this.messageElement);
          }
        } else {
          this.element.style.border = input.style.inputBorderInvalid;
          this.element.style.backgroundColor = input.style.backgroundColorInvalid;
          // Code below for empty fields
          if ($event.target.value.length === 0) {
            console.log('Ce champ ne peut pas être vide');
            this.messageElement.textContent = message.content.empty.generic;
          }
          // Code below only for names
          if (this.type === 'text') {
            if ($event.target.value.length === 1) {
              console.log('Veuillez entrer au moins deux caractères');
              this.messageElement.textContent = message.content.nameTooShort;
            }
          }
          // Code below only for email
          if (this.type === 'email') {
            if ($event.target.value !== '') {
              console.log('Veuillez entrer une adresse email valide du type xx@xxx.xx');
              this.messageElement.textContent = message.content.emailInvalid;
            }
          }
          // Code below only for number of tournaments
          if (this.type === 'number') {
            // Input field is empty
            if ($event.target.value === '') {
              this.messageElement.textContent = message.content.empty.generic;
            } else {
              // Entered number is out or range
              this.messageElement.textContent = message.content.numberOfTournamentsInvalid;
            }
          }
          this.parentElement.appendChild(this.messageElement);
        }
      } else {
        console.log(`${this.type} type input validity doesn't use regex`);
        // For inputs that don't use a regex for validation, i.e. date of birth
        // Code below only for date of birth
        // REFACTOR CODE BELOW!
        if (this.type === 'date') {
          console.log('Checking DOB validity...');
          dateOfBirthIsInPast = Date.now() - Date.parse($event.target.value) > 0;
          console.log(`Date of birth is in the past: ${dateOfBirthIsInPast}`);
          if ($event.target.value !== '') {
            if (!dateOfBirthIsInPast) {
              console.log('Come on! You can\'t be born in the future!');
              this.element.style.border = input.style.inputBorderInvalid;
              this.element.style.backgroundColor = input.style.backgroundColorInvalid;
              this.messageElement.textContent = message.content.dateOfBirthInvalid;
              this.parentElement.appendChild(this.messageElement);
            } else {
              console.log('Le champ date de naissance est valide');
              this.isValid = true;
              this.element.style.border = input.style.inputBorderValid;
              this.element.style.backgroundColor = input.style.backgroundColorValid;
              console.log(this.messageElement);
              if (document.getElementById(this.messageElementId)) {
                this.parentElement.removeChild(this.messageElement);
              }
            }
          } else {
            console.log('Le champ date de naissance ne peut pas être vide');
            this.element.style.border = input.style.inputBorderInvalid;
            this.element.style.backgroundColor = input.style.backgroundColorInvalid;
            this.messageElement.textContent = message.content.empty.dateOfBirth;
            this.parentElement.appendChild(dateOfBirthMessageElement);
          }
        }
        // Code below only for tournament options
        // Validity check for this input should be on form submit only!!
        // Remove following and insert check in submit form check
        // if (this.type === 'radio') {
        //   this.messageElement.textContent = message.empty.tournamentOptions;
        //   const tournamentLocation = $event.target.value;
        //   tournamentOptionsIsValid = tournamentLocation === 'New York'
        //                           || tournamentLocation === 'San Francisco'
        //                           || tournamentLocation === 'Seattle'
        //                           || tournamentLocation === 'Chicago'
        //                           || tournamentLocation === 'Boston'
        //                           || tournamentLocation === 'Portland';
        //   console.log(`Option selected: ${tournamentLocation}`);
        //   console.log(`Option is valid: ${tournamentOptionsIsValid}`);
        //   // Remove error message if present
        //   if (tournamentOptionsIsValid) {
        //     if (document.getElementById(tournamentOptionsMessageId)) {
        //       this.parentElement.removeChild(this.messageElement);
        //     }
        //   }
        // }
        // Remove above code
      }
    });
  }
}

/**
 * OBJECTS
 */

// Inputs
const input = {
  type: {
    name: 'text',
    email: 'email',
    dateOfBirth: 'date',
    numberOfTournaments: 'number',
    tournamentOptions: 'radio',
    termsOfUse: 'checkbox'
  },
  style: {
    inputBorderValid: '1px solid green',
    inputBorderInvalid: '1px solid red',
    fontSize: '14px',
    color: 'red',
    backgroundColorValid: '#E6FFEA',
    backgroundColorInvalid: '#FFE6E6'
  }
};

// Messages
const message = {
  content: {
    empty: {
      generic: 'Ce champ ne peut pas être vide',
      dateOfBirth: 'Veuillez entrer votre date de naissance',
      tournamentOptions: 'Veuillez choisir une option'
    },
    nameTooShort: 'Veuillez entrer au moins deux caractères',
    emailInvalid: 'Veuillez entrer une adresse email valide du type xx@xxx.xx',
    dateOfBirthInvalid: 'Cette date de naissance est invalide',
    numberOfTournamentsInvalid: 'Veuillez entrer un nombre entre 0 et 99 inclus'
  },
  id: {
    firstName: 'first-name-message',
    lastName: 'last-name-message',
    email: 'email-message',
    dateOfBirth: 'dob-message',
    numberOfTournaments: 'number-of-tournaments-message',
    tournamentOptions: 'tournament-options-message',
    termsOfUse: 'terms-of-use-message'
  }
};

/**
 * Regular Expressions
 */

// First & last name validation
const nameRegex = /^\S{2,}$/;
// Email validation
const emailRegex = /^[^\s@]{2,}@[^\s@]{3,}\.[^\s@]{2,}$/;
// Number of tournaments validation
const numberOfTournamentsRegex = /^\d{1,2}$/;


/**
 * DOM Elements
 */

/* ********************* FIRST NAME ************************ */
// First name input
const firstNameElement = document.getElementById('first'); // Repeated code: REFACTOR!

// Parent of first name input
const firstNameParentElement = firstNameElement.parentElement; // Repeated code: REFACTOR!

// Create a span element that will contain a message
// to be inserted after input element
const firstNameMessageElement = document.createElement('span'); // Repeated code: REFACTOR!
// Give it an id
firstNameMessageElement.setAttribute('id', message.id.firstName); // Repeated code: REFACTOR!
// Style the message
firstNameMessageElement.style.fontSize = input.style.fontSize; // Repeated code: REFACTOR!
firstNameMessageElement.style.color = input.style.color; // Repeated code: REFACTOR!

/* ********************* LAST NAME ************************ */
// Last name input
const lastNameElement = document.getElementById('last'); // Repeated code: REFACTOR!

// Parent of last name input
const lastNameParentElement = lastNameElement.parentElement; // Repeated code: REFACTOR!

// Create a span element that will contain a message
// to be inserted after input element
const lastNameMessageElement = document.createElement('span'); // Repeated code: REFACTOR!
// Give it an id
lastNameMessageElement.setAttribute('id', message.id.lastName); // Repeated code: REFACTOR!
// Style the message
lastNameMessageElement.style.fontSize = input.style.fontSize; // Repeated code: REFACTOR!
lastNameMessageElement.style.color = input.style.color; // Repeated code: REFACTOR!

/* *********************** EMAIL ************************** */
// Email input
const emailElement = document.getElementById('email'); // Repeated code: REFACTOR!

// Parent of email input
const emailParentElement = emailElement.parentElement; // Repeated code: REFACTOR!

// Create a span element that will contain a message
// to be inserted after email element
const emailMessageElement = document.createElement('span'); // Repeated code: REFACTOR!
// Give it an id
emailMessageElement.setAttribute('id', message.id.email); // Repeated code: REFACTOR!
// Style the message
emailMessageElement.style.fontSize = input.style.fontSize; // Repeated code: REFACTOR!
emailMessageElement.style.color = input.style.color; // Repeated code: REFACTOR!

/* ******************* DATE OF BIRTH ********************** */
// Date of birth input
const dateOfBirthElement = document.getElementById('birthdate'); // Repeated code: REFACTOR!

// Parent of date of birth input
const dateOfBirthParentElement = dateOfBirthElement.parentElement; // Repeated code: REFACTOR!

// Create a span element that will contain a message
// to be inserted after date of birth element
const dateOfBirthMessageElement = document.createElement('span'); // Repeated code: REFACTOR!
// Give it an id
dateOfBirthMessageElement.setAttribute('id', message.id.dateOfBirth); // Repeated code: REFACTOR!
// Style the message
dateOfBirthMessageElement.style.fontSize = input.style.fontSize; // Repeated code: REFACTOR!
dateOfBirthMessageElement.style.color = input.style.color; // Repeated code: REFACTOR!

/* ********************* TOURNAMENTS *********************** */
// Number of tournaments input
const numberOfTournamentsElement = document.getElementById('quantity'); // Repeated code: REFACTOR!

// Parent of number of tournaments input
const numberOfTournamentsParentElement = numberOfTournamentsElement.parentElement; // Repeated code: REFACTOR!

// Create a span element that will contain a message
// to be inserted after number of tournaments element
const numberOfTournamentsMessageElement = document.createElement('span'); // Repeated code: REFACTOR!
// Give it an id
numberOfTournamentsMessageElement.setAttribute('id', message.id.numberOfTournaments); // Repeated code: REFACTOR!
// Style the message
numberOfTournamentsMessageElement.style.fontSize = input.style.fontSize; // Repeated code: REFACTOR!
numberOfTournamentsMessageElement.style.color = input.style.color; // Repeated code: REFACTOR!

/* ***************** TOURNAMENT OPTIONS ******************** */
// Tournament options parent element
const tournamentOptionsParentElement = document.getElementById('location1').parentElement; // Repeated code: REFACTOR!
// Create a span element that will contain a message
// to be inserted after tournament options radio buttons element
const tournamentOptionsMessageElement = document.createElement('span'); // Repeated code: REFACTOR!
// Give it an id
tournamentOptionsMessageElement.setAttribute('id', message.id.tournamentOptions); // Repeated code: REFACTOR!
// Style the message
tournamentOptionsMessageElement.style.fontSize = input.style.fontSize;
tournamentOptionsMessageElement.style.color = input.style.color;

/* ******************** TERMS OF USE *********************** */
// "Checkbox" input with id='checkbox1' (terms of use)
const termsOfUseCheckbox = document.getElementById('checkbox1');

// "Checkboxes" input parent element
const checkboxesParent = document.getElementById('checkbox1').parentElement;

// Create a paragraph element that will contain a message
// to be inserted after checkboxes element
const checkboxesInputMessage = document.createElement('p');
// Give it an id
checkboxesInputMessage.setAttribute('id', message.id.termsOfUse);
// The message to display inside the created 'p' element
const checkboxesMessage = 'Veuillez lire et accepter les conditions d\'utilisation';
// Add the contents of the message
checkboxesInputMessage.textContent = checkboxesMessage;
// Style the message
checkboxesInputMessage.style.fontSize = input.style.fontSize;
checkboxesInputMessage.style.color = input.style.color;
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
const firstNameInput = new Input(input.type.name, firstNameElement, firstNameParentElement, nameRegex, firstNameMessageElement, message.id.firstName, firstNameIsValid);
firstNameInput.validate(); // Repeated code: REFACTOR!

// LAST NAME VALIDATION
let lastNameIsValid = false;
const lastNameInput = new Input(input.type.name, lastNameElement, lastNameParentElement, nameRegex, lastNameMessageElement, message.id.lastName, lastNameIsValid);
lastNameInput.validate(); // Repeated code: REFACTOR!

// EMAIL VALIDATION
let emailIsValid = false;
const emailInput = new Input(input.type.email, emailElement, emailParentElement, emailRegex, emailMessageElement, message.id.email, emailIsValid);
emailInput.validate(); // Repeated code: REFACTOR!

// DATE OF BIRTH VALIDATION
let dateOfBirthIsValid = false;
let dateOfBirthIsInPast = false;
const dateOfBirthInput = new Input(input.type.dateOfBirth, dateOfBirthElement, dateOfBirthParentElement, null, dateOfBirthMessageElement, message.id.dateOfBirth, dateOfBirthIsValid);
dateOfBirthInput.validate(); // Repeated code: REFACTOR!

// NUMBER OF TOURNAMENTS VALIDATION
let numberOfTournamentsIsValid = false;
const numberOfTournamentsInput = new Input(input.type.numberOfTournaments, numberOfTournamentsElement, numberOfTournamentsParentElement, numberOfTournamentsRegex, numberOfTournamentsMessageElement, message.id.numberOfTournaments, numberOfTournamentsIsValid);
numberOfTournamentsInput.validate(); // Repeated code: REFACTOR!

// TOURNAMENT OPTIONS VALIDATION
let tournamentOptionsIsValid = false;
const tournamentOptionsInput = new Input(input.type.tournamentOptions, tournamentOptionsParentElement, tournamentOptionsParentElement, null, tournamentOptionsMessageElement, message.id.tournamentOptions, tournamentOptionsIsValid);
tournamentOptionsInput.validate(); // Repeated code: REFACTOR!


/*******************************************************************************/

/**
 * END REFACTOR
 */

/*******************************************************************************/


/**
 * Checkboxes validation
 */

// Validation of this field is done on form submit only!!
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

// A function that takes an input element as argument
const validateForSubmission = (inputElement) => {
  if (inputElement.isValid) {
    console.log('Data from input element is ready to be sent');
  }
};

// Submit event listener on form
form.addEventListener('submit', ($event) => {
  // Prevent page reload
  $event.preventDefault();
  // Check validity of input fields one by one
  // in order to display one message at a time
  validateForSubmission(firstNameElement);
  // if (!firstNameIsValid) {
  //   console.log('First name is invalid!');
  //   firstNameElement.style.border = message.style.inputBorderInvalid;
  //   firstNameElement.style.backgroundColor = '#FFE6E6';
  //   // Two possible scenarii:
  //   // 1) Field is empty
  //   if (firstNameElement.value.length === 0) {
  //     firstNameMessageElement.textContent = message.empty.generic;
  //   }
  //   // 2) Input has only one character
  //   if (firstNameElement.value.length === 1) {
  //     firstNameMessageElement.textContent = message.nameTooShort;
  //   }
  //   firstNameParentElement.appendChild(firstNameMessageElement);
  // } else if (!lastNameIsValid) {
  //   console.log('Last name is invalid!');
  //   lastNameElement.style.border = message.style.inputBorderInvalid;
  //   lastNameElement.style.backgroundColor = '#FFE6E6';
  //   // Two possible scenarii:
  //   // 1) Field is empty
  //   if (lastNameElement.value.length === 0) {
  //     lastNameMessageElement.textContent = message.empty.generic;
  //   }
  //   // 2) Input has only one character
  //   if (lastNameElement.value.length === 1) {
  //     lastNameMessageElement.textContent = message.nameTooShort;
  //   }
  //   lastNameParentElement.appendChild(lastNameMessageElement);
  // } else if (!emailIsValid) {
  //   console.log('Email is invalid!');
  //   emailElement.style.border = message.style.inputBorderInvalid;
  //   emailElement.style.backgroundColor = '#FFE6E6';
  //   // Two possible scenarii:
  //   // 1) Field is empty
  //   if (emailElement.value.length === 0) {
  //     emailMessageElement.textContent = message.empty.generic;
  //   }
  //   // 2) Input doesn't match regex
  //   if (emailRegex.test(emailElement.value)) {
  //     emailMessageElement.textContent = message.emailInvalid;
  //   }
  //   emailParentElement.appendChild(emailMessageElement);
  // } else if (!dateOfBirthIsValid) {
  //   console.log('Date of birth is invalid!');
  //   dateOfBirthInput.style.border = message.style.inputBorderInvalid;
  //   dateOfBirthInput.style.backgroundColor = '#FFE6E6';
  //   // Two possible scenarii:
  //   // 1) Field is empty
  //   if (dateOfBirthInput.value === '') {
  //     dateOfBirthInputMessage.textContent = empty.dateOfBirth;
  //   }
  //   // 2) Entered date is in the future
  //   else if (!dateOfBirthIsInPast) {
  //     dateOfBirthInputMessage.textContent = message.dateOfBirthInvalid;
  //   }
  //   dateOfBirthInputParent.appendChild(dateOfBirthInputMessage);
  // } else if (!numberOfTournamentsIsValid) {
  //   console.log('Number of tournaments is invalid!');
  //   numberOfTournamentsInput.style.border = message.style.inputBorderInvalid;
  //   numberOfTournamentsInput.style.backgroundColor = '#FFE6E6';
  //   // Two possible scenarii:
  //   // 1) Field is empty
  //   if (numberOfTournamentsInput.value.length === 0) {
  //     numberOfTournamentsInputMessage.textContent = empty.generic;
  //   }
  //   // 2) Number falls outside allowed range
  //   if (numberOfTournamentsInput.value < 0 || numberOfTournamentsInput.value > 99) {
  //     numberOfTournamentsInputMessage.textContent = message.numberOfTournamentsInvalid;
  //   }
  //   numberOfTournamentsInputParent.appendChild(numberOfTournamentsInputMessage);
  // } else if (!radioInputIsValid) {
  //   console.log('Please select an option!');
  //   radioButtonsParent.appendChild(radioButtonsInputMessage);
  // } else if (!checkboxesInputIsValid) {
  //   console.log('Please read and agree to the terms of use!');
  //   checkboxesParent.appendChild(checkboxesInputMessage);
  // } else {
  //   console.log('Yeepee! All input fields are valid!');
  //   replaceFormContent();
  // }

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
