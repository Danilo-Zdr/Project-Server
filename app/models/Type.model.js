module.exports = (sequelize, Sequelize) => {
    var Type = sequelize.define('type', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        createdAt: false,
        updatedAt: false,
    });

    return Type;

}