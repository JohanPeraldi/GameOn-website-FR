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
    console.log(`Entered validate() method for ${this.messageElementId}`);
    this.parentElement.addEventListener('input', ($event) => {
      console.log(`Entered: ${$event.target.value}`);
      // Check whether there is a regex for current input
      // First & last names inputs, email & number of tournaments inputs
      if (this.regex) {
        if (this.regex.test($event.target.value)) {
          // If input matches regex, give it valid styles
          this.element.style.border = input.style.inputBorderValid;
          this.element.style.backgroundColor = input.style.backgroundColorValid;
          // If there is a message displayed, remove it
          if (document.getElementById(this.messageElementId)) {
            this.parentElement.removeChild(this.messageElement); // Causes error when entering valid email address: Uncaught DOMException: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.
          }
          this.isValid = true;
          console.log('Input is valid');
        } else {
          // If input doesn't match regex, give it invalid styles
          this.element.style.border = input.style.inputBorderInvalid;
          this.element.style.backgroundColor = input.style.backgroundColorInvalid;
          // If input field is empty
          if ($event.target.value.length === 0) {
            console.log('Ce champ ne peut pas être vide');
            this.messageElement.textContent = message.content.empty.generic;
          }
          // Only for name inputs, i.e. inputs with type 'text'
          // If input has only one character
          if (this.type === 'text') {
            if ($event.target.value.length === 1) {
              console.log('Veuillez entrer au moins deux caractères');
              this.messageElement.textContent = message.content.nameTooShort;
            }
          }
          // Only for email input, when input field is not empty
          // (if field is empty, display generic message above)
          if (this.type === 'email' && $event.target.value.length !== 0) {
            console.log('Veuillez entrer une adresse email valide du type xx@xxx.xx');
            // Set specific message indicating expected email pattern
            this.messageElement.textContent = message.content.emailInvalid;
          }
          // Only for number of tournaments input, when input field is not empty
          // (if field is empty, display generic message above)
          if (this.type === 'number') {
            // Entered number is out or range
            this.messageElement.textContent = message.content.numberOfTournamentsInvalid;
          }
          // Display message
          this.parentElement.appendChild(this.messageElement);
          this.isValid = false;
          console.log('Input is invalid');
        }
      } else {
        // If current input is not validated using a regex
        // i.e. date of birth and tournament options inputs

        // 1) If input type === 'date' (date of birth input)
        if (this.type === 'date') {
          // Declare a variable to indicate whether entered DOB is a past date
          let dateOfBirthIsInPast;
          dateOfBirthIsInPast = Date.now() - Date.parse($event.target.value) > 0;
          console.log(`Date of birth is in the past: ${dateOfBirthIsInPast}`);
          if ($event.target.value !== '') {
            if (!dateOfBirthIsInPast) {
              console.log('Come on! You can\'t be born in the future!');
              this.isValid = false;
              this.element.style.border = input.style.inputBorderInvalid;
              this.element.style.backgroundColor = input.style.backgroundColorInvalid;
              this.messageElement.textContent = message.content.dateOfBirthInvalid;
              this.parentElement.appendChild(this.messageElement);
            } else {
              console.log('DOB input is valid');
              this.isValid = true;
              this.element.style.border = input.style.inputBorderValid;
              this.element.style.backgroundColor = input.style.backgroundColorValid;
              console.log(this.messageElement);
              if (document.getElementById(this.messageElementId)) {
                this.parentElement.removeChild(this.messageElement);
              }
            }
          } else {
            console.log('DOB field cannot be empty');
            this.isValid = false;
            this.element.style.border = input.style.inputBorderInvalid;
            this.element.style.backgroundColor = input.style.backgroundColorInvalid;
            this.messageElement.textContent = message.content.empty.dateOfBirth;
            this.parentElement.appendChild(this.messageElement);
          }
        }

        // 2) If input type === 'radio' (tournament options input)
        if (this.type === 'radio') {
          this.messageElement.textContent = message.content.empty.tournamentOptions;
          const tournamentLocation = $event.target.value;
          this.isValid = tournamentLocation === 'New York'
            || tournamentLocation === 'San Francisco'
            || tournamentLocation === 'Seattle'
            || tournamentLocation === 'Chicago'
            || tournamentLocation === 'Boston'
            || tournamentLocation === 'Portland';
          console.log(`Option selected: ${tournamentLocation}`);
          console.log(`Option is valid: ${this.isValid}`);
          // Remove error message if present
          if (this.isValid) {
            if (document.getElementById(this.messageElementId)) {
              this.parentElement.removeChild(this.messageElement);
            }
          }
        }
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
    backgroundColorValid: '#E6FFEA',
    backgroundColorInvalid: '#FFE6E6',
    inputBorderValid: '2px solid green',
    inputBorderInvalid: '2px solid red',
    fontSize: '14px',
    color: 'red'
  }
};

// Invalid input messages
const message = {
  content: {
    empty: {
      generic: 'Ce champ ne peut pas être vide',
      dateOfBirth: 'Veuillez entrer votre date de naissance',
      tournamentOptions: 'Veuillez choisir une option'
    },
    nameTooShort: 'Veuillez entrer au moins deux caractères',
    emailInvalid: 'Veuillez entrer une adresse email valide du type xx@xxx.xx',
    dateOfBirthInvalid: 'Vous n\'êtes pas encore né!',
    numberOfTournamentsInvalid: 'Veuillez entrer un nombre entre 0 et 99 inclus',
    onSubmit: 'Erreur de saisie sur le champ ci-dessus'
  },
  id: {
    firstName: 'first-name',
    lastName: 'last-name',
    email: 'email',
    dateOfBirth: 'date-of-birth',
    numberOfTournaments: 'number-of-tournaments',
    tournamentOptions: 'tournament-options',
    termsOfUse: 'terms-of-use'
  }
};

// Regular Expressions for input validation
const regex = {
  name: /^\S{2,}$/,
  email: /^[^\s@]{2,}@[^\s@]{3,}\.[^\s@]{2,}$/,
  numberOfTournaments: /^\d{1,2}$/
};

/**
 * DOM Elements
 */

/* ********************* FIRST NAME ************************ */
// 1) Target existing DOM elements
// First name input
const firstNameElement = document.getElementById('first');
// Parent of first name input
const firstNameParentElement = firstNameElement.parentElement;

// 2) Create DOM element
// Create a span element that will contain a message
// to be inserted after input element
const firstNameMessageElement = document.createElement('span');
// Give it an id
firstNameMessageElement.setAttribute('id', message.id.firstName);

/* ********************* LAST NAME ************************ */
// 1) Target existing DOM elements
// Last name input
const lastNameElement = document.getElementById('last');
// Parent of last name input
const lastNameParentElement = lastNameElement.parentElement;

// 2) Create DOM element
// Create a span element that will contain a message
// to be inserted after input element
const lastNameMessageElement = document.createElement('span');
// Give it an id
lastNameMessageElement.setAttribute('id', message.id.lastName);

/* *********************** EMAIL ************************** */
// 1) Target existing DOM elements
// Email input
const emailElement = document.getElementById('email');
// Parent of email input
const emailParentElement = emailElement.parentElement;

// 2) Create DOM element
// Create a span element that will contain a message
// to be inserted after email element
const emailMessageElement = document.createElement('span');
// Give it an id
emailMessageElement.setAttribute('id', message.id.email);

/* ******************* DATE OF BIRTH ********************** */
// 1) Target existing DOM elements
// Date of birth input
const dateOfBirthElement = document.getElementById('birthdate');
// Parent of date of birth input
const dateOfBirthParentElement = dateOfBirthElement.parentElement;

// 2) Create DOM element
// Create a span element that will contain a message
// to be inserted after date of birth element
const dateOfBirthMessageElement = document.createElement('span');
// Give it an id
dateOfBirthMessageElement.setAttribute('id', message.id.dateOfBirth);

/* **************** NUMBER OF TOURNAMENTS ****************** */
// 1) Target existing DOM elements
// Number of tournaments input
const numberOfTournamentsElement = document.getElementById('quantity');
// Parent of number of tournaments input
const numberOfTournamentsParentElement = numberOfTournamentsElement.parentElement;

// 2) Create DOM element
// Create a span element that will contain a message
// to be inserted after number of tournaments element
const numberOfTournamentsMessageElement = document.createElement('span');
// Give it an id
numberOfTournamentsMessageElement.setAttribute('id', message.id.numberOfTournaments);

/* ***************** TOURNAMENT OPTIONS ******************** */
// 1) Target existing DOM element
// Tournament options parent element
const tournamentOptionsParentElement = document.getElementById('location1').parentElement;

// 2) Create DOM element
// Create a span element that will contain a message
// to be inserted after tournament options radio buttons element
const tournamentOptionsMessageElement = document.createElement('span');
// Give it an id
tournamentOptionsMessageElement.setAttribute('id', message.id.tournamentOptions);

/* *************** STYLE MESSAGE ELEMENTS ****************** */
// Create an array to store all message elements
const messageElements = [firstNameMessageElement, lastNameMessageElement, emailMessageElement, dateOfBirthMessageElement, numberOfTournamentsMessageElement, tournamentOptionsMessageElement];
// Style all elements in array
messageElements.forEach(element => element.style.fontSize = input.style.fontSize);
messageElements.forEach(element => element.style.color = input.style.color);

/* ****************** FORM SUBMISSION ********************* */
// 1) Target existing DOM elements
// The div with the class "bground"
const backgroundElement = document.querySelector('.bground');
// The form element
const form = document.querySelector('form');
// The form content element
const formContent = document.querySelector('.content');

// 2) Create DOM elements
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

/* ********************************************************* */

// Instantiate inputs
// All inputs are invalid by default
const firstNameInput = new Input(input.type.name, firstNameElement, firstNameParentElement, regex.name, firstNameMessageElement, message.id.firstName, false);
const lastNameInput = new Input(input.type.name, lastNameElement, lastNameParentElement, regex.name, lastNameMessageElement, message.id.lastName, false);
const emailInput = new Input(input.type.email, emailElement, emailParentElement, regex.email, emailMessageElement, message.id.email, false);
const dateOfBirthInput = new Input(input.type.dateOfBirth, dateOfBirthElement, dateOfBirthParentElement, null, dateOfBirthMessageElement, message.id.dateOfBirth, false);
const numberOfTournamentsInput = new Input(input.type.numberOfTournaments, numberOfTournamentsElement, numberOfTournamentsParentElement, regex.numberOfTournaments, numberOfTournamentsMessageElement, message.id.numberOfTournaments, false);
const tournamentOptionsInput = new Input(input.type.tournamentOptions, tournamentOptionsParentElement, tournamentOptionsParentElement, null, tournamentOptionsMessageElement, message.id.tournamentOptions, false);

// Create an array to store all inputs
const inputs = [firstNameInput, lastNameInput, emailInput, dateOfBirthInput, numberOfTournamentsInput, tournamentOptionsInput];
// Call validation method on all inputs
inputs.forEach(input => input.validate());

/**
 * Form submission
 */

// Check that form is valid, i.e. all fields are valid, before submitting form
// The inputs array is passed as only argument to the function
const formIsValid = (inputs) => {
  // Initialize variables to keep track of valid & invalid inputs
  // as well as total number of inputs processed
  let validInputs = 0;
  let invalidInputs = 0;
  let totalInputs = 0;
  // An array to store invalid inputs
  const confirmedInvalid = [];
  // The message elements of the invalid inputs
  const messageElement = [];
  // Check validity of each input in array
  inputs.forEach(input => {
    console.log(input.isValid);
    input.isValid ? validInputs++ : invalidInputs++;
    totalInputs++;
    if (!input.isValid) {
      // If invalid input is the radio buttons element
      // it should be processed differently because we
      // are targeting the parent element, not the radio
      // inputs themselves
      if (input.type === 'radio') {
        console.log('No radio button selected!');
        confirmedInvalid.push('radio');
        messageElement.push(tournamentOptionsMessageElement);
      } else {
        confirmedInvalid.push(input.element.id);
        messageElement.push(input.messageElement);
      }
    }
  })
  console.log(confirmedInvalid, messageElement);
  if (invalidInputs === 0 && validInputs === totalInputs) {
    console.log('All inputs are valid! Form can be submitted!');
    replaceFormContent();
  } else {
    console.log(`There are ${validInputs} valid input(s) and ${invalidInputs} invalid input(s) out of ${totalInputs}. Form cannot be submitted.`)
    console.log(`Invalid input field(s): ${confirmedInvalid}`);
    // The following 'if' block does not apply to radio buttons
    if (confirmedInvalid[0] !== 'radio') {
      messageElement[0].textContent = message.content.onSubmit;
      document.getElementById(confirmedInvalid[0]).style.border = input.style.inputBorderInvalid;
      document.getElementById(confirmedInvalid[0]).style.backgroundColor = input.style.backgroundColorInvalid;
      document.getElementById(confirmedInvalid[0]).parentElement.appendChild(messageElement[0]);
    } else {
      // This block only applies to radio buttons
      tournamentOptionsMessageElement.textContent = message.content.empty.tournamentOptions;
      tournamentOptionsParentElement.appendChild(tournamentOptionsMessageElement);
    }
  }
};

// Add 'submit' event listener on form element
// and call formIsValid function on form submit event
form.addEventListener('submit', ($event) => {
  // Prevent page reload
  $event.preventDefault();
  formIsValid(inputs);
});

// Replace form content with success message
const replaceFormContent = () => {
  formContent.style.display = 'none';
  backgroundElement.appendChild(successModal);
};
