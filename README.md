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

###es6 import
```
import Boilerplate from 'storm-component-boilerplate';

Boilerplate.init('.js-selector');

```

####Asynchronous browser loading
```
import Load from 'storm-script-loader.js';

Load('/content/js/async/storm-component-boilerplate.js')
    .then(() => {
        StormComponentBoilerplate.init('.js-component-boilerplate');
    });

```

###es5 commonjs
```
var Boilerplate = require('storm-component-boilerplate');

Boilerplate.init('.js-selector');

```

###Options
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

##Tests
```
npm run test
```

##License
MIT