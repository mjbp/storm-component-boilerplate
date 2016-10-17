/**
 * @name storm-component-boilerplate: 
 * @version 0.1.0: Mon, 17 Oct 2016 22:49:27 GMT
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
var instances = [];

var defaults = {
    delay: 200,
    callback: null
};

var StormComponentPrototype = {
    init: function init() {
        this.DOMElement.addEventListener('click', this.handleClick.bind(this), false);

        return this;
    },
    handleClick: function handleClick() {
        this.DOMElement.classList.toggle('clicked');
    }
};

var init = function init(sel, opts) {
    var els = [].slice.call(document.querySelectorAll(sel));
    //let els = Array.from(document.querySelectorAll(sel));

    if (!els.length) {
        throw new Error('Boilerplate cannot be initialised, no augmentable elements found');
    }

    els.forEach(function (el, i) {
        instances[i] = Object.assign(Object.create(StormComponentPrototype), {
            DOMElement: el,
            settings: Object.assign({}, defaults, opts)
        });
        //add further objects as assign arguments for object composition
        instances[i].init();
    });
    return instances;
};

exports.default = { init: init };;
}));
