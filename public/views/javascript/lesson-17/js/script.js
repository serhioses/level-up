'use strict';

// F.prototype
// wrong, don't do it!
// var camera = {
//   enabled: false,
//   enable: function () {
//     this.enabled = true;
//   },
//   disable: function () {
//     this.enabled = false;
//   },
//   takePhoto: function () {
//     console.log('A photograph has been taken.');
//   }
// };

// function Nikon (model) {
//   this.model = model;

//   this.__proto__ = camera;

//   return this;
// }

// var nikonD3 = new Nikon('D3');
// console.log(nikonD3);
// console.log('enabled:', nikonD3.enabled);
// console.log(nikonD3.hasOwnProperty('enabled'));
// nikonD3.enable();
// console.log(nikonD3);
// console.log(nikonD3.hasOwnProperty('enabled'));

// better way, but also wrong. Don't do it
// var camera = {
//   enabled: false,
//   enable: function () {
//     this.enabled = true;
//   },
//   disable: function () {
//     this.enabled = false;
//   },
//   takePhoto: function () {
//     console.log('A photograph has been taken.');
//   }
// };

// function Nikon (model) {
//   this.model = model;

//   return this;
// }
// Nikon.prototype = camera;

// var nikonD3 = new Nikon('D3');
// console.log(nikonD3);
// console.log('enabled:', nikonD3.enabled);
// console.log(nikonD3.hasOwnProperty('enabled'));
// nikonD3.enable();
// console.log(nikonD3);
// console.log(nikonD3.hasOwnProperty('enabled'));
// special meaning of prototype property
// only object

// constructor property
// by default
// function Building () {
//   return this;
// }
// Building.prototype = {
//   constructor: Building,
// };
// console.log(Building.prototype);

// function Building () {
//   return this;
// }
// console.log(Building.prototype);
// console.log(Building.prototype.constructor === Building);

// function Building () {
//   return this;
// }
// Building.prototype = {
//   constructor: 1
// };
// console.log(Building.prototype);

// function Camera (model) {
//   this.model = model;

//   return this;
// }
// var canonD3 = new Camera('canonD3');
// console.log(canonD3);
// var nikonD3 = new canonD3.constructor('nikonD3');
// console.log(nikonD3);

// constructor can be lost

// Object.create(proto, descriptors)

// var camera = {
//   enabled: false,
//   enable: function () {
//     this.enabled = true;
//   },
//   disable: function () {
//     this.enabled = false;
//   },
//   takePhoto: function () {
//     console.log('A photograph has been taken.');
//   }
// };

// function Nikon (model) {
//   this.model = model;

//   return this;
// }
// Nikon.prototype = Object.create(camera);
// Nikon.prototype = camera;
// Nikon.prototype = inherit(camera);
// Nikon.prototype.constructor = Nikon;

// var nikonD3 = new Nikon('D3');
// console.log(nikonD3);

// function inherit (proto) {
//   function F () {}
//   F.prototype = proto;

//   return new F();
// }

// complex inherit
// function inherit (proto, descriptors) {
//   function F () {}

//   F.prototype = proto;

//   const obj = new F();
//   F.prototype = null;

//   if (typeof descriptors === 'object') {
//     Object.keys(descriptors).forEach(function (key) {
//       Object.defineProperty(obj, key, descriptors[key]);
//     });
//   }

//   return obj;
// }

// built-in classes in JS
// var obj = {};
// console.log(String(obj));
// console.log(obj.__proto__);
// console.log(obj.__proto__.toString);
// 1. obj = new Object()
// 2. obj.__proto__ = Object.prototype
// 3. toString from Object.prototype
// obj ({}) -> Object.prototype ({toString: function () {}}) -> null
// console.log(obj.toString === Object.prototype.toString);
// console.log(obj.__proto__ === Object.prototype);
// console.log(obj.__proto__.__proto__);
// console.log(Object.prototype.__proto__);

// everything inherits from Object.prototype

// function printArgs () {
//   // [].forEach
//   Array.prototype.forEach.call(arguments, function (arg) {
//     console.log(arg);
//   });
// }
// printArgs(1, 'dfg', null);


// Primitives
// var number = 10;
// console.log(number.toFixed(7));
// // new Number() -> {[[PrimitiveValue]]: 10, __proto__: {toFixed: function () {}}} -> return result, destroy object
// number.value = 40;
// console.log(number.value);

// special types null and undefined


// Change built-in prototypes
// String.prototype.reverse = function () {
//   let result = '';

//   for (let i = this.length - 1; i >= 0; i -= 1) {
//     result += this[i];
//   }

//   return result;
// };
// console.log('reversed string'.reverse());

// Object.prototype.filter = function (func) {
//   const result = {};
//   const self = this;

//   Object.keys(self).forEach(function (key) {
//     if (func(self[key], key)) {
//       result[key] = self[key];
//     }
//   });

//   return result;
// };
// var user = {
//   name: 'Franz',
//   age: 16,
//   height: 183,
// };
// console.log(user.filter(function (value) {
//   return typeof value === 'number';
// }));

// Don't that is above. There are special cases
// Object.create


// Custom classes with prototypes
// Simple class
// function Bird (name) {
//   this.name = name;
//   this.speed = 0;

//   this.fly = function (speed) {
//     this.speed += speed;

//     console.log('The speed of the bird ' + this.name + ' is ' + this.speed);
//   };

//   this.sing = function () {
//     console.log('Ola la la!!!');
//   };

//   return this;
// }
// var coco = new Bird('Coco');
// console.log(coco.speed);
// coco.fly(40);
// coco.sing();
// console.log(coco.speed);


// the prototype way
// function Bird (name) {
//   this.name = name;
//   this.speed = 0;

//   return this;
// }

// Bird.prototype.fly = function (speed) {
//   this.speed += speed;

//   console.log('The speed of the bird ' + this.name + ' is ' + this.speed);
// };

// Bird.prototype.sing = function () {
//   console.log('Ola la la!!!');
// };

// Bird.prototype = {
//   constructor: Bird,
//   fly: function (speed) {
//     this.speed += speed;

//     console.log('The speed of the bird ' + this.name + ' is ' + this.speed);
//   },
//   sing: function () {
//     console.log('Ola la la!!!');
//   }
// };

// var coco = new Bird('Coco');
// console.log(coco.speed);
// coco.fly(40);
// coco.sing();
// console.log(coco.speed);

// advantages/disadvantages compare to functional inheritance
