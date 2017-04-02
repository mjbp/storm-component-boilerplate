/**
 * @name storm-component-boilerplate: 
 * @version 1.0.0: Sun, 02 Apr 2017 17:57:54 GMT
 * @author stormid
 * @license MIT
 */
(function(root, factory) {
   var mod = {
       exports: {}
   };
   if (typeof exports !== 'undefined'){
       mod.exports = exports
       factory(mod.exports)
       module.exports = mod.exports.default
   } else {
       factory(mod.exports);
       root.StormComponentBoilerplate = mod.exports.default
   }

}(this, function(exports) {
   'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defaults = require('./libs/defaults');

var _defaults2 = _interopRequireDefault(_defaults);

var _component = require('./libs/component');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var init = function init(sel, opts) {
	var els = [].slice.call(document.querySelectorAll(sel));
	//let els = Array.from(document.querySelectorAll(sel));

	if (!els.length) throw new Error('Boilerplate cannot be initialised, no augmentable elements found');

	return els.map(function (el) {
		return Object.assign(Object.create(_component2.default), {
			DOMElement: el,
			settings: Object.assign({}, _defaults2.default, opts)
		}).init();
	});
};

exports.default = { init: init };;
}));
