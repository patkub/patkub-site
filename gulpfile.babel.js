// create require() method
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const gulp = require('gulp');
import { deleteSync } from "del";
const ordered = require('ordered-read-streams');

// process css
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');

// process html
const htmlmin = require('gulp-html-minifier-terser');

// static asset revisioning by appending content hash to filenames
import rev from 'gulp-rev';
import revRewrite from 'gulp-rev-rewrite';

/**
 * Clean dist
 */
gulp.task('clean', (done) => {
    deleteSync(['dist/**'], { force: true });
    done();
});

/**
 * Minify CSS
 */
gulp.task('pack-css', () => {
    return gulp.src([
        // main css
        'src/assets/scss/main.scss'
    ])
        // compile sass to css
        .pipe(sass({ outputStyle: 'compressed' }))
        // remove unused css
        .pipe(purgecss({
            content: [
                'src/**/*.html',
                // 'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
            ]
        }))
        // add vendor prefixes to rules by Can I Use
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('dist/assets/css'));
});

/**
 * Minify HTML
 */
gulp.task('pack-html', () => {
    return ordered(
        gulp.src("src/index.html")
            .pipe(htmlmin({ collapseWhitespace: true }))
            .pipe(gulp.dest('dist/')),
        gulp.src("src/404.html")
            .pipe(htmlmin({ collapseWhitespace: true }))
            .pipe(gulp.dest('dist/')),
    );
});

/**
 * Copy assets
 */
gulp.task('copy-assets', () => {
    return ordered(
        gulp.src("src/robots.txt")
            .pipe(gulp.dest("dist/")),
        gulp.src(["src/assets/img/**"], {
            encoding: false
        })
            .pipe(gulp.dest("dist/assets/img/"))
    );
});

/**
 * Version and rewrite assets by appending content hash to filenames
 * Allows for automated cache busting
 */
function revision() {
    return gulp.src('dist/**/*.css')
        .pipe(rev())
        .pipe(gulp.src('dist/**/*.html'))
        .pipe(revRewrite())
        .pipe(gulp.dest('dist'));
}

/**
 * Run everything
 */
gulp.task('default', gulp.series('clean', 'pack-css', 'pack-html', 'copy-assets', revision));
