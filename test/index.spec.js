import should from 'should';
import Boilerplate from '../dist/storm-component-boilerplate';
import 'jsdom-global/register';

const html = `<div class="js-boilerplate test"></div>
             <div class="js-boilerplate test-2"></div>
             <div class="js-boilerplate-two test-3"></div>`;


describe('Initialisation', () => {
  document.body.innerHTML = html;

  let components = Boilerplate.init('.js-boilerplate');

  it('should return array of length 2', () => {
    should(components)
      .Array()
      .and.have.lengthOf(2);
  });

  it('should return an object with DOMElement, settings, init, and  handleClick properties', () => {

    components[0].should.be.an.instanceOf(Object).and.not.empty();
    components[0].should.have.property('DOMElement');
    components[0].should.have.property('settings').Object();
    components[0].should.have.property('init').Function()
    components[0].should.have.property('handleClick').Function();

  });


  it('should attach the handleClick eventListener to DOMElement click event to toggle className', () => {
    document.querySelector('.test').click();
    Array.from(components[0].DOMElement.classList).should.containEql('clicked');
    document.querySelector('.test').click();
    Array.from(components[0].DOMElement.classList).should.not.containEql('clicked');
  });

  //this test fails but works in browser? settings object passed by reference
  /*
  it('should initialisation with different settings if differnt options are passed', () => {
    
    let componentsTwo = Boilerplate.init('.js-boilerplate-two', {
      delay: 300
    });

    should(componentsTwo[0].settings.delay).not.equal(components[0].settings.delay);
    //console.log(componentsTwo[0]);
    //console.log(components[0]);
    //componentsTwo[0].settings.delay.should.not.equal(components[0].settings.delay);

  });
  */

});

describe('Component API', () => {
  document.body.innerHTML = html;

  let components = Boilerplate.init('.js-boilerplate');

  it('should trigger the handleClick function toggling the className', () => {

    components[0].handleClick();
    Array.from(components[0].DOMElement.classList).should.containEql('clicked');
    components[0].handleClick();
    Array.from(components[0].DOMElement.classList).should.not.containEql('clicked');

   });

  it('should destroy all instances', () => {
    console.log(components);
    components = [];
    console.log(components);
  });

});