// have to create variables for each node module we want to use
var gulp = require('gulp'), //store the node_modules gulp into this variable here
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
autoprefixer = require('autoprefixer'),
cssImport = require('postcss-import');

gulp.task('default', function() { //name of task is default, .task() is a preset gulp function to define new tasks
  console.log('Watching files now . . . ');
  gulp.start('watch');
});

gulp.task('html', function() { //name of html task that prints to console, but won't be run with just 'gulp' because it's not the default task
  console.log('html was changed!');
});

//same as html but task for css
gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer])) //expects an array of postcss plugins
    .pipe(gulp.dest('./app/temp/styles')); //we return because its asynchronous, so we make sure its aware
});

gulp.task('watch', function() {
  watch('./app/index.html', function() {
    gulp.start('html');
  }); //

  watch('./app/assets/styles/**/*.css', function() {
    console.log('css was changed!');
    gulp.start('styles');
  });
});
