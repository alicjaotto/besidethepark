axis         = require 'axis'
rupture      = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
css_pipeline = require 'css-pipeline'
handlebars   = require 'handlebars'
browserify = require 'roots-browserify'
babelify = require 'babelify'


module.exports =
  ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf']

  extensions: [
    css_pipeline(files: 'assets/css/*.styl'),
    browserify(
      files: "assets/js/main.js",
      out: 'js/main.js',
      sourceMap: true,
      transforms: [
        babelify.configure(
          presets: ['es2015']
        )
      ]
    ),

  ]

  stylus:
    use: [axis(), rupture(), autoprefixer()]
    sourcemap: true

  'coffee-script':
    sourcemap: true

  jade:
      pretty: true
