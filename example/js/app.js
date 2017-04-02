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

},{"./libs/storm-component-boilerplate":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	init: function init() {
		this.DOMElement.addEventListener('click', this.handleClick.bind(this), false);
		return this;
	},
	handleClick: function handleClick() {
		this.DOMElement.classList.toggle('clicked');
		!!(this.settings.callback && this.settings.callback.constructor && this.settings.callback.call && this.settings.callback.apply) && this.settings.callback.call(this);
	}
};

},{}],3:[function(require,module,exports){
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

var _defaults = require('./libs/defaults');

var _defaults2 = _interopRequireDefault(_defaults);

var _component = require('./libs/component');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var init = function init(sel, opts) {
	var els = [].slice.call(document.querySelectorAll(sel));
	//let els = Array.from(document.querySelectorAll(sel));

	if (!els.length) throw new Error('Boilerplate cannot be initialised, no augmentable elements found');

	return els.map(function (el) {
		return Object.assign(Object.create(_component2.default), {
			DOMElement: el,
			settings: Object.assign({}, _defaults2.default, opts)
		}).init();
	});
};

exports.default = { init: init };

},{"./libs/component":2,"./libs/defaults":3}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJleGFtcGxlL3NyYy9saWJzL2xpYnMvY29tcG9uZW50LmpzIiwiZXhhbXBsZS9zcmMvbGlicy9saWJzL2RlZmF1bHRzLmpzIiwiZXhhbXBsZS9zcmMvbGlicy9zdG9ybS1jb21wb25lbnQtYm9pbGVycGxhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7Ozs7OztBQUVBLElBQU0sMkJBQTJCLFlBQU0sQUFDbkM7d0NBQUEsQUFBWSxLQUFaLEFBQWlCLEFBQ3BCO0FBRkQsQUFBZ0MsQ0FBQTs7QUFJaEMsSUFBRyxzQkFBSCxBQUF5QixlQUFRLEFBQU8saUJBQVAsQUFBd0Isb0JBQW9CLFlBQU0sQUFBRTs0QkFBQSxBQUF3QixRQUFRLFVBQUEsQUFBQyxJQUFEO2VBQUEsQUFBUTtBQUF4QyxBQUFnRDtBQUFwRyxDQUFBOzs7Ozs7Ozs7QUNObkIsdUJBQ04sQUFDTjtPQUFBLEFBQUssV0FBTCxBQUFnQixpQkFBaEIsQUFBaUMsU0FBUyxLQUFBLEFBQUssWUFBTCxBQUFpQixLQUEzRCxBQUEwQyxBQUFzQixPQUFoRSxBQUF1RSxBQUN2RTtTQUFBLEFBQU8sQUFDUDtBQUpZLEFBS2I7QUFMYSxxQ0FLQyxBQUNiO09BQUEsQUFBSyxXQUFMLEFBQWdCLFVBQWhCLEFBQTBCLE9BQTFCLEFBQWlDLEFBQ2pDO0dBQUMsRUFBRSxLQUFBLEFBQUssU0FBTCxBQUFjLFlBQVksS0FBQSxBQUFLLFNBQUwsQUFBYyxTQUF4QyxBQUFpRCxlQUFlLEtBQUEsQUFBSyxTQUFMLEFBQWMsU0FBOUUsQUFBdUYsUUFBUSxLQUFBLEFBQUssU0FBTCxBQUFjLFNBQWhILEFBQUMsQUFBd0gsVUFBVSxLQUFBLEFBQUssU0FBTCxBQUFjLFNBQWQsQUFBdUIsS0FBMUosQUFBbUksQUFBNEIsQUFDL0o7QSxBQVJZO0FBQUEsQUFDYjs7Ozs7Ozs7O1csQUNEYyxBQUNKO0FBREksQUFDZDs7Ozs7Ozs7O0FDREQ7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNLE9BQU8sU0FBUCxBQUFPLEtBQUEsQUFBQyxLQUFELEFBQU0sTUFBUyxBQUMzQjtLQUFJLE1BQU0sR0FBQSxBQUFHLE1BQUgsQUFBUyxLQUFLLFNBQUEsQUFBUyxpQkFBakMsQUFBVSxBQUFjLEFBQTBCLEFBQy9DO0FBRUg7O0tBQUcsQ0FBQyxJQUFKLEFBQVEsUUFBUSxNQUFNLElBQUEsQUFBSSxNQUFWLEFBQU0sQUFBVSxBQUVoQzs7WUFBTyxBQUFJLElBQUksVUFBQSxBQUFDLElBQU8sQUFDdEI7Z0JBQU8sQUFBTyxPQUFPLE9BQUEsQUFBTyxtQkFBckI7ZUFBd0MsQUFDbEMsQUFDWjthQUFVLE9BQUEsQUFBTyxPQUFQLEFBQWMsd0JBRmxCLEFBQXdDLEFBRXBDLEFBQTRCO0FBRlEsQUFDOUMsR0FETSxFQUFQLEFBQU8sQUFHSixBQUNIO0FBTEQsQUFBTyxBQU1QLEVBTk87QUFOUjs7a0JBY2UsRUFBRSxNLEFBQUYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEJvaWxlcnBsYXRlIGZyb20gJy4vbGlicy9zdG9ybS1jb21wb25lbnQtYm9pbGVycGxhdGUnO1xuXG5jb25zdCBvbkRPTUNvbnRlbnRMb2FkZWRUYXNrcyA9IFsoKSA9PiB7XG4gICAgQm9pbGVycGxhdGUuaW5pdCgnLmpzLWJvaWxlcnBsYXRlJyk7XG59XTtcbiAgICBcbmlmKCdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3cpIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4geyBvbkRPTUNvbnRlbnRMb2FkZWRUYXNrcy5mb3JFYWNoKChmbikgPT4gZm4oKSk7IH0pOyIsImV4cG9ydCBkZWZhdWx0e1xuXHRpbml0KCkge1xuXHRcdHRoaXMuRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSwgZmFsc2UpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRoYW5kbGVDbGljaygpIHtcblx0XHR0aGlzLkRPTUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY2xpY2tlZCcpO1xuXHRcdCEhKHRoaXMuc2V0dGluZ3MuY2FsbGJhY2sgJiYgdGhpcy5zZXR0aW5ncy5jYWxsYmFjay5jb25zdHJ1Y3RvciAmJiB0aGlzLnNldHRpbmdzLmNhbGxiYWNrLmNhbGwgJiYgdGhpcy5zZXR0aW5ncy5jYWxsYmFjay5hcHBseSkgJiYgdGhpcy5zZXR0aW5ncy5jYWxsYmFjay5jYWxsKHRoaXMpO1xuXHR9XG59OyIsImV4cG9ydCBkZWZhdWx0IHtcblx0Y2FsbGJhY2s6IG51bGxcbn07IiwiaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4vbGlicy9kZWZhdWx0cyc7XG5pbXBvcnQgY29tcG9uZW50IGZyb20gJy4vbGlicy9jb21wb25lbnQnXG5cbmNvbnN0IGluaXQgPSAoc2VsLCBvcHRzKSA9PiB7XG5cdGxldCBlbHMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKSk7XG4gICAgLy9sZXQgZWxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbCkpO1xuXG5cdGlmKCFlbHMubGVuZ3RoKSB0aHJvdyBuZXcgRXJyb3IoJ0JvaWxlcnBsYXRlIGNhbm5vdCBiZSBpbml0aWFsaXNlZCwgbm8gYXVnbWVudGFibGUgZWxlbWVudHMgZm91bmQnKTtcbiAgICBcblx0cmV0dXJuIGVscy5tYXAoKGVsKSA9PiB7XG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShjb21wb25lbnQpLCB7XG5cdFx0XHRET01FbGVtZW50OiBlbCxcblx0XHRcdHNldHRpbmdzOiBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cywgb3B0cylcblx0XHR9KS5pbml0KCk7XG5cdH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgeyBpbml0IH07Il19
