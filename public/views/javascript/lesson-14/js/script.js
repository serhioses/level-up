'use strict';

// Decorators
// bind is a decorator

// var countFuncCalls = function countFuncCalls (func, id) {
//   countFuncCalls.getCounter = function (id) {
//     return countFuncCalls.store[id];
//   };

//   countFuncCalls.store = {};

//   return function () {
//     if (!countFuncCalls.store[id]) {
//       countFuncCalls.store[id] = 0;
//     }

//     countFuncCalls.store[id] += 1;

//     return func.apply(this, arguments);
//   };
// }

// function sum (a, b) {
//   console.log('sum', a + b);
// }
// function mul (a, b) {
//   console.log('mul', a * b);
// }
// var sumDecorator = countFuncCalls(sum, 'sum');
// var mulDecorator = countFuncCalls(mul, 'mul');

// sumDecorator(2, 3);
// sumDecorator(2, 3);
// sumDecorator(2, 3);

// mulDecorator(8, 4)
// mulDecorator(8, 4)
// mulDecorator(8, 4)
// mulDecorator(8, 4)
// mulDecorator(8, 4);

// console.log('------------------');
// console.log(countFuncCalls.store);
// console.log(countFuncCalls.getCounter('sum'));
// console.log(countFuncCalls.getCounter('mul'));

// var loggedIn = true;

// function isLogged () {
//   return loggedIn === true;
// }

// var navigation = {
//   currentPage: 0,
//   goTo: function (page) {
//     this.currentPage = page;
//   }
// };

// function isLoggedDecorator (func /* , context */) {
//   return function () {
//     if (isLogged()) {
//       return func.apply(context, arguments);
//     }

//     return 'Not logged in.';
//   };
// }

// var goToWrapper = isLoggedDecorator(navigation.goTo /* , navigation*/);

// goToWrapper(4);
// // goToWrapper.call(navigation, 4);
// console.log(navigation.currentPage);

// function hasSpam (str, spam) {
//   return str.indexOf(spam) !== -1;
// }

// function checkSpam (func, check, spams) {
//   return function (messages) {
//     for (let i = 0; i < messages.length; i += 1) {
//       if (check(messages[i], spams[i])) {
//         console.log('Spam is detected');

//         return;
//       }
//     }

//     return func.call(this, messages);
//   };
// }

// function printMessages (messages) {
//   messages.forEach(function (message) {
//     console.log(message);
//   });
// }

// var printMessagesSpamDecorator = checkSpam(printMessages, hasSpam, ['abc', '123', '1nb', '8fg']);

// printMessagesSpamDecorator(['dsfdsf', 'sdfk123ksdf', 'dsf1nb', 'dggfh']);
// printMessagesSpamDecorator(['pgh', 'ghlkgfh', 'dfhfgh', 'fdfg']);


// [[Class]]
// console.log(typeof []);
// console.log(typeof new Date());

// function getClassOf (arg) {
//   // return Object.prototype.toString.call(arg);
//   return Object.prototype.toString.call(arg).slice(8, -1);
// }
// console.log(getClassOf([]));
// console.log(getClassOf(new Date()));

// JSON
// JSON can be object, array, string in double quotes, number, boolean, null
// JOSN is just a format

// JSON.parse(str [, reviewer])
// [
//   {
//     name: 'Valera',
//     age: 47,
//     address: {
//       zip: 100,
//       street: 'Valerievicha 42'
//     },
//     hasBonus: true
//   },
//   {
//     name: 'Vasilisa',
//     age: 28,
//     address: {
//       zip: 900,
//       street: 'Vasilevicha 15'
//     },
//     hasBonus: false
//   },
//   {
//     name: 'Sigismundus',
//     age: 156,
//     address: {
//       zip: 0101,
//       street: 'Sigismundusovicha 21'
//     },
//     hasBonus: false
//   },
// ]
// var users = '[{"name": "Valera","age": 47,"address": {"zip": 100,"street": "Valerievicha 42"},"hasBonus": true},{"name": "Vasilisa","age": 28,"address": {"zip": 900,"street": "Vasilevicha 15"},"hasBonus": false},{"name": "Sigismundus","age": 156,"address": {"zip": 101,"street": "Sigismundusovicha 21"},"hasBonus": false}]';

// console.log(JSON.parse(users));

// var photo = '{ "src": "src", "width": 640, "height": 480 }';
// console.log(JSON.parse(photo));

// var json = '{"event": "conference", "date": "2018-08-11T11:00:00.000Z"}';
// var obj = JSON.parse(json);
// console.log(obj);
// console.log(typeof obj.date);
// console.log(obj.date.getMonth());
// var obj = JSON.parse(json, function (key, value) {
//   if (key === 'date') {
//     return new Date(value);
//   }

//   return value;
// });
// console.log(obj);
// console.log(obj.date);
// console.log(obj.date.getMonth());

// function convertJSON (key, value) {
//   if (key === 'date') {
//     return new Date(value);
//   }

//   return value;
// }
// var obj = JSON.parse(json, convertJSON);
// console.log(obj);
// console.log(obj.date);
// console.log(obj.date.getMonth());

// JSON.stringify(value [, replacer, space])

// var users = [
//   {
//     name: 'Valera',
//     age: 47,
//     address: {
//       zip: 100,
//       street: 'Valerievicha 42'
//     },
//     hasBonus: true
//   },
//   {
//     name: 'Vasilisa',
//     age: 28,
//     address: {
//       zip: 900,
//       street: 'Vasilevicha 15'
//     },
//     hasBonus: false
//   },
//   {
//     name: 'Sigismundus',
//     age: 156,
//     address: {
//       zip: 101,
//       street: 'Sigismundusovicha 21'
//     },
//     hasBonus: false
//   },
// ];
// console.log(JSON.stringify(users));

// console.log(JSON.stringify([1, 8, 4, 2.47]));

// toJSON - if no, all props except for functions
// var car = {
//   model: 'BMW',
//   currentFuel: 7.41,
//   moveOn: function () {
//     this.isMoving = true;
//   },
//   // toJSON: function () {
//   //   return this.model;
//   // },
//   // toJSON: function () {
//   //   return {
//   //     model: this.model,
//   //     currentFuel: this.currentFuel
//   //   };
//   // }
// };
// var person = {
//   name: 'Lyonya',
//   birthday: new Date(1974, 4, 18),
//   car: car
// };
// console.log(JSON.stringify(person));
// Date has toJSON

// Circular dependency
// var cow = {
//   name: 'Milka',
//   milkPerDay: 8,
// };
// var horse = {
//   name: 'Bobik',
//   speed: 70,
//   friend: cow
// };
// cow.friend = horse;

// console.log(JSON.stringify(cow));
// console.log(JSON.stringify(cow, ['name', 'milkPerDay']));
// var result = JSON.stringify(cow, function (key, value) {
//   if (key === 'friend') {
//     return undefined;
//   }

//   return value;
// });
// console.log(result);

// Formatting

// var users = [
//   {
//     name: 'Valera',
//     age: 47,
//     address: {
//       zip: 100,
//       street: 'Valerievicha 42'
//     },
//     hasBonus: true
//   },
//   {
//     name: 'Vasilisa',
//     age: 28,
//     address: {
//       zip: 900,
//       street: 'Vasilevicha 15'
//     },
//     hasBonus: false
//   },
//   {
//     name: 'Sigismundus',
//     age: 156,
//     address: {
//       zip: 101,
//       street: 'Sigismundusovicha 21'
//     },
//     hasBonus: false
//   },
// ];

// var result = JSON.stringify(users, null, 2);
// console.log(result);

// JSON example
// function createList (data) {
//   var ul = document.createElement('ul');
//   var li;
//   var children;

//   for (let key in data) {
//     li = document.createElement('li');

//     if (typeof data[key] === 'object') {
//       children = createList(data[key]);

//       li.appendChild(document.createTextNode(key));
//       li.appendChild(children);
//     } else {
//       li.innerHTML = '<strong>' + key + ': </strong><em>' + data[key] + '</em>';
//     }

//     ul.appendChild(li);
//   }

//   return ul;
// }
// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/search/repositories?q=javascript+topic:react-router-dom');

// xhr.send();

// xhr.onload = function () {
//   var items = JSON.parse(this.responseText).items;

//   items.forEach(function (item) {
//     document.body.appendChild(createList(item));
//   });
// };

// task 1 push if not exist
// var arr = [1, 8, null, 'string', [], function () {}, NaN, Date.now()];

// function inArray (arr, value) {
//   return arr.some(function (item) {
//     if (typeof item === 'number' && isNaN(item) && typeof value === 'number' && isNaN(value)) {
//       return true;
//     }

//     return item === value;
//   });
// }
// function pushIfNotExist (arr, value) {
//   if (!inArray(arr, value)) {
//     arr.push(value);
//   }
// }

// pushIfNotExist(arr, 1);
// pushIfNotExist(arr, 'la la la');
// pushIfNotExist(arr, 'la la la');
// pushIfNotExist(arr, function () {});
// pushIfNotExist(arr, undefined);
// pushIfNotExist(arr, undefined);
// pushIfNotExist(arr, null);
// pushIfNotExist(arr, NaN);

// console.log(arr);


// taks 2 sort by
// function sortByHasPages (arr) {
//   // return arr.sort(function (a, b) {
//   //   return a.has_pages && !b.has_pages ? -1 : !a.has_pages && b.has_pages ? 1 : 0;
//   // });
// }
// function filterByScore (arr, score) {
//   // return arr.filter(function (item) {
//   //   return item.score >= score;
//   // });
// }
// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/search/repositories?q=javascript+topic:react-router-dom');

// xhr.send();

// xhr.onload = function () {
//   var items = JSON.parse(this.responseText).items;

//   // items.forEach(function (item) {
//   //   console.log(item.score);
//   // });
//   items = filterByScore(items, 10);
//   console.log(items);
// };
