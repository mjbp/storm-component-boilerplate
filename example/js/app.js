(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _stormComponentBoilerplate = require('./libs/storm-component-boilerplate');

var _stormComponentBoilerplate2 = _interopRequireDefault(_stormComponentBoilerplate);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var onDOMContentLoadedTasks = [function () {
    _stormComponentBoilerplate2.default.init('.js-boilerplate');
}];

if ('addEventListener' in window) window.addEventListener('DOMContentLoaded', function () {
    onDOMContentLoadedTasks.forEach(function (fn) {
        return fn();
    });
});

/*
es5 version
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
            //async version
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
 * @version 0.2.7: Thu, 15 Dec 2016 17:43:09 GMT
 * @author stormid
 * @license MIT
 */
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
		!!(this.settings.callback && this.settings.callback.constructor && this.settings.callback.call && this.settings.callback.apply) && this.settings.callback.call(this);
	}
};

var init = function init(sel, opts) {
	var els = [].slice.call(document.querySelectorAll(sel));
	//let els = Array.from(document.querySelectorAll(sel));

	if (!els.length) throw new Error('Boilerplate cannot be initialised, no augmentable elements found');

	return els.map(function (el) {
		return Object.assign(Object.create(StormComponentPrototype), {
			DOMElement: el,
			settings: Object.assign({}, defaults, opts)
		}).init();
	});
};

exports.default = { init: init };

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJleGFtcGxlL3NyYy9saWJzL3N0b3JtLWNvbXBvbmVudC1ib2lsZXJwbGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7Ozs7O0FBRUEsSUFBTSwyQkFBMkIsWUFBTSxBQUNuQzt3Q0FBQSxBQUFZLEtBQVosQUFBaUIsQUFDcEI7QUFGRCxBQUFnQyxDQUFBOztBQUloQyxJQUFHLHNCQUFILEFBQXlCLGVBQVEsQUFBTyxpQkFBUCxBQUF3QixvQkFBb0IsWUFBTSxBQUFFOzRCQUFBLEFBQXdCLFFBQVEsVUFBQSxBQUFDLElBQUQ7ZUFBQSxBQUFRO0FBQXhDLEFBQWdEO0FBQXBHLENBQUE7O0FBRWpDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBOzs7Ozs7QUFNQSxJQUFNO1FBQVcsQUFDVCxBQUNQO1dBRkQsQUFBaUIsQUFFTjtBQUZNLEFBQ2hCOztBQUlELElBQU07QUFBMEIsdUJBQ3hCLEFBQ047T0FBQSxBQUFLLFdBQUwsQUFBZ0IsaUJBQWhCLEFBQWlDLFNBQVMsS0FBQSxBQUFLLFlBQUwsQUFBaUIsS0FBM0QsQUFBMEMsQUFBc0IsT0FBaEUsQUFBdUUsQUFDdkU7U0FBQSxBQUFPLEFBQ1A7QUFKOEIsQUFLL0I7QUFMK0IscUNBS2pCLEFBQ2I7T0FBQSxBQUFLLFdBQUwsQUFBZ0IsVUFBaEIsQUFBMEIsT0FBMUIsQUFBaUMsQUFDakM7R0FBQyxFQUFFLEtBQUEsQUFBSyxTQUFMLEFBQWMsWUFBWSxLQUFBLEFBQUssU0FBTCxBQUFjLFNBQXhDLEFBQWlELGVBQWUsS0FBQSxBQUFLLFNBQUwsQUFBYyxTQUE5RSxBQUF1RixRQUFRLEtBQUEsQUFBSyxTQUFMLEFBQWMsU0FBaEgsQUFBQyxBQUF3SCxVQUFVLEtBQUEsQUFBSyxTQUFMLEFBQWMsU0FBZCxBQUF1QixLQUExSixBQUFtSSxBQUE0QixBQUMvSjtBQVJGLEFBQWdDO0FBQUEsQUFDL0I7O0FBVUQsSUFBTSxPQUFPLFNBQVAsQUFBTyxLQUFBLEFBQUMsS0FBRCxBQUFNLE1BQVMsQUFDM0I7S0FBSSxNQUFNLEdBQUEsQUFBRyxNQUFILEFBQVMsS0FBSyxTQUFBLEFBQVMsaUJBQWpDLEFBQVUsQUFBYyxBQUEwQixBQUMvQztBQUVIOztLQUFHLENBQUMsSUFBSixBQUFRLFFBQVEsTUFBTSxJQUFBLEFBQUksTUFBVixBQUFNLEFBQVUsQUFFaEM7O1lBQU8sQUFBSSxJQUFJLFVBQUEsQUFBQyxJQUFPLEFBQ3RCO2dCQUFPLEFBQU8sT0FBTyxPQUFBLEFBQU8sT0FBckIsQUFBYyxBQUFjO2VBQTBCLEFBQ2hELEFBQ1o7YUFBVSxPQUFBLEFBQU8sT0FBUCxBQUFjLElBQWQsQUFBa0IsVUFGdEIsQUFBc0QsQUFFbEQsQUFBNEI7QUFGc0IsQUFDNUQsR0FETSxFQUFQLEFBQU8sQUFHSixBQUNIO0FBTEQsQUFBTyxBQU1QLEVBTk87QUFOUjs7a0JBY2UsRUFBRSxNLEFBQUYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEJvaWxlcnBsYXRlIGZyb20gJy4vbGlicy9zdG9ybS1jb21wb25lbnQtYm9pbGVycGxhdGUnO1xuXG5jb25zdCBvbkRPTUNvbnRlbnRMb2FkZWRUYXNrcyA9IFsoKSA9PiB7XG4gICAgQm9pbGVycGxhdGUuaW5pdCgnLmpzLWJvaWxlcnBsYXRlJyk7XG59XTtcbiAgICBcbmlmKCdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3cpIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4geyBvbkRPTUNvbnRlbnRMb2FkZWRUYXNrcy5mb3JFYWNoKChmbikgPT4gZm4oKSk7IH0pO1xuXG4vKlxuZXM1IHZlcnNpb25cbnZhciBVSSA9IChmdW5jdGlvbih3LCBkKSB7XG5cdFx0J3VzZSBzdHJpY3QnO1xuXG5cdFx0dmFyIExvYWRTY3JpcHQgPSBmdW5jdGlvbihzcmMsIGNiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKSxcbiAgICAgICAgICAgICAgICAgICAgcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgICAgICAgICAgICAgICB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0LnNyYyA9IHNyYztcbiAgICAgICAgICAgICAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsIHMpO1xuICAgICAgICAgICAgICAgIHQub25sb2FkID0gY2I7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy9hc3luYyB2ZXJzaW9uXG4gICAgICAgICAgICAvL0JvaWxlcnBsYXRlID0gcmVxdWlyZSgnLi9saWJzL3N0b3JtLWNvbXBvbmVudC1ib2lsZXJwbGF0ZS5zdGFuZGFsb25lLmpzJyksXG5cdFx0XHRpbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgTG9hZFNjcmlwdCgnLi9qcy9zdG9ybS1jb21wb25lbnQtYm9pbGVycGxhdGUuc3RhbmRhbG9uZS5qcycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIFN0b3JtQ29tcG9uZW50Qm9pbGVycGxhdGUuaW5pdCgnLmpzLWJvaWxlcnBsYXRlJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy9Cb2lsZXJwbGF0ZS5pbml0KCcuanMtYm9pbGVycGxhdGUnKTtcblx0XHRcdH07XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0aW5pdDogaW5pdFxuXHRcdH07XG5cblx0fSkod2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKTtcblxuZ2xvYmFsLlNUT1JNID0ge1xuICAgIFVJOiBVSVxufTtcblxuaWYoJ2FkZEV2ZW50TGlzdGVuZXInIGluIHdpbmRvdykgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBTVE9STS5VSS5pbml0LCBmYWxzZSk7XG4qL1xuIiwiLyoqXG4gKiBAbmFtZSBzdG9ybS1jb21wb25lbnQtYm9pbGVycGxhdGU6IFxuICogQHZlcnNpb24gMC4yLjc6IFRodSwgMTUgRGVjIDIwMTYgMTc6NDM6MDkgR01UXG4gKiBAYXV0aG9yIHN0b3JtaWRcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5jb25zdCBkZWZhdWx0cyA9IHtcblx0ZGVsYXk6IDIwMCxcblx0Y2FsbGJhY2s6IG51bGxcbn07XG5cbmNvbnN0IFN0b3JtQ29tcG9uZW50UHJvdG90eXBlID0ge1xuXHRpbml0KCkge1xuXHRcdHRoaXMuRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSwgZmFsc2UpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRoYW5kbGVDbGljaygpIHtcblx0XHR0aGlzLkRPTUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY2xpY2tlZCcpO1xuXHRcdCEhKHRoaXMuc2V0dGluZ3MuY2FsbGJhY2sgJiYgdGhpcy5zZXR0aW5ncy5jYWxsYmFjay5jb25zdHJ1Y3RvciAmJiB0aGlzLnNldHRpbmdzLmNhbGxiYWNrLmNhbGwgJiYgdGhpcy5zZXR0aW5ncy5jYWxsYmFjay5hcHBseSkgJiYgdGhpcy5zZXR0aW5ncy5jYWxsYmFjay5jYWxsKHRoaXMpO1xuXHR9XG59O1xuXG5jb25zdCBpbml0ID0gKHNlbCwgb3B0cykgPT4ge1xuXHRsZXQgZWxzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbCkpO1xuICAgIC8vbGV0IGVscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWwpKTtcblxuXHRpZighZWxzLmxlbmd0aCkgdGhyb3cgbmV3IEVycm9yKCdCb2lsZXJwbGF0ZSBjYW5ub3QgYmUgaW5pdGlhbGlzZWQsIG5vIGF1Z21lbnRhYmxlIGVsZW1lbnRzIGZvdW5kJyk7XG4gICAgXG5cdHJldHVybiBlbHMubWFwKChlbCkgPT4ge1xuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoU3Rvcm1Db21wb25lbnRQcm90b3R5cGUpLCB7XG5cdFx0XHRET01FbGVtZW50OiBlbCxcblx0XHRcdHNldHRpbmdzOiBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cywgb3B0cylcblx0XHR9KS5pbml0KCk7XG5cdH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgeyBpbml0IH07Il19
