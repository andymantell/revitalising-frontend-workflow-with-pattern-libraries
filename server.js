var express = require('express');
var app = express();
var path = require('path');

require('./build').then(function() {
  app.use(express.static(path.join(__dirname, 'dist')));

  app.listen(process.env.PORT || 3000);
  console.log('Listening on port ' + (process.env.PORT || 3000));
});

