/**
 * @name storm-component-boilerplate: 
 * @version 1.0.0: Sun, 02 Apr 2017 18:45:51 GMT
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
       root.gulpWrapUmd = mod.exports.default
   }

}(this, function(exports) {
   'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var defaults = {
	callback: null
};

var componentPrototype = {
	init: function init() {
		this.DOMElement.addEventListener('click', this.handleClick.bind(this), false);

		return this;
	},
	anotherOne: function anotherOne() {},
	handleClick: function handleClick() {
		this.DOMElement.classList.toggle('clicked');
		!!(this.settings.callback && this.settings.callback.constructor && this.settings.callback.call && this.settings.callback.apply) && this.settings.callback.call(this);
	}
};

var init = function init(sel, opts) {
	var els = [].slice.call(document.querySelectorAll(sel));
	//let els = Array.from(document.querySelectorAll(sel));

	if (!els.length) throw new Error('Boilerplate cannot be initialised, no augmentable elements found');

	return els.map(function (el) {
		return Object.assign(Object.create(componentPrototype), {
			DOMElement: el,
			settings: Object.assign({}, defaults, opts)
		}).init();
	});
};

var index = { init: init };

exports.default = index;;
}));
