/* @flow */
/** @module app */
var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');
var pouchdb = require('pouchdb');
var $ = require('jquery');
var bacon = require('baconjs');
var router = require('./router.js');
var routehandler = require('./routehandler.js');


module.exports = {app:  function(){$(document).ready(function(){
var db = new pouchdb('deprueba');
var requester = bacon.fromPoll('10000', function(){return bacon.fromPromise($.ajax('https://api.educ.ar/0.9/recursos/juegos?key=808509ff7e847aabbb73c4396fbaabe6010cfdd0'));});
//requester.onValue(function(value){value.desc.args[0].then(function(data){return db.bulkDocs(data.result.data).then(function(){console.log(db.allDocs())});});});

// 1: Create a function that declares what the DOM should look like
function render(count)  {
    return h('div', [h('h1', {
    }, [String('mis e-recursos')]),
    h('a', {'href':'ponele'}, 'ponele')]);
}

// 2: Initialise the document
var count = 0;      // We need some app data. Here we just store a count.

var tree = render(count);               // We need an initial tree
var rootNode = createElement(tree);     // Create an initial root DOM node ...
document.body.appendChild(rootNode);    // ... and it should be in the document

// 3: Wire up the update logic
setInterval(function () {
      count + 'blah';
      
      var newTree = render(count);
      var patches = diff(tree, newTree);
      rootNode = patch(rootNode, patches);
      tree = newTree;
}, '1000');
router();
routehandler();
});}}
/** la app en si */
module.exports.app();
