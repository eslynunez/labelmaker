'use strict'

const express = require('express');
const app = module.exports = express();

// set the public image drectory
app.use(express.static(__dirname+'/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/',  (req, res) => {
  // static json file exported from a google form containing artist info.
  let artistInfo = require('./artistinfo.json');

  // use res.render to load up an ejs view file
  res.render('label', {'artistInfo': artistInfo});
});

// set the port with a log.
app.listen(3000);
console.log('3000 is the magic port');