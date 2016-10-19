#Component Name

[![Build Status](https://travis-ci.org/mjbp/storm-component-boilerplate.svg?branch=master)](https://travis-ci.org/mjbp/storm-component-boilerplate)
[![codecov.io](http://codecov.io/github/mjbp/storm-component-boilerplate/coverage.svg?branch=master)](http://codecov.io/github/mjbp/storm-component-boilerplate?branch=master)
[![npm version](https://badge.fury.io/js/storm-component-boilerplate.svg)](https://badge.fury.io/js/storm-component-boilerplate)

One line summary

##Usage
HTML
```
<div class="js-boilerplate"></div>
```

JS
```
npm i -S storm-component-boilerplate
```
either using es6 import
```
import Boilerplate from 'storm-component-boilerplate';

Boilerplate.init('.js-selector');
```
aynchronous browser loading
```
import Load from 'storm-script-loader.js';

Load('/content/js/async/storm-component-boilerplate.js')
    .then(() => {
        StormComponentBoilerplate.init('.js-component-boilerplate');
    });
```
or es5 commonjs (legacy)
```
var Boilerplate = require('storm-component-boilerplate');

Boilerplate.init('.js-selector');
```

##Options
```
    {
        delay: 200,
        callback: null
    }
```

e.g.
```
Boilerplate.init('.js-selector', {
    callback(){
        console.log(this);
    }
});
```

##API
####`Boilerplate.init(selector, opts)`
Initialise the module with a DOM selector and  options object


`Boilerplate.handleClick()`
Trigger click event handler


##Tests
```
npm run test
```

##License
MIT