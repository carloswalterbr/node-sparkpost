'use strict';

var key = 'YOURAPIKEY'
  , SDK = require('../../index')({ key: key })
  , transmission = new SDK.transmission();

transmission
  .setReturnPath('return@example.com')
  .setFrom('From Envelope <from@example.com>')
  .useRecipientList('Example List')
  .useStoredTemplate('my-template')
  .send(function(err, res) {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
      console.log('Congrats you can use our SDK!');
    }
  });