var gulp = require('gulp'), //store the node_modules gulp into this variable here
watch = require('gulp-watch');

gulp.task('default', function() { //name of task is default, .task() is a preset gulp function to define new tasks
  console.log('created gulp task');
});

gulp.task('html', function() { //name of html task that prints to console, but won't be run with just 'gulp' because it's not the default task
  console.log('imagine html being made');
});

//same as html but task for css
gulp.task('styles', function() {
  console.log('imagine sass running here');
});

gulp.task('watch', function() {
  watch('./app/index.html', function() {
    gulp.start('html');
  }); //

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });
});
