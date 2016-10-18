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
            !!(this.settings.callback && this.settings.callback.constructor && this.settings.callback.call && this.settings.callback.apply) && this.settings.callback.call(this);
        }
    };

const init = (sel, opts) => {
    let els = [].slice.call(document.querySelectorAll(sel));
    //let els = Array.from(document.querySelectorAll(sel));

    if(!els.length) {
        throw new Error('Boilerplate cannot be initialised, no augmentable elements found');
    }
    
    return els.map((el, i) => {
        return Object.assign(Object.create(StormComponentPrototype), {
            DOMElement: el,
            settings: Object.assign({}, defaults, opts)
        }).init();
    });
}

export default { init }