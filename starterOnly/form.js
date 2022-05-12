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
            this.parentElement.removeChild(this.messageElement);
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
            this.element.style.border = input.style.inputBorderInvalid;
            this.element.style.backgroundColor = input.style.backgroundColorInvalid;
            this.messageElement.textContent = message.content.empty.dateOfBirth;
            this.parentElement.appendChild(this.messageElement);
          }
        }

        // 2) If input type === 'radio' (tournament options input)
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
    dateOfBirthInvalid: 'Cette date de naissance est invalide',
    numberOfTournamentsInvalid: 'Veuillez entrer un nombre entre 0 et 99 inclus'
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

/* *************** STYLE MESSAGE ELEMENTS ****************** */
// Create an array to store all message elements
const messageElements = [firstNameMessageElement, lastNameMessageElement, emailMessageElement, dateOfBirthMessageElement];
// Style all elements in array
messageElements.forEach(element => element.style.fontSize = input.style.fontSize);
messageElements.forEach(element => element.style.color = input.style.color);

/* ********************************************************* */

// Instantiate inputs
// All inputs are invalid by default
const firstNameInput = new Input(input.type.name, firstNameElement, firstNameParentElement, regex.name, firstNameMessageElement, message.id.firstName, false);
const lastNameInput = new Input(input.type.name, lastNameElement, lastNameParentElement, regex.name, lastNameMessageElement, message.id.lastName, false);
const emailInput = new Input(input.type.email, emailElement, emailParentElement, regex.email, emailMessageElement, message.id.email, false);
const dateOfBirthInput = new Input(input.type.dateOfBirth, dateOfBirthElement, dateOfBirthParentElement, null, dateOfBirthMessageElement, message.id.dateOfBirth, false);

// Create an array to store all inputs
const inputs = [firstNameInput, lastNameInput, emailInput, dateOfBirthInput];
// Call validation method on all inputs
inputs.forEach(input => input.validate());

/**
 * Form submission
 */

// Check that form is valid, i.e. all fields are valid, before submitting form
// The inputs array is passed as only argument to the function
// const formIsValid = (inputs) => {
//   // Check validity of each input in array
//   inputs.forEach(input => console.log(input.isValid));
// };

// Call formIsValid function on form submit event
// formIsValid(inputs); // Put inside event listener!!!
