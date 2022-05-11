/**
 * Class Input
 */

class Input {
  constructor(type, element, parentElement, regex, messageElement, messageElementId) {
    this.type = type;
    this.element = element;
    this.parentElement = parentElement;
    this.regex = regex;
    this.messageElement = messageElement;
    this.messageElementId = messageElementId;
  }

  validate() {
    console.log(`Entered validate() method for ${this.type}`);
    this.parentElement.addEventListener('input', ($event) => {
      console.log(`Entered: ${$event.target.value}`);
      if (this.regex.test($event.target.value)) {
        // If input matches regex, give it valid styles
        this.element.style.border = input.style.inputBorderValid;
        this.element.style.backgroundColor = input.style.backgroundColorValid;
        // If there is a message displayed, remove it
        if (document.getElementById(this.messageElementId)) {
          this.parentElement.removeChild(this.messageElement);
        }
        console.log('First name is valid');
      } else {
        // If input doesn't match regex, give it invalid styles
        this.element.style.border = input.style.inputBorderInvalid;
        this.element.style.backgroundColor = input.style.backgroundColorInvalid;
        console.log('First name is invalid');
        // If input field is empty
        if ($event.target.value.length === 0) {
          console.log('Ce champ ne peut pas être vide');
          this.messageElement.textContent = message.content.empty.generic;
        }
        // If input has only one character
        if ($event.target.value.length === 1) {
          console.log('Veuillez entrer au moins deux caractères');
          this.messageElement.textContent = message.content.nameTooShort;
        }
        // Display message
        this.parentElement.appendChild(this.messageElement);
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
    firstName: 'first-name-message',
    lastName: 'last-name-message',
    email: 'email-message',
    dateOfBirth: 'dob-message',
    numberOfTournaments: 'number-of-tournaments-message',
    tournamentOptions: 'tournament-options-message',
    termsOfUse: 'terms-of-use-message'
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
// Style it
firstNameMessageElement.style.fontSize = input.style.fontSize;
firstNameMessageElement.style.color = input.style.color;

/* ********************************************************* */

// Instantiate inputs
const firstNameInput = new Input(input.type.name, firstNameElement, firstNameParentElement, regex.name, firstNameMessageElement, message.id.firstName);

// Call validation method on all inputs
firstNameInput.validate();
