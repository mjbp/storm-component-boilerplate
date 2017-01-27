import Boilerplate from './libs/storm-component-boilerplate';

const onDOMContentLoadedTasks = [() => {
    Boilerplate.init('.js-boilerplate');
}];
    
if('addEventListener' in window) window.addEventListener('DOMContentLoaded', () => { onDOMContentLoadedTasks.forEach((fn) => fn()); });