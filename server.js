var User = require('./user');
var db = require('./db');
db.connect();

function run() {
  var vasya = new User('Вася');
  var petya = new User('Петя');

  vasya.hello(petya);
  console.log(db.getPhrase('success'))
}

if(module.parent) {
  exports.run = run;
} else {
  run();
}


