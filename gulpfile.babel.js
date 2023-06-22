import gulp from 'gulp';
import browserSyncLib from 'browser-sync';
import htmlmin from 'gulp-htmlmin';
import fileinclude from 'gulp-file-include';
import cleanCSS from 'gulp-clean-css';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import webpack from 'webpack-stream';
import webp from 'gulp-webp';
import rename from 'gulp-rename';
import named from 'vinyl-named';

const browserSync = browserSyncLib.create();

gulp.task('build-js', () => {
	return gulp
		.src('./src/js/**.js')
		.pipe(named())
		.pipe(
			webpack({
				mode: 'development',
				output: {
					filename: '[name].js',
				},
				watch: false,
				// devtool: 'source-map',
				module: {
					rules: [
						{
							test: /\.m?js$/,
							exclude: /(node_modules|bower_components)/,
							use: {
								loader: 'babel-loader',
								options: {
									presets: [
										[
											'@babel/preset-env',
											{
												debug: true,
												corejs: 3,
												useBuiltIns: 'usage',
											},
										],
									],
								},
							},
						},
					],
				},
			})
		)
		.pipe(gulp.dest('./dist/js'))
		.on('end', browserSync.reload);
});

const sass = gulpSass(dartSass);

gulp.task('styles', () => {
	return gulp
		.src('src/sass/**.sass')
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(
			rename({
				prefix: '',
				suffix: '.min',
			})
		)
		.pipe(
			autoprefixer({
				overrideBrowserslist: ['defaults'],
				cascade: false,
			})
		)
		.pipe(
			cleanCSS({
				compatibility: 'ie8',
			})
		)
		.pipe(gulp.dest('./dist/css'))
		.on('end', browserSync.reload);
});

gulp.task('html', () => {
	return gulp
		.src('src/*.html')
		.pipe(
			fileinclude({
				prefix: '@@',
				basepath: '@file',
			})
		)
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest('dist'))
		.on('end', browserSync.reload);
});

gulp.task('img', () => {
	return gulp
		.src('src/img/**')
		.pipe(webp({ quality: 70 }))
		.pipe(gulp.dest('./dist/img'))
		.on('end', browserSync.reload);
});

gulp.task('watch', () => {
	browserSync.init({
		server: {
			baseDir: './dist',
		},
	});
	gulp.watch('src/js/**/*.js', gulp.parallel('build-js'));
	gulp.watch('src/**/*.html', gulp.parallel('html'));
	gulp.watch('src/sass/**/*.sass', gulp.parallel('styles'));
	gulp.watch('src/img/**', gulp.parallel('img'));
});

gulp.task('default', gulp.parallel('watch', 'build-js', 'html', 'styles', 'img'));
