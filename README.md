# WDIO Jasmine Reporter Plugin

This wdio plugin was created based on [this][0].

It was tested on Webdriverio v6 and v7.

## Installation

Firstly install in your devdependency

```bash
npm install @espekkaya/wdio-jasmine-reporter --save-dev
```

## Configuration

Your wdio.conf.js file should look like this:

```js
import JasmineReporter from '@espekkaya/wdio-jasmine-reporter';

exports.config = {
    // ...
    reporters: [
        JasmineReporter
    ],
    // ...
};
```

----

For more information on WebdriverIO see the [homepage][1].

[0]: https://github.com/andrewkeig/wdio-cucumber-reporter
[1]: http://webdriver.io