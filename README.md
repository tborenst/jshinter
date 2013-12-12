js-hinter
======
This is a JS linter (which uses [JSHint](http://www.jshint.com/)) created for the Carnegie Mellon University course *'15-237: Developing Cross Platform Web Applications'*.

To download and use, simply `sudo npm install jshinter`.

* MIT license.
* Copyright Carnegie Mellon University 2013.

## Difference to JSHint
JSHinter is simply a wrapper around JSHint which lets you call it programmatically from Node, instead of using it strictly as a command line tool.

## Functionality
Currently the linter is configued to use the default JSHint options. A way to alter the configuration of the linter is coming soon.

The jshinter.js module currently exposes two asynchronous functions: `lintJsFile(path, callback)` and `lintJsText(text, callback)`. In both cases, the callback should take two arguments - `(err, result)`, where `result` is of the form `{errors: [{file: string, line: number, msg: string}]}`.

## Why sudo?
Depending on your node settings, you may have to install this module using `sudo npm install jshinter`. The reason is that jshinter requires the [JSHINT module](https://npmjs.org/package/jshint) as a *global* dependency. Without this global dependency, some users run into problems with the JSHINT command not being found.

## Coming Soon
* Configurable JSHint options