const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
    await queryInterface.createTable('keymaps', {
        command: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        shortcut: {
            type: Sequelize.STRING,
            allowNull: false
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });
}

async function down({ context: queryInterface }) {
    await queryInterface.dropTable('keymaps');
}

module.exports = { up, down };