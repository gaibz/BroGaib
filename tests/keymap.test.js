const keymaps = require("../lib/keymaps")

test('keymaps structure', () => {
    keymaps.forEach((keymap) => {
        expect(typeof keymap.command).toBe("string")
        expect(typeof keymap.shortcut).toBe("string")
        expect(typeof keymap.title).toBe("string")
        expect(typeof keymap.description).toBe("string")
    })
})