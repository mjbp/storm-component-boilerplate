export default{
	init() {
		this.node.addEventListener('click', this.handleClick.bind(this), false);

		return this;
	},
	handleClick() {
		this.node.classList.toggle('clicked');
		!!(this.settings.callback && this.settings.callback.constructor && this.settings.callback.call && this.settings.callback.apply) && this.settings.callback.call(this);
	}
};