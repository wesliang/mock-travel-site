var gulp = require('gulp'),
postcss = require('gulp-postcss'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
autoprefixer = require('autoprefixer'),
mixins = require('postcss-mixins'),
cssImport = require('postcss-import');

//same as html but task for css
gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer])) //expects an array of postcss plugins
    .on('error', function(errorInfo) {
      //logs the error by console logging, then sending an 'end' message to gulp to prevent shutdown and continue watch
      this.emit('end');
      console.log(errorInfo.toString());
    })
    .pipe(gulp.dest('./app/temp/styles')); //we return because its asynchronous, so we make sure its aware
});
