var cp = require("child_process");
var fs = require("fs");
var pathModule = require("path");

//====
// Executes the "jshint" command and receives error data from the JSHint
// reporter.
// Callback should take (err, result), where result is in the form of
// {errors: [{file: file, line: line, msg: msg}, ...]}
//====
var lintJsFile = function(path, callback){
	var child = cp.exec("jshint --reporter " + pathModule.join(__dirname, "reporter.js") + " " + path, 
						function(error, stdout, stderr){
		if(stdout !== ""){
			callback(null, JSON.parse(stdout));
		} else if(error){
			callback(error, null);
		} else if(stderr){
			 callback(JSON.parse(stderr), null);
		}
	});
}

//====
// Creates a working directory if one doesn't exists, and then creates a temp
// file to write the text in to, and then call lintJsFile() on the temp file.
//====
var lintJsText = function(text, callback){
	fs.exists(pathModule.join(__dirname ,"workspace"), function(dirExists){
		// function to make temp file and lint it
		var i = 0;
		var writeFile = function(){
			var path = pathModule.join(__dirname, "workspace", "temp" + i + ".js");
			i += 1;
			fs.exists(path, function(fileExists){
				if(fileExists){ 
					writeFile();
				} else {
					fs.writeFile(path, text, function(error){
						if(error) {
							callback(error, null);
						} else {
							lintJsFile(path, function(err, data){
								callback(err, data);
								fs.unlink(path); // delete temp file
							});
						}
					});
				}
			});
		}
		// decide whether to make workspace directory or not
		if(dirExists) {
			writeFile();
		} else {
			fs.mkdir(pathModule.join(__dirname, "workspace"), function(error){
				if(error){
					callback(error, null);
				} else {
					writeFile();
				}
			});	
		}
	});
}

module.exports = {
	lintJsFile: lintJsFile,
	lintJsText: lintJsText
}