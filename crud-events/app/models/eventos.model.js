module.exports = (sequelize, Sequelize) => {
    const eventos = sequelize.define('eventos', {
        nome: {
            type: Sequelize.STRING,
        },
        descricao: {
            type: Sequelize.STRING,
        },
        link: {
            type: Sequelize.STRING,
        }
    });
    return eventos;
}