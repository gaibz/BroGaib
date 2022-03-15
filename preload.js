const Mousetrap = require('mousetrap')
const sqlite3 = require('sqlite3').verbose();
let keymaps = require("./lib/keymaps")

/**
 * Just closure to prevent public attribution
 */
function initKeyMaps() {


    // if(!db.valid('keymaps')) {
    //     db.createTable('keymaps', (succ, msg) => {
    //         if(succ) {
    //             db.insertTableContent('keymaps', keymaps)
    //         }
    //         else {
    //             console.log('An error has occured. ' + msg)
    //         }
    //     })
    // }
    // else {
    //     db.getAll('keymaps', (succ, data) => {
    //         keymaps = data
    //     })
    // }



    keymaps.forEach((keymap) => {
        Mousetrap.bind(keymap.shortcut, () => {
            let command = keymap.command
            console.log({command})
        })
    })

    Mousetrap.bind(['command+.', 'ctrl+.'], () => {
        // register key binding
        console.log("Key Binding Setting")
    });
}


initKeyMaps()
