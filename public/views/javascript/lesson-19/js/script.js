'use strict';

// Polifills
// general purpose
// null vs undefined is important
// if (document.documentElement.nextElementSibling === undefined) {
//   Object.defineProperty(Element.ptototype, 'nextElementSibling', {
//     get: function () {
//       let next = this.nextSibling;

//       do {
//         if (next.nodeType === Node.ELEMENT_NODE) {
//           return next;
//         }

//         next = next.nextSibling;
//       } while (next);

//       return null;
//     }
//   });
// }
// if (document.documentElement.nextElementSiblingCopy === undefined) {
//   Object.defineProperty(Element.prototype, 'nextElementSiblingCopy', {
//     get: function () {
//       let next = this.nextSibling;

//       do {
//         if (next.nodeType === Node.ELEMENT_NODE) {
//           return next;
//         }

//         next = next.nextSibling;
//       } while (next);

//       return null;
//     }
//   });
// }

// console.log(document.getElementById('first-child').nextElementSibling);
// console.log(document.getElementById('first-child').nextElementSiblingCopy);

// property we are checking must exist


// extending native DON classes
// add to all
// Element.prototype.cut = function (maxLength) {
//   if (this.textContent.length > maxLength && maxLength > 3) {
//     this.textContent = this.textContent.slice(0, maxLength - 3) + '...';
//   }
// };

// document.getElementById('cut').cut(10);

// Object.defineProperty(Element.prototype, 'extremeChildren', {
//   get: function () {
//     return [this.firstElementChild, this.lastElementChild];
//   }
// });
// console.log(document.getElementById('extreme').extremeChildren);

// HTMLInputElement.prototype.setPlaceholderToValue = function () {
//   this.value = this.placeholder;
// };
// document.getElementById('name').setPlaceholderToValue();

// HTMLInputElement.prototype.valueToCodes = function () {
//   return Array.prototype.map.call(this.value, function (char) {
//     return char.charCodeAt(0);
//   });
// };
// console.log(document.getElementById('email').valueToCodes());

