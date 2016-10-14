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

//export default { init }
var StormComponentBoilerplate = { init: init };

exports.default = StormComponentBoilerplate;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJleGFtcGxlL3NyYy9saWJzL3N0b3JtLWNvbXBvbmVudC1ib2lsZXJwbGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7OztBQUVBLElBQU0sMEJBQTBCLENBQUMsWUFBTTtBQUFFLHdDQUFZLElBQVosQ0FBaUIsaUJBQWpCO0FBQXNDLENBQS9DLENBQWhDOztBQUVBLElBQUcsc0JBQXNCLE1BQXpCLEVBQWlDLE9BQU8sZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFlBQU07QUFBRSw0QkFBd0IsT0FBeEIsQ0FBZ0MsVUFBQyxFQUFEO0FBQUEsZUFBUSxJQUFSO0FBQUEsS0FBaEM7QUFBZ0QsQ0FBcEc7O0FBRWpDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7Ozs7O0FBTUEsSUFBSSxZQUFZLEVBQWhCOztBQUVBLElBQU0sV0FBVztBQUNULFdBQU8sR0FERTtBQUVULGNBQVU7QUFGRCxDQUFqQjs7QUFLQSxJQUFNLDBCQUEwQjtBQUN4QixRQUR3QixrQkFDakI7QUFDSCxhQUFLLFVBQUwsQ0FBZ0IsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDLEtBQUssV0FBTCxDQUFpQixJQUFqQixDQUFzQixJQUF0QixDQUExQyxFQUF1RSxLQUF2RTtBQUNILEtBSHVCO0FBSXhCLGVBSndCLHVCQUlaLENBSlksRUFJVDtBQUNYLGdCQUFRLEdBQVIsQ0FBWSxFQUFFLE1BQWQsRUFBc0Isb0JBQXRCO0FBQ0g7QUFOdUIsQ0FBaEM7O0FBU0EsSUFBTSxPQUFPLFNBQVAsSUFBTyxDQUFDLEdBQUQsRUFBTSxJQUFOLEVBQWU7QUFDeEIsUUFBSSxNQUFNLEdBQUcsS0FBSCxDQUFTLElBQVQsQ0FBYyxTQUFTLGdCQUFULENBQTBCLEdBQTFCLENBQWQsQ0FBVjs7QUFFQSxRQUFHLENBQUMsSUFBSSxNQUFSLEVBQWdCO0FBQ1osY0FBTSxJQUFJLEtBQUosQ0FBVSxrRUFBVixDQUFOO0FBQ0g7O0FBRUQ7QUFDQSxRQUFJLE9BQUosQ0FBWSxVQUFDLEVBQUQsRUFBSyxDQUFMLEVBQVc7QUFDbkIsa0JBQVUsQ0FBVixJQUFlLE9BQU8sTUFBUCxDQUFjLE9BQU8sTUFBUCxDQUFjLHVCQUFkLENBQWQsRUFBc0Q7QUFDakUsd0JBQVksRUFEcUQ7QUFFakUsc0JBQVUsT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixRQUFsQixFQUE0QixJQUE1QjtBQUZ1RCxTQUF0RCxDQUFmO0FBSUE7QUFDQSxrQkFBVSxDQUFWLEVBQWEsSUFBYjtBQUNILEtBUEQ7QUFRQSxXQUFPLFNBQVA7QUFDSCxDQWpCRDs7QUFtQkEsSUFBTSxTQUFTLFNBQVQsTUFBUyxDQUFDLEdBQUQsRUFBTSxJQUFOLEVBQWdCO0FBQzNCO0FBQ0EsU0FBSyxHQUFMLEVBQVUsSUFBVjtBQUNILENBSEQ7O0FBS0EsSUFBTSxVQUFVLFNBQVYsT0FBVSxHQUFNO0FBQ2xCLGdCQUFZLEVBQVo7QUFDSCxDQUZEOztBQUlBO0FBQ0EsSUFBTSw0QkFBNEIsRUFBQyxVQUFELEVBQWxDOztrQkFFZSx5QiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgQm9pbGVycGxhdGUgZnJvbSAnLi9saWJzL3N0b3JtLWNvbXBvbmVudC1ib2lsZXJwbGF0ZSc7XG5cbmNvbnN0IG9uRE9NQ29udGVudExvYWRlZFRhc2tzID0gWygpID0+IHsgQm9pbGVycGxhdGUuaW5pdCgnLmpzLWJvaWxlcnBsYXRlJyk7IH1dO1xuICAgIFxuaWYoJ2FkZEV2ZW50TGlzdGVuZXInIGluIHdpbmRvdykgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7IG9uRE9NQ29udGVudExvYWRlZFRhc2tzLmZvckVhY2goKGZuKSA9PiBmbigpKTsgfSk7XG5cbi8qXG52YXIgVUkgPSAoZnVuY3Rpb24odywgZCkge1xuXHRcdCd1c2Ugc3RyaWN0JztcblxuXHRcdHZhciBMb2FkU2NyaXB0ID0gZnVuY3Rpb24oc3JjLCBjYikge1xuICAgICAgICAgICAgICAgIHZhciB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JyksXG4gICAgICAgICAgICAgICAgICAgIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gICAgICAgICAgICAgICAgdC5hc3luYyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdC5zcmMgPSBzcmM7XG4gICAgICAgICAgICAgICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LCBzKTtcbiAgICAgICAgICAgICAgICB0Lm9ubG9hZCA9IGNiO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vQm9pbGVycGxhdGUgPSByZXF1aXJlKCcuL2xpYnMvc3Rvcm0tY29tcG9uZW50LWJvaWxlcnBsYXRlLnN0YW5kYWxvbmUuanMnKSxcblx0XHRcdGluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBMb2FkU2NyaXB0KCcuL2pzL3N0b3JtLWNvbXBvbmVudC1ib2lsZXJwbGF0ZS5zdGFuZGFsb25lLmpzJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgU3Rvcm1Db21wb25lbnRCb2lsZXJwbGF0ZS5pbml0KCcuanMtYm9pbGVycGxhdGUnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvL0JvaWxlcnBsYXRlLmluaXQoJy5qcy1ib2lsZXJwbGF0ZScpO1xuXHRcdFx0fTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRpbml0OiBpbml0XG5cdFx0fTtcblxuXHR9KSh3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpO1xuXG5nbG9iYWwuU1RPUk0gPSB7XG4gICAgVUk6IFVJXG59O1xuXG5pZignYWRkRXZlbnRMaXN0ZW5lcicgaW4gd2luZG93KSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIFNUT1JNLlVJLmluaXQsIGZhbHNlKTtcbiovIiwiLyoqXG4gKiBAbmFtZSBzdG9ybS1jb21wb25lbnQtYm9pbGVycGxhdGU6IFxuICogQHZlcnNpb24gMC4xLjA6IEZyaSwgMTQgT2N0IDIwMTYgMTY6Mzg6NDAgR01UXG4gKiBAYXV0aG9yIHN0b3JtaWRcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5sZXQgaW5zdGFuY2VzID0gW107XG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICBkZWxheTogMjAwLFxuICAgICAgICBjYWxsYmFjazogbnVsbFxuICAgIH07XG5cbmNvbnN0IFN0b3JtQ29tcG9uZW50UHJvdG90eXBlID0ge1xuICAgICAgICBpbml0KCkge1xuICAgICAgICAgICAgdGhpcy5ET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LCAnSVxcJ3ZlIGJlZW4gY2xpY2tlZCcpO1xuICAgICAgICB9XG4gICAgfTtcblxuY29uc3QgaW5pdCA9IChzZWwsIG9wdHMpID0+IHtcbiAgICBsZXQgZWxzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbCkpO1xuICAgIFxuICAgIGlmKCFlbHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQm9pbGVycGxhdGUgY2Fubm90IGJlIGluaXRpYWxpc2VkLCBubyBhdWdtZW50YWJsZSBlbGVtZW50cyBmb3VuZCcpO1xuICAgIH1cbiAgICBcbiAgICAvL0FycmF5LmZyb20oYXJyLCBmbik/XG4gICAgZWxzLmZvckVhY2goKGVsLCBpKSA9PiB7XG4gICAgICAgIGluc3RhbmNlc1tpXSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShTdG9ybUNvbXBvbmVudFByb3RvdHlwZSksIHtcbiAgICAgICAgICAgIERPTUVsZW1lbnQ6IGVsLFxuICAgICAgICAgICAgc2V0dGluZ3M6IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzLCBvcHRzKVxuICAgICAgICB9KTtcbiAgICAgICAgLy9hZGQgZnVydGhlciBvYmplY3RzIGFzIGFzc2lnbiBhcmd1bWVudHMgZm9yIG9iamVjdCBjb21wb3NpdGlvblxuICAgICAgICBpbnN0YW5jZXNbaV0uaW5pdCgpO1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZXM7XG59XG5cbmNvbnN0IHJlbG9hZCA9IChlbHMsIG9wdHMpID0+ICB7XG4gICAgZGVzdHJveSgpO1xuICAgIGluaXQoZWxzLCBvcHRzKTtcbn1cblxuY29uc3QgZGVzdHJveSA9ICgpID0+IHtcbiAgICBpbnN0YW5jZXMgPSBbXTsgIFxufVxuXG4vL2V4cG9ydCBkZWZhdWx0IHsgaW5pdCB9XG5jb25zdCBTdG9ybUNvbXBvbmVudEJvaWxlcnBsYXRlID0ge2luaXR9O1xuXG5leHBvcnQgZGVmYXVsdCBTdG9ybUNvbXBvbmVudEJvaWxlcnBsYXRlO1xuXG5cbiJdfQ==
