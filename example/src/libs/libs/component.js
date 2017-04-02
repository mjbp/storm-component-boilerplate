export default{
	init() {
		this.DOMElement.addEventListener('click', this.handleClick.bind(this), false);
		return this;
	},
	handleClick() {
		this.DOMElement.classList.toggle('clicked');
		!!(this.settings.callback && this.settings.callback.constructor && this.settings.callback.call && this.settings.callback.apply) && this.settings.callback.call(this);
	}
};