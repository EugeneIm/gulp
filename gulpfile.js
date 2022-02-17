//Imports for Gulp
const { src, dest, watch, series } = require('gulp')

//Module imports
const htmlmin = require('gulp-htmlmin')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps')

//Hello task

function watchTask(){
    browserSync.init({
        server:{
            baseDir:'./dev'
        }
    });
    watch('./dev/scss/*/**', sassTask);
    watch('./dev/scripts/**/*/*.js').on('change' ,browserSync.reload);
    watch('./dev/scripts/**/*/*.html').on('change' ,browserSync.reload);
}

function sassTask(){
    return src('./dev/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./dev/styles'))
    .pipe(browserSync.stream());
}

function helloTask(done){
    console.log("gulp test run")
    done();
}

//HTML Task
function htmlTask(){
    return src('./dev/**/*.html')
    .pipe(htmlmin({collapseWhitespace:true}))
    .pipe(dest('build'))
}


//task exports
exports.hello = helloTask;
exports.html = htmlTask;
exports.sass = sassTask;

//default tasks
exports.default = series(sassTask, watchTask)