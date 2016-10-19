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
 * @version 0.1.1: Tue, 18 Oct 2016 14:37:28 GMT
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

    if (!els.length) {
        throw new Error('Boilerplate cannot be initialised, no augmentable elements found');
    }

    return els.map(function (el, i) {
        return Object.assign(Object.create(StormComponentPrototype), {
            DOMElement: el,
            settings: Object.assign({}, defaults, opts)
        }).init();
    });
};

exports.default = { init: init };

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJleGFtcGxlL3NyYy9saWJzL3N0b3JtLWNvbXBvbmVudC1ib2lsZXJwbGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7OztBQUVBLElBQU0sMEJBQTBCLENBQUMsWUFBTTtBQUNuQyx3Q0FBWSxJQUFaLENBQWlCLGlCQUFqQjtBQUNILENBRitCLENBQWhDOztBQUlBLElBQUcsc0JBQXNCLE1BQXpCLEVBQWlDLE9BQU8sZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFlBQU07QUFBRSw0QkFBd0IsT0FBeEIsQ0FBZ0MsVUFBQyxFQUFEO0FBQUEsZUFBUSxJQUFSO0FBQUEsS0FBaEM7QUFBZ0QsQ0FBcEc7O0FBRWpDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBOzs7Ozs7QUFNQSxJQUFNLFdBQVc7QUFDVCxXQUFPLEdBREU7QUFFVCxjQUFVO0FBRkQsQ0FBakI7O0FBS0EsSUFBTSwwQkFBMEI7QUFDeEIsUUFEd0Isa0JBQ2pCO0FBQ0gsYUFBSyxVQUFMLENBQWdCLGdCQUFoQixDQUFpQyxPQUFqQyxFQUEwQyxLQUFLLFdBQUwsQ0FBaUIsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBMUMsRUFBdUUsS0FBdkU7O0FBRUEsZUFBTyxJQUFQO0FBQ0gsS0FMdUI7QUFNeEIsZUFOd0IseUJBTVY7QUFDVixhQUFLLFVBQUwsQ0FBZ0IsU0FBaEIsQ0FBMEIsTUFBMUIsQ0FBaUMsU0FBakM7QUFDQSxTQUFDLEVBQUUsS0FBSyxRQUFMLENBQWMsUUFBZCxJQUEwQixLQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLFdBQWpELElBQWdFLEtBQUssUUFBTCxDQUFjLFFBQWQsQ0FBdUIsSUFBdkYsSUFBK0YsS0FBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixLQUF4SCxDQUFELElBQW1JLEtBQUssUUFBTCxDQUFjLFFBQWQsQ0FBdUIsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBbkk7QUFDSDtBQVR1QixDQUFoQzs7QUFZQSxJQUFNLE9BQU8sU0FBUCxJQUFPLENBQUMsR0FBRCxFQUFNLElBQU4sRUFBZTtBQUN4QixRQUFJLE1BQU0sR0FBRyxLQUFILENBQVMsSUFBVCxDQUFjLFNBQVMsZ0JBQVQsQ0FBMEIsR0FBMUIsQ0FBZCxDQUFWO0FBQ0E7O0FBRUEsUUFBRyxDQUFDLElBQUksTUFBUixFQUFnQjtBQUNaLGNBQU0sSUFBSSxLQUFKLENBQVUsa0VBQVYsQ0FBTjtBQUNIOztBQUVELFdBQU8sSUFBSSxHQUFKLENBQVEsVUFBQyxFQUFELEVBQUssQ0FBTCxFQUFXO0FBQ3RCLGVBQU8sT0FBTyxNQUFQLENBQWMsT0FBTyxNQUFQLENBQWMsdUJBQWQsQ0FBZCxFQUFzRDtBQUN6RCx3QkFBWSxFQUQ2QztBQUV6RCxzQkFBVSxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLFFBQWxCLEVBQTRCLElBQTVCO0FBRitDLFNBQXRELEVBR0osSUFISSxFQUFQO0FBSUgsS0FMTSxDQUFQO0FBTUgsQ0FkRDs7a0JBZ0JlLEVBQUUsVUFBRixFIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBCb2lsZXJwbGF0ZSBmcm9tICcuL2xpYnMvc3Rvcm0tY29tcG9uZW50LWJvaWxlcnBsYXRlJztcblxuY29uc3Qgb25ET01Db250ZW50TG9hZGVkVGFza3MgPSBbKCkgPT4ge1xuICAgIEJvaWxlcnBsYXRlLmluaXQoJy5qcy1ib2lsZXJwbGF0ZScpO1xufV07XG4gICAgXG5pZignYWRkRXZlbnRMaXN0ZW5lcicgaW4gd2luZG93KSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHsgb25ET01Db250ZW50TG9hZGVkVGFza3MuZm9yRWFjaCgoZm4pID0+IGZuKCkpOyB9KTtcblxuLypcbmVzNSB2ZXJzaW9uXG52YXIgVUkgPSAoZnVuY3Rpb24odywgZCkge1xuXHRcdCd1c2Ugc3RyaWN0JztcblxuXHRcdHZhciBMb2FkU2NyaXB0ID0gZnVuY3Rpb24oc3JjLCBjYikge1xuICAgICAgICAgICAgICAgIHZhciB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JyksXG4gICAgICAgICAgICAgICAgICAgIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gICAgICAgICAgICAgICAgdC5hc3luYyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdC5zcmMgPSBzcmM7XG4gICAgICAgICAgICAgICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LCBzKTtcbiAgICAgICAgICAgICAgICB0Lm9ubG9hZCA9IGNiO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vYXN5bmMgdmVyc2lvblxuICAgICAgICAgICAgLy9Cb2lsZXJwbGF0ZSA9IHJlcXVpcmUoJy4vbGlicy9zdG9ybS1jb21wb25lbnQtYm9pbGVycGxhdGUuc3RhbmRhbG9uZS5qcycpLFxuXHRcdFx0aW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIExvYWRTY3JpcHQoJy4vanMvc3Rvcm0tY29tcG9uZW50LWJvaWxlcnBsYXRlLnN0YW5kYWxvbmUuanMnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBTdG9ybUNvbXBvbmVudEJvaWxlcnBsYXRlLmluaXQoJy5qcy1ib2lsZXJwbGF0ZScpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vQm9pbGVycGxhdGUuaW5pdCgnLmpzLWJvaWxlcnBsYXRlJyk7XG5cdFx0XHR9O1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGluaXQ6IGluaXRcblx0XHR9O1xuXG5cdH0pKHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCk7XG5cbmdsb2JhbC5TVE9STSA9IHtcbiAgICBVSTogVUlcbn07XG5cbmlmKCdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3cpIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgU1RPUk0uVUkuaW5pdCwgZmFsc2UpO1xuKi9cbiIsIi8qKlxuICogQG5hbWUgc3Rvcm0tY29tcG9uZW50LWJvaWxlcnBsYXRlOiBcbiAqIEB2ZXJzaW9uIDAuMS4xOiBUdWUsIDE4IE9jdCAyMDE2IDE0OjM3OjI4IEdNVFxuICogQGF1dGhvciBzdG9ybWlkXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgIGRlbGF5OiAyMDAsXG4gICAgICAgIGNhbGxiYWNrOiBudWxsXG4gICAgfTtcblxuY29uc3QgU3Rvcm1Db21wb25lbnRQcm90b3R5cGUgPSB7XG4gICAgICAgIGluaXQoKSB7XG4gICAgICAgICAgICB0aGlzLkRPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyksIGZhbHNlKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICAgICAgdGhpcy5ET01FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2NsaWNrZWQnKTtcbiAgICAgICAgICAgICEhKHRoaXMuc2V0dGluZ3MuY2FsbGJhY2sgJiYgdGhpcy5zZXR0aW5ncy5jYWxsYmFjay5jb25zdHJ1Y3RvciAmJiB0aGlzLnNldHRpbmdzLmNhbGxiYWNrLmNhbGwgJiYgdGhpcy5zZXR0aW5ncy5jYWxsYmFjay5hcHBseSkgJiYgdGhpcy5zZXR0aW5ncy5jYWxsYmFjay5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcblxuY29uc3QgaW5pdCA9IChzZWwsIG9wdHMpID0+IHtcbiAgICBsZXQgZWxzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbCkpO1xuICAgIC8vbGV0IGVscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWwpKTtcblxuICAgIGlmKCFlbHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQm9pbGVycGxhdGUgY2Fubm90IGJlIGluaXRpYWxpc2VkLCBubyBhdWdtZW50YWJsZSBlbGVtZW50cyBmb3VuZCcpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gZWxzLm1hcCgoZWwsIGkpID0+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShTdG9ybUNvbXBvbmVudFByb3RvdHlwZSksIHtcbiAgICAgICAgICAgIERPTUVsZW1lbnQ6IGVsLFxuICAgICAgICAgICAgc2V0dGluZ3M6IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzLCBvcHRzKVxuICAgICAgICB9KS5pbml0KCk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgaW5pdCB9Il19
