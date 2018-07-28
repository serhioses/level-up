'use strict';

// example
// function NotificationList (container) {
//   this.container = container;
//   this.notifications = [];

//   this.askMessage = this.askMessage.bind(this);
//   this.close = this.close.bind(this);

//   return this;
// }
// NotificationList.prototype.add = function (message) {
//   const notification = new Notification(message);

//   notification.show(this.container);

//   this.notifications.push(notification);
// };
// NotificationList.prototype.askMessage = function () {
//   const message = prompt('Enter a message', '');

//   this.add(message);
// };
// NotificationList.prototype.close = function (e) {
//   let target = e.target.closest('.notification__close');

//   if (!target) {
//     return;
//   }

//   const id = target.closest('.notification').notificationId;

//   this.notifications = this.notifications.filter(function (notification) {
//     if (notification._id === id) {
//       notification.close();
//     }

//     return notification._id !== id;
//   });

//   console.log(this.notifications);
// };

// function Notification (message) {
//   this._id = Math.random();

//   this.message = message;

//   return this;
// }
// Notification.prototype.show = function (parent) {
//   const notification = document.createElement('div');
//   notification.className = 'notification';

//   const text = document.createTextNode(this.message);
//   const closeIcon = document.createElement('span');
//   closeIcon.className = 'notification__close';
//   closeIcon.innerHTML = '&times;';

//   notification.appendChild(text);
//   notification.appendChild(closeIcon);

//   parent.insertBefore(notification, parent.firstElementChild);

//   void notification.offsetWidth;
//   notification.classList.add('animated');

//   this.el = notification;
//   this.el.notificationId = this._id;
// };
// Notification.prototype.close = function (e) {
//   this.el.parentNode.removeChild(this.el);
// };

// const notificationList = new NotificationList(document.getElementById('notifications'));
// document.getElementById('add-notification').addEventListener('click', notificationList.askMessage, false);
// document.addEventListener('click', notificationList.close, false);


// insertAdjacentHTML
// const list = document.getElementById('list');
// const newItems = `
//   <li>
//     <p>
//       <span>New list item 1</span>
//     </p>
//   </li>
//   <li>
//     <p>
//       <span>New list item 2</span>
//     </p>
//   </li>
//   <li>
//     <p>
//       <span>New list item 3</span>
//     </p>
//   </li>
// `;
// console.log(newItems);
// wrong
// list.insertBefore(newItems, list.children[2]);

// solution 1
// const tempContainer = document.createElement('div');
// tempContainer.innerHTML = newItems;
// wrong way
// Array.prototype.forEach.call(tempContainer.children, function (child) {
//   list.insertBefore(child, list.children[3]);
// });
// wrong order
// while (tempContainer.children.length) {
//   list.insertBefore(tempContainer.firstElementChild, list.children[3]);
// }
// right
// let target = list.children[3];
// while (tempContainer.children.length) {
//   list.insertBefore(tempContainer.firstElementChild, target);
// }

// solution 2
// beforeBegin, afterBegin, beforeEnd, afterEnd
// list.children[2].insertAdjacentHTML('afterEnd', newItems);

// insertAdjacentElement
// const select = document.getElementById('select');
// const fantasyGroup = document.createElement('optgroup');
// fantasyGroup.label = 'Fantasy';

// fantasyGroup.innerHTML = `
//   <option value="4">The Lord of the Rings</option>
//   <option value="5">Warcraft</option>
// `;
// select.insertAdjacentElement('afterBegin', fantasyGroup);
// fantasyGroup.children[0].selected = true;

// insertAdjacentText



// DocumentFragment
// function timingDecorator (func) {
//   return function () {
//     const start = Date.now();

//     const result = func.apply(this, arguments);

//     console.log(Date.now() - start);

//     return result;
//   }
// }

// const xhr = new XMLHttpRequest();
// const table = document.getElementById('table');
// const tbody = table.tBodies[0];
// let items;
// xhr.open('GET', 'https://api.github.com/search/repositories?q=javascript+topic:react');

// function draw () {
//   items = JSON.parse(this.responseText).items;
//   // solution 1
//   // for (let i = 0; i < 100; i += 1) {
//   //   items.forEach(function (item) {
//   //     const newRow = document.createElement('tr');

//   //     newRow.innerHTML = `
//   //       <td>${item.id}</td>
//   //       <td>${item.description}</td>
//   //       <td>
//   //         <a href="${item.ssh_url}">${item.ssh_url}</a>
//   //       </td>
//   //       <td>${item.watchers_count}</td>
//   //     `;

//   //     tbody.appendChild(newRow);
//   //   });
//   // }

//   // solution 2
//   // const fragment = document.createDocumentFragment();

//   // for (let i = 0; i < 100; i += 1) {
//   //   items.forEach(function (item) {
//   //     const newRow = document.createElement('tr');

//   //     newRow.innerHTML = `
//   //       <td>${item.id}</td>
//   //       <td>${item.description}</td>
//   //       <td>
//   //         <a href="${item.ssh_url}">${item.ssh_url}</a>
//   //       </td>
//   //       <td>${item.watchers_count}</td>
//   //     `;

//   //     fragment.appendChild(newRow);
//   //   });
//   // }
//   // tbody.appendChild(fragment);
// }


// xhr.onload = timingDecorator(draw);

// xhr.send();


// new DOM methods
// const container = document.getElementById('container');

// // append
// const par1 = document.getElementById('par-1');
// const par2 = document.getElementById('par-2');
// container.append(par1, par2);

// // prepend
// const par3 = document.getElementById('par-3');
// const par4 = document.getElementById('par-4');
// container.prepend(par3, par4);

// // after
// container.after(par1, par2);

// // before
// container.before(par3, par4);

// // replaceWith
// const replacer1 = document.getElementById('replacer-1');
// const replacer2 = document.getElementById('replacer-2');
// container.replaceWith(replacer1, replacer2);

// // remove
// par1.remove();
// par3.remove();


// document.write (don't use)



// Styles, getComputedStyle
// style property
// const rect = document.querySelector('.rect');
// // console.log(rect.style);
// rect.style.transform = 'rotateZ(4deg)';
// rect.style.display = 'flex';
// rect.style.alignItems = 'center';
// rect.style.justifyContent = 'center';

// // console.log(rect.style);
// // console.log(rect.style.display);
// // console.log(rect.style.justifyContent);
// // console.log(rect.style.width);
// // console.log(rect.style.backgroundColor);

// rect.style.width = '20rem';
// rect.style.backgroundColor = '#7c3056';
// rect.style.margin = '60px 40px';
// // console.log(rect.style.width);
// // console.log(rect.style.backgroundColor);
// // console.log(rect.style.margin);

// // float -> cssFloat

// // rect.style.backgroundColor = '';
// // rect.style.textTransform = '';

// document.querySelector('button').addEventListener('click', function () {
//   // rect.style.display = 'none';
//   // rect.style.display = 'block';

//   rect.style.display = rect.style.display !== 'none' ? 'none' : '';
// }, false);

// rect.style.width = '20rem';
// rect.setAttribute('style', 'background-color: #8a3d08; opacity: 0.4');
// rect.style.cssText = 'background-color: #8a3d08; opacity: 0.4';

// when to use

// getComputedStyle(element[ ,pseudo])
// const rect = document.querySelector('.rect');
// const computedStyle = getComputedStyle(rect);
// const computedStyle = getComputedStyle(rect, ':before');

// // Array.prototype.forEach.call(computedStyle, function (style) {
// //   console.log(style + ' = ' + computedStyle[style]);
// // });
// console.log(computedStyle.margin);
// console.log(computedStyle.marginTop);
// console.log(computedStyle.marginRight);
// console.log(computedStyle.marginBottom);
// console.log(computedStyle.marginLeft);
// rect.style.width = '50%';
// console.log(computedStyle.width);
// console.log(computedStyle.position);
// console.log(computedStyle.content);

// use only full property name


// Element metrics and scroll
// always number in pixels
// for "invisible" elements 0x0
// const metrics = document.querySelector('.metrics');
// const computedStyle = getComputedStyle(metrics);
// offsetParent
// console.log(metrics.offsetParent);
// offsetTop, offsetLeft
// console.log('top:', metrics.offsetTop);
// console.log('left:', metrics.offsetLeft);

// offsetWidth, offsetHeight
// console.log('full width with the border:', metrics.offsetWidth);
// console.log('full height with the border:', metrics.offsetHeight);

// clientTop, clientLeft
// distance between the outer area and the inner area of an element including scroll bar
// console.log('clientTop:', metrics.clientTop);
// console.log('clientLeft:', metrics.clientLeft);
// console.log(metrics.offsetWidth - metrics.clientLeft - metrics.clientWidth);

// clientWidth, clientHeight
// content size + paddings - scroll bar width (depends on a browser)
// console.log('clientWidth', metrics.clientWidth);
// console.log('clientHeight', metrics.clientHeight);
// console.log('computed width:', computedStyle.width);
// console.log('offset width:', metrics.offsetWidth);
// console.log('client width:', metrics.clientWidth);

// scrollWidth, scrollHeight
// console.log('scroll width:', metrics.scrollWidth);
// console.log('scroll height:', metrics.scrollHeight);

// scrollTop, scrollLeft
// console.log('scroll top:', metrics.scrollTop);
// console.log('scroll left:', metrics.scrollLeft);
// metrics.addEventListener('scroll', function () {
//   console.log('scroll top:', metrics.scrollTop);
// });
