"use strict";

// Expression bodies
var odds = evens.map(function (v) {
  return v + 1;
});
var nums = evens.map(function (v, i) {
  return v + i;
});

// Statement bodies
nums.forEach(function (v) {
  if (v % 5 === 0) fives.push(v);
});

// Lexical this
var bob = {
  _name: "Bob",
  _friends: [],
  printFriends: function printFriends() {
    var _this2 = this;
    var _this = "blaat";
    this._friends.forEach(function (f) {
      return console.log(_this2._name + " knows " + f);
    });
  },

  testArgs : a => {
  	var args = arguments;
  	console.log( a );
  }
};