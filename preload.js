const Mousetrap = require('mousetrap');

let key_read_mode = false;

Mousetrap.bind(['command+.', 'ctrl+.'], () => {
    // register key binding
    console.log("Key Binding Setting")
    key_read_mode = true
});



// Register ?
