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

if you want to get aggregate result and save result into a json file;

```js
import JasmineReporter from '@espekkaya/wdio-jasmine-reporter';

exports.config = {
    // ...
    reporters: [
        [JasmineReporter, {
            aggregateResultPah: './', // save json file path
            isResetResult: false | true, // do not reset values from json file (default: true)
        }],
    ],
    // ...
};
```

Example of json file;

```json
{"TestStatus":{"PASSED":0,"FAILED":0,"SKIPPED":6}}
```

----

For more information on WebdriverIO see the [homepage][1].

[0]: https://github.com/andrewkeig/wdio-cucumber-reporter
[1]: http://webdriver.io