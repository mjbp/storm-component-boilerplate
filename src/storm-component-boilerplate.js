let instances = [];

const defaults = {
        delay: 200,
        callback: null
    };

const StormComponentPrototype = {
        init() {
            this.DOMElement.addEventListener('click', this.handleClick.bind(this), false);

            return this;
        },
        handleClick() {
            this.DOMElement.classList.toggle('clicked');
        }
    };

const init = (sel, opts) => {
    let els = [].slice.call(document.querySelectorAll(sel));
    //let els = Array.from(document.querySelectorAll(sel));

    if(!els.length) {
        throw new Error('Boilerplate cannot be initialised, no augmentable elements found');
    }
    
    els.forEach((el, i) => {
        instances[i] = Object.assign(Object.create(StormComponentPrototype), {
            DOMElement: el,
            settings: Object.assign({}, defaults, opts)
        });
        //add further objects as assign arguments for object composition
        instances[i].init();
    });
    return instances;
}

export default { init }