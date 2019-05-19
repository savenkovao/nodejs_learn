var db = require('../db');
var log = require('../logger')(module); //модуль фабрика


// User module
function User(name) {
  this.name = name;
}

db.connect();

User.prototype.hello = function (who) {
  log(db.getPhrase('hello') + ', ' + who.name);
};

// global.User = User;


// module.exports = exports = this
module.exports = User;
// this.User = User;
// exports.User = User;


// console.log(module)
