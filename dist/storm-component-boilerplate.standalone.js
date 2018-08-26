/**
 * @name storm-component-boilerplate: 
 * @version 1.2.3: Sun, 26 Aug 2018 21:27:24 GMT
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
var defaults = {
	callback: null
};

var factory = function factory() {
	return {
		init: function init() {
			this.node.addEventListener('click', this.handleClick.bind(this), false);

			return this;
		},
		handleClick: function handleClick() {
			this.node.classList.toggle('clicked');
			!!(this.settings.callback && this.settings.callback.constructor && this.settings.callback.call && this.settings.callback.apply) && this.settings.callback.call(this);
		}
	};
};

var init = function init(sel, opts) {
	var els = [].slice.call(document.querySelectorAll(sel));
	//let els = Array.from(document.querySelectorAll(sel));

	if (!els.length) return console.warn('Boilerplate not initialised, no augmentable elements found');

	return els.map(function (el) {
		return Object.assign(Object.create(factory()), {
			node: el,
			settings: Object.assign({}, defaults, opts)
		}).init();
	});
};

var index = { init: init };

exports.default = index;;
}));
