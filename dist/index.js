/**
 * @name storm-component-boilerplate: 
 * @version 1.0.0: Sun, 02 Apr 2017 18:45:51 GMT
 * @author stormid
 * @license MIT
 */
import defaults from './libs/defaults';
import componentPrototype from './libs/component-prototype';

const init = (sel, opts) => {
	let els = [].slice.call(document.querySelectorAll(sel));
    //let els = Array.from(document.querySelectorAll(sel));

	if(!els.length) throw new Error('Boilerplate cannot be initialised, no augmentable elements found');
    
	return els.map((el) => {
		return Object.assign(Object.create(componentPrototype), {
			DOMElement: el,
			settings: Object.assign({}, defaults, opts)
		}).init();
	});
};

export default { init };