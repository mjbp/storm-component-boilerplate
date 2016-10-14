import expect from 'expect';
import Boilerplate from './dist/storm-component-boilerplate';

//https://www.npmjs.com/package/mock-browser
describe('add', () => {
  it('should return an array', () => {
    expect(Boilerplate.init('.js-boilerplate')).toBeAn('array');
  });
});
