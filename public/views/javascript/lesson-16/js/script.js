'use strict';

// Getter and setter

// problem
// function Book (name, totalPages) {
//   this.name = name;
//   this.totalPages = totalPages;

//   this.currentPage = 1;

//   return this;
// }

// var animalFarm = new Book('Animal farm', 184);

// this.currentPage = -5;
// this.currentPage = 0;
// this.currentPage = 200;

// setter and getter
// function Book (name, totalPages) {
//   var currentPage = 1;

//   this.name = name;
//   this.totalPages = totalPages;

//   this.setCurrentPage = function (pageNum) {
//     if (typeof pageNum !== 'number' || isNaN(pageNum)) {
//       console.log('pageNum mst be a number');

//       return;
//     }
//     if (pageNum <= 0) {
//       console.log('Ooops! pageNum cannot be ' + pageNum);

//       return;
//     }
//     if (pageNum > this.totalPages) {
//       console.log('Just stop it, please! totalPages cannot be more than ' + this.totalPages + '. ' + pageNum + ' received.');

//       return;
//     }

//     currentPage = pageNum;
//   };

//   this.getCurrentPage = function () {
//     return currentPage;
//   };

//   return this;
// }

// var animalFarm = new Book('Animal farm', 184);

// animalFarm.setCurrentPage(0);
// animalFarm.setCurrentPage(-2);
// animalFarm.setCurrentPage(185);
// animalFarm.setCurrentPage(57);
// console.log(animalFarm.getCurrentPage());

// function Book (name, totalPages) {
//   var currentPage = 1;

//   this.name = name;
//   this.totalPages = totalPages;

//   this.manageCurrentPage = function (pageNum) {
//     if (!arguments.length) {
//       return currentPage;
//     }

//     if (typeof pageNum !== 'number' || isNaN(pageNum)) {
//       console.log('pageNum mst be a number');

//       return;
//     }
//     if (pageNum <= 0) {
//       console.log('Ooops! pageNum cannot be ' + pageNum);

//       return;
//     }
//     if (pageNum > this.totalPages) {
//       console.log('Just stop it, please! totalPages cannot be more than ' + this.totalPages + '. ' + pageNum + ' received.');

//       return;
//     }

//     currentPage = pageNum;
//   };

//   return this;
// }

// var animalFarm = new Book('Animal farm', 184);

// animalFarm.manageCurrentPage(0);
// animalFarm.manageCurrentPage(-2);
// animalFarm.manageCurrentPage(187);
// animalFarm.manageCurrentPage(15);
// console.log(animalFarm.manageCurrentPage());


// Functional inheritance
// What is inheritance
// function Building () {
//   var isBuilt = false;

//   this.build = function () {
//     isBuilt = true;
//   };
//   this.destroy = function () {
//     isBuilt = false;
//   };

//   return this;
// }

// function Stable () {
//   Building.call(this);

//   var places = 0;

//   this.setPlacesNumber = function (num) {
//     places = num;
//   };

//   return this;
// }

// var stable = new Stable();
// stable.build();
// stable.setPlacesNumber(12);
// stable.destroy();

// console.log(stable);


// privacy problem
// function Building (data) {
//   var isBuilt = false;

//   this.floors = data.floors;
//   this.material = data.material;

//   this.build = function () {
//     isBuilt = true;
//   };
//   this.destroy = function () {
//     isBuilt = false;
//   };

//   return this;
// }

// function Stable (data) {
//   var places;

//   Building.call(this, data);

//   places = 0;

//   this.setPlacesNumber = function (num) {
//     places = num;
//   };

//   // console.log(isBuilt);

//   return this;
// }

// var stable = new Stable({
//   floors: 0,
//   material: 'wood',
// });
// console.log(stable);


// protected properties and methods
// function Building (data) {
//   this._isBuilt = false;

//   this.floors = data.floors;
//   this.material = data.material;

//   this.build = function () {
//     this._isBuilt = true;
//   };
//   this.destroy = function () {
//     this._isBuilt = false;
//   };

//   return this;
// }

// function Stable (data) {
//   var places;

//   Building.apply(this, arguments);

//   places = 0;

//   this.setPlacesNumber = function (num) {
//     places = num;
//   };

//   console.log(this._isBuilt);

//   return this;
// }

// var stable = new Stable({
//   floors: 0,
//   material: 'wood',
//   windows: 6,
// });
// stable.build();
// console.log(stable._isBuilt);
// console.log(stable);
// build after 1s

// methods overriding
// function Building (data) {
//   this._isBuilt = false;

//   this.floors = data.floors;
//   this.material = data.material;

//   this.build = function () {
//     this._isBuilt = true;
//   };
//   this.destroy = function () {
//     this._isBuilt = false;
//   };

//   return this;
// }

// function School (data) {
//   var type;
//   var parentBuild;
//   var balloonsFlown = false;

//   Building.apply(this, arguments);

//   type = data.type;

//   parentBuild = this.build;
//   this.build = function () {
//     parentBuild.call(this);
//     console.log('The school is successfully built.');

//     return this;
//   };

//   this.flyBalloons = function () {
//     balloonsFlown = true;

//     console.log('Happy studyind losers...');
//   };

//   return this;
// }

// var elementarySchool = new School({
//   floors: 4,
//   material: 'bread',
//   type: 'elementary',
// });
// console.log(elementarySchool);
// elementarySchool.build().flyBalloons();


// prototypal OOP
// __proto__ (non standart property in the past)

// var drink = {
//   volume: 2,
// };
// var cola = {
//   bubbles: true,
//   __proto__: drink,
// };

// cola.__proto__ = drink;
// console.log(cola.volume);
// console.log(drink.volume);
// console.log(drink.bubbles);

// cola.volume = 3;
// console.log(cola.volume);
// console.log(drink.volume);


// hasOwnProperty anf for in loop
// var building = {
//   material: 'bricks',
// };
// var house = {
//   rooms: 6,
//   __proto__: building,
// };
// for (let key in house) {
//   console.log(house[key]);
// }
// console.log(building.hasOwnProperty('rooms'));
// console.log(house.hasOwnProperty('rooms'));

// console.log(building.hasOwnProperty('material'));
// console.log(house.hasOwnProperty('material'));

// difference between hasOwnProperty an in operator
// console.log(house.hasOwnProperty('material'));
// console.log('material' in house);

// iterate only own props
// for (let key in house) {
//   if (!house.hasOwnProperty(key)) {
//     continue;
//   }

//   console.log(key, house[key]);
// }
// for (let key in house) {
//   if (house.hasOwnProperty(key)) {
//     console.log(key, house[key]);
//   }
// }

// Object.keys(house).forEach(function (key) {
//   console.log(key, house[key]);
// });


// Object.create(null)
// var obj = {};
// var obj = Object.create(null);
// console.log(obj);
// console.log(obj.toString);
// console.log(obj.valueOf);

// Object.getPrototypeOf(obj)
// Object.setPrototypeOf(obj, proto);
// var arr = [];
// console.log(Object.getPrototypeOf(arr));
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(arr)));

// var drink = {
//   volume: 2,
// };
// var cola = {
//   bubbles: true,
// };
// Object.setPrototypeOf(cola, drink);
// console.log(Object.getPrototypeOf(cola));
// console.log(cola.volume);

// Summary
// inheritance with __proro__
// set proto
// read and write difference, delete
// only one prototype

// function Buffer (initialValue) {
//   var value = initialValue || Buffer.DEFAULT_VALUE;

//   this.add = function (val) {
//     value += val;

//     return this;
//   };
//   this.get = function () {
//     return value;
//   };
//   this.set = function (val) {
//     value = val;

//     return this;
//   };
//   this.reset = function () {
//     value = initialValue || Buffer.DEFAULT_VALUE;

//     return this;
//   };

//   return this;
// }
// Buffer.DEFAULT_VALUE = '';

// function isInt (arg) {
//   return !isNaN(parseInt(arg, 10));
// }

// function isIP (str) {
//   if (typeof str !== 'string') {
//     return false;
//   }
//   if (str.length !== str.trim().length) {
//     return false;
//   }

//   if (str.length < 7 || str.length > 15) {
//     return false;
//   }

//   let buffer = new Buffer();
//   let counter = 0;

//   for (let i = 0; i < str.length; i += 1) {
//     const symbol = str[i];

//     if (symbol !== '.' && !isInt(symbol)) {
//       return false;
//     }

//     if (i === str.length - 1) {
//       if (symbol === '.') {
//         return false;
//       }

//       buffer.add(symbol);

//       if (buffer.get() && buffer.get().length < 4) {
//         counter += 1;
//       }
//     } else {
//       if (symbol === '.') {
//         if (buffer.get() && buffer.get().length < 4) {
//           counter += 1;

//           buffer.reset();
//         }
//       } else {
//         buffer.add(symbol);
//       }
//     }
//   }

//   return counter === 4;
// }
// console.log(isIP('sdfsdf'));
// console.log(isIP('454454'));
// console.log(isIP(null));
// console.log(isIP('45.45.47.'));
// console.log(isIP('45.45.47. 2'));
// console.log(isIP('45.4547. 2'));
// console.log(isIP('00000000'));
// console.log(isIP('00000000'));
// console.log(isIP('11.8.v.841'));
// console.log(isIP('11.858.841'));
// console.log(isIP('11.85.8.8(1'));
// console.log(isIP('12.12.14.8.'));
// console.log(isIP('.254.255.0'));
// console.log(isIP('1.1.1.1a'));
// console.log(isIP('1'));
// console.log(isIP('1.23.256.255.'));
// console.log(isIP('1.23.256..'));
// console.log(isIP('0..1.0'));
// console.log(isIP('1.1.1.1.1'));
// console.log(isIP('a0.1.1.1'));
// console.log(isIP('129380129831213981.255.255.255'));
// console.log(isIP('129380129831213981.255.255.255'));
// console.log(isIP('255.255.255.255abcdekjhf'));
// console.log(isIP('7283728'));
// console.log('---------------------------------');
// console.log(isIP('45.45.47.2'));
// console.log(isIP('00.4.0.0'));
// console.log(isIP('1.1.1.1'));
// console.log(isIP('10.10.10.10'));
// console.log(isIP('108.108.108.108'));
// console.log(isIP('11.8.47.841'));
// console.log(isIP('912.14.0.2'));
// console.log(isIP('0.254.255.0'));
// console.log(isIP('1.256.1.1'));
// console.log(isIP('0.1.1.256'));
