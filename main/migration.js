const { Sequelize } = require('sequelize')
const { Umzug, SequelizeStorage } = require('umzug')
const keymaps = require("~lib/keymaps")

class Migration {

    constructor(storage) {
        this.storage = storage
        this.sequelize = new Sequelize({ dialect: 'sqlite', storage: this.storage });
        this.umzug = new Umzug({
            migrations: { glob: 'migrations/*.js' },
            context: this.sequelize.getQueryInterface(),
            storage: new SequelizeStorage({ sequelize : this.sequelize }),
            logger: console,
        });
    }

    async up() {
        // Checks migrations and run them if they are not already applied. To keep
        // track of the executed migrations, a table (and sequelize model) called SequelizeMeta
        // will be automatically created (if it doesn't exist already) and parsed.
        await this.umzug.up();
    }

    async down() {
        await this.umzug.down();
    }


    /**
     * Initial Seed
     * @returns {Promise<void>}
     */
    async seedInit() {
        // load / insert keymaps
        console.log("Init Seed for Keymaps")
        keymaps.forEach((keymap) => {
            this.sequelize.query({query : "SELECT * FROM keymaps WHERE command=?", values : [keymap.command]}).then((result) => {
                if(result[0].length === 0) {
                    // not available yet, insert this command
                    this.sequelize.query({
                        query : "INSERT INTO keymaps (command, shortcut, title, description) VALUES(?,?,?,?)",
                        values : [keymap.command, keymap.shortcut, keymap.title, keymap.description]
                    }).then((res) => {
                        console.log({res})
                    })
                }
            })
        })
    }

}






module.exports = Migration