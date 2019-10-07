module.exports = (sequelize, Sequelize) => {
    var Team = sequelize.define('team', {
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },

        }, {
            createdAt: false,
            updatedAt: false,
        }

    );

    return Team;

}