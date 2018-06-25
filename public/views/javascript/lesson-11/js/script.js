'use strict';

// toString and valueOf

// cases
// string convertion
// numeric convertion
// boolean convertion

// boolean convertion
// if ([]) {
//   console.log(true);
// }
// if (function () {}) {
//   console.log(true);
// }

// string convertion (toString), any primitive
// var book = {
//   name: '1984',
//   pages: 347
// };
// console.log(String(book));

// var book = {
//   name: '1984',
//   pages: 347,
//   toString: function () {
//     return this.name;
//   },
//   toString: function () {
//     return 100;
//   }
// };
// console.log(String(book));

// console.log(String([10, 20, 30]));
// console.log(String(new Date()));
// console.log(String(function () {}));

// Numeric convertion (if valueOf else toString)
// var book = {
//   name: '1984',
//   pages: 347
// };
// var book = {
//   name: '1984',
//   pages: 347,
//   valueOf: function () {
//     return this.pages;
//   },
//   toString: function () {
//     return this.name;
//   }
// };

// console.log(+book);
// console.log(String(book));

// Every object has valueOf, but return the object itself, that is why toString used mostly.
// Date exception
// console.log(String(new Date()));
// console.log(+(new Date()));

// var example = {
//   valueOf: function () {
//     return 1;
//   }
// };
// console.log(example == true);

// var example1 = {
//   valueOf: function () {
//     return 5;
//   }
// };
// var example2 = {
//   valueOf: function () {
//     return 40;
//   }
// };
// console.log(example1 + example2);

// Date exception
// console.log(new Date() + '');

// primitives like object
// var bool = new Boolean(false);
// console.log(!!bool);
// console.log(bool);

// if (bool) {
//   console.log(true);
// }
// if (bool.valueOf()) {
//   console.log(true);
// }

// console.log(String([]) == '');
// console.log(Number([]) == 0);
// console.log(Number([0]) == 0);
// console.log(Number([1]) == 1);
// console.log(String([1, 2]) == '1,2');


// constructors, new keyword
// function User (name, age) {
//   // this = {}
//   this.name = name;
//   this.age = age;

//   this.sayHi = function () {
//     console.log('Hi, my name is ' + this.name);
//   }

//   // return this;
//   return this;
// }
// var user = new User('Ilidan', 847);
// // algorith: create a new empty object -> set link of the object to "this" -> execute the function -> return "this";
// console.log(user);

// var user = {
//   name: 'Ilidan',
//   age: 847,
//   sayHi: function () {
//     console.log('Hi, my name is ' + this.name);
//   }
// };

// return another value
// function User (name, age) {
//   this.name = name;
//   this.age = age;

//   this.sayHi = function () {
//     console.log('Hi, my name is ' + this.name);
//   }

//   // return 4;
//   return {key: 'value'};
// }
// console.log(new User());

// call without parentheses
// function Example () {
//   return this;
// }
// new Example;
// new Example();

// function Photograph (width, height) {
//   var name;

//   this._id = Math.random();
//   this.width = width;
//   this.height = height;

//   name = 'Photograph ' + this._id;

//   this.getProportion = function () {
//     return this.width / this.height;
//   };
//   this.getOrientation = function () {
//     return this.width > this.height ? 'landscape' : this.height > this.width ? 'portrait' : 'square';
//   };
//   this.getName = function () {
//     return name;
//   };

//   return this;
// }

// var ph1 = new Photograph(768, 424);
// var ph2 = new Photograph(640, 246);

// console.log(ph1.getProportion());
// console.log(ph2.getOrientation());
// console.log(ph2.getName());


// new function
// var module = new function () {
//   var version = '1.2.6';

//   this.a = 50;
//   this.b = 75;

//   this.getVersion = function () {
//     return version;
//   };
//   this.method1 = function () {
//     return this.a + this.b;
//   };
// };
// console.log(module);
// console.log(module.method1());

// Descriptors, getters, setters

// Object.defineProperty(obj, prop, descriptor)
// obj - an object which takes a property
// prop - property name
// descriptor - an object, which describes the behavior of a property

// descriptor may contain
// value - a value of a property (undefined)
// writable - a property can be changed if true (false)
// configurable - a property can be deleted, and can be edited by another Object.defineProperty
// enumerable - whether a property is visible inside "for in" loop and accessible in Object.keys() (false)
// get - a function which return a property value (undefined)
// set - a function which sets a property value (undefined)

// Cannot use "get/set" with "value" or "writable" at the same time

// var house = {
//   floors: 2
// };
// house.material = 'brick';

// Object.defineProperty(house, 'windows', {
//   value: 13,
//   writable: true,
//   configurable: true,
//   enumerable: true
// });
// console.log(house.floors);
// console.log(house.material);
// console.log(house.windows);

// house.windows = 18;
// console.log(house.windows);
// for (let key in house) {
//   console.log(key);
// }
// delete house.windows;
// console.log('windows' in house);

// Object.defineProperty(house, 'windows', {
//   value: 13,
//   writable: false,
//   configurable: true,
//   enumerable: true
// });

// house.windows = 18;
// console.log(house.windows);

// Object.defineProperty(house, 'windows', {
//   value: 13,
//   writable: false,
//   configurable: false,
//   enumerable: true
// });

// delete house.windows;
// Object.defineProperty(house, 'windows', {
//   value: 10
// });
// console.log('windows' in house);

// Object.defineProperty(house, 'windows', {
//   value: 13,
//   writable: false,
//   configurable: false,
//   enumerable: false
// });

// for (let key in house) {
//   console.log(key);
// }

// var user = {
//   firstName: 'Valera',
//   lastName: 'Krutoy'
// };
// Object.defineProperty(user, 'fullName', {
//   get: function () {
//     return this.firstName + ' ' + this.lastName;
//   },
//   set: function (value) {
//     var values = value.split(' ');

//     this.firstName = values[0];
//     this.lastName = values[1];
//   }
// });
// console.log(user.fullName);
// // delete user.fullName;
// user.fullName = 'Vasya Bistriy';
// console.log(user.fullName);

// get/set in literals
// var user = {
//   firstName: 'Valera',
//   lastName: 'Krutoy',
//   get fullName () {
//     return this.firstName + ' ' + this.lastName;
//   },
//   set fullName (value) {
//     var values = value.split(' ');

//     this.firstName = values[0];
//     this.lastName = values[1];
//   }
// };

// console.log(user.fullName);
// user.fullName = 'Vasya Bistriy2';
// console.log(user.fullName);


// Object.defineProperties(obj, descriptors)
// var dog = {};
// Object.defineProperties(dog, {
//   name: {
//     value: 'Muhtar'
//   },
//   breed: {
//     get: function () {
//       return 'dachshund';
//     }
//   }
// });
// console.log(dog.name);
// console.log(dog.breed);

// Object.keys(obj) - enumerable, Object.getOwnPropertyNames(obj) - all own

// Object.getOwnPropertyDescriptor(obj, prop)
