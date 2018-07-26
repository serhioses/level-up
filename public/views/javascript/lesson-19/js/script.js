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


// Attributes and properties
// our properties
// const example = document.getElementById('example');
// example.extraData = {
//   name: 'example',
//   shape: 'circle',
//   speed: 184,
//   nums: [1, 2, 3],
//   saySomething: function () {
//     console.log('Hi there');
//   }
// };
// console.dir(example);
// console.log(example.extraData.shape);
// console.log(example.extraData.nums);
// example.extraData.saySomething();
// no influence on the view


// Attributes
// element.attributes
// element.hasAttribute(name)
// element.getAttribute(name)
// element.setAttribute(name)
// element.removeAttribute(name)

// An attribute is always a string, case insensitive, visible in html
// const address = document.getElementById('address');
// console.log(address.attributes);
// Array.prototype.forEach.call(address.attributes, function (attr) {
//   console.log(attr.name + ' =', attr.value);
// });
// console.log(address.getAttribute('description'));
// address.setAttribute('time', new Date());
// console.log(address.getAttribute('time'));
// console.log(address.getAttribute('tIMe'));
// address.removeAttribute('description');
// console.log(address.getAttribute('description'));

// console.log(address.getAttribute('name'));
// address.setAttribute('name', 'new_address');
// console.log(address.getAttribute('name'));
// address.removeAttribute('name');
// console.log(address.getAttribute('name'));

// address.setAttribute('value', 'New value from JS');
// console.log(address.time);
// console.log(address.getAttribute('time'));


// Use cases for attributes
// DOM props and HTML attributes are not always the same
// when creating DOM a browser creates props for all standard attributes
// const link = document.getElementById('link');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// const checkbox = document.getElementById('checkbox');
// console.log(checkbox.getAttribute('checked'));
// console.log(checkbox.checked);
// checkbox.removeAttribute('checked');
// checkbox.checked = false;

// const input = document.getElementById('input');
// input.value = 'New input value';
// console.log(input.value, input.getAttribute('value'));


// className
// const address = document.getElementById('address');
// console.log(address.className);
// console.log(address.getAttribute('class'));
// address.className = 'new-classname';
// address.setAttribute('class', 'attribute-classname');
// htmlFor


// classList
// element.classList.add(className)
// element.classList.remove(className)
// element.classList.contains(className)
// element.classList.toggle(className)
// const address = document.getElementById('address');
// console.log(address.classList.add('extra-class'));
// console.log(address.classList.contains('extra-class'));
// console.log(address.classList.remove('extra-class'));
// console.log(address.classList.contains('extra-class'));
// setInterval(function () {
//   address.classList.toggle('extra-class');
//   console.log(address.classList.contains('extra-class'));
// }, 1000);


// data-* attributes, dataset
// const settings = document.getElementById('settings');
// console.log(settings['data-price']);
// console.log(settings.getAttribute('data-price'));
// console.log(settings.dataset.price);
// console.log(settings.dataset.favorite);
// console.log(settings.dataset.oldPrice);
// console.log(settings.dataset.props);
// console.log(JSON.parse(settings.dataset.props));
// settings.dataset.id = 10;
// settings.setAttribute('data-id', 15);
// console.log(settings.dataset);


// contains, compareDocumentPosition
// const container = document.getElementById('container');
// const child = document.getElementById('child');
// console.log(container.contains(child));
// console.log(container.contains(container));

// nodeA.compareDocumentPosition(nodeB);
// 000000 -> 0 -> nodeA === nodeB
// 000001 -> 1 -> different documents
// 000010 -> 2 -> nodeB is before nodeA
// 000100 -> 4 -> nodeA is before nodeB
// 001000 -> 8 -> nodeB contains nodeA
// 010000 -> 16 -> nodeA contains nodeB
// 100000 -> 32 -> for browsers
// const table = document.getElementById('table');
// const thead = table.tHead;
// const row = thead.rows[0];
// const cell = row.cells[0];
// const par = cell.querySelector('p');

// const sentence = document.getElementById('sentence');

// console.log(table.compareDocumentPosition(row)); // 16 + 4
// console.log(row.compareDocumentPosition(table)); // 8 + 2
// console.log(cell.compareDocumentPosition(thead)); // 8 + 2
// console.log(par.compareDocumentPosition(table)); // 8 + 2
// console.log(sentence.compareDocumentPosition(cell)); // 4
// console.log(row.compareDocumentPosition(sentence)); // 2


// Adding and removing DOM nodes

// element creation
// const div = document.createElement('div');
// const textNode = document.createTextNode('Some text');
// console.dir(div);
// console.dir(textNode);

// function showNotification () {
//   const message = prompt('Enter message', '');

//   const notification = document.createElement('div');
//   notification.className = 'notification';
//   const text = document.createTextNode(message);
//   const closeIcon = document.createElement('span');
//   closeIcon.className = 'notification__close';
//   closeIcon.innerHTML = '&times;';

//   notification.appendChild(text);
//   notification.appendChild(closeIcon);

//   document.body.appendChild(notification);

//   void notification.offsetWidth;
//   notification.classList.add('animated');
// }
// showNotification();

// const notifications = document.getElementById('notifications');

// function showNotification () {
//   const message = prompt('Enter message', '');

//   if (!message) {
//     return;
//   }

//   const notification = document.createElement('div');
//   notification.className = 'notification';
//   const text = document.createTextNode(message);
//   const closeIcon = document.createElement('span');
//   closeIcon.className = 'notification__close';
//   closeIcon.innerHTML = '&times;';

//   notification.appendChild(text);
//   notification.appendChild(closeIcon);

//   // notifications.insertBefore(notification, notifications.firstElementChild);
//   notifications.insertBefore(notification, null);

//   return message;
// }
// let result = showNotification();
// let timerId = setTimeout(function tick() {
//   if (result) {
//     result = showNotification();
//     timerId = setTimeout(tick, 3000);
//   }
// }, 3000);
// each method returns added object

// cloneNode
// const clones = document.getElementById('clones');
// const cloneSample = clones.querySelector('.clone');

// let counter = 0;
// let timerId = setTimeout(function tick () {
//   if (counter < 5) {
//     counter += 1;
//     const newClone = cloneSample.cloneNode();
//     clones.insertBefore(newClone, clones.lastElementChild);

//     timerId = setTimeout(tick, 2000);
//   }
// }, 2000);


// removeChild
// const list = document.getElementById('list');
// const span = list.children[1].querySelector('span');
// list.removeChild(list.firstElementChild);
// list.removeChild(list.lastElementChild);
// span.parentNode.parentNode.removeChild(span.parentNode);

// replaceChild
// const list = document.getElementById('list');
// const newLi = document.createElement('li');
// newLi.innerHTML = '<p><span>New list item from JS</span></p>';
// list.replaceChild(newLi, list.children[2]);

// automatic removing
// const fromEl = document.getElementById('from');
// const toEl = document.getElementById('to');
// toEl.appendChild(fromEl.querySelector('p'));
// const clone = fromEl.cloneNode(true);
// toEl.appendChild(clone);


// example
function NotificationList (container) {
  this.container = container;
  this.notifications = [];

  this.askMessage = this.askMessage.bind(this);
  this.close = this.close.bind(this);

  return this;
}
NotificationList.prototype.add = function (message) {
  const notification = new Notification(message);

  notification.show(this.container);

  this.notifications.push(notification);
};
NotificationList.prototype.askMessage = function () {
  const message = prompt('Enter a message', '');

  this.add(message);
};
NotificationList.prototype.close = function (e) {
  let target = e.target.closest('.notification__close');

  if (!target) {
    return;
  }

  const id = target.closest('.notification').notificationId;

  this.notifications = this.notifications.filter(function (notification) {
    if (notification._id === id) {
      notification.close();
    }

    return notification._id !== id;
  });

  console.log(this.notifications);
};

function Notification (message) {
  this._id = Math.random();

  this.message = message;

  return this;
}
Notification.prototype.show = function (parent) {
  const notification = document.createElement('div');
  notification.className = 'notification';

  const text = document.createTextNode(this.message);
  const closeIcon = document.createElement('span');
  closeIcon.className = 'notification__close';
  closeIcon.innerHTML = '&times;';

  notification.appendChild(text);
  notification.appendChild(closeIcon);

  parent.insertBefore(notification, parent.firstElementChild);

  void notification.offsetWidth;
  notification.classList.add('animated');

  this.el = notification;
  this.el.notificationId = this._id;
};
Notification.prototype.close = function (e) {
  this.el.parentNode.removeChild(this.el);
};

const notificationList = new NotificationList(document.getElementById('notifications'));
document.getElementById('add-notification').addEventListener('click', notificationList.askMessage, false);
document.addEventListener('click', notificationList.close, false);

