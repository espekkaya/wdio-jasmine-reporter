# WDIO Cucumber Reporter Plugin

This wdio plugin was created based on [this][0].

A WebdriverIO plugin to report in cucumber style.

It was tested on Webdriverio v6 and v7.

## Installation

Firstly install in your devdependency

```bash
npm install @espekkaya/wdio-cucumber-reporter --save-dev
```

## Configuration

Your wdio.conf.js file should look like this:

```js
import CucumberReporter from '@espekkaya/wdio-cucumber-reporter';

exports.config = {
    // ...
    reporters: [
        CucumberReporter
    ],
    // ...
};
```

----

For more information on WebdriverIO see the [homepage][1].

[0]: https://github.com/andrewkeig/wdio-cucumber-reporter
[1]: http://webdriver.io