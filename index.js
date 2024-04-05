const functions = require('@google-cloud/functions-framework');

var memjs = require('memjs');
var client = memjs.Client.create("10.182.48.5:11211");


/**
 * HTTP Cloud Function that counts how many times
 * it is executed within a specific instance.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
functions.http('seanfunctjs', (req, res) => {

  client.set('hello', 'world', {expires:600}, function(err, val) {
    console.log('setting cachecache err.message: ', err.message)
    console.log('setting cachecache value to: ', val)
  });

  client.get('hello', function(err, val) { 
    console.log('getting cachecache erro.message: ', err.message); 
    console.log('getting cachecache value: ', val); 
  })

  // Note: the total function invocation count across
  // all instances may not be equal to this value!
  res.send('Path: ' + req.path + ", Method: " + req.method);

});
