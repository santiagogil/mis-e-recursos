var bacon = require('baconjs');
var router = require('./router.js');

function Handler(){router.onValue(function(value){ console.log(value); });};

module.exports = Handler;
