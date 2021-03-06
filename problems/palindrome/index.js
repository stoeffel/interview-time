var cwd = require('process').cwd(),
readFile = require('fs').readFileSync,
isFunction = require('util').isFunction,
assert = require('assert');

var arrEql = function(a1,a2){
  (a1.length == a2.length) && a1.every(function(element, index) {
      return element === a2[index];
  });
};
// Will use ES6 teamplate strings later on.
exports.problem = 'Check if a give string is a plaindrome.\n\n' +

'* Create a file `plaindrome.js`\n\n' +

'* Which takes a string as a command line argument.\n\n' +

'* Don\'t forget to export you function. module.exports = function() {}`);\n\n'+

'Finally to verify do a `interview-time verify plaindrome.js "mam"`\n\n' +

'P.S: process.argv[4] would be "mam" in this case.';

exports.verify = function (args, cb) {
    var proposed = require(cwd+'/'+args[0]);

    if(!isFunction(proposed)) {
      console.log("Please make sure you have exported the function as suggested.");
    }
    if (proposed(argv[4])) {
        console.log('Good you have solved it!\n');
        cb(true);
    }
    else {
        console.log("Sorry your code does not work :(");
        cb(false);
    }
};
