/**
 * @name storm-component-boilerplate: 
 * @version 0.1.0: Fri, 14 Oct 2016 16:44:32 GMT
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
    },
    handleClick: function handleClick(e) {
        console.log(e.target, 'I\'ve been clicked');
    }
};

var init = function init(sel, opts) {
    var els = [].slice.call(document.querySelectorAll(sel));

    if (!els.length) {
        throw new Error('Boilerplate cannot be initialised, no augmentable elements found');
    }

    //Array.from(arr, fn)?
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

var reload = function reload(els, opts) {
    destroy();
    init(els, opts);
};

var destroy = function destroy() {
    instances = [];
};

//export default { init }
var StormComponentBoilerplate = { init: init };

exports.default = StormComponentBoilerplate;;
}));
