import defaults from './libs/defaults';
import component from './libs/component'

const init = (sel, opts) => {
	let els = [].slice.call(document.querySelectorAll(sel));
    //let els = Array.from(document.querySelectorAll(sel));

	if(!els.length) throw new Error('Boilerplate cannot be initialised, no augmentable elements found');
    
	return els.map((el) => {
		return Object.assign(Object.create(component), {
			DOMElement: el,
			settings: Object.assign({}, defaults, opts)
		}).init();
	});
};

export default { init };