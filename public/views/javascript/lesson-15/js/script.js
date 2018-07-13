'use strict';

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


// setTimeout
// var timerId = setTimeout(func, delay [, arg1, arg2...])
// function sayHi () {
//   console.log('Hi!!!');
// }
// setTimeout(sayHi, 1000);
// function sum (a, b) {
//   console.log(a + b);
// }
// // setTimeout(sum, 1500, 5, 7);
// setTimeout(function () {
//   sum(5, 7);
// }, 1500);

// clearTimeout(timerId)
// var timerId = setTimeout(function () {
//   console.log('This will never logged');
// }, 2000);
// clearTimeout(timerId);


// setInterval
// var timerId = setInterval(func / code, delay[, arg1, arg2...])
// clearInterval(timerId)

// var timerId = setInterval(function () {
//   console.log('Again an again');
// }, 500);

// setTimeout(function () {
//   clearInterval(timerId);
// }, 6000);

// recursive timeout
// var counter = 0;
// var timerId = setTimeout(function tick () {
//   counter += 1;

//   console.log(counter);

//   timerId = setTimeout(tick, 1000);
// }, 1000);
// setTimeout(function () {
//   clearTimeout(timerId);
// }, 5000);


// super hard task
// transform to object and group by same date, month and year "year-month-date"
// const getData = (initialId = 0) => {
//   const result = [];

//   for (let i = initialId, j = 1; i < initialId + 20; i += 1, j += 1) {
//     const id = i;
//     const amount = Math.abs(j * 3 * 1.5);

//     const rate = Math.random();

//     const d = Math.floor(12 + Math.random() * (14 + 1 - 12));
//     const m = Math.floor(4 + Math.random() * (5 + 1 - 4));
//     const y = 2018;

//     const time = new Date(y, m, d).getTime();

//     result.push({
//       id,
//       amount,
//       rate,
//       time,
//     });
//   }

//   return result;
// };
// function funcName (arg1, arg2) {
  
// }

// var resultExample = {
//   '2018-4-14': [
//     {
//       id: 0,
//       amount: 4,
//       rate: 2,
//       time: 1526245200000
//     },
//     {
//       id: 1,
//       amount: 8,
//       rate: 6,
//       time: 1526245200000
//     }
//   ],
//   '2018-6-12': [
//     {
//       id: 3,
//       amount: 5,
//       rate: 1,
//       time: 1531342800000
//     }
//   ],
//   '2018-7-13': [
//     {
//       id: 4,
//       amount: 11,
//       rate: 9,
//       time: 1534107600000
//     },
//     {
//       id: 5,
//       amount: 6,
//       rate: 7,
//       time: 1534107600000
//     }
//   ]
// };


// OOP - functional style
// Interfaces (private and public)
// function Photograph (src) {
//   this.name = 'Photograph ' + Math.random();

//   return this;
// }
// var landscape = new Photograph('https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&h=350');

// public and privat methods
// function Photograph (src) {
//   var image = new Image();

//   this.name = 'Photograph ' + Math.random();

//   function onImageLoad () {
//     console.log('loaded');
//   };

//   this.init = function () {
//     image.onload = onImageLoad;

//     image.src = src;
//   };

//   return this;
// }
// var landscape = new Photograph('https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&h=350');
// landscape.init();

// constants
// function Photograph (src) {
//   var image = new Image();
//   var thumb;

//   this.name = 'Photograph ' + Math.random();

//   function onImageLoad () {
//     console.log('loaded');

//     document.body.appendChild(image);
//   };

//   function getProportion () {
//     return image.naturalWidth / image.naturalHeight;
//   }

//   this.init = function () {
//     image.onload = onImageLoad;

//     image.src = src;
//   };

//   this.createThumb = function (width) {
//     width = width || Photograph.DEFAULT_THUMB_WIDTH;

//     return width / getProportion();
//   };

//   return this;
// }
// Photograph.DEFAULT_THUMB_WIDTH = 640;

// var landscape = new Photograph('https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&h=350');
// landscape.init();


// real example
// function Photograph (src) {
//   var image = new Image();
//   var thumb;

//   this.name = 'Photograph ' + Math.random();

//   function onImageLoad () {
//     console.log('loaded');

//     document.body.appendChild(image);
//   };

//   function getProportion () {
//     return image.naturalWidth / image.naturalHeight;
//   }

//   this.init = function () {
//     image.onload = onImageLoad;

//     image.src = src;
//   };

//   this.createThumb = function (width) {
//     var canvas = document.createElement('canvas');
//     var ctx = canvas.getContext('2d');

//     width = width || Photograph.DEFAULT_THUMB_WIDTH;
//     height = width / getProportion();

//     canvas.width = width;
//     canvas.height = height;

//     ctx.drawImage(image, 0, 0, width, height);

//     thumb = new Image();

//     thumb.onload = function () {
//       document.body.appendChild(thumb);
//     };

//     thumb.src = canvas.toDataURL('image/jpeg');
//   };

//   return this;
// }
// Photograph.DEFAULT_THUMB_WIDTH = 640;

// var landscape = new Photograph('https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&h=350');
// landscape.init();
// setTimeout(function () {
//   landscape.createThumb();
// }, 1000);
