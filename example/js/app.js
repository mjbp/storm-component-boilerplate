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

},{"./libs/storm-component-boilerplate":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * @name storm-component-boilerplate: 
 * @version 0.2.9: Sat, 18 Mar 2017 10:38:47 GMT
 * @author stormid
 * @license MIT
 */
var defaults = {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJleGFtcGxlL3NyYy9saWJzL3N0b3JtLWNvbXBvbmVudC1ib2lsZXJwbGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7OztBQUVBLElBQU0sMEJBQTBCLENBQUMsWUFBTTtBQUNuQyx3Q0FBWSxJQUFaLENBQWlCLGlCQUFqQjtBQUNILENBRitCLENBQWhDOztBQUlBLElBQUcsc0JBQXNCLE1BQXpCLEVBQWlDLE9BQU8sZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFlBQU07QUFBRSw0QkFBd0IsT0FBeEIsQ0FBZ0MsVUFBQyxFQUFEO0FBQUEsZUFBUSxJQUFSO0FBQUEsS0FBaEM7QUFBZ0QsQ0FBcEc7Ozs7Ozs7O0FDTmpDOzs7Ozs7QUFNQSxJQUFNLFdBQVc7QUFDaEIsV0FBVTtBQURNLENBQWpCOztBQUlBLElBQU0sMEJBQTBCO0FBQy9CLEtBRCtCLGtCQUN4QjtBQUNOLE9BQUssVUFBTCxDQUFnQixnQkFBaEIsQ0FBaUMsT0FBakMsRUFBMEMsS0FBSyxXQUFMLENBQWlCLElBQWpCLENBQXNCLElBQXRCLENBQTFDLEVBQXVFLEtBQXZFO0FBQ0EsU0FBTyxJQUFQO0FBQ0EsRUFKOEI7QUFLL0IsWUFMK0IseUJBS2pCO0FBQ2IsT0FBSyxVQUFMLENBQWdCLFNBQWhCLENBQTBCLE1BQTFCLENBQWlDLFNBQWpDO0FBQ0EsR0FBQyxFQUFFLEtBQUssUUFBTCxDQUFjLFFBQWQsSUFBMEIsS0FBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixXQUFqRCxJQUFnRSxLQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLElBQXZGLElBQStGLEtBQUssUUFBTCxDQUFjLFFBQWQsQ0FBdUIsS0FBeEgsQ0FBRCxJQUFtSSxLQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLElBQXZCLENBQTRCLElBQTVCLENBQW5JO0FBQ0E7QUFSOEIsQ0FBaEM7O0FBV0EsSUFBTSxPQUFPLFNBQVAsSUFBTyxDQUFDLEdBQUQsRUFBTSxJQUFOLEVBQWU7QUFDM0IsS0FBSSxNQUFNLEdBQUcsS0FBSCxDQUFTLElBQVQsQ0FBYyxTQUFTLGdCQUFULENBQTBCLEdBQTFCLENBQWQsQ0FBVjtBQUNHOztBQUVILEtBQUcsQ0FBQyxJQUFJLE1BQVIsRUFBZ0IsTUFBTSxJQUFJLEtBQUosQ0FBVSxrRUFBVixDQUFOOztBQUVoQixRQUFPLElBQUksR0FBSixDQUFRLFVBQUMsRUFBRCxFQUFRO0FBQ3RCLFNBQU8sT0FBTyxNQUFQLENBQWMsT0FBTyxNQUFQLENBQWMsdUJBQWQsQ0FBZCxFQUFzRDtBQUM1RCxlQUFZLEVBRGdEO0FBRTVELGFBQVUsT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixRQUFsQixFQUE0QixJQUE1QjtBQUZrRCxHQUF0RCxFQUdKLElBSEksRUFBUDtBQUlBLEVBTE0sQ0FBUDtBQU1BLENBWkQ7O2tCQWNlLEVBQUUsVUFBRixFIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBCb2lsZXJwbGF0ZSBmcm9tICcuL2xpYnMvc3Rvcm0tY29tcG9uZW50LWJvaWxlcnBsYXRlJztcblxuY29uc3Qgb25ET01Db250ZW50TG9hZGVkVGFza3MgPSBbKCkgPT4ge1xuICAgIEJvaWxlcnBsYXRlLmluaXQoJy5qcy1ib2lsZXJwbGF0ZScpO1xufV07XG4gICAgXG5pZignYWRkRXZlbnRMaXN0ZW5lcicgaW4gd2luZG93KSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHsgb25ET01Db250ZW50TG9hZGVkVGFza3MuZm9yRWFjaCgoZm4pID0+IGZuKCkpOyB9KTsiLCIvKipcbiAqIEBuYW1lIHN0b3JtLWNvbXBvbmVudC1ib2lsZXJwbGF0ZTogXG4gKiBAdmVyc2lvbiAwLjIuOTogU2F0LCAxOCBNYXIgMjAxNyAxMDozODo0NyBHTVRcbiAqIEBhdXRob3Igc3Rvcm1pZFxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbmNvbnN0IGRlZmF1bHRzID0ge1xuXHRjYWxsYmFjazogbnVsbFxufTtcblxuY29uc3QgU3Rvcm1Db21wb25lbnRQcm90b3R5cGUgPSB7XG5cdGluaXQoKSB7XG5cdFx0dGhpcy5ET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpLCBmYWxzZSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdGhhbmRsZUNsaWNrKCkge1xuXHRcdHRoaXMuRE9NRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdjbGlja2VkJyk7XG5cdFx0ISEodGhpcy5zZXR0aW5ncy5jYWxsYmFjayAmJiB0aGlzLnNldHRpbmdzLmNhbGxiYWNrLmNvbnN0cnVjdG9yICYmIHRoaXMuc2V0dGluZ3MuY2FsbGJhY2suY2FsbCAmJiB0aGlzLnNldHRpbmdzLmNhbGxiYWNrLmFwcGx5KSAmJiB0aGlzLnNldHRpbmdzLmNhbGxiYWNrLmNhbGwodGhpcyk7XG5cdH1cbn07XG5cbmNvbnN0IGluaXQgPSAoc2VsLCBvcHRzKSA9PiB7XG5cdGxldCBlbHMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKSk7XG4gICAgLy9sZXQgZWxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbCkpO1xuXG5cdGlmKCFlbHMubGVuZ3RoKSB0aHJvdyBuZXcgRXJyb3IoJ0JvaWxlcnBsYXRlIGNhbm5vdCBiZSBpbml0aWFsaXNlZCwgbm8gYXVnbWVudGFibGUgZWxlbWVudHMgZm91bmQnKTtcbiAgICBcblx0cmV0dXJuIGVscy5tYXAoKGVsKSA9PiB7XG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShTdG9ybUNvbXBvbmVudFByb3RvdHlwZSksIHtcblx0XHRcdERPTUVsZW1lbnQ6IGVsLFxuXHRcdFx0c2V0dGluZ3M6IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzLCBvcHRzKVxuXHRcdH0pLmluaXQoKTtcblx0fSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IGluaXQgfTsiXX0=
