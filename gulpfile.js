const gulp = require("gulp");
// const sass = require("gulp-sass");
const sass = require("gulp-dart-sass");
const concat = require("gulp-concat");
const pug = require('gulp-pug');
const browserSync = require("browser-sync").create();

var twig = require('gulp-twig');

// sass.compiler = require("node-sass");

const stylesDev = "./resources/sass/**/*.sass",
    stylesAll = [
        // './node_modules/bootstrap/dist/css/bootstrap.min.css',
        // "./node_modules/animate.css/animate.min.css",
        // "./node_modules/swiper/swiper-bundle.css",
        "./resources/sass/**/*.sass",
    ],
    scriptsDev = "./resources/js/**/*.js",
    scriptsAll = [
        // "./node_modules/jquery/dist/jquery.min.js",
        "./node_modules/@popperjs/core/dist/umd/popper.min.js",
        './node_modules/bootstrap/dist/js/bootstrap.min.js',
        // "./node_modules/swiper/swiper-bundle.min.js",
        // "./node_modules/slick-carousel/slick/slick.min.js",
        // "./node_modules/typed.js/lib/typed.min.js",
        // "./node_modules/wow.js/dist/wow.min.js",
        // "./node_modules/jquery.maskedinput/src/jquery.maskedinput.js",
        // "./node_modules/ion-rangeslider/js/ion.rangeSlider.min.js",
        // './node_modules/jquery.marquee/jquery.marquee.min.js',
        // "./node_modules/parallax-js/dist/parallax.min.js",
        // "./node_modules/simple-parallax-js/dist/simpleParallax.js",
        "./resources/js/**/*.js",
    ],
    stylesProdDir = "./docs/css/",
    scriptsProdDir = "./docs/js/";

gulp.task("browser-sync", function (done) {
    browserSync.init({
        server: {
            baseDir: "./docs/",
            // directory: true,
            index: "index.html",
        },
        notify: false,
    });

    browserSync.watch("./docs/**.html").on("change", browserSync.reload);

    done();
});

gulp.task("sass", function (done) {
    return gulp
        .src(stylesAll)
        .pipe(sass())
        .pipe(concat("styles.css"))
        .pipe(gulp.dest(stylesProdDir))
        .pipe(browserSync.reload({ stream: true }));

    done();
});

gulp.task("js", function (done) {
    return gulp
        .src(scriptsAll)
        .pipe(concat("scripts.js"))
        .pipe(gulp.dest(scriptsProdDir))
        .pipe(browserSync.reload({ stream: true }));

    done();
});

gulp.task("html", function (done) {
    return gulp
        .src('./resources/twig/pages/*.twig')
        .pipe(twig())
        .pipe(gulp.dest('./docs/'))
        .pipe(browserSync.reload({ stream: true }));

    done();
});

gulp.task("bootstrap", function (done) {
    return gulp
        .src(['./resources/bootstrap/**/*.sass', './resources/bootstrap/**/*.scss'])
        .pipe(sass())
        .pipe(concat("bootstrap.css"))
        .pipe(gulp.dest(stylesProdDir))
        .pipe(browserSync.reload({ stream: true }));

    done();
});

gulp.task(
    "watch",
    gulp.series("html", "sass", "js", "browser-sync", function (done) {
        gulp.watch(
            [
                "./resources/sass/**/*.sass",
            ],
            gulp.series("sass")
        );

        gulp.watch(
            [
                "./resources/twig/**/*.twig",
            ],
            gulp.series("html")
        );

        gulp.watch(
            [
                "./resources/js/**/*.js",
            ],
            gulp.series("js")
        );

        done();
    })
);
