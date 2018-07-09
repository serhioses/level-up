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
