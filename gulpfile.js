const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

// Browser related plugins
const reload = browserSync.reload;

// Watch Paths
const styleWatch = './src/scss/**/*.scss';
const jsWatch = './src/js/**/*.js';
const imgWatch = './src/img/**/*.*';
const htmlWatch = './src/**/*.html'

// Source and dist files location
const imgSRC = './src/img/**/*';
const imgURL = './dist/img/';

const htmlSRC = './src/**/*.html';
const htmlURL = './dist/'

const jsSRC = './src/js/**/*.js';
const jsURL = './dist/js/';

const cssSRC = './src/css/**/*.css';
const cssURL = './dist/css/'

const srcDest = "./src"
const styleDest = "./src/css";
const jsDest = "./src/js";

// Compile sass into css & auto-inject into browser
function css() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', styleWatch])
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest(styleDest))
        .pipe(browserSync.stream());
}

// Move the javascript files into our /src/js folder
function js() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js', 'node_modules/particles.js/particles.js', jsWatch])
        .pipe(gulp.dest(jsDest))
        .pipe(browserSync.stream());
}

// Trigger Plumber
function triggerPlumber(src, url) {
    return gulp.src(src).pipe(plumber()).pipe(gulp.dest(url));
}


// Images
function images() {
    return triggerPlumber(imgSRC, imgURL);
}

function html() {
    return triggerPlumber(htmlSRC, htmlURL);
}

// Static Server + watching scss/html files
function browser_sync(done) {

    browserSync.init({
        server: srcDest
    });

    // gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
    // gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch(styleWatch, css);
    gulp.watch(htmlWatch).on('change', reload);
    done();
}

function watch_files() {
    gulp.watch(styleWatch, css);
    gulp.watch(htmlWatch).on('change', reload);
    gulp.src(htmlSRC + 'index.html').pipe(notify({
        message: 'Gulp is Watching, Happy Coding!'
    }))
}

gulp.task('css', css);
gulp.task('js', js);
gulp.task('images', images);
gulp.task('html', html);
gulp.task('serve', browser_sync);

gulp.task('default', gulp.parallel(js, browser_sync));
//gulp.task('watch', gulp.series(watch_files, browser_sync));