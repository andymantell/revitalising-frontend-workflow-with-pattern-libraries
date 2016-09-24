var fs = require('fs');
var path = require('path');
var markpress = require('markpress');

var options = {
  layout: 'horizontal',
  theme: 'dark',
  autoSplit: false,
  silent: false,
  sanitize: false
}

markpress(path.join(process.cwd(), 'slides.md'), options)
  .then(function(content) {
    if(!fs.existsSync('dist')) {
      fs.mkdirSync('dist');
    }
    fs.writeFileSync('dist/index.html', content);
  })
  .catch(function(e) {
    console.log(e);
  });
