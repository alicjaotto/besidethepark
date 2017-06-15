(function() {
  var autoprefixer, axis, css_pipeline, handlebars, js_pipeline, rupture;

  axis = require('axis');

  rupture = require('rupture');

  autoprefixer = require('autoprefixer-stylus');

  js_pipeline = require('js-pipeline');

  css_pipeline = require('css-pipeline');

  handlebars = require('handlebars');

  module.exports = {
    ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf'],
    extensions: [
      js_pipeline({
        files: 'assets/js/*.coffee'
      }), css_pipeline({
        files: 'assets/css/*.styl'
      })
    ],
    stylus: {
      use: [axis(), rupture(), autoprefixer()],
      sourcemap: true
    },
    'coffee-script': {
      sourcemap: true
    },
    jade: {
      pretty: true
    }
  };

}).call(this);

 //# sourceMappingURL=app.js.map