// https://learn.javascript.ru/screencast/nodejs#nodejs-npm-intro

var User = require('./user');
var db = require('./db');
db.connect();
var fs = require("fs");

function run() {
  var vasya = new User('Вася');
  var petya = new User('Петя');

  vasya.hello(petya);
  console.log(db.getPhrase('success'));

  /* fs */
let file = 'try/fs_try.txt';

  let fileContent = fs.readFileSync(file, "utf8");
  console.log(fileContent);


  fs.writeFileSync(file, "trololo");
  fs.appendFileSync(file, " 777");


  fileContent = fs.readFileSync(file, "utf8");
  console.log(fileContent);
  // fs.readFile(file, "utf8", function(error,data){
  //   console.log(data);
  // });
  //
  // fs.writeFile(file, "ololol 888", function(error){
  //   if(error) throw error; // если возникла ошибка
  //   let data = fs.readFileSync(file, "utf8");
  //   console.log(data);  // выводим считанные данные
  // });

  /* fs */
}

if(module.parent) {
  exports.run = run;
} else {
  run();
}


// var db = require('db');
// NODE_PATH=. node server.js


