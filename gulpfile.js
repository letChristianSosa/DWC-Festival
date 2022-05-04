const { src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");

const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const avif = require("gulp-avif");

function css(done) {
  src("src/scss/**/*.scss") // Identificar el archivo .scss a compilar
    .pipe(plumber())
    .pipe(sass()) // Compila el archivo
    .pipe(dest("build/css")); // Almacenarlo
  done();
}

function imageMin(done) {
  src("src/img/**/*.{png,jpg}")
    .pipe(cache(imagemin({ optimizationLevel: 3 })))
    .pipe(dest("build/img"));
  done();
}

function webpVersion(done) {
  src("src/img/**/*.{png,jpg}")
    .pipe(webp({ quality: 50 }))
    .pipe(dest("build/img"));
  done(); 
}

function avifVersion(done) {
  src("src/img/**/*.{png,jpg}")
    .pipe(avif({ quality: 50 }))
    .pipe(dest("build/img"));
  done();
}

function javascript(done) {
  src("src/js/**/*.js").pipe(dest("build/js"));
  done();
}

function dev(done) {
  watch("src/scss/**/*.scss", css);
  watch("src/js/**/*.js", javascript);
  done();
}

exports.css = css;
exports.imageMin = imageMin;
exports.webpVersion = webpVersion;
exports.avifVersion = avifVersion;
exports.javascript = javascript;
exports.dev = parallel(imageMin, webpVersion, avifVersion, dev);
