//====
// This file exports the reporter function that takes in raw JSHint data and
// lets you manipulate it.
// This particular reporter writes an array errors: [{file: f, line: l, msg: m}]
// to STDOUT, which is then read by the parent process in "jshinter.js".
//====
var fs = require("fs");
var utils = require("./utils");
module.exports = {
	reporter: function(res){
		var result = {errors: []};
		if(res.length){
			for(var i = 0; i < res.length; i++){
				var file = res[i].file;
				var err = res[i].error;
				var line = err.line;
				var msg = err.reason;
				result.errors.push(utils.createErrorMessage(file, line, msg));
			}
		}
		process.stdout.write(JSON.stringify(result));
	}
}