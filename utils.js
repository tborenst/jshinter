module.exports = {
	createErrorMessage: function(file, line, msg){
        var err_msg = {file: file, line: line, msg: msg};
        return err_msg;
    }
}