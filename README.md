js-hinter
======
This is a JS linter (which uses [JSHint](http://www.jshint.com/)) created for the Carnegie Mellon University course *'15-237: Developing Cross Platform Web Applications'*.

* MIT license.
* Copyright Carnegie Mellon University 2013.

## Functionality
Currently the linter is configued to use the default JSHint options. A way to alter the configuration of the linter is coming soon.

The jshinter.js module currently exposes two asynchronous functions: `lintJsFile(path, callback)` and `lintJsText(text, callback)`. In both cases, the callback should take two arguments - `(err, result)`, where `result` is of the form `{errors: [{file: string, line: number, msg: string}]}`.

## Coming Soon
* Configurable JSHint options