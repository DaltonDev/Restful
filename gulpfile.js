//Using gulp to auto restart server when making changes
//Initialize Nodemon
var gulp = require('gulp');
  nodemon = require('gulp-nodemon');
//Tell gulp what to listen after
gulp.task('default', function(){
  nodemon({
    script: 'app.js',
    ext: 'js',
    env: {
      PORT:8000
    },
    ignore: ['./node_modules/**']
  })
//When server restarts after changes has been made, print restarting to console
  .on('restart', function(){
    console.log('Restarting');
  });
});
