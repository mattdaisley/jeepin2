var 
  PythonShell          = require('python-shell'),
  path                 = require('path'),
  senseHat;
  
/**
 * ### Users API Methods
 *
 * **See:** [API Methods](index.js.html#api%20methods)
 */

var rootDir = path.resolve(__dirname, '../senseHat');

function runScript(scriptName, args) {
  return new Promise(function (resolve, reject) {
  var options = { 
    mode: 'json', 
    scriptPath: rootDir + '/sense',
    args: args
  }

  var shell = new PythonShell(scriptName, options, function (err, results) {
    if ( err ) {
      reject(err);
      return;
    }
  });

  shell.on('message', function (message) {
    resolve(message.result);
  });

  shell.end(function (err) {
    if ( err ) {
      // var error = JSON.parse(err);
      // console.log('error with python script');
      // console.log(err);
      // throw err;
    }
  });

  });
}

function pollScript(scriptName, args, onResult, onError) {
  var options = { 
    mode: 'json', 
    scriptPath: rootDir + '/sense',
    args: args
  }

  var shell = new PythonShell(scriptName, options, function (err, results) {
    if ( err ) {
      onError(err);
      return;
    }
  });

  shell.on('message', function (message) {
    onResult(message.result);
  });

  shell.end(function (err) {
    if ( err ) {
      // var error = JSON.parse(err);
      // console.log('error with python script');
      // console.log(err);
      onError(err);
      return;
    }
  });
}

senseHat = {

  getOrientation: function getOrientation(args) {
    return runScript('get_orientation.py', args);
  },

  pollOrientation: function pollOrientation(args, onResult, onError) {
    return pollScript('get_orientation.py', args, onResult, onError);
  }

};

module.exports = senseHat;
