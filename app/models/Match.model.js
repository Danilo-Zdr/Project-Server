module.exports = (sequelize, Sequelize) => {
 var Match = sequelize.define('match', {
  team1_id: {
   type: Sequelize.INTEGER,
   allowNull: false
   },
  team2_id: {
   type: Sequelize.INTEGER,
   allowNull: false
   },
  type_id: {
   type: Sequelize.INTEGER,
   allowNull: false
   },
  start_time: {
   type: Sequelize.DATE,
   allowNull: false
   },
  end_time: {
   type: Sequelize.DATE,
   allowNull: false
   }
  });

return Match;
}
