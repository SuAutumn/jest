const path = require('path')
const fs = require('fs')
const { series, src, dest, parallel, watch } = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const clean = require('gulp-clean')
const concat = require('gulp-concat')
// add version hash code
const rev = require('gulp-rev')
const sass = require('gulp-sass')
const insert = require('gulp-insert')
const autoprefixer = require('gulp-autoprefixer')
const { EOL } = require('os')

function scss2wxss () {
  return src(['./**/*.scss', '!./node_modules/**/*', '!./assets/*.scss'])
    .pipe(insert.transform((content, file) => {
      const filePath = (path.relative(path.dirname(file.path), path.join(__dirname, './assets/var.scss')))
      return `@import "${filePath.replace(/\\/g, '/')}";${EOL}${content}`
    }))
    .pipe(sass({
      outputStyle: 'compact',
    }).on('error', sass.logError))
    .pipe(
      insert.transform(function (content, file) {
        const filePath = (path.relative(path.dirname(file.path), path.join(__dirname, 'common.wxss')))
        return `@import "${filePath.replace(/\\/g, '/')}";${EOL}${content}`
      }),
    )
    .pipe(rename({ extname: '.wxss' }))
    .pipe(dest('.'))
}


exports.default = series(scss2wxss)
exports['watch:scss2wxss'] = function () {
  watch('./**/*.scss', series(scss2wxss))
}
