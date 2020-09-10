const util = require('util')
const exec = util.promisify(require('child_process').exec)
const path = require('path')
const fs = require('fs')
const log = fs.createWriteStream(path.join(__dirname, 'log.txt'), { flags: 'a+' })

function main (args) {
  log.write(new Date().toLocaleTimeString() + ' --- ')
  const run = `npx stylelint ${args.slice(2).join(' ').replace(/\\/g, '/')}`
  log.setEncoding = 'utf8'
  exec(run)
    .then(() => {
      log.write(`${run} done\n`)
      log.end()
    })
    .catch(e => {
      log.write(`${run}\n${e.message}\n`)
      log.end()
    })
}

main(process.argv)