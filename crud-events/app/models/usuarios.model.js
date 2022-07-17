module.exports = (sequelize, Sequelize) => {
    const usuarios = sequelize.define('usuarios', {
        email: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING,
        },
    })
}