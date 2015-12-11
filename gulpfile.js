var gulp = require('gulp')
    , plumber = require('gulp-plumber')
    , build = require('gulp-gh-pages');

gulp.task('copy', function () {
  gulp.src('./source/copy/**/*').pipe(gulp.dest('./build/'));
});

gulp.task('build', ['copy'], function () {
  console.log('deploying');
  return gulp.src('build/**')
    .pipe(plumber())
    .pipe(build({
      branch:     'gh-pages',
      cacheDir:   'gh-cache',
      remoteUrl:  'git@github.com:SilentImp/stamps.git'
    }).on('error', function(){
      console.log('error', arguments);
    }));
});

gulp.task('default', ['build']);
