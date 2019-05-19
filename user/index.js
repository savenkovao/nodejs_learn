var db = require('../db');


// User module
function User(name) {
  this.name = name;
}

db.connect();

User.prototype.hello = function (who) {
  console.log(db.getPhrase('hello') + ', ' + who.name);
};

// global.User = User;


// module.exports = exports = this
module.exports = User;
// this.User = User;
// exports.User = User;


// console.log(module)
