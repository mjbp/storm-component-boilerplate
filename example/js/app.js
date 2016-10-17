(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _stormComponentBoilerplate = require('./libs/storm-component-boilerplate');

var _stormComponentBoilerplate2 = _interopRequireDefault(_stormComponentBoilerplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onDOMContentLoadedTasks = [function () {
    _stormComponentBoilerplate2.default.init('.js-boilerplate');
}];

if ('addEventListener' in window) window.addEventListener('DOMContentLoaded', function () {
    onDOMContentLoadedTasks.forEach(function (fn) {
        return fn();
    });
});

/*
var UI = (function(w, d) {
		'use strict';

		var LoadScript = function(src, cb) {
                var t = document.createElement('script'),
                    s = document.getElementsByTagName('script')[0];
                t.async = true;
                t.src = src;
                s.parentNode.insertBefore(t, s);
                t.onload = cb;
            },
            //Boilerplate = require('./libs/storm-component-boilerplate.standalone.js'),
			init = function() {
                LoadScript('./js/storm-component-boilerplate.standalone.js', function(){
                    StormComponentBoilerplate.init('.js-boilerplate');
                });
                //Boilerplate.init('.js-boilerplate');
			};

		return {
			init: init
		};

	})(window, document, undefined);

global.STORM = {
    UI: UI
};

if('addEventListener' in window) window.addEventListener('DOMContentLoaded', STORM.UI.init, false);
*/

},{"./libs/storm-component-boilerplate":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @name storm-component-boilerplate: 
 * @version 0.1.0: Fri, 14 Oct 2016 16:38:40 GMT
 * @author stormid
 * @license MIT
 */
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
exports.default = { init: init };
/*
//
const StormComponentBoilerplate = {init};

export default StormComponentBoilerplate;


*/

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJleGFtcGxlL3NyYy9saWJzL3N0b3JtLWNvbXBvbmVudC1ib2lsZXJwbGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7OztBQUVBLElBQU0sMEJBQTBCLENBQUMsWUFBTTtBQUFFLHdDQUFZLElBQVosQ0FBaUIsaUJBQWpCO0FBQXNDLENBQS9DLENBQWhDOztBQUVBLElBQUcsc0JBQXNCLE1BQXpCLEVBQWlDLE9BQU8sZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFlBQU07QUFBRSw0QkFBd0IsT0FBeEIsQ0FBZ0MsVUFBQyxFQUFEO0FBQUEsZUFBUSxJQUFSO0FBQUEsS0FBaEM7QUFBZ0QsQ0FBcEc7O0FBRWpDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7Ozs7O0FBTUEsSUFBSSxZQUFZLEVBQWhCOztBQUVBLElBQU0sV0FBVztBQUNULFdBQU8sR0FERTtBQUVULGNBQVU7QUFGRCxDQUFqQjs7QUFLQSxJQUFNLDBCQUEwQjtBQUN4QixRQUR3QixrQkFDakI7QUFDSCxhQUFLLFVBQUwsQ0FBZ0IsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDLEtBQUssV0FBTCxDQUFpQixJQUFqQixDQUFzQixJQUF0QixDQUExQyxFQUF1RSxLQUF2RTtBQUNILEtBSHVCO0FBSXhCLGVBSndCLHVCQUlaLENBSlksRUFJVDtBQUNYLGdCQUFRLEdBQVIsQ0FBWSxFQUFFLE1BQWQsRUFBc0Isb0JBQXRCO0FBQ0g7QUFOdUIsQ0FBaEM7O0FBU0EsSUFBTSxPQUFPLFNBQVAsSUFBTyxDQUFDLEdBQUQsRUFBTSxJQUFOLEVBQWU7QUFDeEIsUUFBSSxNQUFNLEdBQUcsS0FBSCxDQUFTLElBQVQsQ0FBYyxTQUFTLGdCQUFULENBQTBCLEdBQTFCLENBQWQsQ0FBVjs7QUFFQSxRQUFHLENBQUMsSUFBSSxNQUFSLEVBQWdCO0FBQ1osY0FBTSxJQUFJLEtBQUosQ0FBVSxrRUFBVixDQUFOO0FBQ0g7O0FBRUQ7QUFDQSxRQUFJLE9BQUosQ0FBWSxVQUFDLEVBQUQsRUFBSyxDQUFMLEVBQVc7QUFDbkIsa0JBQVUsQ0FBVixJQUFlLE9BQU8sTUFBUCxDQUFjLE9BQU8sTUFBUCxDQUFjLHVCQUFkLENBQWQsRUFBc0Q7QUFDakUsd0JBQVksRUFEcUQ7QUFFakUsc0JBQVUsT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixRQUFsQixFQUE0QixJQUE1QjtBQUZ1RCxTQUF0RCxDQUFmO0FBSUE7QUFDQSxrQkFBVSxDQUFWLEVBQWEsSUFBYjtBQUNILEtBUEQ7QUFRQSxXQUFPLFNBQVA7QUFDSCxDQWpCRDs7QUFtQkEsSUFBTSxTQUFTLFNBQVQsTUFBUyxDQUFDLEdBQUQsRUFBTSxJQUFOLEVBQWdCO0FBQzNCO0FBQ0EsU0FBSyxHQUFMLEVBQVUsSUFBVjtBQUNILENBSEQ7O0FBS0EsSUFBTSxVQUFVLFNBQVYsT0FBVSxHQUFNO0FBQ2xCLGdCQUFZLEVBQVo7QUFDSCxDQUZEO2tCQUdlLEVBQUUsVUFBRixFO0FBQ2YiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEJvaWxlcnBsYXRlIGZyb20gJy4vbGlicy9zdG9ybS1jb21wb25lbnQtYm9pbGVycGxhdGUnO1xuXG5jb25zdCBvbkRPTUNvbnRlbnRMb2FkZWRUYXNrcyA9IFsoKSA9PiB7IEJvaWxlcnBsYXRlLmluaXQoJy5qcy1ib2lsZXJwbGF0ZScpOyB9XTtcbiAgICBcbmlmKCdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3cpIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4geyBvbkRPTUNvbnRlbnRMb2FkZWRUYXNrcy5mb3JFYWNoKChmbikgPT4gZm4oKSk7IH0pO1xuXG4vKlxudmFyIFVJID0gKGZ1bmN0aW9uKHcsIGQpIHtcblx0XHQndXNlIHN0cmljdCc7XG5cblx0XHR2YXIgTG9hZFNjcmlwdCA9IGZ1bmN0aW9uKHNyYywgY2IpIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpLFxuICAgICAgICAgICAgICAgICAgICBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICAgICAgICAgICAgICAgIHQuYXN5bmMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHQuc3JjID0gc3JjO1xuICAgICAgICAgICAgICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCwgcyk7XG4gICAgICAgICAgICAgICAgdC5vbmxvYWQgPSBjYjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL0JvaWxlcnBsYXRlID0gcmVxdWlyZSgnLi9saWJzL3N0b3JtLWNvbXBvbmVudC1ib2lsZXJwbGF0ZS5zdGFuZGFsb25lLmpzJyksXG5cdFx0XHRpbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgTG9hZFNjcmlwdCgnLi9qcy9zdG9ybS1jb21wb25lbnQtYm9pbGVycGxhdGUuc3RhbmRhbG9uZS5qcycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIFN0b3JtQ29tcG9uZW50Qm9pbGVycGxhdGUuaW5pdCgnLmpzLWJvaWxlcnBsYXRlJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy9Cb2lsZXJwbGF0ZS5pbml0KCcuanMtYm9pbGVycGxhdGUnKTtcblx0XHRcdH07XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0aW5pdDogaW5pdFxuXHRcdH07XG5cblx0fSkod2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKTtcblxuZ2xvYmFsLlNUT1JNID0ge1xuICAgIFVJOiBVSVxufTtcblxuaWYoJ2FkZEV2ZW50TGlzdGVuZXInIGluIHdpbmRvdykgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBTVE9STS5VSS5pbml0LCBmYWxzZSk7XG4qLyIsIi8qKlxuICogQG5hbWUgc3Rvcm0tY29tcG9uZW50LWJvaWxlcnBsYXRlOiBcbiAqIEB2ZXJzaW9uIDAuMS4wOiBGcmksIDE0IE9jdCAyMDE2IDE2OjM4OjQwIEdNVFxuICogQGF1dGhvciBzdG9ybWlkXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xubGV0IGluc3RhbmNlcyA9IFtdO1xuXG5jb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgZGVsYXk6IDIwMCxcbiAgICAgICAgY2FsbGJhY2s6IG51bGxcbiAgICB9O1xuXG5jb25zdCBTdG9ybUNvbXBvbmVudFByb3RvdHlwZSA9IHtcbiAgICAgICAgaW5pdCgpIHtcbiAgICAgICAgICAgIHRoaXMuRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVDbGljayhlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCwgJ0lcXCd2ZSBiZWVuIGNsaWNrZWQnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbmNvbnN0IGluaXQgPSAoc2VsLCBvcHRzKSA9PiB7XG4gICAgbGV0IGVscyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWwpKTtcbiAgICBcbiAgICBpZighZWxzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JvaWxlcnBsYXRlIGNhbm5vdCBiZSBpbml0aWFsaXNlZCwgbm8gYXVnbWVudGFibGUgZWxlbWVudHMgZm91bmQnKTtcbiAgICB9XG4gICAgXG4gICAgLy9BcnJheS5mcm9tKGFyciwgZm4pP1xuICAgIGVscy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgICAgICBpbnN0YW5jZXNbaV0gPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoU3Rvcm1Db21wb25lbnRQcm90b3R5cGUpLCB7XG4gICAgICAgICAgICBET01FbGVtZW50OiBlbCxcbiAgICAgICAgICAgIHNldHRpbmdzOiBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cywgb3B0cylcbiAgICAgICAgfSk7XG4gICAgICAgIC8vYWRkIGZ1cnRoZXIgb2JqZWN0cyBhcyBhc3NpZ24gYXJndW1lbnRzIGZvciBvYmplY3QgY29tcG9zaXRpb25cbiAgICAgICAgaW5zdGFuY2VzW2ldLmluaXQoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2VzO1xufVxuXG5jb25zdCByZWxvYWQgPSAoZWxzLCBvcHRzKSA9PiAge1xuICAgIGRlc3Ryb3koKTtcbiAgICBpbml0KGVscywgb3B0cyk7XG59XG5cbmNvbnN0IGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgaW5zdGFuY2VzID0gW107ICBcbn1cbmV4cG9ydCBkZWZhdWx0IHsgaW5pdCB9XG4vKlxuLy9cbmNvbnN0IFN0b3JtQ29tcG9uZW50Qm9pbGVycGxhdGUgPSB7aW5pdH07XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JtQ29tcG9uZW50Qm9pbGVycGxhdGU7XG5cblxuKi8iXX0=
