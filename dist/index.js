/**
 * @name storm-component-boilerplate: 
 * @version 1.2.3: Mon, 27 Aug 2018 09:41:55 GMT
 * @author stormid
 * @license MIT
 */
import defaults from './lib/defaults';
import factory from './lib/factory';

const init = (sel, opts) => {
	let els = [].slice.call(document.querySelectorAll(sel));
    //let els = Array.from(document.querySelectorAll(sel));

	if(!els.length) return console.warn('Boilerplate not initialised, no augmentable elements found');
    
	return els.map((el) => {
		return Object.assign(Object.create(factory()), {
			node: el,
			settings: Object.assign({}, defaults, opts)
		}).init();
	});
};

export default { init };