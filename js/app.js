(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _src = require('../../src');

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

window.addEventListener('DOMContentLoaded', function () {
    _src2.default.init('.js-boilerplate');
});

},{"../../src":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defaults = require('./lib/defaults');

var _defaults2 = _interopRequireDefault(_defaults);

var _factory = require('./lib/factory');

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var init = function init(sel, opts) {
	var els = [].slice.call(document.querySelectorAll(sel));
	//let els = Array.from(document.querySelectorAll(sel));

	if (!els.length) return console.warn('Boilerplate not initialised, no augmentable elements found');

	return els.map(function (el) {
		return Object.assign(Object.create((0, _factory2.default)()), {
			node: el,
			settings: Object.assign({}, _defaults2.default, opts)
		}).init();
	});
};

exports.default = { init: init };

},{"./lib/defaults":3,"./lib/factory":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	callback: null
};

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJzcmMvaW5kZXguanMiLCJzcmMvbGliL2RlZmF1bHRzLmpzIiwic3JjL2xpYi9mYWN0b3J5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFBLE9BQUEsUUFBQSxXQUFBLENBQUE7Ozs7Ozs7O0FBRUEsT0FBQSxnQkFBQSxDQUFBLGtCQUFBLEVBQTRDLFlBQU07QUFDOUMsVUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLGlCQUFBO0FBREosQ0FBQTs7Ozs7Ozs7O0FDRkEsSUFBQSxZQUFBLFFBQUEsZ0JBQUEsQ0FBQTs7OztBQUNBLElBQUEsV0FBQSxRQUFBLGVBQUEsQ0FBQTs7Ozs7Ozs7QUFFQSxJQUFNLE9BQU8sU0FBUCxJQUFPLENBQUEsR0FBQSxFQUFBLElBQUEsRUFBZTtBQUMzQixLQUFJLE1BQU0sR0FBQSxLQUFBLENBQUEsSUFBQSxDQUFjLFNBQUEsZ0JBQUEsQ0FBeEIsR0FBd0IsQ0FBZCxDQUFWO0FBQ0c7O0FBRUgsS0FBRyxDQUFDLElBQUosTUFBQSxFQUFnQixPQUFPLFFBQUEsSUFBQSxDQUFQLDREQUFPLENBQVA7O0FBRWhCLFFBQU8sSUFBQSxHQUFBLENBQVEsVUFBQSxFQUFBLEVBQVE7QUFDdEIsU0FBTyxPQUFBLE1BQUEsQ0FBYyxPQUFBLE1BQUEsQ0FBYyxDQUFBLEdBQUEsVUFBNUIsT0FBNEIsR0FBZCxDQUFkLEVBQXdDO0FBQzlDLFNBRDhDLEVBQUE7QUFFOUMsYUFBVSxPQUFBLE1BQUEsQ0FBQSxFQUFBLEVBQWtCLFdBQWxCLE9BQUEsRUFBQSxJQUFBO0FBRm9DLEdBQXhDLEVBQVAsSUFBTyxFQUFQO0FBREQsRUFBTyxDQUFQO0FBTkQsQ0FBQTs7a0JBY2UsRUFBRSxNQUFGLElBQUEsRTs7Ozs7Ozs7a0JDakJBO0FBQ2QsV0FBVTtBQURJLEM7Ozs7Ozs7OztrQkNBQSxZQUFBO0FBQUEsUUFBTztBQUFBLFFBQUEsU0FBQSxJQUFBLEdBQ2Q7QUFDTixRQUFBLElBQUEsQ0FBQSxnQkFBQSxDQUFBLE9BQUEsRUFBb0MsS0FBQSxXQUFBLENBQUEsSUFBQSxDQUFwQyxJQUFvQyxDQUFwQyxFQUFBLEtBQUE7O0FBRUEsVUFBQSxJQUFBO0FBSm9CLEdBQUE7QUFBQSxlQUFBLFNBQUEsV0FBQSxHQU1QO0FBQ2IsUUFBQSxJQUFBLENBQUEsU0FBQSxDQUFBLE1BQUEsQ0FBQSxTQUFBO0FBQ0EsSUFBQyxFQUFFLEtBQUEsUUFBQSxDQUFBLFFBQUEsSUFBMEIsS0FBQSxRQUFBLENBQUEsUUFBQSxDQUExQixXQUFBLElBQWdFLEtBQUEsUUFBQSxDQUFBLFFBQUEsQ0FBaEUsSUFBQSxJQUErRixLQUFBLFFBQUEsQ0FBQSxRQUFBLENBQWxHLEtBQUMsQ0FBRCxJQUFtSSxLQUFBLFFBQUEsQ0FBQSxRQUFBLENBQUEsSUFBQSxDQUFuSSxJQUFtSSxDQUFuSTtBQUNBO0FBVG9CLEVBQVAiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgQm9pbGVycGxhdGUgZnJvbSAnLi4vLi4vc3JjJztcbiAgICBcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4geyBcbiAgICBCb2lsZXJwbGF0ZS5pbml0KCcuanMtYm9pbGVycGxhdGUnKTtcbn0pOyIsImltcG9ydCBkZWZhdWx0cyBmcm9tICcuL2xpYi9kZWZhdWx0cyc7XG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuL2xpYi9mYWN0b3J5JztcblxuY29uc3QgaW5pdCA9IChzZWwsIG9wdHMpID0+IHtcblx0bGV0IGVscyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWwpKTtcbiAgICAvL2xldCBlbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKSk7XG5cblx0aWYoIWVscy5sZW5ndGgpIHJldHVybiBjb25zb2xlLndhcm4oJ0JvaWxlcnBsYXRlIG5vdCBpbml0aWFsaXNlZCwgbm8gYXVnbWVudGFibGUgZWxlbWVudHMgZm91bmQnKTtcbiAgICBcblx0cmV0dXJuIGVscy5tYXAoKGVsKSA9PiB7XG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShmYWN0b3J5KCkpLCB7XG5cdFx0XHRub2RlOiBlbCxcblx0XHRcdHNldHRpbmdzOiBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cywgb3B0cylcblx0XHR9KS5pbml0KCk7XG5cdH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgeyBpbml0IH07IiwiZXhwb3J0IGRlZmF1bHQge1xuXHRjYWxsYmFjazogbnVsbFxufTsiLCJleHBvcnQgZGVmYXVsdCAoKSA9PiAoe1xuXHRpbml0KCkge1xuXHRcdHRoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSwgZmFsc2UpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdGhhbmRsZUNsaWNrKCkge1xuXHRcdHRoaXMubm9kZS5jbGFzc0xpc3QudG9nZ2xlKCdjbGlja2VkJyk7XG5cdFx0ISEodGhpcy5zZXR0aW5ncy5jYWxsYmFjayAmJiB0aGlzLnNldHRpbmdzLmNhbGxiYWNrLmNvbnN0cnVjdG9yICYmIHRoaXMuc2V0dGluZ3MuY2FsbGJhY2suY2FsbCAmJiB0aGlzLnNldHRpbmdzLmNhbGxiYWNrLmFwcGx5KSAmJiB0aGlzLnNldHRpbmdzLmNhbGxiYWNrLmNhbGwodGhpcyk7XG5cdH1cbn0pOyJdfQ==
