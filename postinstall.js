const copydir = require('copy-dir')
const fs = require('fs')

let dirs = [
    './public',
    './public/vendor'
]

dirs.forEach((dir) => {
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, {recursive : true})
    }
})

copydir.sync('./node_modules/metro4-dist', './public/vendor/metro4', {
    utimes: true,  // keep add time and modify time
    mode: true,    // keep file mode
    cover: true    // cover file when exists, default is true
});