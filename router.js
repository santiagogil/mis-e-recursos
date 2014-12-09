/** @module router */
var $ = require('jquery');
var bacon = require('baconjs');
$.prototype.asEventStream = bacon.$.asEventStream;

// Router helpers
/** Filtra devolviendo sólo clicks en links locales y sin teclas modificadoras.
 * @param {object} event - Cada evento devuelto por router.
 * @returns {object} event - Sólo los eventos que cumplen con la condición.
 * @example
 * // blahblah
 * function Router(){return $('a').asEventStream('click').filter(filterClicks)
 */
var filterClicks = function(event){
  if(event.target.host == window.location.host && !event.ctrlKey && !event.shiftKey && !event.altKey && !event.metaKey){
  return event;
  }
};

var preventDefault = function(event){
  event.preventDefault();
  return event;
};

// pushState es un colateral
var updateUrl = function(event){
  window.history.pushState(null, event.target.pathname.slice(1), event.target.pathname);
  return event.target.pathname;
};

// El Router
function Router(){return $('a').asEventStream('click').filter(filterClicks).map(preventDefault).map(updateUrl).log();}

module.exports = Router;
