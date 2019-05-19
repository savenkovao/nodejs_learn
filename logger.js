// var log = require('../logger')(module);

module.exports = function (module) {
  return function () {
    var args = [module.fileName].slice.call(arguments);
    console.log(arguments)
    console.log.apply(console, args)
  }
}