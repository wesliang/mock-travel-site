var gulp = require('gulp'), //store the node_modules gulp into this variable here
watch = require('gulp-watch'),
browserSync = require('browser-sync').create(); //can import particular methods

//this task is for watching files, thus browser sync should be here for auto-refreshing
gulp.task('watch', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function() {
    browserSync.reload();
  }); //

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });
});

gulp.task('cssInject', ['styles'], function() { //note that the array here are dependency tasks that complete before function is ran
  return gulp.src('./app/temp/styles/styles.css') //postcss will complete before cssInject starts, like a callback
    .pipe(browserSync.stream());
});
