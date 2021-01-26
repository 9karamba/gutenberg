const { src, dest, series } = require('gulp');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const browserify = require('browserify');
const source  = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const merge = require('merge-stream');
const glob = require('glob');
const path = require('path');

function scripts() {
	let files = glob.sync('./assets/js/*.js');
	return merge(files.map(function(file) {
		return browserify({
			entries: file,
			debug: true
		})
			.transform('babelify', {
				presets: ['@babel/env'],
				plugins: ['@babel/transform-runtime']
			})
			.bundle()
			.pipe(source(path.basename(file, '.js') + ".js"))
			.pipe(buffer())
			.pipe(uglify())
			.pipe(dest('build/'))
	}));
}

exports.scripts = scripts;

function styles() {
	return src('assets/sass/*.sass')
		.pipe(sass())
		.pipe(autoprefixer({ grid: true }))
		.pipe(cleancss( { level: { 1: { specialComments: 0 } } } ))
		.pipe(dest('build/'))
}

exports.styles = styles;

exports.build = series(styles, scripts);
