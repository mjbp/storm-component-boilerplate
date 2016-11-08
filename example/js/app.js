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
 * @version 0.2.4: Tue, 08 Nov 2016 16:58:30 GMT
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJleGFtcGxlL3NyYy9saWJzL3N0b3JtLWNvbXBvbmVudC1ib2lsZXJwbGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7OztBQUVBLElBQU0sMEJBQTBCLENBQUMsWUFBTTtBQUNuQyx3Q0FBWSxJQUFaLENBQWlCLGlCQUFqQjtBQUNILENBRitCLENBQWhDOztBQUlBLElBQUcsc0JBQXNCLE1BQXpCLEVBQWlDLE9BQU8sZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFlBQU07QUFBRSw0QkFBd0IsT0FBeEIsQ0FBZ0MsVUFBQyxFQUFEO0FBQUEsZUFBUSxJQUFSO0FBQUEsS0FBaEM7QUFBZ0QsQ0FBcEc7O0FBRWpDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBOzs7Ozs7QUFNQSxJQUFNLFdBQVc7QUFDaEIsUUFBTyxHQURTO0FBRWhCLFdBQVU7QUFGTSxDQUFqQjs7QUFLQSxJQUFNLDBCQUEwQjtBQUMvQixLQUQrQixrQkFDeEI7QUFDTixPQUFLLFVBQUwsQ0FBZ0IsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDLEtBQUssV0FBTCxDQUFpQixJQUFqQixDQUFzQixJQUF0QixDQUExQyxFQUF1RSxLQUF2RTtBQUNBLFNBQU8sSUFBUDtBQUNBLEVBSjhCO0FBSy9CLFlBTCtCLHlCQUtqQjtBQUNiLE9BQUssVUFBTCxDQUFnQixTQUFoQixDQUEwQixNQUExQixDQUFpQyxTQUFqQztBQUNBLEdBQUMsRUFBRSxLQUFLLFFBQUwsQ0FBYyxRQUFkLElBQTBCLEtBQUssUUFBTCxDQUFjLFFBQWQsQ0FBdUIsV0FBakQsSUFBZ0UsS0FBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixJQUF2RixJQUErRixLQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLEtBQXhILENBQUQsSUFBbUksS0FBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixJQUF2QixDQUE0QixJQUE1QixDQUFuSTtBQUNBO0FBUjhCLENBQWhDOztBQVdBLElBQU0sT0FBTyxTQUFQLElBQU8sQ0FBQyxHQUFELEVBQU0sSUFBTixFQUFlO0FBQzNCLEtBQUksTUFBTSxHQUFHLEtBQUgsQ0FBUyxJQUFULENBQWMsU0FBUyxnQkFBVCxDQUEwQixHQUExQixDQUFkLENBQVY7QUFDRzs7QUFFSCxLQUFHLENBQUMsSUFBSSxNQUFSLEVBQWdCLE1BQU0sSUFBSSxLQUFKLENBQVUsa0VBQVYsQ0FBTjs7QUFFaEIsUUFBTyxJQUFJLEdBQUosQ0FBUSxVQUFDLEVBQUQsRUFBUTtBQUN0QixTQUFPLE9BQU8sTUFBUCxDQUFjLE9BQU8sTUFBUCxDQUFjLHVCQUFkLENBQWQsRUFBc0Q7QUFDNUQsZUFBWSxFQURnRDtBQUU1RCxhQUFVLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsUUFBbEIsRUFBNEIsSUFBNUI7QUFGa0QsR0FBdEQsRUFHSixJQUhJLEVBQVA7QUFJQSxFQUxNLENBQVA7QUFNQSxDQVpEOztrQkFjZSxFQUFFLFVBQUYsRSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgQm9pbGVycGxhdGUgZnJvbSAnLi9saWJzL3N0b3JtLWNvbXBvbmVudC1ib2lsZXJwbGF0ZSc7XG5cbmNvbnN0IG9uRE9NQ29udGVudExvYWRlZFRhc2tzID0gWygpID0+IHtcbiAgICBCb2lsZXJwbGF0ZS5pbml0KCcuanMtYm9pbGVycGxhdGUnKTtcbn1dO1xuICAgIFxuaWYoJ2FkZEV2ZW50TGlzdGVuZXInIGluIHdpbmRvdykgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7IG9uRE9NQ29udGVudExvYWRlZFRhc2tzLmZvckVhY2goKGZuKSA9PiBmbigpKTsgfSk7XG5cbi8qXG5lczUgdmVyc2lvblxudmFyIFVJID0gKGZ1bmN0aW9uKHcsIGQpIHtcblx0XHQndXNlIHN0cmljdCc7XG5cblx0XHR2YXIgTG9hZFNjcmlwdCA9IGZ1bmN0aW9uKHNyYywgY2IpIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpLFxuICAgICAgICAgICAgICAgICAgICBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICAgICAgICAgICAgICAgIHQuYXN5bmMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHQuc3JjID0gc3JjO1xuICAgICAgICAgICAgICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCwgcyk7XG4gICAgICAgICAgICAgICAgdC5vbmxvYWQgPSBjYjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL2FzeW5jIHZlcnNpb25cbiAgICAgICAgICAgIC8vQm9pbGVycGxhdGUgPSByZXF1aXJlKCcuL2xpYnMvc3Rvcm0tY29tcG9uZW50LWJvaWxlcnBsYXRlLnN0YW5kYWxvbmUuanMnKSxcblx0XHRcdGluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBMb2FkU2NyaXB0KCcuL2pzL3N0b3JtLWNvbXBvbmVudC1ib2lsZXJwbGF0ZS5zdGFuZGFsb25lLmpzJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgU3Rvcm1Db21wb25lbnRCb2lsZXJwbGF0ZS5pbml0KCcuanMtYm9pbGVycGxhdGUnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvL0JvaWxlcnBsYXRlLmluaXQoJy5qcy1ib2lsZXJwbGF0ZScpO1xuXHRcdFx0fTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRpbml0OiBpbml0XG5cdFx0fTtcblxuXHR9KSh3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpO1xuXG5nbG9iYWwuU1RPUk0gPSB7XG4gICAgVUk6IFVJXG59O1xuXG5pZignYWRkRXZlbnRMaXN0ZW5lcicgaW4gd2luZG93KSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIFNUT1JNLlVJLmluaXQsIGZhbHNlKTtcbiovXG4iLCIvKipcbiAqIEBuYW1lIHN0b3JtLWNvbXBvbmVudC1ib2lsZXJwbGF0ZTogXG4gKiBAdmVyc2lvbiAwLjIuNDogVHVlLCAwOCBOb3YgMjAxNiAxNjo1ODozMCBHTVRcbiAqIEBhdXRob3Igc3Rvcm1pZFxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbmNvbnN0IGRlZmF1bHRzID0ge1xuXHRkZWxheTogMjAwLFxuXHRjYWxsYmFjazogbnVsbFxufTtcblxuY29uc3QgU3Rvcm1Db21wb25lbnRQcm90b3R5cGUgPSB7XG5cdGluaXQoKSB7XG5cdFx0dGhpcy5ET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpLCBmYWxzZSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdGhhbmRsZUNsaWNrKCkge1xuXHRcdHRoaXMuRE9NRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdjbGlja2VkJyk7XG5cdFx0ISEodGhpcy5zZXR0aW5ncy5jYWxsYmFjayAmJiB0aGlzLnNldHRpbmdzLmNhbGxiYWNrLmNvbnN0cnVjdG9yICYmIHRoaXMuc2V0dGluZ3MuY2FsbGJhY2suY2FsbCAmJiB0aGlzLnNldHRpbmdzLmNhbGxiYWNrLmFwcGx5KSAmJiB0aGlzLnNldHRpbmdzLmNhbGxiYWNrLmNhbGwodGhpcyk7XG5cdH1cbn07XG5cbmNvbnN0IGluaXQgPSAoc2VsLCBvcHRzKSA9PiB7XG5cdGxldCBlbHMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKSk7XG4gICAgLy9sZXQgZWxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbCkpO1xuXG5cdGlmKCFlbHMubGVuZ3RoKSB0aHJvdyBuZXcgRXJyb3IoJ0JvaWxlcnBsYXRlIGNhbm5vdCBiZSBpbml0aWFsaXNlZCwgbm8gYXVnbWVudGFibGUgZWxlbWVudHMgZm91bmQnKTtcbiAgICBcblx0cmV0dXJuIGVscy5tYXAoKGVsKSA9PiB7XG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShTdG9ybUNvbXBvbmVudFByb3RvdHlwZSksIHtcblx0XHRcdERPTUVsZW1lbnQ6IGVsLFxuXHRcdFx0c2V0dGluZ3M6IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzLCBvcHRzKVxuXHRcdH0pLmluaXQoKTtcblx0fSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IGluaXQgfTsiXX0=
