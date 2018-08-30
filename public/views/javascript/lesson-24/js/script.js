'use strict';

// focus/blur
// document.getElementById('name').addEventListener('focus', function (e) {
//   console.log(e.type);
// }, false);
// document.getElementById('name').addEventListener('blur', function (e) {
//   console.log(e.type);
// }, false);
// document.querySelector('[tabindex="0"]').addEventListener('focus', function (e) {
//   console.log('div:', e.type);
// }, false);
// document.querySelector('[tabindex="0"]').addEventListener('blur', function (e) {
//   console.log('div:', e.type);
// }, false);

// function validateName (field, errElement) {
//   const val = field.value;

//   if (!val.length) {
//     errElement.textContent = 'Name field cannot be empty';
//     errElement.classList.add('form-error--visible');
//     field.classList.add('error');

//     return false;
//   }
//   if (val.length > 12) {
//     errElement.textContent = 'Your name is too long';
//     errElement.classList.add('form-error--visible');
//     field.classList.add('error');

//     return false;
//   }

//   return true;
// }

// document.getElementById('name').addEventListener('focus', function (e) {
//   this.classList.remove('error');
//   this.nextElementSibling.classList.remove('form-error--visible');
//   this.nextElementSibling.textContent = '';
//   // this.blur();
// }, false);
// document.getElementById('name').addEventListener('blur', function (e) {
//   const errElement = this.nextElementSibling;

//   validateName(this, errElement);
// }, false);
// document.forms[0].addEventListener('submit', function (e) {
//   const nameField = this.querySelector('#name');
//   const errElement = nameField.nextElementSibling;

//   e.preventDefault();

//   if (!validateName(nameField, errElement)) {
    
//     nameField.focus();
//   } else {
//     this.submit();
//   }
// });

// document.addEventListener('focus', function (e) {
//   console.log(e.type, e.target);
// }, true);
// document.addEventListener('blur', function (e) {
//   console.log(e.type, e.target);
// }, true);


// submit event
// document.addEventListener('submit', function (e) {
//   e.preventDefault();

//   console.log(e.target);
// });
// document.querySelector('.button').addEventListener('click', function (e) {
//   e.preventDefault();

//   console.log(e.target);
// });


// change event
// document.getElementById('name').addEventListener('change', function (e) {
//   console.log(e.target, e.type);
// }, false);
// document.addEventListener('change', function (e) {
//   console.log(e.target, e.type);
// }, false);


// input event
// document.addEventListener('input', function (e) {
//   // e.target.nextElementSibling.textContent = e.target.value;
//   // e.target.nextElementSibling.classList.add('form-error--visible');
// }, false);

// function PressSpeed (input) {
//   this.start = null;
//   this.input = input;

//   this.onFocus = this.onFocus.bind(this);
//   this.onBlur = this.onBlur.bind(this);
//   this.onInput = this.onInput.bind(this);

//   this.input.addEventListener('focus', this.onFocus);
//   this.input.addEventListener('blur', this.onBlur);
//   this.input.addEventListener('input', this.onInput);

//   return this;
// }
// PressSpeed.prototype.onFocus = function (e) {
//   this.start = Date.now();
// };
// PressSpeed.prototype.calcSpeed = function (val) {
//   const charsLength = val.length;

//   console.log((charsLength - 1) / ((Date.now() - this.start) / (1000)));
// };
// PressSpeed.prototype.onBlur = function (e) {
//   this.start = null;
//   this.input.value = '';
//   console.clear();
// };
// PressSpeed.prototype.onInput = function (e) {
//   this.calcSpeed(e.target.value);
// };

// const pressSpeed = new PressSpeed(document.getElementById('name'));

// document.addEventListener('copy', function (e) {
//   e.preventDefault();
// }, false);
// document.addEventListener('paste', function (e) {
//   e.preventDefault();
// }, false);
// document.addEventListener('cut', function (e) {
//   e.preventDefault();
// }, false);

// document.addEventListener('input', function (e) {
//   console.log(e.target.value);
// }, false);

function delegate (selector, cb) {
  return function (e) {
    let target = e.target.closest(selector);

    if (!target) {
      return;
    }

    cb.call(this, e);
  };
}

function copyToClipboard (str) {
  let textarea = document.createElement('textarea');
  textarea.value = str;

  document.body.append(textarea);

  textarea.select();
  document.execCommand('copy');

  textarea.remove();
}

function handleClick (e) {
  copyToClipboard(document.getElementById('name').value);
}
document.addEventListener('click', delegate('[type="button"]', handleClick), false);
